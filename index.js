const express = require('express');

const app = express(); //Use express Library
const PORT = process.env.PORT || 8888; //Port number

app.get("/status", (req, res) => {
    const localTime = (new Date()).toLocaleDateString();

    res
    .status(200)
    .send(`Server time is ${localTime}.`)

})

//Catch all route
app.get("*", (req, res) => {
    res.sendStatus(404); //Page not Found

});

//Initialize server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})