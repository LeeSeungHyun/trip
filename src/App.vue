<template>
  <div id="app">
    <Header></Header>
    <trip-list></trip-list>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import TripList from '@/views/TripList.vue';

export default {
  components: {
    Header,
    TripList
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #fdfdfd;
}
</style>
