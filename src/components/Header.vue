<template>
  <header class="font-old">
    <div class="container-header">
      <h1 class="h1-header">&lt; 2DC JS /&gt;</h1>
      <ul class="ul-header">
        <li>CURRICULUM</li>
        <li>GITHUB</li>
        <li>COMMENT</li>
        <li>Not Use Yet</li>
      </ul>
      <div class="container-login">
        <button>Login</button>
        <button>SignUp</button>
      </div>
      <button class="menu-header"><i class="fa-solid fa-bars" style="color: #000000"></i></button>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.container-header {
  width: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container-login {
  width: 200px;
  display: flex;
  justify-content: flex-start;
}

.container-login button {
  padding: 6px 13px;
  color: var(--vt-c-white-soft);
  background-color: var(--vt-c-black-soft);
}

.container-login button:first-child {
  margin-right: 25px;
  background-color: var(--header-bg-color);
  color: var(--vt-c-black-soft);
}

.h1-header {
  font-size: 25px;
}

.ul-header {
  width: 500px;
  display: flex;
  justify-content: space-around;
}

li {
  padding: 6px 13px;
  border-radius: 8px;
  background-color: var(--header-bg-color);
}

.menu-header {
  position: absolute;
  right: calc(25px);
}

@media screen and (min-width: 1050px) {
  .menu-header {
    display: none;
  }
}

@media screen and (max-width: 1050px) {
  .ul-header {
    flex-direction: column;
  }
  .ul-header,
  .container-login {
  }
}
</style>
