// // Function to create a bar graph
// function createBarGraph(barData) {
//     // Sort the data by value in ascending order
//     barData.sort((a, b) => b.value - a.value);

//     var xValues = barData.map(item => item.category);
//     var yValues = barData.map(item => item.value);

//     var data = [{
//         x: xValues,
//         y: yValues,
//         type: 'bar'
//     }];

//     var layout = {
//         title: 'Bar Graph (Sorted)',
//         xaxis: {
//             title: 'Categories'
//         },
//         yaxis: {
//             title: 'Values'
//         }
//     };

//     Plotly.newPlot('myDiv1', data, layout);
// }

// // Function to create a horizontal bar graph
// function createHorizontalBarGraph(horizontalBarData) {
//     // Sort the data by value in descending order
//     horizontalBarData.sort((a, b) => a.value - b.value);

//     var yValues = horizontalBarData.map(item => item.category);
//     var xValues = horizontalBarData.map(item => item.value);

//     var data = [{
//         y: yValues,
//         x: xValues,
//         type: 'bar',
//         orientation: 'h'
//     }];

//     var layout = {
//         title: 'Horizontal Bar Graph (Sorted)',
//         yaxis: {
//             title: 'Categories'
//         },
//         xaxis: {
//             title: 'Values'
//         }
//     };

//     Plotly.newPlot('myDiv2', data, layout);
// }

// // Function to create an area chart
// function createAreaChart(areaChartData) {
//     // Sort the data by value in descending order
//     areaChartData.sort((a, b) => b.value - a.value);

//     var xValues = areaChartData.map(item => item.category);
//     var yValues = areaChartData.map(item => item.value);

//     var trace = {
//         x: xValues,
//         y: yValues,
//         type: 'scatter',
//         fill: 'tozeroy'
//     };

//     var data = [trace];

//     var layout = {
//         title: 'Area Chart (Sorted)',
//         xaxis: {
//             title: 'Categories'
//         },
//         yaxis: {
//             title: 'Values'
//         }
//     };

//     Plotly.newPlot('myDiv3', data, layout);
// }

// // Load data from JSON file
// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         createBarGraph(data.barGraph);
//         createHorizontalBarGraph(data.horizontalBarGraph);
//         createAreaChart(data.areaChart);
//     })
//     .catch(error => console.error('Error loading data:', error));





// // Define a color scale for different categories
// var colors = [
//     'rgb(31, 119, 180)', 'rgb(255, 127, 14)', 'rgb(44, 160, 44)',
//     'rgb(214, 39, 40)', 'rgb(148, 103, 189)'
// ];

// // Function to create a bar graph with different colors for categories
// function createBarGraph(barData) {
//     // Sort the data by value in ascending order
//     barData.sort((a, b) => b.value - a.value);

//     var xValues = barData.map(item => item.category);
//     var yValues = barData.map(item => item.value);

//     var data = [{
//         x: xValues,
//         y: yValues,
//         type: 'bar',
//         marker: {
//             color: colors
//         }
//     }];

//     var layout = {
//         title: 'Bar Graph (Sorted)',
//         xaxis: {
//             title: 'Categories'
//         },
//         yaxis: {
//             title: 'Values'
//         }
//     };

//     Plotly.newPlot('myDiv1', data, layout);
// }

// // Function to create a horizontal bar graph with different colors for categories
// function createHorizontalBarGraph(horizontalBarData) {
//     // Sort the data by value in descending order
//     horizontalBarData.sort((a, b) => a.value - b.value);

//     var yValues = horizontalBarData.map(item => item.category);
//     var xValues = horizontalBarData.map(item => item.value);

//     var data = [{
//         y: yValues,
//         x: xValues,
//         type: 'bar',
//         orientation: 'h',
//         marker: {
//             color: colors
//         }
//     }];

//     var layout = {
//         title: 'Horizontal Bar Graph (Sorted)',
//         yaxis: {
//             title: 'Categories'
//         },
//         xaxis: {
//             title: 'Values'
//         }
//     };

//     Plotly.newPlot('myDiv2', data, layout);
// }

// // Function to create an area chart with different colors for categories
// function createAreaChart(areaChartData) {
//     // Sort the data by value in descending order
//     areaChartData.sort((a, b) => b.value - a.value);

//     var xValues = areaChartData.map(item => item.category);
//     var yValues = areaChartData.map(item => item.value);

//     var trace = {
//         x: xValues,
//         y: yValues,
//         type: 'scatter',
//         fill: 'tozeroy',
//         marker: {
//             color: colors
//         }
//     };

//     var data = [trace];

//     var layout = {
//         title: 'Area Chart (Sorted)',
//         xaxis: {
//             title: 'Categories'
//         },
//         yaxis: {
//             title: 'Values'
//         }
//     };

//     Plotly.newPlot('myDiv3', data, layout);
// }

// // Load data from JSON file
// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         createBarGraph(data.barGraph);
//         createHorizontalBarGraph(data.horizontalBarGraph);
//         createAreaChart(data.areaChart);
//     })
//     .catch(error => console.error('Error loading data:', error));






// Define a color scale based on category names
var categoryColors = {};
var colors = [
    'rgb(31, 119, 180)', 'rgb(255, 127, 14)', 'rgb(44, 160, 44)',
    'rgb(214, 39, 40)', 'rgb(148, 103, 189)'
];

// Function to create a bar graph with consistent category colors
function createBarGraph(barData) {
    // Sort the data by value in ascending order
    barData.sort((a, b) => b.value - a.value);

    var xValues = barData.map(item => item.category);
    var yValues = barData.map(item => item.value);

    // Assign colors to categories consistently
    var categoryColorsForPlot = xValues.map(category => categoryColors[category] || colors.pop());
    categoryColorsForPlot.forEach((color, index) => {
        categoryColors[xValues[index]] = color;
    });

    var data = [{
        x: xValues,
        y: yValues,
        type: 'bar',
        marker: {
            color: categoryColorsForPlot
        }
    }];

    var layout = {
        title: 'Bar Graph (Sorted)',
        xaxis: {
            title: 'Categories'
        },
        yaxis: {
            title: 'Values'
        }
    };

    Plotly.newPlot('myDiv1', data, layout);
}

// Function to create a horizontal bar graph with consistent category colors
function createHorizontalBarGraph(horizontalBarData) {
    // Sort the data by value in descending order
    horizontalBarData.sort((a, b) => a.value - b.value);

    var yValues = horizontalBarData.map(item => item.category);
    var xValues = horizontalBarData.map(item => item.value);

    // Assign colors to categories consistently
    var categoryColorsForPlot = yValues.map(category => categoryColors[category] || colors.pop());
    categoryColorsForPlot.forEach((color, index) => {
        categoryColors[yValues[index]] = color;
    });

    var data = [{
        y: yValues,
        x: xValues,
        type: 'bar',
        orientation: 'h',
        marker: {
            color: categoryColorsForPlot
        }
    }];

    var layout = {
        title: 'Horizontal Bar Graph (Sorted)',
        yaxis: {
            title: 'Categories'
        },
        xaxis: {
            title: 'Values'
        }
    };

    Plotly.newPlot('myDiv2', data, layout);
}

// Function to create an area chart with consistent category colors
function createAreaChart(areaChartData) {
    // Sort the data by value in descending order
    areaChartData.sort((a, b) => b.value - a.value);

    var xValues = areaChartData.map(item => item.category);
    var yValues = areaChartData.map(item => item.value);

    // Assign colors to categories consistently
    var categoryColorsForPlot = xValues.map(category => categoryColors[category] || colors.pop());
    categoryColorsForPlot.forEach((color, index) => {
        categoryColors[xValues[index]] = color;
    });

    var trace = {
        x: xValues,
        y: yValues,
        type: 'scatter',
        fill: 'tozeroy',
        marker: {
            color: categoryColorsForPlot
        }
    };

    var data = [trace];

    var layout = {
        title: 'Area Chart (Sorted)',
        xaxis: {
            title: 'Categories'
        },
        yaxis: {
            title: 'Values'
        }
    };

    Plotly.newPlot('myDiv3', data, layout);
}

// Load data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        createBarGraph(data.data);
        createHorizontalBarGraph(data.data);
        createAreaChart(data.data);
    })
    .catch(error => console.error('Error loading data:', error));
