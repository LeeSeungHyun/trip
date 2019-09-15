<template>
  <div>
    <main>
      <div class="container">
        <div class="gallery">
          <!-- <div class="gallery-item" tabindex="0">
            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt=""  v-on:click="getDetailTrip">
            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
              </ul>
            </div>
          </div>
    
          <div class="gallery-item" tabindex="0">
            <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt="">
            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
              </ul>
            </div>
          </div>

          <div class="gallery-item" tabindex="0">
            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt="">
            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
              </ul>
            </div>
          </div> -->

          <div class="gallery-item" tabindex="0" v-for="(trip, index) in tripLists" :key=index>
            <img :src="'http://localhost:3000/' + trip.filename" class="gallery-image" alt="" />
            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
              </ul>
            </div>
          </div> 

        </div>
      </div>
    </main>

    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <div slot="body">
        <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt="">
        <div class="content">
          <div>아 너무 좋다. 다시 오고 싶네</div>
          <div>In seoul</div>
        </div>
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
      tripLists: []
    }
  },
  components: {
    modal
  },
  methods: {
    getDetailTrip() {
      this.showModal = true;
    }
  },
  mounted() {
    fetchTrips()
    .then((res) => {
      this.tripLists = res.data.desks;
      console.log(this.tripLists);
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
  /* Gallery Section */
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
    cursor: pointer;
    /* width: 500px;
    height: 500px; */
  }
  /* .gallery-item:hover .gallery-item-info,
  .gallery-item:focus .gallery-item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
  } */
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
</style>