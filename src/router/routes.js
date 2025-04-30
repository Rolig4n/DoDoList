const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/IndexPage.vue') },
      {path: '/tarefas', name: 'Tarefas', component: () => import("pages/Tarefas.vue")},
      {path: '/tarefa/:id?', name: 'Tarefa', component: () => import("pages/TarefaForm.vue")}
    ]
  },
  {
      path: '/login',
      name: 'Login',
      component: () => import("pages/Login.vue")
  },
  {
      path: '/signup',
      name: 'Signup',
      component: () => import("pages/Signup.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
