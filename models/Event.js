import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    venue: {
      required: true,
      type: String,
    },
    description: { type: String },
    date: { type: String },
    registrationLink: { type: String },
    registrationCloses: { type: String },
    imageURL: { type: String },
  },
  { timestamps: true }
);
export default mongoose.model("Event", dataSchema);
