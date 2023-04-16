<template>
  <section>
    <div class="container-main-first">
      <Page>
        <MainFirst />
      </Page>
    </div>
    <div class="container-main-second">
      <Page>
        <div class="container main component"></div>
      </Page>
    </div>
    <div class="container-main-third">
      <Page>
        <div class="container main component"></div>
      </Page>
    </div>
  </section>
</template>

<script setup lang="ts">
import Page from './Page.vue'
import MainFirst from '@/components/main/MainFirst.vue'
</script>

<style scoped>
.container-main-first {
  width: auto;
  height: 100vh;
  background-color: teal;
}

.container-main-second {
  width: auto;
  height: 100vh;
  background-color: wheat;
}

.container-main-third {
  width: auto;
  height: 100vh;
  background-color: hotpink;
}
</style>
