import { Request, Response } from "express";
import { createTravelService } from "../services/travel.service";

// controller to get the request body and create a new travel by the sent name
export async function createTravelController(
  req: Request,
  res: Response,
) {
  try {
    const { name } = req.body;
    const travel = await createTravelService({ name });
    return res.status(201).json({
      "message": "The travel was created as success!",
      "result": travel,
    });
  } catch (err: any) {
    return res.status(400).json({
      "message": err.message || "An error ocurred to create a new travel! try again",
    });
  }
}
