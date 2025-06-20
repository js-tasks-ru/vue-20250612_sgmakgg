import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let counter = ref(0)

    return {
      counter,
    }
  },

  template: `
    <div class="counter">
      <button
        @click="counter--"
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter <= 0"
      >➖</button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        @click="counter++"
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter >= 5"
      >➕</button>
    </div>
  `,
})
