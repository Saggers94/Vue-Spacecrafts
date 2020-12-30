<template>
  <div>
    <h1 class="font-weight-light mt-4">
      <strong>Spacecraft: </strong>{{ state.spacecraft.spacecraft_name }}
    </h1>
    <hr />
    <!-- Heading Row -->
    <div class="row align-items-center">
      <div class="col-lg-7">
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          v-bind:src="getImage(state.spacecraft.spacecraft_image)"
          alt="International Space Station"
        />
      </div>
      <!-- /.col-lg-8 -->
      <div class="col-lg-5">
        <p><strong>Launch: </strong>{{ state.spacecraft.spacecraft_launch }}</p>
        <p>
          <strong>Mission: </strong>{{ state.spacecraft.spacecraft_mission }}
        </p>
      </div>
      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->

    <div class="row align-items-center" id="spacecraft">
      <!-- /.col-lg-8 -->
      <div class="col-lg-12">
        <p>
          <strong>Detail Description of Mission: </strong
          >{{ state.spacecraft.spacecraft_description_of_mission }}
        </p>
        <p><strong>Phase: </strong>{{ state.spacecraft.spacecraft_phase }}</p>
        <p>
          <strong>Total Days Spent in Space: </strong
          >{{ state.spacecraft.spacecraft_days_in_orbit }}
        </p>
        <p><strong>Category: </strong>{{ state.categoryName }}</p>
      </div>
      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->

    <hr />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      id: 0,
      spacecraft: {},
      categoryName: "",
    });

    const route = useRoute();
    state.id = route.params.id;

    onMounted(async () => {
      const { data } = await axios.get(
        "https://springboot-spacecrafts-api.herokuapp.com/api/v1/spacecrafts/" +
          state.id
      );
      state.spacecraft = data;
      state.categoryName = data.category.name;
    });

    const getImage = (imageName) => {
      return `/images/${imageName}`;
    };

    return {
      state,
      getImage,
    };
  },
};
</script>

<style></style>
