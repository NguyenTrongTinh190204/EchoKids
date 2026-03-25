<template>
  <div v-if="show" class="loading-wrapper">

    <!-- nhân vật -->
    <div class="character">
      🐻
    </div>

    <!-- dấu chấm -->
    <div class="dots">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>

    <!-- hướng dẫn bằng giọng nói -->
    <VoiceGuide
      v-if="voice && autoVoice"
      :text="voice"
      :auto="true"
    />

  </div>
</template>

<script>
import VoiceGuide from "../../Common/VoiceGuide.vue";

export default {
  components: { VoiceGuide },

  props: {
    show: {
      type: Boolean,
      default: false
    },

    voice: {
      type: String,
      default: "Đợi một chút nhé"
    },

    // có tự phát giọng hay không
    autoVoice: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    show(val) {
      // khi loading tắt thì dừng giọng nói
      if (!val) {
        window.speechSynthesis.cancel();
      }
    }
  }
};
</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* nhân vật */
.character {
  font-size: 60px;
  animation: bounce 1s infinite;
}

/* dấu chấm */
.dots span {
  font-size: 30px;
  animation: blink 1.4s infinite;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

/* hiệu ứng nhảy */
@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* hiệu ứng nhấp nháy */
@keyframes blink {
  0%,100% { opacity: 0.2; }
  50% { opacity: 1; }
}
</style>