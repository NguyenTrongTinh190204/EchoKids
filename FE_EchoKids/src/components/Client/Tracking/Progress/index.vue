<template>
  <div class="container py-4">

    <!-- HEADER -->
    <div class="text-center mb-4">
      <h4>⭐ Tiến bộ của bé</h4>
      <p class="text-muted">👉 Bé đang tiến bộ từng ngày 🎉</p>
    </div>

    <!-- CHARACTER -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Bé học rất chăm chỉ, cố gắng lên nhé!”
    </div>

    <!-- OVERVIEW -->
    <div class="row g-3 mb-4">

      <div class="col-md-4">
        <div class="card text-center p-3 shadow-sm border-0">
          <h6>🎯 Số bài đã luyện</h6>
          <h3>12</h3>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card text-center p-3 shadow-sm border-0">
          <h6>⭐ Mức độ tiến bộ</h6>
          <h5 class="text-success">Rất tốt 👍</h5>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card text-center p-3 shadow-sm border-0">
          <h6>🏆 Huy hiệu</h6>
          <h3>5</h3>
        </div>
      </div>

    </div>

    <!-- PROGRESS BAR -->
    <div class="card p-4 shadow-sm border-0 mb-4">

      <h5 class="mb-3">📈 Tiến độ học tập</h5>

      <div class="progress" style="height: 25px;">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :style="{ width: progress + '%' }"
        >
          {{ progress }}%
        </div>
      </div>

      <p class="text-muted mt-2">👉 Bé đã hoàn thành {{ progress }}% chương trình</p>

    </div>

    <!-- PRONUNCIATION ANALYSIS -->
    <div class="card p-4 shadow-sm border-0 mb-4">

      <h5 class="mb-3">🧠 Phân tích phát âm</h5>

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

    <!-- AI SUGGESTION -->
    <div class="card p-3 shadow-sm border-0 mb-4 bg-light text-center">
      💡 <b>Gợi ý:</b> Bé nên luyện thêm phần <b>vần</b> để nói rõ hơn nhé!
    </div>

    <!-- CTA -->
    <div class="text-center">
      <button class="btn btn-primary" @click="goPractice">
        🎮 Tiếp tục luyện tập
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 60
    };
  },

  methods: {
    goPractice() {
      this.$router.push('/subject-list');
    }
  }
};
</script>

<style scoped>
.progress-bar {
  font-weight: bold;
}
</style>