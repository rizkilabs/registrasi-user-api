const notFound = (req, res) => {
  res.status(404).json({ message: "Endpoint tidak ditemukan" });
};

const errorHandler = (err, req, res, next) => {
  // JSON di body request rusak
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Format JSON tidak valid" });
  }

  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
};

module.exports = { notFound, errorHandler };
