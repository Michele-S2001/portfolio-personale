<template>
  <section id="technologies" class="technologies-section px-10">
    <div class="container">
      <h2>Tecn<span>olo</span>gie</h2>
      <div class="tools" role="group">
        <img class="tool" src="/img/html.png" alt="logo di HTML5">
        <img class="tool" src="/img/css.png" alt="logo di CSS">
        <img class="tool" src="/img/js.png" alt="logo javascript">
        <img class="tool" src="/img/ts-logo.png" alt="logo di typescript">
        <img class="tool" src="/img/laravel.svg" alt="logo di laravel">
        <img class="tool" src="/img/mysql.svg" alt="logo di mysql">
        <img class="tool" src="/img/php.png" alt="logo di php">
        <img class="tool" src="/img/sass.png" alt="logo di sass">
        <img class="tool" src="/img/vitejs.svg" alt="logo di vite">
        <img class="tool" src="/img/vue.svg" alt="logo vue">
        <img class="tool" src="/img/react-logo.png" alt="logo di react">
        <img class="tool" src="/img/bootstrap.png" alt="logo di bootstrap">
        <img class="tool" src="/img/git.png" alt="logo di git">
        <img class="tool" src="/img/github.svg" alt="logo di github">
        <img class="tool" src="/img/microsoft.svg" alt="logo di microsoft">
        <img class="tool" src="/img/postman.svg" alt="logo di postman">
        <img class="tool" src="/img/vscode.svg" alt="logo di vscode">
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