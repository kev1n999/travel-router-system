import "dotenv/config";
import express from "express";
import { env } from "./config/env";
import { router } from "./routes";

const { serverPort } = env;
if (!serverPort) throw new Error("An error ocurred! You need to add the SERVER_PORT in .env!");

const app = express();
app.use(express.json());
app.use(router);

app.listen(serverPort, () => {
  console.log(`Server listening on: http://localhost:${serverPort}`);
})
