module.exports = app => {
  let reports = require("../controllers/report.controller.js");
  let multer = require("multer");

  let storage = multer.diskStorage({
    destination: "./photos",
    filename: function (req, file, cb) {
      cb(null, Date.now() + ".jpg")
    }
  });

  let upload = multer({
    storage: storage
    });

  app.post("/reports", upload.single("photo"), reports.create);

  app.get("/reports", reports.findAll);
};
