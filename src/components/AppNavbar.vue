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
@use '../styles/partials/vars' as *;
.page-header {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  .navbar {
    backdrop-filter: blur(10px);
    display: flex;
    gap: 20px;
    padding: 20px 30px;
    border-radius: 40px;
    font-size: 21px;
    box-shadow: inset 0px 0px 8px 3px rgba($white, $alpha: 0.55);

    &__link {
      position: relative;
      transition: 0.2s ease-in;
      &:hover {
        color: $orange;

        a::before {
          width: 100%;
          transform-origin: right;
        }
      }

      a {
        line-height: 40px;
          &::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: $orange;
          transform-origin: left;
          transition: 0.2s ease-in;
        }
      }

      &:first-child {
        margin-right: auto;
      }
    }


  }
}

</style>