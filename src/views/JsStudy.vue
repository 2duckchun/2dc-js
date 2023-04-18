<template>
  <Page>
    <div class="container-jsstudy">
      <section class="section-jsstudy"></section>
      <article class="reference-jsstudy"></article>
    </div>
  </Page>
</template>

<script setup lang="ts">
import Page from '@/components/Page.vue'
</script>

<style scoped>
.container-jsstudy {
  padding-top: 70px;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.section-jsstudy {
  flex-basis: 75%;
  background-color: aqua;
}
.reference-jsstudy {
  flex-basis: 25%;
  background-color: tomato;
}

@media screen and (max-width: 1050px) {
  .container-jsstudy {
    flex-direction: column;
  }
  .section-jsstudy {
    flex-basis: 700px;
  }
  /* 수정해야함 */
  .reference-jsstudy {
    flex-basis: 100px;
  }
  /* 수정해야함 */
}
</style>
