<script setup>
import { Computed } from 'vue'
import { UseRoute} from 'vue-router'
import { useStore } from 'vuex';

const route = UseRoute()
const store = useStore()

const product = computed (() => {
    store.commit('GET_PRODUCT_BY_ID', route.params.id)
    return store.getters.getActiveProduct
}
)

</script>

<template>
    <div>
        Information abouts Item {{ product }}
    </div>
</template>