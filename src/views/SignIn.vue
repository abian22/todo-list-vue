<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" id="email" v-model="username">
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aquí puedes realizar la lógica de inicio de sesión, como enviar una solicitud al servidor para verificar las credenciales.
        // Puedes utilizar una biblioteca como Axios para realizar la solicitud HTTP.
        console.log('Nombre de usuario:', this.username);
        console.log('Contraseña:', this.password);
  
        // Reiniciar los campos de entrada después de enviar el formulario.
        this.username = '';
        this.password = '';
      }
    }
  };
  </script>