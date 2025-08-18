<style scoped>
/* 簡化版待辦事項CSS - 縮減70% */

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* 標題 */
.container>h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;
}

/* 區塊 */
.section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.section h2 {
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
}

/* 表單 */
.form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-group label {
    font-weight: 500;
    color: #555;
}

.input-group input {
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    background: #ffffff;
    transition: border-color 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: #007bff;
}

/* 按鈕 */
button {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #007bff;
    color: white;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

/* 按鈕群組 */
.btn-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.btn-group button:first-child {
    grid-column: span 2;
    background: #28a745;
}

.logout-btn {
    background: #dc3545 !important;
}

.btn {
    background: #17a2b8 !important;
}

.btn-group input[type="text"] {
    grid-column: span 2;
    padding: 0.8rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    background: #ffffff;
    font-size: 1rem;
}

/* 待辦事項列表 */
.todo-list {
    background: #ffffff;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    padding: 1.5rem;
    overflow-y: auto;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f1f3f4;
    border-radius: 8px;
    margin-bottom: 0.8rem;
    transition: all 0.3s ease;
}

.todo-item:hover {
    background: #e2e6ea;
    transform: translateX(3px);
}

.todo-item.completed {
    opacity: 0.7;
}

.todo-item.completed input[type="text"] {
    text-decoration: line-through;
    color: #6c757d;
}

/* 複選框 */
.todo-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #007bff;
}

/* 待辦事項輸入框 - 顏色加重 */
.todo-item input[type="text"] {
    flex: 1;
    padding: 0.8rem;
    border: 2px solid #6c757d;
    border-radius: 6px;
    background: #e9ecef;
    color: #212529;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.todo-item input[type="text"]:focus {
    outline: none;
    border-color: #007bff;
    background: #ffffff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* 刪除按鈕 */
.todo-item button {
    background: #dc3545;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 6px;
}

.todo-item button:hover {
    background: #c82333;
    transform: scale(1.05);
}


.todo-list .content {
    max-width: 100%;
    width: 100%;
    color: black;
}

.todo-list .content span {
    display: block;
    max-width: 100%;
    width: 100%;
    /* text-align: left; */
}



/* 空狀態 */
.empty-state {
    text-align: center;
    padding: 2rem;
    color: #6c757d;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
}

/* 響應式 */
@media (max-width: 768px) {
    .container {
        margin: 10px;
        padding: 15px;
    }

    .btn-group {
        grid-template-columns: 1fr;
    }

    .btn-group button:first-child,
    .btn-group input[type="text"] {
        grid-column: span 1;
    }

    .todo-item {
        flex-direction: column;
        align-items: stretch;
    }

    .todo-item input[type="checkbox"] {
        align-self: flex-start;
    }
}

input {
    border: 2px solid #6c757d;
    /* 深灰色邊框 */
    background: #e9ecef;
    /* 深灰色背景 */
    color: #212529;
    /* 深色文字 */
    font-weight: 500;
    /* 加粗字體 */
}

.todo-item button {
    min-width: 80px;
}

.del {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    /* 粗一點 */
    /* text-decoration-color: red; */
    /* 可選，換顏色 */

}

.createData {
    display: flex;
    gap: 10px;
    margin: 1.5rem 0;
}

.createData input {
    flex-grow: 1;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 0.8rem;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.createData input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.createData button {
    background: #28a745;
    padding: 0.8rem 1.5rem;
    flex-shrink: 0;
}

.createData button:hover {
    background: #218838;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
}

.nickname {
    /* background-color: #e9ecef; */
    color: #495057;
    padding: 10px 15px;
    border-radius: 8px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    /* border: 2px solid #dee2e6; */
}
</style>

<template>
    <div class="container">
        <h1>Week 2 練習</h1>
        <div class="section" v-if="token === '' && hasAccount === false">
            <h2>註冊</h2>
            <div class="form-group">
                <div class="input-group">
                    <label for="email">帳號:</label>
                    <input type="email" v-model="email" id="email" placeholder="請輸入email">
                </div>
                <div class="input-group">
                    <label for="password">密碼:</label>
                    <input type="password" v-model="password" id="password" placeholder="請輸入密碼">
                </div>
                <div class="input-group">
                    <label for="nickname">暱稱:</label>
                    <input type="text" v-model="nickname" id="nickname" placeholder="請再次輸入密碼">
                </div>
                <button @click="register">註冊</button>
                <button @click="hasAccount = true">已有帳號</button>
            </div>
        </div>

        <div class="section" v-if="token === '' && hasAccount === true">
            <h2>登入</h2>
            <div class="form-group">
                <div class="input-group">
                    <label for="loginUsername">帳號:</label>
                    <input type="text" v-model="email" id="loginUsername" placeholder="請輸入帳號">
                </div>
                <div class="input-group">
                    <label for="loginPassword">密碼:</label>
                    <input type="password" v-model="password" id="loginPassword" placeholder="請輸入密碼">
                </div>
                <button @click="login">登入</button>
                <button @click="hasAccount = false">沒帳號</button>
            </div>
        </div>
        <!-- {{ todos }} -->

        <div class="section btn-group" v-if="token && userData === null">
            <!-- <h2>驗證是否在線上</h2> -->
            <!-- <div class="form-group">
                <div class="input-group"> -->
            <!-- <label for="token">Token:</label> -->
            <!-- <input type="text" id="token" placeholder="驗證 Token"> -->
            <!-- </div> -->
            <input type="text" v-model="token">
            <button @click="checkOnline">驗證是否在線上</button>

            <!-- getAllData -->
            <!-- </div> -->
        </div>


        <div class="todo-list" v-if="token && userData !== null">
            <div class="nickname">{{ userData.nickname }} 你好</div>
            <button @click="logout" class="logout-btn">登出</button>
            <!-- <button @click="getAllData" class="btn">取得所有資料</button> -->
            <div class="createData">
                <input type="text" v-model="createText" @keypress.enter="createData" placeholder="新增資料">
            </div>
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
                <input type="checkbox" :checked="todo.status" @click.prevent="toggle(todo.id, $event)">
                <!-- 點兩下進入編輯 -->
                <div class="content">
                    <span :class="{ del: todo.status }" v-if="!todo.isEdit" @dblclick="todo.isEdit = true">{{
                        todo.content }}</span>
                    <input v-else type="text" :value="todo.content"
                        @keypress.prevent.enter="updateText(todo.id, $event)" @keydown.esc="todo.isEdit = false">
                </div>
                <button type="button" v-if="todo.isEdit" @click="todo.isEdit = false">取消</button>
                <button type="button" v-else @click="deleteHandler(todo.id)">刪除</button>
            </div>
        </div>


        <!-- <div class="section">
            <h2>登出</h2>
            <div class="form-group">
               
            </div>
        </div> -->
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref("example333@gmail.com")
const password = ref("example")
const nickname = ref("example333")
const hasAccount = ref(false)

const token = ref("")
const todos = ref([])
const createText = ref("")
const userData = ref(null)




const baseApiUrl = "https://todolist-api.hexschool.io"
const register = () => {
    console.log("register");
    fetch(baseApiUrl + "/users/sign_up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email.value,
            "password": password.value,
            "nickname": nickname.value
        })
    }).then(res => {
        console.log(res);
        return res.json()
    }).then(data => {
        console.log(data);
        // alert("註冊成功")
        if (data.status) {
            alert(`註冊成功 ${data.uid}`)
            hasAccount.value = true
        } else {
            alert(`註冊失敗${data.message}`)
        }
    }).catch(e => {
        alert(`註冊失敗`)

    })

}

const login = async () => {
    console.log("login");
    const res = await axios.post(baseApiUrl + "/users/sign_in", {
        "email": email.value,
        "password": password.value
    })

    console.log("res:", res.data);
    token.value = res.data.token
    console.log(token.value);
    alert(`${res.data.nickname} 登入成功`)

    // 把token存入cookie 並設定日期
    document.cookie = `token=${token.value}; expires=${new Date(Date.now() + 3600 * 1000).toUTCString()}; path=/`;

}

const logout = async () => {
    console.log("logout");
    // 檢查cookie有沒有token
    // const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItT1hYQzBRZUp2c0U0SmlLVzRMTCIsIm5pY2tuYW1lIjoiZXhhbXBsZSIsImlhdCI6MTc1NTA2OTMyMSwiZXhwIjoxNzU1MzI4NTIxfQ.Gaz47oGmBZKhvNW435EhZHbNWlWCLvT8Qb4IuvQSh5A"
    try {
        // 抓不到token也會跳catch
        let tokenCookie = document.cookie.split(';').find(row => row.trim().startsWith('token='));
        tokenCookie = tokenCookie.split('=')[1];
        console.log("token exists:", tokenCookie);

        const res = await axios.post(baseApiUrl + "/users/sign_out", {}, {
            headers: {
                "Authorization": `${tokenCookie}`
            }
        })
        // console.log(res);
        console.log("res.data:", res.data);
        // 登出成功後清除 cookie
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        // router.push("/");

        // 清空暫存
        token.value = ""
        userData.value = null
        alert(`成功登出 ${res.data.message}`)

    } catch (error) {
        alert(`登出失敗${error.data}`)
        console.log("登出失敗", error);
        // 如果是 401 未授權錯誤，也清除 cookie 並重導向
        // if (error.response && error.response.status === 401) {
        // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        // router.push("/");
        // }

    }

}

const checkOnline = async () => {
    console.log("checkOnline");
    try {
        // 檢查cookie有沒有token
        const cookies = document.cookie.split(';')
        console.log("cookies:", cookies);
        // 
        token.value = cookies.find(row => row.trim().startsWith('token=')).split('=')[1];
        // token.value = token

        if (token.value) {
            console.log("token exists:", token.value);
        }

        const res = await axios.get(baseApiUrl + "/users/checkout", {
            headers: {
                "Authorization": `${token.value}`
            }
        })


        console.log(res.data);
        userData.value = res.data
        alert(`${res.data.nickname} 在線上`)
        getAllData();

    } catch (error) {
        // 跳到其他頁面
        alert("不再線上 即將踢人")
        router.push("/")

    }



}

// // {
//   "status": true,
//   "data": [
//     {
//       "id": "123456789",
//       "createTime": 1620281234,
//       "content": "買晚餐",
//       "status": false
//     }
//   ]
// }

const getAllData = async () => {
    console.log("token:", token.value);

    const res = await axios.get(baseApiUrl + "/todos/", {
        headers: {
            "Authorization": `${token.value}`
        }
    })

    console.log(res.data);
    todos.value = res.data.data
}

// getAllData()
// /todos/{id}/toggle
const toggle = async (id, event) => {
    console.log("id:", id);
    const api = `${baseApiUrl}/todos/${id}/toggle`
    console.log(api);

    try {
        const res = await axios.patch(api, {}, {
            headers: {
                "Authorization": `${token.value}`
            }
        })

        // 更新成功
        let status = null
        todos.value.map(todo => {
            if (todo.id === id) {
                todo.status = !todo.status
                status = todo.status
            }
            return todo
        })

        // event.target.checked = status

        console.log(res.data);
    } catch (error) {
        // 更新失敗把值回寫
        // let status = null
        // todos.value.forEach(todo => {
        //     if (todo.id === id) {
        //         status = todo.status
        //     }
        // })
        // console.log("status", status);

        // 把值回寫
        // event.target.checked = status
    }



    console.log(todos.value);

    // todos.value = res.data.data
}

// updateText
const updateText = async (id, event) => {
    console.log("updateText", "id:", id);
    const newContent = event.target.value;
    const api = `${baseApiUrl}/todos/${id}`
    console.log(api);

    // 進動畫
    try {
        const res = await axios.put(api, {
            "content": newContent
        }, {
            headers: {
                "Authorization": `${token.value}`
            }
        })

        if (res.status) {
            // 假如更新成功
            todos.value.map(todo => {
                if (todo.id === id) {
                    todo.content = newContent
                    todo.isEdit = false

                }
                return todo
            })
        }
        event.target.value = newContent
        console.log(res.data);

    } catch (error) {
        // 假如更新失敗 
        // let content = ""
        // todos.value.forEach(todo => {
        //     if (todo.id === id) {
        //         content = todo.content
        //     }
        // })
        // 把值回寫
        // event.target.value = content
    }

    // 


    // 退動畫


    console.log(todos.value);


    // todos.value = res.data.data
}


const createData = async () => {

    const api = `${baseApiUrl}/todos/`
    console.log(api);
    const res = await axios.post(api, {
        "content": createText.value
    }, {
        headers: {
            "Authorization": `${token.value}`
        }
    })

    console.log(res);


    if (res.status) {
        todos.value.push(res.data.newTodo)
    }
}

const deleteHandler = async (id) => {
    if (!confirm("確認刪除")) return
    console.log("id:", id);
    const api = `${baseApiUrl}/todos/${id}`
    console.log(api);

    try {
        const res = await axios.delete(api, {
            headers: {
                "Authorization": `${token.value}`
            }
        })

        // 成功後刪除
        todos.value = todos.value.filter(todo => {
            if (todo.id != id) {
                return todo
            }
        })

        console.log(res.data);
    } catch (error) {
        // 更新失敗 不用該改
    }



    console.log(todos.value);

    // todos.value = res.data.data
}

</script>
