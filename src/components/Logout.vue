<template>
  <div>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script>
import { logout } from '../services/auth';

export default {
  methods: {
    async logout() {
      try {
        await logout();
        this.$emit('logout'); // Emitir evento 'logout' al hacer clic en el botón
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para el componente */
</style>
