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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
