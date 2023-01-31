<script>
import axios from 'axios'

export default {
  data() {
    return {
      range: [ 5,10,15],
      limit: 5,
      langs: ['ge', 'en'],
      apiUrl:"http://items.magischer.de/api/products",
      products: [],
      res: null,
    }
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
    },lastpage(){
      this.getDataFromApiUrl(this.res?.last_page_url)
    },
    changelimit(e){
      this.limit = e.target.value
      this.getDataFromApiUrl()
    },
    changelang(e){
      this.lang = e.target.value
      this.getDataFromApiUrl()
    }
  },
   mounted() {
     this.getDataFromApiUrl()
    }
  }
</script>

<template>
  <select @change="changelang">
    <option v-for="language in langs" :key="language.index" :value="language" >
    {{ language }} </option>
  </select> 
  <select @change="changelimit">
    <option v-for="amount in range" :key="amount.index" :value="amount" >
    {{ amount }} </option>
  </select>
  <table class="table-auto"  style="margin:5px">
    <thead>
      <tr>
        <th>Id:</th>
        <th>Name:</th>
        <th>Photo:</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in res?.data" :key="item.index">
      <td>{{ item.id }}</td>
      <td>{{ item.name}}</td>
      <td><img style="width: 80px; height:auto;" :src="item.img.cover" /></td>
      </tr>
    </tbody>
  </table>
  <div style="display: flex; justify-content: between">
    <a href="#" :disabled="!res?.first_page_url" @click.prevent="firstpage">firstpage</a>
  <button :data-url="res?.prev_page_url" :disabled="!res?.prev_page_url" @click.prevent="prevPage">previous:</button>
  <button :disabled="!res?.next_page_url" @click.prevent="nextPage">next:</button>
  <a href="#" :disabled="!res?.last_page_url" @click.prevent="lastpage">lastpage</a>
  </div>
</template>
