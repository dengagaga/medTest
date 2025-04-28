<template>
    <div class="autorization_modal" v-if="!viewFeed">
        <div class="autorization_modal-all">
            <button class="close" @click="$emit('toggleView'),$emit('toggleViewFeedBack')">Закрыть</button>
            <div class="autorization_modal-content" v-if="title == 'Авторизация'">
                <h2 class="autorization_modal-title">{{ title }}</h2>
                <div class="autorization_modal-inps">
                    <label for="">Логин</label>
                    <input type="text" v-model="login" class="autorization_modal-content-inp">
                </div>
                <div class="autorization_modal-inps">
                    <label for="">Пароль</label>
                    <input type="password" v-model="password" class="autorization_modal-content-inp">
                </div>
                <button @click="autorizationPerson()" class="sign">Войти</button>
            </div>
            <div class="autorization_modal-content" v-if="title == 'Обратная связь'">
                <h2 class="autorization_modal-title">{{ title }}</h2>
                <div class="autorization_modal-inps">
                    <label for="">ФИО</label>
                    <input type="text" v-model="name" class="autorization_modal-content-inp">
                </div>
                <div class="autorization_modal-inps">
                    <label for="">Телефон</label>
                    <input type="number" v-model="phone" class="autorization_modal-content-inp">
                </div>
                <div class="autorization_modal-inps">
                    <label for="">Почта</label>
                    <input type="email" v-model="email" class="autorization_modal-content-inp">
                </div>
                <div class="autorization_modal-inps">
                    <label for="">Комментарий</label>
                    <input type="text" v-model="comment" class="autorization_modal-content-inp">
                </div>
                <div class="autorization_modal-inps">
                    <label for="">Дата</label>
                    <VaDateInput  v-model="date" />
                </div>
                
                <p v-if="eror" class="eror">Заполните все поля</p>
                <button @click="send()" class="sign">Отправить</button>
            </div>
        </div>
    </div>
    <FeedbackForm :name="name" :phone="phone" :email="email" :comment="comment" @viewFeedtoggle="viewFeedtoggle" :date="date" v-if="viewFeed"></FeedbackForm>
</template>
<script setup>
import { usePersonStore } from '@/stores/person.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import FeedbackForm from './FeedbackForm.vue'
const router = useRouter()
const personStore = usePersonStore()
const login = ref('')
const password = ref('')
const name = ref('')
const phone = ref('')
const email = ref('')
const comment = ref('')
const eror = ref(false)
const viewFeed = ref(false)
const date = ref(new Date())
defineProps({
    title:String
})
const emit = defineEmits(['toggleView', 'toggleViewFeedBack'])
const autorizationPerson = () => {
    if (login.value.length > 0 && password.value.length > 0) {
        if (login.value == 'admin' && password.value == 'admin') {
            personStore.getPerson()
            emit('toggleView')
            router.push('/person')
        }
    }
}
const send = () => {
    if (name.value != '' && phone.value != '' && email.value != '' && comment.value != '' && date.value != '') {
        viewFeed.value = true
        eror.value = false
        
    } else {
        eror.value = true
    }
}
const viewFeedtoggle = () => {
    viewFeed.value = !viewFeed.value
    emit('toggleViewFeedBack')
}
</script>
<style>
.autorization_modal {
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
.autorization_modal-all {
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
.autorization_modal-title {
    font-weight: 700;
    text-align: center;
    font-size: 22px;
    color: white;
}
.close {
    margin-bottom: 20px;
    color: white;
    margin-left: auto;
}
.autorization_modal-content{
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
}
.autorization_modal-inps {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.eror {
    color: red;
}
.autorization_modal-inps label{
    color: rgba(156, 163, 175, 1);
    font-weight: 600;
}
.autorization_modal-content-inp {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
}
.sign {
    display: block;
    width: 100%;
    background-color: rgba(167, 139, 250, 1);
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
  }
</style>
