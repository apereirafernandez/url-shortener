const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoDb = require("./db");
import urlRoute from "./routes/urls";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to database
mongoDb();

app.use(express.json({ extended: false }));

//Define Routes
app.use("/", urlRoute);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
