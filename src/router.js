import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Stocks from './views/Stocks.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})