<template>
  <div class="container-fluid py-4 suggestion-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Gợi ý luyện tập tại nhà
        </h4>
        <small class="text-muted">
          Các bài tập phù hợp với lỗi phát âm của bé
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- TÓM TẮT -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="row g-3">

        <div class="col-md-4">
          <div class="bg-white rounded-4 border p-3 h-100">
            <small class="text-muted d-block mb-1">
              Âm cần luyện
            </small>

            <div class="fw-bold text-danger fs-5">
              {{ summary.sound }}
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="bg-white rounded-4 border p-3 h-100">
            <small class="text-muted d-block mb-1">
              Mức độ
            </small>

            <div class="fw-bold text-warning fs-5">
              {{ summary.level }}
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="bg-white rounded-4 border p-3 h-100">
            <small class="text-muted d-block mb-1">
              Thời gian đề xuất
            </small>

            <div class="fw-bold text-primary fs-5">
              {{ summary.duration }}
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- DANH SÁCH GỢI Ý -->
    <div class="row g-3 mb-4">

      <div
        v-for="exercise in exercises"
        :key="exercise.id"
        class="col-lg-6"
      >
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <div>
              <div class="fw-bold">
                {{ exercise.title }}
              </div>

              <small class="text-muted">
                {{ exercise.type }}
              </small>
            </div>

            <span class="badge bg-primary px-3 py-2">
              {{ exercise.time }}
            </span>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted">
              {{ exercise.description }}
            </small>
          </div>

          <div class="mb-3">
            <div class="small text-muted mb-2">
              Từ gợi ý:
            </div>

            <div class="d-flex flex-wrap gap-2">
              <span
                v-for="word in exercise.words"
                :key="word"
                class="badge bg-warning text-dark px-3 py-2"
              >
                {{ word }}
              </span>
            </div>
          </div>

          <button
            class="btn btn-outline-primary rounded-pill"
            @click="goToExercise(exercise.id)"
          >
            Xem chi tiết
          </button>
        </div>
      </div>

    </div>

    <!-- LƯU Ý -->
    <div class="bg-light rounded-4 p-4 shadow-sm">
      <div class="fw-bold mb-2">
        Lưu ý cho phụ huynh
      </div>

      <small class="text-muted">
        Hãy luyện tập cùng bé mỗi ngày từ 10 - 15 phút. Không nên ép bé nói quá nhanh,
        hãy khuyến khích bé phát âm chậm và rõ ràng.
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePracticeSuggestion",

  data() {
    return {
      // dữ liệu từ AI + báo cáo phát âm
      summary: {
        sound: "Âm L/N",
        level: "Cần luyện thêm",
        duration: "10 - 15 phút/ngày"
      },

      // dữ liệu gợi ý bài tập
      exercises: [
        {
          id: 1,
          title: "Luyện âm L với từ đơn giản",
          type: "Phát âm cơ bản",
          time: "10 phút",
          description: "Giúp bé phát âm rõ âm L bằng cách đặt đầu lưỡi chạm nhẹ vào răng trên.",
          words: [
            "Lá",
            "Leo",
            "Lửa",
            "Lợn"
          ]
        },
        {
          id: 2,
          title: "Phân biệt âm L và N",
          type: "So sánh âm",
          time: "15 phút",
          description: "Cho bé luyện các cặp từ gần giống nhau để nhận biết sự khác biệt.",
          words: [
            "Lá - Ná",
            "Lên - Nên",
            "Lâu - Nâu"
          ]
        }
      ]
    };
  },

  methods: {
    goToExercise(exerciseId) {
      this.$router.push({
        path: '/parent/progress/report',
        query: {
          exerciseId: exerciseId
        }
      });
    },

    goBack() {
      this.$router.push('/parent/progress/report');
    }
  }
};
</script>

<style scoped>
.suggestion-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>