<script>
import Layout from "../../layouts/main";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  components: {
    Layout,
    Vue3ChartJs,
  },
  setup() {
    const pieChart = {
      type: "pie",
      data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 180],
            backgroundColor: ["#63ad6f", "#ebeff2"],
            hoverBackgroundColor: ["#63ad6f", "#ebeff2"],
            hoverBorderColor: "#fff",
          },
        ],
      },
    };

    const donutChart = {
      type: "doughnut",
      data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 210],
            backgroundColor: ["#3b76e1", "#ebeff2"],
            hoverBackgroundColor: ["#3b76e1", "#ebeff2"],
            hoverBorderColor: "#fff",
          },
        ],
      },
    };

    const polarChart = {
      type: "polarArea",
      data: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
          {
            data: [11, 16, 7, 18],
            backgroundColor: ["#f56e6e", "#63ad6f", "#f1734f", "#3b76e1"],
            label: "My dataset", // for legend
            hoverBorderColor: "#fff",
          },
        ],
      },
    };

    const radarChart = {
      type: "radar",
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "Desktops",
            backgroundColor: "rgba(42, 181, 125, 0.2)", //"rgba(42, 181, 125, 0.2)",
            borderColor: "#2ab57d", //"#2ab57d",
            pointBackgroundColor: "#2ab57d", //"#2ab57d",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#2ab57d", //"#2ab57d",
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: "Tablets",
            backgroundColor: "rgba(81, 86, 190, 0.2)", //"rgba(81, 86, 190, 0.2)",
            borderColor: "#5156be", //"#5156be",
            pointBackgroundColor: "#5156be", //"#5156be",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#5156be", //"#5156be",
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      },
    };

    return {
      pieChart,
      donutChart,
      polarChart,
      radarChart,
    };
  },
};
</script>

<template>
  <Layout :pagetitle="'Chartjs'">
    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Pie Chart</h4>
          </div>
          <div class="card-body">
            <vue3-chart-js class="chartjs-chart" v-bind="{ ...pieChart }" />
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Donut Chart</h4>
          </div>
          <div class="card-body">
            <vue3-chart-js class="chartjs-chart" v-bind="{ ...donutChart }" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Polar Chart</h4>
          </div>
          <div class="card-body">
            <vue3-chart-js class="chartjs-chart" v-bind="{ ...polarChart }" />
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Radar Chart</h4>
          </div>
          <div class="card-body">
            <vue3-chart-js class="chartjs-chart" v-bind="{ ...radarChart }" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>