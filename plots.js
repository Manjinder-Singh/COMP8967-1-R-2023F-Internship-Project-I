// Define a color scale based on category names
var categoryColors = {};
var colors = [
    'rgb(31, 119, 180)', 'rgb(255, 127, 14)', 'rgb(44, 160, 44)',
    'rgb(214, 39, 40)', 'rgb(148, 103, 189)'
];


// Load data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Find the category with the highest value
        var highestValueCategory = data.data.reduce((prev, current) => (prev.value > current.value) ? prev : current);

        // Display Recommended Category box
        var recommendedCategoryContent = `Based on Above Dimensionless scores, the Recommended Category is : ${highestValueCategory.category} and value is : (${highestValueCategory.value})`;
        document.getElementById('recommended-category-content').innerHTML = recommendedCategoryContent;

        
        // Call createLineChart instead of createBarGraph
        // createLineChart(data.data);
        // Create and display Bar chart 
        createBarGraph(data.data);
        // Create and display Horizontal Bar chart
        createHorizontalBarGraph(data.data);
        // Create and display donut chart
        createDonutChart(data.data);
    })
    .catch(error => console.error('Error loading data:', error));


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

    var config = {
        modeBarButtonsToRemove: ['toggleSpikelines', 'zoomIn2d', 'zoomOut2d', 'sendDataToCloud', 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'autoScale2d', 'resetScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian'],
        displaylogo: false
     };

    Plotly.newPlot('myDiv1', data, layout, config);
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

    var config = {
        modeBarButtonsToRemove: ['toggleSpikelines', 'zoomIn2d', 'zoomOut2d', 'sendDataToCloud', 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'autoScale2d', 'resetScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian'],
        displaylogo: false
     };

    Plotly.newPlot('myDiv2', data, layout, config);
}

// Function to create a donut chart with consistent category colors
function createDonutChart(donutChartData) {
    // Sort the data by value in descending order
    donutChartData.sort((a, b) => b.value - a.value);

    var labels = donutChartData.map(item => item.category);
    var values = donutChartData.map(item => item.value);

    // Assign colors to categories consistently
    var categoryColorsForPlot = labels.map(category => categoryColors[category] || colors.pop());
    categoryColorsForPlot.forEach((color, index) => {
        categoryColors[labels[index]] = color;
    });

    var trace = {
        labels: labels,
        values: values,
        type: 'pie',
        hole: 0.4,  // Set hole size to create a donut chart
        marker: {
            colors: categoryColorsForPlot
        }
    };

    var data = [trace];

    var layout = {
        title: 'Donut Chart (Sorted)'
    };

    var config = {
        modeBarButtonsToRemove: ['hoverClosestPie', 'toggleHover', 'toggleSpikelines', 'zoomIn2d', 'zoomOut2d', 'sendDataToCloud', 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'autoScale2d', 'resetScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian'],
        displaylogo: false
     };    

    Plotly.newPlot('myDiv3', data, layout, config);
    
}

// Function to create a line chart with consistent category colors
function createLineChart(lineChartData) {
    // Sort the data by value in descending order
    lineChartData.sort((a, b) => b.value - a.value);

    var xValues = lineChartData.map(item => item.category);
    var yValues = lineChartData.map(item => item.value);

    // Assign colors to categories consistently
    var categoryColorsForPlot = xValues.map(category => categoryColors[category] || colors.pop());
    categoryColorsForPlot.forEach((color, index) => {
        categoryColors[xValues[index]] = color;
    });

    var data = [{
        x: xValues,
        y: yValues,
        type: 'line',
        marker: {
            color: categoryColorsForPlot
        }
    }];

    var layout = {
        title: 'Line Chart (Sorted)',
        xaxis: {
            title: 'Categories'
        },
        yaxis: {
            title: 'Values'
        }
    };

    var config = {
        modeBarButtonsToRemove: ['toggleSpikelines', 'zoomIn2d', 'zoomOut2d', 'sendDataToCloud', 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'autoScale2d', 'resetScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian'],
        displaylogo: false
    };

    Plotly.newPlot('myDiv4', data, layout, config);
}
