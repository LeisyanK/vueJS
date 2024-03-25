<template>
  <!-- <h2>Seminar 6</h2>
  <BookListComponent />
  <MovieListComponent />

  <h2>Seminar 7</h2>
  <CounterComponent /> -->

  <h2>Seminar 8</h2>
  <NavComponent />
  <!-- <router-view></router-view> -->
  <RouterView />
</template>

<script>
// import BookListComponent from './components/BookListComponent.vue';
// import MovieListComponent from './components/MovieListComponent.vue';
// import CounterComponent from './components/CounterComponent.vue';
import NavComponent from './components/NavComponent.vue';

export default {
  name: 'App',
  components: {
    // BookListComponent, MovieListComponent,
    // CounterComponent,
    NavComponent
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
nav {
  display: flex;
  justify-content: center;
  gap: 16px;
}
</style>
