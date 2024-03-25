<template>
    <MovieComponent v-for="movie in movies" :key="movie.id" :film="movie"/>
    <AddMovie @add-film="addFilm"/>
</template>

<script>
import MovieComponent from './MovieComponent.vue';
import AddMovie from './AddMovie.vue';

    export default {
        components: {
            MovieComponent,
            AddMovie,
        },
        data() {
            return {
                movies: [
                    { id: 1, title: "Film1", year: 2019 },
                    { id: 2, title: "Film2", year: 2018 },
                    { id: 3, title: "Film3", year: 2013 },
                ],
            }
        },
        methods: {
            addFilm(film) {
                this.movies.push(film);
            }
        }
    }
</script>

<style scoped>

</style>