const express = require("express");
const app = express();
app.listen(3000);

const cors = require("cors");
app.use(cors());

console.log("Server is ready.");



app.post("/shortify", (req, res) => {
    const url = req.get("url");

    if (!url) return res.sendStatus(404);

    const pattern = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    if(pattern.test(url) === true) {

    } else return res.sendStatus(400)

})