<template>
  <GuestLayout>
    <h2>Registrar</h2>
    
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
        v-model="name"
        id="name"
        label="Seu nome"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Tente novamente' ]"
      />

      <q-input
        filled
        v-model="name"
        type="email"
        id="login"
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

      <q-input
        filled
        type="password"
        v-model="senhaConfirma"
        id="senha-confirma"
        label="Confirmar Senha" 
        lazy-rules
        :rules="[ val => val && val.length > 8 || 'Insira uma senha com 8 digitos' ]"
      />

    </q-form>

    <p>Já tem uma conta? <router-link to="/login">Clique aqui</router-link></p>
    
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