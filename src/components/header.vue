<template>
      <header class="header">
        <router-link  to="/" class="header_link">Главная</router-link>
        <router-link v-if="personStore.person.length > 0"  to="/person" class="header_link">О Пользователе</router-link>
        <button v-else @click="toggleView()" class="header_link">Авторизация</button>
        <button  @click="toggleView()" class="header_link">Форма обратной связи</button>
        <input v-model="search" type="text"  class="search">
        <AutorizationModal @toggleView="toggleView" v-if="viewModalAutorization" />
    </header>
</template>
<script setup>
import { useProductStore } from '@/stores/product.js'
import { usePersonStore } from '@/stores/person.js'
import {computed, ref, watch} from 'vue'
import AutorizationModal from './AutorizationModal.vue'
const productStore = useProductStore()
const personStore = usePersonStore()
const viewModalAutorization = ref(false)
const search = ref('')
const toggleView = () => {
  viewModalAutorization.value = !viewModalAutorization.value
}
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
