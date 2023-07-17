<template>
  <div>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script>
import { logout } from '../services/auth'

export default {
  methods: {
    async logout() {
      try {
        await logout()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
</style>
