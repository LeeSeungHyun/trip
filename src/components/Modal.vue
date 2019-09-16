<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <i class="fas fa-angle-left" @click="leftContent"></i>
          </div>

          <div>
            <div class="modal-header">
              {{ index }}
            </div>

            <div class="modal-body">
              <!-- <img :src="'http://localhost:3000/' + trip.filename" class="de-image" alt="">
              <div class="content">
                <div>{{ trip.idea }}</div>
                <div>{{ trip.location }}</div>
              </div> -->
              <div slot="body"> 

              </div>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="$emit('close')">
                  Cancel
                </button>
              </slot>
            </div>
          </div>

          <div>
            <i class="fas fa-angle-right" @click="rightContent"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    trip: Object,
    index: Number
  },
  methods: {
    leftContent() {
      alert("left");
    },
    rightContent() {
      alert("right");
    }
  }
}
</script>

<style>
  .modal-container > div:nth-child(1) {
    flex: 1;
    align-self: center;
    margin-right: 10px;
    font-size: 1.8rem;
  }

  .modal-container > div:nth-child(2) {
    flex: 320px;
  }

  .modal-container > div:nth-child(3) {
    flex: 1;
    align-self: center;
    margin-left: 10px;
    font-size: 2rem;
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>