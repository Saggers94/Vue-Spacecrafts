<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Login</div>

        <div class="card-body">
          <form method="POST" v-on:submit.prevent="submit">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right"
                >E-Mail Address</label
              >

              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control "
                  name="email"
                  v-model="email"
                  autocomplete="email"
                  autofocus
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password"
                class="col-md-4 col-form-label text-md-right"
                >Password
              </label>

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  class="form-control "
                  name="password"
                  v-model="password"
                  autocomplete="current-password"
                />
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("sagar@gmail.com");
    const password = ref("simmu");

    const store = useStore();
    const router = useRouter();

    onMounted(async () => {
      const { data } = await axios.get(
        "https://springboot-spacecrafts-api.herokuapp.com/api/v1/users"
      );

      store.commit("setUsers", data);
    });

    const submit = () => {
      store.state.users.find((user) => {
        if (
          user.user_email == email.value &&
          user.user_password == password.value
        ) {
          store.commit("setIsLoggedIn", true);
          router.push({ path: "/" });
          return true;
        }
        return false;
      });
    };

    return {
      email,
      password,
      submit,
    };
  },
};
</script>

<style></style>
