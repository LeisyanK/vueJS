<!-- seminar7 -->
<template>
    <div>
        <h1>Задача 1. Счетчик</h1>
        <p>{{ counter }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="componentMethod">+2</button>
    </div>
    <hr>
    <h2>Задача 2. Корзина</h2>
    <ul>
        <li v-for="item in cartItems" :key="item.id">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <p>Количество товаров в корзине: {{ totalItems }}</p>
    <p>Общая стоимость: {{ totalPrice }}</p>
    <button @click="addItemToCart({ id: 1, name: 'Товар', price: 10 })">Добавить в корзину</button>

    <hr>
    <h2>Задача 3. Данные с сервера</h2>
    <ul>
        <li v-for="item in data" :key="item.id">{{ item }}</li>
    </ul>
    <button @click="fetchData">Загрузить данные</button>

</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapState(['counter', 'data']),
            ...mapGetters(['cartItems', 'totalItems', 'totalPrice'])
        },
        methods: {
            ...mapMutations(['increment', 'decrement']),
            ...mapActions(['addItemToCart', 'fetchData']),

            // моё
            componentMethod() {
                this.counter += 2; // computed property "counter" is readonly.
            },
        },
    }
</script>

<style scoped>

</style>