import { TravelSchemaProps } from "../interfaces/travel.interface";
import { travelModel } from "../models/travel.model";

// service to create a new travel
export async function createTravelService({ name }: TravelSchemaProps) {
  if (!name?.trim()) throw new Error("An error ocurred! The parameter `name` is missing.");
  // create a new travel
  const travel = await travelModel.create({ name: name.trim(), });
  return travel;
}

export async function getTravelService(travelId: string) {
  if (!travelId) throw new Error("An error ocurred! The parameter `travelId` is missing.");
  // get the travel by id
  const travel = await travelModel.findOne({ _id: travelId, });
  if (!travel) throw new Error("Travel not found!");
  return travel;
}

// travelName: new name to update the travel
export async function updateTravelService(travelId: string, travelName: string) {
  if (!travelId) throw new Error("An error ocurred! The parameter `travelId` is missing.");
  // get the travel by id
  const travel = await travelModel.findOne({ _id: travelId, });
  if (!travel) throw new Error("Travel not found!");
  return await travelModel.updateOne({ _id: travelId }, { name: travelName, });
}

export async function deleteTravelSerivce(travelId: string) {
  if (!travelId) throw new Error("An error ocurred! The parameter `travelId` is missing.");
  const travel = await travelModel.findOne({ _id: travelId, });
  if (!travel) throw new Error("Travel not found!");
  return travelModel.deleteOne({ _id: travelId });
}
