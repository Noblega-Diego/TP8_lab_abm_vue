<template>
  <tr>
    <td><img :src="product.imagen" class="object-cover max-h-12"></td>
    <td>{{product.instrumento}}</td>
    <td>{{product.descripcion}}</td>
    <td>{{product.precio}}</td>
    <td>{{product.marca}}</td>
    <td>{{product.modelo}}</td>
    <td><ButtonAction @click="handleDeleteClick">Eliminar</ButtonAction></td>
    <td><ButtonAction class="bg-red-100" @click="handleEditClick">Editar</ButtonAction></td>
  </tr>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Product} from "@/service/Product.model";
import ButtonAction from "@/components/ButtonAction.vue";

export default defineComponent({
  name: "RowProduct",
  components: {ButtonAction},
  props:{
    product:{
      type:Object as PropType<Product>,
      required:true
    }
  },
  methods:{
    handleEditClick(){
      this.$emit('edit', this.product.id)
    },
    handleDeleteClick(){
      this.$emit('delete', this.product.id)
    }
  }
})
</script>

<style scoped>

</style>