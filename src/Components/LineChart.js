import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function LineChart() {
    var options = {
        series: [{
          name: "Guest",
          data: [200,300,200,400,200,300]
        },
        {
          name: "User",
          data: [100, 400, 300, 400, 300,400]
        }
        ],
        chart: {
          height: 100,
          type: 'line',
          zoom: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#E9A0A0','#9BDD7C'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 5, 5],
          curve: 'smooth',
          dashArray: [0, 0, 0]
        },
        title: {
          text: 'Activities',
          align: 'left',
          style: {
            fontSize:  '25px',
            fontWeight:  'bold',
            color:"black"
          },
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
          position: 'top',
          fontSize:  '16px',
          fontWeight:  'bold',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -60,
          markers: {
            width: 15,
            height: 15,
        },
        },
        xaxis: {
          categories: [0,'Week 1', 'Week 2', 'Week 3', 'Week 4',' '],
        },
        yaxis: {
          categories: [0,100,200,300,400,500],
          min:0,
          max:500
        }
      };
  return (
    <ReactApexChart height="100%" options={options} series={options.series} />
    
  )
}
