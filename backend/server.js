import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors()); // Allows all origins by default

app.get("/", (req, res) => {
  console.log("Request received");
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
