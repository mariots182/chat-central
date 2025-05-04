import express from "express";
import companyRoute from "./routes/api/company";
// import qrRoutes from "./routes/qrRoutes";
import cors from "cors";
import routes from "./routes/routes";

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

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
