// import Vue from 'vue'; // vue2
// import Vuex from 'vuex';
// Vue.use(Vuex);
// export default new Vuex.Store({
//     state: {
//         // начальное состояние
//     },
//     mutations: {
//         // методы для изменения состояния
//     },
//     actions: {
//         // методы для асинхронных операций
//     },
//     getters: {
//         // методы для чтения состояния
//     },
//     modules: {
//         // модули Vuex для разделения хранилища на под-хранилища
//     },
// });

// Vue 3
import { createStore } from "vuex";

export default createStore({
    state: {
        paymentList: [],
    },
    mutations: {
        SET_PAYMENT(state, payments) {  // payments - это моя переменная, которую я передаю в метод
            state.paymentList = payments;
        },
        ADD_PAYMENT(state, payment) {
            state.paymentList.push(payment)
        }
    },
    actions: {
        fetchData({commit}) {
            setTimeout(() => {
                const paymentList = [
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
                commit('SET_PAYMENT', paymentList)
            }, 1000);

        }
    },
    getters: {
        getPayment: (state) => state.paymentList,
        getFullPayment: (state) => {
            return state.paymentList
                .reduce( (a, b) => a + b.value, 0)
        }
    },
    modules: {},
});