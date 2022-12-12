import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import config from "../config.js";
import { fileURLToPath } from "url";
import router from "./routes/routes.js";
import cors from "cors";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: "../.env" });
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`A ${req.method} request was made to the ${req.url} endpoint`);
  if (req.body && Object.keys(req.body).length) {
    console.log(`with a payload of ${JSON.stringify(req.body)}`);
  }
  next();
};

app.use(logger);

app.use("/api", router);

app.listen(config.PORT, () => {
  console.log(`TypeScript with Express
		http://localhost:${config.PORT}/`);
});
