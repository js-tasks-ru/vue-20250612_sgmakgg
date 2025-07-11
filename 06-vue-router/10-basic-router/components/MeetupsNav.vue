<script lang="ts" setup></script>

<template>
  <nav class="nav">
    <RouterLink class="nav__link" to="/index">Главная</RouterLink>
    <RouterLink class="nav__link" to="/foo">Страница Foo</RouterLink>
    <RouterLink class="nav__link" to="/bar">Страница Bar</RouterLink>
    <RouterLink class="nav__link" to="/login">Вход</RouterLink>
    <RouterLink class="nav__link" to="/login?from=/foo">Вход /login?from=/foo</RouterLink>
    <RouterLink class="nav__link" to="/login?from=/bar">Вход /login?from=/bar</RouterLink>
    <RouterLink class="nav__link" to="/register">Регистрация</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-inline-start: var(--spacing-large);
  font-size: var(--font-size-control);
}

.nav__link {
  position: relative;
  display: inline-flex;
  padding: 0 var(--spacing-base);
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-text-primary);
  }

  &:before {
    content: '';
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 50%;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background-color: var(--color-primary-element-light);
    transform: translate(-2px, -50%);
  }
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    align-items: center;
    margin-inline-start: 0;
  }

  .nav__link:first-child:before {
    display: none;
  }
}
</style>
