<template>
    <div>
        <h2>{{ product.name }}</h2>
        <!-- <p>Цена: {{ product.price }}</p> -->
        <p>Цена: {{ formattedPrice }}</p>
        <p v-show="product.available">Available</p>
        <p v-show="!product.available">Out of stock</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product : {
                    name: 'flower',
                    price: 99.99,
                    available: true
                }
            }
        },
        computed: {
            formattedPrice() {
                return '$' + this.product.price;
            }
        },
    }
</script>

<style scoped>

</style>