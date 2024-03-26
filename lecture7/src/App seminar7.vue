<template>
  <header>
    <nav @click="clickMenu">
      <!-- у лектора эти ссылки работают -->
      <a href="#dashboard" class="menu_link">#Dashboard</a>
      <a href="#about" class="menu_link">#About</a>
      <a href="#notfound" class="menu_link">#NotFound</a>
      <!-- / вместо # перегружает страницу - console очищается -->
      <a href="/dashboard" class="menu_link">/Dashboard</a>
      <a href="/about" class="menu_link">/About</a>
      <a href="/notfound" class="menu_link">/NotFound</a>
    </nav>
  </header>
  <!-- сами страницы -->
  <DashBoard v-if="page === 'dashboard'" />
  <AboutContent v-if="page === 'about'" />
  <NotFound v-if="page === 'notfound'" />


  <!-- <h2>Lecture 7</h2> -->
  <!-- <AddCount />
  <AddCount />
  <AddCount /> -->
  <!-- <PaymentDisplay :items="paymentList" :info="infoText" />
  <AddList @addNewPayment="addNewPayment" /> -->
  <!-- здесь происходит событие addNewPayment -->
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
import AboutContent from './pages/AboutContent.vue';
import DashBoard from './pages/DashBoard.vue';
import NotFound from './pages/NotFound.vue';
// import AddCount from './components/AddCount.vue';
// import PaymentDisplay from './components/PaymentDisplay.vue';
// import AddList from './components/AddList.vue';

export default {
  name: 'App',
  components: {
    AboutContent,
    DashBoard,
    NotFound,
    // AddCount,
    // PaymentDisplay,
    // AddList,
  },
  data() {
    return {
      // paymentList: [], // перенесли в state
      infoText: 'info text',
      page: 'dashboard',
    }
  },
  methods: {
    setPage() {
      // берем адрес с адресной строки и убираем "/"
      this.page = window.location.hash.slice(1); // убираем / впереди
    },
    clickMenu() {
      console.log(window.location.hash);
      this.setPage();
      window.addEventListener('hashchange', function() {
        this.setPage();

      })
    },
    // fetchData() {
    //   return [
    //     {
    //       date: '16.04.2023',
    //       category: 'Food',
    //       value: 167,
    //     },
    //     {
    //       date: '17.04.2023',
    //       category: 'Transport',
    //       value: 320,
    //     },
    //     {
    //       date: '18.04.2023',
    //       category: 'Food',
    //       value: 450,
    //     },
    //   ]
    // },
    addNewPayment(data) {
      // this.paymentList.push(data);
      this.ADD_PAYMENT(data)
    },
    ...mapMutations(['SET_PAYMENT', 'ADD_PAYMENT'])
  },
  mounted(){
    const links = document.querySelectorAll('.menu__link');
    links.forEach(element => {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('mounted');
        history.pushState({}, '', element.href);
      })
    })
  },
  computed: {
    ...mapState(['paymentList']),
    ...mapGetters(['getPayment', 'getFullPayment']),
    ...mapActions(['fetchData'])
  },
  created() {
    // в список платежей записывали значения, полученные с "сервера"
    // this.paymentList = this.fetchData();

    // в список платежей запишем данные, полученные с помощью мутации
    // будет вызываться мутация SET_PAYMENT, которую мы импортировали.
    // в index.js в качестве payments передается массив из action fetchData()
    // в массив paymentList в state запишется полученный массив
    this.SET_PAYMENT(this.fetchData);
  },
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
