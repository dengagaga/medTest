<template>
    <div class="card">
      <div class="card_top">
        <div class="image_container">
          <img :src="product.images[0].url" alt="">
        </div>
        <div class="title">
            <span>{{ product.name }}</span>
        </div>
      </div>
        <div class="description">
           {{ product.description }}
        </div>
        <div class="action">
            <div class="price">
            <span>{{ product.price.toFixed(0) }} ₽</span>
            </div>
            <button class="cart-button">
            <svg
                class="cart-icon"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                stroke-linejoin="round"
                stroke-linecap="round"
                ></path>
            </svg>
            <span>Add to cart</span>
            </button>
        </div>
    </div>

</template>
<script setup>
const props = defineProps({
    product: Object
})

</script>
<style>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  max-width: 240px;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
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
  background-color: #243237;
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

.cart-button {
  cursor: pointer;
  max-width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 100%;
  background-color: #C8102E;
  font-size: 0.75rem;
  font-weight: 500;
  color: #d9d9d9;
  text-wrap: nowrap;
  border: 2px solid #C8102E;
  border-radius: 12px;
  transition: all .3s;
}
.cart-button:hover {
  opacity: .8;
}
.cart-button .cart-icon {
  width: 1rem;
}


</style>