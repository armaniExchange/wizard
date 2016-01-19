################## SLB VSERVER BEGIN #########################
obj-name=virtual-server,
obj-help=Create a Virtual Server,
obj-lineage=cmroot.slb,
obj-occurences=multi,
obj-json-suffix="-list",
obj-indexing=string,
obj-module-prompt=slb vserver,
obj-disp-after=cmroot.waf.template,
obj-module-dont-display-value-in-prompt, 
obj-stats-oid=12,
config-fields:
name=long-string-rlx <mvm; object-key; range 1-127; help SLB Virtual Server Name; example-default vs1>,
ipv6-address=ipv6-address <ovi; condition name; modify-ineligible; help IPV6 address>,
ip-address=ipv4-address <ovi; condition name; help IP Address; modify-ineligible; m-exclusion ipv6-address; after-cb-dup-ip-check>,
netmask=ipv4-netmask-brief <ovi; condition ip-address; link-next-fwd acl; example-default 255.255.255.0; modify-ineligible; help IP subnet mask>,
ipv6-acl=string <obi; range 1-31; condition ipv6-address; obj-association ipv6.access-list; modify-ineligible; example-default ipv6.access-list; help ipv6 acl name; help-val ipv6 acl name>,
acl=dummy <oki; condition ip-address; example-default 0; help acl id>,
acl-id=number <mvi; range 1-199; condition acl; obj-association access-list.standard, access-list.extended; modify-ineligible; example-default 1; help acl id>,
name=string <mbi; range 1-16; condition acl; alias acl-name; obj-association ip.access-list; modify-ineligible; example-default aclname1; help Access List name; help-val IPv4 Access List Name>,
use-if-ip=flag <ok; plat-pos-list soft-ax; m-exclusion ip-address, ipv6-address; condition name; help Use Interface IP;>,
ethernet=interface <mb; plat-pos-list soft-ax; condition use-if-ip; help Ethernet interface;>,
## subcommands
description=line <mb; range 1-63; example-default A default Virtual-Server; help Create a description for VIP; help-val Description for VIP>, 
enable-disable-action=string <ov; not-allowed-in-no; allowed enable{help: "Enable Virtual Server (default)"}/disable{help: "Disable Virtual Server"}/disable-when-all-ports-down{help: "Disable Virtual Server when all member ports are down"}/disable-when-any-port-down{help: "Disable Virtual Server when any member port is down"}; default enable>,
redistribution-flagged=flag <mk; example-default 0; help Flag VIP for special redistribution handling>,
arp-disable=flag <ok; example-default 0; help Disable Respond to Virtual Server ARP request>,

template=dummy <ok; example-default 1; help Apply template to virtual server>,
policy=string-rlx <mb; range 1-63; condition template; help Policy template; obj-association slb.template.policy; example-default slb.template.policy; alias template-policy; help-val Policy template name>,
virtual-server=string <mb; condition template; help Virtual server template; range 1-63; obj-association slb.template.virtual-server; example-default slb.template.virtual-server; alias template-virtual-server; help-val Virtual server template name>,
logging=string <mb; condition template; help NAT Logging template; range 1-63; obj-association ip.nat.template.logging; alias template-logging; help-val NAT Logging template name>,
scaleout=string <obr; range 1-63; condition template; alias template-scaleout; help Scaleout template; help-val Scaleout template name>,

stats-data-action=string <ov; allowed stats-data-enable{help:"Enable statistical data collection for virtual server"}/stats-data-disable{help:"Disable statistical data collection for virtual server"}; default stats-data-enable; not-allowed-in-no;>,
extended-stats=flag <ok; example-default 0; help Enable extended statistics on virtual server>,
vrid=number <ob; range 1-31;range-in-partition 1-7; example-default 1; help Join a vrrp group; help-val Specify ha VRRP-A vrid>,
gaming-protocol-compliance=flag <ok; hide-help Enable Gaming Protocol Compliance Check>,

oper-fields:
mac=string <oper-field-name MAC_ADDRESS>,
state=string<oper-field-name STATE; allowed All Up/Functional Up/Partial Up/Down/Disb/Unkn>,
curr-conn-rate=number<oper-field-name CURR-CONN-RATE;>,
conn-rate-unit=string<oper-field-name CONN-RATE-UNIT; allowed 100ms/second>,
curr-icmp-rate=number<oper-field-name CURR-ICMP-RATE;>,
icmp-lockup-time-left=number<oper-field-name ICMP-LOCKUP-TIME-LEFT;>,
icmp-rate-over-limit-drop=number<oper-field-name ICMP-RATE-OVER-LIMIT-DROP;>,
curr-icmpv6-rate=number<oper-field-name CURR-ICMP-RATE;>,
icmpv6-lockup-time-left=number<oper-field-name ICMPV6-LOCKUP-TIME-LEFT;>,
icmpv6-rate-over-limit-drop=number<oper-field-name ICMPV6-RATE-OVER-LIMIT-DROP;>;

################## SLB VSERVER END #########################

################## SLB VPORT BEGIN #########################
obj-name=port,
obj-help=Virtual Port,
obj-lineage=cmroot.slb.virtual-server,
obj-occurences=multi,
obj-json-suffix="-list",
obj-module-prompt=vport,
obj-module-dont-display-value-in-prompt,
obj-stats-oid=3,
obj-indexing=number,
obj-key-count=2,
config-fields:
port=number <mvm; object-key; alias port-number; range 0-65534; help Port>,
protocol=string <mv; object-key; condition port-number; allowed tcp{help:"TCP LB service"}/udp{help:"UDP Port"}/others{help:"for no tcp/udp protocol, do IP load balancing"}/diameter{help:"diameter port"}/dns-tcp{help:"DNS service over TCP"}/dns-udp{help:"DNS service over UDP"}/fast-http{help:"Fast HTTP Port"}/fix{help:"FIX Port"}/ftp{help:"File Transfer Protocol Port"}/ftp-proxy{help:"ftp proxy port"}/http{help:"HTTP Port"} stats-association counter.http_vport/https{help:"HTTPS port"}/mlb{help:"Message based load balancing"}/mms{help:"Microsoft Multimedia Service Port"}/mysql{help:"mssql port"}/mssql{help:"mssql"}/radius{help:"RADIUS Port"}/rtsp{help:"Real Time Streaming Protocol Port"}/sip{help:"Session initiation protocol over UDP"}/sip-tcp{help:"Session initiation protocol over TCP"}/sips{help:"Session initiation protocol over TLS"}/smpp-tcp{help:"SMPP service over TCP"}/spdy{help:"spdy port"}/spdys{help:"spdys port"}/smtp{help:"SMTP Port"}/ssl-proxy{help:"Generic SSL proxy"}/tcp-proxy{help:"Generic TCP proxy"}/tftp{help:"TFTP Port"}; example-default tcp>,
range=number <ob; range 0-254; modify-ineligible; default 0; condition protocol; disabled others, diameter, dns-tcp, dns-udp, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, tftp, mysql, smpp-tcp, spdy, spdys, mssql; example-default 1; help Virtual Port range; help-val Virtual Port range value>,
alternate=flag <ok; condition protocol; modify-ineligible; m-exclusion range; disabled udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, ssl-proxy, tcp-proxy, tftp, mysql, mssql, smpp-tcp, spdy, spdys, fix; example-default 0; help Alternate Virtual Port; alias alternate-port>,

name=long-string-rlx <ob; range 1-127; example-default vportname; help SLB Virtual Service Name; help-val SLB Virtual Service Name>,
conn-limit=number <oby; value-not-allowed-in-no; range 1-8000000; default 8000000; help Connection Limit ; help-val Connection Limit; >,
reset=flag <ok; condition conn-limit; not-allowed-in-no; link-next-fwd no-logging; example-default 0; help Send client reset when connection number over limit>,
no-logging=flag <ok; condition conn-limit; not-allowed-in-no; example-default 1; help Do not log connection over limit event>,

alternate=flag <ok; disabled udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, ssl-proxy, tcp-proxy, tftp, mysql, mssql, smpp-tcp, spdy, spdys, fix; help Use alternate virtual port; example-default 0; help Use alternate virtual port; alias use-alternate-port>,
port=number <mb; range 0-65534; alias alternate-port-number; condition use-alternate-port; example-default 8080; help Virtual Port; help-val Port>,
alt-protocol1=string <mv; allowed http{help:"HTTP Port"}; condition alternate-port-number; cr-not-allowed-in-norm; example-default http>,
serv-sel-fail=flag <ok; condition alt-protocol1; link-next-fwd when-down; example-default 0; help Use alternate virtual port when server selection failure>,
when-down=flag <ok; condition alt-protocol1; link-next-rev serv-sel-fail; help Use alternate virtual port when down>,

alt-protocol2=string <mv; allowed tcp{help:"TCP LB service"}; condition alternate-port-number; cr-not-allowed-in-norm; example-default tcp; >,
req-fail=flag <ok; condition alt-protocol2; link-next-fwd when-down-protocol2; help Use alternate virtual port when L7 request fail>,
when-down=flag <ok; condition alt-protocol2; link-next-rev req-fail;  alias when-down-protocol2; example-default 0; help Use alternate virtual port when down>,

action=string<ov; allowed enable{help:"Enable"}/disable{help:"Disable"}; default enable; not-allowed-in-no;>,
l7-service-chain=flag <ok; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, spdy, spdys, ssl-proxy, tcp-proxy, tftp; hide-help; example-default tcp>,
def-selection-if-pref-failed=enum <ov; not-allowed-in-no; allowed def-selection-if-pref-failed{help:"Use default server selection method if prefer method failed"}/def-selection-if-pref-failed-disable{help:"Stop using default server selection method if prefer method failed"}; default def-selection-if-pref-failed; >,

ha-conn-mirror=flag <mk; disabled diameter, dns-tcp, fix, ftp-proxy, http, https, mysql, mssql, sip-tcp, sips, smpp-tcp, spdy, spdys, smtp, ssl-proxy, tcp-proxy; example-default 0; help Enable for HA Conn sync>,
skip-rev-hash=flag <ok; help Skip rev tuple hash insertion; >,
message-switching=flag <ok; help Message switching; >,
force-routing-mode=flag <ok; help Force routing mode; >,

reset-on-server-selection-fail=flag <ok; disabled udp, dns-udp, tftp; help Send client reset when server selection fails; example-default 0>,
clientip-sticky-nat=flag <ok; help Prefer to use same source NAT address for a client; example-default 0>,
extended-stats=flag <ok; help Enable extended statistics on virtual port; example-default 0>,
gslb-enable=flag <oky; plat-neg-list fireeye; disabled tcp,others,diameter,fast-http,ftp,ftp-proxy, http,https,mlb,mms,radius,rtsp,sip,sip-tcp,sips,smtp,spdy, spdys, ssl-proxy,tcp-proxy,tftp; help Enable Global Server Load Balancing; example-default 0>,
view=number <ob; range 1-31; condition gslb-enable; help Specify a GSLB View; help-val ID; example-default 1>,
snat-on-vip=flag <ok; help Enable source NAT traffic against VIP; example-default 0>,
stats-data-action=string <ov; allowed stats-data-enable{help:"Enable statistical data collection for virtual port"}/stats-data-disable{help:"Disable statistical data collection for virtual port"}; default stats-data-enable; not-allowed-in-no;>,
syn-cookie=flag <oky; disabled udp, fast-http, dns-udp, radius, sip; help Enable syn-cookie; example-default 0>,
expand=flag <ok; condition syn-cookie; disabled http, https, ssl-proxy, smtp, sip-tcp, sips, tcp-proxy, diameter, dns-tcp, mysql, mssql, fix, smpp-tcp, spdy, spdys, ftp-proxy; help expand syn-cookie with timestamp and wscale; example-default 0>,

access-list=dummy <ok;  help Apply ACL rules to this Virtual Port; example-default 0; >,
acl-id-list=<start;multi>,
acl-id=number <mv; multi-field-key; max-elements 199; range 1-199; obj-association access-list.standard, access-list.extended; help ACL id VPORT; condition access-list; example-default 1; max-elements 199>,
source-nat-pool=string <obr; condition acl-id; multi-field-key; example-default snatpool; obj-association ip.nat.pool, ipv6.nat.pool, ip.nat.pool-group, ipv6.nat.pool-group; help Policy based Source NAT; alias acl-id-src-nat-pool; help-val NAT Pool or Pool Group>,
sequence-number=number <obr; range 1-32; condition acl-id-src-nat-pool; example-default 1; help Specify ACL precedence; help-val sequence-number; alias acl-id-seq-num>,
acl-id-list=<end>,

acl-name-list=<start;multi>,
name=string <mb; multi-field-key; max-elements 100; range 1-16; condition access-list; obj-association ip.access-list, ipv6.access-list; help Apply an access list name; help-val Named Access List; alias acl-name; example-default aclname1; max-elements 100>,
source-nat-pool=string <obr; condition acl-name; multi-field-key; example-default snatpool; help Policy based Source NAT;alias acl-name-src-nat-pool; help-val NAT Pool or Pool Group; obj-association ip.nat.pool, ipv6.nat.pool, ip.nat.pool-group, ipv6.nat.pool-group;>,
sequence-number=number <obr; range 1-32; condition acl-name-src-nat-pool; example-default 1; help Specify ACL precedence; help-val sequence-number; alias acl-name-seq-num>,
acl-name-list=<end>,

aflex-scripts=<start; multi>,
aflex=string-rlx <ob; range 1-63; multi-field-key; filetype aflex; disabled tftp; help Bind aFleX Script to the Virtual Port; help-val aFleX Script Name; example-default aflex_default; max-elements 16>,
aflex-scripts=<end>,
no-auto-up-on-aflex=flag <ok; help Don't automatically mark vport up when aFleX is bound; >,
no-dest-nat=flag <oky; disabled sip, sips, sip-tcp; help Disable destination NAT; example-default 1>,
port-translation=flag <ok; condition no-dest-nat; help Enable port translation under no-dest-nat; example-default 0>,

enable-scaleout=flag <ok;hide-help>,
bucket-count=number <ob; default 32; range 1-256; alias scaleout-bucket-count; help Number of traffic buckets>,
device-group=number <ob; range 1-16; alias scaleout-device-group; help Device group id>,

source-nat=dummy <ok; help Source NAT; example-default 0>,
pool=string <mbr; condition source-nat; obj-association ip.nat.pool, ipv6.nat.pool, ip.nat.pool-group, ipv6.nat.pool-group; help Specify NAT pool or pool group; help-val NAT Pool or Pool Group; example-default ip.nat.pool>,
auto=flag <mky; condition source-nat; help Configure auto NAT for the vport; example-default 0>,
precedence=flag <ok; condition auto; help Set auto NAT pool as higher precedence for source NAT; example-default 0>,

#
# make sure "service-group" is AFTER "source-nat" (bugid 174152)
#
service-group=long-string-rlx <ob; obj-association slb.service-group; help Bind a Service Group to this Virtual Server; help-val Service Group Name; example-default slb.service-group>,

ipinip=flag <ok; help Enable IP in IP;  example-default 0>,
#ipinup=flag <ok; disabled  diameter, dns-tcp, dns-udp, fast-http, http, ftp, mms, radius, rtsp, sip, sip-tcp, sips, smtp, ssl-proxy, tcp-proxy, tftp>,
ip-map-list=string <obsr; help Enter name of IP Map List to be bound; help-val IP Map List Name; example-default ipmap; feat-license ip-map-list>,
rtp-sip-call-id-match=flag <ok;enable udp; help rtp traffic try to match the real server of sip smp call-id session>,

use-rcv-hop-for-resp=flag <oky; help Use receive hop for response to client; example-default 0>,
persist-type=string <ov; allowed src-dst-ip-swap-persist{help:"Create persist session after source IP and destination IP swap"}/use-src-ip-for-dst-persist{help:"Use the source IP to create a destination persist session"}/use-dst-ip-for-src-persist{help:"Use the destination IP to create source IP persist session"}; condition use-rcv-hop-for-resp; example-default use-dst-ip-for-src-persist>,

# pbslb commands under vport will be deprecated as the same thing can be achieved by template policy
#pbslb=dummy <ok; help Configure policy based server load balancing; example-default 0; >,
#bw-list=string <mb; range 1-63; condition pbslb; help Specify a blacklist/whitelist name; help-val Specify a blacklist/whitelist name; example-default blacklist1>,
#over-limit=dummy <mk; condition pbslb; help Specify operation in case over limit; example-default 0; help Specify operation in case over limit>,
#over-limit-action=string <mv; condition over-limit; allowed drop{help:"Drop the packet"}/reset{help:"Send reset back"}; default drop; example-default drop>,
#pbslb-id-list=<start; multi>,
#id=number <mb; range 0-31; condition pbslb; max-elements 32; help Specify id that maps to service group; help-val The id number>,
#service-group=string <mb; condition id; alias pbslb-service-group; help Specify a service group; help-val Specify the service group name; example-default pbslb1>,

#### "partition shared" not supported in 3.8, bugid 174242
#### partition=dummy <okp; condition pbslb-service-group; help Partition; example-default 0>,
#### shared=flag <mk; condition partition; help Shared partition; example-default 0>,
#logging=flag <ok; condition pbslb-service-group; alias pbslb-sg-logging; help Configure PBSLB logging; example-default 0>
#period=number <ov; range 0-60; condition pbslb-sg-logging; default 3; link-next-fwd fail; help Specify logging period in minutes>,
#fail=flag <ok; condition pbslb-sg-logging; help Only log unsuccessful connections; example-default 0>,

#drop=flag <ok; condition id; alias pbslb-drop; help drop the packet; example-default 0>,
#logging=flag <ok; condition pbslb-drop; alias drop-logging; help Configure PBSLB logging; example-default 0>,
#period=number <ov; range 0-60; condition drop-logging; default 3; alias drop-logging-period; help Specify logging period in minutes>,

#reset=flag <ok; condition id; alias pbslb-reset; m-exclusion pbslb-drop, pbslb-service-group; help Send reset back; example-default 0>,
#logging=flag <ok; condition pbslb-reset; alias reset-logging; help Configure PBSLB logging; example-default 0>,
#period=number <ov; range 0-60; condition reset-logging; default 3; alias reset-logging-period; help Specify logging period in minutes>,
#pbslb-id-list=<end>,

template=dummy <ok; help Applying Templates to Virtual Port; example-default 0; >, 
sip=string-rlx <mb; range 1-63; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, http, https, mlb, mms, radius, rtsp, smtp, smpp-tcp, spdy, spdys, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; condition template; obj-association slb.template.sip; example-default slb.template.sip; alias template-sip; help SIP template; help-val SIP Template>,

smpp=string-rlx <mb; range 1-63; enabled smpp-tcp; condition template; obj-association slb.template.smpp; example-default slb.template.smpp; alias template-smpp; help SMPP template; help-val SMPP Template>,

dblb=string-rlx <mb; range 1-63; disabled diameter, dns-tcp, dns-udp, fast-http, fix, ftp, ftp-proxy, http, https, mlb, mms, others, radius, rtsp, sip, sip-tcp, sips, smpp-tcp, smtp, spdy, spdys, ssl-proxy, tcp, tcp-proxy, tftp, udp; condition template; obj-association slb.template.dblb; example-default slb.template.dblb; alias template-dblb; help DBLB Template; help-val DBLB template name>,

connection-reuse=string-rlx <mbr; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, ftp,ftp-proxy, mlb, mms, radius, rtsp, sip, smtp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; condition template; obj-association slb.template.connection-reuse; example-default slb.template.connection-reuse; alias template-connection-reuse; help Connection Reuse Template; help-val Connection Reuse Template Name>,

dns=string-rlx <mb; range 1-63; disabled tcp, udp, others, diameter, fast-http, ftp, ftp-proxy, http, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, smpp-tcp, spdy, spdys, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; condition template; obj-association slb.template.dns; example-default slb.template.dns; alias template-dns; help DNS template; help-val DNS template name>,

policy=string-rlx <ob; range 1-63; condition template; disabled diameter, fix, tftp, mysql, mssql; obj-association slb.template.policy; example-default slb.template.policy; alias template-policy; help Policy Template; help-val Policy template name>,

dynamic-service=string-rlx <ob; range 1-63; condition template;  obj-association slb.template.dynamic-service; example-default slb.template.dynamic-servce; alias template-dynamic-service; help Dynamic Service Template; help-val dynamic-service template name>,

persist=dummy <mk; condition template; disabled fix; example-default 0; help Persistence Template>,
source-ip=string <mb; condition persist; obj-association slb.template.persist.source-ip; example-default slb.template.persist.source-ip; alias template-persist-source-ip; help Source IP persistence; help-val Source IP persistence template name>,
destination-ip=string <mb; condition persist; obj-association slb.template.persist.destination-ip; example-default slb.template.persist.destination-ip; alias template-persist-destination-ip; help Destination IP persistence; help-val Destination IP persistence template name>,
ssl-sid=string <mb; condition persist; disabled udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, http, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp,spdy, spdys, ssl-proxy, tcp-proxy, mysql, mssql, tftp;  obj-association slb.template.persist.ssl-sid; example-default slb.template.persist.ssl-sid; alias template-persist-ssl-sid; help SSL session ID persistence; help-val Source IP Persistence Config name>,
cookie=string-rlx <mb; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, ssl-proxy, tcp-proxy, mysql, mssql, tftp; condition persist; obj-association slb.template.persist.cookie; example-default slb.template.persist.cookie; alias template-persist-cookie; help Cookie persistence; help-val Cookie persistence template name>,

smtp=string-rlx <ob; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, http, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, spdy, spdys,ssl-proxy, tcp-proxy, tftp, smpp-tcp, fix, mysql, mssql; range 1-63; condition template; obj-association slb.template.smtp; example-default slb.template.smtp; alias template-smtp; help SMTP Template; help-val SMTP Config Name>,

http=string-rlx <mb; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, smpp-tcp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; range 1-63; condition template; obj-association slb.template.http; example-default slb.template.http; alias template-http; help HTTP Template; help-val HTTP Config Name>,
http-policy=string <mb; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, smpp-tcp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; range 1-63; condition template; obj-association slb.template.http-policy; example-default slb.template.http-policy; alias template-http-policy; help http-policy template; help-val http-policy template name>,

redirect-to-https=flag <ok; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, ftp, ftp-proxy, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, smpp-tcp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; help Redirect HTTP to HTTPS>,

external-service=string-rlx <mb; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, smpp-tcp, sips, smtp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; range 1-63; condition template; obj-association slb.template.external-service; example-default slb.template.external-service; alias template-external-service; help External service template; help-val external-service template name>,

reqmod-icap=string-rlx <mb; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, smpp-tcp, sips, smtp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; range 1-63; condition template; obj-association slb.template.reqmod-icap; example-default slb.template.reqmod-icap; alias template-reqmod-icap; help ICAP reqmod template; help-val reqmod-icap template name>,

respmod-icap=string-rlx <mb; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, smpp-tcp, sips, smtp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; range 1-63; condition template; obj-association slb.template.respmod-icap; example-default slb.template.respmod-icap; alias template-respmod-icap; help ICAP respmod service template; help-val respmod-icap template name>,

server-ssl=string-rlx <mb; range 1-63; condition template;  disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, smpp-tcp, radius, rtsp, sip, smtp, tftp, fix; obj-association slb.template.server-ssl; example-default slb.template.server-ssl; alias template-server-ssl; help Server Side SSL Template; help-val Server SSL Name>,

client-ssl=string-rlx <mb; range 1-63; condition template; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, mlb, mms, radius, rtsp, smpp-tcp,  sip, sip-tcp, tcp-proxy, tftp, fix; obj-association slb.template.client-ssl; example-default slb.template.client-ssl; alias template-client-ssl; help Client SSL Template; help-val Client SSL Config Name>,

udp=string-rlx <mb; range 1-63; condition template; disabled tcp, diameter, dns-tcp, fast-http, ftp, ftp-proxy, http, https, mlb, mms, rtsp, sip-tcp, sips, smtp, smpp-tcp, spdy, spdys, ssl-proxy, tcp-proxy, fix, mysql, mssql; obj-association slb.template.udp; alias template-udp; example-default slb.template.udp; alias template-udp; help L4 UDP Template; help-val UDP Config Name; default default; >,

tcp=string-rlx <mb; range 1-63; condition template; disabled udp, diameter, dns-tcp, dns-udp, ftp-proxy, http, https, radius, sip, sip-tcp, sips, smtp, smpp-tcp, spdy, spdys, ssl-proxy, tcp-proxy, fix, tftp, mysql, mssql, mlb; obj-association slb.template.tcp; alias template-tcp; example-default slb.template.tcp; alias template-tcp; help L4 TCP Template; help-val TCP Config Name; default default;>,

virtual-port=string-rlx <mb; range 1-63; condition template; obj-association slb.template.virtual-port; example-default slb.template.virtual-port; alias template-virtual-port; help Virtual port template; help-val Virtual port template name; default default>,

ftp=string-rlx <mb; range 1-31; condition template; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp-proxy, http, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp,  smpp-tcp, spdy, spdys, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; obj-association slb.template.ftp; example-default slb.template.ftp; alias template-ftp; help FTP port template; help-val Ftp template name>,

diameter=string-rlx <mb; range 1-63; condition template; disabled tcp, udp, others, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, http, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp,  smpp-tcp, spdy, spdys, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; obj-association slb.template.diameter; example-default slb.template.diameter; alias template-diameter; help Diameter Template; help-val diameter template name>,

cache=string-rlx <obr; condition template; range 1-63; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp,  smpp-tcp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; obj-association slb.template.cache; stats-association slb.template.cache; example-default slb.template.cache; alias template-cache; help RAM caching template; help-val Cache Template Name>,

fix=string-rlx <ob; condition template; range 1-63; enabled fix; obj-association slb.template.fix; alias template-fix; help FIX template; help-val FIX Template Name>,

waf=string-rlx <obr; plat-neg-list fireeye; plat-neg-list ruijie; condition template; range 1-63; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, fast-http, ftp, ftp-proxy, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, spdy, spdys, smpp-tcp, ssl-proxy, tcp-proxy, tftp, fix, mysql, mssql; obj-association waf.template; feat-license waf; stats-association waf.template; example-default waf.template; alias waf-template; help WAF template; help-val WAF Template Name>,

tcp-proxy=dummy <ok; condition template; disabled tcp, udp, others, dns-udp, fast-http, ftp, mms, radius, rtsp, sip, tftp; example-default 0; help TCP Proxy Template; default default;>,
client=string-rlx <mb; range 1-63; condition tcp-proxy; obj-association slb.template.tcp-proxy; example-default slb.template.tcp-proxy; alias template-tcp-proxy-client; help TCP Proxy Config Client; help-val TCP Proxy Config name>,
server=string-rlx <mb; range 1-63; condition tcp-proxy; obj-association slb.template.tcp-proxy; example-default slb.template.tcp-proxy; alias template-tcp-proxy-server; help TCP Proxy Config Server; help-val TCP Proxy Config name>,
name=string-rlx <mv; range 1-63; condition tcp-proxy; alias template-tcp-proxy; obj-association slb.template.tcp-proxy; example-default slb.template.tcp-proxy; help TCP Proxy Template Name>,
use-default-if-no-server=flag <ok; disabled fast-http, http, tftp; example-default 1; help Use default forwarding if server selection failed>, 

scaleout=string <obr; range 1-63; condition template; disabled ftp,rtsp,sip; alias template-scaleout; help Scaleout template; help-val Scaleout template name>,

# disable l7-assist option for all ports except for fast http 
l7-hardware-assist=flag <ok; disabled tcp, udp, others, diameter, dns-tcp, dns-udp, ftp,ftp-proxy, http, https, mlb, mms, radius, rtsp, sip, sip-tcp, sips, smtp, spdy, spdys, ssl-proxy, tcp-proxy, tftp, mysql, mssql; plat-neg-list non-fpga, soft-ax; help FPGA assist L7 packet parsing; example-default 0>,

auth-cfg=<start;>,
aaa-policy=string <mbr; plat-neg-list fireeye; plat-neg-list ruijie; range 1-63; feat-license aam; help Specify AAA policy name to bind to the virtual port;>,
auth-cfg=<end;>,

oper-fields:
state=string<oper-field-name STATE; allowed All Up/Functional Up/Down/Disb/Unkn>,
loc_list=string<oper-field-name LOC_LIST;>,
geo_location=string<oper-field-name GEO_LOC;>,
level_str=string<oper-field-name LEVEL_STR>,
group_id=number<oper-field-name GROUP_ID;>,
loc_max_depth=number<oper-field-name MAX_DEPTH>,
loc_success=number<oper-field-name SUCCESS>,
loc_error=number<oper-field-name ERROR>,
loc_override=number<oper-field-name OVERRIDE>,
loc_last=string <oper-field-name LAST>,

stats-fields:
curr_conn=counter <aul; read-only; dev-field-name CURR_CONN; field-oid 1; help Current connections>,
total_l4_conn=counter <aul; dev-field-name TOTAL_L4_CONN; field-oid 2; help Total L4 connections>,
total_l7_conn=counter <aul; dev-field-name TOTAL_L7_CONN; field-oid 3; help Total L7 connections>,
total_tcp_conn=counter <aul; dev-field-name TOTAL_TCP_CONN; field-oid 4; help Total TCP connections>,
total_conn=counter <aul; dev-field-name TOTAL_CONN; field-oid 5; help Total connections>,
total_fwd_bytes=counter <aul; dev-field-name TOTAL_FWD_BYTES; field-oid 6; help Total forward bytes>,
total_fwd_pkts=counter <aul; dev-field-name TOTAL_FWD_PKTS; field-oid 7; help Total forward packets>,
total_rev_bytes=counter <aul; dev-field-name TOTAL_REV_BYTES; field-oid 8; help Total reverse bytes>,
total_rev_pkts=counter <aul; dev-field-name TOTAL_REV_PKTS; field-oid 9; help Total reverse packets>,
total_dns_pkts=counter <aus; dev-field-name TOTAL_DNS_PKTS; field-oid 10; help Total DNS packets>,
total_mf_dns_pkts=counter <aus; dev-field-name TOTAL_MF_DNS_PKTS; field-oid 11; help Total MF DNS packets>,
es_total_failure_actions=counter <aus; dev-field-name ES_TOTAL_FAILURE_ACTIONS; field-oid 12; help Total failure actions>,
compression_bytes_before=counter <aus; dev-field-name COMPRESSION_BYTES_BEFORE; field-oid 13; help Data into compression engine>,
compression_bytes_after=counter <aus; dev-field-name COMPRESSION_BYTES_AFTER; field-oid 14; help Data out of compression engine>,
compression_hit=counter <aus; dev-field-name COMPRESSION_HIT; field-oid 15; help Number of requests compressed>,
compression_miss=counter <aus; dev-field-name COMPRESSION_MISS; field-oid 16; help Number of requests NOT compressed>,
compression_miss_no_client=counter <aus; dev-field-name COMPRESSION_MISS_NO_CLIENT; field-oid 17; help Compression miss no client>,
compression_miss_template_exclusion=counter <aus; dev-field-name COMPRESSION_MISS_TEMPLATE_EXCLUSION; field-oid 18; help Compression miss template exclusion>,
curr_req=counter <aul; dev-field-name CURR_REQ; field-oid 19; help Current requests>,
total_req=counter <aul; dev-field-name TOTAL_REQ; field-oid 20; help Total requests>,
total_req_succ=counter <aul; dev-field-name TOTAL_REQ_SUCC; field-oid 21; help Total successful requests>,
peak_conn=counter <aul; dev-field-name PEAK_CONN; field-oid 22; help Peak connections>,
curr_conn_rate=counter <aul; dev-field-name CURR_CONN_RATE; field-oid 23; help Current connection rate>,
last_rsp_time=counter <aul; dev-field-name LAST_RSP_TIME; field-oid 24; help Last response time>,
fastest_rsp_time=counter <aul; dev-field-name FASTEST_RSP_TIME; field-oid 25; help Fastest response time>,
slowest_rsp_time=counter <aul; dev-field-name SLOWEST_RSP_TIME; field-oid 26; help Slowest response time>,
loc_permit=counter <aul; dev-field-name LOC_PERMIT; field-oid 27; help Permit number>,
loc_deny=counter <aul; dev-field-name LOC_DENY; field-oid 28; help Deny number>,
loc_conn=counter <aul; dev-field-name LOC_CONN; field-oid 29; help Connection number>;
################## SLB VPORT END #########################

