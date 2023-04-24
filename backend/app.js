const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.use(express.json({ limit: "50mb", extended: true }));

dotenv.config({ path: "backend/config/config.env" });

const product = require("./routes/mobiroutes");
app.use("/", product);

module.exports = app;
