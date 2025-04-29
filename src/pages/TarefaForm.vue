<template>
  <div class="q-pa-md">
    <h3>Adicionar Tarefa</h3>

    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="display: grid; justify-content: center; justify-items: center"
    >
      <div class="q-gutter-md">
        <q-input
          filled
          v-model="titulo"
          label="Titulo *"
          lazy-rules
          :rules="[(val) => val.length > 0 || 'Preencha o campo']"
        />

        <q-input
          filled
          type="textarea"
          v-model="descricao"
          label="Descrição *"
          lazy-rules
          :rules="[(val) => val.length > 0 || 'Preencha o campo']"
        />

        <q-input filled type="date" v-model="data_vencimento" label="Data vencimento *" />

        <q-input filled disable type="select" v-model="status" label="Status *" value="pendente" />

        <div>
          <q-btn label="Adicionar" type="submit" color="primary" />
          <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {api} from 'src/boot/axios'

const titulo = ref(null)
const descricao = ref(null)
const data_vencimento = ref(null)
const status = ref(null)

async function onSubmit() {
  const response = await api.post('/tarefas')
  console.log('response', response.data)
}

function onReset() {
  titulo.value = null
  descricao.value = null
  data_vencimento.value = null
  status.value = null
}
</script>
