<template>
  <AppDefaulLayout>
    <AppHero/>
    <AppAbout/>
  </AppDefaulLayout>
</template>

<script>
import AppDefaulLayout from '../layouts/AppDefaulLayout.vue';
import AppAbout from '../components/AppAbout.vue';
import AppHero from '../components/AppHero.vue';
  export default {
    components: {
      AppDefaulLayout,
      AppHero,
      AppAbout
    }
  }
</script>

<style lang="scss" scoped>

</style>