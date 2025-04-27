<template>
  <GuestLayout>
    <h2>Login</h2>
    
    <q-form
      @submit="onSubmit"
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

    </q-form>

    <p>Ainda não é cadastrado? <router-link to="/signup">Clique aqui</router-link></p>

  </GuestLayout>
</template>

<script>
import GuestLayout from '../components/GuestLayout.vue'
export default {
  components: { GuestLayout },

}
</script>

<style>

</style>