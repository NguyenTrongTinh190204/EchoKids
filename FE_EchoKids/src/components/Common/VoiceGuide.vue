<template>
  <div v-if="show" class="voice-guide text-center mb-3">

    <!-- 🔊 Nút phát -->
    <button
      class="btn btn-light shadow-sm px-4 py-2"
      @click="speak"
    >
      🔊 Nghe hướng dẫn
    </button>

  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    if (this.auto) {
      this.speak();
    }
  },
  methods: {
    speak() {
      if (!this.text) return;

      // 🔥 Dừng audio cũ
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(this.text);

      // 👉 Chọn giọng tiếng Việt nếu có
      const voices = speechSynthesis.getVoices();
      const viVoice = voices.find(v => v.lang.includes("vi"));

      if (viVoice) {
        utterance.voice = viVoice;
      }

      utterance.rate = 0.9;   // nói chậm cho trẻ
      utterance.pitch = 1.1;  // giọng vui hơn

      speechSynthesis.speak(utterance);
    }
  }
};
</script>

<style scoped>
.voice-guide button {
  font-size: 18px;
  border-radius: 20px;
}
</style>