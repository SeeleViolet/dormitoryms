import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";


import SystemAdmin from "../views/SystemAdmin";
import DormitoryAdminAdd from "../views/dormitoryAdmin/DormitoryAdminAdd";
import DormitoryAdminManager from "../views/dormitoryAdmin/DormitoryAdminManager";
import DormitoryAdminUpdate from "../views/dormitoryAdmin/DormitoryAdminUpdate";
import DormitoryAdmin from "../views/DormitoryAdmin";
import StudentAdd from "../views/student/StudentAdd";
import StudentManager from "../views/student/StudentManager";
import StudentUpdate from "../views/student/StudentUpdate";
import BuildingAdd from "../views/building/BuildingAdd";
import BuildingManager from "../views/building/BuildingManager";
import BuildingUpdate from "../views/building/BuildingUpdate";
import DormitoryAdd from "../views/dormitory/DormitoryAdd";
import DormitoryManager from "../views/dormitory/DormitoryManager";
import DormitoryUpdate from "../views/dormitory/DormitoryUpdate";
import MoveoutRegister from "../views/move/MoveoutRegister";
import MoveRecord from "../views/move/MoveRecord";
import AbsentRecord from "../views/absent/AbsentRecord";
import AbsentRegister from "../views/absent/AbsentRegister";

Vue.use(VueRouter)

const routes = [
  {
    path: '/dormitoryAdmin',
    name: '宿舍管理员',
    component: DormitoryAdmin,
    redirect: '/absentRegister',
    children:[
      {
        path: '/absentRecord2',
        name: '缺寝记录',
        component: AbsentRecord
      },
      {
        path: '/absentRegister',
        name: '缺寝登记',
        component: AbsentRegister
      }
      ]
  },
  {
    path: '/systemAdmin',
    name: '系统管理员',
    component: SystemAdmin,
    redirect: '/dormitoryAdminAdd',
    children:[
      {
        path: '/dormitoryAdminManager',
        name: '宿管管理',
        component: DormitoryAdminManager
      },
      {
        path: '/dormitoryAdminAdd',
        name: '添加宿舍',
        component: DormitoryAdminAdd
      },
      {
        path: '/dormitoryAdminUpdate',
        name: '修改宿舍',
        component: DormitoryAdminUpdate
      },
      {
        path: '/studentAdd',
        name: '添加学生',
        component: StudentAdd
      },
      {
        path: '/studentManager',
        name: '学生管理',
        component: StudentManager
      },
      {
        path: '/studentUpdate',
        name: '修改学生',
        component: StudentUpdate
      },
      {
        path: '/buildingAdd',
        name: '添加楼宇',
        component: BuildingAdd
      },
      {
        path: '/buildingManager',
        name: '楼宇管理',
        component: BuildingManager
      },
      {
        path: '/buildingUpdate',
        name: '修改楼宇',
        component: BuildingUpdate
      },
      {
        path: '/dormitoryAdd',
        name: '添加宿舍',
        component: DormitoryAdd
      },
      {
        path: '/dormitoryManager',
        name: '宿舍管理',
        component: DormitoryManager
      },
      {
        path: '/dormitoryUpdate',
        name: '修改宿舍',
        component: DormitoryUpdate
      },
      {
        path: '/moveoutRegister',
        name: '迁出登记',
        component: MoveoutRegister
      },
      {
        path: '/moveoutRecord',
        name: '迁出记录',
        component: MoveRecord
      },
      {
        path: '/absentRecord',
        name: '缺寝记录',
        component: AbsentRecord
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/',
    name: '默认路由',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
