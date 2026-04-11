import mongoose from "mongoose";

// function to connect wiht database(mongoDB)
export async function mongoConnect(mongoUri: string) {
  if (!mongoUri) {
    throw new Error("An error ocurred to connect! You need to add the mongoUri.");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected with mongo!");
  } catch (err) {
    console.error(`An error ocurred to connect with mongo!\n${err}`);
  }
}
