<script>
import Layout from "../../layouts/main";

export default {
  components: {
    Layout,
  },
  data() {
    return {
      options: {
        series: [76.2],
        chart: {
          height: 270,
          type: "radialBar",
          offsetY: -20,
        },
        chartOptions: {
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: "16px",
                  color: undefined,
                  offsetY: 120,
                },
                value: {
                  offsetY: 76,
                  fontSize: "20px",
                  color: undefined,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ["64 GB used"],
          colors: ["#3b76e1"],
        },
      },
    };
  },
};
</script>

<template>
  <Layout :pagetitle="'File Manager'">
    <div class="row">
      <div class="col-xl-9">
        <div class="card">
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-lg-4 col-sm-6">
                <div class="search-box mb-2 me-2">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control bg-light border-light rounded"
                      placeholder="Search..."
                    />
                    <i
                      class="search-icon"
                      data-eva="search-outline"
                      data-eva-height="26"
                      data-eva-width="26"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div
                  class="
                    mt-4 mt-sm-0
                    d-flex
                    align-items-center
                    justify-content-sm-end
                  "
                >
                  <div class="mb-2 me-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-plus me-1"></i> Create New
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-folder-outline me-1"></i> Folder</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-file-outline me-1"></i> File</a
                        >
                      </div>
                    </div>
                  </div>

                  <div class="dropdown mb-0">
                    <a
                      class="btn btn-link text-muted dropdown-toggle p-1 mt-n2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                    >
                      <i class="mdi mdi-dots-vertical font-size-20"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">Share Files</a>
                      <a class="dropdown-item" href="#">Share with me</a>
                      <a class="dropdown-item" href="#">Other Actions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h5 class="font-size-16 me-3 mb-0">My Files</h5>
            <div class="row mt-4">
              <div class="col-xl-4 col-sm-6">
                <div class="card shadow-none border">
                  <div class="card-body p-3">
                    <div class="">
                      <div class="dropdown float-end">
                        <a
                          class="text-muted dropdown-toggle font-size-16"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i
                            class="bx bx-dots-vertical-rounded font-size-20"
                          ></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-primary
                              text-primary
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-google-drive"></i>
                          </div>
                        </div>

                        <div class="flex-1">
                          <h5 class="font-size-15 mb-1">Google Drive</h5>
                          <a href="" class="font-size-13 text-muted"
                            ><u>View Folder</u></a
                          >
                        </div>
                      </div>
                      <div class="mt-3 pt-1">
                        <div class="d-flex justify-content-between">
                          <p class="text-muted font-size-13 mb-1">20GB</p>
                          <p class="text-muted font-size-13 mb-1">50GB used</p>
                        </div>
                        <div class="progress animated-progess custom-progress">
                          <div
                            class="progress-bar bg-gradient bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="90"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->

              <div class="col-xl-4 col-sm-6">
                <div class="card shadow-none border">
                  <div class="card-body p-3">
                    <div class="">
                      <div class="dropdown float-end">
                        <a
                          class="text-muted dropdown-toggle font-size-16"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i
                            class="bx bx-dots-vertical-rounded font-size-20"
                          ></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-info
                              text-info
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-dropbox"></i>
                          </div>
                        </div>

                        <div class="flex-1">
                          <h5 class="font-size-15 mb-1">Dropbox</h5>
                          <a href="" class="font-size-13 text-muted"
                            ><u>View Folder</u></a
                          >
                        </div>
                      </div>
                      <div class="mt-3 pt-1">
                        <div class="d-flex justify-content-between">
                          <p class="text-muted font-size-13 mb-1">20GB</p>
                          <p class="text-muted font-size-13 mb-1">50GB used</p>
                        </div>
                        <div class="progress animated-progess custom-progress">
                          <div
                            class="progress-bar bg-gradient bg-info"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="90"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->

              <div class="col-xl-4 col-sm-6">
                <div class="card shadow-none border">
                  <div class="card-body p-3">
                    <div class="">
                      <div class="dropdown float-end">
                        <a
                          class="text-muted dropdown-toggle font-size-16"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i
                            class="bx bx-dots-vertical-rounded font-size-20"
                          ></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-primary
                              text-primary
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-apple-icloud"></i>
                          </div>
                        </div>

                        <div class="flex-1">
                          <h5 class="font-size-15 mb-1">One Drive</h5>
                          <a href="" class="font-size-13 text-muted"
                            ><u>View Folder</u></a
                          >
                        </div>
                      </div>
                      <div class="mt-3 pt-1">
                        <div class="d-flex justify-content-between">
                          <p class="text-muted font-size-13 mb-1">20GB</p>
                          <p class="text-muted font-size-13 mb-1">50GB used</p>
                        </div>
                        <div class="progress animated-progess custom-progress">
                          <div
                            class="progress-bar bg-gradient bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="90"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <h5 class="font-size-16 me-3 mb-0">Folders</h5>
            <div class="row mt-4">
              <div class="col-xl-4 col-sm-6">
                <div class="card shadow-none border">
                  <div class="card-body p-3">
                    <div class="">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div>
                          <i class="bx bxs-folder h1 mb-0 text-warning"></i>
                        </div>
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
                              <div class="avatar-sm">
                                <span
                                  class="
                                    avatar-title
                                    rounded-circle
                                    bg-success
                                    text-white
                                    font-size-16
                                  "
                                >
                                  A
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mt-3">
                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">
                            <a href="javascript: void(0);" class="text-body"
                              >Analytics</a
                            >
                          </h5>
                          <p class="text-muted text-truncate mb-0">12 Files</p>
                        </div>
                        <div class="align-self-end ms-2">
                          <p class="text-muted mb-0 font-size-13">
                            <i class="mdi mdi-clock"></i> 15 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->

              <div class="col-xl-4 col-sm-6">
                <div class="card shadow-none border">
                  <div class="card-body p-3">
                    <div class="">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div>
                          <i class="bx bxs-folder h1 mb-0 text-warning"></i>
                        </div>
                        <div class="avatar-group">
                          <div class="avatar-group-item">
                            <a
                              href="javascript: void(0);"
                              class="d-inline-block"
                            >
                              <img
                                src="@/assets/images/users/avatar-3.jpg"
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
                      </div>
                      <div class="d-flex mt-3">
                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">
                            <a href="javascript: void(0);" class="text-body"
                              >Sketch Design</a
                            >
                          </h5>
                          <p class="text-muted text-truncate mb-0">235 Files</p>
                        </div>
                        <div class="align-self-end ms-2">
                          <p class="text-muted mb-0 font-size-13">
                            <i class="mdi mdi-clock"></i> 23 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->

              <div class="col-xl-4 col-sm-6">
                <div class="card shadow-none border">
                  <div class="card-body p-3">
                    <div class="">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div>
                          <i class="bx bxs-folder h1 mb-0 text-warning"></i>
                        </div>
                        <div class="avatar-group">
                          <div class="avatar-group-item">
                            <a
                              href="javascript: void(0);"
                              class="d-inline-block"
                            >
                              <div class="avatar-sm">
                                <span
                                  class="
                                    avatar-title
                                    rounded-circle
                                    bg-info
                                    text-white
                                    font-size-16
                                  "
                                >
                                  K
                                </span>
                              </div>
                            </a>
                          </div>
                          <div class="avatar-group-item">
                            <a
                              href="javascript: void(0);"
                              class="d-inline-block"
                            >
                              <img
                                src="@/assets/images/users/avatar-2.jpg"
                                alt=""
                                class="rounded-circle avatar-sm"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mt-3">
                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">
                            <a href="javascript: void(0);" class="text-body"
                              >Applications</a
                            >
                          </h5>
                          <p class="text-muted text-truncate mb-0">20 Files</p>
                        </div>
                        <div class="align-self-end ms-2">
                          <p class="text-muted mb-0 font-size-13">
                            <i class="mdi mdi-clock"></i> 45 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
            <div class="d-flex flex-wrap">
              <h5 class="font-size-16 me-3">Recent Files</h5>
              <div class="ms-auto">
                <a href="javascript: void(0);" class="fw-medium text-reset"
                  >View All</a
                >
              </div>
            </div>
            <hr class="mt-2" />
            <div class="table-responsive">
              <table class="table align-middle table-nowrap table-hover mb-0">
                <thead class="table-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date modified</th>
                    <th scope="col">Size</th>
                    <th scope="col" colspan="2">Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-file-document
                            font-size-16
                            align-middle
                            text-primary
                            me-2
                          "
                        ></i>
                        index.html</a
                      >
                    </td>
                    <td>12-10-2020, 09:45</td>
                    <td>09 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-4.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-5.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-sm">
                              <span
                                class="
                                  avatar-title
                                  rounded-circle
                                  bg-success
                                  text-white
                                  font-size-16
                                "
                              >
                                A
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-folder-zip
                            font-size-16
                            align-middle
                            text-warning
                            me-2
                          "
                        ></i>
                        Project-A.zip</a
                      >
                    </td>
                    <td>11-10-2020, 17:05</td>
                    <td>115 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-8.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-image
                            font-size-16
                            align-middle
                            text-muted
                            me-2
                          "
                        ></i>
                        Img-1.jpeg</a
                      >
                    </td>
                    <td>11-10-2020, 13:26</td>
                    <td>86 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-sm">
                              <span
                                class="
                                  avatar-title
                                  rounded-circle
                                  bg-info
                                  text-white
                                  font-size-16
                                "
                              >
                                K
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-text-box
                            font-size-16
                            align-middle
                            text-muted
                            me-2
                          "
                        ></i>
                        update list.txt</a
                      >
                    </td>
                    <td>10-10-2020, 11:32</td>
                    <td>08 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-1.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-6.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-7.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-folder
                            font-size-16
                            align-middle
                            text-warning
                            me-2
                          "
                        ></i>
                        Project B</a
                      >
                    </td>
                    <td>10-10-2020, 10:51</td>
                    <td>72 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-1.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-3.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-sm">
                              <span
                                class="
                                  avatar-title
                                  rounded-circle
                                  bg-danger
                                  text-white
                                  font-size-16
                                "
                              >
                                3+
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-text-box
                            font-size-16
                            align-middle
                            text-muted
                            me-2
                          "
                        ></i>
                        Changes list.txt</a
                      >
                    </td>
                    <td>09-10-2020, 17:05</td>
                    <td>07 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-4.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-5.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-image
                            font-size-16
                            align-middle
                            text-success
                            me-2
                          "
                        ></i>
                        Img-2.png</a
                      >
                    </td>
                    <td>09-10-2020, 15:12</td>
                    <td>31 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-sm">
                              <span
                                class="
                                  avatar-title
                                  rounded-circle
                                  bg-pink
                                  text-white
                                  font-size-16
                                "
                              >
                                L
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            mdi mdi-folder
                            font-size-16
                            align-middle
                            text-warning
                            me-2
                          "
                        ></i>
                        Project C</a
                      >
                    </td>
                    <td>09-10-2020, 10:11</td>
                    <td>20 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-4.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-5.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-sm">
                              <span
                                class="
                                  avatar-title
                                  rounded-circle
                                  bg-success
                                  text-white
                                  font-size-16
                                "
                              >
                                A
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript: void(0);" class="text-dark fw-medium"
                        ><i
                          class="
                            bx
                            bxs-file
                            font-size-16
                            align-middle
                            text-primary
                            me-2
                          "
                        ></i>
                        starter-page.html</a
                      >
                    </td>
                    <td>08-10-2020, 03:22</td>
                    <td>11 KB</td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-8.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="rounded-circle avatar-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="font-size-16 text-muted"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Open</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Rename</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Remove</a>
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
      <div class="col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="">
              <h5 class="font-size-16">Usage Storage</h5>
              <apexchart
                dir="ltr"
                height="270"
                type="radialBar"
                :options="options.chartOptions"
                :series="options.series"
              ></apexchart>
              <div>
                <h5 class="font-size-16 mb-3">Recent Files</h5>
                <div class="card border shadow-none mb-2">
                  <a href="javascript: void(0);" class="text-body">
                    <div class="p-2">
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-success
                              text-success
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-image"></i>
                          </div>
                        </div>

                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">
                            Images
                          </h5>
                          <p class="text-muted text-truncate mb-0">176 Files</p>
                        </div>

                        <div class="ms-2">
                          <p class="text-muted">6 GB</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="card border shadow-none mb-2">
                  <a href="javascript: void(0);" class="text-body">
                    <div class="p-2">
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-danger
                              text-danger
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-play-circle-outline"></i>
                          </div>
                        </div>

                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">Video</h5>
                          <p class="text-muted text-truncate mb-0">45 Files</p>
                        </div>

                        <div class="ms-2">
                          <p class="text-muted">4.1 GB</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="card border shadow-none mb-2">
                  <a href="javascript: void(0);" class="text-body">
                    <div class="p-2">
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-info
                              text-info
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-music"></i>
                          </div>
                        </div>

                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">Music</h5>
                          <p class="text-muted text-truncate mb-0">21 Files</p>
                        </div>

                        <div class="ms-2">
                          <p class="text-muted">3.2 GB</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="card border shadow-none mb-2">
                  <a href="javascript: void(0);" class="text-body">
                    <div class="p-2">
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-primary
                              text-primary
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-file-document"></i>
                          </div>
                        </div>

                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">
                            Document
                          </h5>
                          <p class="text-muted text-truncate mb-0">21 Files</p>
                        </div>

                        <div class="ms-2">
                          <p class="text-muted">2 GB</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="card border shadow-none">
                  <a href="javascript: void(0);" class="text-body">
                    <div class="p-2">
                      <div class="d-flex align-items-center">
                        <div class="avatar align-self-center me-3">
                          <div
                            class="
                              avatar-title
                              rounded
                              bg-soft-warning
                              text-warning
                              font-size-24
                            "
                          >
                            <i class="mdi mdi-folder"></i>
                          </div>
                        </div>

                        <div class="overflow-hidden me-auto">
                          <h5 class="font-size-15 text-truncate mb-1">
                            Others
                          </h5>
                          <p class="text-muted text-truncate mb-0">20 Files</p>
                        </div>

                        <div class="ms-2">
                          <p class="text-muted">1.4 GB</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-3">
              <div
                class="
                  alert alert-success alert-dismissible
                  fade
                  show
                  px-3
                  mb-0
                "
                role="alert"
              >
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
                <div class="mb-3">
                  <i class="bx bxs-folder-open h1 text-success"></i>
                </div>

                <div>
                  <h5 class="text-success">Upgrade Features</h5>
                  <p>Cum sociis natoque penatibus et</p>
                  <div class="text-center">
                    <button
                      type="button"
                      class="btn btn-link text-decoration-none text-success"
                    >
                      Upgrade <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
