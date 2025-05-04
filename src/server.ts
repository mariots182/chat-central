import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
