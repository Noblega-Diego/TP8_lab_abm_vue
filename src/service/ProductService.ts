import { Product } from './Product.model';

export const ProductService = {

    protocol : window.location.protocol,
    host : "localhost:8080",

    async getAll() {
        const products:Product[] = await (await fetch(`${this.protocol}//${this.host}/instrumentos`)).json()
        return [...products];
    },

    async getById(idProduct:number) {
        const product:Product = await (await fetch(`${this.protocol}//${this.host}/instrumentos/${idProduct}`)).json()
        return product;
    },

    async save(product:Product){
        let url = `${this.protocol}//${this.host}/instrumentos`;
        let method = `POST`
        if(product.id !== 0){
            url += `/${product.id}`;
            method = 'PUT';
        }
        await fetch(url,
            {
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product),
                method
            })
    },

    async delete(id:number){
        const url = `${this.protocol}//${this.host}/instrumentos/${id}`;
        const method = `DELETE`
        await fetch(url,{method})
    }
}