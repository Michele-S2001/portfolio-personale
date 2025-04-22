<script>
export default {
  props: {
    project: {
      type: Object,
      required: true  
    }
  },
}
</script>

<template>
  <div class="project-card">
    <div class="project-card__header">
      <span class="name" role="heading" aria-level="3">{{ project?.name }}</span>
      <img :src="project?.imgPath" aria-hidden="true">
    </div>
    <div class="project-card__body">
      <div class="buttons">
        <a :href="project?.link" class="cta-github" target="_blank" aria-label="pagina github del progetto">
          <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
          Github
        </a>
        <button class="cta-description" @click="showProjDesc(i)" aria-label="piccola descrizione del progetto" :aria-expanded="project?.visible">
          Descrizione
          <font-awesome-icon icon="fa-solid fa-arrow-turn-down" />
        </button>
      </div>
      <div class="project-card__footer" :class="{ 'show' : project?.visible }">
        <p tabindex="0">{{ project?.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/vars' as *;

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
      height: 260px;
      width: 100%;
      box-shadow: 0px 1px 14px 2px rgba(255,106,0,0.83);
      margin-bottom: 20px;
    }
  }

  &__body {
    .buttons {
      gap: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .cta-github {
        @include ctaButton();
      }

      .cta-description {
        color: $white;
        padding: 0 10px;
        line-height: 34px;
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
      overflow-y: auto;
      opacity: 0;
      height: 0;
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>