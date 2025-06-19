import { createApp, defineComponent } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    const dateNow = () => {
      return `${new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })}`
    }
    return {
      dateNow,
    }
  },

  template: `
    <div class="container">Сегодня <time :datetime="dateNow()"> {{dateNow()}} </time></div>
  `,
})

const app = createApp(App)

const vm = app.mount('#app')

window.vm = vm
