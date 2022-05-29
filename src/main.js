import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
// var echarts = require('echarts')
// Vue.prototype.$echart = echarts 

new Vue({
  render: h => h(App),
}).$mount('#app')

