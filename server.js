const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
    res.send('<h1>General Assembly Practical HW Week 9</h1>')
});

// Greetings Home
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, You.</h1>')
});

// Greetings to a Given Name
app.get('/greeting/:name', (req, res) => {
    res.send(`You know your way around a webpage, ${req.params.name}.`)
});

// Tip Calculator
app.get('/tip/:total/:percentage', (req, res) => {
    res.send(`Tipping: It's the way of the Jedi....May the funds be with you. You should tip $${req.params.total * req.params.percentage / 100}.`)
});

app.listen(3000, () => {
    console.log('Yes, I am listening on Port 3000')
});