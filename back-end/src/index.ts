import "dotenv/config";
import { app } from "./server";
import { mongoConnect } from "./database";
import { validateEnv } from "./utils/env.validate";

const { serverPort, mongoUri } = validateEnv();

async function bootstrap() {
  await mongoConnect(mongoUri);
  app.listen(serverPort, () => {
    console.log(`Server listening on: http://localhost:${serverPort}`);
  })
}

bootstrap();
