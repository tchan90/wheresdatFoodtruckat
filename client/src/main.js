import Vue from 'vue'
import App from './App.vue'
import {sync} from 'vuex-router-sync'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "animate.css/animate.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBookmark as fasBookmark, faMapMarkerAlt, faBookOpen, faSearch, faUtensils, faQuestion, faDesktop, faExternalLinkAlt, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import {faBookmark as farBookmark, faClock } from "@fortawesome/free-regular-svg-icons";

sync(store, router)
Vue.config.productionTip = false
library.add( fasBookmark, farBookmark, faMapMarkerAlt, faBookOpen, faClock, faSearch, faUtensils, faQuestion, faDesktop, faExternalLinkAlt, faShoppingBasket), 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
