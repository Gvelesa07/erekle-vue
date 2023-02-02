import { ref, onMounted } from 'vue'
import axios from 'axios'

export default function products() {
  setup(_,context){
  const range = [ 5,10,15],
  const limit = [5],
  const langs = ['ge', 'en'],
  const apiUrl ="http://items.magischer.de/api/products",
  const products =[],
  const res = null, 
  },
  
methods:{
  getDataFromApiUrl(url = this.apiUrl){ axios.get(url,  { params: { limit: this.limit, lang: this.lang } })
    .then((response) => {this.res = response.data
    this.products = response.data.data })
  },
  nextPage(){
    this.getDataFromApiUrl(this.res?.next_page_url)
  },
  prevPage(){
    this.getDataFromApiUrl(this.res?.prev_page_url)
  },
  firstpage(){
    this.getDataFromApiUrl(this.res?.first_page_url)
  },
  lastpage(){
    this.getDataFromApiUrl(this.res?.last_page_url)
  },
  changelimit(e){
    this.limit = e.target.value
    this.getDataFromApiUrl()
  },
  changelang(e){
    this.lang = e.target.value
    this.getDataFromApiUrl()
  },
}
 mounted() {
   this.getDataFromApiUrl()
 }
}

