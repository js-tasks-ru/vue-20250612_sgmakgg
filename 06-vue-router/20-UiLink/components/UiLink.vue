<script lang="ts" setup>
import {computed} from 'vue';

const props = defineProps<{
  to?: string | object;
  href?: string;
}>();

const componentType = computed(() => (props.to ? 'RouterLink' : 'a'));
const componentProps = computed(() =>
    props.to
        ? {to: props.to, class: 'link', tabindex: 0}
        : {href: props.href, class: 'link', tabindex: 0}
);
</script>

<template>
  <component :is="componentType" v-bind="componentProps">
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
