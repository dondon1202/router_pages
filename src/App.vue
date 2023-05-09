<script setup>
import { RouterLink, RouterView } from 'vue-router'
// useRouter
// const router = useRouter()
// setTimeout(() => {
//   router.push('/products')
// }, 3000)
</script>

<template>
  <div class="w-[600px]">
    <div class="flex">
      <RouterLink
        to="/frontlayout"
        class="text-xl text-white bg-slate-800 text-center p-4 w-[200px] m-4"
        >前台
      </RouterLink>
      <RouterLink
        to="/dashborad"
        class="text-xl text-white bg-slate-800 text-center p-4 w-[200px] m-4"
        >後台</RouterLink
      >
      <RouterLink to="/" class="text-xl text-white bg-slate-800 text-center p-4 w-[250px] m-4"
        >回到首頁</RouterLink
      >
    </div>
    <RouterView class="mt-8" />
  </div>
</template>

<style scoped></style>
