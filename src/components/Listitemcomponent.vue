<script setup>
const props = defineprops({      
        itemData: { type:Object, required:true },
        renderCheckbox: { type:Boolean, required:true},
        rnderDeleteBtn: {type: Boolean , required:true}
})
function onChange(){
    this.$emit('onChange', this.itemData)
}
function onDelete(){
    this.$emit('onDelete',tis.itemData)
}

</script>
<template>
    <li>
        <input v-if="renderCheckbox" type="checkbox" :checked="itemData.done" @change="onChange"> 
        <label>{{ itemData.id }} - {{ itemData.name }}</label> 
    </li>
   
</template>