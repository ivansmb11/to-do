<script setup lang="ts">
import { useAuth } from './modules/auth/hooks/useAuth';
const { checkAuth } = useAuth();
checkAuth();
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Nunito, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c2c2c;
}
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
.bg {
  background-color: #2c2c2c;
}
</style>
