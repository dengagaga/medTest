import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePersonStore = defineStore('person', () => {
    const person = ref([])
    const getPerson = () => axios.get('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01&_locale=ru_RU')
    .then(function (response) {
        person.value = response.data.data
    })
    .catch(function (error) {
    
        console.log(error);
    })
  return {
    person,
    getPerson
  }
})


// https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01