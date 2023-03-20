const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let bedCount = 0;

app.use(cors());
app.use(bodyParser.json());

app.get("/bedCount", function (req, res) {
    res.json({"beds": [bedCount]});
});

app.put("/bedCount", function (req, res) {
    const newBedCount = req.body.beds;
    // update the bed count
    bedCount = newBedCount;
    res.json({ "message": `Bed count updated to ${newBedCount}` });
});

app.listen(5000, () => { console.log("Server has started on port 5000")})