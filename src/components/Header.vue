<template>
  <header>
    <div class="title">
      <router-link to="/list">
        Show Your Trip
      </router-link>
    </div>
    <div class="write-trip">
      <!-- <router-link to="/write"> -->
        <button class="btn" type="button" @click="uploadContent">
          <i class="fas fa-camera"></i>
        </button>
      <!-- </router-link> -->
    </div>
  </header>
</template>

<script>
let config = process.env.NODE_ENV === 'production'

export default {
  methods: {
    uploadContent() {
      window.location.href = config ? 'https://frozen-hamlet-20379.herokuapp.com/auth/google' :'http://localhost:3000/auth/google';
    }
  }
}
</script>

<style scoped>
  header {
    margin: 60px 0;
  }

  .write-trip {
    float: right;
  }

  .title {
    float: left;
    font-size: 3rem;
    font-weight: bold;
  }

  .title > a {
    text-decoration: none;
    color: #000;
  }

  header::after {
    display: block;
    clear: both;
    content: "";
  }

  .btn {
    background-color: #fcfcfc;
    border: none;
    margin-top: 8px;
    padding: 0;
    font-size: 24px;
    cursor: pointer;
  }
</style>