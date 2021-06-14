export default {
  apexCharts: {
    basicBar: {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          },
        },
        title: {
          text: 'Licenses Sold by Country',
          align: 'center'
        },
        colors: ['#4d53e0'],
        plotOptions: {
          bar: {
            borderRadius: 8,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
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
        }
      },
    },
    stackedBar: {
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Fiction Books Sales',
          align: 'center',
        },
        colors: ['#00A5FF', '#43BC13', '#FFC405', '#FF5668', '#4d53e0'],
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
          labels: {
            formatter: function (val) {
              return val + "K"
            },
            style: {
              colors: "#6B859E",
            },
          }
        },
        yaxis: {
          title: {
            text: undefined,
            align: 'center',
          },
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    },
    negativeValuesBar: {
      series: [
        {
          name: 'Males',
          data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
            3.9, 3.5, 3
          ]
        },
        {
          name: 'Females',
          data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
            -4.1, -4, -4.1, -3.4, -3.1, -2.8
          ]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 440,
          stacked: true,
          toolbar: {
            show: false
          },
        },
        colors: ['#00A5FF', '#FF5668'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },

        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
          },
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%"
            }
          }
        },
        title: {
          text: 'Mauritius population pyramid 2020',
          align: 'center',
        },
        xaxis: {
          categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
          ],
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%"
            },
            style: {
              colors: "#6B859E",
            },
          }
        },
      },
    },
    groupedBar: {
      series: [{
        name: 'Apps',
        data: [34, 52, 41, 44, 32, 47, 51]
      }, {
        name: 'Licenses',
        data: [32, 44, 33, 32, 53, 33, 52,]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 430,
          toolbar: {
            show: false
          },
        },
        colors: ['#6b859e', '#FFA100'],
        title: {
          text: 'Company Solds by Year',
          align: 'center',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 2,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
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
        }
      },
    },
  },
  recharts: {
    simpleBar: {
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
    mixBarChart: {
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
    stackedChart: {
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
    positiveAndNegativeChart: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: -30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: -20,
          pv: -98,
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
          uv: -18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: -38,
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
  },
  echarts: {

  },
}
