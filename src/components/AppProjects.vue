<template>
  <section class="projects-section px-10">
    <div class="container">
      <h2 class="section-title">Alcuni progetti</h2>
      <div class="projects">
        <!-- start project card -->
        <div class="project-card">
          <div class="project-card__header">
            <img src="../../img/placeholder-img2.png">
          </div>
          <div class="projec-body"></div>
        </div>
        <!-- end project card -->
        <!-- start project card -->
        <div class="project-card">
          <div class="project-card__header">
            <img src="../../img/placeholder-img2.png">
          </div>
          <div class="projec-body"></div>
        </div>
        <!-- end project card -->
        <!-- start project card -->
        <div class="project-card">
          <div class="project-card__header">
            <img src="../../img/placeholder-img2.png">
          </div>
          <div class="projec-body"></div>
        </div>
        <!-- end project card -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.projects-section {
  padding-top: 60px;
  padding-bottom: 60px;

  .section-title {
    font-weight: normal;
    font-size: 42px;
    margin-bottom: 46px;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;

    .project-card {

      &__header {
        position: relative;
        img {
          object-fit: cover;
          height: 240px;
          width: 100%;
        }
      }
    }
  }
}
</style>