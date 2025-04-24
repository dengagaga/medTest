<template>
    <div class="pagination_all">
      <button @click="productStore.prevPage()" :disabled="productStore.currentPage === 1">Назад</button>
      <span>Страница {{ productStore.currentPage }} из {{ productStore.totalPages }}</span>
      <button @click="productStore.nextPage()" :disabled="productStore.currentPage === productStore.totalPages">Вперед</button>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/product.js'
const productStore = useProductStore()


</script>
<style>
.pagination_all {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.pagination_item {
    cursor: pointer;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
}
.active {
    background-color: #000;
    color: white;
}
</style>