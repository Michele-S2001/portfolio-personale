<script>
  import AppNavbar from '../components/AppNavbar.vue';
  export default {
    components: {
      AppNavbar
    }
  }
</script>
<template>
  <AppNavbar/>
  <slot></slot>
</template>


<style lang="scss" scoped>

</style>