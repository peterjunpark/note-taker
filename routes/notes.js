const notes = require("express").Router();
const { writeFile } = require("fs");
const data = require("../db/db.json");

// /api/notes
notes.get("/", (req, res) => {
  res.json(data);
});

notes.post("/", (req, res) => {
  data.push(req.body);

  writeFile("./db/db.json", JSON.stringify(data), (err) => {
    if (err) console.error(err);
  });

  res.status(201).json(data);
});

notes.delete("/:id", (req, res) => {});

module.exports = notes;
