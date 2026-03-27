<template>
  <div class="container py-3 review-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <div class="fw-bold text-primary">Ôn lại lỗi sai 📚</div>
        <small class="text-muted">
          Những âm bé cần luyện thêm
        </small>
      </div>

      <button
        class="btn btn-outline-primary btn-sm rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- DANH SÁCH LỖI -->
    <div class="row g-3">

      <div
        v-for="mistake in mistakes"
        :key="mistake.id"
        class="col-12"
      >
        <div class="bg-light rounded-4 p-3 shadow-sm">

          <div class="d-flex justify-content-between align-items-start mb-3">
            <div>
              <div class="fw-bold">
                {{ mistake.word }}
              </div>

              <small class="text-muted">
                {{ mistake.error_type }}
              </small>
            </div>

            <span class="badge bg-warning text-dark px-3 py-2">
              {{ mistake.level }}
            </span>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <div class="small text-muted mb-2">
              Phát âm đúng:
            </div>

            <div class="fw-bold text-success">
              {{ mistake.correct_pronunciation }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <div class="small text-muted mb-2">
              Gợi ý luyện tập:
            </div>

            <div class="fw-bold">
              {{ mistake.suggestion }}
            </div>
          </div>

          <button
            class="btn btn-primary btn-sm rounded-pill"
            @click="practiceAgain(mistake.id)"
          >
            Luyện lại
          </button>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ReviewMistakes",

  data() {
    return {
      // dữ liệu từ bảng tien_do_hoc_tap + AI feedback
      mistakes: [
        {
          id: 1,
          word: "Lá",
          error_type: "Sai âm đầu L",
          correct_pronunciation: "Lờ-á",
          suggestion: "Hãy đặt đầu lưỡi chạm nhẹ vào răng trên khi phát âm.",
          level: "Cần luyện"
        },
        {
          id: 2,
          word: "Sông",
          error_type: "Sai âm S/X",
          correct_pronunciation: "Sờ-ông",
          suggestion: "Phát âm nhẹ và kéo dài âm S hơn.",
          level: "Trung bình"
        },
        {
          id: 3,
          word: "Nắng",
          error_type: "Sai thanh điệu",
          correct_pronunciation: "Nắng",
          suggestion: "Hãy chú ý lên giọng ở thanh sắc.",
          level: "Khó"
        }
      ]
    };
  },

  methods: {
    practiceAgain(mistakeId) {
      this.$router.push({
        path: '/child/practice/therapy',
        query: {
          practiceId: mistakeId
        }
      });
    },

    goBack() {
      this.$router.push('/child/tracking/progress');
    }
  }
};
</script>

<style scoped>
.review-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>