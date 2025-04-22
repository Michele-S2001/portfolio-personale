<script>
export default {
  data() {
    return {
      tecnologiesData: [
        { 
          path: "/img/html.png", 
          altText: "logo di HTML5" 
        },
        { 
          path: "/img/css.png", 
          altText: "logo di CSS" 
        },
        { 
          path: "/img/js.png", 
          altText: "logo javascript" 
        },
        { 
          path: "/img/ts-logo.png", 
          altText: "logo di typescript" 
        },
        { 
          path: "/img/laravel.svg", 
          altText: "logo di laravel" 
        },
        { 
          path: "/img/mysql.svg", 
          altText: "logo di mysql" 
        },
        { 
          path: "/img/php.png", 
          altText: "logo di php" 
        },
        { 
          path: "/img/sass.png", 
          altText: "logo di sass" 
        },
        { 
          path: "/img/vitejs.svg", 
          altText: "logo di vite" 
        },
        { 
          path: "/img/vue.svg", 
          altText: "logo vue" 
        },
        { 
          path: "/img/react-logo.png", 
          altText: "logo di react" 
        },
        { 
          path: "/img/bootstrap.png", 
          altText: "logo di bootstrap" 
        },
        { 
          path: "/img/git.png", 
          altText: "logo di git" 
        },
        { 
          path: "/img/github.svg", 
          altText: "logo di github" 
        },
        { 
          path: "/img/microsoft.svg", 
          altText: "logo di microsoft" 
        },
        { 
          path: "/img/postman.svg", 
          altText: "logo di postman" 
        },
        { 
          path: "/img/vscode.svg", 
          altText: "logo di vscode" 
        }
      ]
    }
  }
}
</script>

<template>
  <section id="technologies" class="technologies-section px-10 animated-fade-in">
    <div class="container">
      <h2>Tecn<span>olo</span>gie</h2>
      <div class="tools" role="group">
        <img v-for="tcn in tecnologiesData" :key="tcn.path" :src="tcn.path" :alt="tcn.altText" class="tool">
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