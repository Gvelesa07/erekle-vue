<script setup>
import Listitemcomponent from './components/Listitemcomponent.vue';
const props =defineprops({ 
        data: { type:Array, required:true },
        changeStatus: { type:Boolean, required: false, default:false},
        candelete: {type:Boolean, required: false, default:false}
    })
    function changeDoneStatus(item){
        this.$emit('onChangeDOneStauts'.item)
    }
    function deleteRecord(item){
        this.$emit('onDelete',item)
    }
</script>
<template>
      <ul>
            <Listitemcomponent 
            v-for="item in data"
             :key="item.index" :itemData="item"
               :renderCheckbox="changeStatus" 
               @onChange="DoneStatus($event)"
                />
      </ul>
</template>