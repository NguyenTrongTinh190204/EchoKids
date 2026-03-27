<template>
  <div class="audio-player bg-light rounded-4 p-3 shadow-sm">

    <!-- TIÊU ĐỀ -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <div class="fw-bold">
          {{ title }}
        </div>

        <small class="text-muted">
          {{ subtitle }}
        </small>
      </div>

      <span class="badge bg-primary px-3 py-2">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </span>
    </div>

    <!-- THANH TIẾN ĐỘ -->
    <div class="mb-3">
      <input
        type="range"
        class="form-range"
        min="0"
        :max="duration"
        v-model="currentTime"
        @input="seekAudio"
      >
    </div>

    <!-- NÚT ĐIỀU KHIỂN -->
    <div class="d-flex align-items-center justify-content-between">

      <button
        class="btn btn-outline-secondary rounded-pill px-3"
        @click="restartAudio"
      >
        Phát lại
      </button>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="toggleAudio"
      >
        {{ isPlaying ? 'Tạm dừng' : 'Phát âm thanh' }}
      </button>

      <button
        class="btn btn-outline-secondary rounded-pill px-3"
        @click="increaseSpeed"
      >
        {{ playbackRate }}x
      </button>

    </div>

    <!-- AUDIO -->
    <audio
      ref="audioRef"
      :src="audioSrc"
      @loadedmetadata="setDuration"
      @timeupdate="updateCurrentTime"
      @ended="handleEnded"
    ></audio>

  </div>
</template>

<script>
export default {
  name: "AudioPlayer",

  props: {
    audioSrc: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: "Âm thanh bài học"
    },

    subtitle: {
      type: String,
      default: "Nghe và luyện phát âm"
    }
  },

  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      playbackRate: 1
    };
  },

  methods: {
    toggleAudio() {
      const audio = this.$refs.audioRef;

      if (!audio) {
        return;
      }

      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      this.isPlaying = !this.isPlaying;
    },

    restartAudio() {
      const audio = this.$refs.audioRef;

      if (!audio) {
        return;
      }

      audio.currentTime = 0;
      this.currentTime = 0;

      audio.play();
      this.isPlaying = true;
    },

    increaseSpeed() {
      const audio = this.$refs.audioRef;

      if (!audio) {
        return;
      }

      if (this.playbackRate === 1) {
        this.playbackRate = 1.25;
      } else if (this.playbackRate === 1.25) {
        this.playbackRate = 1.5;
      } else {
        this.playbackRate = 1;
      }

      audio.playbackRate = this.playbackRate;
    },

    setDuration() {
      const audio = this.$refs.audioRef;

      if (audio) {
        this.duration = Math.floor(audio.duration);
      }
    },

    updateCurrentTime() {
      const audio = this.$refs.audioRef;

      if (audio) {
        this.currentTime = Math.floor(audio.currentTime);
      }
    },

    seekAudio() {
      const audio = this.$refs.audioRef;

      if (audio) {
        audio.currentTime = this.currentTime;
      }
    },

    handleEnded() {
      this.isPlaying = false;
      this.currentTime = 0;
    },

    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  }
};
</script>

<style scoped>
.audio-player {
  width: 100%;
}

.form-range::-webkit-slider-thumb {
  background: #0d6efd;
}

.form-range::-moz-range-thumb {
  background: #0d6efd;
}
</style>