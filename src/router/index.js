import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'student',
    component: () => import( '../views/student.vue'),
    children: [
      {
        path: '/information',
        name: 'Information',
        component: () => import( '../views/student/Information.vue')
      },{
        path: '/put-information',
        name: 'PutInformation',
        component: () => import( '../views/student/PutInformation.vue')
      },{
        path: '/attainment',
        name: 'attainment',
        component: () => import( '../views/student/attainment.vue')
      },{
        path: '/arrangement',
        name: 'arrangement',
        component: () => import( '../views/student/arrangement.vue')
      },{
        path: '/variable',
        name: 'variable',
        component: () => import( '../views/student/variable.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
