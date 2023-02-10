import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const productsModule = {
    state() {
        return {
            activeProduct: null,
            products: {
                name: "Products",
                action: true,
                data: [
                    { id: 1, name: "Item 1", price: 100, description: 'text about prices'  },
                    { id: 2, name: "Item 2", price: 200, description: 'text about prices'  },
                    { id: 3, name: "Item 3", price: 300, description: 'text about prices'  },
                    { id: 4, name: "Item 4", price: 400, description: 'text about prices'  },
                    { id: 5, name: "Item 5", price: 500, description: 'text about prices'  },
                ]
            },
            cart: {
                name: "Cart",
                action: false,
                data: []
            }
        }
    },
    getters,
    mutations,
    actions
}

export default productsModule