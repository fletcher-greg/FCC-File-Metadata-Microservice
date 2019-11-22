const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");

const upload = multer({ dest: "uploads/" });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + "/views"));

app.post("/api/fileanalyze", upload.single("file"), (req, res, next) => {
  return res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(3000, () => console.log("hi"));
