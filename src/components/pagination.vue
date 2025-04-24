<template>
    <div class="pagination_all">
        <div class="pagination_item" v-for="item in 5" :key="item">
            {{ item }}
        </div>
    </div>
</template>
<script setup>

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
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
}
</style>