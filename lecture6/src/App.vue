<template>
  <AddCount />
  <AddCount />
  <AddCount />
  <PaymentDisplay :items="paymentList" :info="infoText" />
  <AddList @addNewPayment="addNewPayment" />
  <!-- здесь происходит событие addNewPayment -->
</template>

<script>
import AddCount from './components/AddCount.vue';
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddList from './components/AddList.vue';

export default {
  name: 'App',
  components: {
    AddCount,
    PaymentDisplay,
    AddList,
  },
  data() {
    return {
      paymentList: [],
      infoText: 'info text',
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: '16.04.2023',
          category: 'Food',
          value: 167,
        },
        {
          date: '17.04.2023',
          category: 'Transport',
          value: 320,
        },
        {
          date: '18.04.2023',
          category: 'Food',
          value: 450,
        },
      ]
    },
    addNewPayment(data) {
      this.paymentList.push(data);
    }
  },
  created() {
    this.paymentList = this.fetchData();
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
</style>
