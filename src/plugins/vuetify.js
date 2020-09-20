import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '../scss/main.scss';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  }
});
