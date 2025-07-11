import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'learn',
      component: () => import('../components/MyForm.vue'),
    },
    {
  path: '/notes',
  name: 'Notes',
  component: () => import('../components/NotesPage.vue')
  
}

  ],
})

export default router
