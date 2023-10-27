// Given values
const minimum = 10;
const maximum = 100;
const weight = 0.5;

// Define an array of 'x' values for each scenario
const scenario1XValues = [50, 60, 70];
const scenario2XValues = [30, 40, 50];

// Function to calculate the total dimensionless score for a scenario
function calculateTotalDimensionlessScore(xValues) {
  let totalDimensionlessScore = 0;

  for (const x of xValues) {
    // Calculate linear score
    const linearScore = (x - minimum) / (maximum - minimum);

    // Calculate dimensionless score
    const dimensionlessScore = weight * linearScore;

    // Add the dimensionless score to the total
    totalDimensionlessScore += dimensionlessScore;
  }

  return totalDimensionlessScore;
}

// Calculate and print the total dimensionless score for each scenario
const totalScoreScenario1 = calculateTotalDimensionlessScore(scenario1XValues);
const totalScoreScenario2 = calculateTotalDimensionlessScore(scenario2XValues);

console.log("Total Dimensionless Score for Scenario 1:", totalScoreScenario1);
console.log("Total Dimensionless Score for Scenario 2:", totalScoreScenario2);

// Calculate and print the maximum value of total scores
const maxTotalScore = Math.max(totalScoreScenario1, totalScoreScenario2);
console.log("Maximum Total Dimensionless Score:", maxTotalScore);
