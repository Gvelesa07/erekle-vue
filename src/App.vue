<script>
import Listmenu from "./List.vue"

export default{
  components: {
    Listmenu
  },
  data(){
    return {
      dataItem: [
                {
                  id: 1,
                  name:"HOME",
                  url:"https://www.google.com/",
                  description: "homepage"
                },
                {
                  id: 2,
                  name:"CONTACT",
                  url:"https://www.google.com/",
                  description: "contact"
                },
                {
                  id: 3,
                  name:"ABOUT US",
                  url:"https://yandex.com/",
                  description: "about"
                },
                {
                  id: 4,
                  name:"INFO",
                  url:"https://duckduckgo.com/",
                  description: "information"
                },
              ]
    }
  }
}
</script>

<template>
  <Listmenu :items="dataItem"></Listmenu>
</template>