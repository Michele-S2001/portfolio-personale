<script>
  export default {
    
  }
</script>

<template>
  <section id="technologies" class="technologies-section px-10">
    <div class="container">
      <h2>Tecn<span>olo</span>gie</h2>
      <div class="tools">
        <img class="tool" src="../../img/technologies-imgs/html.png" alt="HTML5 logo">
        <img class="tool" src="../../img/technologies-imgs/css.png" alt="logo">
        <img class="tool" src="../../img/technologies-imgs/js.png" alt="js logo">
        <img class="tool" src="../../img/technologies-imgs/laravel.svg" alt="laravel logo">
        <img class="tool" src="../../img/technologies-imgs/mysql.svg" alt="mysql logo">
        <img class="tool" src="../../img/technologies-imgs/php.png" alt="logo">
        <img class="tool" src="../../img/technologies-imgs/sass.png" alt="php logo">
        <img class="tool" src="../../img/technologies-imgs/vitejs.svg" alt="vitejs logo">
        <img class="tool" src="../../img/technologies-imgs/vue.svg" alt="vue logo">
        <img class="tool" src="../../img/technologies-imgs/bootstrap.png" alt="bootstrap logo">
        <img class="tool" src="../../img/technologies-imgs/git.png" alt="git logo">
        <img class="tool" src="../../img/technologies-imgs/github.svg" alt="github logo">
        <img class="tool" src="../../img/technologies-imgs/microsoft.svg" alt="microsoft logo">
        <img class="tool" src="../../img/technologies-imgs/postman.svg" alt="postman logo">
        <img class="tool" src="../../img/technologies-imgs/vscode.svg" alt="vscode logo">
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.technologies-section {
  padding-top: 60px;
  padding-bottom: 60px;

  h2 {
    font-size: 37px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 24px;
    span {
      color: $orange;
    }
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