<template>
  <div class="container">
    <div class="main-second-container">
      <h3>자바스크립트 기초</h3>
      <p>자바스크립트의 언어적 기초에 대해 탄탄히 익혀봅니다.</p>
    </div>
    <div class="main-second-container">
      <h3>기본 메서드 구현 및 실습</h3>
      <p>자바스크립트의 메서드를 구현해보고 웹 개발에 직접 활용해봅니다.</p>
    </div>
    <div class="main-second-container">
      <h3>알고리즘과 자료구조</h3>
      <p>자바스크립트로 알고리즘과 자료구조를 구현해봅니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-second-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.8s;
  width: 70%;
  height: 250px;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
}

.main-second-container h3 {
  font-size: 1.5rem;
  margin: 15px;
}

.main-second-container:nth-child(2n) {
  align-self: flex-end;
  justify-content: center;
}
</style>
