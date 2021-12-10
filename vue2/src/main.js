import Vue from 'vue'
import App from './App.vue'
//import Autocomplete from '@trevoreyre/autocomplete-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false
Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyA2F5ynkidXoAPfdkyLHb6Fg6-BdrS3w_g',
    libraries:'places',
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')

