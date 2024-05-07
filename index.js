const express = require("express");
const app = express();
require("dotenv").config();

const Port = process.env.PORT || 3000

app.use("/", (req, res) => {
    res.status(200).json("Hello Server")
})

app.listen(Port, () => {
    console.log(`listening on port ${Port}`);
})