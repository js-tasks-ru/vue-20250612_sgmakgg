import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['remove-email'],

  template: `
      <li :class="{ marked }">
        {{ email }}
        <button type="button" aria-label="Удалить" @click.stop="$emit('remove-email')">❌</button>
      </li>
    `,
})
