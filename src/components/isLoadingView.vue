<template>
  <!-- 全螢幕 Loading 遮罩 -->
  <div v-if="isLoading" id="loading-overlay" class="d-flex justify-content-center align-items-center">
    <div class="wave-loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
#loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;   /* 全螢幕寬 */
  height: 100vh;  /* 全螢幕高 */
  background: rgba(0, 0, 0, 0.7); /* 半透明黑底 */
  z-index: 9999;  /* 蓋在最上層 */
  backdrop-filter: blur(2px);      /* 背景模糊 */
  -webkit-backdrop-filter: blur(2px);
}

/* 波浪容器 */
.wave-loading {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 50px;
}

/* 六條波浪 */
.wave-loading span {
  display: block;
  width: 6px;
  height: 100%;
  background: #28a745; /* 綠色 */
  border-radius: 3px;
  animation: wave 1.2s infinite ease-in-out;
}

/* 六條依序延遲 */
.wave-loading span:nth-child(1) { animation-delay: 0s; }
.wave-loading span:nth-child(2) { animation-delay: 0.1s; }
.wave-loading span:nth-child(3) { animation-delay: 0.2s; }
.wave-loading span:nth-child(4) { animation-delay: 0.3s; }
.wave-loading span:nth-child(5) { animation-delay: 0.4s; }
.wave-loading span:nth-child(6) { animation-delay: 0.5s; }

/* 動畫關鍵幀 */
@keyframes wave {
  0%, 40%, 100% { transform: scaleY(0.3); }
  20% { transform: scaleY(1); }
}
</style>

<script setup>
// isLoading

import { ref, computed, inject } from 'vue';
// const data = inject("data");
const isLoading = inject("isLoading"); // 可以直接讀寫父層提供的 ref
// const orderCancel = inject("orderCancel");
</script>