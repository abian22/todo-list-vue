import { createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"
import Index from "../views/Index.vue"

function verificarToken(to, from, next) {
  const token = localStorage.getItem("token"); 
  if (token) {
    next();
  } else {
    next("/");
  }
}

const routes = [
      {
        path: '/',
        name: 'Index',
        component: Index
      },

      {
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter: verificarToken
      },
      {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: "/SignUp",
        name: "SignUp",
        component: SignUp
      }
]

const router = createRouter({
    history: createWebHistory(/*process.env.BASE_URL*/),
    routes
})

export default router