<template>
  <header class="font-old">
    <div class="container-header">
      <h1>&lt; 2DC JS /&gt;</h1>
      <ul>
        <li>CURRICULUM</li>
        <li>GITHUB</li>
        <li>COMMENT</li>
        <li>Not Use Yet</li>
      </ul>
      <div class="container-login">
        <button>Login</button>
        <button>SignUp</button>
      </div>
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
  width: calc(100% - 100px);
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
}

.container-login button:first-child {
  margin-right: 25px;
}

h1 {
  font-size: 25px;
}

ul {
  width: 500px;
  display: flex;
  justify-content: space-around;
}

li {
  padding: 6px 13px;
  border-radius: 8px;
  background-color: var(--text-bg-color);
}
</style>
