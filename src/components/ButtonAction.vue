<template>
  <div class="max-w-min px-4 py-2 rounded bg-green-600 text-white hover:bg-green-900 hover:text-white">
    <slot></slot></div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "ButtonAction",
  props:{
  },
})
</script>