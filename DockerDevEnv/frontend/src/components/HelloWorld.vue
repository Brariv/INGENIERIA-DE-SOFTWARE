<template>
  <div class="SideBar">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  padding: 15px 25px;
  transition: background-color 0.3s;
}

nav li:hover {
  background-color: #34495e;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  display: block;
}
</style>