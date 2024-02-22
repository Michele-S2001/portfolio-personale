<template>
  <AppDefaultLayout>
    <AppHero/>
    <AppAbout/>
    <AppTechnologies/>
    <AppProjects/>
  </AppDefaultLayout>
</template>

<script>
import AppDefaultLayout from '../layouts/AppDefaultLayout.vue';
import AppProjects from '../components/AppProjects.vue';
import AppAbout from '../components/AppAbout.vue';
import AppHero from '../components/AppHero.vue';
import AppTechnologies from '../components/AppTechnologies.vue';

  export default {
    components: {
      AppDefaultLayout,
      AppHero,
      AppAbout,
      AppProjects,
      AppTechnologies
    }
  }
</script>

<style lang="scss" scoped>

</style>