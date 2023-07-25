const express = require("express");
const ejs = require("ejs");
const path = require("path");
const qrcode = require("qrcode");
const app = express();
const port = process.env.port || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/scan", (req, res) => {
  const input_text = req.body.text;
  console.log(input_text);
  qrcode.toDataURL(input_text, (err, src) => {
    res.render("scan",{
        qr_code:
  });
  });
});
app.listen(port, console.log(`listening on port ${port}`));
