<template>
    <div class="person">
        <p>Имя: {{ personStore.person[0].firstname }}</p>
        <p>Фамилия: {{ personStore.person[0].lastname }}</p>
        <p>E-mail:  {{ personStore.person[0].email }}</p>
        <p>Телефон: {{ personStore.person[0].phone }}</p>
        <p>День рождения: {{ personStore.person[0].birthday }}</p>
        <p>Сайт: {{ personStore.person[0].website }}</p>
        <button @click="exit()" class="cart-button">Выйти</button>
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
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
}
</style>
