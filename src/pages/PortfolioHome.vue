<template>
  <AppDefaulLayout>
    <AppHero/>
    <AppAbout/>
    <AppProjectsVue/>
  </AppDefaulLayout>
</template>

<script>
import AppDefaulLayout from '../layouts/AppDefaulLayout.vue';
import AppProjectsVue from '../components/AppProjects.vue';
import AppAbout from '../components/AppAbout.vue';
import AppHero from '../components/AppHero.vue';
  export default {
    components: {
      AppDefaulLayout,
      AppHero,
      AppAbout,
      AppProjectsVue
    }
  }
</script>

<style lang="scss" scoped>

</style>