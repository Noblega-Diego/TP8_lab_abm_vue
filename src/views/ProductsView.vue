<template>
  <div class="text-left">
    <h1 class="mt-4 ml-4 text-4xl">Productos</h1>
    <div class="w-100 h-0.5 bg-gray-900 mx-2"></div>
  </div>
  <section class="auto-grid p-8">
    <ProductCard v-for="producto of productos" :producto="producto" v-bind:key="producto.id"></ProductCard>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import ProductCard from "@/components/ProductCard.vue";
import {ProductService} from "@/service/ProductService";

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductCard
  },
  data(){return{
      productos:[]
  }},
  beforeMount() {
    ProductService.getAll().then((productos)=>{
      this.productos = productos
    }).catch((e)=>{console.log(e)})
  }
});
</script>

<style scoped>
.auto-grid {
  --auto-grid-min-size: 16rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
}
</style>