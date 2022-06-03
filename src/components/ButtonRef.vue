<template>
  <router-link :to="to" :class="isRoute()?`max-w-max px-4 py-2 rounded bg-white text-green-500 hover:bg-green-900 hover:text-white`:`max-w-max text-white px-4 py-2 rounded ring-1 ring-white hover:bg-white hover:text-green-500`">
    <slot></slot></router-link>
</template>

<script>
export default {
  name: "ButtonRef",
  props:{
    to: String
  },
  methods:{
    isRoute(){
      return (this.$props.to === this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>