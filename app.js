import fs from 'fs'
import dateFormat from 'dateFormat'
import express from 'express'

const app = express();

app.get("/", (req, res) => {
  res.type("html");
  let htmlContents = fs.readFileSync("index.html").toString();
  res.send(htmlContents);
});

app.get("/styles.css", (req, res) => {
  res.type('css')
  let cssContents = fs.readFileSync("styles.css").toString()
  res.send(cssContents);
});

app.get("/index.js", (req, res) => {
    res.type('js')
    let cssContents = fs.readFileSync("index.js").toString()
    res.send(cssContents);
});

app.get("/api/checkTime", (req, res) => {
    let day = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    res.type('txt');
    res.send(day)
})

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});