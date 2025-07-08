import { defineComponent, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const getTime = () =>
      new Date().toLocaleTimeString(navigator.language, {
        timeStyle: 'medium',
      })

    const time = ref(getTime())

    let intervalId = setInterval(() => {
      time.value = getTime()
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(intervalId)
    })

    return {
      time,
    }
  },

  template: `
      <div class="clock">{{ time }}</div>`,
})
