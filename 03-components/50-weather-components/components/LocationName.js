import { defineComponent } from 'vue'
import '../WeatherApp.css'

export default defineComponent({
  name: 'LocationName',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  template: `
      <h2 class="weather-card__name">
        {{ name }}
      </h2>
    `,
})
