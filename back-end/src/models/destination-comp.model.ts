import { Schema, Document, model } from "mongoose";
import { DestinationCompProps } from "../interfaces/destination-comp.interface";

type DestinationCompDocument = DestinationCompProps & Document;

const destinationCompSchema = new Schema<DestinationCompDocument>({
  travelId: { type: Schema.Types.ObjectId, ref: "Travel", required: true },
  destinationXId: { type: Schema.Types.ObjectId, ref: "Destination", required: true },
  destinationYId: { type: Schema.Types.ObjectId, ref: "Destination", required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
});

export const destinationCompModel = model<DestinationCompDocument>("DestinationComp", destinationCompSchema);
