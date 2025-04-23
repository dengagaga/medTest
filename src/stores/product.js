import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const product = ref(0)
  const getProducts = axios.get('https://fakerapi.it/api/v2/products?_quantity=1&_taxes=12&_categories_type=uuid')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });
  return {
    product,
    getProducts
  }
})
