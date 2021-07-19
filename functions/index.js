const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
("sk_test_51JEu3mSHPVA33z5jYDYttnBVSNtHv6CqoMnMXug9luYEuLIAaWKuSbrbslq3cOz7QSxlD1zvyjWUAgjPqS4ZKRKV00NKTEEfTf");
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
