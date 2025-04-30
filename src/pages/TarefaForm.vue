<template>
  <div class="q-pa-md">
    <h3>Adicionar Tarefa</h3>

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
      style="display: grid; justify-content: center; justify-items: center"
    >
      <q-input filled v-model="form.id" label="#" readonly />

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

      <div class="q-pa-md" style="max-width: 300px">
        <q-input filled v-model="form.data_vencimento" label="Data de vencimento *" mask="date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="form.data_vencimento">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <q-select
        filled
        v-model="form.status"
        label="Status *"
        :options="options"
        style="width: 250px"
      />

      <div>
        <q-btn label="Adicionar" type="submit" color="primary" :disable="loading" class="q-ml-sm" />
        <q-btn label="Voltar" color="primary" flat class="q-ml-sm" href="#/tarefas" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from 'src/axios'
import { useQuasar } from 'quasar'

const form = ref({
  id: null,
  titulo: '',
  descricao: '',
  data_vencimento: '',
  status: 'pendente',
})
const options = ['pendente', 'em andamento', 'concluida']
const $q = useQuasar()
const loading = ref(false)
const route = useRoute()

onMounted(async () => {
  if (route.params.id) {
    try {
      const response = await axiosClient.get(`/tarefas/${route.params.id}`)
      form.value = response.data
    } catch (error) {
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
    }
  }
})

async function onSubmit() {
  loading.value = true
  if (form.value.id) {
    await axiosClient
      .put(`/tarefas/${form.value.id}/update`, form.value)
      .then(
        $q.notify({
          message: 'Tarefa atualizada!',
          color: 'secondary',
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
        }),
      )
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
  } else {
    await axiosClient
      .post('/tarefas', form.value)
      .then(
        $q.notify({
          message: 'Tarefa criada!',
          color: 'secondary',
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
        }),
      )
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
  }
  loading.value = false
}
</script>
