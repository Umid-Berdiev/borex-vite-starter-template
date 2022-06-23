<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "@/app.config";

import {
  basicScatterChart,
  dateTimeScatterChart,
  scatterImagesChart,
} from "./data";

/**
 * Scatter chart component
 */
export default {
  page: {
    title: "Scatter Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
  },
  data() {
    return {
      basicScatterChart: basicScatterChart,
      dateTimeScatterChart: dateTimeScatterChart,
      scatterImagesChart: scatterImagesChart,
      title: "Scatter Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Scatter Charts",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout :pagetitle="'Scatter Chart'">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Basic Scatter Chart</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="basicScatterChart.series"
              :options="basicScatterChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Scatter - Datetime Chart</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="dateTimeScatterChart.series"
              :options="dateTimeScatterChart.chartOptions"
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
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Scatter Images Chart</h4>
            
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="scatterImagesChart.series"
              :options="scatterImagesChart.chartOptions"
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
