<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <!-- <i class="fas fa-angle-left" @click="leftContent"></i> -->
            <slot name="left">
            </slot>
          </div>
          <div>
            <div class="modal-body">
              <slot name="body"> 
                  
              </slot>
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
            <!-- <i class="fas fa-angle-right" @click="rightContent"></i> -->
            <slot name="right">
            </slot>
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
    width: 320px;
  }

  .modal-container > div:nth-child(3) {
    flex: 1;
    align-self: center;
    margin-left: 10px;
    font-size: 1.8rem;
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>