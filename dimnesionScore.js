// Given values
const minimum = 10;
const maximum = 100; 
const x = 50;
const weight = 0.5;

// Calculate linear score
const linearScore = (x - minimum) / (maximum - minimum);

// Calculate dimensionless score  
const dimensionlessScore = weight * linearScore;

console.log(dimensionlessScore);