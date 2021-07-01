let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let database = require("./src/Models/db.js");
let report = require("./src/Models/report.model.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/photos", express.static("photos"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

require("./src/routes/report.routes.js")(app);

app.listen("8080");
