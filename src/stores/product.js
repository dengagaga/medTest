import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const products = ref(0)
  const getProducts = () => axios.get('https://fakerapi.it/api/v2/products?_quantity=10&_taxes=12&_price_max=1000&_categories_type=uuid&_locale=ru_RU')
  .then(function (response) {
    products.value = response.data.data
  })
  .catch(function (error) {
   
    console.log(error);
  })
  return {
    products,
    getProducts
  }
})
