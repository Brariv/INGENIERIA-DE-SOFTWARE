<script setup>
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="app">
    <SideBar />
    <main class="main-content">
      <h1>Welcome to the Main Content</h1>
      <p>This is where your main content will go.</p>
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
}

.main-content {
  margin-left: 250px;
  padding: 20px;
  width: 100%;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  color: #34495e;
  font-size: 1.1em;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
