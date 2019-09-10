<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  // data() {
  //   return {
  //     loadingStatus: false,
  //   }
  // },
  // methods: {
  //   startSpinner() {
  //     this.loadingStatus = true;
  //   },
  //   endSpinner() {
  //     this.loadingStatus = false;
  //   }
  // },
  // created() {
  //   bus.$on('start:spinner', this.startSpinner);
  //   bus.$on('end:spinner', this.endSpinner)
  // },
  // beforeDestroy() {
  //   bus.$off('start:spinner', this.startSpinner);
  //   bus.$off('end:spinner', this.endSpinner)
  // }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #fdfdfd;
} */
:root {
  font-size: 10px;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
  background-color: #fafafa;
  color: #262626;
  padding-bottom: 3rem;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 320px;
  padding: 0 2rem; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
