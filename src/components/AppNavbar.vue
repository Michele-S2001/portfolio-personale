<script>
export default {
  data() {
    return {
      showOffCanvas: false
    }
  },

  methods: {
    scrollTo(element) {
      const targetElement = document.getElementById(`${element}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    },

    showCanvas() {
      this.showOffCanvas = true;
    },

    hideCanvas() {
      this.showOffCanvas = false;
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
        <div class="navbar__link toHide">
          <a @click="scrollTo('about')">About</a>
        </div>
        <div class="navbar__link toHide">
          <a @click="scrollTo('technologies')">Tecnologie</a>
        </div>
        <div class="navbar__link toHide">
          <a @click="scrollTo('projects')">Progetti</a>
        </div>
        <div class="hamburger" @click="showCanvas">
          <font-awesome-icon icon="bars" />
        </div>
      </nav>
    </div>
    <div class="offCanvas" :class="{'show' : showOffCanvas}">
      <font-awesome-icon icon="x" size="xl" @click="hideCanvas" class="x"/>
      <div class="links">
        <a @click="scrollToTop()">&lt;/&gt;</a>
        <a @click="scrollTo('about')">About</a>
        <a @click="scrollTo('technologies')">Tecnologie</a>
        <a @click="scrollTo('projects')">Progetti</a>
      </div>
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
    background-color: rgba($grey, $alpha: 0.6);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
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

    .hamburger {
      display: none;
      cursor: pointer;
    }

  }
  .offCanvas {
    display: none;
    transform: translateX(670px) rotate(-10deg);
    padding-top: 30px;
    padding-right: 40px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 70vw;
    text-align: right;
    backdrop-filter: blur(20px);
    background-color: rgba($grey, $alpha: 0.6);
    transition: 0.5s ease-in;

    .x {
      cursor: pointer;
    }

    .links {
      padding-top: 24px;
      line-height: 64px;
      font-size: 24px;
      & > * {
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 768px) {
  .page-header {
    .navbar {

      &__link.toHide {
        display: none;
      }
      .hamburger {
        display: block;
      }
    }

    .offCanvas {
      display: block;

      &.show {
        transform: translateX(0);
      }
    }
  }
}
</style>