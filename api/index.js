const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const DBNAME = process.env.DB_USER;
const DBPASSWORD = process.env.DB_PASS;

const uri = `mongodb+srv://${DBNAME}:${DBPASSWORD}@cluster0.bauqt.mongodb.net/skedoodle?retryWrites=true&w=majority`;

// MODELS
require("./models/Creature");
require("./models/Verb");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// MIDDLEWARE
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // Limit each IP to 30 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(cors());
app.use(bodyParser.json());
app.use(limiter);

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
