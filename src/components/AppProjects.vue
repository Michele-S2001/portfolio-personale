<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Dashboard',
          link: 'https://github.com/Michele-S2001/html-css-bootstrap-dashboard',
          imgPath: '../../img/projects/project-2.png',
          description: 'Una dashboard progettata per far pratica con bootstrap, costruendo quindi un gestionale con l\'aiuto di questo framework, gestendo le sue utility class per un layout responsive',
          visible: false
        },
        {
          name: 'Discord',
          link: 'https://github.com/Michele-S2001/htmlcss-discord',
          imgPath: '../../img/projects/project-3.png',
          description: 'Una replica di discord interamente in HTML e CSS plain',
          visible: false
        },
        {
          name: 'Spotify',
          link: 'https://github.com/Michele-S2001/html-css-spotifyweb',
          imgPath: '../../img/projects/project-5.png',
          description: 'Una replica della webapp di spotify che ci ha messo alla prova nella gestione dell\'overflow, del flexbox e il comportamento responsive del layout',
          visible: false
        },
        {
          name: 'Boolzapp',
          link: 'https://github.com/Michele-S2001/vue-boolzapp',
          imgPath: '../../img/projects/project-7.png',
          description: 'Una replica di WhatsApp web utilizzando HTML, CSS, JavaScript con il framework Vue.js. Vue.js utilizzato per gestire in maniera efficente  lo stato dell\'applicazione e fornire una migliore esperienza utente, come la dinamicità delle chat per ogni contatto.',
          visible: false
        },
        {
          name: 'Boolflix',
          link: 'https://github.com/Michele-S2001/vite-boolflix',
          imgPath: '../../img/projects/project-9.png',
          description: 'Sviluppo di una piattaforma di streaming video simile a Netflix, concentrandoci sull\'utilizzo di chiamate Axios per recuperare i dati dei film/serie-TV da un API di TMDB. Tutto questo utilizzando HTML, CSS, Axios, Vue.js e Node.js per creare una piattaforma reattiva alla ricerca dell\'utente',
          visible: false
        },
        {
          name: 'Deliveboo - TasteIT',
          link: 'https://github.com/Michele-S2001?tab=repositories&q=deliveboo&type=&language=&sort=',
          imgPath: '../../img/projects/project-10.png',
          description: 'Il progetto finale, contornato dall\'utilizzo di tutte le tecnologie e strumenti visti durante il corso boolean, un unione tra front-office con Vite (HTML, CSS, VUE) e back-office con Laravel (PHP, BOOTSTRAP), sviluppando le CRUD per il ristoratore autenticato e le API per una facile accessibilità ai dati da parte del cliente. Tutto rigorosamente riadattabile a qualsiasi viewport',
          visible: false
        },
      ],

      show: false
    }
  },

  methods: {
    showProjDesc(index) {
      this.projects[index].visible = !this.projects[index].visible
    }
  }
}

</script>

<template>
  <section id="projects" class="projects-section px-10">
    <div class="container">
      <h2 class="section-title">Alcuni progetti</h2>
      <div class="projects">
        <!-- start project card -->
        <div class="project-card" v-for="(project, i) in projects" :key="i">
          <div class="project-card__header">
            <span class="name">{{ project.name }}</span>
            <img :src="project.imgPath">
          </div>
          <div class="project-card__body">
            <div class="buttons">
              <a :href="project.link" class="cta-github" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
                Github
              </a>
              <button class="cta-description" @click="showProjDesc(i)">
                Description
                <font-awesome-icon icon="fa-solid fa-arrow-turn-down" />
              </button>
            </div>
            <div class="project-card__footer" :class="{ 'show' : project.visible }">
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
        <!-- end project card -->
      </div>
      <div class="github">
        <a href="https://github.com/Michele-S2001" target="_blank">My Github</a>
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
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 44px;

    .project-card {
      
      &__header {
        position: relative;
        .name {
          display: block;
          text-align: center;
          font-size: 24px;
          padding: 10px 0;
        }
        img {
          object-position: top;
          object-fit: cover;
          height: 240px;
          width: 100%;
          box-shadow: 0px 1px 14px 2px rgba(255,106,0,0.83);
          margin-bottom: 20px;
        }
      }

      &__body {
        .buttons {
          display: flex;
          justify-content: space-around;
          .cta-github {
            @include ctaButton();
          }

          .cta-description {
            color: $white;
            padding: 0 10px;
            &:hover {
              background-color: $white;
              color: $grey;
              
              border-radius: 14px;
            }
          }
        }
      }

      &__footer {
        &.show {
          p {
            opacity: 1;
            height: 230px;
            margin-top: 24px;
          }
        }
        p {
          overflow: auto;
          opacity: 0;
          height: 0;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  .github {
    text-align: center;
    font-size: 26px;
    &:hover {
      color: $orange
    }
  }
}
</style>