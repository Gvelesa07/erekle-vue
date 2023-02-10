import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import Displayitem from '..components/Displayitem.vue'


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
    },
    {
        path: '/products',
        name: "Products",
        component: Products
    },  {
        path: '/Cart',
        name: "Cart",
        component: Cart
    },
    {
        path: '/product/:id',
        name: "Product",
        component: Displayitem
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router