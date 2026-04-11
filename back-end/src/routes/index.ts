import { Router } from "express";
import { Request, Response } from "express";
import { createTravelController } from "../controllers/travel.controller";

export const router = Router();

// test route
router.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Hello World!");
});

// route to create a new travel by travel name
router.post("/create-travel", createTravelController);
