<template>
  <header class="font-old">
    <nav class="navbar">
      <h1 class="logo-header">&lt; 2DC JS /&gt;</h1>
      <ul ref="navBarMenu" class="navbar-menu">
        <li>JS STUDY</li>
        <li>GITHUB</li>
        <li>COMMENT</li>
        <li>Not Use Yet</li>
      </ul>
      <div ref="loginMenu" class="login-container">
        <button>Login</button>
        <button>SignUp</button>
      </div>
      <button class="navbar-togglebtn" @click="onClickToggle">
        <i class="fa-solid fa-bars" style="color: #000000"></i>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navBarMenu = ref<HTMLElement>()
const loginMenu = ref<HTMLElement>()

const onClickToggle = () => {
  navBarMenu.value?.classList.toggle('active')
  loginMenu.value?.classList.toggle('active')
}
</script>

<style scoped>
.navbar {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px 24px;
}

.logo-header {
  font-size: 25px;
}

.login-container {
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
}

.login-container button {
  padding: 6px 13px;
  color: var(--vt-c-white-soft);
  background-color: var(--vt-c-black-soft);
}

.login-container button:first-child {
  margin-right: 25px;
  background-color: var(--header-bg-color);
  color: var(--vt-c-black-soft);
}

.navbar-menu {
  width: 500px;
  display: flex;
  justify-content: space-around;
  transition: 0.5s;
}

.navbar-menu li {
  padding: 6px 13px;
  border-radius: 8px;
  background-color: var(--header-bg-color);
}

.navbar-togglebtn {
  display: none;
}

@media screen and (max-width: 1050px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-menu {
    max-height: 0px;
    display: none;
  }

  .navbar-menu.active {
    max-height: fit-content;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .navbar-menu li {
    width: 50%;
    margin: 5px;
    text-align: center;
  }

  .login-container {
    display: none;
    transition: 0.5s;
  }

  .login-container.active {
    width: 100%;
    margin-top: 15px;
    justify-content: center;
    display: flex;
  }

  .navbar-togglebtn {
    position: absolute;
    display: block;
    right: 25px;
    top: 20px;
  }
}
</style>
