

<template>
  <div class="container">
    <Header />
    <RouterView />
    
  </div>
 
</template>
<script setup>
import { RouterView } from 'vue-router'
import Header from './components/header.vue';
</script>
<style scoped>
.container {
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
}

</style>
