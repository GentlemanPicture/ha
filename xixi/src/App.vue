<template>
  <div id="app">
<Header_w></Header_w>
    <router-view/>
  </div>
</template>

<script>
import Header_w from "./components/Header_w";
export default {
  name: 'App',
  components: {Header_w}
}
</script>

<style>
#app {

}
</style>
