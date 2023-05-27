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
    res.send(`<h2>You know your way around a webpage, ${req.params.name}.</h2>`)
});

// Tip Calculator
app.get('/tip/:total/:percentage', (req, res) => {
    res.send(`<h2>Tipping: It's the way of the Jedi....May the funds be with you. You should tip $${req.params.total * req.params.percentage / 100}.</h2>`)
});

// Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    const responses = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.",
    "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.","Yes.", "Signs point to yes.",
     "Reply hazy; try again.", "Ask again later.","Better not tell you now.", "Cannot predict now.",
      "Concentrate and ask again.","Don't count on it.", "My reply is no.", "My sources say no.",
       "Outlook not so good.", "Very doubtful."];
    const response = responses[Math.floor(Math.random()*responses.length)];
    res.send(`<h2>${req.params.question}?</h2>
    <h1>${response}</h1>`)
});

// Fibonacci
app.get('/fibonacci/:number', (req, res) => {
    // Source: https://javascript.plainenglish.io/javascript-algorithm-to-check-for-a-perfect-square-number-52cfd83c0757
    const isPerfectSquare = function(num) {
        if (num < 0){
            return false;
        }
        if (Number.isInteger(Math.sqrt(num))) {
            return true;
        }
        else {
            return false;
        }
    }
    // Source: https://www.tutorialspoint.com/how-to-check-if-a-given-number-is-a-fibonacci-number-in-python-program#:~:text=A%20number%20is%20Fibonacci%20in,number%20is%20Fibonacci%20or%20not.
    if (isPerfectSquare(5 * req.params.number**2 + 4) === true || isPerfectSquare(5 * req.params.number**2 - 4) === true) {
        res.send('<h2>Very good. It is Fibonacci.</h2>')
    }
    else {
        res.send('<h2>I can tell this is not a fibonacci number.</h2>')
    }
});

app.listen(3000, () => {
    console.log('Yes, I am listening on Port 3000')
});