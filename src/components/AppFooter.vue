<template>
  <footer class="footer-section px-10">
    <div class="containe">
      <div class="contacts">
        <a class="icon" href="https://github.com/Michele-S2001" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
          <span>Michele-S2001</span>          
        </a>
        <a class="icon" href="https://www.linkedin.com/in/michele-serafini-08574b1b7/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
          <span>Michele Serafini</span>          
        </a>
        <a class="icon" href="mailto: serafini.michele01@gmail.com">
          <font-awesome-icon icon="fa-regular fa-envelope" size="2xl"/>
          <span>serafini.michele01@gmail.com</span>          
        </a>
        <a class="icon" href="https://www.instagram.com/myser2001/">
          <font-awesome-icon icon="fa-brands fa-instagram" size="2xl"/>
          <span>myser2001</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  
</script>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.footer-section {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: $grey;
  border-top: 2px solid $white;
  .contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;

    .icon {
      span {
        display: inline-block;
        margin-left: 13px;
      }
      transition: 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    & > .icon:hover {
      transform: scale(1.1);
    }
  }
}

@media (max-width: 410px) {
  .footer-section {
    .contacts {
      .icon {
        span {
          display: none;
        }
      }
    }
  }
}
</style>