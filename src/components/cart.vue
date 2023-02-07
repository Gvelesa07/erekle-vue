<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const data = computed(() => store.getters.cartList)

</script>
<template>
    <div class="w-full">
        <h2 class="text-2xl font-bold">Watched Videos</h2>
        <ul class="w-80 space-y-2">
            <li v-for="item in data" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} - <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                @click.prevent="store.commit('removeItemFromCart', item.id)"
                >delete</button>
            </li>
        </ul>
    </div>
</template>