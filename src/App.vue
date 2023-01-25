<script>
export default{
    data(){
        return{
            menuList: ['Home', 'Products', 'About Us', 'Contact']
        }
    },
}
</script>
<template>
  <div class="div1">
      <ul>
          <li v-for="item in menuList" :key="item.index" >{{item}}</li>
      </ul>
  </div>
  </template>
  <style scoped>
  div {
      border: rgb(242, 242, 242) 1px solid;
      background-color: rgb(0, 0, 0);
  }
  ul {
      display:flex;
      gap: 100px;
  }

  </style>
