const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for "/"
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Define a route for "/api"
app.get("/api", (req, res) => {
  res.json({ message: "Backend API running" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

