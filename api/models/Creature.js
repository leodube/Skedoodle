const mongoose = require("mongoose");
const { Schema } = mongoose;

const creatureSchema = new Schema({
  name: String,
  precedeWith: String,
  verbExemptions: { type: Array, default: [] },
});

mongoose.model("creatures", creatureSchema);
