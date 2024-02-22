<script>
  export default {
    
  }
</script>

<template>
  <section class="technologies-section px-10">
    <div class="container">
      <h2>Technologies</h2>
      <div class="tools">
        <img class="tool" src="../../img/tools/html-5.png" alt="HTML5 logo">
        <img class="tool" src="../../img/tools/css-3.png" alt="logo">
        <img class="tool" src="../../img/tools/js.png" alt="js logo">
        <img class="tool" src="../../img/tools/laravel-2.svg" alt="laravel logo">
        <img class="tool" src="../../img/tools/mysql-logo.svg" alt="mysql logo">
        <img class="tool" src="../../img/tools/php.png" alt="logo">
        <img class="tool" src="../../img/tools/sass.png" alt="php logo">
        <img class="tool" src="../../img/tools/vitejs.svg" alt="vitejs logo">
        <img class="tool" src="../../img/tools/vue-9.svg" alt="vue logo">
        <img class="tool" src="../../img/tools/bootstrap.png" alt="bootstrap logo">
        <img class="tool" src="../../img/tools/git.png" alt="git logo">
        <img class="tool" src="../../img/tools/github-icon-2.svg" alt="github logo">
        <img class="tool" src="../../img/tools/microsoft-5.svg" alt="microsoft logo">
        <img class="tool" src="../../img/tools/postman.svg" alt="postman logo">
        <img class="tool" src="../../img/tools/visual-studio-code-1.svg" alt="vscode logo">
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

.technologies-section {
  padding-top: 60px;
  padding-bottom: 60px;

  h2 {
    font-size: 34px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 24px;
  }

  .tools {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
    .tool {
      max-width: 64px;
    }
  }

}
</style>