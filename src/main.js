import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import vueHeadful from 'vue-headful';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  vueHeadful,
  render: h => h(App)
}).$mount('#app');
