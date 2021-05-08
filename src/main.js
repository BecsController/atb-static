import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { VLazyImagePlugin } from 'v-lazy-image';
import i18n from './i18n';
import VueMeta from 'vue-meta';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VLazyImagePlugin);

new Vue({
  router,
  vuetify,
  i18n,
  VueMeta,
  render: h => h(App)
}).$mount('#app');
