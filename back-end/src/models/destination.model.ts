import { Schema, Document, model } from "mongoose";

// Destination Model
interface DestinationSchemaProps extends Document {
  travelId: Schema.Types.ObjectId;
  order: number; // order/priority of the destination
  latitude: number;
  longitude: number;
}

const destinationSchema = new Schema<DestinationSchemaProps>({
  travelId: { type: Schema.Types.ObjectId, ref: "Travel", required: true, },
  order: { type: Number, required: true, },
  latitude: { type: Number, required: true, },
  longitude: { type: Number, required: true, },
});

export const destinationModel = model<DestinationSchemaProps>("Destination", destinationSchema);
