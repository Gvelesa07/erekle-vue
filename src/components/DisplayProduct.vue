<script setup>
import { computed } from 'vue'
import { useRoute} from 'vue-router'
import { useStore } from 'vuex';

const route = useRoute()
const store = useStore()

const product = computed (() => {
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