import { Schema } from "mongoose";

// Destination Model
export interface DestinationSchemaProps {
  travelId: Schema.Types.ObjectId;
  order: number; // order/priority of the destination
  latitude: number;
  longitude: number;
}
