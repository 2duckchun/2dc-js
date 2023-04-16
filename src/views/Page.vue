<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  background-color: white;
  height: inherit;
  position: relative;
}

@media screen and (min-width: 500px) {
  .page {
    margin: 0 auto;
    max-width: 450px;
  }
}

@media screen and (min-width: 600px) {
  .page {
    margin: 0 auto;
    max-width: 550px;
  }
}

@media screen and (min-width: 800px) {
  .page {
    margin: 0 auto;
    max-width: 750px;
  }
}

@media screen and (min-width: 1000px) {
  .page {
    margin: 0 auto;
    max-width: 950px;
  }
}

@media screen and (min-width: 1200px) {
  .page {
    margin: 0 auto;
    max-width: 1150px;
  }
}

@media screen and (min-width: 1400px) {
  .page {
    margin: 0 auto;
    max-width: 1350px;
  }
}
</style>
