import { defineComponent } from 'vue'
import '../WeatherApp.css'
import { WeatherConditionIcons } from '../weather.service.js'

export default defineComponent({
  name: 'WeatherConditions',

  props: {
    weatherConditionId: {
      type: String,
      required: true,
    },

    weatherDescription: {
      type: String,
      required: true,
    },

    currentTemperature: {
      type: Number,
      required: true,
    },
  },

  setup() {
    return {
      WeatherConditionIcons,
    }
  },

  template: `
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="weatherDescription">
          {{ WeatherConditionIcons[weatherConditionId] }}
        </div>
        <div class="weather-conditions__temp">{{ (currentTemperature - 273.15).toFixed(1) }} °C</div>
      </div>
    `,
})
