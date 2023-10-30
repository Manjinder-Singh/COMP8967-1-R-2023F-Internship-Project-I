// Load data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        createLinePlots(data.linePlots);
        createBarPlots(data.barPlots);
        createStackedBarPlots(data.stackedBarPlots);
        createPieChart(data.pieChart);
        createDonutChart(data.donutChart);
        createBubbleChart(data.bubbleChart);
    })
    .catch(error => console.error('Error loading data:', error));

    function createLinePlots(lineData) {
      // Create line plots using lineData
      var data = [];
      for (var i = 0; i < lineData.length; i++) {
          var trace = {
              x: lineData[i].x,
              y: lineData[i].y,
              mode: 'lines',
              name: lineData[i].label,
              line: {
                  dash: 'solid',
                  width: 4
              }
          };
          data.push(trace);
      }
  
      var layout = {
          title: 'Line Plots for 4 Categories',
          xaxis: {
              range: [2001, 2013], // Adjust the range as per your data
              autorange: false
          },
          yaxis: {
              range: [0, 85], // Adjust the range as per your data
              autorange: false
          },
          legend: {
              y: 0.5,
              traceorder: 'reversed',
              font: {
                  size: 16
              }
          }
      };
  
      Plotly.newPlot('myDiv1', data, layout);
  }  

function createBarPlots(barData) {
    // Create bar plots using barData
    var xValue = barData.xValue;
    var yValues = barData.yValues;
    var data = [];

    for (var i = 0; i < 4; i++) {
        var trace = {
            x: xValue,
            y: yValues[i],
            type: 'bar',
            text: yValues[i].map(String),
            textposition: 'auto',
            name: 'Category ' + (i + 1),
            marker: {
                opacity: 0.6,
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            }
        };
        data.push(trace);
    }

    var layout = {
        title: 'Bar Plots for 4 Categories',
        xaxis: {
            title: 'Categories'
        },
        yaxis: {
            title: 'Values'
        }
    };

    Plotly.newPlot('myDiv2', data, layout);
}

function createStackedBarPlots(stackedBarData) {
    // Create stacked bar plots using stackedBarData
    var xValue = stackedBarData.xValue;
    var yValues = stackedBarData.yValues;
    var data = [];

    for (var i = 0; i < 4; i++) {
        var trace = {
            x: xValue,
            y: yValues[i],
            type: 'bar',
            text: yValues[i].map(String),
            textposition: 'auto',
            name: 'Category ' + (i + 1),
            marker: {
                opacity: 0.6,
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            }
        };
        data.push(trace);
    }

    var layout = {
        title: 'Stacked Bar Plots for 4 Categories',
        barmode: 'stack',
        xaxis: {
            title: 'Categories'
        }
    };

    Plotly.newPlot('myDiv3', data, layout);
}

function createPieChart(pieChartData) {
    // Create a pie chart using pieChartData
    var categories = pieChartData.categories;
    var values = pieChartData.values;

    var data = [{
        labels: categories,
        values: values,
        type: 'pie',
        marker: {
            colors: ['rgb(158,202,225)', 'rgb(154, 216, 247)', 'rgb(72, 140, 200)', 'rgb(42, 87, 141)']
        }
    }];

    var layout = {
        title: 'Pie Chart for 4 Categories'
    };

    Plotly.newPlot('myDiv4', data, layout);
}

function createDonutChart(donutChartData) {
    // Create a donut chart using donutChartData
    var categories = donutChartData.categories;
    var values = donutChartData.values;

    var data = [{
        labels: categories,
        values: values,
        type: 'pie',
        hole: 0.4, // Set the size of the hole to create a donut chart
        marker: {
            colors: ['rgb(255, 119, 119)', 'rgb(119, 255, 136)', 'rgb(170, 102, 255)', 'rgb(255, 235, 102)']
        }
    }];

    var layout = {
        title: 'Donut Chart for 4 Categories'
    };

    Plotly.newPlot('myDiv5', data, layout);
}

function createBubbleChart(bubbleChartData) {
    // Create bubble chart using bubbleChartData
    var categories = bubbleChartData.categories;
    var xValues = bubbleChartData.xValues;
    var yValues = bubbleChartData.yValues;
    var markerSizes = bubbleChartData.markerSizes;
    var data = [];

    for (var i = 0; i < categories.length; i++) {
        var trace = {
            x: [xValues[i]],
            y: [yValues[i]],
            mode: 'markers',
            type: 'scatter',
            name: categories[i],
            marker: {
                size: markerSizes[i],
                color: 'rgb(' + (i * 60) + ',' + (i * 80) + ',' + (i * 100) + ')'
            }
        };
        data.push(trace);
    }

    var layout = {
        title: 'Bubble Chart for 4 Categories',
        xaxis: {
            title: 'X-axis'
        },
        yaxis: {
            title: 'Y-axis'
        }
    };

    Plotly.newPlot('myDiv6', data, layout);
}
