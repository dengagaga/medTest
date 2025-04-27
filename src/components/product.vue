<template>
    <div class="card" @click="goToProduct(product.id)">
      <div class="card_top">
        <div class="image_container">
          <img :src="product.images[0].url" alt="">
        </div>
        <div class="title">
            <span>{{ product.name }}</span>
        </div>
      </div>
        <div class="action">
            <div class="price">
              <span>{{ product.price.toFixed(0) }} ₽</span>
            </div>
          <btnPay />
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import btnPay from './btnPAy.vue';
const props = defineProps({
    product: Object
})
const router = useRouter()

const goToProduct = (productID) => {
  router.push({
    path: `/product:${productID}`,
    query: { param: productID } 
  });
}
</script>
<style>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  max-width: 240px;
  height: 350px;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  transition: all .3s;
}
.card:hover {
  transform: scale(1.03);
}
.card_top {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.image_container {
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 5;
  width: 100%;
  height: 150px;
  background-color: rgba(17, 24, 39, 1);
  border-radius:10px;
}

.image_container img {
  width: 100%;
  height: 100%;
}

.title {
  overflow: clip;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #706767;
  text-transform: capitalize;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}

.description {
  font-size: 12px;
  color: #3A3A3A;
}

.action {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.price {
  font-size: 14px;
  font-weight: 700;
  color: #706767;
}



</style>