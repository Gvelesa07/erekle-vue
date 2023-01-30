<script>
import axios from 'axios'

export default {
  data() {
    return {
      limit: 5,
      lang: 'ge',
      apiUrl:"http://items.magischer.de/api/products",
      products: [],
    }
  },
   mounted() {
      axios.get(this.apiUrl,{ params: { limit: this.limit, lang: this.lang } })
      .then(response => this.products = response.data.data)
    }
  }
</script>

<template>
  <h1></h1>
  <table>
    <thead>
      <tr>
        <th>Id:</th>
        <th>Name:</th>
        <th>Photo:</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.index">
      <td>{{ item.id }}</td>
      <td>{{ item.name}}</td>
      <td><img :src="item.img.cover" /></td>
      </tr>
    </tbody>
  </table>
</template>
