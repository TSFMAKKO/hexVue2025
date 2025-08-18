<style scoped>
#loading-overlay {
    position: fixed;
    /* 全螢幕固定 */
    top: 0;
    left: 0;
    width: 100vw;
    /* 全螢幕寬 */
    height: 100vh;
    /* 全螢幕高 */
    background: rgba(0, 0, 0, 0.7);
    /* 半透明背景 */
    z-index: 9999;
    /* 蓋在最上層 */
    backdrop-filter: blur(2px);
    /* 背景模糊 */
    -webkit-backdrop-filter: blur(2px);
    /* Safari 相容 */
}
</style>
<template>
    <!-- 全螢幕 Loading 遮罩 -->
    <div v-if="isLoading" id="loading-overlay" class="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- 全螢幕載入器 -->
    <!-- <div class="fullscreen-loader" id="fullscreenLoader">
        <div class="loading-text">載入中...</div>
        <div class="loading-subtext">請稍候，正在準備內容</div>
        
        <div class="sk-wave-large">
            <div class="sk-rect sk-rect1"></div>
            <div class="sk-rect sk-rect2"></div>
            <div class="sk-rect sk-rect3"></div>
            <div class="sk-rect sk-rect4"></div>
            <div class="sk-rect sk-rect5"></div>
            <div class="sk-rect sk-rect6"></div>
        </div>

        <div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>
        <div class="progress-text" id="progressText">0%</div>
    </div> -->
</template>

<script setup>
// isLoading

import { ref, computed, inject } from 'vue';
// const data = inject("data");
const isLoading = inject("isLoading"); // 可以直接讀寫父層提供的 ref
// const orderCancel = inject("orderCancel");
</script>