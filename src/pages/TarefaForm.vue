<template>
  <div class="q-pa-md">
    <h3>Adicionar Tarefa</h3>

    <q-form
      @submit.prevent="onSubmit"
      @reset.prevent.stop="onReset"
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
        v-if="form.id !== null"
        filled
        v-model="form.status"
        :options="options_status"
        label="Status *"
        disable
      />

      <div>
        <q-btn label="Adicionar" type="submit" color="primary" 
        v-if="form.id !== null" @click="update" />
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import router from 'src/router'
import axiosClient from 'src/axios'
import { useQuasar } from 'quasar'

const form = ref({
  id: null,
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
const $q = useQuasar()
const loading = ref(false)
const route = useRoute()

onMounted(async () => {
  if (route.params.id) {
    const response = await axiosClient.get(`/tarefas/${route.params.id}`)
    form.value.id = response.data.id
    form.value.titulo = response.data.titulo
    form.value.descricao = response.data.descricao
    form.value.data_vencimento = response.data.data_vencimento
    form.value.status = response.data.status
  }
})

async function onSubmit() {
  const response = await axiosClient.post('/tarefas')
  console.log('response', response.data)
}

async function update() {
  loading.value = true
  await axiosClient
    .get(`/tarefas/${form.value}/update`)
    .catch((error) => {
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
