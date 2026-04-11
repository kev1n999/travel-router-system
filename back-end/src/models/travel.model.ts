import { Schema, Document, model } from "mongoose";

// Model to Travel structure
interface TravelSchemaProps extends Document {
  name: string; // travel name
}

const travelSchema = new Schema<TravelSchemaProps>({
  name: { type: String, required: true, },
});

export const travelModel = model<TravelSchemaProps>("Travel", travelSchema);
