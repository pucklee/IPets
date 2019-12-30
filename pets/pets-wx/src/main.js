import Vue from 'vue'
import App from './App'
import store from './store'  
import {
	uniList,
	uniListItem
} from "@dcloudio/uni-ui"
Vue.component('uni-list',uniList)
Vue.component('uni-list-item',uniListItem)

Vue.prototype.$store = store 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
