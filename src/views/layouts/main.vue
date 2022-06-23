<script>
import { layoutComputed } from "@/state/helpers";
import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
  props: {
    pagetitle: {
      type: String,
      required: true,
    },
  },
  components: {
    Vertical,
    Horizontal,
  },
  data() {
    return {};
  },
  computed: {
    ...layoutComputed,
  },
  methods: {},
  mounted() {
  },
};
</script>

<template>
  <div>
    <Vertical :pagetitle="pagetitle" v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </Vertical>

    <Horizontal :pagetitle="pagetitle" v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>
