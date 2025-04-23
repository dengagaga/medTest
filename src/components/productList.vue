<template>
    <div>
        <product v-for="product in products" :key="product" :product="product" />
    </div>
</template>
<script setup>
import product from '@/components/product.vue'
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/product.js'
// const productStore = useProductStore()
// onMounted(() => {
//     productStore.getProducts()
// })
</script>
<style></style>