<script>
import { SimpleBar } from "simplebar-vue3";

import { layoutMethods, layoutComputed } from "@/state/helpers";

/**
 * Horizontal-navbar component
 */
export default {
  props: {
    width: {
      type: String,
      required: true,
    },
    pagetitle: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    layoutscroll: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
    };
  },
   components: {
    SimpleBar,
  },
  computed: {
    ...layoutComputed,
  },
  mounted() {
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add("active");
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.add("active");
                const parent6 = parent5.parentElement;
                if (parent6) {
                  parent6.classList.add("active");
                }
              }
            }
          }
        }
      }
    }

    // this.fakeFetchData();
  },
  watch: {
    type: {
    //   immediate: true,
    deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    layoutscroll: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case false:
              document.body.setAttribute("data-layout-scrollable", "false");
              break;
            case true:
              document.body.setAttribute("data-layout-scrollable", "true");
              break;
            default:
              document.body.setAttribute("data-layout-scrollable", "false");
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
              document.body.removeAttribute("data-layout-size");
              break;
            default:
              document.body.setAttribute("data-layout-size", "fluid");
              break;
          }
        }
      },
    },
  },
  methods: {
    ...layoutMethods,
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling;
      if (nextEl && !nextEl.classList.contains("show")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.add("show");
      } else if (nextEl) {
        nextEl.classList.remove("show");
      }
      return false;
    },
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    hasManyItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 8 : false;
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
  },
};
</script>

<template>
  <header class="ishorizontal-topbar">
    <div class="navbar-header">
        <div class="d-flex">
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
                    <span class="logo-sm">
                        <img src="@/assets/images/logo-light-sm.png" alt="" height="22">
                    </span>
                    <span class="logo-lg">
                        <img src="@/assets/images/logo-light.png" alt="" height="22">
                    </span>
                </router-link>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item" 
            data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                <i class="fa fa-fw fa-bars"></i>
            </button>

            <div class="d-none d-sm-block ms-2 align-self-center">
                <h4 class="page-title">{{pagetitle}}</h4>
            </div>
        </div>

        <div class="d-flex">
            <div class="dropdown">
                <button type="button" class="btn header-item"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <eva-icon class="icon-sm" name="search-outline"></eva-icon>
                </button>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-0">
                    <form class="p-2">
                        <div class="search-box">
                            <div class="position-relative">
                                <input type="text" class="form-control bg-light border-0" placeholder="Search...">
                                <eva-icon class="search-icon" name="search-outline" data-eva-height="26" data-eva-width="26"></eva-icon>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="dropdown d-inline-block language-switch">
                <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="header-lang-img" src="@/assets/images/flags/us.jpg" alt="Header Language" height="16">
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item side-nav-link-ref notify-item language" data-lang="eng">
                        <img src="@/assets/images/flags/us.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">English</span>
                    </a>
                    
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item side-nav-link-ref notify-item language" data-lang="sp">
                        <img src="@/assets/images/flags/spain.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Spanish</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item side-nav-link-ref notify-item language" data-lang="gr">
                        <img src="@/assets/images/flags/germany.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">German</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item side-nav-link-ref notify-item language" data-lang="it">
                        <img src="@/assets/images/flags/italy.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Italian</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item side-nav-link-ref notify-item language" data-lang="ru">
                        <img src="@/assets/images/flags/russia.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Russian</span>
                    </a>
                </div>
            </div>

            <div class="dropdown d-none d-lg-inline-block">
                <button type="button" class="btn header-item noti-icon"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <eva-icon class="icon-sm" name="grid-outline"></eva-icon>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                    <div class="p-3">
                        <div class="row align-items-center">
                            <div class="col">
                                <h5 class="m-0 font-size-15"> Web Apps </h5>
                            </div>
                            <div class="col-auto">
                                <a href="#!" class="small fw-semibold text-decoration-underline"> View All</a>
                            </div>
                        </div>
                    </div>
                    <div class="px-lg-2 pb-2">
                        <div class="row g-0">
                            <div class="col">
                                <a class="dropdown-icon-item" href="#!">
                                    <img src="@/assets/images/brands/github.png" alt="Github">
                                    <span>GitHub</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#!">
                                    <img src="@/assets/images/brands/bitbucket.png" alt="bitbucket">
                                    <span>Bitbucket</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#!">
                                    <img src="@/assets/images/brands/dribbble.png" alt="dribbble">
                                    <span>Dribbble</span>
                                </a>
                            </div>
                        </div>

                        <div class="row g-0">
                            <div class="col">
                                <a class="dropdown-icon-item" href="#!">
                                    <img src="@/assets/images/brands/dropbox.png" alt="dropbox">
                                    <span>Dropbox</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#!">
                                    <img src="@/assets/images/brands/mail_chimp.png" alt="mail_chimp">
                                    <span>Mail Chimp</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#!">
                                    <img src="@/assets/images/brands/slack.png" alt="slack">
                                    <span>Slack</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon"
            id="page-header-notifications-dropdown-v"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <eva-icon class="icon-sm" name="bell-outline"></eva-icon>
            <span class="noti-dot bg-danger rounded-pill">4</span>
          </button>
          
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown-v"
          >
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="m-0 font-size-15">Notifications</h5>
                </div>
                <div class="col-auto">
                  <a
                    href="#!"
                    class="small fw-semibold text-decoration-underline"
                  >
                    Mark all as read</a
                  >
                </div>
              </div>
            </div>
            <SimpleBar data-simplebar style="max-height: 250px">
              <a href="#!" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <img
                      src="@/assets/images/users/avatar-3.jpg"
                      class="rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">James Lemire</h6>
                    <div class="font-size-13 text-muted">
                      <p class="mb-1">It will seem like simplified English.</p>
                      <p class="mb-0">
                        <i class="mdi mdi-clock-outline"></i>
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 avatar-sm me-3">
                    <span
                      class="
                        avatar-title
                        bg-primary
                        rounded-circle
                        font-size-16
                      "
                    >
                      <i class="bx bx-cart"></i>
                    </span>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Your order is placed</h6>
                    <div class="font-size-13 text-muted">
                      <p class="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p class="mb-0">
                        <i class="mdi mdi-clock-outline"></i>
                        <span>3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 avatar-sm me-3">
                    <span
                      class="
                        avatar-title
                        bg-success
                        rounded-circle
                        font-size-16
                      "
                    >
                      <i class="bx bx-badge-check"></i>
                    </span>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Your item is shipped</h6>
                    <div class="font-size-13 text-muted">
                      <p class="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p class="mb-0">
                        <i class="mdi mdi-clock-outline"></i>
                        <span>3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#!" class="text-reset notification-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <img
                      src="@/assets/images/users/avatar-6.jpg"
                      class="rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Salena Layfield</h6>
                    <div class="font-size-13 text-muted">
                      <p class="mb-1">
                        As a skeptical Cambridge friend of mine occidental.
                      </p>
                      <p class="mb-0">
                        <i class="mdi mdi-clock-outline"></i>
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SimpleBar>
            <div class="p-2 border-top d-grid">
              <a
                class="btn btn-sm btn-link font-size-14 btn-block text-center"
                href="javascript:void(0)"
              >
                <i class="uil-arrow-circle-right me-1"></i>
                <span>View More..</span>
              </a>
            </div>
          </div>
        </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon right-bar-toggle toggle-right" id="right-bar-toggle" @click="toggleRightSidebar">
                    <eva-icon class="icon-sm toggle-right" name="settings-outline"></eva-icon>
                </button>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item user text-start d-flex align-items-center" id="page-header-user-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle header-profile-user" src="@/assets/images/users/avatar-1.jpg"
                    alt="Header Avatar">
                </button>
                <div class="dropdown-menu dropdown-menu-end pt-0">
                    <div class="p-3 border-bottom">
                        <h6 class="mb-0">Jennifer Bennett</h6>
                        <p class="mb-0 font-size-11 text-muted">jennifer.bennett@email.com</p>
                    </div>
                    <router-link class="dropdown-item" to="/contacts/profile"><i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Profile</span></router-link>
                    <router-link class="dropdown-item" to="/chat"><i class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Messages</span></router-link>
                    <router-link class="dropdown-item" to="/pages/faqs"><i class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Help</span></router-link>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item" to="#"><i class="mdi mdi-wallet text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Balance : <b>$6951.02</b></span></router-link>
                    <a class="dropdown-item d-flex align-items-center" href="#"><i class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Settings</span><span class="badge badge-soft-success ms-auto">New</span></a>
                    <router-link class="dropdown-item" to="/auth/lock-screen"><i class="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Lock screen</span></router-link>
                    <router-link class="dropdown-item" to="/auth/logout"><i class="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Logout</span></router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="topnav">
        <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
    
                <div class="collapse navbar-collapse" id="topnav-menu-content">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <eva-icon class="icon nav-icon" name="grid-outline"></eva-icon>
                                <span data-key="t-dashboards">Dashboards</span> <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-dashboard">
                               <router-link to="/" class="dropdown-item side-nav-link-ref" data-key="t-ecommerce">Ecommerce</router-link>
                               <router-link to="/dashboard/saas" class="dropdown-item side-nav-link-ref" data-key="t-saas">Saas</router-link>
                               <router-link to="/dashboard/crypto" class="dropdown-item side-nav-link-ref" data-key="t-crypto">Crypto</router-link>
                            </div>
                        </li>
    
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <eva-icon class="icon nav-icon" name="cube-outline"></eva-icon>
                               <span data-key="t-elements">Elements</span> <div class="arrow-down"></div>
                            </a>

                            <div class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl" aria-labelledby="topnav-uielement">
                                <div class="ps-2 p-lg-0">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <div class="menu-title">Elements</div>
                                                <div class="row g-0">
                                                    <div class="col-lg-4">
                                                        <div>
                                                            <router-link to="/ui/alerts" class="dropdown-item side-nav-link-ref" data-key="t-alerts">Alerts</router-link>
                                                            <router-link to="/ui/buttons" class="dropdown-item side-nav-link-ref" data-key="t-buttons">Buttons</router-link>
                                                            <router-link to="/ui/cards" class="dropdown-item side-nav-link-ref" data-key="t-cards">Cards</router-link>
                                                            <router-link to="/ui/carousel" class="dropdown-item side-nav-link-ref" data-key="t-carousel">Carousel</router-link>
                                                            <router-link to="/ui/dropdowns" class="dropdown-item side-nav-link-ref" data-key="t-dropdowns">Dropdowns</router-link>
                                                            <router-link to="/ui/grid" class="dropdown-item side-nav-link-ref" data-key="t-grid">Grid</router-link>
                                                            <router-link to="/ui/images" class="dropdown-item side-nav-link-ref" data-key="t-images">Images</router-link>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div>
                                                            <router-link to="/ui/lightbox" class="dropdown-item side-nav-link-ref" data-key="t-lightbox">Lightbox</router-link>
                                                            <router-link to="/ui/modals" class="dropdown-item side-nav-link-ref" data-key="t-modals">Modals</router-link>
                                                            <router-link to="/ui/offcanvas" class="dropdown-item side-nav-link-ref" data-key="t-offcanvas">Offcanvas</router-link>
                                                            <router-link to="/ui/rangeslider" class="dropdown-item side-nav-link-ref" data-key="t-range-slider">Range Slider</router-link>
                                                            <router-link to="/ui/progressbars" class="dropdown-item side-nav-link-ref" data-key="t-progress-bars">Progress Bars</router-link>
                                                            <router-link to="/ui/sweet-alert" class="dropdown-item side-nav-link-ref" data-key="t-sweet-alert">Sweet-Alert</router-link>
                                                            <router-link to="/ui/tabs-accordion" class="dropdown-item side-nav-link-ref" data-key="t-tabs-accordions">Tabs & Accordions</router-link>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div>
                                                            <router-link to="/ui/typography" class="dropdown-item side-nav-link-ref" data-key="t-typography">Typography</router-link>
                                                            <router-link to="/ui/video" class="dropdown-item side-nav-link-ref" data-key="t-video">Video</router-link>
                                                            <router-link to="/ui/general" class="dropdown-item side-nav-link-ref" data-key="t-general">General</router-link>
                                                            <router-link to="/ui/colors" class="dropdown-item side-nav-link-ref" data-key="t-colors">Colors</router-link>
                                                            <router-link to="/ui/notifications" class="dropdown-item side-nav-link-ref" data-key="t-notifications">Notifications</router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
    
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                                <eva-icon class="icon nav-icon" name="archive-outline"></eva-icon>
                                <span data-key="t-apps">Apps</span> <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-pages">

                                <router-link to="/calendar" class="dropdown-item side-nav-link-ref" data-key="t-calendar">Calendar</router-link>
                                <router-link to="/chat" class="dropdown-item side-nav-link-ref" data-key="t-chat">Chat</router-link>
                                <router-link to="/apps/file-manager" class="dropdown-item side-nav-link-ref" data-key="t-filemanager">File Manager</router-link>


                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce"
                                        role="button">
                                        <span data-key="t-ecommerce">Ecommerce</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                        <router-link to="/ecommerce/products" class="dropdown-item side-nav-link-ref" data-key="t-products">Products</router-link>
                                        <router-link to="/ecommerce/product-detail" class="dropdown-item side-nav-link-ref" data-key="t-product-detail">Product Detail</router-link>
                                        <router-link to="/ecommerce/orders" class="dropdown-item side-nav-link-ref" data-key="t-orders">Orders</router-link>
                                        <router-link to="/ecommerce/customers" class="dropdown-item side-nav-link-ref" data-key="t-customers">Customers</router-link>
                                        <router-link to="/ecommerce/cart" class="dropdown-item side-nav-link-ref" data-key="t-cart">Cart</router-link>
                                        <router-link to="/ecommerce/checkout" class="dropdown-item side-nav-link-ref" data-key="t-checkout">Checkout</router-link>
                                        <router-link to="/ecommerce/shops" class="dropdown-item side-nav-link-ref" data-key="t-shops">Shops</router-link>
                                        <router-link to="/ecommerce/add-product" class="dropdown-item side-nav-link-ref" data-key="t-add-product">Add Product</router-link>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email"
                                        role="button">
                                        <span data-key="t-email">Email</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-email">
                                        <router-link to="/email/inbox" class="dropdown-item side-nav-link-ref" data-key="t-inbox">Inbox</router-link>
                                        <router-link to="/email/read" class="dropdown-item side-nav-link-ref" data-key="t-read-email">Read Email</router-link>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email-templates" role="button">
                                                <span data-key="t-email-templates">Templates</span> <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-email-templates">
                                                <router-link to="/email/template-basic" class="dropdown-item side-nav-link-ref" data-key="t-basic-action">Basic Action</router-link>
                                                <router-link to="/email/template-alert" class="dropdown-item side-nav-link-ref" data-key="t-alert-email">Alert Email</router-link>
                                                <router-link to="/email/template-billing" class="dropdown-item side-nav-link-ref" data-key="t-bill-email">Billing Email</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-invoices"
                                        role="button">
                                       <span data-key="t-invoices">Invoices</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-invoices">
                                        <router-link to="/invoices/list" class="dropdown-item side-nav-link-ref" data-key="t-invoice-list">Invoice List</router-link>
                                        <router-link to="/invoices/detail" class="dropdown-item side-nav-link-ref" data-key="t-invoice-detail">Invoice Detail</router-link>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                        role="button">
                                       <span data-key="t-projects">Projects</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                       <router-link to="/projects/grid" class="dropdown-item side-nav-link-ref" data-key="t-p-grid">Projects Grid</router-link>
                                       <router-link to="/projects/list" class="dropdown-item side-nav-link-ref" data-key="t-p-list">Projects List</router-link>
                                       <router-link to="/projects/create" class="dropdown-item side-nav-link-ref" data-key="t-create-new">Create New</router-link>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contact"
                                        role="button">
                                       <span data-key="t-contacts">Contacts</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-contact">
                                        <router-link to="/contacts/grid" class="dropdown-item side-nav-link-ref" data-key="t-user-grid">User Grid</router-link>
                                        <router-link to="/contacts/list" class="dropdown-item side-nav-link-ref" data-key="t-user-list">User List</router-link>
                                        <router-link to="/contacts/profile" class="dropdown-item side-nav-link-ref" data-key="t-user-profile">Profile</router-link>
                                    </div>
                                </div>
                            </div>
                        </li>
    
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button">
                                <eva-icon class="icon nav-icon" name="layers-outline"></eva-icon>
                                <span data-key="t-components">Components</span> <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-components">
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                        role="button">
                                        <span data-key="t-forms">Forms</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-form">
                                        <router-link to="/form/elements" class="dropdown-item side-nav-link-ref" data-key="t-form-elements">Form Elements</router-link>
                                        <router-link to="/form/layouts" class="dropdown-item side-nav-link-ref" data-key="t-form-layouts">Form Layouts</router-link>
                                        <router-link to="/form/validation" class="dropdown-item side-nav-link-ref" data-key="t-form-validation">Form Validation</router-link>
                                        <router-link to="/form/advanced" class="dropdown-item side-nav-link-ref" data-key="t-form-advanced">Form Advanced</router-link>
                                        <router-link to="/form/editors" class="dropdown-item side-nav-link-ref" data-key="t-form-editors">Form Editors</router-link>
                                        <router-link to="/form/uploads" class="dropdown-item side-nav-link-ref" data-key="t-form-upload">Form File Upload</router-link>
                                        <router-link to="/form/wizard" class="dropdown-item side-nav-link-ref" data-key="t-form-wizard">Form Wizard</router-link>
                                        <router-link to="/form/mask" class="dropdown-item side-nav-link-ref" data-key="t-form-mask">Form Mask</router-link>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                        role="button">
                                        <span data-key="t-tables">Tables</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-table">
                                        <router-link to="/tables/basic" class="dropdown-item side-nav-link-ref" data-key="t-basic-tables">Basic Tables</router-link>
                                      
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                        role="button">
                                        <span data-key="t-charts">Charts</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-apex-charts"
                                                role="button">
                                                <span data-key="t-apex-charts">Apex Charts</span> <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-apex-charts">
                                                <router-link to="/charts/line" class="dropdown-item side-nav-link-ref" data-key="t-line">Line</router-link>
                                                <router-link to="/charts/area" class="dropdown-item side-nav-link-ref" data-key="t-area">Area</router-link>
                                                <router-link to="/charts/column" class="dropdown-item side-nav-link-ref" data-key="t-column">Column</router-link>
                                                <router-link to="/charts/bar" class="dropdown-item side-nav-link-ref" data-key="t-bar">Bar</router-link>
                                                <router-link to="/charts/mixed" class="dropdown-item side-nav-link-ref" data-key="t-mixed">Mixed</router-link>
                                                <router-link to="/charts/timeline" class="dropdown-item side-nav-link-ref" data-key="t-timeline">Timeline</router-link>
                                                <router-link to="/charts/candlestick" class="dropdown-item side-nav-link-ref" data-key="t-candlestick">Candlestick</router-link>
                                                <router-link to="/charts/boxplot" class="dropdown-item side-nav-link-ref" data-key="t-boxplot">Boxplot</router-link>
                                                <router-link to="/charts/bubble" class="dropdown-item side-nav-link-ref" data-key="t-bubble">Bubble</router-link>
                                                <router-link to="/charts/scatter" class="dropdown-item side-nav-link-ref" data-key="t-scatter">Scatter</router-link>
                                                <router-link to="/charts/heatmap" class="dropdown-item side-nav-link-ref" data-key="t-heatmap">Heatmap</router-link>
                                                <router-link to="/charts/treemap" class="dropdown-item side-nav-link-ref" data-key="t-treemap">Treemap</router-link>
                                                <router-link to="/charts/pie" class="dropdown-item side-nav-link-ref" data-key="t-pie">Pie</router-link>
                                                <router-link to="/charts/radialbar" class="dropdown-item side-nav-link-ref" data-key="t-radialbar">Radialbar</router-link>
                                                <router-link to="/charts/radar" class="dropdown-item side-nav-link-ref" data-key="t-radar">Radar</router-link>
                                                <router-link to="/charts/polararea" class="dropdown-item side-nav-link-ref" data-key="t-polararea">Polararea</router-link>
                                            </div>
                                        </div>
                                        <router-link to="/charts/chartjs" class="dropdown-item side-nav-link-ref" data-key="t-chartjs-charts">Chartjs Charts</router-link>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons"
                                        role="button">
                                        <span data-key="t-icons">Icons</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-icons">
                                        <router-link to="/icons/evaicons" class="dropdown-item side-nav-link-ref" data-key="t-evaicons">Eva Icons</router-link>
                                        <router-link to="/icons/boxicons" class="dropdown-item side-nav-link-ref" data-key="t-boxicons">Boxicons</router-link>
                                        <router-link to="/icons/materialdesign" class="dropdown-item side-nav-link-ref" data-key="t-material-design">Material Design</router-link>
                                        <router-link to="/icons/fontawesome" class="dropdown-item side-nav-link-ref" data-key="t-font-awesome">Font Awesome 5</router-link>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                        role="button">
                                        <span data-key="t-maps">Maps</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-map">
                                        <router-link to="/maps/google" class="dropdown-item side-nav-link-ref" data-key="t-google">Google</router-link>
                                        <router-link to="/maps/leaflet" class="dropdown-item side-nav-link-ref" data-key="t-leaflet">Leaflet</router-link>
                                    </div>
                                </div>
                            </div>
                        </li>
    
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button">
                                <eva-icon class="icon nav-icon" name="file-text-outline"></eva-icon>
                                <span data-key="t-pages">Pages</span> <div class="arrow-down"></div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="topnav-more">
                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-authentication"
                                        role="button">
                                        <span data-key="t-authentication">Authentication</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-authentication">
                                        <router-link to="/auth/login" class="dropdown-item side-nav-link-ref" data-key="t-login">Login</router-link>
                                        <router-link to="/auth/register" class="dropdown-item side-nav-link-ref" data-key="t-register">Register</router-link>
                                        <router-link to="/auth/recoverpwd" class="dropdown-item side-nav-link-ref" data-key="t-recover-password">Recover Password</router-link>
                                        <router-link to="/auth/lock-screen" class="dropdown-item side-nav-link-ref" data-key="t-lock-screen">Lock Screen</router-link>
                                        <router-link to="/auth/logout" class="dropdown-item side-nav-link-ref" data-key="t-logout">Logout</router-link>
                                        <router-link to="/auth/confirm-mail" class="dropdown-item side-nav-link-ref" data-key="t-confirm-mail">Confirm Mail</router-link>
                                        <router-link to="/auth/email-verification" class="dropdown-item side-nav-link-ref" data-key="t-email-verification">Email Verification</router-link>
                                        <router-link to="/auth/two-step-verification" class="dropdown-item side-nav-link-ref" data-key="t-two-step-verification">Two Step Verification</router-link>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                        role="button">
                                        <span data-key="t-utility">Utility</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-utility">
                                        <router-link to="/pages/starter" class="dropdown-item side-nav-link-ref" data-key="t-starter-page">Starter Page</router-link>
                                        <router-link to="/pages/maintenance" class="dropdown-item side-nav-link-ref" data-key="t-maintenance">Maintenance</router-link>
                                        <router-link to="/pages/coming-soon" class="dropdown-item side-nav-link-ref" data-key="t-coming-soon">Coming Soon</router-link>
                                        <router-link to="/pages/timeline" class="dropdown-item side-nav-link-ref" data-key="t-timeline">Timeline</router-link>
                                        <router-link to="/pages/faqs" class="dropdown-item side-nav-link-ref" data-key="t-faqs">FAQs</router-link>
                                        <router-link to="/pages/pricing" class="dropdown-item side-nav-link-ref" data-key="t-pricing">Pricing</router-link>
                                        <router-link to="/pages/404" class="dropdown-item side-nav-link-ref" data-key="t-error-404">Error 404</router-link>
                                        <router-link to="/pages/500" class="dropdown-item side-nav-link-ref" data-key="t-error-500">Error 500</router-link>
                                    </div>
                                </div>

                            </div>
                        </li>
    
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>
</template>
