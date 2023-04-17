<template>
  <section>
    <div class="container-main-first">
      <Page>
        <MainFirst @goToNextView="goToNextView" />
      </Page>
    </div>
    <div ref="secondMainView" class="container-main-second">
      <Page>
        <MainSecond></MainSecond>
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
import { ref } from 'vue'
import Page from './Page.vue'
import MainFirst from '@/components/main/MainFirst.vue'
import MainSecond from '@/components/main/MainSecond.vue'
const secondMainView = ref()

const goToNextView = () => {
  const targetY = secondMainView.value.getBoundingClientRect().top + window.pageYOffset - 70
  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.container-main-first {
  width: auto;
  height: 100vh;
  background-color: var(--greyOpacity100);
}

.container-main-second {
  width: auto;
  height: calc(100vh - 70px);
  background-color: var(--greyOpacity300);
}

.container-main-third {
  width: auto;
  height: calc(100vh - 70px);
  background-color: var(--greyOpacity500);
}
</style>
