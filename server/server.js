// // backend/server.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const productRoutes = require("./routes/productRoutes");

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/products", productRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const { Pool } = require("pg"); // Import the pg Pool
require("dotenv").config({ path: ".env.local" }); // Load .env.local  **Add this line**

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// **Add this:** Connect to the database using environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test the database connection
pool
  .connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
