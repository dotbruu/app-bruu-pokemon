import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://root:bruu@127.0.0.1:27019", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "svg")));
app.use(routes);

const port = 3333;
app.listen(port, () => {
  console.log("Server running on port ", port);
});
