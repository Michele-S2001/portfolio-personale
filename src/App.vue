<script>
import AppHeader from './components/AppNavbar.vue';

export default {
  components: {
    AppHeader
  }
}

</script>

<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<style lang="scss">
@import './styles/global.scss';
</style>
