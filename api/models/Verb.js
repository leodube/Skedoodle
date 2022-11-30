const mongoose = require("mongoose");
const { Schema } = mongoose;

const verbSchema = new Schema({
  name: String,
  followWith: String,
  items: { type: Array, default: [] },
});

mongoose.model("verbs", verbSchema);
