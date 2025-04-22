<script>
const basePath = import.meta.env.BASE_URL;

export default {
  data() {
    return {
      tecnologiesData: [
        { 
          path: `${basePath}img/html.png`, 
          altText: "logo di HTML5" 
        },
        { 
          path: `${basePath}img/css.png`, 
          altText: "logo di CSS" 
        },
        { 
          path: `${basePath}img/js.png`, 
          altText: "logo javascript" 
        },
        { 
          path: `${basePath}img/ts-logo.png`, 
          altText: "logo di typescript" 
        },
        { 
          path: `${basePath}img/vue.svg`, 
          altText: "logo vue" 
        },
        { 
          path: `${basePath}img/react-logo.png`, 
          altText: "logo di react" 
        },
        { 
          path: `${basePath}img/vitejs.svg`, 
          altText: "logo di vite" 
        },
        {
          path: `${basePath}img/nuxt.svg`,
          altText: "logo di nuxt"
        },
        { 
          path: `${basePath}img/bootstrap.png`, 
          altText: "logo di bootstrap" 
        },
        { 
          path: `${basePath}img/sass.png`, 
          altText: "logo di sass" 
        },
        {
          path: `${basePath}img/tailwindcss.svg`,
          altText: "logo tailwind"
        },
        { 
          path: `${basePath}img/laravel.svg`, 
          altText: "logo di laravel" 
        },
        { 
          path: `${basePath}img/mysql.svg`, 
          altText: "logo di mysql" 
        },
        { 
          path: `${basePath}img/php.png`, 
          altText: "logo di php" 
        },
        { 
          path: `${basePath}img/git.png`, 
          altText: "logo di git" 
        },
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