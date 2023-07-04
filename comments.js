// Create web server with node.js
// 1. Load modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// 2. Set up web server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
// 3. Set up data model
var comments = [
    { id: 1, author: "Pete Hunt", text: "This is one comment" },
    { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
];
// 4. Set up routes
app.get('/api/comments', function (req, res) {
    res.json(comments);
});
app.post('/api/comments', function (req, res) {
    var newComment = {
        id: Date.now(),