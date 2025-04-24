<template>
    <div class="pagination_all">
        <button @click="toggleActive(item)" :class="item.active ? 'pagination_item active' : 'pagination_item'" v-for="item in btns" :key="item">
            {{ item.id }}
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const btns = ref([
    {
        id: 1,
        active: true
    },
    {
        id: 2,
        active: false
    },
    {
        id: 3,
        active: false
    },
    {
        id: 4,
        active: false
    },
    {
        id: 5,
        active: false
    },
])
const toggleActive = (it) => {
    btns.value.forEach(item => item.active = false)
    it.active = true
}
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