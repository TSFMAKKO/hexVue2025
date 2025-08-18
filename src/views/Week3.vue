<style></style>
<template>
    <h3>餐點購買</h3>
    <div class="row">
        <div class="col-3">左方餐點
            <!-- <ul>
                <li v-for="drink in data" @click="addCart(drink)">
                    {{ drink }}
                </li>
            </ul> -->
            <!-- <div v-for="drink in data" @click="addCart(drink)">
                <div>{{ drink.name }}</div>
                <div>{{ drink.description }}</div>
                <div>{{ drink.price }}</div>
            </div> -->
            <ul class="list-group">
                <li v-for="drink in data" :key="drink.id" class="list-group-item list-group-item-action"
                    @click="addCart(drink)" style="cursor: pointer;">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{{ drink.name }}</h5>
                        <small>${{ drink.price }}</small>
                    </div>
                    <p class="mb-1">{{ drink.description }}</p>
                </li>
            </ul>

        </div>

  <div class="col-9">
    <h5 class="mb-3">右方購物車</h5>

    <!-- 購物車表格 -->
    <table v-if="cart.length !== 0" class="table table-bordered table-striped table-hover">
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
            <select
              class="form-select form-select-sm w-auto"
              @change="changeCount($event, drink.id)"
              v-model="drink.count"
            >
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

    <!-- 總計與備註 -->
    <div class="mt-3 d-flex justify-content-between align-items-center">
      <div><strong>總計:</strong> ${{ total }}</div>
      <div>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="備註"
          v-model="description"
        >
      </div>
      <button class="btn btn-primary btn-sm" @click="orderHandler">
        結帳
      </button>
    </div>
  </div>        
        <!-- <div class="col-9">
            右方購物車
            <table v-if="cart.length !== 0">
                <thead>
                    <th>品項</th>
                    <th>描述</th>
                    <th>售價</th>
                    <th>數量</th>
                    <th>小記</th>
                    <th>刪除</th>
                </thead>
                <tbody>
                    <tr v-for="drink in cart">
                        <td>{{ drink.name }}</td>
                        <td>{{ drink.description }}</td>
                        <td>{{ drink.price }}</td>
                        <td>
                            <select @change="changeCount($event, drink.id)" v-model="drink.count">
                                <option v-for="n in 10" :key="n" :value="n">
                                    {{ n }}
                                </option>
                            </select>
                        </td>
                        <td>{{ drink.price * drink.count }}</td>
                        <td><button @click="delHandler(drink.id)">刪除</button></td>

                    </tr>
                </tbody>
            </table>
            <div>總計:
                {{ total }}
            </div>
            <div>
                <input type="text" v-model="description">
            </div>
            <button @click="orderHandler">結帳</button>
        </div> -->
    </div>

    <!-- <div>
        下方訂單
      
        <div>
            備註:{{ order.description }}
            總計:{{ order.total }}
        </div>
        
        <table>
            <thead>
                <th>品項</th>
                <th>描述</th>
                <th>售價</th>
                <th>數量</th>
                <th>小記</th>
            </thead>
            <tbody>
                <tr v-for="drink in order.cart">
                    <td>{{ drink.name }}</td>
                    <td>{{ drink.description }}</td>
                    <td>{{ drink.price }}</td>
                    <td>{{ drink.count }}</td>
                    <td>{{ drink.price * drink.count }}</td>
                </tr>
            </tbody>
        </table>
    </div> -->
    <div class="container my-4">
        <h5 class="mb-3">下方訂單</h5>

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


</template>

<script setup>
import { ref, computed } from 'vue';

const data = [
    {
        id: 1,
        name: '珍珠奶茶',
        description: '香濃奶茶搭配QQ珍珠',
        price: 50,
    },
    {
        id: 2,
        name: '冬瓜檸檬',
        description: '清新冬瓜配上新鮮檸檬',
        price: 45,
    },
    {
        id: 3,
        name: '翡翠檸檬',
        description: '綠茶與檸檬的完美結合',
        price: 55,
    },
    {
        id: 4,
        name: '四季春茶',
        description: '香醇四季春茶，回甘無比',
        price: 45,
    },
    {
        id: 5,
        name: '阿薩姆奶茶',
        description: '阿薩姆紅茶搭配香醇鮮奶',
        price: 50,
    },
    {
        id: 6,
        name: '檸檬冰茶',
        description: '檸檬與冰茶的清新組合',
        price: 45,
    },
    {
        id: 7,
        name: '芒果綠茶',
        description: '芒果與綠茶的獨特風味',
        price: 55,
    },
    {
        id: 8,
        name: '抹茶拿鐵',
        description: '抹茶與鮮奶的絕配',
        price: 60,
    },
];

const drinks = ref(data);

// 右方購物車
const cart = ref([]);
// 備註
const description = ref('');
// 總計
const total = computed(() => {
    let sum = 0
    cart.value.forEach(c => {
        sum += c.price * c.count
    })
    return sum


})


// 下方訂單
const order = ref({});

const addCart = (drink) => {
    // drink = JSON.parse(JSON.stringify(drink))
    // 假如沒有 先一杯
    // 假如存在就 +=1
    // 從id撈cart裡面的

    let target = true
    for (let i = 0; i < cart.value.length; i++) {
        if (cart.value[i].id === drink.id) {
            let c = cart.value[i]
            // if (c.count === undefined) {
            //     c.count = 1
            // }
            c.count += 1
            console.log(cart.value);
            target = false
            // return
        }

    }
    // cart.value.forEach(c => {
    //     if (c.id === drink.id) {

    //         if (c.count) {
    //             c.count = 0
    //         }
    //         count += 1
    //     }


    // })





    // 檢查是否存在


    if (target) {
        drink.count = 1
        cart.value.push(drink)
    }
}

const orderHandler = () => {
    console.log("orderHandler");

    let obj = JSON.parse(JSON.stringify({
        cart: cart.value,
        description: description.value,
        total: total.value
    }));

    order.value = obj

    // 清空
    cart.value = []
    description.value = ""

}

const changeCount = (event, id) => {
    console.log("changeCount", event);
    const value = event.target.value; // 取得輸入的值
    console.log("目前輸入值:", value);
    console.log("id", id);


    cart.value.forEach(c => {
        if (c.id === id) {
            c.count = event.target.value
        }
    })

    console.log(cart.value);

}

const delHandler = (id) => {
    console.log("delHandler:", id);

    cart.value = cart.value.filter(c => {
        if (c.id !== id) {
            console.log("c id:", c);
            return c
        }
    })
}
</script>