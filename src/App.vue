<script>
import AppHeader from './components/AppNavbar.vue';

export default {
  components: {
    AppHeader
  }
}

</script>

<template>
  <AppHeader/>
  <router-view></router-view>
</template>

<style lang="scss">
@import './styles/global.scss';
</style>
