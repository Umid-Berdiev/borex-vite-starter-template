<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";

/**
 * General-ui component
 */
export default {
  page: {
    title: "General UI",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
  },
  data() {
    return {
      title: "General",
      items: [
        {
          text: "UI Elements",
          href: "/",
        },
        {
          text: "General",
          active: true,
        },
      ],
      defaultvalue: 3,
      currentpage: 3,
    };
  },
};
</script>

<template>
  <Layout :pagetitle="title">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Badges</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Add any of the below mentioned modifier classes to change the
              appearance of a badge.
            </p>
            <div>
              <span class="badge bg-primary">Primary</span>
              <span class="badge bg-success">Success</span>
              <span class="badge bg-info">Info</span>
              <span class="badge bg-warning">Warning</span>
              <span class="badge bg-danger">Danger</span>
              <span class="badge bg-dark">Dark</span>
            </div>

            <div class="mt-4">
              <h5 class="font-size-14">Soft Badge</h5>
              <div class="mt-3">
                <span class="badge badge-soft-primary">Primary</span>
                <span class="badge badge-soft-success">Success</span>
                <span class="badge badge-soft-info">Info</span>
                <span class="badge badge-soft-warning">Warning</span>
                <span class="badge badge-soft-danger">Danger</span>
                <span class="badge badge-soft-dark">Dark</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Pill badges</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Use the <code>.rounded-pill</code> modifier class to make badges
              more rounded (with a larger <code>border-radius</code> and
              additional horizontal <code>padding</code>). Useful if you miss
              the badges from v3.
            </p>
            <div>
              <span class="badge rounded-pill bg-primary">Primary</span>
              <span class="badge rounded-pill bg-success">Success</span>
              <span class="badge rounded-pill bg-info">Info</span>
              <span class="badge rounded-pill bg-warning">Warning</span>
              <span class="badge rounded-pill bg-danger">Danger</span>
              <span class="badge rounded-pill bg-dark">Dark</span>
            </div>

            <div class="mt-4">
              <h5 class="font-size-14">Soft Badge</h5>
              <div class="mt-3">
                <span class="badge rounded-pill badge-soft-primary"
                  >Primary</span
                >
                <span class="badge rounded-pill badge-soft-success"
                  >Success</span
                >
                <span class="badge rounded-pill badge-soft-info">Info</span>
                <span class="badge rounded-pill badge-soft-warning"
                  >Warning</span
                >
                <span class="badge rounded-pill badge-soft-danger">Danger</span>
                <span class="badge rounded-pill badge-soft-dark">Dark</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Pagination</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-6">
                <h5 class="font-size-14">Default Example</h5>
                <p class="card-title-desc">
                  Pagination links indicate a series of related content exists
                  across multiple pages.
                </p>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <i class="mdi mdi-chevron-left"></i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <i class="mdi mdi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="col-xl-6">
                <div class="mt-4 mt-lg-0">
                  <h5 class="font-size-14">Disabled and active states</h5>
                  <p class="card-title-desc">
                    Pagination links are customizable for different
                    circumstances. Use <code>.disabled</code> for links that
                    appear un-clickable and <code>.active</code> to indicate the
                    current page.
                  </p>

                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#"
                          >2 <span class="sr-only">(current)</span></a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>

                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <span class="page-link"
                          ><i class="mdi mdi-chevron-left"></i
                        ></span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item active">
                        <span class="page-link">
                          2
                          <span class="sr-only">(current)</span>
                        </span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#"
                          ><i class="mdi mdi-chevron-right"></i
                        ></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-xl-6">
                <div class="mt-4">
                  <h5 class="font-size-14">Sizing</h5>
                  <p class="card-title-desc">
                    Fancy larger or smaller pagination? Add
                    <code>.pagination-lg</code> or
                    <code>.pagination-sm</code> for additional sizes.
                  </p>

                  <nav aria-label="...">
                    <ul class="pagination pagination-lg">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>

                  <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="mt-4">
                  <h5 class="font-size-14">Alignment</h5>
                  <p class="card-title-desc">
                    Change the alignment of pagination components with flexbox
                    utilities.
                  </p>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Border spinner</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <div>
              <div class="spinner-border text-primary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-secondary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-success m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-info m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-warning m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-danger m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-dark m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Growing spinner</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              If you don’t fancy a border spinner, switch to the grow spinner.
              While it doesn’t technically spin, it does repeatedly grow!
            </p>
            <div>
              <div class="spinner-grow text-primary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-success m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-info m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-warning m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-danger m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-dark m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
