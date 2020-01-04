<template>
  <div>
    <main>
      <div class="container">
        <div class="gallery">
          <div class="gallery-item" tabindex="0" v-for="(trip, index) in tripLists" :key=index @click="getDetailTrip(trip, index)">
            <img :src="'http://localhost:3000/' + trip.filename" class="gallery-image" alt=""/>
            <div class="gallery-item-info">
              {{ trip.location }}
            </div>
          </div> 
        </div>
      </div>
    </main>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" :trip="trip" :index="index" @close="showModal = false">
      <div slot="left">
        <i v-show="index !== 0" class="fas fa-angle-left" @click="leftContent"></i>
      </div>
      <div slot="body">
        <img :src="'http://localhost:3000/' + trip.filename" class="gallery-image" alt="">
        <div class="content">
          <div class="trip-idea">{{ trip.idea }}</div>
          <div class="trip-user-name">{{ trip.username }}</div>
        </div>
      </div>
      <div slot="right">
        <i v-show="this.tripLists.length - 1 !== index" class="fas fa-angle-right" @click="rightContent"></i>
      </div>
    </modal>
  </div>
</template>

<script>
import { fetchTrips } from '@/api/index.js';
import modal from '@/components/Modal.vue';

export default {
  data() {
    return {
      showModal: false,
      tripLists: [],
      trip: {},
      index: 0
    }
  },
  components: {
    modal
  },
  methods: {
    getDetailTrip(trip, index) {
      this.trip = trip;
      this.index = index;
      this.showModal = true;
    },
    leftContent() {
      this.index--;
      this.trip = this.tripLists[this.index];
    },
    rightContent() {
      this.index++;
      this.trip = this.tripLists[this.index];
      console.log(this.trip);
    }
  },
  mounted() {
    fetchTrips()
    .then((res) => {
      this.tripLists = res.data.desks;
    })
  }
}
</script>

<style scoped>
  img {
    display: block;
  }
  .container {
    margin: 0 auto;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 3rem;
  }
  .gallery-item {
    position: relative;
    flex: 1 0 22rem;
    margin: 1rem;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .gallery-item:hover .gallery-item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
  }
  .gallery-item-info {
    display: none;
  }
  .gallery-item-info li {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
  }
  .gallery-item-likes {
    margin-right: 2.2rem;
  }
  .gallery-item-type {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  }
  .fa-clone,
  .fa-comment {
    transform: rotateY(180deg);
  }
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    margin-top: 20px;
  }
  @supports (display: grid) {
    .profile {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: repeat(3, auto);
      grid-column-gap: 3rem;
      align-items: center;
    }

    .profile-image {
      grid-row: 1 / -1;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
      grid-gap: 2rem;
    }

    .profile-image,
    .profile-user-settings,
    .profile-stats,
    .profile-bio,
    .gallery-item,
    .gallery {
      width: auto;
      margin: 0;
    }
  }

  i:hover {
    cursor: pointer;
  }

  .trip-idea {
    font-size: 1.4rem;
    margin-bottom: 4px;
  }

  .trip-user-name {
    color:rgba(0, 0, 0, 0.5);
  }
</style>