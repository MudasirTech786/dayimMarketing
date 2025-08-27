import mongoose from "mongoose";

const dsaEventSchema = new mongoose.Schema(
  {
    eventUrl: {
      type: String,
      required: [true, "Please Provide a url"],
      unique: true,
    },
  },
  { timestamps: true }
);

const DsaEvent =
  mongoose.models.dsaEvents || mongoose.model("dsaEvents", dsaEventSchema);

export default DsaEvent;
