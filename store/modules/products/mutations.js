const mutations = {
    
    ADD_ITEM_TO_CART(state, payload){
        let product = state.products.data.find(item => item.id == payload) 
        state.products.data.splice(state.products.data.indexOf(product),1)
        state.cart.data.push(product)
    },
    REMOVE_ITEM_FROM_CART(state, payload){  
        let product = state.cart.data.find(item => item.id == payload)
        state.cart.data.splice(state.cart.data.indexOf(product),1)
        state.products.data.push(product)
    },  
    GET_PRODUCT_BY_ID(state, payload){
        state.activeProduct = state.products.data.find(item => item.id === +payload )

    }
}

export default mutations