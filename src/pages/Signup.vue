<template>
  <GuestLayout>
    <h2>Registrar</h2>

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
        v-model="name"
        id="name"
        label="Seu nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Tente novamente']"
      />

      <q-input
        filled
        v-model="email"
        type="email"
        id="login"
        label="Seu email"
        hint="exemplo@exemplo.com"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Tente novamente']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        id="password"
        label="Senha"
        lazy-rules
        :rules="[(val) => (val && val.length >= 8) || 'Insira uma senha com 8 digitos']"
      />

      <q-input
        filled
        type="password"
        v-model="senhaConfirma"
        id="senhaConfirma"
        label="Confirmar Senha"
        lazy-rules
        :rules="[(val) => (val && val.length >= 8) || 'Insira uma senha com 8 digitos']"
      />

      <div>
        <q-btn label="Logar" type="submit" color="primary" />
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <br />
    <p>Já tem uma conta? <router-link to="/login">Clique aqui</router-link></p>
  </GuestLayout>
</template>

<script setup>
import { ref } from 'vue'
import GuestLayout from '../components/GuestLayout.vue'
import axiosClient from 'src/axios'

const name = ref(null)
const email = ref(null)
const password = ref(null)
const senhaConfirma = ref(null)

async function submit() {
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value,
    senhaConfirma: senhaConfirma.value,
  }

  await axiosClient.get('/sanctum/csrf-cookie').then((response) => {
    console.log(response)
    axiosClient.post('/register', payload)
  })

}

function onReset () {
  name.value = null
  email.value = null
  password.value = null
  senhaConfirma.value = null
}
</script>

<style></style>
