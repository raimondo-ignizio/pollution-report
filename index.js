let express = require("express");
let app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/photos", express.static("photos"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

require("./src/routes/report.routes.js")(app);

app.listen("8080");
