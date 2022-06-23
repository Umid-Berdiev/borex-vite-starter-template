<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";

/**
 * Dropdowns component
 */
export default {
  page: {
    title: "Dropdowns",
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
      title: "Dropdowns",
      items: [
        {
          text: "UI Elements",
          href: "/",
        },
        {
          text: "Dropdowns",
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
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Single button dropdowns</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Any single <code class="highlighter-rouge">.btn</code> can be
              turned into a dropdown toggle with some markup changes. Here’s how
              you can put them to work with either
              <code class="highlighter-rouge">&lt;button&gt;</code> elements:
            </p>

            <div class="row">
              <div class="col-sm-6">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button <i class="mdi mdi-chevron-down"></i>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="dropdown mt-4 mt-sm-0">
                  <a
                    href="#"
                    class="btn btn-secondary"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link <i class="mdi mdi-chevron-down"></i>
                  </a>

                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Variant</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              The best part is you can do this with any button variant, too:
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Primary <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Secondary <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Success <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-info"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Info <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Warning <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Danger <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Split button dropdowns</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              The best part is you can do this with any button variant, too:
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <div class="btn-group">
                <button type="button" class="btn btn-primary">Primary</button>
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-success">Success</button>
                <button
                  type="button"
                  class="btn btn-success dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-info">Info</button>
                <button
                  type="button"
                  class="btn btn-info dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-warning">Warning</button>
                <button
                  type="button"
                  class="btn btn-warning dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-danger">Danger</button>
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <!-- /btn-group -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Sizing</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc mb-3">
              Button dropdowns work with buttons of all sizes, including default
              and split dropdown buttons.
            </p>

            <div class="d-flex gap-2 flex-wrap align-items-center">
              <!-- Large button groups (default and split) -->
              <div class="btn-group">
                <button
                  class="btn btn-primary btn-lg"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Large button <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <div class="btn-group">
                <button class="btn btn-secondary btn-lg" type="button">
                  Large button
                </button>
                <button
                  type="button"
                  class="btn btn-lg btn-secondary dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>

              <!-- Small button groups (default and split) -->
              <div class="btn-group">
                <button
                  class="btn btn-info btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Small button <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <div class="btn-group">
                <button class="btn btn-secondary btn-sm" type="button">
                  Small button
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-secondary dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Dropup variation</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Trigger dropdown menus above elements by adding
              <code class="highlighter-rouge">.dropup</code> to the parent
              element.
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <!-- Default dropup button -->
              <div class="btn-group dropup">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropup <i class="mdi mdi-chevron-up"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>

              <!-- Split dropup button -->
              <div class="btn-group dropup">
                <button type="button" class="btn btn-secondary">
                  Split dropup
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-up"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Menu alignment</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Add <code class="highlighter-rouge">.dropdown-menu-end</code> to a
              <code class="highlighter-rouge">.dropdown-menu</code> to right
              align the dropdown menu.
            </p>

            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu is right-aligned <i class="mdi mdi-chevron-down"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Dropright variation</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Trigger dropdown menus at the right of the elements by adding
              <code>.dropend</code> to the parent element.
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <!-- Default dropright button -->
              <div class="btn-group dropend">
                <button
                  type="button"
                  class="btn btn-info waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropright <i class="mdi mdi-chevron-right"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>

              <!-- Split dropright button -->
              <div class="btn-group dropend">
                <button
                  type="button"
                  class="btn btn-info waves-effect waves-light"
                >
                  Split dropend
                </button>
                <button
                  type="button"
                  class="
                    btn btn-info
                    waves-effect waves-light
                    dropdown-toggle-split
                  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-right"></i>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Dropleft variation</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Trigger dropdown menus at the right of the elements by adding
              <code>.dropstart</code> to the parent element.
            </p>

            <div class="d-flex gap-2 flex-wrap">
              <!-- Default dropright button -->
              <div class="btn-group dropstart">
                <button
                  type="button"
                  class="btn btn-info waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chevron-left"></i> Dropleft
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>

              <!-- Split dropright button -->
              <div class="btn-group">
                <div class="btn-group dropstart">
                  <button
                    type="button"
                    class="
                      btn btn-info
                      waves-effect waves-light
                      dropdown-toggle-split
                    "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="mdi mdi-chevron-left"></i>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-info waves-effect waves-light"
                >
                  Split dropstart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
