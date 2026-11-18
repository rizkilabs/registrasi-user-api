# Registrasi User API

Endpoint registrasi user dengan Express.js, Prisma, dan PostgreSQL.

## Fitur

- Validasi format email
- Password minimal 8 karakter (maksimal 72)
- Email tidak boleh duplikat (tidak case-sensitive)
- Password di-hash dengan bcrypt
- User disimpan ke PostgreSQL

## Instalasi

```bash
git clone https://github.com/rizkilabs/registrasi-user-api.git
cd registrasi-user-api
npm install
cp .env.example .env
```

Sesuaikan `DATABASE_URL` di `.env`, lalu jalankan migrasi:

```bash
npx prisma migrate dev
npm run dev
```

## Endpoint

### POST /api/auth/register

Request body:

```json
{
  "email": "rizki@mail.com",
  "password": "rahasia123"
}
```

Response sukses (201):

```json
{
  "message": "Registrasi berhasil",
  "data": {
    "id": 1,
    "email": "rizki@mail.com",
    "createdAt": "2026-11-18T10:00:00.000Z"
  }
}
```

Response error:

| Status | Penyebab                             |
| ------ | ------------------------------------ |
| 400    | Validasi gagal atau JSON tidak valid |
| 409    | Email sudah terdaftar                |
| 500    | Kesalahan server                     |

## Struktur Folder

```
controllers/   logika endpoint
middlewares/   validasi dan error handler
routes/        definisi route
utils/         helper hash password
lib/           Prisma client
prisma/        schema dan migrasi
```
