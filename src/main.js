import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icons from './components/icons'
import Player from './components/Player'
import BackButton from './components/BackButton'
import titlePlugin from './plugins/title.plugin'

const app = createApp(App)

Icons.forEach(icon => app.component(icon.name, icon))

app.component('back-button', BackButton)
app.component('Player', Player)

app
  .use(titlePlugin)
  .use(store)
  .use(router)
  .mount('#app')