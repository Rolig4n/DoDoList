<template>
  <q-page class="q-pa-md">
    <h3>Tarefas</h3>
    <div class="q-pa-md">
      <q-table
        title="Tarefas"
        no-data-label="Nenhuma tarefa encontrada"
        :rows="rows"
        :columns="columns"
        row-key="name"
        selection="single"
        v-model:selected="selected"
        :loading="loading"
        :filter="filter"
        binary-state-sort
        @request="getTarefas"
      >
      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Adcionar" href="#/tarefa" />
        <q-btn v-if="rows.length !== 0" class="q-ml-sm" color="primary" :disable="loading" label="Excluir" @click="removeRow" />
        <q-btn v-if="rows.length !== 0 && selected.length === 1" class="q-ml-sm" color="primary" :disable="loading" label="Editar" @click="updateRow" />
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      </q-table>
    </div>
  </q-page>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'

const columns = [
  {
    name: 'id',
    label: '#',
    align: 'center',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'titulo', align: 'center', label: 'Titulo', field: 'titulo', sortable: true, required: true},
  { name: 'descricao', align: 'center', label: 'Descricao', field: 'descricao', required: true},
  { name: 'data_vencimento', align: 'center', label: 'Data vencimento', field: 'data_vencimento', sortable: true, required: true},
  { name: 'status', label: 'Status', field: 'status', sortable: true, required: true},
  
]

const rows = ref([])
const selected = ref([])
const loading = ref(false)
const filter = ref('')

onMounted(() => {
  getTarefas()
})

async function getTarefas () {
  const response = await api.get('/tarefas')
  rows.value = response.data
}

async function removeRow () {
  loading.value = true
  await api.delete(`/tarefas/${selected.value[0]?.id}/destroy`).catch((error) => {
    console.log('error', error)
  }).finally(() => {
    loading.value = false
  })
}

async function updateRow () {
  loading.value = true
  await api.delete(`/tarefas/${selected.value[0]?.id}/destroy`).catch((error) => {
    console.log('error', error)
  }).finally(() => {
    loading.value = false
  })
}

</script>

<style>

</style>