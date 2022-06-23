<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";

/**
 * Video component
 */
export default {
  page: {
    title: "Video",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      title: "Video",
      items: [
        {
          text: "UI Elements",
          href: "/",
        },
        {
          text: "Video",
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
            <h4 class="card-title">Responsive embed video 16:9</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Aspect ratios can be customized with modifier classes.
            </p>

            <!-- 16:9 aspect ratio -->
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Responsive embed video 21:9</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Aspect ratios can be customized with modifier classes.
            </p>

            <!-- 21:9 aspect ratio -->
            <div class="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Responsive embed video 4:3</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Aspect ratios can be customized with modifier classes.
            </p>

            <!-- 4:3 aspect ratio -->
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Responsive embed video 1:1</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              Aspect ratios can be customized with modifier classes.
            </p>

            <!-- 1:1 aspect ratio -->
            <div class="ratio ratio-1x1">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>