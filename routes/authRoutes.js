const express = require("express");
const validateRegister = require("../middlewares/validateRegister");

const router = express.Router();

router.post("/register", validateRegister, (req, res) => {
  const { email } = req.body;

  res.status(201).json({
    message: "Registrasi berhasil (sementara, belum disimpan)",
    data: { email },
  });
});

module.exports = router;
