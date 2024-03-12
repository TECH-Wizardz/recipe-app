const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const cors = require("cors");
connectDb();
const app = express();
const port = process.env.PORT || 5000;
// app.get("/api/recipies", (req, res) => {
//   res.status(200).json({ message: "Get all contacts" });
// });

// Enable CORS for all origins
app.use(cors());
app.use(express.json());
app.use("/api/recipes", require("./routes/recipeRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
