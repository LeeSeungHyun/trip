import Vue from 'vue';
import VueRouter from 'vue-router';
import TripDetail from '@/views/TripDetail.vue';
import TripList from '@/views/TripList.vue';
import TripWrite from '@/views/TripWrite.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      component: TripList
    },
    {
      path: '/write',
      component: TripWrite
    },
    {
      path: '/list/:id',
      component: TripDetail
    }
  ]
});