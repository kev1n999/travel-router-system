import { Request, Response } from "express"; 
import { compareDestinationService, createDestinationService, deleteDestinationService, getDestinationsService } from "../services/destination.service";

export async function createDestinationController(
  req: Request,
  res: Response,
) {
  const travelId = req.params.id as string; 
  const { latitude, longitude } = req.body; 

  if (!travelId) return res.status(400).json({
    "message": "An error ocurred! The travelId parameter is missing!",
  });
  if (!latitude || !longitude) return res.status(400).json({
    "message": "An error ocurred! The latitude and longitude parameters is missing!",
  });

  try {
    const destination = await createDestinationService(travelId, latitude, longitude);
    return res.status(201).json({
      "message": "The destination was created!",
      "result": destination,
    });
  } catch (err: any) {
    return res.status(400).json({
      "message": err.message || "An error ocurred to create the destination! Try again",
    })
  }
}

export async function getDestinationsController(
  req: Request,
  res: Response,
) {
  const travelId = req.params.id as string; 
  if (!travelId) return res.status(400).json({
    "message": "An error ocurred! The travelId parameter is missing!",
  });

  try {
    const destinations = await getDestinationsService(travelId);
    return res.status(200).json({
      "destinations": destinations,
    });
  } catch (err: any) {
    return res.status(400).json({
      "message": err.message || "An error ocurred to get the destinations! Try again",
    });
  }
}

export async function compareDestinationController(
  req: Request,
  res: Response,
) {
  const travelId = req.params.id as string;
  if (!travelId) return res.status(400).json({ 
    "message": "An error ocurred! The travelId is missing."
  });

  const { lat_a, lon_a, lat_b, lon_b } = req.params;
  if (!lat_a || !lon_a || !lat_b || lon_b) {
    return res.status(400).json({
      "message": "An error ocurred! Missing params: lat_a, lon_a, lat_b, lon_b"
    });
  }

  const latA = Number(lat_a)
  const lonA = Number(lon_a)
  const latB = Number(lat_b)
  const lonB = Number(lon_b)

  const result = await compareDestinationService(travelId, latA, lonA, latB, lonB);
  return res.status(200).json({
    "distance_km": result.distance_km,
    "duration_min": result.duration_min,
  });
}

export async function deleteDestinationController(
  req: Request<{ id: string; destinationId: string; }>,
  res: Response,
) {
  const { id, destinationId } = req.params;
  if (!id || !destinationId) return res.status(400).json({
    "message": "An error ocurred! The travelId and destinationId params is missing!",
  });

  try {
    await deleteDestinationService(id, destinationId);
    return res.status(200).json({
      "message": "The destination was deleted!",
    });
  } catch (err: any) {
    return res.status(400).json({
      "message": err.message || "An error ocurred to delete the destination! Try again",
    });
  }
}