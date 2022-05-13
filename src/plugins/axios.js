import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://udemy-vue-70db2-default-rtdb.firebaseio.com/'
        })
    }
})