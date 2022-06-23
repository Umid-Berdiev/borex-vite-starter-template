<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "@/app.config";
import { SimpleBar } from "simplebar-vue3";

export default {
  page: {
    title: "Crypto",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    SimpleBar
  },
  data() {
    return {
      sparklineoptions1: {
        series: [
          {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
          },
        ],
        chartOptions: {
          chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: {
              enabled: true,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          colors: ["#63ad6f"],
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      sparklineoptions2: {
        series: [
          {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: {
              enabled: true,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          colors: ["#f56e6e"],
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      sparklineoptions3: {
        series: [
          {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
          },
        ],
        chartOptions: {
          chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: {
              enabled: true,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          colors: ["#63ad6f"],
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      barCandlestickChart: {
        series: [
          {
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33],
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11],
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65],
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24],
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47],
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31],
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02],
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02],
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01],
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02],
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91],
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612],
              },
              {
                x: new Date(1538800200000),
                y: [6612.09, 6615.13, 6605.09, 6612],
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95],
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67],
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4],
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9],
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45],
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35],
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53],
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19],
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620],
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620],
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61],
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58],
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86],
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16],
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4],
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81],
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578],
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579],
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96],
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92],
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22],
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08],
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25],
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97],
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602],
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95],
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02],
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591],
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592],
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34],
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86],
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01],
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25],
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99],
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81],
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96],
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39],
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27],
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55],
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02],
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01],
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06],
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89],
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5],
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86],
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07],
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606],
              },
            ],
          },
        ],
        chartOptions: {
          chart: {
            type: "candlestick",
            height: 380,
            toolbar: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: 1,
              shadeIntensity: 1,
              type: "vertical",
              opacityFrom: 0.9,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#f56e6e",
                downward: "#3b76e1",
              },
            },
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        },
      },
      lineChartOptions1: {
        series: [
          {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#f56e6e"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions2: {
        series: [
          {
            data: [50, 15, 35, 62, 23, 56, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#f56e6e"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions3: {
        series: [
          {
            data: [25, 35, 35, 89, 63, 25, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#63ad6f"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions4: {
        series: [
          {
            data: [50, 15, 35, 34, 23, 56, 65, 41, 36, 41, 32],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#f56e6e"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions5: {
        series: [
          {
            data: [45, 53, 24, 89, 63, 60, 36, 50, 36, 32, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#63ad6f"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions6: {
        series: [
          {
            data: [50, 15, 35, 62, 23, 56, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#63ad6f"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions7: {
        series: [
          {
            data: [63, 41, 20, 34, 42, 62, 35, 42, 36, 21, 56],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#f56e6e"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions8: {
        series: [
          {
            data: [50, 15, 35, 62, 23, 56, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#63ad6f"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions9: {
        series: [
          {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#63ad6f"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions10: {
        series: [
          {
            data: [63, 42, 25, 63, 24, 56, 44, 63, 36, 24, 30],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#f56e6e"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
    };
  },
};
</script>

<template>
  <Layout :pagetitle="'Crypto'">
    <div class="row">
      <div class="col-xxl-8">
        <div class="row">
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-primary bg-gradient">
                        <i class="mdi mdi-bitcoin font-size-24"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-15 mb-2">
                      BTC<span class="text-muted">/BIDR</span>
                    </h5>
                    <p class="text-muted mb-0">26.5049</p>
                  </div>
                  <div class="flex-shrink-0 float-end">
                    <apexchart
                      height="40"
                      width="100"
                      type="area"
                      :options="sparklineoptions1.chartOptions"
                      :series="sparklineoptions1.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-primary bg-gradient">
                        <i class="mdi mdi-ethereum font-size-24"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-15 mb-2">
                      ETH<span class="text-muted">/BIDR</span>
                    </h5>
                    <p class="text-muted mb-0">9,562.00</p>
                  </div>
                  <div class="flex-shrink-0 float-end">
                    <apexchart
                      width="100"
                      height="40"
                      type="area"
                      :options="sparklineoptions2.chartOptions"
                      :series="sparklineoptions2.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center overflow-hidden">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-primary bg-gradient">
                        <i class="mdi mdi-litecoin font-size-24"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="font-size-15 mb-2">
                      LTC<span class="text-muted">/BIDR</span>
                    </h5>
                    <p class="text-muted mb-0">209.11</p>
                  </div>
                  <div class="flex-shrink-0 float-end">
                    <apexchart
                      width="100"
                      height="40"
                      type="area"
                      :options="sparklineoptions3.chartOptions"
                      :series="sparklineoptions3.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-wrap align-items-center">
              <h5 class="card-title me-2">Market Overview</h5>
              <div class="ms-auto">
                <div>
                  <button
                    type="button"
                    class="btn btn-primary bg-gradient btn-sm"
                  >
                    ALL
                  </button>
                  <button
                    type="button"
                    class="btn btn-light bg-gradient btn-sm"
                  >
                    1M
                  </button>
                  <button
                    type="button"
                    class="btn btn-light bg-gradient btn-sm"
                  >
                    6M
                  </button>
                  <button
                    type="button"
                    class="btn btn-light bg-gradient btn-sm"
                  >
                    1Y
                  </button>
                </div>
              </div>
            </div>

            <apexchart
              height="350"
              type="candlestick"
              :options="barCandlestickChart.chartOptions"
              :series="barCandlestickChart.series"
            ></apexchart>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-start">
                  <div class="flex-grow-1">
                    <h5 class="card-title mb-3">Recent Activity</h5>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="dropdown">
                      <a
                        class="dropdown-toggle text-reset"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="text-muted"
                          >Monthly<i class="mdi mdi-chevron-down ms-1"></i
                        ></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Yearly</a>
                        <a class="dropdown-item" href="#">Monthly</a>
                        <a class="dropdown-item" href="#">Weekly</a>
                        <a class="dropdown-item" href="#">Today</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="px-3 mx-n3"
                  data-simplebar
                  style="max-height: 456px"
                >
                  <ol class="activity-checkout mb-0 mt-2 ps-3">
                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">02</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-primary bg-gradient"
                        >
                          <i
                            class="mdi mdi-bitcoin text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Bought Bitcoin
                            </h5>
                            <p class="text-truncate text-muted mb-2">
                              Using Visa credit ****9563
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-success">
                              +0.03555 BTC
                            </h5>
                            <p class="text-muted mb-0">+2,322 USD</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">04</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-danger bg-gradient"
                        >
                          <i
                            class="mdi mdi-ethereum text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Sent Ethereum
                            </h5>
                            <p class="text-truncate text-muted mb-2">
                              0xb77ad0099e21da49e0fa2e431
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-danger">
                              -0.56525 ETH
                            </h5>
                            <p class="text-muted mb-0">-500 USD</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">08</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-primary bg-gradient"
                        >
                          <i
                            class="mdi mdi-litecoin text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Bought Litecoin
                            </h5>
                            <p class="text-truncate text-muted mb-2">
                              Using Visa credit ****5256
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-success">
                              +0.65425 LTC
                            </h5>
                            <p class="text-muted mb-0">+2,000 USD</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">20</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-primary bg-gradient"
                        >
                          <i
                            class="mdi mdi-bitcoin text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Sent Bitcoin
                            </h5>
                            <p class="text-truncate text-muted mb-2">
                              1d4fca87fa49e05d6fa2e431
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-success">
                              +5.5265 BTC
                            </h5>
                            <p class="text-muted mb-0">+3,562 USC</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">13</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-danger bg-gradient"
                        >
                          <i
                            class="mdi mdi-ethereum text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Sent Ethereum
                            </h5>
                            <p class="text-truncate text-muted mb-2">
                              7ad0099e21d4fcae05d205e53
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-danger">
                              -1.5654 ETH
                            </h5>
                            <p class="text-muted mb-0">- 1,562 USD</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">24</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-primary bg-gradient"
                        >
                          <i
                            class="mdi mdi-litecoin text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Sent Litecoin
                            </h5>
                            <p class="text-truncate text-muted mb-2">
                              Using Visa credit ****6965
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-success">
                              2.5566 LTC
                            </h5>
                            <p class="text-muted mb-0">+4,652 USD</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item crypto-activity">
                      <div class="crypto-date">
                        <h6 class="text-uppercase font-size-11 mb-0 text-muted">
                          Nov
                        </h6>
                        <h5 class="font-size-15 mb-0 mt-1">30</h5>
                      </div>
                      <div class="avatar checkout-icon p-1">
                        <div
                          class="avatar-title rounded-circle bg-primary bg-gradient"
                        >
                          <i
                            class="mdi mdi-bitcoin text-white font-size-20"
                          ></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div class="d-flex">
                          <div class="flex-grow-1 overflow-hidden me-4">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Bought Bitcoin
                            </h5>
                            <p class="text-truncate text-muted mb-0">
                              99e21d4fca87fa205e53f38bf0
                            </p>
                          </div>
                          <div class="flex-shrink-0 text-end">
                            <h5 class="mb-1 font-size-14 text-success">
                              +0.5 BTC
                            </h5>
                            <p class="text-muted mb-0">$178.53</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-start">
                  <div class="flex-grow-1">
                    <h5 class="card-title mb-4">Trading</h5>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="dropdown">
                      <a
                        class="dropdown-toggle text-reset"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-wallet me-1"></i>
                        <span class="d-none d-sm-inline-block"
                          >Wallet Balance <i class="mdi mdi-chevron-down"></i
                        ></span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-end dropdown-menu-md"
                      >
                        <div class="dropdown-item-text">
                          <div>
                            <p class="text-muted mb-2">Available Balance</p>
                            <h5 class="mb-0">$ 9148.23</h5>
                          </div>
                        </div>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item" href="#">
                          BTC : <span class="float-end">1.02356</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          ETH : <span class="float-end">0.04121</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          LTC : <span class="float-end">0.00356</span>
                        </a>

                        <div class="dropdown-divider"></div>

                        <a
                          class="dropdown-item text-primary text-center fw-semibold"
                          href="#"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="nav nav-pills bg-light rounded" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#buy-tab"
                      role="tab"
                      aria-selected="true"
                      >Buy</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#sell-tab"
                      role="tab"
                      aria-selected="false"
                      >Sell</a
                    >
                  </li>
                </ul>

                <div class="tab-content mt-4" style="min-height: 340px">
                  <div class="tab-pane active" id="buy-tab" role="tabpanel">
                    <form>
                      <div class="mb-2">
                        <label>Currency :</label>

                        <div class="row">
                          <div class="col-xl-4 col-sm-4">
                            <div class="mb-3">
                              <label class="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="buycurrencyoption1"
                                  class="card-radio-input"
                                  checked
                                />
                                <span class="card-radio">
                                  <i
                                    class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                                  ></i>
                                  <span>Bitcoin</span>
                                </span>
                              </label>

                              <div>
                                <p
                                  class="text-muted font-size-13 mb-1 text-truncate"
                                >
                                  Current price :
                                </p>
                                <h5 class="font-size-14">0.00016 BTC</h5>
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-4 col-sm-4">
                            <div class="mb-3">
                              <label class="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="buycurrencyoption2"
                                  class="card-radio-input"
                                />
                                <span class="card-radio">
                                  <i
                                    class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                                  ></i>
                                  <span>Ethereum</span>
                                </span>
                              </label>

                              <div>
                                <p
                                  class="text-muted font-size-13 mb-1 text-truncate"
                                >
                                  Current price :
                                </p>
                                <h5 class="font-size-14">0.0073 ETH</h5>
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-4 col-sm-4">
                            <div class="mb-3">
                              <label class="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="buycurrencyoption3"
                                  class="card-radio-input"
                                />

                                <span class="card-radio">
                                  <i
                                    class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                                  ></i>
                                  <span>litecoin</span>
                                </span>
                              </label>

                              <div>
                                <p
                                  class="text-muted font-size-13 mb-1 text-truncate"
                                >
                                  Current price :
                                </p>
                                <h5 class="font-size-14">0.025 LTC</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-2">
                        <label>Payment method :</label>

                        <div class="row">
                          <div class="col-xl-6 col-sm-4">
                            <label class="card-radio-label mb-3">
                              <input
                                type="radio"
                                name="pay-method"
                                id="pay-methodoption1"
                                class="card-radio-input"
                              />

                              <span class="card-radio">
                                <i
                                  class="fab fa-cc-mastercard font-size-20 text-primary align-middle me-2"
                                ></i>
                                <span>Credit / Debit Card</span>
                              </span>
                            </label>
                          </div>

                          <div class="col-xl-6 col-sm-4">
                            <label class="card-radio-label mb-3">
                              <input
                                type="radio"
                                name="pay-method"
                                id="pay-methodoption3"
                                class="card-radio-input"
                                checked
                              />

                              <span class="card-radio">
                                <i
                                  class="fab fa-cc-paypal font-size-20 text-primary align-middle me-2"
                                ></i>
                                <span>Paypal</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label>Add value :</label>

                        <div class="row">
                          <div class="col-sm-6">
                            <div class="input-group mb-2 currency-value">
                              <span class="input-group-text">Bitcoin</span>

                              <input
                                type="text"
                                class="form-control"
                                placeholder="Bitcoin"
                              />
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="input-group mb-2">
                              <input
                                type="text"
                                class="form-control text-sm-end"
                                placeholder="USD Amount"
                              />

                              <span class="input-group-text">USD Amount</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <button
                          type="button"
                          class="btn btn-success bg-gradient"
                        >
                          Buy Crypto currency
                        </button>
                      </div>
                    </form>
                  </div>

                  <div class="tab-pane" id="sell-tab" role="tabpanel">
                    <form>
                      <div class="mb-2">
                        <label>Currency :</label>

                        <div class="row">
                          <div class="col-xl-4 col-sm-4">
                            <div class="mb-3">
                              <label class="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="sellcurrencyoption1"
                                  class="card-radio-input"
                                  checked
                                />

                                <span class="card-radio">
                                  <i
                                    class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                                  ></i>
                                  <span>Bitcoin</span>
                                </span>
                              </label>
                              <div>
                                <p class="text-muted font-size-13 mb-1">
                                  Current price :
                                </p>
                                <h5 class="font-size-14">0.00016 BTC</h5>
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-4 col-sm-4">
                            <div class="mb-3">
                              <label class="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="sellcurrencyoption2"
                                  class="card-radio-input"
                                />

                                <span class="card-radio">
                                  <i
                                    class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                                  ></i>
                                  <span>Ethereum</span>
                                </span>
                              </label>
                              <div>
                                <p class="text-muted font-size-13 mb-1">
                                  Current price :
                                </p>
                                <h5 class="font-size-14">0.0073 ETH</h5>
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-4 col-sm-4">
                            <div class="mb-3">
                              <label class="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="sellcurrencyoption3"
                                  class="card-radio-input"
                                />

                                <span class="card-radio">
                                  <i
                                    class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                                  ></i>
                                  <span>litecoin</span>
                                </span>
                              </label>

                              <div>
                                <p class="text-muted font-size-13 mb-1">
                                  Current price :
                                </p>
                                <h5 class="font-size-14">0.025 LTC</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-4">
                        <label>Email :</label>
                        <input
                          type="email"
                          placeholder="Enter Email"
                          class="form-control"
                        />
                      </div>

                      <div class="mb-3">
                        <label>Add value :</label>

                        <div class="row">
                          <div class="col-sm-6">
                            <div class="input-group mb-2 currency-value">
                              <span class="input-group-text">Crypto value</span>
                              <input
                                type="text"
                                placeholder="Crypto Value"
                                class="form-control"
                              />
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="input-group mb-2">
                              <input
                                type="text"
                                placeholder="USD Amount"
                                class="form-control text-sm-end"
                              />
                              <span class="input-group-text">USD Amount</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <button
                          type="button"
                          class="btn btn-danger bg-gradient"
                        >
                          Sell Crypto currency
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- end tab content -->
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
      </div>

      <div class="col-xxl-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Wallet Balance</h5>

            <div class="card bg-primary bg-gradient text-white visa-card mb-0">
              <div class="card-body">
                <div>
                  <i class="bx bxl-visa visa-pattern"></i>

                  <div class="float-end">
                    <i class="bx bxl-visa visa-logo display-3"></i>
                  </div>

                  <div>
                    <i class="bx bx-chip h1 text-warning"></i>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-3">
                    <p class="mb-2 text-truncate">
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                  <div class="col-3">
                    <p class="mb-2 text-truncate">
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                  <div class="col-3">
                    <p class="mb-2 text-truncate">
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                  <div class="col-3">
                    <p class="mb-2 text-truncate">
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                </div>

                <div class="mt-5">
                  <h5 class="text-white float-end mb-0">12/22</h5>
                  <h5 class="text-white mb-0">Jennifer Bennett</h5>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <p class="text-muted">Available Balance</p>
              <h4 class="font-size-20 mb-2">$46,256,342.00</h4>
              <p class="text-muted">5,56.52645.258</p>

              <div class="row mt-4 pb-3">
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-soft-primary">
                        <i
                          class="mdi mdi-arrow-down font-size-22 text-primary"
                        ></i>
                      </div>
                    </div>
                    <div class="flex-1 ms-3">
                      <h5 class="mb-1 font-size-16">$84,652.00</h5>
                      <p class="text-muted mb-0">Income</p>
                    </div>
                  </div>
                  <div class="mt-3 mb-4 mb-md-0">
                    <button
                      type="button"
                      class="btn btn-primary bg-gradient w-100"
                    >
                      Receive
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-soft-danger">
                        <i
                          class="mdi mdi-arrow-up font-size-22 text-danger"
                        ></i>
                      </div>
                    </div>
                    <div class="flex-1 ms-3">
                      <h5 class="mb-1 font-size-16">$25,365.00</h5>
                      <p class="text-muted mb-0">Expense</p>
                    </div>
                  </div>
                  <div class="mt-3">
                    <button
                      type="button"
                      class="btn btn-danger bg-gradient w-100"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>

              <hr class="mb-4" />
              <h4 class="card-title mb-4">Recent Transactions</h4>
              <SimpleBar
                class="list-unstyled mb-0 px-3 mx-n3"
                data-simplebar
                style="max-height: 465px"
              >
                <li class="py-2 pt-0">
                  <div class="transactions-contain border rounded">
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-5">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar">
                              <div class="avatar-title rounded bg-soft-success">
                                <i
                                  class="bx bx-down-arrow-circle font-size-24 text-success"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Buy Bitcoin
                            </h5>
                            <p class="text-muted mb-0">Today</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-sm-3">
                        <div class="mt-3 mt-md-0 text-md-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            $ 1,020
                          </h5>
                          <p class="text-muted mb-0 text-truncate">Amount</p>
                        </div>
                      </div>
                      <div class="col-auto col-sm-4">
                        <div class="mt-3 mt-md-0 text-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            0.016554 BTC
                          </h5>
                          <p class="text-muted mb-0">Coin Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2">
                  <div class="transactions-contain border rounded">
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-5">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar">
                              <div class="avatar-title rounded bg-soft-success">
                                <i
                                  class="bx bx-down-arrow-circle font-size-24 text-success"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Buy Etherium
                            </h5>
                            <p class="text-muted mb-0">Today</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-sm-3">
                        <div class="mt-3 mt-md-0 text-md-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            $ 3,246
                          </h5>
                          <p class="text-muted mb-0 text-truncate">Amount</p>
                        </div>
                      </div>
                      <div class="col-auto col-sm-4">
                        <div class="mt-3 mt-md-0 text-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            2.562444 ETH
                          </h5>
                          <p class="text-muted mb-0">Coin Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2">
                  <div class="transactions-contain border rounded">
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-5">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar">
                              <div class="avatar-title rounded bg-soft-danger">
                                <i
                                  class="bx bx-up-arrow-circle font-size-24 text-danger"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Sell Litecoin
                            </h5>
                            <p class="text-muted mb-0">Tomorrow</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-sm-3">
                        <div class="mt-3 mt-md-0 text-md-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            $ 3,560
                          </h5>
                          <p class="text-muted mb-0 text-truncate">Amount</p>
                        </div>
                      </div>
                      <div class="col-auto col-sm-4">
                        <div class="mt-3 mt-md-0 text-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            -0.526324 LTC
                          </h5>
                          <p class="text-muted mb-0">Coin Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2">
                  <div class="transactions-contain border rounded">
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-5">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar">
                              <div class="avatar-title rounded bg-soft-success">
                                <i
                                  class="bx bx-down-arrow-circle font-size-24 text-success"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Buy Bitcoin
                            </h5>
                            <p class="text-muted mb-0">Tomorrow</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-sm-3">
                        <div class="mt-3 mt-md-0 text-md-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            $ 1,020
                          </h5>
                          <p class="text-muted mb-0 text-truncate">Amount</p>
                        </div>
                      </div>
                      <div class="col-auto col-sm-4">
                        <div class="mt-3 mt-md-0 text-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            6.652654 BTC
                          </h5>
                          <p class="text-muted mb-0">Coin Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="py-2">
                  <div class="transactions-contain border rounded">
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-5">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar">
                              <div class="avatar-title rounded bg-soft-danger">
                                <i
                                  class="bx bx-up-arrow-circle font-size-24 text-danger"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Buy Bitcoin
                            </h5>
                            <p class="text-muted mb-0">Yesterday</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-sm-3">
                        <div class="mt-3 mt-md-0 text-md-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            $ 2,125
                          </h5>
                          <p class="text-muted mb-0 text-truncate">Amount</p>
                        </div>
                      </div>
                      <div class="col-auto col-sm-4">
                        <div class="mt-3 mt-md-0 text-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            - 0.016554 BTC
                          </h5>
                          <p class="text-muted mb-0">Coin Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="transactions-contain border rounded">
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-5">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar">
                              <div class="avatar-title rounded bg-soft-danger">
                                <i
                                  class="bx bx-up-arrow-circle font-size-24 text-danger"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              Buy Bitcoin
                            </h5>
                            <p class="text-muted mb-0">Yesterday</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-sm-3">
                        <div class="mt-3 mt-md-0 text-md-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            $ 3,652
                          </h5>
                          <p class="text-muted mb-0 text-truncate">Amount</p>
                        </div>
                      </div>
                      <div class="col-auto col-sm-4">
                        <div class="mt-3 mt-md-0 text-end">
                          <h5 class="font-size-14 mb-1 text-truncate">
                            - 5.526552 BTC
                          </h5>
                          <p class="text-muted mb-0 text-truncate">
                            Coin Value
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </SimpleBar>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <div class="flex-grow-1">
                <h5 class="card-title mb-3">
                  Cryptocurrency Prices by Market Cap
                </h5>
              </div>
              <div class="flex-shrink-0">
                <div class="dropdown">
                  <a
                    class="dropdown-toggle text-reset"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="fw-semibold">Report By:</span>
                    <span class="text-muted"
                      >Monthly<i class="mdi mdi-chevron-down ms-1"></i
                    ></span>
                  </a>

                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Yearly</a>
                    <a class="dropdown-item" href="#">Monthly</a>
                    <a class="dropdown-item" href="#">Weekly</a>
                    <a class="dropdown-item" href="#">Today</a>
                  </div>
                </div>
              </div>
            </div>

            <SimpleBar
              class="table-responsive"
              data-simplebar
              style="max-height: 400px"
            >
              <table class="table align-middle table-striped table-nowrap mb-0">
                <thead>
                  <tr>
                    <th class="align-middle">#</th>
                    <th class="align-middle">Coin</th>
                    <th class="align-middle" style="width: 280px"></th>
                    <th class="align-middle">Price</th>
                    <th class="align-middle">1h</th>
                    <th class="align-middle">24h</th>
                    <th class="align-middle">24h volume</th>
                    <th class="align-middle">Mkt Cap</th>
                    <th class="align-middle">Last 7 Days</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >1
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                      ></i
                      >Bitcoin
                    </td>
                    <td>
                      BTC <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$52,635.25</td>
                    <td>
                      <span class="text-danger"> -0.4%</span>
                    </td>
                    <td>
                      <span class="text-danger"> -0.7%</span>
                    </td>
                    <td>$65,235,352,524</td>
                    <td>$2,632,452,652,632</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions1.chartOptions"
                        :series="lineChartOptions1.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >2
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-ethereum font-size-24 text-muted align-middle me-2"
                      ></i
                      >Ethereum
                    </td>
                    <td>
                      ETH <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$4,718.09</td>
                    <td>
                      <span class="text-danger"> -0.4%</span>
                    </td>
                    <td>
                      <span class="text-success"> 6.6%</span>
                    </td>
                    <td>$32,768,536,239</td>
                    <td>$560,017,311,187</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions2.chartOptions"
                        :series="lineChartOptions2.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >3
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-litecoin font-size-24 text-primary align-middle me-2"
                      ></i
                      >Litecoin
                    </td>
                    <td>LTC</td>
                    <td>$52,635.25</td>
                    <td>
                      <span class="text-success"> -0.1%</span>
                    </td>
                    <td>
                      <span class="text-success"> -0.5%</span>
                    </td>
                    <td>$23,154,356,321</td>
                    <td>$1,235,321,541,231</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions3.chartOptions"
                        :series="lineChartOptions3.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >4
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-shape-polygon-plus font-size-24 text-warning align-middle me-2"
                      ></i
                      >Polygon
                    </td>
                    <td>
                      MATIC <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$1.90</td>
                    <td>
                      <span class="text-success"> 0.4%</span>
                    </td>
                    <td>
                      <span class="text-danger"> -0.7%</span>
                    </td>
                    <td>$1,286,361,294</td>
                    <td>$12,954,356,323</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions4.chartOptions"
                        :series="lineChartOptions4.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >5
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-judaism font-size-24 text-primary align-middle me-2"
                      ></i
                      >Dai
                    </td>
                    <td>Dai</td>
                    <td>$0.997608</td>
                    <td>
                      <span class="text-danger"> -0.4%</span>
                    </td>
                    <td>
                      <span class="text-Success"> 0.0%</span>
                    </td>
                    <td>$760,103,372</td>
                    <td>$8,848,073,381</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions5.chartOptions"
                        :series="lineChartOptions5.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >6
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-chart-line-stacked font-size-24 text-success align-middle me-2"
                      ></i
                      >The Graph
                    </td>
                    <td>
                      GRT <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$0.957746</td>
                    <td>
                      <span class="text-success"> 3.9% </span>
                    </td>
                    <td>
                      <span class="text-success"> 4.5%</span>
                    </td>
                    <td>$178,723,251</td>
                    <td>$4,664,906,946</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions6.chartOptions"
                        :series="lineChartOptions6.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >7
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                      ></i
                      >Bitcoin
                    </td>
                    <td>
                      BTC <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$52,635.25</td>
                    <td>
                      <span class="text-danger"> -0.4%</span>
                    </td>
                    <td>
                      <span class="text-danger"> -0.7%</span>
                    </td>
                    <td>$65,235,352,524</td>
                    <td>$2,632,452,652,632</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions7.chartOptions"
                        :series="lineChartOptions7.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >8
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-ethereum font-size-24 text-muted align-middle me-2"
                      ></i
                      >Ethereum
                    </td>
                    <td>
                      ETH <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$4,718.09</td>
                    <td>
                      <span class="text-danger"> -0.4%</span>
                    </td>
                    <td>
                      <span class="text-success"> 6.6%</span>
                    </td>
                    <td>$32,768,536,239</td>
                    <td>$560,017,311,187</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions8.chartOptions"
                        :series="lineChartOptions8.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >9
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-litecoin font-size-24 text-primary align-middle me-2"
                      ></i
                      >Litecoin
                    </td>
                    <td>LTC</td>
                    <td>$52,635.25</td>
                    <td>
                      <span class="text-success"> -0.1%</span>
                    </td>
                    <td>
                      <span class="text-success"> -0.5%</span>
                    </td>
                    <td>$23,154,356,321</td>
                    <td>$1,235,321,541,231</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions9.chartOptions"
                        :series="lineChartOptions9.series"
                      ></apexchart>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i
                        class="mdi mdi-star-outline font-size-18 me-2 align-middle"
                      ></i
                      >10
                    </td>
                    <td class="fw-semibold">
                      <i
                        class="mdi mdi-shape-polygon-plus font-size-24 text-warning align-middle me-2"
                      ></i
                      >Polygon
                    </td>
                    <td>
                      MATIC <span class="badge badge-soft-success">Buy</span>
                    </td>
                    <td>$1.90</td>
                    <td>
                      <span class="text-success"> 0.4%</span>
                    </td>
                    <td>
                      <span class="text-danger"> -0.7%</span>
                    </td>
                    <td>$1,286,361,294</td>
                    <td>$12,954,356,323</td>
                    <td>
                      <apexchart
                        width="120"
                        height="30"
                        type="line"
                        :options="lineChartOptions10.chartOptions"
                        :series="lineChartOptions10.series"
                      ></apexchart>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- end table -->
            </SimpleBar>
            <!-- end table responsive -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
