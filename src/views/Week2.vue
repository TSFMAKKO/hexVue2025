<style scoped>
.container {
    max-width: 600px;
    margin: 30px auto;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
}

.section {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.input-group {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;
}

label {
    display: inline-block;
    width: 120px;
    margin-right: 15px;
    text-align: right;
    font-weight: 500;
    color: #2c3e50;
}

input {
    flex: 1;
    padding: 10px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    width: 250px;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: #ffffff;
}

input:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 14px;
    margin-left: auto;
    display: block;
}

button:hover {
    background-color: #45a049;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button:active {
    transform: translateY(0);
}

.logout-btn {
    background-color: #dc3545;
}

.logout-btn:hover {
    background-color: #c82333;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 35px;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

h2 {
    color: #34495e;
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 4px solid #4CAF50;
    font-size: 1.4rem;
    font-weight: 500;
}

.error-message {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 5px;
}

.success-message {
    color: #28a745;
    font-size: 0.875rem;
    margin-top: 5px;
}

input {
    color: black;
}
</style>

<template>
    <div class="container">
        <h1>Week 2 練習</h1>

        <div class="section">
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
            </div>
        </div>

        <div class="section">
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
            </div>
        </div>
        {{ todos }}
        <div class="section btn-group">
            <!-- <h2>驗證是否在線上</h2> -->
            <!-- <div class="form-group">
                <div class="input-group"> -->
            <!-- <label for="token">Token:</label> -->
            <!-- <input type="text" id="token" placeholder="驗證 Token"> -->
            <!-- </div> -->
            <button @click="checkOnline">驗證是否在線上(一定要按)</button>
            <button @click="logout" class="logout-btn">登出</button>
            <button @click="getAllData" class="btn">取得所有資料</button>
            新增資料: <input type="text" v-model="createText" @keypress.enter="createData">
            <!-- getAllData -->
            <!-- </div> -->
        </div>


        <template v-for="todo in todos">
            <input type="checkbox" :checked="todo.status" @click="toggle(todo.id, $event)">
            <input type="text" :value="todo.content" @keypress.enter="updateText(todo.id, $event)">
            <button type="button" @click="deleteHandler(todo.id)">刪除</button>
        </template>


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
const token = ref("")
const todos = ref([])
const createText = ref("")




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
    const token = res.data.token
    console.log(token);
    alert(`${res.data.nickname} 登入成功`)

    // 把token存入cookie 並設定日期
    document.cookie = `token=${token}; expires=${new Date(Date.now() + 3600 * 1000).toUTCString()}; path=/`;

}

const logout = async () => {
    console.log("logout");
    // 檢查cookie有沒有token
    // const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItT1hYQzBRZUp2c0U0SmlLVzRMTCIsIm5pY2tuYW1lIjoiZXhhbXBsZSIsImlhdCI6MTc1NTA2OTMyMSwiZXhwIjoxNzU1MzI4NTIxfQ.Gaz47oGmBZKhvNW435EhZHbNWlWCLvT8Qb4IuvQSh5A"
    try {
        // 抓不到token也會跳catch
        const tokenCookie = document.cookie.split(';').find(row => row.trim().startsWith('token='));
        const token = tokenCookie.split('=')[1];
        console.log("token exists:", token);

        const res = await axios.post(baseApiUrl + "/users/sign_out", {}, {
            headers: {
                "Authorization": `${token}`
            }
        })
        // console.log(res);
        console.log("res.data:", res.data);
        // 登出成功後清除 cookie
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        router.push("/");

    } catch (error) {
        alert(`登出失敗${error.data}`)
        console.log("登出失敗", error);
        // 如果是 401 未授權錯誤，也清除 cookie 並重導向
        // if (error.response && error.response.status === 401) {
        // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        // router.push("/");
        // }


    }

    // 刪除cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

const checkOnline = async () => {
    console.log("checkOnline");
    try {
        // 檢查cookie有沒有token
        const cookies = document.cookie.split(';')
        console.log("cookies:", cookies);
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


        console.log(res);
        alert(`${res.data.nickname} 在線上`)
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

        todos.value.map(todo => {
            if (todo.id === id) {
                todo.status = !todo.status
            }
            return todo
        })

        console.log(res.data);
    } catch (error) {
        // 更新失敗把值回寫
        let status = null
        todos.value.forEach(todo => {
            if (todo.id === id) {
                status = todo.status
            }
        })
        console.log("status", status);

        // 把值回寫
        event.target.checked = status
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
            todos.value.map(todo => {
                if (todo.id === id) {
                    todo.content = newContent
                }
                return todo
            })
        }
        console.log(res.data);

    } catch (error) {
        // 假如更新失敗 
        let content = ""
        todos.value.forEach(todo => {
            if (todo.id === id) {
                content = todo.content
            }
        })
        // 把值回寫
        event.target.value = content
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
    console.log("id:", id);
    const api = `${baseApiUrl}/todos/${id}`
    console.log(api);

    try {
        const res = await axios.delete(api, {
            headers: {
                "Authorization": `${token.value}`
            }
        })

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
