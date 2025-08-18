<template>
    <hr>
    <div class="container my-4" v-if="order.cart && order.cart.length > 0">
        <h5 class="mb-3">訂單</h5>
        <button @click="orderCancel">取消訂單</button>

        <!-- 備註與總計 -->
        <div class="mb-3 p-3 bg-light rounded">
            <p class="mb-1"><strong>備註:</strong> {{ order.description }}</p>
            <p class="mb-0"><strong>總計:</strong> ${{ order.total }}</p>
        </div>

        <!-- 訂單表格 -->
        <table class="table table-bordered table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th>品項</th>
                    <th>描述</th>
                    <th>售價</th>
                    <th>數量</th>
                    <th>小記</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="drink in order.cart" :key="drink.id">
                    <td>{{ drink.name }}</td>
                    <td>{{ drink.description }}</td>
                    <td>${{ drink.price }}</td>
                    <td>{{ drink.count }}</td>
                    <td>${{ drink.price * drink.count }}</td>
                </tr>
            </tbody>
        </table>

    </div>
    <div v-else class="alert alert-warning">
        購物車目前是空的
    </div>
</template>

<script setup>

import { ref, computed, inject } from 'vue';
// const data = inject("data");
const order = inject("order"); // 可以直接讀寫父層提供的 ref
const orderCancel = inject("orderCancel");
// const drinks = inject("drinks");
</script>


<style scoped></style>