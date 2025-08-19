<template>
    <!-- <span>右側購物車</span> -->
    <div class="col-9">
        <!-- <h5 class="mb-3">右方購物車</h5> -->

        <!-- 購物車表格 -->
        <!-- 動畫 -->
        <transition-group name="collapse" tag="div">
            <table v-if="cart && cart.length > 0" class="table table-bordered table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>品項</th>
                        <th>描述</th>
                        <th>售價</th>
                        <th>數量</th>
                        <th>小記</th>
                        <th>刪除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="drink in cart" :key="drink.id">
                        <td>{{ drink.name }}</td>
                        <td>{{ drink.description }}</td>
                        <td>${{ drink.price }}</td>
                        <td>
                            <select class="form-select form-select-sm w-auto" @change="changeCount($event, drink.id)"
                                v-model="drink.count">
                                <option v-for="n in 10" :key="n" :value="n">
                                    {{ n }}
                                </option>
                            </select>
                        </td>
                        <td>${{ drink.price * drink.count }}</td>
                        <td>
                            <button class="btn btn-sm btn-danger" @click="delHandler(drink.id)">
                                刪除
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- 空購物車提示 -->
            <div v-else class="alert alert-warning">
                購物車目前是空的
            </div>
        </transition-group>
        <!-- 總計與備註 -->
        <div class="mt-3 d-flex justify-content-between align-items-center">
            <div><strong>總計:</strong> ${{ total }}</div>
            <div>
                <input type="text" class="form-control form-control-sm" placeholder="備註" v-model="description">
            </div>
            <button class="btn btn-primary btn-sm" @click="orderHandler">
                結帳
            </button>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, inject } from 'vue';
const cart = inject("cart");
const description = inject("description");
const changeCount = inject("changeCount"); // 可以直接讀寫父層提供的 ref
const delHandler = inject("delHandler");
const orderHandler = inject("orderHandler");
const total = inject("total");
// const drinks = inject("drinks");


</script>


<style scoped></style>