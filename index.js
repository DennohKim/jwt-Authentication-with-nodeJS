const express = require('express');
const bodyParser = require('body-parser'); //middleware to read JSON object

const app = express(); //Use express Library
const PORT = process.env.PORT || 8888; //Port number

//add middleware to express to handle JSON responses
app.use(bodyParser.json())

app.get("/status", (req, res) => {
    const localTime = (new Date()).toLocaleDateString();

    res
    .status(200)
    .send(`Server time is ${localTime}.`)

})



//Post request that handles user login

app.post("/login", (req, res) => {
    const user = req.body.username; //contains name of user posted to the route

    res.status(200).send(`You logged in with ${user}`);
})

//Catch all route
app.get("*", (req, res) => {
    res.sendStatus(404); //Page not Found

});

//Initialize server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})