// Libraries
import express from 'express';
import bodyParser from 'body-parser';

const PORT = 3000;
let app = express();

app.use(bodyParser.text({
	type: 'application/graphql'
}));

app.listen(PORT, () => {
	console.log(`Server is listening at port: ${PORT}`);
});
