<template>
  <header class="page-header px-10">
    <div class="container">
      <nav class="navbar">
        <div class="navbar__link">
          <a href="#">Home</a>
        </div>
        <div class="navbar__link">
          <a href="#">About</a>
        </div>
        <div class="navbar__link">
          <a href="#">Projects</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

.page-header {

  .navbar {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    font-size: 21px;

    &__link a {
      line-height: 50px;
    }

    &__link:first-child {
      margin-right: auto;
    }
  }
}

</style>