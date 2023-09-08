// config.js
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mongodb_url: process.env.MONGODB_URL,
  host: process.env.HOST,
};
