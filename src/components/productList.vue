<template>
    <div class="product_list">
        <product v-for="product in productStore.products" :key="product" :product="product" />
    </div>
</template>
<script setup>
import product from '@/components/product.vue'
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/product.js'
const productStore = useProductStore()
onMounted(() => {
    if (productStore.products == 0) {
        console.log('sssssssss');
        
        productStore.getProducts()
    }
})
</script>
<style>
.product_list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    gap: 20px;
}
</style>