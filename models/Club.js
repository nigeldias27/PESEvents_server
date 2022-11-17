import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    clubName: {
      required: true,
      type: String,
    },
    clubHead: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    verified: { type: Boolean },
  },
  { timestamps: true }
);
export default mongoose.model("Club", dataSchema);
