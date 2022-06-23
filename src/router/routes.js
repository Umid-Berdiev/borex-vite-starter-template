export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/pages/dashboard/ecommerce/index.vue"),
  },
  {
    path: "/dashboard/saas",
    name: "dashboard-saas",
    component: () => import("../views/pages/dashboard/saas/index.vue"),
  },
  {
    path: "/dashboard/crypto",
    name: "dashboard-crypto",
    component: () => import("../views/pages/dashboard/crypto/index.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/pages/calendar/index.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/pages/chat/index.vue"),
  },
  {
    path: "/apps/file-manager",
    name: "file-manager",
    component: () => import("../views/pages/file-manager/index.vue"),
  },
  {
    path: "/ecommerce/products",
    name: "products",
    component: () => import("../views/pages/ecommerce/products/index.vue"),
  },
  {
    path: "/ecommerce/shops",
    name: "shops",
    component: () => import("../views/pages/ecommerce/shops.vue"),
  },
  {
    path: "/ecommerce/product-detail",
    name: "product-detail",
    component: () =>
      import("../views/pages/ecommerce/product-detail/index.vue"),
  },
  {
    path: "/ecommerce/orders",
    name: "orders",
    component: () => import("../views/pages/ecommerce/orders/index.vue"),
  },
  {
    path: "/ecommerce/cart",
    name: "cart",
    component: () => import("../views/pages/ecommerce/cart/index.vue"),
  },
  {
    path: "/ecommerce/checkout",
    name: "checkout",
    component: () => import("../views/pages/ecommerce/checkout/index.vue"),
  },
  {
    path: "/ecommerce/add-product",
    name: "add-product",
    component: () => import("../views/pages/ecommerce/add-product/index.vue"),
  },
  {
    path: "/ecommerce/customers",
    name: "customers",
    component: () => import("../views/pages/ecommerce/customer/index.vue"),
  },
  {
    path: "/email/inbox",
    name: "inbox",
    component: () => import("../views/pages/email/inbox.vue"),
  },
  {
    path: "/email/read",
    name: "read",
    component: () => import("../views/pages/email/read.vue"),
  },
  {
    path: "/email/template-basic",
    name: "basic",
    component: () => import("../views/pages/email/template/basic.vue"),
  },
  {
    path: "/email/template-alert",
    name: "alert",
    component: () => import("../views/pages/email/template/alert.vue"),
  },
  {
    path: "/email/template-billing",
    name: "billing",
    component: () => import("../views/pages/email/template/billing.vue"),
  },
  {
    path: "/invoices/detail",
    name: "detail",
    component: () => import("../views/pages/invoices/detail.vue"),
  },
  {
    path: "/invoices/list",
    name: "list",
    component: () => import("../views/pages/invoices/list.vue"),
  },
  {
    path: "/contacts/grid",
    name: "contacts-grid",
    component: () => import("../views/pages/contacts/grid.vue"),
  },
  {
    path: "/contacts/list",
    name: "contacts-list",
    component: () => import("../views/pages/contacts/list.vue"),
  },
  {
    path: "/contacts/profile",
    name: "contacts-profile",
    component: () => import("../views/pages/contacts/profile.vue"),
  },
  {
    path: "/projects/create",
    name: "projects-create",
    component: () => import("../views/pages/projects/create.vue"),
  },
  {
    path: "/projects/list",
    name: "projects-list",
    component: () => import("../views/pages/projects/list.vue"),
  },
  {
    path: "/projects/grid",
    name: "projects-grid",
    component: () => import("../views/pages/projects/grid.vue"),
  },
  {
    path: "/pages/starter",
    name: "pages-starter",
    component: () => import("../views/pages/utility/starter.vue"),
  },
  {
    path: "/pages/maintenance",
    name: "pages-maintenance",
    component: () => import("../views/pages/utility/maintenance.vue"),
  },
  {
    path: "/pages/coming-soon",
    name: "pages-coming-soon",
    component: () => import("../views/pages/utility/coming-soon.vue"),
  },
  {
    path: "/pages/timeline",
    name: "pages-timeline",
    component: () => import("../views/pages/utility/timeline.vue"),
  },
  {
    path: "/pages/faqs",
    name: "pages-faqs",
    component: () => import("../views/pages/utility/faqs.vue"),
  },
  {
    path: "/pages/pricing",
    name: "pages-pricing",
    component: () => import("../views/pages/utility/pricing.vue"),
  },
  {
    path: "/pages/404",
    name: "pages-404",
    component: () => import("../views/pages/utility/404.vue"),
  },
  {
    path: "/pages/500",
    name: "pages-500",
    component: () => import("../views/pages/utility/500.vue"),
  },
  {
    path: "/ui/alerts",
    name: "Alerts",
    component: () => import("../views/pages/ui/alerts"),
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    component: () => import("../views/pages/ui/buttons"),
  },
  {
    path: "/ui/cards",
    name: "Cards",
    component: () => import("../views/pages/ui/cards"),
  },
  {
    path: "/ui/carousel",
    name: "Carousel",
    component: () => import("../views/pages/ui/carousel"),
  },
  {
    path: "/ui/dropdowns",
    name: "Dropdowns",
    component: () => import("../views/pages/ui/dropdowns"),
  },
  {
    path: "/ui/grid",
    name: "Grid",
    component: () => import("../views/pages/ui/grid"),
  },
  {
    path: "/ui/images",
    name: "Images",
    component: () => import("../views/pages/ui/images"),
  },
  {
    path: "/ui/modals",
    name: "Modals",
    component: () => import("../views/pages/ui/modals"),
  },
  {
    path: "/ui/rangeslider",
    name: "Rangeslider",
    component: () => import("../views/pages/ui/rangeslider"),
  },
  {
    path: "/ui/progressbars",
    name: "Progressbars",
    component: () => import("../views/pages/ui/progressbars"),
  },
  {
    path: "/ui/placeholder",
    name: "Placeholder",
    component: () => import("../views/pages/ui/placeholder"),
  },
  {
    path: "/ui/sweet-alert",
    name: "Sweet-alert",
    component: () => import("../views/pages/ui/sweet-alert"),
  },
  {
    path: "/ui/tabs-accordion",
    name: "Tabs-accordion",
    component: () => import("../views/pages/ui/tabs-accordions"),
  },
  {
    path: "/ui/typography",
    name: "Typography",
    component: () => import("../views/pages/ui/typography"),
  },
  {
    path: "/ui/video",
    name: "Video",
    component: () => import("../views/pages/ui/video"),
  },
  {
    path: "/ui/general",
    name: "General",
    component: () => import("../views/pages/ui/general"),
  },
  {
    path: "/ui/colors",
    name: "Colors",
    component: () => import("../views/pages/ui/colors"),
  },
  {
    path: "/ui/offcanvas",
    name: "offcanvas",
    component: () => import("../views/pages/ui/offcanvas"),
  },
  {
    path: "/ui/notifications",
    name: "notifications",
    component: () => import("../views/pages/ui/notifications"),
  },
  {
    path: "/icons/evaicons",
    name: "evaicons",
    component: () => import("../views/pages/icons/evaicons"),
  },
  {
    path: "/icons/boxicons",
    name: "boxicons",
    component: () => import("../views/pages/icons/boxicons"),
  },
  {
    path: "/icons/materialdesign",
    name: "materialdesign",
    component: () => import("../views/pages/icons/materialdesign"),
  },
  {
    path: "/icons/fontawesome",
    name: "fontawesome",
    component: () => import("../views/pages/icons/fontawesome"),
  },
  {
    path: "/ui/lightbox",
    name: "Lightbox",
    component: () => import("../views/pages/ui/lightbox"),
  },
  {
    path: "/form/advanced",
    name: "advanced",
    component: () => import("../views/pages/forms/advanced"),
  },
  {
    path: "/form/editors",
    name: "editors",
    component: () => import("../views/pages/forms/editors"),
  },
  {
    path: "/form/uploads",
    name: "uploads",
    component: () => import("../views/pages/forms/uploads"),
  },
  {
    path: "/form/wizard",
    name: "wizard",
    component: () => import("../views/pages/forms/wizard"),
  },
  {
    path: "/form/mask",
    name: "mask",
    component: () => import("../views/pages/forms/mask"),
  },
  {
    path: "/form/elements",
    name: "elements",
    component: () => import("../views/pages/forms/elements"),
  },
  {
    path: "/form/layouts",
    name: "layout",
    component: () => import("../views/pages/forms/layouts"),
  },
  {
    path: "/form/validation",
    name: "validation",
    component: () => import("../views/pages/forms/validation"),
  },
  {
    path: "/tables/basic",
    name: "table-basic",
    component: () => import("../views/pages/tables/basic"),
  },
  {
    path: "/charts/line",
    name: "line",
    component: () => import("../views/pages/charts/apex/line/index"),
  },
  {
    path: "/charts/area",
    name: "area-chart",
    component: () => import("../views/pages/charts/apex/area/index"),
  },
  {
    path: "/charts/bar",
    name: "bar-chart",
    component: () => import("../views/pages/charts/apex/bar/index"),
  },
  {
    path: "/charts/column",
    name: "column-chart",
    component: () => import("../views/pages/charts/apex/column/index"),
  },
  {
    path: "/charts/timeline",
    name: "timeline-chart",
    component: () => import("../views/pages/charts/apex/timeline/index"),
  },
  {
    path: "/charts/mixed",
    name: "mixed-chart",
    component: () => import("../views/pages/charts/apex/mixed/index"),
  },
  {
    path: "/charts/candlestick",
    name: "candlestick",
    component: () => import("../views/pages/charts/apex/candlestick/index"),
  },
  {
    path: "/charts/boxplot",
    name: "boxplot",
    component: () => import("../views/pages/charts/apex/boxplot/index"),
  },
  {
    path: "/charts/bubble",
    name: "bubble",
    component: () => import("../views/pages/charts/apex/bubble/index"),
  },
  {
    path: "/charts/scatter",
    name: "scatter",
    component: () => import("../views/pages/charts/apex/scatter/index"),
  },
  {
    path: "/charts/heatmap",
    name: "heatmap",
    component: () => import("../views/pages/charts/apex/heatmap/index"),
  },
  {
    path: "/charts/treemap",
    name: "treemap",
    component: () => import("../views/pages/charts/apex/treemap/index"),
  },
  {
    path: "/charts/pie",
    name: "pie",
    component: () => import("../views/pages/charts/apex/pie/index"),
  },
  {
    path: "/charts/radialbar",
    name: "radialbar",
    component: () => import("../views/pages/charts/apex/radiabar/index"),
  },
  {
    path: "/charts/radar",
    name: "radar",
    component: () => import("../views/pages/charts/apex/radar/index"),
  },
  {
    path: "/charts/polararea",
    name: "polararea",
    component: () => import("../views/pages/charts/apex/polararea/index"),
  },
  {
    path: "/charts/chartjs",
    name: "chartjs",
    component: () => import("../views/pages/charts/chartjs.vue"),
  },

  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/pages/auth/login.vue"),
  },
  {
    path: "/auth/logout",
    name: "logout",
    component: () => import("../views/pages/auth/logout.vue"),
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../views/pages/auth/register.vue"),
  },
  {
    path: "/auth/lock-screen",
    name: "lock-screen",
    component: () => import("../views/pages/auth/lock-screen.vue"),
  },
  {
    path: "/auth/recoverpwd",
    name: "recoverpwd",
    component: () => import("../views/pages/auth/recoverpwd.vue"),
  },
  {
    path: "/auth/confirm-mail",
    name: "confirm-mail",
    component: () => import("../views/pages/auth/confirm-mail.vue"),
  },
  {
    path: "/auth/two-step-verification",
    name: "two-step-verification",
    component: () => import("../views/pages/auth/two-step-verification.vue"),
  },
  {
    path: "/auth/email-verification",
    name: "email-verification",
    component: () => import("../views/pages/auth/email-verification.vue"),
  },

  {
    path: "/maps/google",
    name: "google-map",
    component: () => import("../views/pages/maps/google.vue"),
  },
  {
    path: "/maps/leaflet",
    name: "leaflet-map",
    component: () => import("../views/pages/maps/leaflet/index"),
  },
];
