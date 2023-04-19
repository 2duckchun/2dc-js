<template>
  <Page>
    <div class="container-jsstudy">
      <section class="section-jsstudy">
        <div class="card">제목, 그림, 클릭시 링크 어디로 보낼지 등등을 프롭스로 전달</div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </section>
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
.card {
  margin: 15px;
  width: auto;
  height: 250px;
  background-color: aquamarine;
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
