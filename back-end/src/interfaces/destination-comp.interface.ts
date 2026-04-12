import { Schema } from "mongoose";

// Model to compare two destinations
export interface DestinationCompProps {
  travelId: Schema.Types.ObjectId;
  destinationXId: Schema.Types.ObjectId;
  destinationYId: Schema.Types.ObjectId;
  distance: number;
  duration: number;
}
