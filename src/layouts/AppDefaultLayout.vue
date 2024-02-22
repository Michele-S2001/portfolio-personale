<script>
  import AppNavbar from '../components/AppNavbar.vue';
  import AppFooter from '../components/AppFooter.vue';
  export default {
    components: {
      AppNavbar,
      AppFooter
    }
  }
</script>
<template>
  <AppNavbar/>
  <slot></slot>
  <AppFooter/>
</template>


<style lang="scss" scoped>

</style>