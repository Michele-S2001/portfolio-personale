<script>
export default {
  methods: {
    scrollTo(element) {
      const targetElement = document.getElementById(`${element}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    }
  }
}

</script>

<template>
  <header class="page-header px-10">
    <div class="container">
      <nav class="navbar">
        <div class="navbar__link">
          <a @click="scrollToTop()">&lt;/&gt;</a>
        </div>
        <div class="navbar__link">
          <a @click="scrollTo('about')">About</a>
        </div>
        <div class="navbar__link">
          <a @click="scrollTo('projects')">Projects</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.page-header {
  position: fixed;
  top: 6px;
  left: 0;
  right: 0;
  z-index: 99;
  .navbar {
    backdrop-filter: blur(10px);
    display: flex;
    gap: 20px;
    padding: 20px 30px;
    border-radius: 40px;
    font-size: 21px;
    box-shadow: inset 0px 0px 8px 3px rgba($white, $alpha: 0.55);

    &__link {
      cursor: pointer;
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
        line-height: 34px;
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