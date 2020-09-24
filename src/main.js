import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import Vue from 'vue';
import App from './App.vue';

import router from './router';
import {store} from './store';
import {mixinRouter} from './mixins/router';


Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.mixin(mixinRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


