<template>
    <div>
        <h2>Добавить новый фильм</h2>
        <input type="text" placeholder="Название" v-model="title">
        <input type="text" placeholder="год" v-model="year">
        <button @click="addMovie">Добавить</button>
    </div>
</template>

<script>
    export default {
        emits: [
            'add-film'
        ],
        data() {
            return {
                title: '',
                year: null,
            }
        },
        methods: {
            addMovie() {
                const newFilm = {
                    id: Date.now(),
                    title: this.title,
                    year: this.year,
                };
                this.$emit('add-film', newFilm);
                this.title = '';
                this.year = null;
            }
        }
        
    }
</script>

<style scoped>

</style>