<script>
import Layout from "../../../layouts/main";

export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  components: {
    Layout,
  },
};
</script>

<template>
  <Layout :pagetitle="'Orders'">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="position-relative">
              <div class="modal-button mt-2">
                <button
                  type="button"
                  class="
                    btn btn-success btn-rounded
                    waves-effect waves-light
                    mb-2
                    me-2
                  "
                  data-bs-toggle="modal"
                  data-bs-target=".add-new-order"
                >
                  <i class="mdi mdi-plus me-1"></i> Add New Order
                </button>
              </div>
            </div>

            <div id="table-ecommerce-orders">
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
                <div class="gridjs-wrapper">
                  <table role="grid" class="gridjs-table">
                    <thead class="gridjs-thead">
                      <tr class="gridjs-tr">
                        <th
                          data-column-id="#"
                          class="gridjs-th"
                          style="min-width: 48px; width: 87px"
                        >
                          <div class="gridjs-th-content">#</div>
                        </th>
                        <th
                          data-column-id="orderId"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 94px; width: 170px"
                        >
                          <div class="gridjs-th-content">Order ID</div>
                        </th>
                        <th
                          data-column-id="billingName"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 163px; width: 298px"
                        >
                          <div class="gridjs-th-content">Billing Name</div>
                        </th>
                        <th
                          data-column-id="date"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 110px; width: 199px"
                        >
                          <div class="gridjs-th-content">Date</div>
                        </th>
                        <th
                          data-column-id="total"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 71px; width: 129px"
                        >
                          <div class="gridjs-th-content">Total</div>
                        </th>
                        <th
                          data-column-id="paymentStatus"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 148px; width: 266px"
                        >
                          <div class="gridjs-th-content">Payment Status</div>
                        </th>
                        <th
                          data-column-id="paymentMethod"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 151px; width: 276px"
                        >
                          <div class="gridjs-th-content">Payment Method</div>
                        </th>
                        <th
                          data-column-id="viewDetails"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 122px; width: 221px"
                        >
                          <div class="gridjs-th-content">View Details</div>
                        </th>
                        <th
                          data-column-id="action"
                          class="gridjs-th"
                          style="minwidth: 77px; width: 140px"
                        >
                          <div class="gridjs-th-content">Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="gridjs-tbody">
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK2540</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-1.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Neal Matthews </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$400</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                            >
                              Paid
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span>
                            <i class="fab fa-cc-mastercard me-2"></i>
                            Mastercard
                          </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK5623</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Jamal Burnett </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          05 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$452</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-danger
                                font-size-12
                              "
                            >
                              Chargeback
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span> <i class="fab fa-cc-visa me-2"></i>Visa </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK6263</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Juan Mitchell </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$632</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-warning
                                font-size-12
                              "
                            >
                              Refund
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span>
                            <i class="fab fa-cc-paypal me-2"></i>
                            Paypal
                          </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK4521</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-4.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Barry Dick </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$521</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-warning
                                font-size-12
                              "
                            >
                              Refund
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span>
                            <i class="fas fa-money-bill-alt me-2"></i>
                            COD
                          </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK5263</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-5.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Ronald Taylor </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$521</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                            >
                              Paid
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span>
                            <i class="fab fa-cc-mastercard me-2"></i>
                            Mastercard
                          </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK4526</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-6.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Jacob Hunter </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$365</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-danger
                                font-size-12
                              "
                            >
                              Chargeback
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span> <i class="fab fa-cc-visa me-2"></i>Visa </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK8965</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-7.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> William Cruz </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$452</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                            >
                              Paid
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span>
                            <i class="fab fa-cc-paypal me-2"></i>
                            Paypal
                          </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr class="gridjs-tr">
                        <td data-column-id="#" class="gridjs-td">
                          <span>
                            <div class="form-check font-size-16">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                class="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </span>
                        </td>
                        <td data-column-id="orderId" class="gridjs-td">
                          <span>
                            <span class="fw-semibold">#SK9658</span>
                          </span>
                        </td>
                        <td data-column-id="billingName" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-8.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Dustin Moser </a>
                          </span>
                        </td>
                        <td data-column-id="date" class="gridjs-td">
                          08 Oct, 2021
                        </td>
                        <td data-column-id="total" class="gridjs-td">$365</td>
                        <td data-column-id="paymentStatus" class="gridjs-td">
                          <span>
                            <span
                              class="
                                badge badge-pill badge-soft-success
                                font-size-12
                              "
                            >
                              Paid
                            </span>
                          </span>
                        </td>
                        <td data-column-id="paymentMethod" class="gridjs-td">
                          <span>
                            <i class="fas fa-money-bill-alt me-2"></i>
                            COD
                          </span>
                        </td>
                        <td data-column-id="viewDetails" class="gridjs-td">
                          <span>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target=".orderdetailsModal"
                            >
                              View Details
                            </button>
                          </span>
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                            <div class="d-flex gap-3">
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-success"
                                data-bs-original-title="Edit"
                                aria-label="Edit"
                              >
                                <i class="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                class="text-danger"
                                data-bs-original-title="Delete"
                                aria-label="Delete"
                              >
                                <i class="mdi mdi-delete font-size-18"></i>
                              </a>
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
                    <div
                      class="gridjs-pages text-muted"
                      style="textalign: right"
                    >
                      <button
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

    <!-- end row -->
    <!--  Extra Large modal example -->
    <div
      class="modal fade add-new-order"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myExtraLargeModalLabel">
              Add New Order
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label" for="AddOrder-Product"
                    >Choose Product</label
                  >
                  <select class="form-select" id="AddOrder-Product">
                    <option selected>Select Product</option>
                    <option>Adidas Running Shoes</option>
                    <option>Puma P103 Shoes</option>
                    <option>Adidas AB23 Shoes</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label" for="AddOrder-Billing-Name"
                    >Billing Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Billing Name"
                    id="AddOrder-Billing-Name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Select Date"
                    id="order-date"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label" for="AddOrder-Total">Total</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="$565"
                    id="AddOrder-Total"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label" for="AddOrder-Payment-Status"
                    >Payment Status</label
                  >
                  <select class="form-select" id="AddOrder-Payment-Status">
                    <option selected>Select Card Type</option>
                    <option>Paid</option>
                    <option>Chargeback</option>
                    <option>Refund</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label" for="AddOrder-Payment-Method"
                    >Payment Method</label
                  >
                  <select class="form-select" id="AddOrder-Payment-Method">
                    <option selected>Select Payment Method</option>
                    <option>Mastercard</option>
                    <option>Visa</option>
                    <option>Paypal</option>
                    <option>COD</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12 text-end">
                <button
                  type="button"
                  class="btn btn-danger me-1"
                  data-bs-dismiss="modal"
                >
                  <i class="bx bx-x me-1"></i> Cancel
                </button>
                <button
                  type="submit"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#success-btn"
                  id="btn-save-event"
                >
                  <i class="bx bx-check me-1"></i> Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!--  successfully modal  -->
    <div
      id="success-btn"
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
      data-bs-scroll="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="text-center">
              <i class="bx bx-check-circle display-1 text-success"></i>
              <h3 class="mt-3">Order Completed Successfully</h3>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Modal -->
    <div
      class="modal fade orderdetailsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="orderdetailsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="orderdetailsModalLabel">
              Order Details
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="mb-2">
              Product id: <span class="text-primary">#SK2540</span>
            </p>
            <p class="mb-4">
              Billing Name: <span class="text-primary">Neal Matthews</span>
            </p>

            <div class="table-responsive">
              <table class="table align-middle table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="@/assets/images/product/img-1.jpg"
                          alt=""
                          class="rounded avatar-md"
                        />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 class="text-truncate font-size-14">
                          Waterproof Mobile Phone
                        </h5>
                        <p class="text-muted mb-0">$ 225 x 1</p>
                      </div>
                    </td>
                    <td>$ 255</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="@/assets/images/product/img-2.jpg"
                          alt=""
                          class="rounded avatar-md"
                        />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 class="text-truncate font-size-14">
                          Smartphone Dual Camera
                        </h5>
                        <p class="text-muted mb-0">$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <h6 class="m-0 text-right">Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <h6 class="m-0 text-right">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <h6 class="m-0 text-right">Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </Layout>
</template>
