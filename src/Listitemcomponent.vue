<script>
export default {
    props: {
        itemData: { type:Object, required:true },
        renderCheckbox: { type:Boolean, required:false},
        renderDeleteBtn: {type:Boolean, required:false}
        
    },
    methods: {
        onChange(){
            this.$emit('onChange', this.itemData)
        },
        onDelete(){
            this.$emit('onDelete', this.itemData)
        }
        
    },
}
</script>
<template>
    <li><input v-if="renderCheckbox" type="checkbox" :checked="itemData.done" @change="onChange"> 
        <label>{{ itemData.id }} - {{ itemData.name }}</label> </li>
    <button v-if="renderDeleteBtn" @click="onDelete">Delete</button>
</template>