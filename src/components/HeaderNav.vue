<template>
  <div class="box-content w-100 bg-green-500 flex flex-wrap">
    <nav class="flex flex-wrap">
      <ButtonRef to="/" class="m-2">Home</ButtonRef>
      <ButtonRef to="/products" class="m-2">Productos</ButtonRef>
      <ButtonRef to="/gestionarproducts"  class="m-2">Gestionar Productos</ButtonRef>
    </nav>
  </div>
</template>

<script>
import ButtonRef from "@/components/ButtonRef";

export default {
  name: "HeaderNav",
  components: {
    ButtonRef
  },

}
</script>

<style scoped>

</style>