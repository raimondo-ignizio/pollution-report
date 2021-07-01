let Report = require("../Models/report.model.js");

exports.create = function(req, res) {
  let report = new Report({
    city: req.body.city,
    address: req.body.address,
    street_number: req.body.street_number,
    cap: req.body.cap,
    photo: "http://" + req.headers.host + "/photos/" + req.file.filename
  });

  Report.create(report, function(err, data) {
    if (err) {
      res.status(500).send("Could not send the report: " + err);
    } else {
      res.send(data);
    }
  });
};

exports.findAll = function(req, res) {
  Report.getAll(function(err, data) {
    if (err) {
      res.status(500).send("Could not get the reports: " + err);
    } else {
      res.send(data);
    }
  });
};
