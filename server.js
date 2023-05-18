const express = require("express");
const path = require("path");
const notes = require("./routes/notes.js");

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware for parsing.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML files.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Notes API routes.
app.use("/api/notes", notes);

app.listen(PORT, () => console.log(`👂 Server listening on port ${PORT} 👂`));
