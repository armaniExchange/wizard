function initializeNS(ns, value) {
 	let obj = {};
	let levels = ns.split('.'), first = levels.shift();
 	// console.log(obj);

	if (obj[first] === undefined) {
		if (levels.length === 0) {
			obj[first] = value;
		} else {
			if (levels.length) { // recursion condition
				obj[first] = initializeNS(levels.join('.'), value);
			}
		}		
	} 
	
	return obj; // return a reference to the top level object
}

function merge () {
    var dst = {}, src,p,args = [].splice.call(arguments, 0);

    while (args.length > 0) {
        src = args.splice(0, 1)[0];
        if (toString.call(src) === '[object Object]') {
            for (p in src) {
                if (src.hasOwnProperty(p)) {
                    if (toString.call(src[p]) === '[object Object]') {
                        dst[p] = merge(dst[p] || {}, src[p]);
                    } else {
                        dst[p] = src[p];
                    }
                }
            }
        }
    }

    return dst;
}

 export default {
 	initializeNS : initializeNS,
 	merge: merge
};