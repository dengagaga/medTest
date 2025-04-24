import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const getProducts = () => axios.get('https://fakerapi.it/api/v2/products?_quantity=36&_taxes=12&_price_max=1000&_categories_type=uuid&_locale=ru_RU')
  .then(function (response) {
    products.value = response.data.data
  })
  .catch(function (error) {
   
    console.log(error);
  })

  const currentPage = ref(1)
  const countItemsPage = ref(9)
  const totalPages = computed(() => Math.ceil(products.value.length / countItemsPage.value))
  
  const currentCards = computed(() => {
        const start = (currentPage.value - 1) * countItemsPage.value;
        const end = start + countItemsPage.value;
        return products.value.slice(start, end);
  })
  
  const nextPage = () => currentPage.value < totalPages.value ? currentPage.value = currentPage.value + 1 : ''
  const prevPage = () => currentPage.value > 1 ? currentPage.value = currentPage.value - 1 : ''
  




  return {
    products,
    getProducts,
    prevPage,
    nextPage,
    currentCards,
    totalPages,
    countItemsPage,
    currentPage
  }
})
