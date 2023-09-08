const mongoose = require("mongoose");
const { mongodb_url } = require("./config");

async function main() {
  await mongoose.connect(mongodb_url);
}

module.exports = main;
