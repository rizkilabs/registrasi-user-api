const prisma = require("../lib/prisma");
const { hashPassword } = require("../utils/password");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Cek email sudah dipakai atau belum
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email sudah terdaftar" });
    }

    // 2. Hash password
    const hashedPassword = await hashPassword(password);

    // 3. Simpan ke database (password yang disimpan adalah hash-nya)
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
      select: { id: true, email: true, createdAt: true },
    });

    return res.status(201).json({
      message: "Registrasi berhasil",
      data: user,
    });
  } catch (error) {
    // Kalau dua request dengan email sama masuk bersamaan,
    // pengecekan di atas bisa lolos keduanya. Constraint unik di database
    // yang menahan, errornya berkode P2002.
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email sudah terdaftar" });
    }

    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

module.exports = { register };
