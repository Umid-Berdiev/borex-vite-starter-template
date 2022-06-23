<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";

/**
 * Notification component
 */
export default {
  page: {
    title: "Notification",
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
      title: "Notifications",
      items: [
        {
          text: "UI Elements",
          href: "/",
        },
        {
          text: "Notifications",
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
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Toast Notifications</h4>
                </div>
                <div class="card-body">
                    <p class="card-title-desc">Toasts are lightweight notifications designed to mimic the push notifications</p>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="p-2">
                                <h5 class="font-size-14">Basic</h5>
                                <p class="card-title-desc mb-3">
                                    Toasts are as flexible as you need and have very little required markup.
                                    At a minimum, we require a single element to contain your
                                    “toasted” content and strongly encourage a dismiss button.
                                </p>
                                <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                    <div class="toast-header">
                                        <img src="@/assets/images/logo-dark-sm.png" alt="" class="me-2" height="18">
                                        <strong class="me-auto">Borex</strong>
                                        <small class="text-muted">11 mins ago</small>
                                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        Hello, world! This is a toast message.
                                    </div>
                                </div>
                                <!--end toast-->                                                    
                            </div>
                            <!--end card-->
                        </div>
                        <!--end col-->

                        <div class="col-lg-6">
                            <div class="p-2">
                                <h5 class="font-size-14">Translucent</h5>
                                <p class="card-title-desc mb-3">
                                    Toasts are slightly translucent, too, so they blend over
                                    whatever they might appear over. For browsers that
                                    support the <code>backdrop-filter</code> CSS property,
                                    we’ll also attempt to blur the elements under a toast.
                                </p>
                                <div class="bg-soft-light p-3">
                                    <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                        <div class="toast-header">
                                            <img src="@/assets/images/logo-dark-sm.png" alt="" class="me-2" height="18">
                                            <strong class="me-auto">Borex</strong>
                                            <small class="text-muted">11 mins ago</small>
                                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                        </div>
                                        <div class="toast-body">
                                            Hello, world! This is a toast message.
                                        </div>
                                    </div>
                                    <!--end toast-->
                                </div>
                                <!--end /div-->
                            </div>
                            <!--end card-->
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="p-2 mt-4">
                                <h5 class="font-size-14">Stacking</h5>
                                <p class="card-title-desc mb-3">
                                    For systems that generate more notifications, consider using a wrapping element
                                    so they can easily stack.
                                </p>
                                <div class="bg-soft-light">
                                    <div aria-live="polite" aria-atomic="true" class="position-relative" style="min-height: 230px;">
                                        <!-- Position it: -->
                                        <!-- - `.toast-container` for spacing between toasts -->
                                        <!-- - `.position-absolute`, `top-0` & `end-0` to position the toasts in the upper right corner -->
                                        <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  -->
                                        <div class="toast-container position-absolute top-0 end-0 p-2 p-lg-3">
                                    
                                            <!-- Then put toasts within -->
                                            <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img src="@/assets/images/logo-dark-sm.png" alt="" class="me-2" height="18">
                                                    <strong class="me-auto">Borex</strong>
                                                    <small class="text-muted">just now</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">
                                                    See? Just like this.
                                                </div>
                                            </div>
                                    
                                            <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img src="@/assets/images/logo-dark-sm.png" alt="" class="me-2" height="18">
                                                    <strong class="me-auto">Borex</strong>
                                                    <small class="text-muted">2 sec ago</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">
                                                    Heads up, toasts will stack automatically
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <!--end /div-->
                            </div>
                            <!--end card-->
                        </div>
                        <!--end col-->

                        <div class="col-lg-6">
                            <div class="p-2 mt-4">
                                <h5 class="font-size-14">Placement</h5>
                                <p class="card-title-desc mb-3">
                                    You can also get fancy with flexbox utilities to align toasts horizontally
                                    and/or vertically.
                                </p>
                                <div class="bg-soft-light p-2 p-lg-3">
                                    <!-- Flexbox container for aligning the toasts -->
                                    <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100" style="min-height: 200px;">
                                
                                        <!-- Then put toasts within -->
                                        <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                            <div class="toast-header">
                                                <img src="@/assets/images/logo-dark-sm.png" alt="" class="me-2" height="18">
                                                <strong class="me-auto">Borex</strong>
                                                <small>9 min ago</small>
                                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div class="toast-body">
                                                Hello, world! This is a toast message.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--end div-->
                            </div>
                            <!--end card-->
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->
                </div>
            </div>
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
