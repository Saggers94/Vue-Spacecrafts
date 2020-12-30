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
          <li class="nav-item active">
            <router-link class="nav-link" to="/"
              >Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/spacecrafts">Spacecrafts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <!--  <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="http://localhost:8000/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:8000/register"
              >Register</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
