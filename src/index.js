const express = require('express');
const app = express();

app.set('port', 3000);

app.get('/', (req, res) => {
    res.send('Hello World !!.')
});

app.get('/contact', (req, res) => {
    res.send('Contact Page.')
});

app.listen( app.get('port'), (req, res) => {
    console.log('server on port ', app.get('port'));
});