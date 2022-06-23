<script>
import { layoutComputed } from "@/state/helpers";
import MetisMenu from "metismenujs/dist/metismenujs";

import { SimpleBar } from "simplebar-vue3";

/**
 * Sidebar component
 */
export default {
   mounted: function() {
    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu("#side-menu");
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    const paths = [];

    for (var i = 0; i < links.length; i++) {
      paths.push(links[i]["pathname"]);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf("/");
      const item = window.location.pathname.substr(0, strIndex).toString();
      matchingMenuItem = links[paths.indexOf(item)];
    } else {
      matchingMenuItem = links[itemIndex];
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4 && parent4.id !== "side-menu") {
              parent4.classList.add("mm-show");
              const parent5 = parent4.parentElement;
              if (parent5 && parent5.id !== "side-menu") {
                parent5.classList.add("mm-active");
                const childanchor = parent5.querySelector(".is-parent");
                if (childanchor && parent5.id !== "side-menu") {
                  childanchor.classList.add("mm-active");
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
     SimpleBar,
  },
  props: {
    isCondensed: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...layoutComputed,
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "lg");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "md");
              document.body.classList.remove("vertical-collpsed");
              break;
            case "icon":
              document.body.setAttribute("data-sidebar-size", "sm");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "lg");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-size", "fluid");
              break;
            default:
              document.body.setAttribute("data-layout-size", "fluid");
              break;
          }
        }
      },
    },
    color: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "light":
              document.body.setAttribute("data-sidebar", "light");
              break;
            case "dark":
              document.body.setAttribute("data-sidebar", "dark");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar", "brand");
              break;
            default:
              document.body.setAttribute("data-sidebar", "dark");
              break;
          }
        }
      },
    },
  },
  methods: {
    onRoutechange() {
      setTimeout(() => {
        if(document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if(this.$refs.isSimplebar)
            this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
        }
      }, 300);
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
  },
};
</script>

<template>
<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

    <!-- LOGO -->
    <div class="navbar-brand-box">
        <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
                <img src="@/assets/images/logo-dark-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="@/assets/images/logo-dark.png" alt="" height="22">
            </span>
        </router-link>

        <router-link to="/" class="logo logo-light">
            <span class="logo-lg">
                <img src="@/assets/images/logo-light.png" alt="" height="22">
            </span>
            <span class="logo-sm">
                <img src="@/assets/images/logo-light-sm.png" alt="" height="22">
            </span>
        </router-link>
    </div>

    <button type="button" class="btn btn-sm px-3 header-item vertical-menu-btn topnav-hamburger" @click="toggleMenu">
        <span class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </button>

    <SimpleBar data-simplebar class="sidebar-menu-scroll" ref="isSimplebar">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" data-key="t-menu">Menu</li>

                <li>
                    <a href="javascript: void(0);">
                        <eva-icon class="icon nav-icon" name="grid-outline"></eva-icon>
                        <span class="menu-item" data-key="t-dashboards">Dashboards</span>
                        <span class="badge rounded-pill bg-primary">3</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/" data-key="t-ecommerce">Ecommerce</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/dashboard/saas" data-key="t-saas">Saas</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/dashboard/crypto" data-key="t-crypto">Crypto</router-link></li>
                    </ul>
                </li>

                <li class="menu-title" data-key="t-applications">Applications</li>

                <li>
                    <router-link class="side-nav-link-ref" to="/calendar">
                        <eva-icon class="icon nav-icon" name="calendar-outline"></eva-icon>
                        <span class="menu-item" data-key="t-calendar">Calendar</span>
                    </router-link>
                </li>

                <li>
                    <router-link class="side-nav-link-ref" to="/chat">
                        <eva-icon class="icon nav-icon" name="message-circle-outline"></eva-icon>
                        <span class="menu-item" data-key="t-chat">Chat</span>
                        <span class="badge rounded-pill badge-soft-danger" data-key="t-hot">Hot</span>
                    </router-link>
                </li>

                <li>
                    <router-link class="side-nav-link-ref" to="/apps/file-manager">
                        <eva-icon class="icon nav-icon" name="archive-outline"></eva-icon>
                        <span class="menu-item" data-key="t-filemanager">File Manager</span>
                    </router-link>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="shopping-bag-outline"></eva-icon>
                        <span class="menu-item" data-key="t-ecommerce">Ecommerce</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/products" data-key="t-products">Products</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/product-detail" data-key="t-product-detail">Product Detail</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/orders" data-key="t-orders">Orders</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/customers" data-key="t-customers">Customers</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/cart" data-key="t-cart">Cart</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/checkout" data-key="t-checkout">Checkout</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/shops" data-key="t-shops">Shops</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ecommerce/add-product" data-key="t-add-product">Add Product</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="email-outline"></eva-icon>
                        <span class="menu-item" data-key="t-email">Email</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/email/inbox" data-key="t-inbox">Inbox</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/email/read" data-key="t-read-email">Read Email</router-link></li>
                        <li>
                            <a href="javascript: void(0);">
                                <span data-key="t-email-templates">Templates</span>
                                <span class="badge rounded-pill badge-soft-success" data-key="t-new">New</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><router-link class="side-nav-link-ref" to="/email/template-basic" data-key="t-basic-action">Basic Action</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/email/template-alert" data-key="t-alert-email">Alert Email</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/email/template-billing" data-key="t-bill-email">Billing Email</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="book-outline"></eva-icon>
                        <span class="menu-item" data-key="t-invoices">Invoices</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/invoices/list" data-key="t-invoice-list">Invoice List</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/invoices/detail" data-key="t-invoice-detail">Invoice Detail</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="briefcase-outline"></eva-icon>
                        <span class="menu-item" data-key="t-projects">Projects</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/projects/grid" data-key="t-p-grid">Projects Grid</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/projects/list" data-key="t-p-list">Projects List</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/projects/create" data-key="t-create-new">Create New</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="wifi-outline"></eva-icon>
                        <span class="menu-item" data-key="t-contacts">Contacts</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/contacts/grid" data-key="t-user-grid">User Grid</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/contacts/list" data-key="t-user-list">User List</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/contacts/profile" data-key="t-user-profile">Profile</router-link></li>
                    </ul>
                </li>

                <li class="menu-title" data-key="t-layouts">Layouts</li>
                
                <li class="menu-title" data-key="t-pages">Pages</li>

                <li>
                    <a href="javascript: void(0);">
                        <eva-icon class="icon nav-icon" name="person-done-outline"></eva-icon>
                        <span class="menu-item" data-key="t-authentication">Authentication</span>
                        <span class="badge rounded-pill bg-info">8</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link to="/auth/login" data-key="t-login">Login</router-link></li>
                        <li><router-link to="/auth/register" data-key="t-register">Register</router-link></li>
                        <li><router-link to="/auth/recoverpwd" data-key="t-recover-password">Recover Password</router-link></li>
                        <li><router-link to="/auth/lock-screen" data-key="t-lock-screen">Lock Screen</router-link></li>
                        <li><router-link to="/auth/logout" data-key="t-logout">Logout</router-link></li>
                        <li><router-link to="/auth/confirm-mail" data-key="t-confirm-mail">Confirm Mail</router-link></li>
                        <li><router-link to="/auth/email-verification" data-key="t-email-verification">Email Verification</router-link></li>
                        <li><router-link to="/auth/two-step-verification" data-key="t-two-step-verification">Two Step Verification</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="cube-outline"></eva-icon>
                        <span class="menu-item" data-key="t-utility">Utility</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/pages/starter" data-key="t-starter-page">Starter Page</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/maintenance" data-key="t-maintenance">Maintenance</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/coming-soon" data-key="t-coming-soon">Coming Soon</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/timeline" data-key="t-timeline">Timeline</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/faqs" data-key="t-faqs">FAQs</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/pricing" data-key="t-pricing">Pricing</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/404" data-key="t-error-404">Error 404</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/pages/500" data-key="t-error-500">Error 500</router-link></li>
                    </ul>
                </li>

                <li class="menu-title" data-key="t-components">Components</li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="layers-outline"></eva-icon>
                        <span class="menu-item" data-key="t-ui-elements">UI Elements</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/ui/alerts" data-key="t-alerts">Alerts</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/buttons" data-key="t-buttons">Buttons</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/cards" data-key="t-cards">Cards</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/carousel" data-key="t-carousel">Carousel</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/dropdowns" data-key="t-dropdowns">Dropdowns</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/grid" data-key="t-grid">Grid</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/images" data-key="t-images">Images</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/lightbox" data-key="t-lightbox">Lightbox</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/modals" data-key="t-modals">Modals</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/offcanvas" data-key="t-offcanvas">Offcanvas</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/rangeslider" data-key="t-range-slider">Range Slider</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/progressbars" data-key="t-progress-bars">Progress Bars</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/sweet-alert" data-key="t-sweet-alert">Sweet-Alert</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/tabs-accordion" data-key="t-tabs-accordions">Tabs & Accordions</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/typography" data-key="t-typography">Typography</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/video" data-key="t-video">Video</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/general" data-key="t-general">General</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/colors" data-key="t-colors">Colors</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/ui/notifications" data-key="t-notifications">Notifications</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="edit-2-outline"></eva-icon>
                        <span class="menu-item" data-key="t-forms">Forms</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/form/elements" data-key="t-form-elements">Form Elements</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/layouts" data-key="t-form-layouts">Form Layouts</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/validation" data-key="t-form-validation">Form Validation</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/advanced" data-key="t-form-advanced">Form Advanced</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/editors" data-key="t-form-editors">Form Editors</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/uploads" data-key="t-form-upload">Form File Upload</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/wizard" data-key="t-form-wizard">Form Wizard</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/form/mask" data-key="t-form-mask">Form Mask</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="list"></eva-icon>
                        <span class="menu-item" data-key="t-tables">Tables</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link to="/tables/basic" data-key="t-basic-tables">Basic Tables</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="pie-chart-outline"></eva-icon>
                        <span class="menu-item" data-key="t-charts">Charts</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="javascript: void(0);" class="has-arrow" data-key="t-apex-charts">Apex Charts</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><router-link class="side-nav-link-ref" to="/charts/line" data-key="t-line">Line</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/area" data-key="t-area">Area</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/column" data-key="t-column">Column</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/bar" data-key="t-bar">Bar</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/mixed" data-key="t-mixed">Mixed</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/timeline" data-key="t-timeline">Timeline</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/candlestick" data-key="t-candlestick">Candlestick</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/boxplot" data-key="t-boxplot">Boxplot</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/bubble" data-key="t-bubble">Bubble</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/scatter" data-key="t-scatter">Scatter</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/heatmap" data-key="t-heatmap">Heatmap</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/treemap" data-key="t-treemap">Treemap</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/pie" data-key="t-pie">Pie</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/radialbar" data-key="t-radialbar">Radialbar</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/radar" data-key="t-radar">Radar</router-link></li>
                                <li><router-link class="side-nav-link-ref" to="/charts/polararea" data-key="t-polararea">Polararea</router-link></li>
                            </ul>
                        </li>
                       
                        <li><router-link class="side-nav-link-ref" to="/charts/chartjs" data-key="t-chartjs-charts">Chartjs Charts</router-link></li>
                       
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="smiling-face-outline"></eva-icon>
                        <span class="menu-item" data-key="t-icons">Icons</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/icons/evaicons" data-key="t-evaicons">Eva Icons</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/icons/boxicons" data-key="t-boxicons">Boxicons</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/icons/materialdesign" data-key="t-material-design">Material Design</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/icons/fontawesome" data-key="t-font-awesome">Font Awesome 5</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="pin-outline"></eva-icon>
                        <span class="menu-item" data-key="t-maps">Maps</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><router-link class="side-nav-link-ref" to="/maps/google" data-key="t-google">Google</router-link></li>
                        <li><router-link class="side-nav-link-ref" to="/maps/leaflet" data-key="t-leaflet">Leaflet</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <eva-icon class="icon nav-icon" name="share-outline"></eva-icon>
                        <span class="menu-item" data-key="t-multi-level">Multi Level</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);" data-key="t-level-1.1">Level 1.1</a></li>
                        <li><a href="javascript: void(0);" class="has-arrow" data-key="t-level-1.2">Level 1.2</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" data-key="t-level-2.1">Level 2.1</a></li>
                                <li><a href="javascript: void(0);" data-key="t-level-2.2">Level 2.2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->

        <div class="p-3 px-4 sidebar-footer">
            <p class="mb-1 main-title">{{new Date().getFullYear()}} &copy; Borex.</p>
            <p class="mb-0">Design & Develop by Themesbrand</p>
        </div>
    </SimpleBar>
</div>
<!-- Left Sidebar End -->
</template>
