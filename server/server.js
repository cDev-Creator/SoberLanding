const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();

const uri = process.env.MONGO_URI;
async function connect() {
  try {
    await mongoose.connect(uri);

    app.listen(5000, () => {
      console.log("Server has started on port 5000");
    });

  } catch (error) {
    console.error(error);
  }
}

const Schema = mongoose.Schema;
const bedCountSchema = new Schema({
  beds: {
    type: Number,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

const BedCount = mongoose.model("BedCount", bedCountSchema);

app.use(cors());
app.use(bodyParser.json());

/* creating the first express route using the get http method */
app.get("/bedCount", async function (req, res) {
  try {
    const bedCountDoc = await BedCount.findOne().sort({ updated: -1 }).exec();
    res.json({ beds: bedCountDoc.beds });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving bed count from database" });
  }
});

app.put("/bedCount", async function (req, res) {
  const newBedCount = req.body.beds;
  // update the bed count in the database
  try {
    const bedCountDoc = await BedCount.findOne().sort({ updated: -1 }).exec();
    bedCountDoc.beds = newBedCount;
    await bedCountDoc.save();
    res.json({ message: `Successfully updated to ${newBedCount} beds` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating bed count in database" });
  }
});

app.post("/bedCount", function (req, res) {
  const newBedCount = new BedCount({
    beds: req.body.beds,
  });

  newBedCount.save((error) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: "Error saving bed count to database" });
    } else {
      res.json({ message: "Successfully saved bed count to database" });
    }
  });
});

connect();
