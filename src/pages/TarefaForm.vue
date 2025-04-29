<template>
  <div class="q-pa-md">
    <h3>Adicionar Tarefa</h3>

    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="display: grid; justify-content: center; justify-items: center"
    >
      <q-input filled v-model="form.id" label="id" disable />

      <q-input
        filled
        v-model="form.titulo"
        label="Titulo *"
        lazy-rules
        :rules="[(val) => val.length > 0 || 'Preencha o campo']"
      />

      <q-input
        filled
        type="textarea"
        v-model="form.descricao"
        label="Descrição *"
        lazy-rules
        :rules="[(val) => val.length > 0 || 'Preencha o campo']"
      />

      <q-date v-model="form.data_vencimento" minimal />

      <q-select
        filled
        v-model="form.status"
        :options="options_status"
        label="Status *"
        v-if="id !== null"
        disable
      />

      <div>
        <q-btn label="Adicionar" type="submit" color="primary" @click="update" />
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import router from 'src/router'

const form = ref({
  titulo: '',
  descricao: '',
  data_vencimento: '',
  status: '',
})
const options_status = [
  { label: 'Pendente', value: 'pendente' },
  { label: 'Em Andamento', value: 'em andamento' },
  { label: 'Concluída', value: 'concluida' },
]
const loading = ref(false)

async function onSubmit() {
  const response = await api.post('/tarefas')
  console.log('response', response.data)
}

async function update() {
  loading.value = true
  await api
    .get(`/tarefas/${form.value}/update`)
    .catch((error) => {
      console.log('error', error)
    })
    .finally(() => {
      loading.value = false
      router.push('/tarefas')
    })
}

function onReset() {
  form.value.titulo = null
  form.value.descricao = null
  form.value.data_vencimento = null
  form.value.status = null
}
</script>
