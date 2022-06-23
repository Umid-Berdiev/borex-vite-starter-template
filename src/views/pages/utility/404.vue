<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <section class="authentication-bg min-vh-100 py-5 py-lg-0">
    <div class="bg-overlay bg-light"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center mb-5">
                <h1 class="error-title">
                  <span class="blink-infinite">404</span>
                </h1>
                <h4 class="text-uppercase">Sorry, page not found</h4>
                <p class="font-size-15 mx-auto text-muted w-50 mt-4">
                  It will be as simple as Occidental in fact, it will Occidental
                  to an English person
                </p>
                <div class="mt-5 text-center">
                  <router-link
                    class="btn btn-primary waves-effect waves-light"
                    to="/"
                    >Back to Dashboard</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 col-xl-7">
              <div class="mt-2">
                <img
                  src="@/assets/images/error-img.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>