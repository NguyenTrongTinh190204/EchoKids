<template>
  <div class="container py-3 result-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <div class="fw-bold text-primary">Kết quả phát âm 🎉</div>
        <small class="text-muted">
          Đây là kết quả luyện tập của bé
        </small>
      </div>

      <button
        class="btn btn-outline-primary btn-sm rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- ĐIỂM TỔNG -->
    <div class="bg-light rounded-4 p-4 shadow-sm text-center mb-4">
      <div class="display-4 fw-bold text-success mb-2">
        {{ result.score }}/100
      </div>

      <div class="mb-3">
        <span
          class="badge px-3 py-2"
          :class="getResultBadgeClass(result.score)"
        >
          {{ getResultText(result.score) }}
        </span>
      </div>

      <small class="text-muted">
        {{ result.message }}
      </small>

      <div class="progress rounded-pill mt-4" style="height: 10px;">
        <div
          class="progress-bar"
          :class="getProgressClass(result.score)"
          :style="{ width: result.score + '%' }"
        ></div>
      </div>
    </div>

    <!-- CHI TIẾT PHÁT ÂM -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Chi tiết phát âm
      </div>

      <div class="bg-white rounded-4 border p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <small class="text-muted">Âm đầu</small>
          <span class="fw-bold text-warning">
            {{ result.initial_sound }}
          </span>
        </div>

        <div class="progress" style="height: 6px;">
          <div
            class="progress-bar bg-warning"
            :style="{ width: result.initial_score + '%' }"
          ></div>
        </div>
      </div>

      <div class="bg-white rounded-4 border p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <small class="text-muted">Vần</small>
          <span class="fw-bold text-success">
            {{ result.vowel_sound }}
          </span>
        </div>

        <div class="progress" style="height: 6px;">
          <div
            class="progress-bar bg-success"
            :style="{ width: result.vowel_score + '%' }"
          ></div>
        </div>
      </div>

      <div class="bg-white rounded-4 border p-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <small class="text-muted">Thanh điệu</small>
          <span class="fw-bold text-danger">
            {{ result.tone }}
          </span>
        </div>

        <div class="progress" style="height: 6px;">
          <div
            class="progress-bar bg-danger"
            :style="{ width: result.tone_score + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- ÂM CẦN CẢI THIỆN -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Âm cần cải thiện
      </div>

      <div class="d-flex flex-wrap gap-2">
        <span
          v-for="error in result.errors"
          :key="error"
          class="badge bg-warning text-dark px-3 py-2"
        >
          {{ error }}
        </span>
      </div>
    </div>

    <!-- GỢI Ý LUYỆN TẬP -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-2">
        Gợi ý luyện tập 🎯
      </div>

      <small class="text-muted">
        {{ result.suggestion }}
      </small>
    </div>

    <!-- NÚT HÀNH ĐỘNG -->
    <div class="d-flex justify-content-center gap-2 flex-wrap">
      <button
        class="btn btn-outline-primary rounded-pill px-4"
        @click="retryPractice"
      >
        Luyện lại
      </button>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToTracking"
      >
        Xem tiến độ
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "PronunciationResult",

  data() {
    return {
      // dữ liệu từ AI + bảng tien_do_hoc_tap
      result: {
        score: 82,
        message: "Bé phát âm khá tốt, cần luyện thêm âm đầu L.",
        initial_sound: "Chưa rõ",
        initial_score: 65,
        vowel_sound: "Tốt",
        vowel_score: 90,
        tone: "Cần cải thiện",
        tone_score: 70,
        errors: [
          "Âm đầu L",
          "Thanh sắc"
        ],
        suggestion: "Nên luyện thêm các từ bắt đầu bằng âm L như: Lá, Leo, Lửa."
      }
    };
  },

  methods: {
    getResultText(score) {
      if (score >= 80) {
        return "Rất tốt";
      }

      if (score >= 60) {
        return "Khá tốt";
      }

      return "Cần cố gắng";
    },

    getResultBadgeClass(score) {
      if (score >= 80) {
        return "bg-success";
      }

      if (score >= 60) {
        return "bg-warning text-dark";
      }

      return "bg-danger";
    },

    getProgressClass(score) {
      if (score >= 80) {
        return "bg-success";
      }

      if (score >= 60) {
        return "bg-warning";
      }

      return "bg-danger";
    },

    retryPractice() {
      this.$router.push('/child/practice/therapy');
    },

    goToTracking() {
      this.$router.push('/child/tracking/progress');
    },

    goBack() {
      this.$router.push('/child/practice/therapy');
    }
  }
};
</script>

<style scoped>
.result-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>