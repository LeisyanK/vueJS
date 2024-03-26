<template>
    <div>
        <button @click="upCounter">Значение счетчика равно {{ counter }}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,     // 2
            }
        },
        methods: {
            upCounter() {
                this.counter++
            }
        },
        beforeCreate() {        // 1
            this.counter = 1;
        },
        create() {
            this.counter = 1;   // 3
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },
        updated() {
            console.log('updated');
        },
    }
</script>

<style scoped>

</style>