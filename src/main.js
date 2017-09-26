import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from '~/vuex/store'
import router from '~/router'
import i18n from '~/assets/translations'
import UiView from '~/views/UiView'
import './App.scss'

// sync store and router state
sync(store, router)

const App = {
  name: 'app',
  store,
  render (h) {
    return (
      <div id='app'>
        <UiView>
          <router-view />
        </UiView>
      </div>
    )
  }
}

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
