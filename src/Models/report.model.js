let database = require("./db.js");

const Report = function(report) {
  this.city = report.city;
  this.address = report.address;
  this.street_number = report.street_number;
  this.cap = report.cap;
  this.photo = report.photo;
};

Report.create = function(newReport, result) {
  database.query("insert into report set ?", newReport, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created report: ", { id: res.insertId, ...newReport });
    result(null, { id: res.insertId, ...newReport });
  });
};

Report.getAll = function(result) {
  database.query("select * from report", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("reports: ", res);
    result(null, res);
  });
};

module.exports = Report;
