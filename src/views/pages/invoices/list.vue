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
  <Layout :pagetitle="'Invoice List'">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="position-relative">
              <div class="modal-button mt-2">
                <div class="row align-items-start">
                  <div class="col-sm-auto">
                    <div class="d-flex gap-1">
                      <div class="dropdown">
                        <button
                          class="btn btn-light btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="bx bx-dots-horizontal-rounded"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" style="">
                          <li><a class="dropdown-item" href="#">Edit</a></li>
                          <li><a class="dropdown-item" href="#">Print</a></li>
                          <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm">
                    <div class="mt-3 mt-md-0 mb-3">
                      <button
                        type="button"
                        class="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#addInvoiceModal"
                      >
                        <i class="mdi mdi-plus me-1"></i> Add Invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="table-invoices-list">
              <div
                role="complementary"
                class="gridjs gridjs-container"
                style="width: 100%"
              >
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
                  <table
                    role="grid"
                    class="gridjs-table"
                    style="height: auto; width: 100%"
                  >
                    <thead class="gridjs-thead">
                      <tr class="gridjs-tr">
                        <th
                          data-column-id="#"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 78px; width: 102px"
                        >
                          <div class="gridjs-th-content">#</div>
                        </th>
                        <th
                          data-column-id="orderId"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 144px; width: 188px"
                        >
                          <div class="gridjs-th-content">Order ID</div>
                        </th>
                        <th
                          data-column-id="date"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 206px; width: 269px"
                        >
                          <div class="gridjs-th-content">Date</div>
                        </th>
                        <th
                          data-column-id="billingName"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 98px; width: 127px"
                        >
                          <div class="gridjs-th-content">Billing Name</div>
                        </th>
                        <th
                          data-column-id="amount"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 91px; width: 119px"
                        >
                          <div class="gridjs-th-content">Amount</div>
                        </th>
                        <th
                          data-column-id="status"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 148px; width: 193px"
                        >
                          <div class="gridjs-th-content">Status</div>
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
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0215</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Connie Franco
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $26.30
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                              >Paid</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0214</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          05 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Paul Reynolds
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $24.20
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                              >Paid</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0214</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Ronald Patterson
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $65.32
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-warning
                                font-size-12
                              "
                              >Pending</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0212</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Adella Perez
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $53.32
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                              >Paid</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0211</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Theresa Mayers
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $13.21
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                              >Paid</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0210</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Michael Wallace
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $23.41
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-warning
                                font-size-12
                              "
                              >Pending</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0209</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Oliver Gonzales
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $41.23
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-warning
                                font-size-12
                              "
                              >Pending</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0208</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          08 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          David Burke
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $32.25
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                              >Paid</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0207</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          09 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Willie Verner
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $53.21
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-warning
                                font-size-12
                              "
                              >Pending</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span
                            ><div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              /><label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label></div
                          ></span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span><span class="fw-semibold">#DS0206</span></span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          Felix Perry
                        </td>
                        <td data-column-id="amount" class="gridjs-td">
                          $63.21
                        </td>
                        <td data-column-id="status" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                              >Paid</span
                            >
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="dropdown">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul
                                class="dropdown-menu dropdown-menu-end"
                                style=""
                              >
                                <li>
                                  <a class="dropdown-item" href="#">Edit</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Print</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Delete</a>
                                </li>
                              </ul>
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
                      Showing <b>1</b> to <b>10</b> of <b>18</b> results
                    </div>
                    <div
                      class="gridjs-pages text-muted"
                      style="textalign: right"
                    >
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