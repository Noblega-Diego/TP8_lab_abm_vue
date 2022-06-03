<template>
  <form class="p-4 flex flex-wrap border-2 border-gray-500 rounded-xl">
    <div class="flex flex-col m-4  items-center flex-grow">
      <div class=" w-full flex flex-col items-start">
        <label ref="in_denominacion">Denominacion</label>
        <input type="text" id="in_denominacion"
               class="w-40 p-1 border-b-2 border-gray-700 text-gray-500"
               v-bind:value="denominacion" v-on:change="handleDenominacionChange($event)">
      </div>
      <div class=" w-full flex flex-col items-start">
        <label ref="in_marca">Marca</label>
        <input type="text" id="in_marca"
               class="w-40 p-1 border-b-2 border-gray-700 text-gray-500"
               :value="marca" @change="handleMarcaChange($event)">
      </div>
      <div class=" w-full flex flex-col items-start">
        <label ref="in_modelo">Modelo</label>
        <input type="text" id="in_modelo"
               class="w-40 p-1 border-b-2 border-gray-700 text-gray-500"
               :value="modelo" @change="handleModeloChange($event)">
      </div>
      <div class=" w-full flex flex-col items-start">
        <label ref="in_precio">Precio</label>
        <input type="number" id="in_precio"
               class="w-20 p-1 border-b-2 border-gray-700 text-gray-500"
               :value="precio" @change="handlePrecioChange($event)">
      </div>
      <div class=" w-full flex flex-col items-start">
        <label ref="in_cantidadVendida">Cantidad vendida</label>
        <input type="text" id="in_cantidadVendida"
               class="w-20 p-1 border-b-2 border-gray-700 text-gray-500"
               :value="cantidadVendida" @change="handleCantidadVendidaChange($event)">
      </div>
      <div class=" w-full flex flex-col items-start">
        <label ref="in_costoEnvio">Costo envio</label>
        <input type="text" id="in_costoEnvio"
               class="w-20 p-1 border-b-2 border-gray-700 text-gray-500"
               :value="costoEnvio" @change="handleCostoEnvioChange($event)">
      </div>
    </div>
    <div class="flex flex-col m-4  items-center flex-grow">
      <div class=" w-full flex flex-col items-start w-40">
        <label ref="in_imagen">Imagen</label>
        <input type="text" id="in_imagen"
               class="w-full p-1 border-b-2 border-gray-700 text-gray-500"
               :value="imagen" @change="handleImagenChange($event)">
        <div>
          <img class="w-40" :src="imagen">
        </div>
      </div>
      <div class=" w-full flex flex-col items-start">
        <label ref="in_descripcion">Descripcion</label>
        <textarea id="in_descripcion"
               class=" w-40 p-1 border-b-2 border-gray-700 text-gray-500"
               :value="descripcion" @change="handleDescripcionChange($event)"/>
      </div>
    </div>
    <div class="m-2 w-full">
      <ButtonAction @click="handleClick">Enviar</ButtonAction>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ProductService} from "@/service/ProductService";
import ButtonAction from "@/components/ButtonAction.vue";

export default defineComponent({
  name: "FormProduct",
  components: {ButtonAction},

  data:()=>{return {
    id:0,
    denominacion:"",
    marca:"",
    modelo:"",
    precio:0,
    imagen:"",
    costoEnvio:0,
    cantidadVendida:0,
    descripcion:""
  }},
  props:{
    idProduct:Number
  },
  beforeMount() {
    ProductService.getById(this.idProduct!).then((product)=>{
      this.id = product.id;
      this.denominacion = product.instrumento;
      this.precio = product.precio;
      this.marca = product.marca;
      this.modelo = product.modelo;
      this.imagen = product.imagen;
      this.costoEnvio = Number(product.costoEnvio);
      this.cantidadVendida = product.cantidadVendida;
      this.descripcion = product.descripcion
    })
  },
  methods:{
    handleDenominacionChange(e:any){
      this.denominacion = e.target.value;
    },
    handleMarcaChange(e:any){
      this.marca = e.target.value;
    },
    handleModeloChange(e:any){
      this.modelo = e.target.value;
    },
    handleImagenChange(e:any){
      this.imagen = e.target.value;
    },
    handlePrecioChange(e:any){
      this.precio = e.target.value;
    },
    handleCostoEnvioChange(e:any){
      this.costoEnvio = e.target.value;
    },
    handleCantidadVendidaChange(e:any){
      this.cantidadVendida = e.target.value;
    },
    handleDescripcionChange(e:any){
      this.descripcion = e.target.value;
    },
    handleClick(e:any){
        ProductService.save({
          id: this.id,
          cantidadVendida: this.cantidadVendida,
          costoEnvio: String(this.costoEnvio),
          descripcion: this.descripcion,
          imagen: this.imagen,
          instrumento: this.denominacion,
          marca: this.marca,
          modelo: this.modelo,
          precio: this.precio
        })
      e.preventDefault();
    }
  }
})
</script>

<style scoped>

</style>