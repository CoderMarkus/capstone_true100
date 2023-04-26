const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "x-requested-with"],
  })
);

app.post("/public/uploads", (req, res) => {
  // handle file upload here
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
app.get("/", (_req, res) => {
  res.send("Hello, World!");
});
