<script>
import Layout from "../../layouts/main";

export default {
  data() {
    return {};
  },
  components: {
    Layout,
  },
};
</script>

<template>
  <Layout :pagetitle="'Pricing'">
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="text-center mb-5">
                  <h4>Choose your Pricing plan</h4>
                  <p class="text-muted">
                    To achieve this, it would be necessary to have uniform
                    grammar, pronunciation and more common words If several
                    languages coalesce
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-3 col-md-6">
                <div class="card plan-box overflow-hidden">
                  <div class="bg-light p-4">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h5>Starter</h5>
                        <p class="text-muted mb-0">Neque quis est</p>
                      </div>
                      <div class="flex-shrink-0 ms-3">
                        <i class="bx bx-walk h1 mb-0 text-primary"></i>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-4">
                    <div class="py-2 text-center">
                      <h1 class="mb-0">
                        <sup><small>$</small></sup> 19/
                        <span class="font-size-14">Per month</span>
                      </h1>
                    </div>
                    <div class="plan-features mt-4">
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Free Live Support
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Unlimited User
                      </p>
                      <p>
                        <i class="mdi mdi-close-circle text-danger me-2"></i> No
                        Time Tracking
                      </p>
                      <p>
                        <i class="mdi mdi-close-circle text-danger me-2"></i>
                        Unlimited Dashboards
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Custom Css
                      </p>
                    </div>
                    <div class="text-center plan-btn mt-4 pt-2">
                      <a
                        href="#"
                        class="btn btn-primary waves-effect waves-light"
                        >Sign up Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6">
                <div class="card plan-box overflow-hidden">
                  <div class="bg-light p-4">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h5>Professional</h5>
                        <p class="text-muted mb-0">Quis autem iure</p>
                      </div>
                      <div class="flex-shrink-0 ms-3">
                        <i class="bx bx-run h1 mb-0 text-primary"></i>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-4">
                    <div class="py-2 text-center">
                      <h1 class="mb-0">
                        <sup><small>$</small></sup> 29/
                        <span class="font-size-14">Per month</span>
                      </h1>
                    </div>
                    <div class="plan-features mt-4">
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Free Live Support
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Unlimited User
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        No Time Tracking
                      </p>
                      <p>
                        <i class="mdi mdi-close-circle text-danger me-2"></i>
                        Unlimited Dashboards
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Custom Css
                      </p>
                    </div>
                    <div class="text-center plan-btn mt-4 pt-2">
                      <a
                        href="#"
                        class="btn btn-primary waves-effect waves-light"
                        >Sign up Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6">
                <div class="card plan-box overflow-hidden">
                  <div class="bg-primary p-4">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h5 class="text-white">Enterprise</h5>
                        <p class="text-white-50 mb-0">Sed ut neque unde</p>
                      </div>
                      <div class="flex-shrink-0 ms-3">
                        <i class="bx bx-cycling h1 mb-0 text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-4">
                    <div class="py-2 text-center">
                      <h1 class="mb-0">
                        <sup><small>$</small></sup> 39/
                        <span class="font-size-14">Per month</span>
                      </h1>
                    </div>
                    <div class="plan-features mt-4">
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Free Live Support
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Unlimited User
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        No Time Tracking
                      </p>
                      <p>
                        <i class="mdi mdi-close-circle text-danger me-2"></i>
                        Unlimited Dashboards
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Custom Css
                      </p>
                    </div>
                    <div class="text-center plan-btn mt-4 pt-2">
                      <a
                        href="#"
                        class="btn btn-primary waves-effect waves-light"
                        >Sign up Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card plan-box overflow-hidden">
                  <div class="bg-light p-4">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h5>Unlimited</h5>
                        <p class="text-muted mb-0">Itaque earum hic</p>
                      </div>
                      <div class="flex-shrink-0 ms-3">
                        <i class="bx bx-car h1 mb-0 text-primary"></i>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-4">
                    <div class="py-2 text-center">
                      <h1 class="mb-0">
                        <sup><small>$</small></sup> 49/
                        <span class="font-size-14">Per month</span>
                      </h1>
                    </div>
                    <div class="plan-features mt-4">
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Free Live Support
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Unlimited User
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        No Time Tracking
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Unlimited Dashboards
                      </p>
                      <p>
                        <i class="mdi mdi-check-circle text-primary me-2"></i>
                        Custom Css
                      </p>
                    </div>
                    <div class="text-center plan-btn mt-4 pt-2">
                      <a
                        href="#"
                        class="btn btn-primary waves-effect waves-light"
                        >Sign up Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>