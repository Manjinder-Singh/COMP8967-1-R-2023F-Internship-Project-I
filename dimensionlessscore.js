// Given values
const minValue = 10;
const maxValue = 100;
const weightFactor = 0.5;

// Define an array of 'x' values for each situation
const situation1XValues = [50, 60, 70];
const situation2XValues = [30, 40, 50];

// Function to compute the overall normalized rating for a situation
function calculateOverallNormalizedRating(xValues) {
  let overallNormalizedRating = 0;

  for (const x of xValues) {
    // Calculate the linear score
    const linearScore = (x - minValue) / (maxValue - minValue);

    // Calculate the normalized rating
    const normalizedRating = weightFactor * linearScore;

    // Add the normalized rating to the total
    overallNormalizedRating += normalizedRating;
  }

  return overallNormalizedRating;
}

// Calculate and print the total normalized rating for each situation
const totalRatingSituation1 = calculateOverallNormalizedRating(situation1XValues);
const totalRatingSituation2 = calculateOverallNormalizedRating(situation2XValues);

console.log("Total Normalized Rating for Situation 1:", totalRatingSituation1);
console.log("Total Normalized Rating for Situation 2:", totalRatingSituation2);

// Calculate and print the maximum value of total ratings
const maxTotalRating = Math.max(totalRatingSituation1, totalRatingSituation2);
console.log("Maximum Total Normalized Rating:", maxTotalRating);
