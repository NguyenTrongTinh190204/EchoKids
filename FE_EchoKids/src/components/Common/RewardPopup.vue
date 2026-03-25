<template>
  <div v-if="show" class="overlay">

    <div class="popup text-center shadow-lg">

      <!-- biểu cảm -->
      <div class="emoji">
        {{ success ? "🎉" : "🙂" }}
      </div>

      <!-- nội dung -->
      <div class="message">
        {{ success ? successText : retryText }}
      </div>

      <!-- nút tiếp tục -->
      <button class="btn btn-primary mt-3 px-4" @click="close">
        Tiếp tục
      </button>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },

    success: {
      type: Boolean,
      default: true
    },

    successText: {
      type: String,
      default: "Giỏi lắm!"
    },

    retryText: {
      type: String,
      default: "Thử lại nhé!"
    },

    // tự đóng sau bao lâu (ms)
    autoClose: {
      type: Number,
      default: 1500
    }
  },

  data() {
    return {
      audio: null,
      timer: null
    };
  },

  watch: {
    show(val) {
      if (val) {
        this.playSound();
        this.startAutoClose();
      } else {
        this.cleanup();
      }
    }
  },

  methods: {
    close() {
      this.$emit("close");
      this.cleanup();
    },

    playSound() {
      const sound = this.success
        ? "/sound/success.mp3"
        : "/sound/retry.mp3";

      this.audio = new Audio(sound);
      this.audio.play().catch(() => {});
    },

    startAutoClose() {
      if (this.autoClose > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.autoClose);
      }
    },

    cleanup() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      if (this.audio) {
        this.audio.pause();
        this.audio = null;
      }
    }
  },

  beforeUnmount() {
    this.cleanup();
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* khung popup */
.popup {
  background: white;
  border-radius: 20px;
  padding: 30px;
  width: 260px;
}

/* biểu cảm */
.emoji {
  font-size: 50px;
}

/* nội dung */
.message {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}
</style>