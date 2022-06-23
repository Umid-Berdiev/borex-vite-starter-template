<script>
import { layoutMethods, layoutComputed } from "@/state/helpers";
import { SimpleBar } from "simplebar-vue3";

/**
 * Right sidebar component
 */
export default {
  components: {
    SimpleBar,
  },
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"],
      },
    };
  },
  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.toggleRightSidebar();
    },
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout(layout) {
      this.changeLayoutType({ layoutType: layout });
    },
    changeType(type) {
      this.changeLayoutType({ layoutType: "vertical" });
      return this.changeLeftSidebarType({ leftSidebarType: type });
    },
    changeWidth(width) {
      return this.changeLayoutWidth({ layoutWidth: width });
    },
    changeTopbartype(value) {
      return this.changeTopbar({ topbar: value });
    },
    changeloader() {
      return this.changeLoaderValue({ loader: this.loader });
    },
    /**
     * Change sidebar color change
     */
    sidebarColorChange(color) {
      return this.changeSidebarColor({
        sidebarColor: color,
      });
    },

    /**
     * Change layout position
     */
    changePosition(value) {
      return this.changeLayoutPosition({
        layoutScrollable: value,
      });
    },
  },
  computed: {
    ...layoutComputed,
    loader: {
      get() {
        return this.$store ? this.$store.state.layout.loader : {} || {};
      },
      set(value) {
        this.changeLoaderValue({
          loader: value,
        });
      },
    },
    color: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarColor : {} || {};
      },
      set(value) {
        return this.changeSidebarColor({
          sidebarColor: value,
        });
      },
    },
    sidebarType: {
      get() {
        return this.$store
          ? this.$store.state.layout.leftSidebarType
          : {} || {};
      },
      set(value) {
        return this.changeLeftSidebarType({
          leftSidebarType: value,
        });
      },
    },
    scrollable: {
      get() {
        return this.$store
          ? this.$store.state.layout.layoutScrollable
          : {} || {};
      },
      set(value) {
        return this.changeLayoutPosition({
          layoutScrollable: value,
        });
      },
    },
    layout: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
      set(value) {
        this.changeLayoutType({
          layoutType: value,
        });
        if (value === "horizontal") {
          console.log("horizontal");
          this.changeTopbar({
            topbar: "dark",
          });
        } else if (value === "vertical") {
          this.changeTopbar({
            topbar: "light",
          });
        }
      },
    },
    topbar: {
      get() {
        return this.$store ? this.$store.state.layout.topbar : {} || {};
      },
      set(value) {
        this.changeTopbar({
          topbar: value,
        });
      },
    },
    mode: {
      get() {
        return this.$store ? this.$store.state.layout.layoutMode : {} || {};
      },
      set(value) {
        if (value === "dark") {
          document.body.setAttribute("data-layout-mode", "dark");
          this.changeTopbar({
            topbar: "dark",
          });

          this.changeSidebarColor({
            sidebarColor: "dark",
          });
        } else {
          document.body.setAttribute("data-layout-mode", "light");
          this.changeTopbar({
            topbar: "light",
          });
        }
      },
    },
    width: {
      get() {
        return this.$store ? this.$store.state.layout.layoutWidth : {} || {};
      },
      set(value) {
        this.changeLayoutWidth({
          layoutWidth: value,
        });
      },
    },
  },
  watch: {
    mode: {
      immediate: true,
      handler: function (newVal) {
        switch (newVal) {
          case "light":
            document.body.setAttribute("data-layout-mode", "light");

            break;
          case "dark":
            document.body.setAttribute("data-layout-mode", "dark");

            break;
        }
      },
    },

    topbar: {
      immediate: true,
      handler: function (newVal) {
        switch (newVal) {
          case "light":
            document.body.setAttribute("data-topbar", "light");
            break;
          case "dark":
            document.body.setAttribute("data-topbar", "dark");
            break;
        }
      },
    },
  },
};
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div v-click-outside="config" class="right-bar">
      <SimpleBar class="h-100">
        <div class="rightbar-title d-flex align-items-center bg-dark p-3">
          <h5 class="m-0 me-2 text-white">Theme Customizer</h5>

          <a href="javascript:void(0);" class="right-bar-toggle-close ms-auto">
            <i class="mdi mdi-close noti-icon"></i>
          </a>
        </div>

        <!-- Settings -->
        <hr class="m-0" />

        <hr class="mt-0" />
        <div class="p-3">
          <h6 class="mb-0">Layout</h6>
          <hr class="mt-1" />

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="layout" id="layout-radio1" value="vertical"
              v-model="layout" />
            <label class="form-check-label" for="layout-radio1">Vertical</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="layout" id="layout-radio2" value="horizontal"
              v-model="layout" />
            <label class="form-check-label" for="layout-radio2">Horizontal</label>
          </div>

          <h6 class="mt-4 mb-3">Mode</h6>
          <hr class="mt-1" />
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="mode" id="layout-radio-mode1" value="light"
              v-model="mode" />
            <label class="form-check-label" for="layout-radio-mode1">Light</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="mode" id="layout-radio-mode2" value="dark"
              v-model="mode" />
            <label class="form-check-label" for="layout-radio-mode2">Dark</label>
          </div>

          <h6 class="mt-4 mb-3">Layout Width</h6>
          <hr class="mt-1" />
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="width" name="layout-width" id="layout-width-fluid"
              value="fluid" />
            <label class="form-check-label" for="layout-width-fluid">Fluid</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="width" name="layout-width" id="layout-width-boxed"
              value="boxed" />
            <label class="form-check-label" for="layout-width-boxed">Boxed</label>
          </div>

          <h6 class="mt-4 mb-3">Layout Position</h6>
          <hr class="mt-1" />
          <div class="form-check form-check-inline">
            <input class="form-check-input" v-model="scrollable" type="radio" name="layout-position"
              id="layout-position-fixed" :value="false" />
            <label class="form-check-label" for="layout-position-fixed">Fixed</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" v-model="scrollable" type="radio" name="layout-position"
              id="layout-position-scrollable" :value="true" />
            <label class="form-check-label" for="layout-position-scrollable">Scrollable</label>
          </div>
          <h6 class="mt-4 mb-3">Topbar Color</h6>
          <hr class="mt-1" />
          <div class="form-check form-check-inline">
            <input class="form-check-input" v-model="topbar" type="radio" name="topbar-color" id="topbar-color-light"
              value="light" />
            <label class="form-check-label" for="topbar-color-light">Light</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" v-model="topbar" type="radio" name="topbar-color" id="topbar-color-dark"
              value="dark" />
            <label class="form-check-label" for="topbar-color-dark">Dark</label>
          </div>
          <!-- Sidebar -->
          <div v-if="layout === 'vertical'">
            <h6 class="mt-3">Sidebar Color</h6>
            <hr class="mt-1" />

            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-dark" value="dark"
                v-model="color" />
              <label class="form-check-label" for="sidebar-dark"> Dark </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-light" value="light"
                v-model="color" />
              <label class="form-check-label" for="sidebar-light">
                Light
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-brand" value="brand"
                v-model="color" />
              <label class="form-check-label" for="sidebar-brand">
                Brand
              </label>
            </div>

            <h6 class="mt-3">Sidebar Type</h6>
            <hr class="mt-1" />
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio1" id="sidebar-default" value="default"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-default">
                Default
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio1" id="sidebar-compact" value="compact"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-compact">
                Compact
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio1" id="sidebar-icon" value="icon"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-icon"> Icon </label>
            </div>
          </div>

          <!-- Topbar -->
        </div>
      </SimpleBar>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>

    <!-- chat offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasActivity" aria-labelledby="offcanvasActivityLabel">
      <div class="offcanvas-header border-bottom">
        <h5 id="offcanvasActivityLabel">Offcanvas right</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  </div>
</template>
