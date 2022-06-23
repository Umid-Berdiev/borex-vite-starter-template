<script>
import Layout from "../../../layouts/main";

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
  <Layout :pagetitle="'Customers'">
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
                    mb-5
                    me-2
                  "
                  style="marginbottom: 50px"
                >
                  <i class="mdi mdi-plus me-1"></i> New Customer
                </button>
              </div>
            </div>

            <div id="table-ecommerce-customers" class="mt-3">
              <div role="complementary" class="gridjs gridjs-container">
                <div class="gridjs-head">
                  <div class="gridjs-search">
                    <input
                      type="search"
                      placeholder="Type a keyword..."
                      aria-label="Type a keyword..."
                      class="gridjs-input gridjs-search-input"
                      styl
                    />
                  </div>
                </div>

                <div class="gridjs-wrapper" style="height: auto">
                  <table role="grid" class="gridjs-table" style="height: auto">
                    <thead class="gridjs-thead">
                      <tr class="gridjs-tr">
                        <th
                          data-column-id="#"
                          class="gridjs-th"
                          style="minwidth: 48px; width: 71px"
                        >
                          <div class="gridjs-th-content">#</div>
                        </th>
                        <th
                          data-column-id="username"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 172px; width: 253px"
                        >
                          <div class="gridjs-th-content">Username</div>
                        </th>
                        <th
                          data-column-id="phone/Email"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 230px; width: 340px"
                        >
                          <div class="gridjs-th-content">Phone / Email</div>
                        </th>
                        <th
                          data-column-id="address"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 348px; width: 514px"
                        >
                          <div class="gridjs-th-content">Address</div>
                        </th>
                        <th
                          data-column-id="rating"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 80px; width: 118px"
                        >
                          <div class="gridjs-th-content">Rating</div>
                        </th>
                        <th
                          data-column-id="walletBalance"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 140px; width: 207px"
                        >
                          <div class="gridjs-th-content">Wallet Balance</div>
                        </th>
                        <th
                          data-column-id="joiningDate"
                          class="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style="minwidth: 122px; width: 180px"
                        >
                          <div class="gridjs-th-content">Joining Date</div>
                        </th>
                        <th
                          data-column-id="action"
                          class="gridjs-th"
                          style="minwidth: 68px; width: 101px"
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-1.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Stephen Rash </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">325-250-1106</p>
                            <p class="mb-0">StephenRash@teleworm.us</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          2470 Grove Street Bethpage, NY 11714
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.2
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $5,412
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          07 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                           <div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Juan Mays </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">443-523-4726</p>
                            <p class="mb-0">JuanMays@armyspy.com</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          3755 Harron Drive Salisbury, MD 21875
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.3
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $5,632
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                           <div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-3.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Scott Henry </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">704-629-9535</p>
                            <p class="mb-0">ScottHenry@jourrapide.com</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          3632 Snyder Avenue Bessemer City, NC 28016
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.1
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $7,523
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          06 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
<div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-4.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Cody Menendez </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">701-832-5838</p>
                            <p class="mb-0">CodyMenendez@armyspy.com</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          4401 Findley Avenue Minot, ND 58701
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.0
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $6,325
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          05 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                          <div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-5.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Jason Merino </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">706-219-4095</p>
                            <p class="mb-0">JasonMerino@dayrep.com</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          3159 Holly Street Cleveland, GA 30528
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.2
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $4,523
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          04 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                       <div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-6.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> Kyle Aquino </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">415-232-5443</p>
                            <p class="mb-0">KyleAquino@teleworm.us</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          4861 Delaware Avenue San Francisco, CA 94143
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.1
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $5,412
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          03 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                           <div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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
                        <td data-column-id="username" class="gridjs-td">
                          <span>
                            <img
                              src="@/assets/images/users/avatar-7.jpg"
                              alt=""
                              class="avatar-sm rounded-circle me-2"
                            />
                            <a to="#" class="text-body"> David Gaul </a>
                          </span>
                        </td>
                        <td data-column-id="phone/Email" class="gridjs-td">
                          <span>
                            <p class="mb-1">314-483-4679</p>
                            <p class="mb-0">DavidGaul@teleworm.us</p>
                          </span>
                        </td>
                        <td data-column-id="address" class="gridjs-td">
                          1207 Cottrill Lane Stlouis, MO 63101
                        </td>
                        <td data-column-id="rating" class="gridjs-td">
                          <span>
                            <span class="badge bg-success font-size-12">
                              <i class="mdi mdi-star me-1"></i>4.4
                            </span>
                          </span>
                        </td>
                        <td data-column-id="walletBalance" class="gridjs-td">
                          $5,412
                        </td>
                        <td data-column-id="joiningDate" class="gridjs-td">
                          02 Oct, 2021
                        </td>
                        <td data-column-id="action" class="gridjs-td">
                          <span>
                           <div class="dropdown">
    <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal font-size-18"></i></a>
<ul class="dropdown-menu dropdown-menu-end" style=""><li><a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li><li><a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li></ul>
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