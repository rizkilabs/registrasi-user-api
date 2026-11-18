const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API registrasi user jalan" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});