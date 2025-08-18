<script setup>

</script>

<template>
  <div class="container">
    <h1>Task List</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/bmi">Bmi</router-link>
      <router-link to="/Week1-1">Week1-1</router-link>
      <router-link to="/Week1-2">Week1-2</router-link>
      <router-link to="/Week2">Week2</router-link>
    </nav>
    <router-view></router-view>
 
  </div>
</template>

<style scoped>

nav a{
  margin: 0 10px;
}

.container {
  /* max-width: 1000px; */
  /* width: 95%; */
  margin: 20px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.task-text {
  flex: 1;
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.toggle-btn {
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-btn:hover {
  background-color: #359467;
}
</style>
