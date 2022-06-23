<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "@/app.config";

import {
  basicTimelineChart,
  colorTimelineChart,
  multiSeriesChart,
  advancedTimelineChart,
} from "./data";

/**
 * Timeline chart
 */
export default {
  page: {
    title: "Timeline Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout
  },
  data() {
    return {
      basicTimelineChart: basicTimelineChart,
      colorTimelineChart: colorTimelineChart,
      multiSeriesChart: multiSeriesChart,
      advancedTimelineChart: advancedTimelineChart,
      title: "Timeline Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Timeline Charts",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout :pagetitle="'Timeline Chart'">
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
            <h4 class="card-title">Basic TimeLine Chart</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="basicTimelineChart.series"
              :options="basicTimelineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
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
            <h4 class="card-title">Different Color For Each Bar</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="330"
              dir="ltr"
              :series="colorTimelineChart.series"
              :options="colorTimelineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
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
            <h4 class="card-title">Multi Series Timeline</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="335"
              dir="ltr"
              :series="multiSeriesChart.series"
              :options="multiSeriesChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
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
            <h4 class="card-title">Advanced Timeline (Multiple Range)</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="advancedTimelineChart.series"
              :options="advancedTimelineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>