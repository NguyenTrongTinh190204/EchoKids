<template>
  <div class="bg-light rounded-4 p-4 shadow-sm text-center">

    <!-- KẾT QUẢ -->
    <div class="mb-4">
      <div class="fw-bold text-success fs-2">
        {{ feedback.score }}/100
      </div>

      <small class="text-muted">
        {{ feedback.message }}
      </small>
    </div>

    <!-- THANH ĐIỂM -->
    <div class="mb-4">
      <div class="progress rounded-pill" style="height: 10px;">
        <div
          class="progress-bar"
          :class="getScoreClass(feedback.score)"
          :style="{ width: feedback.score + '%' }"
        ></div>
      </div>
    </div>

    <!-- CHI TIẾT PHẢN HỒI -->
    <div class="bg-white rounded-4 border p-3 mb-4 text-start">

      <div class="fw-bold mb-3">
        Chi tiết phát âm
      </div>

      <div class="mb-2 d-flex justify-content-between">
        <small class="text-muted">Âm đầu</small>
        <small class="fw-bold text-warning">
          {{ feedback.initialSound }}
        </small>
      </div>

      <div class="mb-2 d-flex justify-content-between">
        <small class="text-muted">Vần</small>
        <small class="fw-bold text-success">
          {{ feedback.vowelSound }}
        </small>
      </div>

      <div class="mb-2 d-flex justify-content-between">
        <small class="text-muted">Thanh điệu</small>
        <small class="fw-bold text-danger">
          {{ feedback.tone }}
        </small>
      </div>

    </div>

    <!-- ÂM CẦN CẢI THIỆN -->
    <div class="bg-white rounded-4 border p-3 mb-4">
      <div class="fw-bold mb-2">
        Âm cần cải thiện
      </div>

      <div class="d-flex justify-content-center gap-2 flex-wrap">
        <span
          v-for="error in feedback.errors"
          :key="error"
          class="badge bg-warning text-dark px-3 py-2"
        >
          {{ error }}
        </span>
      </div>
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
        @click="goToResult"
      >
        Tiếp tục
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "FeedbackStep",

  props: {
    feedback: {
      type: Object,
      default() {
        return {
          score: 82,
          message: "Rất tốt! Bé cần phát âm rõ hơn âm đầu L.",
          initialSound: "Chưa rõ",
          vowelSound: "Tốt",
          tone: "Cần cải thiện",
          errors: [
            "Âm đầu L",
            "Thanh sắc"
          ]
        };
      }
    }
  },

  methods: {
    getScoreClass(score) {
      if (score >= 80) {
        return "bg-success";
      }

      if (score >= 50) {
        return "bg-warning";
      }

      return "bg-danger";
    },

    retryPractice() {
      this.$router.push('/child/practice/therapy');
    },

    goToResult() {
      this.$router.push('/child/speaking/result');
    }
  }
};
</script>

<style scoped>
.badge {
  font-size: 13px;
}
</style>