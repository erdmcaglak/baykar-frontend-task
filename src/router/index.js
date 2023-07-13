import Vue from 'vue'
import VueRouter from 'vue-router'

import quizMain from '@/views/quiz-app/QuizMain.vue'
import cssWorkMain from '@/views/css-work/CssWorkMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/quiz'
    
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quizMain
  },
  {
    path: '/css-work',
    name: 'cssWork',
    component: cssWorkMain
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
