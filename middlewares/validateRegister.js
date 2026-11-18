const validator = require("validator");

const validateRegister = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // Validasi email
  if (typeof email !== "string" || email.trim() === "") {
    errors.push("Email wajib diisi");
  } else if (!validator.isEmail(email.trim())) {
    errors.push("Format email tidak valid");
  }

  // Validasi password
  if (typeof password !== "string" || password === "") {
    errors.push("Password wajib diisi");
  } else if (password.length < 8) {
    errors.push("Password minimal 8 karakter");
  } else if (Buffer.byteLength(password, "utf8") > 72) {
    errors.push("Password maksimal 72 karakter");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validasi gagal", errors });
  }

  // Normalisasi email supaya pengecekan duplikat nanti konsisten
  req.body.email = email.trim().toLowerCase();

  next();
};

module.exports = validateRegister;
