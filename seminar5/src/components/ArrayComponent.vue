<template>
    <h2>Перекидываем массив</h2>
    <div v-for="item in arr" :key="item.id">
        <p>{{ item.name }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            arr: Array
        }
    }
</script>

<style scoped>

</style>