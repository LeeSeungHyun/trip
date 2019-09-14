<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <i class="fas fa-angle-left"></i>
          </div>

          <div>
            <div class="modal-header">
              <slot name="header">
              
              </slot>
            </div>

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
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

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
    font-size: 1.8rem;
  }
</style>