function submitTable3() {
  extractAndStoreData();
  var table3 = document.getElementById("table3");
  var jsonData = [];
  var columnMinValues = {}; // Store minimum values for each column
  var columnMaxValues = {}; // Store maximum values for each column

  for (var i = 1; i < table3.rows.length; i++) {
    var row = table3.rows[i];
    var rowData = {};
    rowData["Name"] = row.cells[0].textContent; // Get the "Name" from the first cell

    for (var j = 1; j < row.cells.length; j++) {
      var header = table3.rows[0].cells[j].textContent;
      var value = parseFloat(row.cells[j].querySelector("input").value);
      rowData[header] = value;

      // Update column minimum and maximum values
      if (i === 1) {
        columnMinValues[header] = value;
        columnMaxValues[header] = value;
      } else {
        if (value < columnMinValues[header]) {
          columnMinValues[header] = value;
        }
        if (value > columnMaxValues[header]) {
          columnMaxValues[header] = value;
        }
      }
    }

    jsonData.push(rowData);
  }

  // Calculate and store linear scores for each column
  for (var i = 1; i < table3.rows[0].cells.length; i++) {
    var header = table3.rows[0].cells[i].textContent;
    for (var j = 0; j < jsonData.length; j++) {
      console.log("min :"+columnMinValues[header]+" Max :"+columnMaxValues[header]+ " x :"+jsonData[j][header]);
      var linearScore =
        (columnMinValues[header] - jsonData[j][header]) /
        (columnMaxValues[header] - columnMinValues[header]);
      jsonData[j][header + " Linear Score"] = linearScore;
      console.log(header+ " linear Score: "+linearScore);
    }
  }

  // Convert jsonData to JSON string
  var jsonString = JSON.stringify(jsonData);

  // Save the JSON data to local storage
  localStorage.setItem("table3Data", jsonString);

  // Store the linear scores for each row in local storage
  for (var k = 0; k < jsonData.length; k++) {
    var rowName = jsonData[k]["Name"];
    var linearScoreKey = rowName + " Linear Score";
    console.log(rowName + " Linear Score");
    var linearScoreValue = jsonData[k][linearScoreKey];
    localStorage.setItem(rowName, linearScoreValue);
  }

  // Call the function to calculate and store dimensionless scores
  calculateAndStoreDimensionlessScores();

  // Call the function to calculate and store total dimensionless scores per scenario
  calculateAndStoreTotalDimensionlessScores();

  console.log("JSON data saved to local storage.");
}

function extractAndStoreData() {
  var table1 = document.getElementById("table1");
  var data = [];

  // Start from the second row (index 1) to skip the header row
  for (var i = 1; i < table1.rows.length; i++) {
    var row = table1.rows[i];
    var name = row.cells[1].querySelector("input").value;
    var weight = parseFloat(row.cells[3].querySelector("input").value);

    // Create an object with the extracted data
    var item = {
      Name: name+" Linear Score",
      Weight: weight
    };

    data.push(item);
  }

  // Convert the data to a JSON string
  var jsonData = JSON.stringify(data);

  // Store the JSON data in local storage
  localStorage.setItem("table1Data", jsonData);
}

function calculateAndStoreDimensionlessScores() {
  // Retrieve the JSON objects from local storage
  var table1Data = JSON.parse(localStorage.getItem("table1Data"));
  var table3Data = JSON.parse(localStorage.getItem("table3Data"));

  // Create a new JSON object to store the dimensionless scores
  var dimensionlessScores = [];

  // Iterate through the objects in table3Data
  for (var i = 0; i < table3Data.length; i++) {
    var table3Item = table3Data[i];
    var name = table3Item.Name;

    var dimensionlessScore = {};

    // Iterate through the keys in the table3 item
    for (var key in table3Item) {
      if (key !== "Name") {
        // Find the weight for the current key from table1Data
        var weightItem = table1Data.find(item => item.Name === key);
        if (weightItem) {
          dimensionlessScore[key] = weightItem.Weight * table3Item[key];
        }
      }
    }

    dimensionlessScores.push({ Name: name, Scores: dimensionlessScore });
  }

  // Convert the dimensionlessScores array to a JSON string
  var jsonDimensionlessScores = JSON.stringify(dimensionlessScores);

  // Store the JSON object with dimensionless scores in local storage
  localStorage.setItem("dimensionlessScores", jsonDimensionlessScores);
}

function calculateAndStoreTotalDimensionlessScores() {
  // Retrieve the dimensionless scores from local storage
  var dimensionlessScores = JSON.parse(localStorage.getItem("dimensionlessScores"));

  if (dimensionlessScores) {
    // Create a new JSON object to store the total dimensionless scores per scenario
    var totalDimensionlessScorePerScenario = {};

    // Iterate through the dimensionless scores and calculate the total for each scenario
    dimensionlessScores.forEach(function (item) {
      var scenarioName = item.Name;
      var scores = item.Scores;

      var totalScore = 0;

      // Sum all the dimensionless scores for the current scenario
      for (var key in scores) {
        totalScore += scores[key];
      }

      // Store the total dimensionless score for the scenario
      totalDimensionlessScorePerScenario[scenarioName] = totalScore;
    });

    // Convert the totalDimensionlessScorePerScenario object to a JSON string
    var jsonTotalDimensionlessScorePerScenario = JSON.stringify(totalDimensionlessScorePerScenario);

    // Store the JSON object with total dimensionless scores per scenario in local storage
    localStorage.setItem("totalDimensionlessScorePerScenario", jsonTotalDimensionlessScorePerScenario);
  }
}

// Call the function to calculate and store dimensionless scores
// calculateAndStoreDimensionlessScores();



// Call the function to extract and store the data

// Given values
// function submitTable3() {
//   var table3 = document.getElementById("table3");
//   var jsonData = [];
  

//   for (var i = 1; i < table3.rows.length; i++) {
//     var row = table3.rows[i];
//     var rowData = {};
//     var score = 0;
//     var minimum = table3.rows[1].cells[1].querySelector("input").value;
//     var maximum = table3.rows[1].cells[1].querySelector("input").value;
//     rowData["Name"] = row.cells[0].textContent; // Get the "Name" from the first cell

//     for (var j = 1; j < row.cells.length; j++) {
//       var header = table3.rows[0].cells[j].textContent;
//       var value = row.cells[j].querySelector("input").value;
//       rowData[header] = value;
//       score += parseInt(value);
//     }
//     updatedVal = row.cells[1].querySelector("input").value;
//     if(minimum > updatedVal ){
//       minimum = updatedVal;
//     }
//     else if (maximum < updatedVal){
//       maximum = updatedVal;
//     }
//     localStorage.setItem("Minimum", minimum);
//     localStorage.setItem("Maximum", maximum);
//     localStorage.setItem(rowData["Name"], score);

//     jsonData.push(rowData);
//   }

//   // Convert jsonData to JSON string
//   var jsonString = JSON.stringify(jsonData);

//   // Save the JSON data to local storage
//   localStorage.setItem("table3Data", jsonString);

//   // Send the JSON data to a JavaScript function for processing
//   // var processedData = processJsonData(jsonString);

//   // Save the processed data to local storage
//   // localStorage.setItem("processedData", score);

//   console.log("JSON data saved to local storage.");
// }

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
