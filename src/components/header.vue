<template>
      <header class="header">
        <router-link  to="/" class="header_link">Главная</router-link>
        <router-link  to="/person" class="header_link">О Пользователе</router-link>
        <input v-model="search" type="text"  class="search">
    </header>
</template>
<script setup>
import { useProductStore } from '@/stores/product.js'
import {computed, ref, watch} from 'vue'
const productStore = useProductStore()
const search = ref('')
const searchArray = () => {
  productStore.productsSearch = productStore.currentCards.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))  
}
watch(search, () => {
  if (search.value == '') {
    productStore.productsSearch.length = 0
  } else {
    searchArray()
  }
})
</script>
<style>
.header {
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
}
.header_link {
  color: black;
  font-size: 18px;
  
}
.search {
  max-width: 200px;
  padding: 5px;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #000000;
}
</style>
