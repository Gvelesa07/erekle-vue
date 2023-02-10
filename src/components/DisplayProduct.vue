<script setup>
import { Computed } from 'vuex'
import { UseRoute} from 'vue-router'
import { UseStore } from 'vuex';

const route = UseRoute()
const store = UseStore()

const product = Computed (() => {
    store.commit('GET_PRODUCT_BY_ID', route.params.id)
    return store.getters.getActiveProduct
}
)

</script>

<template>
    <div>
        Information about Item {{ product }}
    </div>
</template>