<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#">NASA Spacecrafts</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="link in links" v-bind:key="link.title">
            <router-link class="nav-link" v-bind:to="link.to"
              >{{ link.title }}
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link" v-bind:href="logInOpen()">Login</a>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" v-on:click="logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import { useRoute } from "vue-router";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const links = ref([
      { title: "Home", to: "/" },
      { title: "Spacecrafts", to: "/spacecrafts" },
      { title: "About", to: "/about" },
      { title: "Contact", to: "/contact" },
      // { title: "Login", to: "/login" },
      { title: "Register", to: "/register" },
    ]);
    const state = reactive({
      isLoggedIn: false,
    });
    const store = useStore();

    const logInOpen = () => {
      return "/login";
    };
    const logout = () => {
      store.commit("setIsLoggedIn", false);
    };
    // const route = useRoute();
    // const path = ref("");

    // onMounted(() => {
    //   console.log(route.path);
    // });

    return {
      links,
      logout,
      isLoggedIn: computed(() => store.state.isLoggedIn),
      state,
      logInOpen,
    };
  },
};
</script>

<style></style>
