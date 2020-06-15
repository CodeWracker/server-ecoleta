import express from "express";
import routes from "./routes";

import cors from "cors";
import { errors } from "celebrate";

import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
app.use("/uploads", express.static("../uploads"));

app.use(errors());
app.listen(process.env.PORT || 3333);
