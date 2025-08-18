<template>
  <div>
    <h1>作業</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
      <td>珍珠奶茶</td>
      <td><small>香濃奶茶搭配QQ珍珠</small></td>
      <td>50</td>
      <td><button>-</button>20<button>+</button></td>
    </tr> -->

        <tr v-for="item in data" :key="item.id">
          <td @dblclick="handleDrink(item.id)">
            <div :class="{ hidden: item.edit }">
              {{ item.name }}
            </div>
            <!-- 使用 v-bind 屬於 資料流向dom -->
            <div class="edit" v-if="item.edit">
              <input type="text" v-model="tempName" @keydown.enter="handleDrinkName2(item.id)">
              <button @click="handleDrinkCancel(item.id)">取消</button>
              <!-- <button @click="handleDrinkSave(item.id)">儲存</button> -->
            </div>
          </td>
          <td><small>{{ item.description }}</small></td>
          <td>{{ item.price }}</td>
          <td><button @click="handleDrinkStock(item.id, item.stock - 1)">-</button>
            {{ item.stock }}
            <button @click="handleDrinkStock(item.id, item.stock + 1)">+</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.hidden {
  display: none;
}

table{
  width: 90%;
  margin: 0 auto;
}
</style>
<script setup>
import { ref } from 'vue';

const tempName = ref('')

const data = ref([
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50,
    "stock": 20
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45,
    "stock": 15
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55,
    "stock": 30
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45,
    "stock": 10
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50,
    "stock": 25
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45,
    "stock": 20
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55,
    "stock": 18
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60,
    "stock": 20
  }
]);

data.value = data.value.map(item => {
  return { ...item, Edit: item.Edit || false }
})


function handleDrinkStock(id, stock) {
  data.value.map(itme => {
    if (itme.id === id) {
      itme.stock = stock
      return itme
    }
  })
}

function handleDrinkName(e, id) {
  console.log(e.target.value, "id:", id);
  data.value.map(itme => {
    if (itme.id === id) {
      itme.name = e.target.value
      itme.edit = false
    }
    return itme
  })
}

function handleDrinkName2(id) {
  console.log("id:", id);
  data.value.map(itme => {
    if (itme.id === id) {
      itme.name = tempName.value
      itme.edit = false
    }
    return itme
  })
}

// tr 用
function handleDrink(id) {
  console.log(id);
  tempName.value = ''

  data.value.map(itme => {
    if (itme.id !== id) {
      itme.edit = false
    } else {
      itme.edit = true
      tempName.value = itme.name
    }
    return itme
  })



}

function handleDrinkCancel(id) {
  console.log(id);
  data.value.map(itme => {
    if (itme.id === id) {
      itme.edit = false
      return itme
    }
  })
}

</script>
