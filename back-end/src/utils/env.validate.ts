import { env } from "../config/env";

// a simple function to check if the env variables are ok
export function validateEnv() {
  const { serverPort, mongoUri } = env;

  if (!serverPort) throw new Error("An error ocurred! You need to add the SERVER_PORT in .env!");
  if (!mongoUri) throw new Error("An error ocurred! You need to add the mongoURI in .env!");

  return { serverPort, mongoUri };
}
