const express = require("express");
const validateRegister = require("../middlewares/validateRegister");
const { register } = require("../controllers/authController");

const router = express.Router();

router.post("/register", validateRegister, register);

module.exports = router;
