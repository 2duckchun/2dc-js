<template>
  <header class="font-old header">
    <h1>2DC World</h1>
    <div class="header-collapse">
      <ul class="header-menu">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <div class="header-user">
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
}

.header-collapse {
  display: flex;
}

.header-menu {
  display: flex;
  background-color: teal;
}

.header-user {
  display: flex;
  background-color: tomato;
}

@media screen and (max-width: 1050px) {
  .header {
    flex-direction: column;
  }
  .header-collapse {
    max-height: 0px;
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.15s ease-out;
  }
  .header-collapse.active {
    max-height: 500px;
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.25s ease-in;
  }

  .header-menu {
    flex-direction: column;
  }
}
</style>
