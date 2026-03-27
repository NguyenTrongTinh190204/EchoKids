<template>
  <div class="record-button-wrapper text-center">

    <!-- HIỂN THỊ TRẠNG THÁI -->
    <div class="mb-3">
      <div
        class="record-circle mx-auto mb-3"
        :class="isRecording ? 'recording' : ''"
        @click="toggleRecording"
      >
        <div class="record-inner">
          {{ isRecording ? 'Dừng' : 'Ghi âm' }}
        </div>
      </div>

      <div class="fw-bold">
        {{ isRecording ? 'Đang ghi âm...' : 'Nhấn để bắt đầu ghi âm' }}
      </div>

      <small class="text-muted">
        {{ formattedTime }}
      </small>
    </div>

    <!-- NÚT ĐIỀU KHIỂN -->
    <div class="d-flex justify-content-center gap-2">

      <button
        class="btn btn-outline-secondary rounded-pill px-4"
        @click="resetRecording"
        :disabled="seconds === 0"
      >
        Đặt lại
      </button>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="toggleRecording"
      >
        {{ isRecording ? 'Dừng ghi âm' : 'Bắt đầu ghi âm' }}
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "RecordButton",

  data() {
    return {
      isRecording: false,
      seconds: 0,
      timer: null
    };
  },

  computed: {
    formattedTime() {
      const minutes = Math.floor(this.seconds / 60);
      const remainingSeconds = this.seconds % 60;

      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
  },

  methods: {
    toggleRecording() {
      this.isRecording = !this.isRecording;

      if (this.isRecording) {
        this.startTimer();
      } else {
        this.stopTimer();
      }

      this.$emit('record-status', this.isRecording);
    },

    startTimer() {
      this.timer = setInterval(() => {
        this.seconds++;
      }, 1000);
    },

    stopTimer() {
      clearInterval(this.timer);
    },

    resetRecording() {
      this.stopTimer();
      this.isRecording = false;
      this.seconds = 0;

      this.$emit('record-reset');
    }
  },

  beforeUnmount() {
    this.stopTimer();
  }
};
</script>

<style scoped>
.record-button-wrapper {
  width: 100%;
}

.record-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #e9f2ff;
  border: 6px solid #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.record-circle:hover {
  transform: scale(1.05);
}

.record-circle.recording {
  background: #ffe9e9;
  border-color: #dc3545;
  animation: pulse 1.2s infinite;
}

.record-inner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #0d6efd;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recording .record-inner {
  background: #dc3545;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.4);
  }

  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 16px rgba(220, 53, 69, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
  }
}
</style>