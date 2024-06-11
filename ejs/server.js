const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const port = 4000

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});


app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});