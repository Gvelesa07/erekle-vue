<script setup>
import products from './composables/products';
const {url,limits,limit,langs,lang,res,range} = products
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
