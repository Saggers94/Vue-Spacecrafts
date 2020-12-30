<template>
  <div>
    <h1 class="mt-4">Top Spacecrafts</h1>
    <hr />
    <!-- Heading Row -->
    <div
      class="row align-items-center"
      id="spacecraft"
      v-for="spacecraft in state.spacecrafts"
      v-bind:key="spacecraft.spacecraft_id"
    >
      <div class="col-lg-7">
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          v-bind:src="getImage(spacecraft.spacecraft_image)"
          alt="International Space Station"
        />
      </div>
      <!-- /.col-lg-8 -->
      <div class="col-lg-5">
        <h2 class="font-weight-light">{{ spacecraft.spacecraft_name }}</h2>
        <p><strong>Mission: </strong>{{ spacecraft.spacecraft_mission }}</p>
        <p>
          <router-link
            class="btn btn-primary"
            v-bind:to="link(spacecraft.spacecraft_id)"
            >Read More!</router-link
          >
        </p>
      </div>

      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->
    <hr />
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      spacecrafts: [],
    });

    onMounted(async () => {
      const { data } = await axios.get(
        "https://springboot-spacecrafts-api.herokuapp.com/api/v1/spacecrafts"
      );
      state.spacecrafts = data;
      console.log(data);
    });

    const getImage = (imageName) => {
      return `/images/${imageName}`;
    };

    const link = (spacecraft_id) => {
      return `/spacecrafts/${spacecraft_id}`;
    };
    return {
      state,
      getImage,
      link,
    };
  },
};
</script>

<style></style>
