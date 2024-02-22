<template>
  <AppDefaultLayout>
    <AppHero/>
    <AppAbout/>
    <AppProjects/>
  </AppDefaultLayout>
</template>

<script>
import AppDefaultLayout from '../layouts/AppDefaultLayout.vue';
import AppProjects from '../components/AppProjects.vue';
import AppAbout from '../components/AppAbout.vue';
import AppHero from '../components/AppHero.vue';

  export default {
    components: {
      AppDefaultLayout,
      AppHero,
      AppAbout,
      AppProjects
    }
  }
</script>

<style lang="scss" scoped>

</style>