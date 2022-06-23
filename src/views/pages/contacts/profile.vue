<script>
import Layout from "../../layouts/main";
import { SimpleBar } from "simplebar-vue3";

export default {
  data() {
    return {};
  },
  components: {
    Layout,
    SimpleBar,
  },
};
</script>

<template>
  <Layout :pagetitle="'Profile'">
    <div class="row">
      <div class="col-xxl-3">
        <div class="user-sidebar">
          <div class="card">
            <div class="card-body p-0">
              <div class="user-profile-img">
                <img
                  src="@/assets/images/pattern-bg.jpg"
                  class="profile-img profile-foreground-img rounded-top"
                  style="height: 120px"
                  alt=""
                />
                <div class="overlay-content rounded-top">
                  <div>
                    <div class="user-nav p-3">
                      <div class="d-flex justify-content-end">
                        <div class="dropdown">
                          <a
                            class="dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <eva-icon
                              name="more-horizontal-outline"
                              data-eva-width="20"
                              data-eva-height="20"
                              class="fill-white"
                            ></eva-icon>
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                >Another action</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                >Something else here</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end user-profile-img -->

              <div class="mt-n5 position-relative">
                <div class="text-center">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    alt=""
                    class="avatar-xl rounded-circle img-thumbnail"
                  />

                  <div class="mt-3">
                    <h5 class="mb-1">Jennifer Bennett</h5>
                    <div>
                      <a href="#" class="badge badge-soft-success m-1"
                        >UX Research</a
                      >

                      <a href="#" class="badge badge-soft-success m-1"
                        >Project Management</a
                      >
                      <a href="#" class="badge badge-soft-success m-1"
                        >CX Strategy</a
                      >
                    </div>

                    <div class="mt-4">
                      <a
                        href=""
                        class="btn btn-primary waves-effect waves-light btn-sm"
                        ><i class="bx bx-send me-1 align-middle"></i> Send
                        Message</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-3 mt-3">
                <div class="row text-center">
                  <div class="col-6 border-end">
                    <div class="p-1">
                      <h5 class="mb-1">1,269</h5>
                      <p class="text-muted mb-0">Products</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-1">
                      <h5 class="mb-1">5.2k</h5>
                      <p class="text-muted mb-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->

          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Personal Information</h4>
            </div>
            <div class="card-body">
              <p class="font-size-15 mb-1">Hi my name is Jennifer Bennett.</p>
              <p class="font-size-15">
                I'm the Co-founder and Head of Design at Company agency.
              </p>

              <p class="text-muted">
                Been the industry's standard dummy text To an English person.
                Our team collaborators and clients to achieve growth.
              </p>

              <h5 class="font-size-15">Experience :</h5>
              <ul class="list-unstyled mb-0 pt-1">
                <li class="py-1">
                  <i
                    class="mdi mdi-circle-medium me-1 text-success align-middle"
                  ></i
                  >Donec vitae libero venenatis faucibus
                </li>
                <li class="py-1">
                  <i
                    class="mdi mdi-circle-medium me-1 text-success align-middle"
                  ></i
                  >Quisque rutrum aenean imperdiet
                </li>
                <li class="py-1">
                  <i
                    class="mdi mdi-circle-medium me-1 text-success align-middle"
                  ></i
                  >Integer ante a consectetuer eget
                </li>
              </ul>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->

          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Team Members</h5>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-middle table-nowrap mb-0">
                  <tbody>
                    <tr>
                      <td style="width: 50px">
                        <img
                          src="@/assets/images/users/avatar-2.jpg"
                          class="rounded-circle avatar-sm"
                          alt=""
                        />
                      </td>
                      <td>
                        <h5 class="font-size-14 m-0">
                          <a href="javascript: void(0);" class="text-dark"
                            >Daniel Canales</a
                          >
                        </h5>
                      </td>
                      <td>
                        <div>
                          <a
                            href="javascript: void(0);"
                            class="
                              badge
                              bg-soft-primary
                              text-primary
                              font-size-11
                            "
                            >Frontend</a
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="@/assets/images/users/avatar-1.jpg"
                          class="rounded-circle avatar-sm"
                          alt=""
                        />
                      </td>
                      <td>
                        <h5 class="font-size-14 m-0">
                          <a href="javascript: void(0);" class="text-dark"
                            >Jennifer Walker</a
                          >
                        </h5>
                      </td>
                      <td>
                        <div>
                          <a
                            href="javascript: void(0);"
                            class="
                              badge
                              bg-soft-primary
                              text-primary
                              font-size-11
                            "
                            >UI / UX</a
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="avatar-sm">
                          <span
                            class="
                              avatar-title
                              rounded-circle
                              bg-primary
                              text-white
                              font-size-14
                            "
                          >
                            C
                          </span>
                        </div>
                      </td>
                      <td>
                        <h5 class="font-size-14 m-0">
                          <a href="javascript: void(0);" class="text-dark"
                            >Carl Mackay</a
                          >
                        </h5>
                      </td>
                      <td>
                        <div>
                          <a
                            href="javascript: void(0);"
                            class="
                              badge
                              bg-soft-primary
                              text-primary
                              font-size-11
                            "
                            >Backend</a
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="@/assets/images/users/avatar-4.jpg"
                          class="rounded-circle avatar-sm"
                          alt=""
                        />
                      </td>
                      <td>
                        <h5 class="font-size-14 m-0">
                          <a href="javascript: void(0);" class="text-dark"
                            >Janice Cole</a
                          >
                        </h5>
                      </td>
                      <td>
                        <div>
                          <a
                            href="javascript: void(0);"
                            class="
                              badge
                              bg-soft-primary
                              text-primary
                              font-size-11
                            "
                            >Frontend</a
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="avatar-sm">
                          <span
                            class="
                              avatar-title
                              rounded-circle
                              bg-primary
                              text-white
                              font-size-14
                            "
                          >
                            T
                          </span>
                        </div>
                      </td>
                      <td>
                        <h5 class="font-size-14 m-0">
                          <a href="javascript: void(0);" class="text-dark"
                            >Tony Brafford</a
                          >
                        </h5>
                      </td>
                      <td>
                        <div>
                          <a
                            href="javascript: void(0);"
                            class="
                              badge
                              bg-soft-primary
                              text-primary
                              font-size-11
                            "
                            >Backend</a
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>

      <div class="col-xxl-9">
        <div class="row">
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-primary bg-gradient">
                        <eva-icon
                          name="pie-chart-2"
                          class="fill-white"
                        ></eva-icon>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1">Revenue</p>
                    <h4 class="mb-0">$21,456</h4>
                  </div>

                  <div class="flex-shrink-0 align-self-end ms-2">
                    <div
                      class="badge rounded-pill font-size-13 badge-soft-success"
                    >
                      + 2.65%
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
          <div class="col-xl-4 col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-primary bg-gradient">
                        <eva-icon
                          name="shopping-bag"
                          class="fill-white"
                        ></eva-icon>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1">Orders</p>
                    <h4 class="mb-0">5,643</h4>
                  </div>
                  <div class="flex-shrink-0 align-self-end ms-2">
                    <div
                      class="badge rounded-pill font-size-13 badge-soft-danger"
                    >
                      - 0.82%
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
          <div class="col-xl-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <div class="avatar-title rounded bg-primary bg-gradient">
                        <eva-icon name="people" class="fill-white"></eva-icon>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1">Customers</p>
                    <h4 class="mb-0">45,254</h4>
                  </div>
                  <div class="flex-shrink-0 align-self-end ms-2">
                    <div
                      class="badge rounded-pill font-size-13 badge-soft-danger"
                    >
                      - 1.04%
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="card">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#about"
                role="tab"
              >
                <i class="bx bx-user-circle font-size-20"></i>
                <span class="d-none d-sm-block">About</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tasks" role="tab">
                <i class="bx bx-clipboard font-size-20"></i>
                <span class="d-none d-sm-block">Tasks</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#messages"
                role="tab"
              >
                <i class="bx bx-mail-send font-size-20"></i>
                <span class="d-none d-sm-block">Messages</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#post" role="tab">
                <i class="bx bx-image font-size-20"></i>
                <span class="d-none d-sm-block">Post</span>
              </a>
            </li>
          </ul>
          <!-- Tab content -->
          <div class="tab-content p-4">
            <div class="tab-pane active" id="about" role="tabpanel">
              <div>
                <div>
                  <h5 class="font-size-16 mb-4">Experience</h5>

                  <ol class="activity-checkout mb-0 px-4 mt-3">
                    <li class="checkout-item">
                      <div class="avatar checkout-icon p-1">
                        <div class="avatar-title rounded-circle bg-primary">
                          <i class="bx bxs-pencil text-white font-size-20"></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div>
                          <h5 class="font-size-16 mb-1">Back end Developer</h5>
                          <p class="text-muted text-truncate mb-2">
                            2019 - 2021
                          </p>
                          <div class="mb-3">
                            <p>ABC Company</p>
                            <p class="text-muted">
                              To achieve this, it would be necessary to have
                              uniform grammar, pronunciation and more common
                              words. If several languages coalesce, the grammar
                              of the resulting language is more simple and
                              regular than that of the individual
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item">
                      <div class="avatar checkout-icon p-1">
                        <div class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-code text-white font-size-20"></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <div>
                          <h5 class="font-size-16 mb-1">Front end Developer</h5>
                          <p class="text-muted text-truncate mb-2">
                            2016 - 2019
                          </p>
                          <div class="mb-3">
                            <p>ABC Company</p>
                            <p class="text-muted">
                              Proin maximus nibh at lorem bibendum venenatis.
                              Cras gravida felis et erat consectetur, ac
                              venenatis quam pulvinar. Cras neque neque,
                              vehicula vel lacus quis, eleifend iaculis mi.
                              Curabitur in mi eget ex fringilla ultricies sit
                              amet quis arcu.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="checkout-item">
                      <div class="avatar checkout-icon p-1">
                        <div class="avatar-title rounded-circle bg-primary">
                          <i class="bx bxs-chart text-white font-size-20"></i>
                        </div>
                      </div>
                      <div class="feed-item-list">
                        <h5 class="font-size-16 mb-1">UI /UX Designer</h5>
                        <p class="text-muted text-truncate mb-2">2014 - 2016</p>
                        <div class="mb-3">
                          <p>XYZ Company</p>
                          <p class="text-muted">
                            It will be as simple as occidental in fact, it will
                            be Occidental. To an English person, it will seem
                            like simplified English, as a skeptical Cambridge
                            friend of mine told me what Occidental
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h5 class="font-size-16 mb-4">Projects</h5>
                  <div class="table-responsive">
                    <table class="table table-nowrap table-hover mb-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Projects</th>
                          <th scope="col">Date</th>
                          <th scope="col">Budget</th>
                          <th scope="col">Status</th>
                          <th scope="col" style="width: 120px">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>
                            <a href="#" class="text-dark">Brand Logo Design</a>
                          </td>
                          <td>18 Jun, 2021</td>
                          <td>$523</td>
                          <td>
                            <span class="badge badge-soft-primary font-size-12"
                              >Open</span
                            >
                          </td>
                          <td>
                            <div class="dropdown">
                              <a
                                class="
                                  text-muted
                                  dropdown-toggle
                                  font-size-18
                                  px-2
                                "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                                <a class="dropdown-item" href="#"
                                  >Something else here</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td>
                            <a href="#" class="text-dark">Minible Admin</a>
                          </td>
                          <td>06 Jun, 2021</td>
                          <td>$253</td>
                          <td>
                            <span class="badge badge-soft-primary font-size-12"
                              >Open</span
                            >
                          </td>
                          <td>
                            <div class="dropdown">
                              <a
                                class="
                                  text-muted
                                  dropdown-toggle
                                  font-size-18
                                  px-2
                                "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                                <a class="dropdown-item" href="#"
                                  >Something else here</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td>
                            <a href="#" class="text-dark">Chat app Design</a>
                          </td>
                          <td>28 May, 2021</td>
                          <td>$356</td>
                          <td>
                            <span class="badge badge-soft-success font-size-12"
                              >Complete</span
                            >
                          </td>
                          <td>
                            <div class="dropdown">
                              <a
                                class="
                                  text-muted
                                  dropdown-toggle
                                  font-size-18
                                  px-2
                                "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                                <a class="dropdown-item" href="#"
                                  >Something else here</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td>
                            <a href="#" class="text-dark">Minible Landing</a>
                          </td>
                          <td>13 May, 2021</td>
                          <td>$425</td>
                          <td>
                            <span class="badge badge-soft-success font-size-12"
                              >Complete</span
                            >
                          </td>
                          <td>
                            <div class="dropdown">
                              <a
                                class="
                                  text-muted
                                  dropdown-toggle
                                  font-size-18
                                  px-2
                                "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                                <a class="dropdown-item" href="#"
                                  >Something else here</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">05</th>
                          <td>
                            <a href="#" class="text-dark"
                              >Authentication Pages</a
                            >
                          </td>
                          <td>06 May, 2021</td>
                          <td>$752</td>
                          <td>
                            <span class="badge badge-soft-success font-size-12"
                              >Complete</span
                            >
                          </td>
                          <td>
                            <div class="dropdown">
                              <a
                                class="
                                  text-muted
                                  dropdown-toggle
                                  font-size-18
                                  px-2
                                "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                                <a class="dropdown-item" href="#"
                                  >Something else here</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tasks" role="tabpanel">
              <div>
                <h5 class="font-size-16 mb-3">Active</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-activeCheck2"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-activeCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Ecommerce Product Detail</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            3
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Product Design</p>
                        </td>

                        <td>27 May, 2021</td>
                        <td style="width: 160px">
                          <span class="badge badge-soft-primary font-size-12"
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-activeCheck1"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-activeCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Ecommerce Product</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            7
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Web Development</p>
                        </td>

                        <td>26 May, 2021</td>
                        <td>
                          <span class="badge badge-soft-primary font-size-12"
                            >Active</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 class="font-size-16 my-3">Upcoming</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-upcomingCheck3"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-upcomingCheck3"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Chat app Page</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            2
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Web Development</p>
                        </td>

                        <td>-</td>
                        <td style="width: 160px">
                          <span class="badge badge-soft-secondary font-size-12"
                            >Waiting</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-upcomingCheck2"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-upcomingCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Email Pages</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            1
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Illustration</p>
                        </td>

                        <td>04 June, 2021</td>
                        <td>
                          <span class="badge badge-soft-primary font-size-12"
                            >Approved</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-upcomingCheck1"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-upcomingCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Contacts Profile Page</a
                          >
                        </td>
                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            6
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Product Design</p>
                        </td>

                        <td>-</td>
                        <td>
                          <span class="badge badge-soft-secondary font-size-12"
                            >Waiting</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 class="font-size-16 my-3">Complete</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-completeCheck3"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-completeCheck3"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >UI Elements</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            6
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Product Design</p>
                        </td>

                        <td>27 May, 2021</td>
                        <td style="width: 160px">
                          <span class="badge badge-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-completeCheck2"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-completeCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Authentication Pages</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            2
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Illustration</p>
                        </td>

                        <td>27 May, 2021</td>
                        <td>
                          <span class="badge badge-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check font-size-16 text-center">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-completeCheck1"
                            />
                            <label
                              class="form-check-label"
                              for="tasks-completeCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-medium text-dark"
                            >Admin Layout</a
                          >
                        </td>

                        <td>
                          <p class="ml-4 text-muted mb-0">
                            <i
                              class="
                                mdi mdi-comment-outline
                                align-middle
                                text-muted
                                font-size-16
                                me-1
                              "
                            ></i>
                            3
                          </p>
                        </td>
                        <td>
                          <p class="ml-4 mb-0">Product Design</p>
                        </td>

                        <td>26 May, 2021</td>
                        <td>
                          <span class="badge badge-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="messages" role="tabpanel">
              <div>
                <h5 class="font-size-16 mb-4">Review</h5>
                <SimpleBar
                  class="px-3"
                  data-simplebar
                  style="max-height: 430px"
                >
                  <div class="d-flex align-items-start border-bottom pb-4">
                    <div class="flex-shrink-0 me-2">
                      <img
                        class="rounded-circle avatar-sm"
                        src="@/assets/images/users/avatar-3.jpg"
                        alt="avatar-3 images"
                      />
                    </div>

                    <div class="flex-grow-1">
                      <h5 class="font-size-15 mb-1">
                        Marion Walker
                        <small class="text-muted float-end">1 hr ago</small>
                      </h5>
                      <p class="text-muted">
                        Maecenas non vestibulum ante, nec efficitur orci. Duis
                        eu ornare mi, quis bibendum quam. Etiam imperdiet
                        aliquam purus sit amet rhoncus. Vestibulum pretium
                        consectetur leo, in mattis ipsum sollicitudin eget.
                        Pellentesque vel mi tortor. Nullam vitae maximus dui
                        dolor sit amet, consectetur adipiscing elit.
                      </p>

                      <a
                        href="javascript: void(0);"
                        class="text-muted font-13 d-inline-block"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >

                      <div class="d-flex align-items-start mt-4">
                        <div class="flex-shrink-0 me-2">
                          <img
                            class="rounded-circle avatar-sm"
                            src="@/assets/images/users/avatar-4.jpg"
                            alt="avatar-4 images"
                          />
                        </div>

                        <div class="flex-grow-1">
                          <h5 class="font-size-15 mb-1">
                            Shanon Marvin
                            <small class="text-muted float-end">1 hr ago</small>
                          </h5>
                          <p class="text-muted">
                            It will be as simple as in fact, it will be
                            Occidental. To it will seem like simplified .
                          </p>

                          <a
                            href="javascript: void(0);"
                            class="text-muted font-13 d-inline-block"
                          >
                            <i class="mdi mdi-reply"></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-start border-bottom py-4">
                    <div class="flex-shrink-0 me-2">
                      <img
                        class="rounded-circle avatar-sm"
                        src="@/assets/images/users/avatar-5.jpg"
                        alt="avatar-5 images"
                      />
                    </div>

                    <div class="flex-grow-1">
                      <h5 class="font-size-15 mb-1">
                        Janice Morgan
                        <small class="text-muted float-end">2 hrs ago</small>
                      </h5>
                      <p class="text-muted">
                        Cras ac condimentum velit. Quisque vitae elit auctor
                        quam egestas congue. Duis eget lorem fringilla, ultrices
                        justo consequat, gravida lorem. Maecenas orci enim,
                        sodales id condimentum et, nisl arcu aliquam velit, sit
                        amet vehicula turpis metus cursus dolor cursus eget dui.
                      </p>

                      <a
                        href="javascript: void(0);"
                        class="text-muted font-13 d-inline-block"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >
                    </div>
                  </div>

                  <div class="d-flex align-items-start border-bottom py-4">
                    <div class="flex-shrink-0 me-2">
                      <img
                        class="rounded-circle avatar-sm"
                        src="@/assets/images/users/avatar-7.jpg"
                        alt="avatar-7 images"
                      />
                    </div>

                    <div class="flex-grow-1">
                      <h5 class="font-size-15 mb-1">
                        Patrick Petty
                        <small class="text-muted float-end">3 hrs ago</small>
                      </h5>
                      <p class="text-muted">
                        Aliquam sit amet eros eleifend, tristique ante sit amet,
                        eleifend arcu. Cras ut diam quam. Fusce quis diam eu
                        augue semper ullamcorper vitae sed massa. Mauris
                        lacinia, massa a feugiat mattis, leo massa porta eros,
                        sed congue arcu sem nec orci. In ac consectetur augue.
                        Nullam pulvinar risus non augue tincidunt blandit.
                      </p>

                      <a
                        href="javascript: void(0);"
                        class="text-muted font-13 d-inline-block"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >
                    </div>
                  </div>
                </SimpleBar>

                <div class="border rounded mt-4">
                  <form action="#">
                    <div class="px-2 py-1 bg-light">
                      <div class="btn-group" role="group">
                        <button
                          type="button"
                          class="
                            btn btn-sm btn-link
                            text-dark text-decoration-none
                          "
                        >
                          <i class="bx bx-link font-size-15"></i>
                        </button>
                        <button
                          type="button"
                          class="
                            btn btn-sm btn-link
                            text-dark text-decoration-none
                          "
                        >
                          <i class="bx bx-smile font-size-15"></i>
                        </button>
                        <button
                          type="button"
                          class="
                            btn btn-sm btn-link
                            text-dark text-decoration-none
                          "
                        >
                          <i class="bx bx-at font-size-15"></i>
                        </button>
                      </div>
                    </div>
                    <textarea
                      rows="3"
                      class="form-control border-0 resize-none"
                      placeholder="Your Message..."
                    ></textarea>
                  </form>
                </div>
                <!-- end .border-->

                <div class="text-end mt-3">
                  <button
                    type="button"
                    class="btn btn-success w-sm text-truncate ms-2"
                  >
                    Send <i class="bx bx-send ms-2 align-middle"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="post" role="tabpanel">
              <div>
                <h5 class="font-size-16 mb-4">Post</h5>

                <div class="blog-post">
                  <div class="d-flex align-items-center">
                    <div class="avatar-md me-3">
                      <img
                        src="@/assets/images/users/avatar-6.jpg"
                        alt=""
                        class="img-fluid rounded-circle img-thumbnail d-block"
                      />
                    </div>
                    <div class="flex-1">
                      <h5 class="font-size-15 text-truncate">
                        <a href="#" class="text-dark">Richard Johnson</a>
                      </h5>
                      <p class="font-size-13 text-muted mb-0">24 Mar, 2021</p>
                    </div>
                  </div>
                  <div class="pt-3">
                    <ul class="list-inline">
                      <li class="list-inline-item me-3">
                        <a href="javascript: void(0);" class="text-muted">
                          <i
                            class="
                              bx bx-purchase-tag-alt
                              align-middle
                              text-muted
                              me-1
                            "
                          ></i>
                          Development
                        </a>
                      </li>
                      <li class="list-inline-item me-3">
                        <a href="javascript: void(0);" class="text-muted">
                          <i
                            class="
                              bx bx-comment-dots
                              align-middle
                              text-muted
                              me-1
                            "
                          ></i>
                          08 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="position-relative mt-3">
                    <img
                      src="@/assets/images/post-1.jpg"
                      alt=""
                      class="img-thumbnail"
                    />
                  </div>
                  <div class="pt-3">
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        border-bottom
                        pb-3
                      "
                    >
                      <div>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-3">
                            <a href="javascript: void(0);" class="text-muted">
                              <i
                                class="bx bx-purchase-tag-alt text-muted me-1"
                              ></i>
                              Project
                            </a>
                          </li>
                          <li class="list-inline-item me-3">
                            <a href="javascript: void(0);" class="text-muted">
                              <i
                                class="bx bx-like align-middle text-muted me-1"
                              ></i>
                              12 Like
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div class="d-flex align-items-center">
                          <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                              >
                                <img
                                  src="@/assets/images/users/avatar-4.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                              >
                                <img
                                  src="@/assets/images/users/avatar-5.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="ms-2">
                            <button
                              type="button"
                              class="
                                btn btn-outline-primary btn-sm
                                waves-effect
                              "
                            >
                              Share
                              <i class="bx bx-share-alt align-middle ms-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="blog-post mt-4">
                  <div class="d-flex align-items-center">
                    <div class="avatar-md me-3">
                      <img
                        src="@/assets/images/users/avatar-2.jpg"
                        alt=""
                        class="img-fluid img-thumbnail rounded-circle d-block"
                      />
                    </div>
                    <div class="flex-1">
                      <h5 class="font-size-15 text-truncate">
                        <a href="#" class="text-dark">Michael Smith</a>
                      </h5>
                      <p class="font-size-13 text-muted mb-0">08 Mar, 2021</p>
                    </div>
                  </div>
                  <div class="pt-3">
                    <ul class="list-inline">
                      <li class="list-inline-item me-3">
                        <a href="javascript: void(0);" class="text-muted">
                          <i
                            class="
                              bx bx-purchase-tag-alt
                              align-middle
                              text-muted
                              me-1
                            "
                          ></i>
                          Development
                        </a>
                      </li>
                      <li class="list-inline-item me-3">
                        <a href="javascript: void(0);" class="text-muted">
                          <i
                            class="
                              bx bx-comment-dots
                              align-middle
                              text-muted
                              me-1
                            "
                          ></i>
                          08 Comments
                        </a>
                      </li>
                    </ul>
                    <p class="text-muted">
                      Aenean ornare mauris velit. Donec imperdiet, massa sit
                      amet porta maximus, massa justo faucibus nisi, eget
                      accumsan nunc ipsum nec lacus. Etiam dignissim turpis sit
                      amet lectus porttitor eleifend. Maecenas ornare molestie
                      metus eget feugiat. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  <div class="position-relative mt-3">
                    <img
                      src="@/assets/images/post-2.jpg"
                      alt=""
                      class="img-thumbnail"
                    />
                  </div>
                  <div class="pt-3">
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        border-bottom
                        pb-3
                      "
                    >
                      <div>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-3">
                            <a href="javascript: void(0);" class="text-muted">
                              <i
                                class="bx bx-purchase-tag-alt text-muted me-1"
                              ></i>
                              Project
                            </a>
                          </li>
                          <li class="list-inline-item me-3">
                            <a href="javascript: void(0);" class="text-muted">
                              <i
                                class="bx bx-like align-middle text-muted me-1"
                              ></i>
                              12 Like
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div class="d-flex align-items-center">
                          <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                              >
                                <img
                                  src="@/assets/images/users/avatar-4.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                              >
                                <img
                                  src="@/assets/images/users/avatar-5.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                              >
                                <img
                                  src="@/assets/images/users/avatar-7.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                              >
                                <img
                                  src="@/assets/images/users/avatar-6.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="ms-2">
                            <button
                              type="button"
                              class="
                                btn btn-outline-primary btn-sm
                                waves-effect
                              "
                            >
                              Share
                              <i class="bx bx-share-alt align-middle ms-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end blog post -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>