import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'student',
    component: () => import('../views/student.vue'),
    children: [
      {
        path: '/student/information',
        name: 'Information',
        component: () => import( '../views/student/Information.vue')
      },{
        path: '/student/put-information',
        name: 'PutInformation',
        component: () => import( '../views/student/PutInformation.vue')
      },{
        path: '/student/attainment',
        name: 'attainment',
        component: () => import( '../views/student/attainment.vue')
      },{
        path: '/student/arrangement',
        name: 'arrangement',
        component: () => import( '../views/student/arrangement.vue')
      },{
        path: '/student/variable',
        name: 'variable',
        component: () => import( '../views/student/variable.vue')
      },{
        path: '/student/variable-results',
        name: 'results',
        component: () => import( '../views/student/variable-results.vue')
      }
    ]
  },{
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/teacher.vue'),
    children: [
      {
        path: 'information',
        name: 'teacher-information',
        component: () => import('../views/teacher/Information.vue')
      },{
        path: 'class-info',
        name: 'classInfo',
        component: () => import('../views/teacher/classInfo.vue')
      },{
        path: 'elective',
        name: 'elective',
        component: () => import('../views/teacher/elective.vue')
      },{
        path: 'required',
        name: 'required',
        component: () => import('../views/teacher/required.vue')
      },{
        path: 'set-attainment',
        name: 'setAttainment',
        component: () => import('../views/teacher/setAttainment.vue')
      },{
        path: 'put-information',
        name: 'put-information',
        component: () => import('../views/teacher/putInformation.vue')
      },
    ]
  },{
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue'),
    children: [
      {
        path: 'information',
        name: 'admin-information',
        component: () => import('../views/admin/information.vue')
      },{
        path: 'teacher-list',
        name: 'admin-teacher-list',
        component: () => import('../views/admin/teacher-list.vue')
      },{
        path: 'teacher-add',
        name: 'admin-teacher-add',
        component: () => import('../views/admin/teacher-add.vue')
      },{
        path: 'student-list',
        name: 'admin-student-list',
        component: () => import('../views/admin/student-list.vue')
      },{
        path: 'student-record',
        name: 'admin-student-record',
        component: () => import('../views/admin/student-record.vue')
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
