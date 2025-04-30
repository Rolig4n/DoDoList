<template>
  <GuestLayout>
    <h2>Registrar</h2>

    <q-form
      @submit.prevent="submit"
      @reset.prevent.stop="onReset"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off"
      spellcheck="false"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.name"
        id="name"
        label="Seu nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Tente novamente']"
      />

      <q-input
        filled
        v-model="form.email"
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
        v-model="form.password"
        id="password"
        label="Senha"
        lazy-rules
        :rules="[(val) => (val && val.length >= 8) || 'Insira uma senha com 8 digitos']"
      />

      <q-input
        filled
        type="password"
        v-model="form.senhaConfirma"
        id="senhaConfirma"
        label="Confirmar Senha"
        lazy-rules
        :rules="[
          (val) => val.length >= 8 || 'A senha deve ter no mínimo 8 caracteres'
        ]"
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
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import GuestLayout from '../components/GuestLayout.vue'
import axiosClient from 'src/axios'

const $q = useQuasar()

const form = ref({
  name: null,
  email: null,
  password: null,
  senhaConfirma: null,
})

async function submit() {

  await axiosClient.get('/sanctum/csrf-cookie').then((response) => {
    console.log(response)
    axiosClient.post('/register', form.value).catch((error) => {
        console.log('error', error)
        $q.notify({
          message: error.response.data.message,
          color: 'accent',
          actions: [
            {
              icon: 'close',
              color: 'white',
              round: true,
              handler: () => {
                /* ... */
              },
            },
          ],
        })
      })
  })

}

function onReset () {
  form.value.name = null
  form.value.email = null
  form.value.password = null
  form.value.senhaConfirma = null
}
</script>

<style></style>
