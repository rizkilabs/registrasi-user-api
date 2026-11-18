const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({
    message: "Registrasi berhasil (sementara, belum disimpan)",
    data: { email },
  });
});

module.exports = router;
