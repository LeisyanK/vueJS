<template>
  <ProductDetailsComponent />
  <AuthComponent :isAuth="false" />
  <UserListComponent />
  <MortgageCalculatorComponent />
  <ArrayComponent :arr="arr" />
</template>

<script>
import AuthComponent from './components/AuthComponent.vue';
import UserListComponent from './components/UserListComponent.vue';
import MortgageCalculatorComponent from './components/MortgageCalculatorComponent.vue';
import ArrayComponent from './components/ArrayComponent.vue';
import ProductDetailsComponent from './components/ProductDetailsComponent.vue';

export default {
  name: 'App',
  components: {
    AuthComponent,
    UserListComponent,
    MortgageCalculatorComponent,
    ArrayComponent,
    ProductDetailsComponent
  },
  data() {
    return {
      arr: [
        {
          id: 1,
          name: 'Kate'
        },
        {
          id: 2,
          name: 'Alex'
        },
        {
          id: 3,
          name: 'Bob'
        },
      ]
    }
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
</style>./components/ProductDetailsComponent.vue
