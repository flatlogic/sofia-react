import Highcharts from "highcharts";
import usdeur from "./usdeur";

export default {
  apexCharts: {
    basicLine: {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          toolbar: false,
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#F7F8FB', 'transparent'],
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        colors: ['#4d53e0']
      }
    },
    basicWithLabels: {
      series: [
        {
          name: "High - 2020",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2020",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          }
        },
        colors: ['#FF4B23', '#00A5FF'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Average Temperature',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#F7F8FB', 'transparent'],
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: {
          title: {
            text: 'Temperature',
            style: {
              fontSize: '12px',
              fontWeight: 400,
              color: "#6B859E",
            },
          },
          labels: {
            style: {
              colors: ["#6B859E"],
            },
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    },
    lineColumn: {
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 384, 671, 327, 413, 201, 352, 622]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 39, 22, 17, 31, 26]
      }],
      options: {
        colors: ["#C7D0D9", "#FF5668"],
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "straight",
          width: [0, 1]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
          style: {
            fontSize: '10px',
            fontWeight: 500,
          },
          background: {
            borderWidth: 0,
          },
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        xaxis: {
          type: 'category',
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: [
          {
            title: {
              text: 'Website Blog',
              style: {
                fontSize: '12px',
                fontWeight: 400,
                color: "#6B859E",
              },
            },
            labels: {
              style: {
                colors: ["#6B859E"],
              },
            },
          }, {
            opposite: true,
            title: {
              text: 'Social Media',
              style: {
                fontSize: '12px',
                fontWeight: 400,
                color: "#6B859E",
              },
            },
            labels: {
              style: {
                colors: ["#6B859E"],
              },
            },
          }],
        fill: {
          type: "solid",
          opacity: 1,
        }
      },
    },
    lineArea: {
      series:[
        {
          name: "Website Blog Visits",
          data: [670, 720, 770, 690, 900, 970, 1030],
        },
        {
          name: "Social Media Visits",
          data: [760, 590, 910, 850, 700, 1050, 920],
        },
      ],
      options: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        xaxis: {
          type: "category",
          categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
          ],
          labels: {
            style: {
              colors: "#6B859E",
              opacity: 0.7,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#6B859E"],
              opacity: 0.7,
            },
          },
        },
        tooltip: {
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            stops: [40, 90, 100]
          }
        },
        colors: ["#4D53E0", "#41D5E2"],
        legend: {
          show: true,
          horizontalAlign: "center",
        },
      },
    },
  },
  recharts: {
    simpleLineChart: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 78,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: 38,
          amt: 25,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
    stackedAreaChart: {
      data: [
        {
          name: 'Page A',
          uv: 50,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 40,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 98,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: 38,
          amt: 25,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
    dashedLineChart: {
      data: [
        {
          name: 'Page A',
          uv: 32,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 32,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 35,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 33,
        },
        {
          name: 'Page E',
          uv: 31,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: 38,
          amt: 35,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
    verticalLineChart: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 68,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 48,
          amt: 21,
        },
      ],
    },
  },
  highcharts: {
    basicLine: {
      title: {
        text: 'Solar Employment Growth by Sector, 2013-2020'
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2013 to 2020'
        }
      },
      colors: ['#4d53e0', '#00A5FF', '#FF5668', '#FFA100', '#6b859e'],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2013
        }
      },
      series: [{
        name: 'Installation',
        data: [43, 52, 57, 69, 97, 119, 137, 154],
        marker: { symbol: 'circle' },
      }, {
        name: 'Manufacturing',
        data: [24, 24, 29, 39, 52, 60, 78, 80],
        marker: { symbol: 'circle' },
      }, {
        name: 'Sales & Distribution',
        data: [11, 17, 16, 19, 30, 44, 52, 99],
        marker: { symbol: 'circle' },
      }, {
        name: 'Project Development',
        data: [null, null, 7, 12, 15, 22, 34, 34],
        marker: { symbol: 'circle' },
      }, {
        name: 'Other',
        data: [12, 5, 8, 11, 8, 11, 18, 18],
        marker: { symbol: 'circle' },
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    },
    timeSeries: {
      credits: {
        enabled: false
      },
      colors: ['#4d53e0'],
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: usdeur,
      }]
    },
    timeData: {
      chart: {
        type: 'spline'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Snow depth at Bergen, Norway'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'Snow depth (m)'
        },
        min: 0
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
      },

      plotOptions: {
        series: {
          marker: {
            enabled: true
          }
        }
      },

      colors: ['#95d0fc', '#00A5FF', '#4d53e0', '#2F33A7', '#6b859e'],

      // Define the data points. All series have a dummy year
      // of 1970/71 in order to be compared on the same x axis. Note
      // that in JavaScript, months start at 0 for January, 1 for February etc.
      series: [{
        name: "Winter 2018-2019",
        data: [
          [Date.UTC(1970, 10, 25), 0],
          [Date.UTC(1970, 11,  6), 0.25],
          [Date.UTC(1970, 11, 20), 1.41],
          [Date.UTC(1970, 11, 25), 1.64],
          [Date.UTC(1971, 0,  4), 1.6],
          [Date.UTC(1971, 0, 17), 2.55],
          [Date.UTC(1971, 0, 24), 2.62],
          [Date.UTC(1971, 1,  4), 2.5],
          [Date.UTC(1971, 1, 14), 2.42],
          [Date.UTC(1971, 2,  6), 2.74],
          [Date.UTC(1971, 2, 14), 2.62],
          [Date.UTC(1971, 2, 24), 2.6],
          [Date.UTC(1971, 3,  1), 2.81],
          [Date.UTC(1971, 3, 11), 2.63],
          [Date.UTC(1971, 3, 27), 2.77],
          [Date.UTC(1971, 4,  4), 2.68],
          [Date.UTC(1971, 4,  9), 2.56],
          [Date.UTC(1971, 4, 14), 2.39],
          [Date.UTC(1971, 4, 19), 2.3],
          [Date.UTC(1971, 5,  4), 2],
          [Date.UTC(1971, 5,  9), 1.85],
          [Date.UTC(1971, 5, 14), 1.49],
          [Date.UTC(1971, 5, 19), 1.27],
          [Date.UTC(1971, 5, 24), 0.99],
          [Date.UTC(1971, 5, 29), 0.67],
          [Date.UTC(1971, 6,  3), 0.18],
          [Date.UTC(1971, 6,  4), 0]
        ],
        marker: { symbol: 'circle' },
      }, {
        name: "Winter 2019-2020",
        data: [
          [Date.UTC(1970, 10,  9), 0],
          [Date.UTC(1970, 10, 15), 0.23],
          [Date.UTC(1970, 10, 20), 0.25],
          [Date.UTC(1970, 10, 25), 0.23],
          [Date.UTC(1970, 10, 30), 0.39],
          [Date.UTC(1970, 11,  5), 0.41],
          [Date.UTC(1970, 11, 10), 0.59],
          [Date.UTC(1970, 11, 15), 0.73],
          [Date.UTC(1970, 11, 20), 0.41],
          [Date.UTC(1970, 11, 25), 1.07],
          [Date.UTC(1970, 11, 30), 0.88],
          [Date.UTC(1971, 0,  5), 0.85],
          [Date.UTC(1971, 0, 11), 0.89],
          [Date.UTC(1971, 0, 17), 1.04],
          [Date.UTC(1971, 0, 20), 1.02],
          [Date.UTC(1971, 0, 25), 1.03],
          [Date.UTC(1971, 0, 30), 1.39],
          [Date.UTC(1971, 1,  5), 1.77],
          [Date.UTC(1971, 1, 26), 2.12],
          [Date.UTC(1971, 3, 19), 2.1],
          [Date.UTC(1971, 4,  9), 1.7],
          [Date.UTC(1971, 4, 29), 0.85],
          [Date.UTC(1971, 5,  7), 0]
        ],
        marker: { symbol: 'circle' },
      }, {
        name: "Winter 2020-2021",
        data: [
          [Date.UTC(1970, 9, 15), 0],
          [Date.UTC(1970, 9, 31), 0.09],
          [Date.UTC(1970, 10,  7), 0.17],
          [Date.UTC(1970, 10, 10), 0.1],
          [Date.UTC(1970, 11, 10), 0.1],
          [Date.UTC(1970, 11, 13), 0.1],
          [Date.UTC(1970, 11, 16), 0.11],
          [Date.UTC(1970, 11, 19), 0.11],
          [Date.UTC(1970, 11, 22), 0.08],
          [Date.UTC(1970, 11, 25), 0.23],
          [Date.UTC(1970, 11, 28), 0.37],
          [Date.UTC(1971, 0, 16), 0.68],
          [Date.UTC(1971, 0, 19), 0.55],
          [Date.UTC(1971, 0, 22), 0.4],
          [Date.UTC(1971, 0, 25), 0.4],
          [Date.UTC(1971, 0, 28), 0.37],
          [Date.UTC(1971, 0, 31), 0.43],
          [Date.UTC(1971, 1,  4), 0.42],
          [Date.UTC(1971, 1,  7), 0.39],
          [Date.UTC(1971, 1, 10), 0.39],
          [Date.UTC(1971, 1, 13), 0.39],
          [Date.UTC(1971, 1, 16), 0.39],
          [Date.UTC(1971, 1, 19), 0.35],
          [Date.UTC(1971, 1, 22), 0.45],
          [Date.UTC(1971, 1, 25), 0.62],
          [Date.UTC(1971, 1, 28), 0.68],
          [Date.UTC(1971, 2,  4), 0.68],
          [Date.UTC(1971, 2,  7), 0.65],
          [Date.UTC(1971, 2, 10), 0.65],
          [Date.UTC(1971, 2, 13), 0.75],
          [Date.UTC(1971, 2, 16), 0.86],
          [Date.UTC(1971, 2, 19), 1.14],
          [Date.UTC(1971, 2, 22), 1.2],
          [Date.UTC(1971, 2, 25), 1.27],
          [Date.UTC(1971, 2, 27), 1.12],
          [Date.UTC(1971, 2, 30), 0.98],
          [Date.UTC(1971, 3,  3), 0.85],
          [Date.UTC(1971, 3,  6), 1.04],
          [Date.UTC(1971, 3,  9), 0.92],
          [Date.UTC(1971, 3, 12), 0.96],
          [Date.UTC(1971, 3, 15), 0.94],
          [Date.UTC(1971, 3, 18), 0.99],
          [Date.UTC(1971, 3, 21), 0.96],
          [Date.UTC(1971, 3, 24), 1.15],
          [Date.UTC(1971, 3, 27), 1.18],
          [Date.UTC(1971, 3, 30), 1.12],
          [Date.UTC(1971, 4,  3), 1.06],
          [Date.UTC(1971, 4,  6), 0.96],
          [Date.UTC(1971, 4,  9), 0.87],
          [Date.UTC(1971, 4, 12), 0.88],
          [Date.UTC(1971, 4, 15), 0.79],
          [Date.UTC(1971, 4, 18), 0.54],
          [Date.UTC(1971, 4, 21), 0.34],
          [Date.UTC(1971, 4, 25), 0]
        ],
        marker: { symbol: 'circle' },
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            plotOptions: {
              series: {
                marker: {
                  radius: 2.5
                }
              }
            }
          }
        }]
      }
    },
    dataLabels: {
      chart: {
        type: 'line'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      colors: ['#4d53e0', '#6b859e'],
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        marker: { symbol: 'circle' },
      }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
        marker: { symbol: 'circle' },
      }],
    },
  }
}
