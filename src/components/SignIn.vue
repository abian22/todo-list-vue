<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="doLogin">
      <div>
        <label>Email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import { login } from "../services/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async doLogin() {
      if (this.email && this.password) {
        try {
          const response = await login({
            email: this.email,
            password: this.password,
          });

          localStorage.setItem("token", response.data.token);

          console.log("Token guardado:", response.data.token);

          this.email = "";
          this.password = "";
          this.$router.push("/home");
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};
</script>
