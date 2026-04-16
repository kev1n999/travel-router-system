import { Router } from "express";
import { Request, Response } from "express";
import { createTravelController, deleteTravelControler, getTravelController, updateTravelController } from "../controllers/travel.controller";
import { createDestinationController, deleteDestinationController, getDestinationsController } from "../controllers/destination.controller";

export const router = Router();

// test route
router.get("/", (req: Request, res: Response) => res.status(200).send("Hello World!"));

// routes to manage the travel
router.post("/travel", createTravelController);
router.get("/travel/:id", getTravelController);
router.put("/travel/:id", updateTravelController);
router.delete("/travel/:id", deleteTravelControler);

// routes to manage the travel destinations
router.get("/travel/:id/destinations", getDestinationsController);
router.get("/travel/:id/destinations/compare"); 
router.post("/travel/:id/destinations", createDestinationController);
// router.patch("/travel/:id/destinations/reorder")
router.delete("/travel/:id/destinations/:destinationId", deleteDestinationController);
