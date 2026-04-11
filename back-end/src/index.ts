import "dotenv/config";
import { env } from "./config/env";
import { app } from "./server";
import { mongoConnect } from "./database";

const { serverPort, mongoUri } = env;
if (!serverPort) throw new Error("An error ocurred! You need to add the SERVER_PORT in .env!");
if (!mongoUri) throw new Error("An error ocurred! You need to add the mongoURI in .env!");

async function bootstrap() {
  await mongoConnect(mongoUri);
  app.listen(serverPort, () => {
    console.log(`Server listening on: http://localhost:${serverPort}`);
  })
}

bootstrap();
