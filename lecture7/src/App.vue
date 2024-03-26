<template>
  <header>
    <nav @click="clickMenu">
      <!-- убрали и добавили router -->
      <!-- <a href="#dashboard" class="menu_link">#Dashboard</a>
      <a href="#about" class="menu_link">#About</a>
      <a href="#notfound" class="menu_link">#NotFound</a> -->

      <!-- / вместо # перегружает страницу - console очищается -->
      <!-- убрали и добавили router -->
      <!-- <a href="/dashboard" class="menu_link">/Dashboard</a>
      <a href="/about" class="menu_link">/About</a>
      <a href="/notfound" class="menu_link">/NotFound</a> -->
      <router-link to="/dashboard">DashBoard</router-link>
      <router-link to="/about-content">About Page</router-link>
      <router-link to="/hello">Hello</router-link>
    </nav>
  </header>
  <router-view></router-view>

</template>

<script>

export default {
  name: 'App',
  components: {
    // AboutContent,
    // DashBoard,
    // NotFound,

  },
  data() {
    return {
      // page: 'dashboard',
    }
  },
  methods: {
    // setPage() {
    //   // берем адрес с адресной строки и убираем "/"
    //   this.page = window.location.hash.slice(1); // убираем / впереди
    // },
    // clickMenu() {
    //   console.log(window.location.hash);
    //   this.setPage();
    //   window.addEventListener('hashchange', function() {
    //     this.setPage();

    //   })
    // },
  },
  mounted(){
    // const links = document.querySelectorAll('.menu__link');
    // links.forEach(element => {
    //   element.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     console.log('mounted');
    //     history.pushState({}, '', element.href);
    //   })
    // })
  },
  created() {
    this.$router.push({ name: 'dashboard' })
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
  gap: 32px;
  padding: 16px;
}
</style>
