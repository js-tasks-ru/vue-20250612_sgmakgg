import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let operator = ref(null)
    let firstOperand = ref(null)
    let secondOperand = ref(null)

    let operationResult = computed(() => {
      if (!operator.value || firstOperand.value === null || secondOperand.value === null) {
        return 0
      }

      switch (operator.value) {
        case 'sum':
          return firstOperand.value + secondOperand.value
        case 'subtract':
          return firstOperand.value - secondOperand.value
        case 'multiply':
          return firstOperand.value * secondOperand.value
        case 'divide':
          return secondOperand.value !== 0 ? firstOperand.value / secondOperand.value : '∞'
        default:
          return 0
      }
    })

    return {
      operator,
      firstOperand,
      secondOperand,
      operationResult,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand"/>

      <div>=</div>

      <output>{{ operationResult }}</output>
    </div>
  `,
})
