<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/computed" class="navbar-item">Computed vs Static</router-link>
            <router-link to="/logic" class="navbar-item">Complex Logic</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar {
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
}
</style>
