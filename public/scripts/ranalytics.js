$(document).ready(function(){

    $("#cooTree").hide()

    $( "#cfo" ).click(function() {
         $( "#dropdown" ).text("CFO");
         // $( "#completion" ).text("40%");
         $("#cooTree").hide()
         $("#cfoTree").show()
    });

    $( "#coo" ).click(function() {
         $( "#dropdown" ).text("COO");
         // $( "#completion" ).text("20%");
         $("#cfoTree").hide()
         $("#cooTree").show()
    });

    $( "#monthstats" ).click(function() {
         $( "#monthstats" ).addClass("active");
         $( "#yearstats" ).removeClass("active");
    });

    $( "#yearstats" ).click(function() {
         $( "#yearstats" ).addClass("active");
         $( "#monthstats" ).removeClass("active");
    });
    
// Highcharts.chart('earningPerMonth', {
//     chart: {
//         type: 'column'
//     },
//     exporting: { enabled: false },
//     title: {
//         text: 'Monthly Earning Chart'
//     },

//     subtitle: {
//         text: 'Total amount earned as a raven'
//     },

//     yAxis: {
//          stackLabels: {
//             enabled: true,
//             style: {
//                 fontWeight: 'bold',
//                 color:'gray'
//             }
//          },
//     title: {
//             text: 'Earning Per Month ($)'
//         }
//     },
//     xAxis: {
//         type: 'datetime',
//         dateTimeLabelFormats: { // don't display the dummy year
//             month: '%e. %b',
//             year: '%b'
//         },
//         title: {
//             text: 'Date'
//         }
//     },
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle'
//     },

//     plotOptions: {
//         column: {
//             stacking: 'normal',
//             dataLabels: {
//                 enabled: true,
//                 color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
//             }
//         }
//     },

//     series: [{
//         name: 'Education',
//         data:  [
//             [Date.UTC(2017, 6, 1), 60],
//             [Date.UTC(2017, 7, 1), 20],
//             [Date.UTC(2017, 8, 1), 60],
//             [Date.UTC(2017, 9, 1), 80],
//             [Date.UTC(2017, 10, 1), 100],
//             [Date.UTC(2017, 11, 1), 40],
//             [Date.UTC(2017, 12, 1), 60],
//             [Date.UTC(2018, 1, 1), 20],
//             [Date.UTC(2018, 2, 1), 50],
//             [Date.UTC(2018, 3, 1), 80],
//             [Date.UTC(2018, 4, 1), 160],
//             [Date.UTC(2018, 5, 1), 160],

//         ]},{
//         name: 'Investment',
//         data:  [
//             [Date.UTC(2017, 6, 1), 20],
//             [Date.UTC(2017, 7, 1), 60],
//             [Date.UTC(2017, 8, 1), 20],
//             [Date.UTC(2017, 9, 1), 50],
//             [Date.UTC(2017, 10, 1), 0],
//             [Date.UTC(2017, 11, 1), 40],
//             [Date.UTC(2017, 12, 1), 70],
//             [Date.UTC(2018, 1, 1), 30],
//             [Date.UTC(2018, 2, 1), 70],
//             [Date.UTC(2018, 3, 1), 80],
//             [Date.UTC(2018, 4, 1), 20],
//             [Date.UTC(2018, 5, 1), 10],

//             ]
//         },{
//         name: 'Market',
//         data:  [
//             [Date.UTC(2017, 6, 1), 50],
//             [Date.UTC(2017, 7, 1), 40],
//             [Date.UTC(2017, 8, 1), 80],
//             [Date.UTC(2017, 9, 1), 20],
//             [Date.UTC(2017, 10, 1), 60],
//             [Date.UTC(2017, 11, 1), 10],
//             [Date.UTC(2017, 12, 1), 80],
//             [Date.UTC(2018, 1, 1), 70],
//             [Date.UTC(2018, 2, 1), 30],
//             [Date.UTC(2018, 3, 1), 20],
//             [Date.UTC(2018, 4, 1), 10],
//             [Date.UTC(2018, 5, 1), 50],

//         ]
//     }
//     ],

//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom'
//                 }
//             }
//         }]
//     }

// });

// Highcharts.chart('jobsPerMonth', {
//     exporting: { enabled: false },
//     title: {
//         text: 'Monthly Job Completion'
//     },

//     subtitle: {
//         text: 'Number of Jobs Completed'
//     },

//     yAxis: {
//         title: {
//             text: 'Number of jobs'
//         }
//     },
//     xAxis: {
//         type: 'datetime',
//         dateTimeLabelFormats: { // don't display the dummy year
//             month: '%e. %b',
//             year: '%b'
//         },
//         title: {
//             text: 'Date'
//         }
//     },
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle'
//     },

//     plotOptions: {
//         series: {
//             label: {
//                 connectorAllowed: false
//             },
//         }
//     },

//     series: [{
//         name: 'Education',
//         data:  [
//             [Date.UTC(2017, 6, 1), 2],
//             [Date.UTC(2017, 7, 1), 1],
//             [Date.UTC(2017, 8, 1), 3],
//             [Date.UTC(2017, 9, 1), 4],
//             [Date.UTC(2017, 10, 1), 5],
//             [Date.UTC(2017, 11, 1), 2],
//             [Date.UTC(2017, 12, 1), 1],
//             [Date.UTC(2018, 1, 1), 1],
//             [Date.UTC(2018, 2, 1), 2],
//             [Date.UTC(2018, 3, 1), 3],
//             [Date.UTC(2018, 4, 1), 2],
//             [Date.UTC(2018, 5, 1), 4],

//         ]},{
//         name: 'Investment',
//         data:  [
//             [Date.UTC(2017, 6, 1), 1],
//             [Date.UTC(2017, 7, 1), 3],
//             [Date.UTC(2017, 8, 1), 2],
//             [Date.UTC(2017, 9, 1), 1],
//             [Date.UTC(2017, 10, 1), 0],
//             [Date.UTC(2017, 11, 1), 2],
//             [Date.UTC(2017, 12, 1), 2],
//             [Date.UTC(2018, 1, 1), 1],
//             [Date.UTC(2018, 2, 1), 2],
//             [Date.UTC(2018, 3, 1), 4],
//             [Date.UTC(2018, 4, 1), 1],
//             [Date.UTC(2018, 5, 1), 1],

//             ]
//         },{
//         name: 'Market',
//         data:  [
//             [Date.UTC(2017, 6, 1), 1],
//             [Date.UTC(2017, 7, 1), 2],
//             [Date.UTC(2017, 8, 1), 4],
//             [Date.UTC(2017, 9, 1), 1],
//             [Date.UTC(2017, 10, 1), 2],
//             [Date.UTC(2017, 11, 1), 1],
//             [Date.UTC(2017, 12, 1), 2],
//             [Date.UTC(2018, 1, 1), 2],
//             [Date.UTC(2018, 2, 1), 1],
//             [Date.UTC(2018, 3, 1), 2],
//             [Date.UTC(2018, 4, 1), 1],
//             [Date.UTC(2018, 5, 1), 2],

//         ]
//     }
//     ],

//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom'
//                 }
//             }
//         }]
//     }

// });

Highcharts.chart('lifetimejobsskill', {
  exporting: { enabled: false },
  chart: {
    polar: true,
    type: 'line'
  },

  title: {
    text: 'Number of Jobs Taken by Skills',
    align: 'center',
    x: -80
  },

  pane: {
    size: '80%'
  },

  xAxis: {
    categories: ['Accounting Standards', 'Accounting Systems', 'Business Acumen', 'Business Innovation',
      'Data Analysis', 'Disruption Management', 'Cost Managements', 'Capital Raising'],
    tickmarkPlacement: 'on',
    lineWidth: 0
  },

  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },

  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
  },

  legend: {
    align: 'right',
    verticalAlign: 'top',
    y: 70,
    layout: 'vertical'
  },

  series: [{
    showInLegend: false,
    name: 'jobs',
    data: [23, 63, 54, 45, 22, 32, 21, 98],
    pointPlacement: 'on'
  }]

});



Highcharts.chart('lifetimejobsindustry', {
  exporting: { enabled: false },
  chart: {
    polar: true,
    type: 'line'
  },

  title: {
    text: 'Number of Jobs taken by Industry',
    align: 'center',
    x: -80
  },

  pane: {
    size: '80%'
  },

  xAxis: {
    categories: ['Education', 'Finance', 'Engineering', 'Consulting',
      'Pharmaceutical', 'Manufacturing', 'Consumer Goods', 'Food and Beverages', 'Hospitality'],
    tickmarkPlacement: 'on',
    lineWidth: 0
  },

  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },

  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
  },

  legend: {
    align: 'right',
    verticalAlign: 'top',
    y: 70,
    layout: 'vertical'
  },

  series: [{
    showInLegend: false,
    name: 'jobs',
    data: [56, 23, 56, 78, 98, 23, 30, 23, 1],
    pointPlacement: 'on'
  }]

});



});