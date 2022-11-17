import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    role: {
      type: String,
    },
    club: {
      ref: "Club",
      type: mongoose.Schema.Types.ObjectId,
    },
    profilePic: { type: String },
    srn: { type: String },
    yearofstudy: { type: String },
    campus: { type: String },
    verified: { type: Boolean },
  },
  { timestamps: true }
);
export default mongoose.model("User", dataSchema);
//module.exports = mongoose.model('User', dataSchema)
