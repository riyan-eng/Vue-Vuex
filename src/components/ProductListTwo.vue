<template>
    <h3>Product list 2</h3>
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
export default {
    computed:{
        products(){
            return this.$store.getters.saleProduct
        }
    }
}
</script>

<style scoped>
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-header {
    background-color: yellow;
}
</style>