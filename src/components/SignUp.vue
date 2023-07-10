<template>
  <div>
    <form @submit.prevent="signUp">
      <div>
        <label>Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import { signUp } from "../services/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (this.name && this.email && this.password) {
        try {
          const response = await signUp({
            name: this.name,
            email: this.email,
            password: this.password,
          });

          // Guardar el token en el localStorage
          const token = response.data.token;
          localStorage.setItem("token", token);

          this.name = "";
          this.email = "";
          this.password = "";
          this.$router.push("/home");
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Por favor, rellene todos los campos correctamente.");
      }
    },
  },
};
</script>

<style></style>
