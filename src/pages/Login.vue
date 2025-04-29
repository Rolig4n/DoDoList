<template>
  <GuestLayout>
    <h2>Login</h2>
    
    <q-form
      @submit.prevent="submit"
      @reset="onReset"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off"
      spellcheck="false"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        type="email"
        id="email"
        label="Seu email"
        hint="exemplo@exemplo.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Tente novamente' ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        id="password"
        label="Senha"
        lazy-rules
        :rules="[ val => val && val.length > 8 || 'Insira uma senha com 8 digitos' ]"
      />

      <div>
          <q-btn label="Logar" type="submit" color="primary"/>
          <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

    </q-form>

    <br>
    <p>Ainda não é cadastrado? <router-link to="/signup">Clique aqui</router-link></p>

  </GuestLayout>
</template>

<script setup>
import GuestLayout from '../components/GuestLayout.vue'
import { ref } from 'vue'
import axiosClient from 'src/axios'

const email = ref(null)
const password = ref(null)

async function submit() {
  const payload = {
    email: email.value,
    password: password.value,
  }

  await axiosClient.get('/sanctum/csrf-cookie').then((response) => {
    console.log(response)
    axiosClient.post('/login', payload)
  })

}

function onReset () {
  email.value = null
  password.value = null
}
</script>

<style>

</style>