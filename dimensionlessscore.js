// Given values
function submitTable3() {
  var table3 = document.getElementById("table3");
  var jsonData = [];
  

  for (var i = 1; i < table3.rows.length; i++) {
    var row = table3.rows[i];
    var rowData = {};
    var score = 0;
    rowData["Name"] = row.cells[0].textContent; // Get the "Name" from the first cell

    for (var j = 1; j < row.cells.length; j++) {
      var header = table3.rows[0].cells[j].textContent;
      var value = row.cells[j].querySelector("input").value;
      rowData[header] = value;
      score += parseInt(value);
    }
    localStorage.setItem(rowData["Name"], score);

    jsonData.push(rowData);
  }

  // Convert jsonData to JSON string
  var jsonString = JSON.stringify(jsonData);

  // Save the JSON data to local storage
  localStorage.setItem("table3Data", jsonString);

  // Send the JSON data to a JavaScript function for processing
  // var processedData = processJsonData(jsonString);

  // Save the processed data to local storage
  // localStorage.setItem("processedData", score);

  console.log("JSON data saved to local storage.");
}

function processJsonData(jsonString) {
  // Example processing: Convert the JSON string to an object and calculate the sum of 'Data1' and 'Data2'
  var data = JSON.parse(jsonString);
  var result = [];

  for (var i = 0; i < data.length; i++) {
      var sum = parseInt(data[i]["Data1"]) + parseInt(data[i]["Data2"]);
      result.push({ "Name": data[i]["Name"], "Sum": sum });
  }

  return JSON.stringify(result);
}

function toNumeric(){
  var dropDown = document.getElementById()
  var descriptiveValue = dropDown.value;
  var numericVal;

  if (descriptiveValue == "low"){
    numericVal = 1;
  }
  else if(descriptiveValue == "low medium"){
    numericVal = 2;
  }else if(descriptiveValue == "medium"){
    numericVal = 3;
  }else if(descriptiveValue == "medium high"){
    numericVal = 4;
  }else if(descriptiveValue == "high"){
    numericVal = 5
  }
  else{
    console.log("Invalid String value");
  }
  return numericVal;

}

// const minValue = 10;
// const maxValue = 100;
// const weightFactor = 0.5;

// Define an array of 'x' values for each situation
// const situation1XValues = [50, 60, 70];
// const situation2XValues = [30, 40, 50];

// // Function to compute the overall normalized rating for a situation
// function calculateOverallNormalizedRating(xValues) {
//   let overallNormalizedRating = 0;

//   for (const x of xValues) {
//     // Calculate the linear score
//     const linearScore = (x - minValue) / (maxValue - minValue);

//     // Calculate the normalized rating
//     const normalizedRating = weightFactor * linearScore;

//     // Add the normalized rating to the total
//     overallNormalizedRating += normalizedRating;
//   }

//   return overallNormalizedRating;
// }

// // Calculate and print the total normalized rating for each situation
// const totalRatingSituation1 = calculateOverallNormalizedRating(situation1XValues);
// const totalRatingSituation2 = calculateOverallNormalizedRating(situation2XValues);

// console.log("Total Normalized Rating for Situation 1:", totalRatingSituation1);
// console.log("Total Normalized Rating for Situation 2:", totalRatingSituation2);

// // Calculate and print the maximum value of total ratings
// const maxTotalRating = Math.max(totalRatingSituation1, totalRatingSituation2);
// console.log("Maximum Total Normalized Rating:", maxTotalRating);
