<template>
      <header class="header">
        <router-link  to="/" class="header_link">Главная</router-link>
        <router-link  to="/person" class="header_link">О Пользователе</router-link>
    </header>
</template>
<script setup></script>
<style>
.header {
  display: flex;
  gap: 40px;
  width: 100%;
  height: 50px;
}
.header_link {
  color: black;
  font-size: 18px;
  margin-bottom: 30px;
}
</style>
