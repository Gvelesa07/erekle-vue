import {ref,onMounted} from 'vue'
import axios from 'axios'

export default function useProducts(){
    const range =[5,10,15,20]
    const url = 'http://items.magischer.de/api/products'
    const limits = [ 5, 10, 15, 20 ]
    const langs = [ 'en', 'ge']
    const limit = ref(limits[0])
    const res = ref(null)
    const lang = ref(langs[0])

   function getProducts(url= url){
        axios.get(url,{
            params: {
                limit:limit.value,
                lang:limit.value,
            }
        }).then((response) => {
            products.value = response.data.data
            res.value = response.data
        })}
    function showProduct(id){
        axios.get(url +'/' + id).then(response => product.value =response.data)
    }
    onMounted(function(){
        getProducts()
    })
    return {
     myProducts,
     res,
     getProducts,
     products,
     url,

    }
  }