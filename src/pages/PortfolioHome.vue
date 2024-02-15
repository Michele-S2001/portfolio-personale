<template>
  <AppDefaulLayout>
    <section class="home px-10">
      <div class="container-sm">
        <div class="home__inner">
          <!-- left side -->
          <div class="description">
            <!-- saluti con nome -->
            <div class="presentation">
              <h1 class="presentation__main-title">Hi! I'm Michele Serafini</h1>
              <p class="presentation__job">Full stack web-developer</p>
            </div>
            <!-- contatti -->
            <div class="contacts">
              <a class="icon" href="https://github.com/Michele-S2001" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
              </a>
              <a class="icon" href="https://www.linkedin.com/in/michele-serafini-08574b1b7/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
              </a>
              <a class="icon" href="mailto: serafini.michele01@gmail.com">
                <font-awesome-icon icon="fa-regular fa-envelope" size="2xl"/>
              </a>
              <a class="icon" href="https://www.instagram.com/myser2001/">
                <font-awesome-icon icon="fa-brands fa-instagram" size="2xl"/>
              </a>
            </div>
          </div>

          <!-- right side -->
          <div class="thumbnail">
            <img src="../../img/Picsart_24-01-25_16-12-02-368-PhotoRoom.png-PhotoRoom.png" alt="Portfolio image">
          </div>
        </div>
      </div>
    </section>
  </AppDefaulLayout>
</template>

<script>
import AppDefaulLayout from '../layouts/AppDefaulLayout.vue';
  export default {
    components: {
      AppDefaulLayout
    }
  }
</script>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.home {
  padding-top: 100px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 0;
      user-select: none;

      .presentation {
        &__main-title {
          font-size: 45px;
          margin-bottom: 24px;
        }

        &__job {
          font-size: 21px;
          margin-bottom: 24px;
        }
      }

      .contacts {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;

        .icon {
          &:hover {
            color: $orange;
          }
        }
      }
    }

    .thumbnail img {
      border-radius: 200px;
    }
  }
}

@media (max-width: 768px) {
  .home {

    &__inner {
      display: block;

      .thumbnail img {
        margin: 0 auto;
        max-height: 400px;
      }
    }
  }
}


</style>