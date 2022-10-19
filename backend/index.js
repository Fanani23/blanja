import express from "express";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import TransactionRoute from "./routes/TransactionRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(TransactionRoute);

app.listen(3023, () => console.log("Server up and running..."));
