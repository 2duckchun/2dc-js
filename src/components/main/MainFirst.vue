<template>
  <div class="container">
    <div class="main-first-welcome-container">
      <img :src="babyTurtle" alt="" :style="imgStyle" />
      <h2 class="main-first-title">
        자바스크립트를 배웁시다<br />
        자바스크립트는 내 밥줄입니다.
      </h2>
      <p class="main-fisrt-paragraph">여기엔 어쩌구 문구가 들어갈테죠</p>
    </div>
  </div>
  <div class="main-first-arrow" @click="$emit('goToNextView')">
    <i class="fa-solid fa-caret-down fa-beat-fade fa-2xl"></i>
  </div>
</template>

<script setup lang="ts">
import babyTurtle from '@/assets/baby-turtle.jpg'

const emit = defineEmits<{
  goToNextView: () => void
}>()

const imgStyle = {
  width: '50%',
  height: 'auto'
}
</script>

<style scoped>
.container {
  position: absolute;
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSansMedium';
}

.main-first-welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-first-arrow {
  position: absolute;
  bottom: 0;
}

.main-first-title {
  text-align: center;
  line-height: 3rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.main-first-arrow {
  left: 50%;
  transform: translateX(-50%);
  bottom: 3rem;
  cursor: pointer;
}
</style>
