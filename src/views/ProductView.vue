<script lang="ts">
    import { Product } from "@/service/Product.model";
import { ProductService } from "@/service/ProductService";
    import { defineComponent } from "vue";
    declare interface BaseComponentData {
        product:Product|null
    }
    
    export default defineComponent({
        name:"ProductView",
        data():BaseComponentData{
                return {
                    product:null
                }
            },
        beforeMount(){
            const idParam = String(this.$route.params.id);
            ProductService.getById(Number.parseInt(idParam))
                .then((product)=>{
                  console.log(product)
                    this.product = product;
                })
        }
    })
</script>

<template>
    <div class="flex m-4 flex-wrap">
        <div class="w-3/6 flex-grow">
            <img class="image" v-bind:src="product?.imagen"/>
            <div class="mt-4 p-4 bg-white text-left">
                <p class="">{{product?.descripcion}}</p>
            </div>
        </div>
        <div class="p-4 bg-white w-96 flex-grow">
            <div class="text-left">
                <span class="sub-title">{{product?.cantidadVendida}} vendidios</span>
                <h1 class="text-3xl">{{product?.instrumento}}</h1>
                <div class="w-100 h-0.5 bg-gray-800"></div>
            </div>
            <div>
              <p class="pr-2 bg-gray-100 max-w-max rounded-md overflow-hidden m-2"><span class="mr-2 px-2 py-1 inline-block h-100 min-h-full bg-gray-200 font-bold">Marca:</span>{{product?.marca}}</p>
              <p class="pr-2 bg-gray-100 max-w-max rounded-md overflow-hidden m-2"><span class="mr-2 px-2 py-1 inline-block h-100 min-h-full bg-gray-200 font-bold">Modelo:</span>{{product?.modelo}}</p>
            </div>
        </div>
    </div>
</template>
