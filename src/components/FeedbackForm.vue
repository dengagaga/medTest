<template>
       <div class="feedBack_modal">
        <div class="feedBack_modal-all">
            <button class="close" @click="$emit('viewFeedtoggle')">Закрыть</button>
            <div class="feedBack_modal-content">
                <p v-if="conditionLength">
                    ID: {{ personStore.person[0].id }}
                </p>
                <p>ФИО: {{ name }}</p>
                <p>Телефон: {{ phone }}</p>
                <p>Почта: {{ email }}</p>
                <p>Комментарий: {{ comment }}</p>
                <p>Дата: {{ date }}</p>
                <p v-if="conditionLength">
                    Сайт : {{ personStore.person[0].website }}
                </p>
                <p v-if="conditionLength">
                    День рождения : {{ personStore.person[0].birthday }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { usePersonStore } from '@/stores/person.js'
import { computed } from 'vue'
const personStore = usePersonStore()
const conditionLength = computed(() => personStore.person.length > 0)
const emit = defineEmits(['viewFeedtoggle'])
defineProps({
    name: String,
    phone: Number,
    email: String,
    comment: String,
    date: Date
})
</script>
<style>
.feedBack_modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
    right: 0;
    left: 0;
}
.va-date-input__dropdown-content {
    position: absolute;
    z-index: 60!important;
}
.va-input-wrapper__field {
    width: 100%;
    border-radius: 0.375rem!important;
    border: 1px solid rgba(55, 65, 81, 1)!important;
    outline: 0!important;
    background-color: rgba(17, 24, 39, 1)!important;
    padding: 0.75rem 1rem!important;
    color: rgba(243, 244, 246, 1)!important;
}
.feedBack_modal-all {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    z-index: 22;
    /* height: 500px; */
    background-color: rgba(17, 24, 39, 1);
    border-radius: 12px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
}
.feedBack_modal-content {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    color: white;
}

.feedBack_modal-title {
    font-weight: 700;
    text-align: center;
    font-size: 22px;
    color: white;
}
</style>