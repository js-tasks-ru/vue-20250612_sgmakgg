import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },

    count: {
      type: Number,
      required: true,
    },
  },

  emits: ['update:count'],

  setup({ min, count, max }, { emit }) {
    return {
      increment() {
        if (count < max) {
          emit('update:count', ++count)
        }
      },

      decrement() {
        if (count > min) {
          emit('update:count', --count)
        }
      },
    }
  },

  template: `
      <div class="counter">
        <UiButton aria-label="Decrement" :disabled="count <= min" @click="decrement()">➖</UiButton>
        <span class="count" data-testid="count">{{ count }}</span>
        <UiButton aria-label="Increment" :disabled="count >= max" @click="increment()">➕</UiButton>
      </div>
    `,
})
