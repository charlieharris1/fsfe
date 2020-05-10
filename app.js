const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello world!');
})

app.get('/418', (req, res) => {
	res.status(418);
	res.set('X-Custom-Header', 'A custom header')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
