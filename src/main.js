import App from './App.vue';
import VueLazyLoad from 'vue3-lazyload'
import router from './router';
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n/index'
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import { createMetaManager } from 'vue-meta'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

function loadLocaleMessages() {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const vuetify = createVuetify({
  components,
  directives,
})

const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(VueLazyLoad, {
  loading: "",
  error: "",
  lifecycle: {
    loading: (el) => {
      console.log('loading', el)
    },
    error: (el) => {
      console.log('error', el)
    },
    loaded: (el) => {
      console.log('loaded', el)
    }
  }
})
app.use(i18n)
app.use(createMetaManager())

await router.isReady()
app.mount('#app')