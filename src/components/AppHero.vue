<script>
  export default {
    
  }
</script>

<template>
  <section class="hero px-10">
    <div class="container-sm">
      <div class="hero__inner grid">
        <!-- left side -->
        <div class="description">
          <!-- saluti con nome -->
          <div class="presentation">
            <h1 class="presentation__main-title">Ciao! Sono <span>Michele</span> Serafini</h1>
            <p class="presentation__job">Full-Stack Web Developer</p>
          </div>
          <!-- contatti -->
          <div class="contacts">
            <a 
              class="icon" 
              href="https://github.com/Michele-S2001" 
              target="_blank"
              aria-label="profilo github">
              <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
            </a>
            <a 
              class="icon" 
              href="https://www.linkedin.com/in/michele-serafini-08574b1b7/" 
              target="_blank"
              aria-label="profilo linkedin">
              <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
            </a>
            <a 
              class="icon" 
              href="mailto: serafini.michele01@gmail.com"
              aria-label="email">
              <font-awesome-icon icon="fa-regular fa-envelope" size="2xl"/>
            </a>
            <a 
              class="icon" 
              href="https://www.instagram.com/myser2001/" 
              target="_blank"
              aria-label="profilo instagram">
              <font-awesome-icon icon="fa-brands fa-instagram" size="2xl"/>
            </a>
          </div>
        </div>

        <!-- right side -->
        <div class="thumbnail">
          <img src="/img/Picsart_24-01-25_16-12-02-368-PhotoRoom.png-PhotoRoom.png" alt="Foto del volto di michele serafini, con un effetto particolare applicato ad essa">
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.hero {
  padding-top: 100px;
  padding-bottom: 150px;

  &__inner {

    .description {
      grid-column: 1 / 7;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 0;
      user-select: none;

      .presentation {
        &__main-title {
          font-size: 45px;
          margin-bottom: 24px;
          span {
            color: $orange;
          }
        }

        &__job {
          font-size: 21px;
          margin-bottom: 24px;
        }
      }

      .contacts {
        display: flex;
        flex-wrap: wrap;
        gap: 34px;
        font-size: 24px;

        .icon {
          &:hover {
            color: $orange;
          }
        }
      }
    }

    .thumbnail {
      grid-column: 7 / 13;
      img {
        border-radius: 200px;
      }
    } 
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
    padding-bottom: 100px;

    &__inner {
      .description {
        grid-column: 1 / -1;
      }
      .thumbnail {
        grid-column: 1 / -1;
        img {
          margin: 0 auto;
          max-height: 400px;
        }
      } 
    }
  }
}
</style>