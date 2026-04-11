import { Schema, Document, model } from "mongoose";

interface DestinationCompProps extends Document {
  travelId: Schema.Types.ObjectId;
  destinationXId: Schema.Types.ObjectId;
  destinationYId: Schema.Types.ObjectId;
  distance: number;
  duration: number;
}

const destinationCompSchema = new Schema<DestinationCompProps>({
  travelId: { type: Schema.Types.ObjectId, ref: "Travel", required: true },
  destinationXId: { type: Schema.Types.ObjectId, ref: "Destination", required: true },
  destinationYId: { type: Schema.Types.ObjectId, ref: "Destination", required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
});

export const destinationCompModel = model<DestinationCompProps>("DestinationComp", destinationCompSchema);
