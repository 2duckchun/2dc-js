<template>
  <div class="card">
    <h3>{{ props.moduleTitle }}</h3>
    <p>{{ props.moduleIntro }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  moduleTitle: {
    type: String,
    required: true
  },
  moduleImage: {
    type: String,
    required: true
  },
  moduleRoute: {
    type: String,
    required: true
  },
  moduleIntro: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  margin: 15px;
  width: auto;
  height: 250px;
  background-color: aquamarine;
}
</style>
