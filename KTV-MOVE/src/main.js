import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.imgURL = 'http://localhost:3000'

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 8000
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
})

// 拦截器
Axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  console.log(err)
})

// 响应拦截器
Axios.interceptors.response.use(function (res) {
  return res.data
}, function (err) {
  console.log(err)
})
// 给VUE原型添加axios方法
Vue.prototype.$http = Axios
Vue.prototype.hub = new Vue()

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$layer = layer(Vue)

// router.beforeEach((to, from, next) => {
//   console.log(to.name, from.name)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
