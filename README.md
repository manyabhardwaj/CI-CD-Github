# PeerHire API

PeerHire is a backend API for managing users and interactions for a hiring platform. Built using **Node.js**, **Express.js**, **MongoDB**, and documented with **Swagger**.

## 📦 Features
- User Registration & Authentication
- RESTful API Endpoints
- MongoDB Integration with Mongoose
- Swagger API Docs (`/api-docs`)
- Structured Routing with Express Router

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger (swagger-jsdoc & swagger-ui-express)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/manyabhardwaj/peerhire-api.git
cd peerhire-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
npm run dev
```

### 4. View API Docs
Open in browser: `http://localhost:3000/api-docs`

## 📁 Folder Structure
```
peerhire-api/
├── routes/
│   └── users.js
├── models/
│   └── userModel.js
├── index.js
├── server.js
├── package.json
└── README.md
```

## 🌐 API Endpoints
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — User login
- `GET /api/users/` — Get all users
- `DELETE /api/users/` - Delete User

## 🧪 API Documentation
Access Swagger UI at `http://localhost:3000/api-docs` for complete documentation.

## 🔗 MongoDB
Ensure MongoDB is running locally or use Docker with the connection string:  
`mongodb://host.docker.internal:27017/peerhire`

## 👩‍💻 Author
**Manya Bhardwaj**  
[GitHub](https://github.com/manyabhardwaj)

