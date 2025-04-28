<template>
    <div class="product_all">
        <div class="product_left">
            <img :src="product.image" alt="">
        </div>
        <div class="product_right">
            <h3 class="product_right-title">{{ product.name }}</h3>
            <h5 class="product_right-description">Описание: {{ product.description }}</h5>
            <div class="product_right-prices">
                <span class="product_right-price">Цена: {{ product.price.toFixed(0) }} ₽ </span>
                <span class="product_right-price">Чистая цена: {{ product.net_price.toFixed(0) }} ₽ </span>
                <span class="product_right-price">Налог: {{ product.taxes.toFixed(0) }} ₽ </span>
                <btnPay/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useProductStore } from '@/stores/product.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import btnPay from '@/components/btnPay.vue';
const route = useRoute()
const productStore = useProductStore()
const product = computed(() => productStore.products.find(item => item.id == route.query.param) ) 
</script>
<style>
.product_all {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-top: 200px;
    gap: 40px;
}
.product_left {
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 650px;
  height: 400px;
  background-color: #243237;
  border-radius:10px;
}

.product_left img {
  width: 100%;
  height: 100%;
}
.product_right {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.product_right-title {
    font-size: 26px;
}
.product_right-description {
    font-size: 18px;
}
.product_right-prices {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.product_right-price {
    font-size: 18px;
}

</style>