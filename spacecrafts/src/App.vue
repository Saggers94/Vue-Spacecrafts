<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <HeaderComponent />
    <!-- Page Content -->
    <div class="container">
      <router-view></router-view>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
export default {
  name: "App",
  components: {
    // HelloWorld
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
