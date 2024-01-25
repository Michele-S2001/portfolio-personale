<template>
  <section class="home px-10">
    <div class="container-sm">
      <div class="home__inner">
        <!-- left side -->
        <div class="description">
          <!-- saluti con nome -->
          <div class="presentation">
            <h1>Hi! I'm Michele Serafini</h1>
            <span>Full stack web-developer</span>
          </div>
          <!-- contatti -->
          <div class="contacts">
            <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
            <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
          </div>
        </div>

        <!-- right side -->
        <div class="thumbnail">
          <img src="../../img/Picsart_24-01-25_16-12-02-368-PhotoRoom.png-PhotoRoom.png" alt="Portfolio image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

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

      .presentation {
        h1 {
          font-size: 45px;
          margin-bottom: 24px;
        }

        span {
          font-size: 21px;
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