import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',
  setup() {
    const meetupId = ref(1)
    const meetup = ref(null)

    const fetchMeetup = async () => {
      try {
        meetup.value = await getMeetup(meetupId.value)
      } catch (error) {
        console.error('Failed to fetch meetup:', error)
        meetup.value = null
      }
    }

    const handleClick = delta => {
      meetupId.value += delta
      fetchMeetup()
    }

    onBeforeMount(fetchMeetup)

    const meetupTitle = computed(() => meetup.value?.title ?? '')

    return {
      meetupId,
      meetupTitle,
      handleClick,
    }
  },

  template: `
            <div class="meetup-selector">
              <div class="meetup-selector__control">
                <button class="button button--secondary" type="button" :disabled="meetupId <= 1" @click="handleClick(-1)">Предыдущий</button>
                <div class="radio-group" role="radiogroup">
                  <div class="radio-group__button" v-for="id in 5" :key="id">
                    <input
                      :id="'meetup-id-' + id"
                      class="radio-group__input"
                      type="radio"
                      name="meetupId"
                      :value="id"
                      v-model="meetupId"
                      @change="handleClick(0)"
                    />
                    <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
                  </div>
                </div>
                <button class="button button--secondary" type="button" :disabled="meetupId >= 5" @click="handleClick(1)">Следующий</button>
              </div>
              <div class="meetup-selector__cover">
                <div class="meetup-cover">
                  <h1 class="meetup-cover__title" v-text="meetupTitle"></h1>
                </div>
              </div>
            </div>
          `,
})
