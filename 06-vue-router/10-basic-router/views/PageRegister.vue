<script lang="ts" setup>
import {UiButton, UiCheckbox, UiFormGroup, UiInput} from '@shgk/vue-course-ui'
import {ref} from 'vue'
import MeetupsAuthForm from '../components/MeetupsAuthForm.vue'
import LayoutAuth from '../components/LayoutAuth.vue'
import {register} from '../api.ts'
import {useRouter} from "vue-router";

const email = ref('demo@email')
const fullname = ref('Demo Organizer')
const password = ref('password')
const password2 = ref('password')
const agree = ref(true)

const router = useRouter()

async function onSubmit() {
  try {
    await register({
      email: email.value,
      fullname: fullname.value,
      password: password.value,
    })
    // Регистрация прошла успешно
    await router.push('/login')
  } catch (error) {
    alert((error as Error).message)
  }
}
</script>

<template>
  <LayoutAuth title="Регистрация">
    <MeetupsAuthForm @submit="onSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" name="email" placeholder="demo@email" required type="email" />
      </UiFormGroup>

      <UiFormGroup label="Имя">
        <UiInput v-model="fullname" name="fullname" placeholder="Alice John" required />
      </UiFormGroup>

      <UiFormGroup label="Пароль">
        <UiInput v-model="password" minlength="6" name="password" placeholder="••••••" required type="password" />
      </UiFormGroup>

      <UiFormGroup label="Повтор пароля">
        <UiInput v-model="password2" minlength="6" placeholder="••••••" required type="password" />
      </UiFormGroup>

      <UiCheckbox v-model="agree" name="agree" required>Я согласен с условиями</UiCheckbox>

      <template #submit>
        <UiButton kind="primary" size="large" type="submit" wide>Зарегистрироваться</UiButton>
      </template>

      <template #append>
        Уже есть аккаунт?
        <RouterLink to="/login">Войдите</RouterLink>
      </template>
    </MeetupsAuthForm>
  </LayoutAuth>
</template>
