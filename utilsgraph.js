var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 2, 3, 1],
    mode: 'lines',
    name: 'Category 1',
    line: {
      dash: 'solid',
      width: 4
    }
  };
  
  var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [6, 8, 7, 8, 6],
    mode: 'lines',
    name: 'Category 2',
    line: {
      dash: 'dashdot',
      width: 4
    }
  };
  
  var trace3 = {
    x: [1, 2, 3, 4, 5],
    y: [11, 13, 12, 13, 11],
    mode: 'lines',
    name: 'Category 3',
    line: {
      dash: 'solid',
      width: 4
    }
  };
  
  var trace4 = {
    x: [1, 2, 3, 4, 5],
    y: [16, 18, 17, 18, 16],
    mode: 'lines',
    name: 'Category 4',
    line: {
      dash: 'dot',
      width: 4
    }
  };
  
  var data = [trace1, trace2, trace3, trace4];
  
  var layout = {
    title: 'Category Plots',
    xaxis: {
      range: [0.75, 5.25],
      autorange: false
    },
    yaxis: {
      range: [0, 18.5],
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
  
  Plotly.newPlot('myDiv', data, layout);
  
//   Line Plots
var xData = [
    [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
    [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
    [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
    [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013]
  ];
  
  var yData = [
    [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
    [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
    [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
    [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23]
  ];
  
  var colors = ['rgba(67,67,67,1)', 'rgba(115,115,115,1)', 'rgba(49,130,189,1)', 'rgba(189,189,189,1)'];
  
  var lineSize = [2, 2, 4, 2];
  
  var labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
  
  var data = [];
  
  for (var i = 0; i < xData.length; i++) {
    var result = {
      x: xData[i],
      y: yData[i],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: colors[i],
        width: lineSize[i]
      }
    };
    var result2 = {
      x: [xData[i][0], xData[i][11]],
      y: [yData[i][0], yData[i][11]],
      type: 'scatter',
      mode: 'markers',
      marker: {
        color: colors[i],
        size: 12
      }
    };
    data.push(result, result2);
  }
  
  var layout = {
    showlegend: false,
    height: 600,
    width: 600,
    xaxis: {
      showline: true,
      showgrid: false,
      showticklabels: true,
      linecolor: 'rgb(204,204,204)',
      linewidth: 2,
      autotick: false,
      ticks: 'outside',
      tickcolor: 'rgb(204,204,204)',
      tickwidth: 2,
      ticklen: 5,
      tickfont: {
        family: 'Arial',
        size: 12,
        color: 'rgb(82, 82, 82)'
      }
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false
    },
    autosize: false,
    margin: {
      autoexpand: false,
      l: 100,
      r: 20,
      t: 100
    },
    annotations: [
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.0,
        y: 1.05,
        xanchor: 'left',
        yanchor: 'bottom',
        text: 'All Categories values by:',
        font: {
          family: 'Arial',
          size: 30,
          color: 'rgb(37,37,37)'
        },
        showarrow: false
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: -0.1,
        xanchor: 'center',
        yanchor: 'top',
        text: 'Source: Manual Data',
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ]
  };
  
  for (var i = 0; i < xData.length; i++) {
    var result = {
      xref: 'paper',
      x: 0.05,
      y: yData[i][0],
      xanchor: 'right',
      yanchor: 'middle',
      text: labels[i] + ' ' + yData[i][0] + '%',
      showarrow: false,
      font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      }
    };
    var result2 = {
      xref: 'paper',
      x: 0.95,
      y: yData[i][11],
      xanchor: 'left',
      yanchor: 'middle',
      text: yData[i][11] + '%',
      font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      },
      showarrow: false
    };
  
    layout.annotations.push(result, result2);
  }
  
  Plotly.newPlot('myDiv5', data, layout);

// Bar Plots
var xValue = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
var yValues = [
  [20, 15, 25, 10],
  [14, 18, 17, 15],
  [23, 12, 21, 13],
  [18, 20, 19, 12]
];

var data = [];

// Create a trace for each category
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

Plotly.newPlot('myDiv6', data, layout);



//   Stacked Bar Plots
var xValue = ['January', 'February', 'March', 'April', 'May'];
var yValues = [
  [20, 14, 23, 18, 25],
  [15, 18, 12, 20, 16],
  [25, 17, 21, 19, 23],
  [10, 15, 13, 12, 18]
];

var data = [];

// Create a trace for each category
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
  title: 'Report for 4 Categories',
  barmode: 'stack',
  xaxis: {
    title: 'Month'
  }
};

Plotly.newPlot('myDiv7', data, layout);

// Pie Chart
var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
var values = [20, 15, 25, 10];

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

Plotly.newPlot('myDiv8', data, layout);


// Donut Chart
var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
var values = [20, 15, 25, 10];

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

Plotly.newPlot('myDiv9', data, layout);

// Buuble Chart
var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
var xValues = [1, 2, 3, 4];
var yValues = [20, 15, 25, 10];
var markerSizes = [30, 40, 50, 60];

var data = [];

for (var i = 0; i < 4; i++) {
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

Plotly.newPlot('myDiv10', data, layout);


  