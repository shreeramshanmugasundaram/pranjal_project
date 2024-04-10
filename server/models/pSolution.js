import mongoose from "mongoose";

// Define schema
const pSolutionSchema = new mongoose.Schema(
  {
    Pests: {
      type: String,
      required: true,
    },
    Chemical_Control: {
      type: String,
      required: true,
    },
    Chemical_Level: {
      type: Number,
      required: true,
    },
    Symptoms: {
      type: String,
      required: true,
    },
    Water_Level: {
      type: Number,
      required: true,
    },
  },
  { collection: "Psolution" }
);

// Create model
const pSolution = mongoose.model("Psolution", pSolutionSchema);

export default pSolution;
