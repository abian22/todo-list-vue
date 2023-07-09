<template>
  <div>
    <header>
      <div class="header-content">
        <router-link to="/home" class="todos">Start</router-link>
        <h1 class="title">TO DO LIST</h1>
        <div class="buttonContainer">
          <router-link to="signIn"><button class="singin"> Sign in</button></router-link>
          <router-link to="signUp"><button> Sign up</button></router-link>
        </div>
      </div>
    </header>
    <footer>
      footer
    </footer>
  </div>
  <router-view></router-view>
</template>

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
</style>
