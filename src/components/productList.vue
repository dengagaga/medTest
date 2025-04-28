<template>
    
    <div class="product_list">
        <product v-for="product in productStore.currentCards" :key="product" :product="product" />
    </div>
    <pagination />
</template>
<script setup>
import product from '@/components/product.vue'
import {  onMounted } from 'vue'
import pagination  from '@/components/pagination.vue'
import { useProductStore } from '@/stores/product.js'
import { computed } from 'vue'
onMounted(() => {
    if (productStore.products == 0) {        
        productStore.getProducts()
    }
})
const productStore = useProductStore()
const conditionArray = computed(() => productStore.productsSearch.length > 0 ? productStore.productsSearch : productStore.currentCards)
</script>
<style>
.product_list {
    min-height: 720px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px;
}
</style>