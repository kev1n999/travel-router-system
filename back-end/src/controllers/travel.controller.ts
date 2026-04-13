import { Request, Response } from "express";
import { createTravelService, deleteTravelSerivce, getTravelService, updateTravelService } from "../services/travel.service";

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

export async function getTravelController(
  req: Request,
  res: Response,
) {
  const travelId = req.params.id as string;
  if (!travelId) return res.status(400).send('<p>Bad Request! The "travelId" is missing!</p>');

  try {
    const travel = await getTravelService(travelId);
    return res.status(200).json({
      "travel": travel,
    });
  } catch (err: any) {
    return res.status(400).json({
      "message": err.message || "An error ocurred to create a new travel! Try again",
    });
  }
}

export async function updateTravelController(
  req: Request,
  res: Response,
) {
  const travelId = req.params.id as string;
  const { travelName } = req.body;

  if (!travelId) return res.status(400).json({ message: 'travelId is required', });
  if (!travelName) return res.status(400).json({ message: 'travelName is required', });

  try {
    await updateTravelService(travelId, travelName);
    return res.status(200).json({
      message: 'Travel was updated successfully',
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message || 'Unexpected error while updating travel',
    });
  }
}

export async function deleteTravelControler(
  req: Request,
  res: Response,
) {
  const travelId = req.params.id as string;
  if (!travelId) return res.status(400).send('<p>Bad Request! The "travelId" is missing!</p>');

  try {
    await deleteTravelSerivce(travelId);
    return res.status(200).json({
      "message": "Travel was deleted!",
    });
  } catch (err: any) {
    return res.status(400).json({
      "message": err.message || "An error ocurred to delete the travel! Try again",
    })
  }
}
