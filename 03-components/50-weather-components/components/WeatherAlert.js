import { defineComponent } from 'vue'
import '../WeatherApp.css'

export default defineComponent({
  name: 'WeatherAlert',
  props: {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },

  template: `
      <div class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{ name }}: {{ description }}</span>
      </div>
    `,
})
