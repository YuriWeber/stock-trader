import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        stocks: [
            { name: "Google", price: 120, id: 1 },
            { name: "Apple", price: 320, id: 2 },
            { name: "Facebook", price: 90, id: 3 },
            { name: "Twitter", price: 620, id: 4 },
            { name: "Amazon", price: 240, id: 5 },
        ],
        myStocks: [],
        balance: 10000.00
    },
    getters: {
        myStocks(state) {
            /**
             * retorna o myStock com dois valores extras (name e price)
             */
            return state.myStocks.map(myStock => {
                const stock = state.stocks.find(stock => stock.id === myStock.from)
                return { ...myStock, name: stock.name, price: stock.price }
            })
        },
        balance(state) {
            return state.balance
        },
        stocks(state) {
            return state.stocks
        }

    },
    mutations: {
        updateMyStocksValue(state, payload) {
            /**
             * adiciona e remove o número das ações do myStocks
             * caso a ação não exista ainda ele adiciona a ação
             * sinal negativo para a inversão do sinal e a função funiconar tanto para adição quanto subtração
             */
            const myStock = state.myStocks.find(stock => stock.from === payload.id)
            if (myStock) {
                myStock.qty -= payload.qty
            } else {
                state.myStocks.push({ from: payload.id, qty: -payload.qty })
            }
        },
        updateBalance(state, payload) {
            state.balance = payload
        },
        updateStocks(state, payload) {
            state.stocks = payload
        },
        updateMyStocks(state, payload) {
            state.myStocks = payload
        }
    },
    actions: {
        buySellStock({ commit }, payload) {
            /**
             * contra a compra e venda das ações
             * válida se a compra é possivel de acordo com o saldo
             * compra e venda é controlada pelo sinal do payload.qty
             */
            const totalPrice = this.state.stocks.find(stock => stock.id === payload.id).price * payload.qty
            if (totalPrice + this.state.balance >= 0) {
                commit('updateMyStocksValue', payload)
                commit('updateBalance', totalPrice+this.state.balance)
            }
        },
        changeValues({ commit }) {
            /**
             * para cada ação irá gerar um valor
             * positivo ou negativo para ser adicionado
             */
            const newStocks = this.state.stocks.map(stock => {
                const change = (Math.floor(Math.random()*21) -10)
                const newPrice = (stock.price + change) > 0 ? stock.price + change : 0
                return {...stock, price: newPrice}
            })
            commit('updateStocks', newStocks)
        }
    }
})