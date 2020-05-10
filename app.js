const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello world!');
})

app.get('/demo', (req, res) => {
	res.set('X-Custom-Header', 'A custom header');
	res.status(418);
	res.send('I prefer coffee');
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
