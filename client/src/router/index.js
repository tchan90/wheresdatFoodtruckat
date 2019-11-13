//All routes
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

import Events from '../components/events/Event.vue'
import Home from '../components/home/Home.vue'
import TruckerInfo from '../components/directory/TruckerInfo.vue'
import Favourites from '../components/Favourites.vue'
import Directory from '../components/home/Directory.vue'
import Login from '../components/profile/Login.vue'
import Register from '../components/profile/Register.vue'
import Profile from '../components/profile/Profile.vue'
import AddTruck from '../components/profile/AddShop.vue'
import EditTruck from '../components/profile/EditShop.vue'
import EditWorkingHours from '../components/profile/EditWorkingHours.vue'
import ErrorPage from '../components/Error.vue'

Vue.use(Router)


const router = new Router({
    routes: [
        {
            path: "/",
            name:'root',
            component: Home
          },
          {
            path: "/events",
            name:'events',
            component: Events
          },
          {
            path:"/directory",
            name:"directory",
            component:Directory
          },
          {
            path:"/trucker/:foodTruckId",
            name:'truckerInfo',
            component: TruckerInfo
          },
          {
            path:"/favourites",
            name:'favourites',
            component: Favourites
          },
          {
            path:"/login",
            name:'login',
            component: Login
          },
          {
            path:"/register",
            name: 'register',
            component: Register
          },
          {
            path:"/admin",
            name:"profile",
            component: Profile,
            meta: { 
              requiresAuth: true
            }
          },
          {
            path:"/addTruck",
            name:'addTruck',
            component: AddTruck,
            meta: { 
              requiresAuth: true
            }
          },
          {
            path:"/editTrucker/:foodTruckId",
            name:'editTruck',
            component: EditTruck,
            meta: { 
              requiresAuth: true
            }
          },
          {
            path:"/editTrucker/workingHours/:foodTruckId",
            name:'editWorkingHours',
            component: EditWorkingHours,
            meta: { 
              requiresAuth: true
            }
          },
          {
            path:"*",
            component: ErrorPage
          }
        ],
        mode:'history',
        scrollBehavior () {
          return { x: 0, y: 0 }
        },
});
//Meta requiresAuth applied so pages that need authorization in order to view
//Access isUserLoggedIn state in the store
//Re routes to login page if not logged in
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isUserLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router