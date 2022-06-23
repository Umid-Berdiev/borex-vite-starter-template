<script>
/**
 * Page-header compponent
 */
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => {
        return []
      },
      required: true,
    },
  },
}
</script>

<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box d-flex align-items-center justify-content-between">
        <h4 class="mb-0 font-size-18">{{ title }}</h4>

        <div class="page-title-right">
          <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
