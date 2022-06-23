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
  <Layout :pagetitle="'Projects List'">
    <div class="row">
      <div class="col-lg-12">
        <div class="">
          <div class="table-responsive">
            <table
              class="
                table
                project-list-table
                table-nowrap
                align-middle
                table-borderless
              "
            >
              <thead>
                <tr>
                  <th scope="col" style="width: 100px" class="ps-4">#</th>
                  <th scope="col">Projects</th>
                  <th scope="col">Due Review</th>
                  <th scope="col">Status</th>
                  <th scope="col">Team</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-1.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >New admin Design</a
                      >
                    </h5>
                    <p class="text-muted mb-0">
                      It will be as simple as Occidental
                    </p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        236
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        202
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            style="width: 87%"
                            aria-valuenow="87"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">87%</h6>
                      </div>
                    </div>
                  </td>
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
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-2.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >Brand logo design</a
                      >
                    </h5>
                    <p class="text-muted mb-0">
                      To achieve it would be necessary
                    </p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        45
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        95
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 86%"
                            aria-valuenow="86"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">86%</h6>
                      </div>
                    </div>
                  </td>
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
                    </div>
                  </td>
                  <td>
                    <div class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-3.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >New Landing Design</a
                      >
                    </h5>
                    <p class="text-muted mb-0">
                      For science, music, sport, etc
                    </p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        124
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        325
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 75%"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">75%</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="avatar-group">
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
                            src="@/assets/images/users/avatar-6.jpg"
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
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-4.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >Redesign - Landing page</a
                      >
                    </h5>
                    <p class="text-muted mb-0">If several languages coalesce</p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        225
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        326
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar bg-danger"
                            role="progressbar"
                            style="width: 92%"
                            aria-valuenow="92"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">92%</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="avatar-group">
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
                                bg-warning
                                text-white
                                font-size-16
                              "
                            >
                              R
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
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-5.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >Borex Dashboard UI</a
                      >
                    </h5>
                    <p class="text-muted mb-0">Separate existence is a myth</p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        321
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        214
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 75%"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">75%</h6>
                      </div>
                    </div>
                  </td>
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
                            src="@/assets/images/users/avatar-1.jpg"
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
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-6.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >Blog Template UI</a
                      >
                    </h5>
                    <p class="text-muted mb-0">
                      For science, music, sport, etc
                    </p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        125
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        143
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar bg-danger"
                            role="progressbar"
                            style="width: 88%"
                            aria-valuenow="88"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">88%</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="avatar-group">
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
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="ps-4">
                    <img
                      src="@/assets/images/companies/img-3.png"
                      alt=""
                      class="avatar-sm"
                    />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark"
                        >Multipurpose Landing</a
                      >
                    </h5>
                    <p class="text-muted mb-0">
                      It will be as simple as Occidental
                    </p>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-paperclip me-1 font-size-16 align-middle"
                        ></i>
                        241
                      </li>
                      <li class="list-inline-item me-3">
                        <i
                          class="bx bx-chat me-1 font-size-16 align-middle"
                        ></i>
                        236
                      </li>
                    </ul>
                  </td>
                  <td class="pe-5">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="progress" style="height: 6px">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            style="width: 62%"
                            aria-valuenow="62"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="mb-0 font-size-13">62%</h6>
                      </div>
                    </div>
                  </td>
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
                        href="#"
                        class="dropdown-toggle card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
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
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-success"
            ><i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i>
            Load more
          </a>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>