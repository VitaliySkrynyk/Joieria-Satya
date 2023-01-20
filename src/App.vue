<template>
  <div id="app">
    <nav>
      <router-link to="/Collars">Collars</router-link> |
      <router-link to="/Polseres">Polseres</router-link> |
      <router-link to="/Anells">Anells</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #3a3a3a;
    }
  }
}
</style>
