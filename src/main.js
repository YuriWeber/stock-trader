import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/axios'
import './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('real', (value) => {
	return `R$ ${parseFloat(value).toFixed(2)}`.replace('.', ',')
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
