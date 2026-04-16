// const destinationSchema = new Schema<destinationDocument>({
//   travelId: { type: Schema.Types.ObjectId, ref: "Travel", required: true, },
//   order: { type: Number, required: true, },
//   latitude: { type: Number, required: true, },
//   longitude: { type: Number, required: true, },
// });

import { DestinationSchemaProps } from "../interfaces/destination.interface";
import { destinationModel } from "../models/destination.model";
import { travelModel } from "../models/travel.model";
import { Types } from "mongoose";

export async function createDestinationService(
  travelId: string,
  latitude: number,
  longitude: number,
) {
  const travel = await travelModel.findOne({ _id: new Types.ObjectId(travelId) });
  if (!travel) throw new Error("Travel not found!");

  const lastDestination = await destinationModel.findOne({travelId: travel._id,}).sort({ order: -1 });
  const newOrder = lastDestination ? lastDestination.order +1 : 1;
  const destination = await destinationModel.create({
    travelId: travel._id,
    order: newOrder,
    latitude: latitude,
    longitude: longitude,
  });
  return destination;
}

export async function getDestinationsService(
  travelId: string,
): Promise<DestinationSchemaProps[]> {
  const travel = await travelModel.findOne({ _id: new Types.ObjectId(travelId) });
  if (!travel) throw new Error("Travel not found!");
  const destinations = await destinationModel.find({ travelId: travel._id });
  if (!destinations) throw new Error("Destinations not found!");
  return destinations;
}

export async function deleteDestinationService(
  travelId: string,
  destinationId: string,
) {
  const travel = await travelModel.findById(travelId);
  if (!travel) throw new Error("Travel not found!");

  const destination = await destinationModel.findById(destinationId);
  if (!destination) throw new Error("Destination not found!");

  await destinationModel.deleteOne({ _id: destinationId });
  const remaining = await destinationModel.find({ travelId: new Types.ObjectId(travelId) }).sort({ order: 1 });

  for (let i = 0; i < remaining.length; i++) {
    await destinationModel.updateOne(
      { _id: remaining[i]._id },
      { $set: { order: i + 1 } }
    );
  }

  return true;
}