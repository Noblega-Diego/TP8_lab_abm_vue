<template>
  <div class="box-content bg-white min-w-max max-w-2xl flex flex-col rounded-md overflow-hidden hover:shadow-md min-w-min">
    <div class="box-content h-40">
      <img @click="redirect" :src="producto.imagen" class="object-cover h-full w-full">
    </div>
    <div class="box-content h-40 text-left p-4 flex flex-col justify-between">
      <div>
        <div>
          <span class="text-xl font-bold">
            {{producto.instrumento}}
          </span>
        </div>
        <div>
          <span class="text-sm">{{producto.descripcion}}</span>
        </div>
      </div>
      <div class="flex justify-end items-center ">
        <span class="text-2xl text-gray-600 min-w-max">$ {{producto.precio}}</span>
        <ButtonAction class="ml-2">Comprar</ButtonAction>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonAction from "@/components/ButtonAction.vue";
import { Product } from "@/service/Product.model";
import { PropType } from 'vue'
export default defineComponent( {
  name: "ProductCard",
  components: {ButtonAction},
  props: {
    producto:{
      type: Object as PropType<Product>,
      required: true
    }
  },
  methods:{
    redirect(){
      this.$router.push('/product/'+this.producto.id)
    }
  }
})
</script>

<style scoped>

</style>