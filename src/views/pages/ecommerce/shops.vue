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
  <Layout :pagetitle="'Shops'">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="position-relative">
              <div class="modal-button mt-2"></div>
            </div>

            <div id="table-ecommerce-shops" class="mt-3">
              <div role="complementary" class="gridjs gridjs-container">
                <div class="gridjs-head">
                  <div class="gridjs-search">
                    <input
                      type="search"
                      placeholder="Type a keyword..."
                      aria-label="Type a keyword..."
                      class="gridjs-input gridjs-search-input"
                    />
                  </div>
                </div>
                <div class="gridjs-wrapper" style="height: auto">
                  <table role="grid" class="gridjs-table" style="height: auto;width: 100%;">
                    <thead class="gridjs-thead">
                      <tr class="gridjs-tr">
                        <th
                          data-column-id="brand"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 78px; width: 102px"
                        >
                          <div class="gridjs-th-content">Brand</div>
                        </th>
                        <th
                          data-column-id="name"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 44px; width: 188px"
                        >
                          <div class="gridjs-th-content">Name</div>
                        </th>
                        <th
                          data-column-id="email"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 06px; width: 269px"
                        >
                          <div class="gridjs-th-content">Email</div>
                        </th>
                        <th
                          data-column-id="date"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 98px; width: 127px"
                        >
                          <div class="gridjs-th-content">Date</div>
                        </th>
                        <th
                          data-column-id="product"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 91px; width: 119px"
                        >
                          <div class="gridjs-th-content">Product</div>
                        </th>
                        <th
                          data-column-id="currentBalance"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 48px; width: 193px"
                        >
                          <div class="gridjs-th-content">Current Balance</div>
                        </th>
                        <th
                          data-column-id="action"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 81px; width: 106px"
                        >
                          <div class="gridjs-th-content">Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="gridjs-tbody">
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-primary
                                  text-primary
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                M
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Nedick's</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>
                              Wayne McClain
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          WayneMcclain@gmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07/10/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">86</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          $12,456
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-warning
                                  text-warning
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                B
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Brendle's</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>
                              David Marshall
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          Davidmarshall@gmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          12/10/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">82</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          $34,523
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-success
                                  text-success
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                K
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Tech Hifi</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>
                              Katia Stapleton
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          Katiastapleton@gmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          14/11/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">75</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          $63,265
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-danger
                                  text-danger
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                P
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Packer</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>Mae Rankin
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          Maerankingmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          14/11/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">62</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          $42,652
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-primary
                                  text-primary
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                L
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Lafayette</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>
                              Andrew Bivens
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          Andrewbivens@gmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          15/11/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">55</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          $52,652
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-warning
                                  text-warning
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                B
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Tech Hifi</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>John McLeroy
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          JohnmcLeroy@gmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          20/11/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">53</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          $12,523
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="brand" class="gridjs-td">
                          <span>
                            <div class="avatar">
                              <span
                                class="
                                  avatar-title
                                  bg-soft-success
                                  text-success
                                  font-size-16
                                  rounded-circle
                                "
                              >
                                K
                              </span>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="name" class="gridjs-td">
                          <span>
                            <h5 class="font-size-15">Packer</h5>
                            <p class="text-muted mb-0">
                              <i class="mdi mdi-account me-1"></i>
                              Katia Stapleton
                            </p>
                          </span>
                        </td>
                        <td data-column-id="email" class="gridjs-td">
                          Katiastapleton@gmail.com
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          23/11/2021
                        </td>
                        <td data-column-id="product" class="gridjs-td">66</td>
                        <td data-column-id="currentBalance" class="gridjs-td">
                          63,523
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <a
                                class="text-muted dropdown-toggle font-size-20"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="bx bx-dots-horizontal-rounded"></i
                              ></a>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <a class="dropdown-item" href="#">Edit</a
                                ><a class="dropdown-item" href="#">Action</a
                                ><a class="dropdown-item" href="#">Remove</a>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="gridjs-footer mt-2">
                  <div class="gridjs-pagination">
                    <div
                      role="status"
                      aria-live="polite"
                      class="gridjs-summary"
                      title="Page 1 of 3"
                    >
                      Showing <b>1</b> to <b>8</b> of <b>18</b> results
                    </div>
                    <div class="gridjs-pages text-muted">
                      <button
                        tabIndex="0"
                        disabled=""
                        title="Previous"
                        aria-label="Previous"
                        class=""
                      >
                        Previous
                      </button>
                      <button
                        tabIndex="0"
                        class="gridjs-currentPage"
                        title="Page 1"
                        aria-label="Page 1"
                      >
                        1
                      </button>
                      <button
                        tabIndex="0"
                        class=""
                        title="Page 2"
                        aria-label="Page 2"
                      >
                        2
                      </button>
                      <button
                        tabIndex="0"
                        class=""
                        title="Page 3"
                        aria-label="Page 3"
                      >
                        3
                      </button>
                      <button
                        tabIndex="0"
                        title="Next"
                        aria-label="Next"
                        class=""
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div id="gridjs-temp" class="gridjs-temp"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>