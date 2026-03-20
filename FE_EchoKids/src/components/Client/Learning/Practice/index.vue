<template>
  <div class="container py-4">

    <!-- HEADER -->
    <div class="text-center mb-4">
      <h4>🎤 Luyện phát âm</h4>
      <p class="text-muted">👉 Bé hãy nghe và nói theo nhé 🎈</p>
    </div>

    <!-- CHARACTER GUIDE -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Bé nghe trước rồi nói theo nhé!”
    </div>

    <!-- CONTENT -->
    <div class="card p-4 shadow-sm border-0 text-center mb-4">

      <!-- IMAGE -->
      <div class="mb-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt=""
          width="120"
        />
      </div>

      <!-- WORD -->
      <h3 class="mb-3">🐱 Con mèo</h3>

      <!-- AUDIO SAMPLE -->
      <button class="btn btn-primary me-2" @click="playSample">
        🔊 Nghe mẫu
      </button>

      <!-- RECORD -->
      <button
        class="btn"
        :class="isRecording ? 'btn-danger' : 'btn-success'"
        @click="toggleRecording"
      >
        {{ isRecording ? '⏹️ Dừng ghi âm' : '🎤 Bắt đầu nói' }}
      </button>

    </div>

    <!-- RESULT -->
    <div v-if="showResult" class="card p-4 shadow-sm border-0 text-center">

      <h5 class="mb-3">🎯 Kết quả của bé</h5>

      <h3 class="text-success mb-3">👏 Bé làm rất tốt!</h3>

      <!-- SCORE -->
      <p>⭐ Độ chính xác: <b>{{ score }}%</b></p>

      <!-- ERROR ANALYSIS -->
      <div class="mt-3">
        <p>📌 Nhận xét:</p>
        <ul class="list-unstyled">
          <li>✔️ Âm đầu: Tốt</li>
          <li>⚠️ Vần: Cần luyện thêm</li>
          <li>✔️ Thanh điệu: Đúng</li>
        </ul>
      </div>

      <!-- ACTION -->
      <div class="mt-3">
        <button class="btn btn-warning me-2" @click="retry">
          🔁 Thử lại
        </button>

        <button class="btn btn-success" @click="goNext">
          ➡️ Bài tiếp theo
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isRecording: false,
      showResult: false,
      score: 85
    };
  },

  methods: {
    playSample() {
      // TODO: call TTS API
      alert("🔊 Phát âm mẫu...");
    },

    toggleRecording() {
      this.isRecording = !this.isRecording;

      if (!this.isRecording) {
        // giả lập xử lý AI
        setTimeout(() => {
          this.showResult = true;
        }, 1000);
      }
    },

    retry() {
      this.showResult = false;
      this.isRecording = false;
    },

    goNext() {
      this.$router.push('/lesson-list');
    }
  }
};
</script>

<style scoped>
button {
  min-width: 140px;
}
</style>