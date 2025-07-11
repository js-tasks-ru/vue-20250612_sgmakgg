<script lang="ts" setup>
import {computed} from 'vue';

interface UiFormGroupProps {
  for?: string;
  label?: string;
  description?: string;
  hint?: string;
  showHint?: boolean;
  invalid?: boolean;
}

const props = defineProps<UiFormGroupProps>();

const slots = defineSlots<{
  default(): unknown
  label?(): unknown
  description?(): unknown
}>();

const showHintBlock = computed(() => props.hint !== undefined);
const showHintContent = computed(() => props.invalid || props.showHint);
const hintClass = computed(() =>
    ['form-group__hint', props.invalid && 'form-group__hint--invalid'].filter(Boolean).join(' ')
);
</script>

<template>
  <div class="form-group">
    <div class="form-group__label-wrapper">
      <label v-if="slots.label || label" :for="props.for" class="form-group__label">
        <slot name="label">{{ label }}</slot>
      </label>
      <div v-if="slots.description || description" class="form-group__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
    <div class="form-group__control">
      <slot />
    </div>
    <div v-if="showHintBlock" :class="hintClass" aria-live="polite">
      <template v-if="showHintContent">{{ hint }}</template>
      <template v-else>&nbsp;</template>
    </div>
  </div>
</template>

<style scoped>
/* _form-group.css */
.form-group {
}

.form-group__label-wrapper {
  margin-block-end: var(--spacing-small);
}

.form-group__label {
  display: block;
  font-size: var(--font-size-control);
}

.form-group__description {
  color: var(--color-dimmed);
}

.form-group__hint {
  font-size: var(--font-size-small);
  color: var(--color-dimmed);
  min-height: 1lh;

  &.form-group__hint--invalid {
    color: var(--color-danger);
  }
}
</style>
