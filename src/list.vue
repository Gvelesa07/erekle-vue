<script>
export default{
    props:{items: Array,},
    data(){
        return {
            menulist : true,
        }
    }
}
</script>

<template>
    <div class="nav">
        <ul>
            <li v-for="item in items" :key="item.id" >
                <button @click="menulist = !menulist">{{item.name}}</button>
            </li>
        </ul>
    </div>
    
    <div id="app">
  
  <p v-if="!menulist" v-for="item in items" :key="item.index">{{item.description}}</p>
  
    </div>
</template>

