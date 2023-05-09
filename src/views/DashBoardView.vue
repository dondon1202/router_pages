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
    <RouterLink to="/admin" class="text-xl text-white bg-slate-800 text-center p-4 w-[200px] m-4"
      >後台產品頁</RouterLink
    >
    <!-- <RouterLink
      to="/admin/users"
      class="text-xl text-white bg-slate-800 text-center p-4 w-[200px] ml-2 m-4"
      >後台使用者頁</RouterLink
    > -->
  </div>
  <RouterView />
</template>

<style scoped></style>
