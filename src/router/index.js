import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Products from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/frontlayout',
      name: 'frontlayout',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: 'productshome',
          name: 'productshome',
          component: () => import('../views/ProductshomeView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/ProductsView.vue')
        }
      ]
    },

    {
      path: '/frontlayout/products/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/dashborad',
      name: 'dashborad',
      component: () => import('../views/DashBoardView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/ProductsTable.vue'),
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/UsersTableView.vue')
        }
      ]
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

export default router
