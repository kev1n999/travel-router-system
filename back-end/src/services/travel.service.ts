import { TravelSchemaProps } from "../interfaces/travel.interface";
import { travelModel } from "../models/travel.model";

// service to create a new travel
export async function createTravelService({ name }: TravelSchemaProps) {
  if (!name?.trim()) throw new Error("An error ocurred! The parameter name is missing.");
  // create a new travel
  const travel = await travelModel.create({ name: name.trim(), });
  return travel;
}
