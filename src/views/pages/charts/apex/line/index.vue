<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "@/app.config";

import {
  basicLineChart,
  zoomableChart,
  lineDatalabelChart,
  lineAnnotation,
  syncingLineChart,
  syncingAreaChart,
  brushLineChart,
  brushAreaChart,
  steplineChart,
  gradientLineChart,
  realtimeLineChart,
  dashedLineChart,
  missingDataChart,
} from "./data";

/**
 * Line chart component
 */
export default {
  page: {
    title: "Line Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      basicLineChart: basicLineChart,
      zoomableChart: zoomableChart,
      lineDatalabelChart: lineDatalabelChart,
      lineAnnotation: lineAnnotation,
      syncingLineChart: syncingLineChart,
      syncingAreaChart: syncingAreaChart,
      brushLineChart: brushLineChart,
      brushAreaChart: brushAreaChart,
      steplineChart: steplineChart,
      gradientLineChart: gradientLineChart,
      realtimeLineChart: realtimeLineChart,
      dashedLineChart: dashedLineChart,
      missingDataChart: missingDataChart,
      title: "Line Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Line Charts",
          active: true,
        },
      ],
      lastDate: 0,
      data: [],
      TICKINTERVAL: 86400000,
      XAXISRANGE: 777600000,
      series: [
        {
          data: this.data,
        },
      ],
      chartOptions: {
        chart: {
          id: "realtime",
          height: 350,
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Dynamic Updating Chart",
          align: "left",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          max: 100,
        },
        legend: {
          show: false,
        },
      },
    };
  },
  components: {
    Layout
  },
};
</script>

<template>
  <Layout :pagetitle="'Line'">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Basic Line Chart</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="basicLineChart.series"
              :options="basicLineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Zoomable Timeseries</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="zoomableChart.series"
              :options="zoomableChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Line with Data Labels</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="lineDatalabelChart.series"
              :options="lineDatalabelChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Dashed Line</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="dashedLineChart.series"
              :options="dashedLineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Line with Annotations</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="lineAnnotation.series"
              :options="lineAnnotation.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Syncing Charts</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="apex-charts">
              <apexchart
                class="apex-charts"
                height="160"
                dir="ltr"
                :series="syncingLineChart.series"
                :options="syncingLineChart.chartOptions"
              ></apexchart>

              <apexchart
                class="apex-charts"
                height="160"
                dir="ltr"
                :series="syncingAreaChart.series"
                :options="syncingAreaChart.chartOptions"
              ></apexchart>
            </div>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Brush Charts</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div>
              <apexchart
                class="apex-charts"
                height="230"
                dir="ltr"
                :series="brushLineChart.series"
                :options="brushLineChart.chartOptions"
              ></apexchart>

              <apexchart
                class="apex-charts"
                height="130"
                dir="ltr"
                :series="brushAreaChart.series"
                :options="brushAreaChart.chartOptions"
              ></apexchart>
            </div>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Stepline Charts</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="steplineChart.series"
              :options="steplineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Gradient Charts</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="gradientLineChart.series"
              :options="gradientLineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Missing Data/ Null Value Charts</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="missingDataChart.series"
              :options="missingDataChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>
