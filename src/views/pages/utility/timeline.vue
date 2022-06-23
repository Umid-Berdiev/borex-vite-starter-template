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
  <Layout :pagetitle="'Timeline'">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Vertical Timeline</h4>
          </div>
          <div class="card-body">
            <div class="my-2">
              <ul class="verti-timeline list-unstyled">
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <i class="bx bx-copy-alt h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5>Timeline Event One</h5>
                        <p class="text-muted mb-0">
                          Perspitis unde omnis it voluptatem accusantium
                          doloremque laudantium, totam rem aperiam, eaque ipsa
                          quae ab illo inventore veritatis et quasi architecto
                          beatae explicabo.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <i class="bx bx-package h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5>Timeline Event two</h5>
                        <p class="text-muted">
                          At vero eos dignissimos ducimus quos dolores chooses
                          to enjoy pleasure that has no annoying.
                        </p>
                        <div
                          class="
                            d-flex
                            flex-wrap
                            align-items-start
                            event-img
                            mt-3
                            gap-2
                          "
                        >
                          <img
                            src="@/assets/images/small/img-2.jpg"
                            alt=""
                            class="img-fluid rounded"
                            width="60"
                          />
                          <img
                            src="@/assets/images/small/img-5.jpg"
                            alt=""
                            class="img-fluid rounded"
                            width="60"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list active">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle bx-fade-right"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <i class="bx bx-car h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5>Timeline Event Three</h5>
                        <p class="text-muted mb-0">
                          Vivamus ultrices massa turna interdum eu. Pellentesque
                          habitant morbi tristique eget justo sit amet est
                          varius mollis et quis nisi. Suspendisse potenti.
                          senectus et netus et malesuada fames ac turpis
                          egestas.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <i class="bx bx-badge-check h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5>Timeline Event Four</h5>
                        <p class="text-muted mb-0">
                          Printing and typesetting industry. been the
                          industry'scrambled it make a type specimen book.
                        </p>
                        <button
                          type="button"
                          class="
                            btn btn-primary btn-rounded
                            waves-effect waves-light
                            mt-4
                          "
                        >
                          See more detail
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <i class="bx bx-cart-alt h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5>Timeline Event Five</h5>
                        <p class="text-muted mb-0">
                          Excepturi, obcaecati, quisquam id molestias eaque
                          asperiores voluptatibus cupiditate error assumenda
                          delectus odit similique earum voluptatem Odit, itaque,
                          deserunt corporis vero ipsum nisi repellat ...
                          <a href="#">Read more</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <i class="bx bx-aperture h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5>Timeline Event End</h5>
                        <p class="text-muted mb-0">
                          Suspendisse tempor porttitor elit non maximus. Sed
                          suscipit, purus in convallis condimentum, risus ex
                          pellentesque sapien, vel tempor arcu dolor ut est. Nam
                          ac felis id mauris fermentum nisl pharetra auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Horizontal Timeline</h4>
          </div>
          <div class="card-body">
            <div class="my-2">
              <div class="hori-timeline">
                <div
                  class="swiper-container slider events"
                  id="timeline-carousel"
                >
                  <div class="swiper-wrapper">
                    <div class="swiper-slide event-list">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">12 September</div>
                          <h5 class="mb-4">First event</h5>
                        </div>
                        <div class="event-down-icon">
                          <i
                            class="
                              bx bx-down-arrow-circle
                              h3
                              text-primary
                              down-arrow-icon
                            "
                          ></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">
                            It will be as simple as occidental in fact it will
                            be Cambridge
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide event-list">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">06 October</div>
                          <h5 class="mb-4">Second event</h5>
                        </div>
                        <div class="event-down-icon">
                          <i
                            class="
                              bx bx-down-arrow-circle
                              h3
                              text-primary
                              down-arrow-icon
                            "
                          ></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">
                            To an English person, it will seem like simplified
                            English existence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide event-list active">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">25 October</div>
                          <h5 class="mb-4">Third event</h5>
                        </div>
                        <div class="event-down-icon">
                          <i
                            class="
                              bx bx-down-arrow-circle
                              h3
                              text-primary
                              down-arrow-icon
                            "
                          ></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">
                            For science, music, sport, etc, Europe uses the same
                            vocabulary.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide event-list">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">04 November</div>
                          <h5 class="mb-4">Fourth event</h5>
                        </div>
                        <div class="event-down-icon">
                          <i
                            class="
                              bx bx-down-arrow-circle
                              h3
                              text-primary
                              down-arrow-icon
                            "
                          ></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">
                            New common language will be more simple than
                            existing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide event-list">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">19 November</div>
                          <h5 class="mb-4">Sixth event</h5>
                        </div>
                        <div class="event-down-icon">
                          <i
                            class="
                              bx bx-down-arrow-circle
                              h3
                              text-primary
                              down-arrow-icon
                            "
                          ></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">
                            It will be as simple as occidental in fact it will
                            be Cambridge
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-slide event-list">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">21 December</div>
                          <h5 class="mb-4">Seventh event</h5>
                        </div>
                        <div class="event-down-icon">
                          <i
                            class="
                              bx bx-down-arrow-circle
                              h3
                              text-primary
                              down-arrow-icon
                            "
                          ></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">
                            To an English person, it will seem like simplified
                            English existence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>