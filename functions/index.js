const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

// API
// App config
const app = express();
// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
// Api routs
app.get("/", (request, response) => response.status(200).send("hello world"));
// listen command
exports.api = functions.https.onRequest(app);
