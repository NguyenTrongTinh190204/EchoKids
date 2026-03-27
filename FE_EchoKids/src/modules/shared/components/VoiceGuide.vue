<template>
  <div class="voice-guide bg-light rounded-4 p-3 shadow-sm">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <div class="fw-bold">
          {{ title }}
        </div>

        <small class="text-muted">
          {{ subtitle }}
        </small>
      </div>

      <span
        class="badge px-3 py-2"
        :class="isPlaying ? 'bg-success' : 'bg-secondary'"
      >
        {{ isPlaying ? 'Đang phát' : 'Sẵn sàng' }}
      </span>
    </div>

    <!-- NỘI DUNG -->
    <div class="bg-white rounded-4 border p-3 mb-3">
      <div class="fw-bold text-primary mb-2">
        {{ text }}
      </div>

      <small class="text-muted">
        {{ helperText }}
      </small>
    </div>

    <!-- NÚT ĐIỀU KHIỂN -->
    <div class="d-flex gap-2">

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="playGuide"
      >
        {{ isPlaying ? 'Phát lại hướng dẫn' : 'Nghe hướng dẫn' }}
      </button>

      <button
        class="btn btn-outline-secondary rounded-pill px-4"
        @click="stopGuide"
        :disabled="!isPlaying"
      >
        Dừng
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "VoiceGuide",

  props: {
    title: {
      type: String,
      default: "Hướng dẫn bằng giọng nói"
    },

    subtitle: {
      type: String,
      default: "Bé hãy nghe kỹ trước khi bắt đầu"
    },

    text: {
      type: String,
      default: "Hãy nghe âm thanh và lặp lại thật rõ nhé."
    },

    helperText: {
      type: String,
      default: "Có thể phát lại nhiều lần để bé dễ ghi nhớ."
    }
  },

  data() {
    return {
      isPlaying: false,
      speechInstance: null
    };
  },

  methods: {
    playGuide() {
      if (!window.speechSynthesis) {
        return;
      }

      this.stopGuide();

      const speech = new SpeechSynthesisUtterance(this.text);

      speech.lang = "vi-VN";
      speech.rate = 0.9;
      speech.pitch = 1;

      speech.onstart = () => {
        this.isPlaying = true;
      };

      speech.onend = () => {
        this.isPlaying = false;
      };

      this.speechInstance = speech;
      window.speechSynthesis.speak(speech);
    },

    stopGuide() {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      this.isPlaying = false;
    }
  },

  beforeUnmount() {
    this.stopGuide();
  }
};
</script>

<style scoped>
.voice-guide {
  width: 100%;
}
</style>