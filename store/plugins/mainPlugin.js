import buttonsModule from "../modules/buttons"
import productsModule from "../modules/products"

export default function mainPlugin(store){
    
    store.subscribe((mutation, state) => {

    store.subscribeAction({
        before: (action, state) => {
          console.log(`before action ${action.type}`)
        },
        after: (action, state) => {
          console.log(`after action ${action.type}`)
        }
      })

    store.registerModule('productsModule', productsModule)
    store.registerModule('buttonsModule', buttonsModule)
   
}