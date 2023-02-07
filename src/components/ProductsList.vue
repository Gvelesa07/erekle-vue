<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'


const filteredPost = computed(() => store.getters.filteredPost)
const search = ""
const ChangeSearch = (e) => store.commit('ChangeSearch', e.target.value)


const store = useStore()

</script>
<template>
    <div class="w-full">
        <h2 class="text-2xl font-bold">Yotube Videos</h2>
        <ul class="w-60 space-y-2">
            <input type="text" v-model="search" @input="ChangeSearch">
            <li v-for="item in filteredPost" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button 
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    @click.prevent="store.dispatch('addItemToCartAction', item.id)"
                >Add to watchlist</button>
            </li>
        </ul>
    </div>
</template>