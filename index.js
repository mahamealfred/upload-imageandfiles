require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/database/db.js");
const uploadImageRoutes = require("./src/routes/image-routes.js");

connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB()
//Middlewares
app.use(express.json());

app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listeining to PORT ${PORT}`);
});