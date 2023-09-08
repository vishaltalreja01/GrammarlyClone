const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  trash: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Content", contentSchema);
