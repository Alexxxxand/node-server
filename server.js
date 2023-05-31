"use strict";
//modules (ejs, express, prompt-sync)
const express = require ('express');
const app = express();
const ps = require("prompt-sync");
const prompt = ps();

//settings ( in the static folder you need to move the css, js, photo files and the rest of the media file )
app.set('view engine', 'ejs');
app.use(express.static('static'));

//page (Be sure to change the file extension from html to ejs)
app.get('/', (req, res) => {
    res.render('index')
});

//starting site (in PORT you can choose the port)
//const PORT = "3000";
let PORT = prompt("Port: ")


app.listen(PORT, () => {
    console.log ('Started')
});