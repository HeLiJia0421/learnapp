import Vue from 'vue';
import VueRouter from "vue-router";

const Home = ()=> import('../views/home/Home')
const Course = ()=> import('../views/course/Course')
const Task = ()=> import('../views/task/Task')
const Profile = ()=> import('../views/profile/Profile')

//1.安装插件
Vue.use(VueRouter);

//2.创建Router
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/course',
    component:Course
  },
  {
    path:'/task',
    component:Task
  },
  {
    path:'/profile',
    component:Profile
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
