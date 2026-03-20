<template>
  <div class="container py-4">

    <!-- HEADER -->
    <div class="text-center mb-4">
      <h4>📖 Xem lại và luyện tập</h4>
      <p class="text-muted">👉 Bé cùng sửa lại những chỗ chưa tốt nhé 💪</p>
    </div>

    <!-- CHARACTER -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Không sao đâu! Mình luyện lại là sẽ giỏi hơn!”
    </div>

    <!-- WORD -->
    <div class="card p-4 shadow-sm border-0 text-center mb-4">
      <h2 class="mb-3">🐱 Con mèo</h2>

      <button class="btn btn-primary me-2" @click="playSample">
        🔊 Nghe mẫu đúng
      </button>

      <button class="btn btn-success" @click="recordAgain">
        🎤 Luyện lại
      </button>
    </div>

    <!-- ERROR DETAIL -->
    <div class="card p-4 shadow-sm border-0 mb-4">

      <h5 class="mb-3">📊 Phân tích lỗi</h5>

      <div class="row g-3">

        <!-- ÂM ĐẦU -->
        <div class="col-md-4">
          <div class="p-3 border rounded text-center bg-light">
            <h6>🔤 Âm đầu</h6>
            <p class="text-success">✔️ Tốt</p>
            <small>Phát âm rõ ràng</small>
          </div>
        </div>

        <!-- VẦN -->
        <div class="col-md-4">
          <div class="p-3 border rounded text-center bg-warning-subtle">
            <h6>🔡 Vần</h6>
            <p class="text-warning">⚠️ Chưa rõ</p>
            <small>Cần luyện thêm</small>
          </div>
        </div>

        <!-- THANH -->
        <div class="col-md-4">
          <div class="p-3 border rounded text-center bg-light">
            <h6>🎵 Thanh điệu</h6>
            <p class="text-success">✔️ Đúng</p>
            <small>Rất tốt</small>
          </div>
        </div>

      </div>

    </div>

    <!-- AI SUGGESTION -->
    <div class="card p-3 shadow-sm border-0 mb-4 bg-light text-center">
      💡 <b>Gợi ý:</b> Bé hãy chú ý phát âm rõ phần <b>“èo”</b> trong từ <b>“mèo”</b> nhé!
    </div>

    <!-- PRACTICE AGAIN -->
    <div class="card p-4 shadow-sm border-0 text-center">

      <h5 class="mb-3">🎯 Luyện lại ngay</h5>

      <button class="btn btn-warning me-2" @click="recordAgain">
        🔁 Luyện lại
      </button>

      <button class="btn btn-success" @click="goNext">
        ➡️ Bài tiếp theo
      </button>

    </div>

  </div>
</template>

<script>
export default {
  methods: {
    playSample() {
      alert("🔊 Phát âm mẫu đúng...");
    },

    recordAgain() {
      this.$router.push('/practice/1');
    },

    goNext() {
      this.$router.push('/lesson-list');
    }
  }
};
</script>