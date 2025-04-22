<script>
export default {
  data() {
    return {
      showOffCanvas: false,
      linksData: [
        {
          gotToFn: () => this.scrollToTop(),
          ariaText: "Torna all'inizio della pagina",
          content: '</>'
        },
        {
          gotToFn: () => this.scrollTo('about'),
          ariaText: "Vai alla sezione about",
          content: "About",
          customClass: "toHide"
        },
        {
          gotToFn: () => this.scrollTo('technologies'),
          ariaText: "Vai alla sezione tecnologie",
          content: "Tecnologie",
          customClass: "toHide"
        },
        {
          gotToFn: () => this.scrollTo('projects'),
          ariaText: "Vai alla sezione progetti",
          content: "Progetti",
          customClass: "toHide"
        },
      ]
    }
  },

  methods: {
    scrollTo(element) {
      const targetElement = document.getElementById(`${element}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        this.showOffCanvas = false;
      }
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth'});
      this.showOffCanvas = false;
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
        <div 
          v-for="navLink in linksData" :key="navLink.content"
          class="navbar__link"
          :class="navLink?.customClass"
          tabindex="0"
        >
        	<a @click="navLink.gotToFn">{{ navLink.content }}</a>
        </div>
        <div 
          :aria-expanded="showOffCanvas"
          role="button" 
          class="hamburger" 
          @click="showCanvas" 
          aria-label="menu laterale" 
          tabindex="0">
          <font-awesome-icon icon="bars" />
        </div>
      </nav>
    </div>
    <div class="outer-offCanvas" :class="{'show' : showOffCanvas}">
      <div class="overlay" @click="hideCanvas" aria-hidden="true"></div>
      <nav class="offCanvas" aria-label="laterale">
        <font-awesome-icon icon="x" size="xl" @click="hideCanvas" class="x"/>
        <ul class="links">
          <li v-for="link in linksData" :key="link.content">
            <a @click="link.gotToFn">{{ link.content }}</a>
          </li>        
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.page-header {
  position: sticky;
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

  .outer-offCanvas {
    transition: 0.6s cubic-bezier(0.215, 0.610, 0.355, 1);
    display: none;
    position: fixed;
    inset: 0;
    transform: translateX(730px);

    .overlay {
      height: 100%;
      width: 20vw;
      display: none;
    }
    .offCanvas {
      z-index: 5;
      padding-top: 30px;
      padding-right: 40px;
      height: 100%;
      width: 80vw;
      text-align: right;
      backdrop-filter: blur(20px);
      background-color: rgba($grey, $alpha: 0.6);
      transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      
      .x {
        cursor: pointer;
      }
  
      .links {
        padding-top: 24px;
        line-height: 64px;
        font-size: 24px;
        
        & > * {
          cursor: pointer;
          &:hover, &:active {
            color: $orange;
          }
        }
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

    .outer-offCanvas {
      display: flex;

      .overlay {
        display: block;
        order: 1;
      }
      .offCanvas {
        order: 2;
      }
      &.show {
        transform: translateX(0);
      }
    }
  }
}
</style>