<template>
  <section id="about" class="about-section px-10">
    <div class="container">
      <div class="about grid">
        <div class="about__title">
          About
        </div>
        <div class="about__text">
          Salve a tutti, sono Michele Serafini Jr., un appassionato Full Stack Web Developer che ha appena fatto il suo ingresso nel mondo dello sviluppo. Sono qui con grande entusiasmo e determinazione per imparare e crescere. Con una mentalità aperta e la voglia di affrontare nuove sfide, non vedo l'ora di mettermi alla prova e contribuire al mondo della tecnologia. Grazie per la visita sul mio primo e semplice portfolio online !
        </div>
      </div>
      <div class="cv-download">
        <a class="cs-button" target="_blank" href="file/Michele_Serafini_CV.pdf">Scarica il mio CV</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
.about-section {
  padding-top: 80px;
  padding-bottom: 50px;

  .about {
    margin-bottom: 60px;
    &__title {
      grid-column: 1 / 5;
      padding-top: 20px;
      font-size: clamp(46px, 6vw, 70px);
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