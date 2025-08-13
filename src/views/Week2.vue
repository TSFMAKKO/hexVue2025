<template>
    <div>
        <h1>week2</h1>

        <h2>註冊</h2>
        <div>
            <div>
                <label for="username">帳號:</label>
                <input type="text" id="username">
            </div>
            <div>
                <label for="password">密碼:</label>
                <input type="password" id="password">
            </div>
            <div>
                <label for="confirmPassword">確認密碼:</label>
                <input type="password" id="confirmPassword">
            </div>
            <button @click="register">註冊</button>
        </div>


        <h2>登入</h2>
        <div>
            <div>
                <label for="username">帳號:</label>
                <input type="text" id="username">
            </div>
            <div>
                <label for="password">密碼:</label>
                <input type="password" id="password">
            </div>
            <button @click="login">登入</button>
        </div>



        <h2>驗證是否在線上</h2>
        <div>
            <div>
                <label for="token">token:</label>
                <input type="text" id="token">
            </div>
            <button @click="checkOnline">驗證</button>
        </div>


        <h2>登出</h2>
        <div>
            <button @click="logout">登出</button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();


const baseApiUrl = "https://todolist-api.hexschool.io"
const register = () => {
    console.log("register");
    fetch(baseApiUrl + "/users/sign_up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": "example333@gmail.com",
            "password": "example",
            "nickname": "example"
        })
    }).then(res => {
        console.log(res);
        return res.json()
    }).then(data => {
        console.log(data);
    })

}

const login = async () => {
    console.log("login");
    const res = await axios.post(baseApiUrl + "/users/sign_in", {
        "email": "example333@gmail.com",
        "password": "example"
    })

    const token = res.data.token
    console.log(token);

    // 把token存入cookie 並設定日期
    document.cookie = `token=${token}; expires=${new Date(Date.now() + 3600 * 1000).toUTCString()}; path=/`;
}

const logout = async () => {
    console.log("logout");
    // 檢查cookie有沒有token
    const token = document.cookie.split(';').find(row => row.trim().startsWith('token=')).split('=')[1];
    if (token) {
        console.log("token exists:", token);
    }
    // const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItT1hYQzBRZUp2c0U0SmlLVzRMTCIsIm5pY2tuYW1lIjoiZXhhbXBsZSIsImlhdCI6MTc1NTA2OTMyMSwiZXhwIjoxNzU1MzI4NTIxfQ.Gaz47oGmBZKhvNW435EhZHbNWlWCLvT8Qb4IuvQSh5A"
    try {
        const res = await axios.post(baseApiUrl + "/users/sign_out", {
            headers: {
                "Authorization": `${token}`
            }
        })
        console.log(res);
        console.log("res.data:", res.data);
    } catch (error) {
        // 跳到其他頁面
        // router.push("/")
        console.log("登出失敗",error);


    }

    // 刪除cookie
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

const checkOnline = async () => {
    console.log("checkOnline");
    // 檢查cookie有沒有token
    const token = document.cookie.split(';').find(row => row.trim().startsWith('token=')).split('=')[1];
    if (token) {
        console.log("token exists:", token);
    } else {
        console.log("token does not exist");
        // 跳到其他頁面
        router.push("/")
        return
    }

    try {
        const res = await axios.get(baseApiUrl + "/users/checkout", {
            headers: {
                "Authorization": `${token}`
            }
        })
        console.log(res);
    } catch (error) {
        // 跳到其他頁面
        router.push("/")

    }



}

</script>

<style scoped></style>