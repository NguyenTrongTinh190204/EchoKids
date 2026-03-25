<template>
  <button
    class="btn btn-warning shadow-sm px-4 py-3 d-flex align-items-center justify-content-center gap-2"
    @click="playAudio"
  >
    🔊
    <span v-if="showText">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    audioUrl: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Nghe"
    },
    showText: {
      type: Boolean,
      default: false
    }
  },
  methods: {
playAudio() {
  if (this.audioUrl) {
    const audio = new Audio(this.audioUrl);
    audio.play();
    return;
  }

  if (this.text) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(this.text);

    // đợi load voice
    const voices = speechSynthesis.getVoices();

    // ưu tiên tiếng Việt
    let viVoice = voices.find(v => v.lang === "vi-VN");

    // fallback nếu không có vi-VN
    if (!viVoice) {
      viVoice = voices.find(v => v.lang.includes("vi"));
    }

    // nếu vẫn không có thì KHÔNG set voice (tránh sai giọng)
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.lang = "vi-VN"; // QUAN TRỌNG

    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    speechSynthesis.speak(utterance);
  }
}
  }
};
</script>

<style scoped>
button {
  font-size: 20px;
  border-radius: 18px;
  min-width: 80px;
}

button:active {
  transform: scale(0.95);
}
</style>