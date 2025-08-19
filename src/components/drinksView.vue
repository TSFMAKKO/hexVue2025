<template>
    <!-- <h2>左方餐點</h2> -->
    <!-- 動畫 -->
    <ul class="list-group">
        <transition-group name="collapse" tag="li">
            <li v-for="drink in drinks" :key="drink.id" class="list-group-item list-group-item-action"
                @click="addCart(drink)" style="cursor: pointer;">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ drink.name }}</h5>
                    <small>${{ drink.price }}</small>
                </div>
                <p class="mb-1 small text-start">{{ drink.description }}</p>
            </li>
        </transition-group>
    </ul>
</template>

<script setup>

import { ref, computed, inject } from 'vue';
// const data = inject("data");
const drinksData = inject("drinks"); // 可以直接讀寫父層提供的 ref
const addCart = inject("addCart");
// const drinks = inject("drinks");
const drinks = ref([])
// isLoading
const isLoading = inject("isLoading");

isLoading.value = true

drinksData.value.forEach((d, i) => {
    setTimeout(() => {
        drinks.value.push(d)
        if (i+1 === drinksData.value.length) {
            isLoading.value = false
        }

    }, 400 * i)

});
</script>


<style scoped></style>