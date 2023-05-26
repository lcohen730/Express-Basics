const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, You.</h1>')
});

app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    res.send(`You know your way around a webpage, ${req.params.name}.`)
});

app.listen(3000, () => {
    console.log('Yes, I am listening on Port 3000')
});