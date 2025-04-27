<template>
    <div class="q-pa-md" style="display: grid;
        justify-content: center;
        justify-items: center;">
        <img
            alt="Dodo list logo"
            src="~assets/dodo-logo.svg"
            style="width: 200px; height: 200px; opacity: 50%; position: absolute; top: 0; left: 50%; z-index: -1;"
        >
        <slot></slot>
        <div>
            <q-btn label="Logar" type="submit" color="primary"/>
            <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

    </div>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {
      const $q = useQuasar()
  
      const name = ref(null)
      const age = ref(null)
      const accept = ref(false)
  
      return {
        name,
        age,
        accept,
  
        onSubmit () {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        },
  
        onReset () {
          name.value = null
          age.value = null
          accept.value = false
        }
      }
    }
  }
</script>

<style>
</style>