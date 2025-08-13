<script setup>
import { ref, computed } from 'vue'
let Menu = ref([
  { Name: '珍珠奶茶', Describe: '香濃奶茶搭配QQ珍珠', Price: '50', Stock: 20 },
  { Name: '冬瓜檸檬', Describe: '清新冬瓜配上新鮮檸檬', Price: '45', Stock: 15 },
  { Name: '翡翠檸檬', Describe: '綠茶與檸檬的完美結合', Price: '55', Stock: 30 },
  { Name: '四季春茶', Describe: '香醇四季春茶，回甘無比', Price: '45', Stock: 10 },
  { Name: '阿薩姆奶茶', Describe: '阿薩姆紅茶搭配香醇鮮奶', Price: '50', Stock: 25 },
  { Name: '檸檬冰茶', Describe: '檸檬與冰茶的清新組合', Price: '45', Stock: 20 },
  { Name: '芒果綠茶', Describe: '芒果與綠茶的獨特風味', Price: '55', Stock: 18 },
  { Name: '抹茶拿鐵', Describe: '抹茶與鮮奶的絕配', Price: '60', Stock: 20 },
])

function StockAdd(drink) {
  drink.Stock += 1
}

function StockSub(drink) {
  if (drink.Stock > 0) {
    drink.Stock -= 1
  }
}

const Temp = ref(null)
Menu.value = Menu.value.map(item => {
  return { ...item, Edit: item.Edit || false }
})



const EditName = (drink) => {
  console.log("EditName")

  console.log("drink:", drink)
  Temp.value = drink.Name
  console.log("Temp.value", Temp.value)
  drink.Edit = true
  console.log("drink.Edit", drink.Edit, Menu.value);

}

const CompEdit = (drink) => {
  drink.Edit = false
}
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">飲料菜單</h2>
    <table>
      <thead>
        <tr>
          <th>品項</th>
          <th>描述</th>
          <th>價格</th>
          <th>庫存</th>
        </tr>
      </thead>

      <tr v-for="Drink in Menu" :key="Drink.Name">
        <td>
          <div v-if="!Drink.Edit">
            <button @click="EditName(Drink)">編輯</button>
            {{ Drink.Name }}
          </div>
          <div v-else>
            <button @click="CompEdit(Drink)">確定</button>
            <input type="text" v-model="Drink.Name" />
          </div>
        </td>
        <td>{{ Drink.Describe }}</td>
        <td>{{ Drink.Price }}</td>
        <td>
          <button @click="StockSub(Drink)">-</button>
          {{ Drink.Stock }}
          <button @click="StockAdd(Drink)">+</button>
        </td>
      </tr>

    </table>
  </div>
</template>