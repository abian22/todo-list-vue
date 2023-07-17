<template>
  <div>
    <header>
      <div class="header-content">
        <button v-if="hasToken" class="logout" @click="logout">Logout</button>
        <router-link to="/" class="todos">Inicio</router-link>
        <h1 class="title">TO DO LIST</h1>
        <div class="buttonContainer">
          <router-link to="signIn"><button class="singin">Sign in</button></router-link>
          <router-link to="signUp"><button>Sign up</button></router-link>
        </div>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import { logout } from './services/auth' 

export default {
  data() {
    return {
      hasToken: false,
    }
  },
  mounted() {
    this.checkToken() 
  },
  watch: {
    $route() {
      if ('Home') {
        this.checkToken() 
      }
    },
  },
  methods: {
    checkToken() {
      const token = localStorage.getItem('token')
      this.hasToken = token
    },
    logout() {
      try {
        logout() 
        console.log("deslogeado")
        this.hasToken = false
        this.$router.push('/') 
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>


<style scoped>
header {
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 10px;
}

.todos {
  margin-right: 10px;
  color: white;
}

.title {
  margin: 0;
  font-size: 24px;
  text-align: center;
}

footer {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: red;
  color: white;
}

.buttonContainer {
  display: flex;
  right: 10px;
  position: absolute;
}
.singin {
  margin-right: 10px;
}
.logout {
  display: flex;
  position: absolute;
  left: 10px;
  top: 14px;
}
</style>
