import { defineComponent } from 'vue'
import '../WeatherApp.css'

export default defineComponent({
  name: 'LocationCurrentTime',

  props: {
    locationDt: {
      type: String,
      required: true,
    },
  },

  template: `
      <div class="weather-card__time">
        {{ locationDt }}
      </div>
    `,
})
