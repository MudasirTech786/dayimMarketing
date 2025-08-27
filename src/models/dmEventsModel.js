import mongoose from "mongoose";

const dmEventSchema = new mongoose.Schema(
  {
    eventUrl: {
      type: String,
      required: [true, "Please Provide a url"],
      unique: true,
    },
  },
  { timestamps: true }
);

const DmEvent =
  mongoose.models.dmEvents || mongoose.model("dmEvents", dmEventSchema);

export default DmEvent;
