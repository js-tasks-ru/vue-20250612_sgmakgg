<script lang="ts" setup>
import {UiButton, UiFormGroup, UiInput} from '@shgk/vue-course-ui'
import {ref} from 'vue'
import MeetupsAuthForm from '../components/MeetupsAuthForm.vue'
import LayoutAuth from '../components/LayoutAuth.vue'
import {login} from '../api.ts'
import {useRoute, useRouter} from "vue-router";

const email = ref('demo@email')
const password = ref('password')

const router = useRouter()
const route = useRoute()

async function onSubmit() {
  try {
    await login(email.value, password.value)
    // Авторизация прошла успешно
    const redirectTo = route.query.from?.toString() || '/'
    await router.push(redirectTo)
  } catch (error) {
    alert((error as Error).message)
  }
}
</script>

<template>
  <LayoutAuth title="Вход">
    <MeetupsAuthForm @submit="onSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" large name="email" placeholder="demo@email" required type="email" />
      </UiFormGroup>

      <UiFormGroup label="Пароль">
        <UiInput v-model="password" large name="password" placeholder="password" required type="password" />
      </UiFormGroup>

      <template #submit>
        <UiButton kind="primary" size="large" type="submit" wide>Войти</UiButton>
      </template>

      <template #append>
        Нет аккаунта?
        <RouterLink to="/register">Зарегистрируйтесь</RouterLink>
      </template>
    </MeetupsAuthForm>
  </LayoutAuth>
</template>
