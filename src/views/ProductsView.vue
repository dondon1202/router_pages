<template>
  <h1 class="text-6xl mt-8 m-4">這是產品列表</h1>
  <div class="flex">
    <RouterLink
      to="/frontlayout/products/1"
      class="mt-8 text-xl text-white bg-slate-800 text-center p-4 w-[150px] block m-4"
      >產品一</RouterLink
    >
  </div>

  <RouterView class="mt-6" />
</template>

<script>
export default {
  mounted() {
    // console.log(this.$route)
    console.log(this.$router.currentRoute.path)
    console.log(this.$router.currentRoute.query)
    console.log(this.$router.currentRoute.params)
  }
}
</script>

<style></style>
