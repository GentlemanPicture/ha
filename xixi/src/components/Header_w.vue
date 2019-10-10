<template>
    <div>
      <h2>你好</h2>
      <router-link :to="{path:'/shop'}">商品</router-link>
      <router-link :to="{path:'/shopcart'}">购物车</router-link>
    </div>
</template>

<script>
    export default {
        name: "Header_w"
    }
</script>

<style scoped>

</style>
