<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Register</div>

        <div class="card-body">
          <form method="POST" v-on:submit.prevent="submit">
            <div class="form-group row">
              <label for="name" class="col-md-4 col-form-label text-md-right"
                >Name</label
              >

              <div class="col-md-6">
                <input
                  id="name"
                  type="text"
                  class="form-control "
                  name="name"
                  v-model="state.name"
                  autocomplete="name"
                  autofocus
                />
              </div>
            </div>

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
                  v-model="state.email"
                  autocomplete="email"
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password"
                class="col-md-4 col-form-label text-md-right"
                >Password</label
              >

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  class="form-control "
                  name="password"
                  v-model="state.password"
                  autocomplete="new-password"
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password-confirm"
                class="col-md-4 col-form-label text-md-right"
                >Confirm Password</label
              >

              <div class="col-md-6">
                <input
                  id="password-confirm"
                  type="password"
                  class="form-control"
                  name="password_confirmation"
                  v-model="state.retypePassword"
                  autocomplete="new-password"
                />
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                  Register
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
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      retypePassword: "",
    });

    const submit = async () => {
      if (state.name && state.email && state.password && state.retypePassword) {
        if (state.password == state.retypePassword) {
          const user_object = {
            user_name: state.name,
            user_email: state.email,
            user_password: state.password,
          };

          const { data } = await axios.post(
            "https://springboot-spacecrafts-api.herokuapp.com/api/v1/users",
            user_object
          );

          if (data) {
            router.push({ path: "/login" });
          }
        }
      }
    };

    return {
      state,
      submit,
    };
  },
};
</script>

<style></style>
