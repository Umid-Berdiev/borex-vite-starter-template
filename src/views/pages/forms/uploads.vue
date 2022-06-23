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
  <Layout :pagetitle="'Form Uploads'">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Dropzone</h4>
          </div>
          <div class="card-body">
            <p class="card-title-desc">
              DropzoneJS is an open source library that provides drag’n’drop
              file uploads with image previews.
            </p>
            <div>
              <form action="#" class="dropzone">
                <div class="fallback">
                  <input name="file" type="file" multiple="multiple" />
                </div>
                <div class="dz-message needsclick">
                  <div class="mb-3">
                    <i class="display-4 text-muted bx bx-cloud-upload"></i>
                  </div>

                  <h5>Drop files here or click to upload.</h5>
                </div>
              </form>
            </div>

            <div class="text-center mt-4">
              <button
                type="button"
                class="btn btn-primary waves-effect waves-light"
              >
                Send Files
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>