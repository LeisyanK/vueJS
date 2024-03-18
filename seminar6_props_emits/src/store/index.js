import { createStore } from "vuex";

export default createStore({
    state: {
        counter: 0,
        cart: [],
        data: [],
    },
    getters: {
        cartItems(state) {
            return state.cart;
        },
        totalItems(state) {
            return state.cart.length;
        },
        totalPrice(state) {
            return state.cart.reduce( (sum, item) => sum + item.price, 0);
        }
    },
    // mutations не работает с асинхроном
    mutations: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--
        },
        ADD_ITEM_TO_CART(state, item) {
            state.cart.push(item);
        },
        SET_DATA(state, data) {
            state.data = data;
        }
    },
    // actions работает с асинхроном
    actions: {
        addItemToCart(context, item) {
            context.commit('ADD_ITEM_TO_CART', item);
        // addItemToCart({ commit }, item) {
        //     commit('ADD_ITEM_TO_CART', item);
            // commit вызывает мутацию
            // item - это данные, которые прилетают из компонента
            // dispatch вызывает другую action в ходе выполнения текущей
        },
        fetchData( {commit}) {
            setTimeout(() => {
                const dataFromServer = ["Data1", "Data2", "Data3"];
                commit('SET_DATA', dataFromServer);
            }, 3000);
        }
    },
    modules: {}
}) 