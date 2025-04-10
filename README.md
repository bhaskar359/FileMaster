
# 📁 FileMaster

FileMaster is a Node.js-based backend project that supports **file uploads**, **file resizing**, **CRUD operations**, and **MongoDB storage** for profile images. It uses Express.js, Multer, and supports both **DiskStorage and MemoryStorage**, along with Swagger documentation for easy API exploration.

---

## 🚀 Features

- Upload files using Multer
- Choose between DiskStorage or MemoryStorage
- Save profile images to MongoDB
- RESTful API structure with `controllers`, `services`, `routes`
- Swagger API documentation
- Environment variable management with `.env`
- Production-ready folder structure (similar to NestJS)
- Planned support for auth and middleware

---

## 📁 Folder Structure

```
src/
├── config/             # Configuration files (env, multer, swagger, db)
├── docs/               # Swagger JSON documentation
├── middleware/         # Future middlewares (auth, validation)
├── profile/            # Feature module: profile image upload
│   ├── profile.controller.js
│   ├── profile.routes.js
│   └── profile.service.js
├── app.js              # App-level setup
└── main.js             # Entry point
```

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/FileMaster.git
cd FileMaster
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the root and add:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017
DB_NAME=filemaster
```

> If you're using MongoDB Atlas, remember to URL-encode your username/password and paste the connection string properly.

### 4. Run the project

```bash
npm run dev
```

> Visit the API docs at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🧪 Available Scripts

| Script       | Description                      |
|--------------|----------------------------------|
| `npm run dev`| Start the server with Nodemon    |
| `npm start`  | Start the server normally        |

---

## 📚 API Documentation

API docs are powered by **Swagger** and available at:

```
http://localhost:3000/api-docs
```

---

## 🧱 Tech Stack

- Node.js
- Express.js
- Multer
- MongoDB (using native MongoDB driver)
- Swagger (OpenAPI 3.0)
- Dotenv

---

## ✨ Coming Soon

- JWT-based Authentication
- Role-based Authorization
- Image resizing using `sharp`
- File streaming and download
- GridFS support for large files

---
