<template>
  <div class="flex justify-center items-center mt-2">
    <img src="@/assets/editar.svg">
    <h1>Administrar Producto</h1>
  </div>
  <div class="flex items-center justify-center w-full">
  <FormProduct :id-product="Number($route.params.idProduct)" class="m-2"></FormProduct>
  </div>
</template>

<script>
import FormProduct from "@/components/FormProduct";
export default {
  name: "FormViewProduct",
  components: {FormProduct}
}
</script>

<style scoped>

</style>