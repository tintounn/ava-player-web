import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueNotification from 'vue-notification';
import VueVideoPlayer from 'vue-video-player';

import App from './App.vue';
import router from './router';
import DurationFilter from './filters/DurationFilter';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueNotification);
Vue.use(VueVideoPlayer);

Vue.filter('duration', DurationFilter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
