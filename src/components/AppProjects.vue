<script>
import UIProjectCard from "../components/UI/ProjectCard.vue"

const basePath = import.meta.env.BASE_URL;

export default {
  data() {
    return {
      projects: [
        {
          name: 'Weather-app',
          link: 'https://github.com/Michele-S2001/react-weather-app',
          imgPath: `${basePath}img/project-12.png`,
          description: 'La mia web app meteo offre agli utenti un modo semplice e intuitivo per controllare le previsioni del tempo in qualsiasi parte del mondo...',
          visible: false
        },
        {
          name: 'Todo-list',
          link: 'https://github.com/Michele-S2001/react-todo-list',
          imgPath: `${basePath}img/project-11.png`,
          description: 'Questa è una semplice applicazione To-Do List sviluppata in React...',
          visible: false
        },
        {
          name: 'TasteIT',
          link: 'https://github.com/Michele-S2001?tab=repositories&q=deliveboo&type=&language=&sort=',
          imgPath: `${basePath}img/project-10.png`,
          description: 'Il progetto finale con Boolean...',
          visible: false
        },
        {
          name: 'Spotify',
          link: 'https://github.com/Michele-S2001/html-css-spotifyweb',
          imgPath: `${basePath}img/project-5.png`,
          description: 'Una replica della webapp di Spotify...',
          visible: false
        },
        {
          name: 'Boolzapp',
          link: 'https://github.com/Michele-S2001/vue-boolzapp',
          imgPath: `${basePath}img/project-7.png`,
          description: 'Una replica di WhatsApp Web con Vue.js...',
          visible: false
        },
        {
          name: 'Boolflix',
          link: 'https://github.com/Michele-S2001/vite-boolflix',
          imgPath: `${basePath}img/project-9.png`,
          description: 'Una piattaforma di streaming simile a Netflix...',
          visible: false
        },
      ],
      show: false
    }
  },

  components: {
    UIProjectCard
  },

  methods: {
    showProjDesc(index) {
      this.projects[index].visible = !this.projects[index].visible
    }
  }
}
</script>


<template>
  <section id="projects" class="projects-section px-10 animated-fade-in">
    <div class="container">
      <h2 class="section-title"><span>Alcuni</span> progetti</h2>
      <div class="projects">
        <UIProjectCard v-for="prj in projects" :project="prj" :key="prj.link" />
      </div>
      <div class="github">
        <a href="https://github.com/Michele-S2001" target="_blank">Il mio Github</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/vars' as *;
.projects-section {
  padding-top: 100px;
  padding-bottom: 100px;

  .section-title {
    font-weight: normal;
    font-size: 42px;
    margin-bottom: 46px;
    span {
      color: $orange;
    }
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 44px;
  }

  .github {
    text-align: center;
    font-size: 26px;
    &:hover {
      color: $orange
    }
  }
}

@media (max-width: 350px) {

  .projects-section {
    .projects {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

}

</style>