<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";

/**
 * Colors component
 */
export default {
  page: {
    title: "Colors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      title: "Colors",
      items: [
        {
          text: "UI Elements",
          href: "/",
        },
        {
          text: "Colors",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout :pagetitle="title">
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-primary p-4">
                <h5 class="my-2 text-white">#5c51e9</h5>
              </div>
              <div class="bg-primary bg-gradient p-4">
                <h5 class="my-2 text-white">bg-gradient</h5>
              </div>
              <div class="bg-soft-primary p-4">
                <h5 class="my-2 text-primary">bg-soft</h5>
              </div>
            </div>

            <h5 class="mb-0 mt-3 text-primary">Primary</h5>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-success p-4">
                <h5 class="my-2 text-white">#82d173</h5>
              </div>
              <div class="bg-success bg-gradient p-4">
                <h5 class="my-2 text-white">bg-gradient</h5>
              </div>
              <div class="bg-soft-success p-4">
                <h5 class="my-2 text-success">bg-soft</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-success">Success</h5>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-info p-4">
                <h5 class="my-2 text-white">#3c91e6</h5>
              </div>
              <div class="bg-info bg-gradient p-4">
                <h5 class="my-2 text-white">bg-gradient</h5>
              </div>
              <div class="bg-soft-info p-4">
                <h5 class="my-2 text-info">bg-soft</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-info">Info</h5>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-warning p-4">
                <h5 class="my-2 text-white">#f7cc53</h5>
              </div>
              <div class="bg-warning bg-gradient p-4">
                <h5 class="my-2 text-white">bg-gradient</h5>
              </div>
              <div class="bg-soft-warning p-4">
                <h5 class="my-2 text-warning">bg-soft</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-warning">Warning</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-danger p-4">
                <h5 class="my-2 text-white">#e54b4b</h5>
              </div>
              <div class="bg-danger bg-gradient p-4">
                <h5 class="my-2 text-white">bg-gradient</h5>
              </div>
              <div class="bg-soft-danger p-4">
                <h5 class="my-2 text-danger">bg-soft</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-danger">Danger</h5>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-dark p-4">
                <h5 class="my-2 text-light">#141b2b</h5>
              </div>
              <div class="bg-dark bg-gradient p-4">
                <h5 class="my-2 text-light">bg-gradient</h5>
              </div>
              <div class="bg-soft-dark p-4">
                <h5 class="my-2 text-dark">bg-soft</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-dark">Dark</h5>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-secondary p-4">
                <h5 class="my-2 text-light">#7f838b</h5>
              </div>
              <div class="bg-secondary bg-gradient p-4">
                <h5 class="my-2 text-light">bg-gradient</h5>
              </div>
              <div class="bg-soft-secondary p-4">
                <h5 class="my-2 text-secondary">bg-soft</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-muted">Secondary</h5>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <div class="rounded overflow-hidden">
              <div class="bg-primary opacity-75 p-4">
                <h5 class="my-2 text-white">opacity-75</h5>
              </div>
              <div class="bg-primary opacity-50 p-4">
                <h5 class="my-2 text-white">opacity-50</h5>
              </div>
              <div class="bg-soft-primary opacity-25 p-4">
                <h5 class="my-2 text-white">opacity-25</h5>
              </div>
            </div>
            <h5 class="mb-0 mt-3 text-muted">Opacity</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>