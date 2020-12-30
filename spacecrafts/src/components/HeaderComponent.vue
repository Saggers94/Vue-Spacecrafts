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
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const links = ref([
      { title: "Home", to: "/" },
      { title: "Spacecrafts", to: "/spacecrafts" },
      { title: "About", to: "/about" },
      { title: "Contact", to: "/contact" },
      { title: "Login", to: "/login" },
      { title: "Register", to: "/register" },
    ]);

    // const route = useRoute();
    // const path = ref("");

    // onMounted(() => {
    //   console.log(route.path);
    // });

    return {
      links,
    };
  },
};
</script>

<style></style>
