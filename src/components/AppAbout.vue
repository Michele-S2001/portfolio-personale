<template>
  <section id="about" class="about-section px-10 animated-fade-in">
    <div class="container">
      <div class="about grid">
        <h2 class="about__title">
          Ab<span>out</span> 
        </h2>
        <div class="about__text">
          Ciao! Sono Michele, uno sviluppatore formato come full-stack con una grande passione per la tecnologia e la programmazione. Dopo aver mosso i primi passi da neofita, oggi lavoro con entusiasmo presso TOP Consulting & Services srl, dove mi occupo principalmente dello sviluppo front-end. Ogni giorno è un'occasione per imparare, migliorare e affrontare nuove sfide. Credo fortemente che nella tecnologia non si smetta mai di crescere: per questo mantengo una mentalità aperta, curiosa e sempre pronta a mettersi in gioco.
        </div>
      </div>
      <div class="cv-download">
        <a class="cs-button" target="_blank" href="file/Michele-Serafini-CV.pdf">Scarica il mio CV</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/vars' as *;
.about-section {
  padding-top: 80px;
  padding-bottom: 80px;

  .about {
    margin-bottom: 60px;
    &__title {
      grid-column: 1 / 5;
      padding-top: 20px;
      font-size: clamp(46px, 6vw, 70px);
      font-weight: normal;

      span {
        color: $orange;
      }
    }

    &__text {
      grid-column: 5 / 13;
      font-size: 21px;
      text-align: right;
    }
  }

  .cv-download {
    display: flex;
    justify-content: center;
    .cs-button {
      font-size: 21px;
      @include ctaButton();
    }
    text-align: center;
  }
}

@media (max-width: 768px) {
  .about-section {
    .about {
      &__title {
        text-align: center;
        padding-bottom: 34px;
        grid-column: 1 / -1;
      }

      &__text {
        grid-column: 1 / -1;
        text-align: center;
      }
    }
  }
}
</style>