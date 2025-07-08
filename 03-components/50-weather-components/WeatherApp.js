import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherAlert from './components/WeatherAlert.js'
import LocationCurrentTime from './components/LocationCurrentTime.js'
import LocationName from './components/LocationName.js'
import WeatherConditions from './components/WeatherConditions.js'

export default defineComponent({
  name: 'WeatherApp',
  components: {
    WeatherAlert,
    LocationCurrentTime,
    LocationName,
    WeatherConditions,
  },

  setup() {
    const locations = getWeatherData()

    function timeToMilliseconds(timeStr) {
      const [hours, minutes] = timeStr.split(':').map(Number)
      return (hours * 60 + minutes) * 60 * 1000
    }

    return {
      locations,
      WeatherConditionIcons,
      timeToMilliseconds,
    }
  },

  template: `
      <div>
        <h1 class="title">Погода в Средиземье</h1>

        <ul class="weather-list unstyled-list">
          <li
              v-for="location in locations"
              class="weather-card"
              :key="location.current.weather.id"
              :class="{
            'weather-card--night':
              timeToMilliseconds(location.current.dt) > timeToMilliseconds(location.current.sunset) ||
              timeToMilliseconds(location.current.dt) < timeToMilliseconds(location.current.sunrise)
          }">
            <WeatherAlert v-if="location.alert"
                          :name="location.alert.sender_name"
                          :description="location.alert.description"/>

            <div>
              <LocationName :name="location.geographic_name"/>
              <LocationCurrentTime :locationDt="location.current.dt"/>
            </div>
            <WeatherConditions :current-temperature="location.current.temp"
                               :weather-condition-id="location.current.weather.id"
                               :weather-description="location.current.weather.description"/>
            <div class="weather-details">
              <div class="weather-details__item">
                <div class="weather-details__item-label">Давление, мм рт. ст.</div>
                <div class="weather-details__item-value">{{ (location.current.pressure * 0.75).toFixed(0) }}</div>
              </div>
              <div class="weather-details__item">
                <div class="weather-details__item-label">Влажность, %</div>
                <div class="weather-details__item-value">{{ location.current.humidity }}</div>
              </div>
              <div class="weather-details__item">
                <div class="weather-details__item-label">Облачность, %</div>
                <div class="weather-details__item-value">{{ location.current.clouds }}</div>
              </div>
              <div class="weather-details__item">
                <div class="weather-details__item-label">Ветер, м/с</div>
                <div class="weather-details__item-value">{{ location.current.wind_speed }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    `,
})
