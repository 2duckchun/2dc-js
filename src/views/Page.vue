<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@media screen and (min-width: 1200px) {
  .page {
    margin: 0 auto;
    max-width: 1100px;
    background-color: tomato;
  }
}

@media screen and (min-width: 1400px) {
  .page {
    margin: 0 auto;
    max-width: 1250px;
    background-color: aquamarine;
  }
}
</style>
