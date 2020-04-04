import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [ reactiveProp ],
  mounted () {
    this.renderChart(
      this.chartData,
      {
        scales: {
          yAxes: [ {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          } ],
          xAxes: [ {
            gridLines: {
              display: false
            }
          } ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}