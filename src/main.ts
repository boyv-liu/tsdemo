import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Category from './model/category'
import ItemData from './model/itemData'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const item1 = new ItemData(1, Category.study, 'test', '哈哈哈')
console.log(item1)
