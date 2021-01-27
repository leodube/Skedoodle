const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const uri = "mongodb+srv://leodube:YojrLx4PhMi6qhq5@cluster0.bauqt.mongodb.net/skedoodle?retryWrites=true&w=majority";

// MODELS
require("./models/Creature");
require("./models/Verb");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.json());

// ROUTE
require("./routes/creatureRoutes")(app);
require("./routes/verbRoutes")(app);
require("./routes/ideaRoutes")(app);
app.get("/", (req, res) => {
  res.send("Skedoodle backend");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../frontend/dev"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
