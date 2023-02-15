import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'

const store = createStore({
    state(){
        return {
            anotherData: []
        }
    },
    plugins: [ mainPlugin ],
    api: import.meta.env.VITE_API_URL
})

export default store