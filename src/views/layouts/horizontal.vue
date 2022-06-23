<script>
import { layoutComputed } from "@/state/helpers";

import HorizontalNav from "../../components/horizontal-nav";
import Footer from "../../components/footer";
import Rightsidebar from "@/components/right-sidebar";

export default {
  props: {
    pagetitle: {
      type: String,
      required: true,
    },
  },
  components: { HorizontalNav, Footer, Rightsidebar },
  mounted() {
    document.body.setAttribute("data-layout", "horizontal");
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
  },
};
</script>

<template>
  <!-- Begin page -->
  <div id="layout-wrapper">
    {{topbar}}
    <HorizontalNav
      :pagetitle="pagetitle"
      :type="topbar"
      :layoutscroll="layoutScrollable"
      :width="layoutWidth"
    />
    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
    <Rightsidebar />
  </div>
</template>