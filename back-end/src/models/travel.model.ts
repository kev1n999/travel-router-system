import { Schema, Document, model } from "mongoose";
import { TravelSchemaProps } from "../interfaces/travel.interface";

type travelDocument = TravelSchemaProps & Document;

const travelSchema = new Schema<travelDocument>({
  name: { type: String, required: true, },
});

export const travelModel = model<travelDocument>("Travel", travelSchema);
