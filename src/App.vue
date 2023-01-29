<script>
import Todolist from './Todolist.vue'
import Todoitemform from './Todoitemform.vue'
export default {
    components:{
        Todolist,
        Todoitemform
    },
  data() {
    return {
      todos: [
        { id: 1, name: 'todo item 1' , done:false },
        { id: 2, name: 'todo item 2' , done:false },
        { id: 3, name: 'todo item 3' , done:false }
      ]
    }
  },
  methods: {
    putNewItemIntoTodolist(data){
    this.todos.push({
        id: this.nextId,
        name: data,
        done:false
    })
    },
    ChangeStatus(record){
        let v = this.todos.find(item => item.id === record.id)
        v.done = !v.done
    
    },
    deleteFromTodoList(record){
        let v = this.todos.find(item => item.id === record.id)
        this.todos.splice(this.todos.indexOf(v),1)
    }

  },
  computed: {
    nextId(){
        return this.todos.length +1
    },
    ActiveTodos(){
        return this.todos.filter(value => value.done == false)

    },
    DoneTodos(){
        return this.todos.filter(value => value.done == true)
    }

  }
}
</script>

<template>
    <div class="div1">
        <Todoitemform @onSubmit="putNewItemIntoTodolist($event)"/>
        <h2>All Todo items</h2>
        <Todolist :data="todos"  />

        <h3>Active Todos</h3>
        <Todolist :changeStatus="true"
         :data="ActiveTodos" @onChangeDoneStatus="ChangeStatus($event)" />

        <h4>Done Todos</h4>
        <Todolist :candelete="true" :data="DoneTodos" @onDelete="deleteFromTodoList($event)" />
    </div>
    <div class="div2">
        <button class="button2" type="submit">Filter</button>
        <input type="text"/>
        
    </div>

</template>
<style>
.div1{background-color: rgba(0, 170, 255, 0.056);
     
}
.div2{background-color: rgba(0, 0, 0, 0.437) ;
}

.button2{
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 10px;
    border-radius: 350px;
    overflow: hidden;
    background: #66ff66;
    color: rgb(7, 7, 7);
       }

</style>