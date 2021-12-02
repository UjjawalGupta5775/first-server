const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello World!");

});

app.get("/contact", function(req, res) {
    res.send("Contact me at ujjawal@gmail.com");
})

app.get("/about", function(req, res) {
    res.send("Ich heise Ujjawal aus India. Ich bin 19.");
})

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Reading, Listening</li></ul>")
})

app.listen(3000, function() {
    console.log("Server started at port 3000");
});