import { Schema, Document, model } from "mongoose";
import { DestinationSchemaProps } from "../interfaces/destination.interface";

type destinationDocument = DestinationSchemaProps & Document;

const destinationSchema = new Schema<destinationDocument>({
  travelId: { type: Schema.Types.ObjectId, ref: "Travel", required: true, },
  order: { type: Number, required: true, },
  latitude: { type: Number, required: true, },
  longitude: { type: Number, required: true, },
});

export const destinationModel = model<destinationDocument>("Destination", destinationSchema);
