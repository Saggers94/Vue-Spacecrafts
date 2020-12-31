<template>
  <div class="row pb-2">
    <div class="col-lg-12 text-center">
      <h1 class="mt-2">NASA Amazing Spacecrafts</h1>
      <img src="images/spacecraft.svg" alt="Main Spacecraft Image" />
      <p class="lead">
        A spacecraft is a vehicle or machine designed to fly in outer space. A
        type of artificial satellite, spacecraft are used for a variety of
        purposes, including communications, Earth observation, meteorology,
        navigation, space colonization, planetary exploration, and
        transportation of humans and cargo.
      </p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
// import store from "../store/index";
export default {
  setup() {
    const store = useStore();

    console.log(store.state.isLoggedIn);
  },
};
</script>

<style></style>
