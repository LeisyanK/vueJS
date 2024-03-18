<template>
  <h2>Seminar 6</h2>
  <BookListComponent/>
  <MovieListComponent/>

  <h2>Seminar 7</h2>
  <CounterComponent />
</template>

<script>
import BookListComponent from './components/BookListComponent.vue';
import MovieListComponent from './components/MovieListComponent.vue';
import CounterComponent from './components/CounterComponent.vue';

export default {
  name: 'App',
  components: {
    BookListComponent, MovieListComponent,
    CounterComponent,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
