<template>
    <div class="person" v-if="personStore.person.length > 0">
        <div class="product_left">
            <img :src="personStore.person[0].image" alt="">
        </div>
        <div class="product_right">
            <p>Имя: {{ personStore.person[0].firstname }}</p>
            <p>Фамилия: {{ personStore.person[0].lastname }}</p>
            <p>E-mail:  {{ personStore.person[0].email }}</p>
            <p>Телефон: {{ personStore.person[0].phone }}</p>
            <p>День рождения: {{ personStore.person[0].birthday }}</p>
            <p>Сайт: {{ personStore.person[0].website }}</p>
            <button @click="exit()" class="cart-button">Выйти</button>
        </div>
    </div>
</template>
<script setup>
import { usePersonStore } from '@/stores/person.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const personStore = usePersonStore()
const exit = () => {
    router.push('/')
    personStore.person = []
}
</script>
<style>
.person {
    display: flex;
    align-items: center;
    margin-top: 120px;
    gap: 50px;
    font-size: 20px;
}
</style>
