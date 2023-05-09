<script setup>
import { RouterLink, RouterView } from 'vue-router'
// useRouter
// const router = useRouter()
// setTimeout(() => {
//   router.push('/products')
// }, 3000)
</script>

<template>
  <div class="flex mt-8">
    <RouterLink
      to="/frontlayout/productshome"
      class="text-xl text-white bg-slate-800 text-center p-4 w-[150px] m-4"
      >首頁</RouterLink
    >
    <RouterLink
      to="/frontlayout/products"
      class="text-xl text-white bg-slate-800 text-center p-4 w-[150px] ml-2 m-4"
      >產品列表</RouterLink
    >
  </div>
  <RouterView />
</template>

<style scoped></style>
