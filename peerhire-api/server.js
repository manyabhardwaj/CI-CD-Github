const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PeerHire API",
      version: "1.0.0",
      description: "API for managing users in the PeerHire application"
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// ✅ Root route for homepage
app.get("/", (req, res) => {
  res.send("🎯 PeerHire API is up and running! Visit <a href='/api-docs'>/api-docs</a> for Swagger UI.");
});

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/peerhire")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
