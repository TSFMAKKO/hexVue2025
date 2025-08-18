<template>
    <!-- <h2>左方餐點</h2> -->
    <ul class="list-group">
        <li v-for="drink in drinks" :key="drink.id" class="list-group-item list-group-item-action" @click="addCart(drink)"
            style="cursor: pointer;">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ drink.name }}</h5>
                <small>${{ drink.price }}</small>
            </div>
            <p class="mb-1">{{ drink.description }}</p>
        </li>
    </ul>
</template>

<script setup>

import { ref, computed, inject } from 'vue';
// const data = inject("data");
const drinks = inject("drinks"); // 可以直接讀寫父層提供的 ref
const addCart = inject("addCart");
// const drinks = inject("drinks");
</script>


<style scoped></style>