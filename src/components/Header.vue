<template>
  <div class="header-container">
    <header class="font-old header">
      <h1 class="header-title">2DC</h1>
      <div ref="collapseContainer" class="header-collapse">
        <ul class="header-menu">
          <li>JS STUDY</li>
          <li>ALGO STUDY</li>
          <li>REPO</li>
          <li>COMMENT</li>
          <li>Not Use Yet</li>
        </ul>
        <div class="header-user">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
      <button class="header-toggle" @click="toggleHeaderMenu">
        <span class="ir_so">메뉴 토글</span>
        <i class="fa-solid fa-bars fa-xl"></i>
      </button>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const collapseContainer = ref<HTMLElement>()

const toggleHeaderMenu = () => {
  collapseContainer.value?.classList.toggle('active')
}
</script>

<style scoped>
/* layout */
.header-container {
  max-width: none;
  box-shadow: 0 4px 4px -4px var(--black);
}
.header {
  padding: 5px 1.5rem;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-collapse {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.header-user {
  display: flex;
}
.header-toggle {
  display: none;
}

/* style */
.header-title {
  padding-left: 1rem;
  font-size: 40px;
  color: var(--blue900);
}
.header-menu li {
  margin: 5px 10px;
  padding: 8px 15px;
  background-color: var(--grey300);
  border-radius: 7px;
  font-size: 1rem;
  cursor: pointer;
}
.header-menu li:hover {
  background-color: var(--blue200);
}
.header-user button {
  font-size: 1.2rem;
  padding: 10px 15px;
  margin: 5px 10px;
  border-radius: 7px;
  background-color: var(--blue200);
}
.header-user button:hover {
  background-color: var(--purple100);
}

@media screen and (max-width: 1050px) {
  .header,
  .header-collapse,
  .header-menu {
    flex-direction: column;
    height: auto;
    align-items: stretch;
  }
  .header {
    padding: 5px 0.5rem;
  }
  .header-title {
    text-align: left;
  }
  .header-collapse {
    margin: 0 auto;
    width: 95%;
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
  .header-collapse.active {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
  }
  .header-menu {
    margin-top: 15px;
  }
  .header-user {
    justify-content: center;
  }
  .header-toggle {
    display: block;
    position: absolute;
    right: 2rem;
    top: 1.2rem;
  }
}

@media screen and (min-width: 500px) {
  .header {
    margin: 0 auto;
    max-width: 475px;
  }
}
@media screen and (min-width: 600px) {
  .header {
    margin: 0 auto;
    max-width: 575px;
  }
}
@media screen and (min-width: 800px) {
  .header {
    margin: 0 auto;
    max-width: 775px;
  }
}
@media screen and (min-width: 1000px) {
  .header {
    margin: 0 auto;
    max-width: 950px;
  }
}
@media screen and (min-width: 1200px) {
  .header {
    margin: 0 auto;
    max-width: 1150px;
  }
}
@media screen and (min-width: 1400px) {
  .header {
    margin: 0 auto;
    max-width: 1350px;
  }
}
</style>
