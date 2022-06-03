<template>
  <div>
  <ButtonAction @click="handleAddProductEvent">Agregaar +</ButtonAction>
  </div>
  <table class="table-fixed">
    <thead>
    <tr>
      <th class="w-1/12">Imagen</th>
      <th class="w-1/4">Denominacion</th>
      <th class="w-1/4">Descripcion</th>
      <th class="w-1/4">Precio</th>
      <th class="w-1/4">Marca</th>
      <th class="w-1/4">Modelo</th>
      <th class="w-1/4"></th>
      <th class="w-1/4"></th>
    </tr>
    </thead>
    <tbody>
      <RowProduct v-for="product in products" :product="product" v-bind:key="product.id"
      @edit="handleEditEvent" @delete="handleDeleteEvent"></RowProduct>
    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RowProduct from "@/components/RowProduct.vue";
import {ProductService} from "@/service/ProductService";
import { Product } from "@/service/Product.model";
import ButtonAction from "@/components/ButtonAction.vue";

export default defineComponent({
  name: "GestionarProducts",
  components: {ButtonAction, RowProduct},
  data:()=>{return{
    products:Array<Product>()
  }},
  methods:{
    handleEditEvent(id:number){
      this.$router.push("/formproduct/"+id)
    },
    async handleDeleteEvent(id:number){
      await ProductService.delete(id);
      this.products = await ProductService.getAll();
    },
    handleAddProductEvent(){
      this.$router.push("/formproduct/"+0);
    }
  },
  beforeMount() {
    ProductService.getAll()
    .then((productos)=>{this.products = productos})
  }
})
</script>