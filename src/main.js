import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false;

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

new Vue({
  router,
  vuetify,
  i18n,
  vueHeadful,
  render: h => h(App)
}).$mount('#app');
