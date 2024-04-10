import pDetected from "../models/pDetected.js";
import pSolution from "../models/pSolution.js";

const PestSolution = async (req, res) => {
  try {
    // Fetch latest 10 pDetected documents
    const latestDetected = await pDetected
      .find()
      .sort({ timestamp: -1 })
      .limit(10);

    // Collect unique pest names from the latest detections
    const pestNames = latestDetected.map((detected) => detected.pest_name);
    console.log(pestNames);
    // Find pSolutions matching the pest names
    const solutions = await pSolution.find({ Pests: { $in: pestNames } });
    console.log(solutions);

    // Prepare response
    const response = latestDetected.map((detected) => {
      const matchingSolution = solutions.find(
        (solution) => solution.Pests === detected.pest_name
      );
      return {
        pDetected: detected,
        pSolution: matchingSolution || "No solution found", // If no matching solution found, return a message
      };
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export default PestSolution;
