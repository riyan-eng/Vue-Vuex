<template>
    <h3>Product list 1</h3>
    <button @click="onClick(4)">Reduce price</button>
    <div class="content">
        <div v-for="product in products" style="padding: 3px">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    {{ product.name }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Rp{{ product.price }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    methods:{
        onClick(price){
            // this.$store.state.products.forEach(product=>{
            //     product.price -= 1
            // })
            // this.$store.commit('reducePrice')
            this.$store.dispatch('reducePrice', price)
        }
    }
}
</script>

<style scoped>
.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card-header{
    background-color: blue;
}
</style>