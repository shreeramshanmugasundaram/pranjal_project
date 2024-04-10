import mongoose from "mongoose";

// Define schema
const pDetectedSchema = new mongoose.Schema(
  {
    pest_name: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  },
  { collection: "p_detected" }
);

// Create model
const pDetected = mongoose.model("p_detected", pDetectedSchema);

export default pDetected;
