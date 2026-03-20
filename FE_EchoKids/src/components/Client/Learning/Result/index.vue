<template>
  <div class="container py-4">

    <!-- HEADER -->
    <div class="text-center mb-4">
      <h4>🏆 Kết quả luyện tập</h4>
      <p class="text-muted">👉 Bé đã hoàn thành rất tốt 🎉</p>
    </div>

    <!-- CHARACTER -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Bé giỏi lắm! Mình cùng xem kết quả nhé!”
    </div>

    <!-- RESULT MAIN -->
    <div class="card p-4 shadow-sm border-0 text-center mb-4">

      <!-- EMOTION -->
      <h3 class="text-success mb-3">👏 Bé làm rất tốt!</h3>

      <!-- SCORE -->
      <h5 class="mb-3">⭐ Độ chính xác: {{ score }}%</h5>

      <!-- PROGRESS BAR -->
      <div class="progress mb-3" style="height: 20px;">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :style="{ width: score + '%' }"
        >
          {{ score }}%
        </div>
      </div>

    </div>

    <!-- ERROR ANALYSIS -->
    <div class="card p-4 shadow-sm border-0 mb-4">

      <h5 class="mb-3">📊 Nhận xét chi tiết</h5>

      <ul class="list-group list-group-flush">

        <li class="list-group-item d-flex justify-content-between">
          <span>🔤 Âm đầu</span>
          <span class="text-success">✔️ Tốt</span>
        </li>

        <li class="list-group-item d-flex justify-content-between">
          <span>🔡 Vần</span>
          <span class="text-warning">⚠️ Cần luyện thêm</span>
        </li>

        <li class="list-group-item d-flex justify-content-between">
          <span>🎵 Thanh điệu</span>
          <span class="text-success">✔️ Đúng</span>
        </li>

      </ul>

    </div>

    <!-- AI FEEDBACK -->
    <div class="card p-3 shadow-sm border-0 mb-4 bg-light text-center">
      💡 <b>Gợi ý:</b> Bé nên luyện thêm phần <b>vần</b> để nói rõ hơn nhé!
    </div>

    <!-- ACTION -->
    <div class="text-center">

      <button class="btn btn-warning me-2" @click="retry">
        🔁 Thử lại
      </button>

      <button class="btn btn-primary me-2" @click="goReview">
        📖 Xem lại bài
      </button>

      <button class="btn btn-success" @click="goNext">
        ➡️ Bài tiếp theo
      </button>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 85
    };
  },

  methods: {
    retry() {
      this.$router.back(); // quay lại practice
    },

    goReview() {
      this.$router.push('/review');
    },

    goNext() {
      this.$router.push('/lesson-list');
    }
  }
};
</script>

<style scoped>
.progress-bar {
  font-weight: bold;
}
</style>