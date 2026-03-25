<template>
  <button
    class="mic-btn"
    :class="{ recording: isRecording }"
    @click="toggleRecording"
  >
    <!-- ICON -->
    <div class="icon">
      {{ isRecording ? "⏹️" : "🎤" }}
    </div>

    <!-- LABEL -->
    <div class="label">
      {{ isRecording ? "Dừng" : "Nói" }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    autoStop: {
      type: Number,
      default: 3000 // ms
    }
  },
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      audioChunks: []
    };
  },
  methods: {
    async toggleRecording() {
      if (!this.isRecording) {
        await this.startRecording();
      } else {
        this.stopRecording();
      }
    },

    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true
        });

        this.mediaRecorder = new MediaRecorder(stream);
        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = (e) => {
          this.audioChunks.push(e.data);
        };

        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.audioChunks, { type: "audio/webm" });
          this.$emit("recorded", blob);
        };

        this.mediaRecorder.start();
        this.isRecording = true;

        this.$emit("start");

        // AUTO STOP
        setTimeout(() => {
          if (this.isRecording) {
            this.stopRecording();
          }
        }, this.autoStop);

      } catch (err) {
        console.error("Mic error:", err);
      }
    },

    stopRecording() {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
        this.isRecording = false;
        this.$emit("stop");
      }
    }
  }
};
</script>

<style scoped>
.mic-btn {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: none;
  background: #ffc107;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

/* ICON */
.icon {
  font-size: 36px;
}

/* LABEL */
.label {
  font-size: 16px;
  font-weight: 600;
}

/* RECORDING STATE */
.recording {
  background: #dc3545;
  color: white;
  animation: pulse 1s infinite;
}

/* ACTIVE */
.mic-btn:active {
  transform: scale(0.95);
}

/* ANIMATION */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>