import { createApp, defineComponent } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    const formatDate = (date, options) => new Date(date).toLocaleDateString(navigator.language, options)

    const dateNowLocale = () => formatDate(new Date(), { dateStyle: 'long' })

    const dateNowFormatted = () => {
      const now = new Date()
      const yyyyMmDd = now.toISOString().slice(0, 10)
      const hhMm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      return `${yyyyMmDd} ${hhMm}`
    }

    return {
      dateLocal: dateNowLocale(),
      dateFormatted: dateNowFormatted(),
    }
  },

  template: `
    <div class="container">Сегодня <time :datetime="dateFormatted"> {{ dateLocal }} </time></div>
  `,
})

const app = createApp(App)

const vm = app.mount('#app')

window.vm = vm
