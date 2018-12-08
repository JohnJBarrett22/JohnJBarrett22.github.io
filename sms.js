const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nexmo = require("nexmo");
const socketio = require("socket.io");

const app = express();