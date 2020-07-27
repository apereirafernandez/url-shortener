<template>
  <div id="app">
    <router-link />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#formurl input {
  width: 35%;
  height: 16px;
  padding: 12px 30px;
}

.list {
  text-align: center;
}

.button {
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 12px 30px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1:hover {
  background-color: #42b983;
  color: white;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #42b983;
}
</style>
