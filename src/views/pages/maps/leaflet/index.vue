<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";

import Basic from "./basic";
import Icons from "./icons";
import Geometry from "./geometry";
import Markers from "./markers";

/**
 * Leaflet-map component
 */
export default {
  page: {
    title: "Leaflet map",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    Icons,
    Basic,
    Geometry,
    Markers,
  },
  data() {
    return {
      title: "Leaflet",
      items: [
        {
          text: "Maps",
          href: "/",
        },
        {
          text: "Leaflet",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout :pagetitle="'Leaflet Map'">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Example</h4>
          </div>
          <div class="card-body">
            <Basic class="leaflet-map" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Draggable marker</h4>
          </div>
          <div class="card-body">
            <Markers class="leaflet-map" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Custom Icon Example</h4>
          </div>
          <div class="card-body">
            <Icons class="leaflet-map" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Geometry Example</h4>
          </div>
          <div class="card-body">
            <Geometry class="leaflet-map" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>