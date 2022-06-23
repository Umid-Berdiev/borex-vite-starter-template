<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-white"
        ><i class="fas fa-home h3 text-primary"></i
      ></router-link>
    </div>

    <section class="authentication-bg min-vh-100 py-5 py-lg-0">
      <div class="bg-overlay bg-light"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <router-link to="/" class="d-block auth-logo">
                <img
                  src="@/assets/images/logo-dark.png"
                  alt=""
                  height="22"
                  class="auth-logo-dark mx-auto"
                />
                <img
                  src="@/assets/images/logo-light.png"
                  alt=""
                  height="22"
                  class="auth-logo-light mx-auto"
                />
              </router-link>
              <div class="row justify-content-center mt-5">
                <div class="col-sm-6">
                  <div class="maintenance-img">
                    <img
                      src="@/assets/images/coming-soon.png"
                      alt=""
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
              <h4 class="mt-5">Let's get started with Borex</h4>
              <p class="text-muted">
                It will be as simple as Occidental in fact it will be
                Occidental.
              </p>

              <div class="row justify-content-center mt-5">
                <div class="col-md-9">
                  <div id="countdown" class="countdownlist"></div>
                </div>
                <!-- end col-->
              </div>
              <!-- end row-->

              <div class="input-group countdown-input-group mx-auto my-5">
                <input
                  type="email"
                  class="form-control border-light shadow"
                  placeholder="Enter your email address"
                  aria-label="search result"
                  aria-describedby="button-email"
                />
                <button class="btn btn-primary" type="button" id="button-email">
                  Send <i class="bx bx-paper-plane ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>