const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<img src='https://media.tenor.com/fIaezRSZPSAAAAAe/cat-explosion.png' /><br/>AAAAAAAAAAAAAAA");
});

app.post("/submit", (req, res) => {
    res.json({
        status: "yipee",
        name: res.body.name,
        email: res.body.email
    });
});

app.listen(8080);
