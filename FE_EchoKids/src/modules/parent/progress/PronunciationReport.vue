<template>
  <div class="container-fluid py-4 report-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Báo cáo phát âm
        </h4>
        <small class="text-muted">
          Phân tích chi tiết lỗi phát âm và tiến bộ của bé
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- THÔNG TIN TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Điểm trung bình</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.averageScore }}/100
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Âm lỗi phổ biến</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.commonErrors }}
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Từ đã luyện</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalWords }}
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Mức cải thiện</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.improvement }}%
          </div>
        </div>
      </div>

    </div>

    <!-- ÂM LỖI PHỔ BIẾN -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Âm lỗi phổ biến
      </div>

      <div
        v-for="error in commonErrors"
        :key="error.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <div class="fw-bold">
              {{ error.sound }}
            </div>

            <small class="text-muted">
              {{ error.description }}
            </small>
          </div>

          <span class="badge bg-warning text-dark px-3 py-2">
            {{ error.frequency }} lần
          </span>
        </div>

        <div class="progress" style="height: 6px;">
          <div
            class="progress-bar bg-warning"
            :style="{ width: error.percent + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- CHI TIẾT PHÁT ÂM -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Chi tiết từng âm
      </div>

      <div class="row g-3">

        <div
          v-for="sound in soundDetails"
          :key="sound.id"
          class="col-md-6"
        >
          <div class="bg-white rounded-4 border p-3 h-100">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="fw-bold">
                {{ sound.sound }}
              </div>

              <span
                class="badge px-3 py-2"
                :class="getBadgeClass(sound.score)"
              >
                {{ sound.score }}/100
              </span>
            </div>

            <small class="text-muted d-block mb-3">
              {{ sound.note }}
            </small>

            <div class="progress" style="height: 6px;">
              <div
                class="progress-bar"
                :class="getProgressClass(sound.score)"
                :style="{ width: sound.score + '%' }"
              ></div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- GỢI Ý LUYỆN TẬP -->
    <div class="bg-light rounded-4 p-4 shadow-sm">
      <div class="fw-bold mb-3">
        Gợi ý luyện tập tại nhà
      </div>

      <div
        v-for="suggestion in suggestions"
        :key="suggestion.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="fw-bold mb-2">
          {{ suggestion.title }}
        </div>

        <small class="text-muted d-block mb-3">
          {{ suggestion.description }}
        </small>

        <button
          class="btn btn-outline-primary btn-sm rounded-pill"
          @click="goToSuggestion(suggestion.id)"
        >
          Xem chi tiết
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PronunciationReport",

  data() {
    return {
      // dữ liệu tổng quan
      summary: {
        averageScore: 78,
        commonErrors: 3,
        totalWords: 42,
        improvement: 15
      },

      // dữ liệu từ AI phân tích lỗi
      commonErrors: [
        {
          id: 1,
          sound: "Âm L/N",
          description: "Bé thường nhầm lẫn giữa L và N",
          frequency: 12,
          percent: 75
        },
        {
          id: 2,
          sound: "Âm S/X",
          description: "Bé phát âm chưa rõ S và X",
          frequency: 8,
          percent: 55
        },
        {
          id: 3,
          sound: "Thanh sắc",
          description: "Bé thường phát âm chưa rõ thanh sắc",
          frequency: 5,
          percent: 40
        }
      ],

      // chi tiết từng âm
      soundDetails: [
        {
          id: 1,
          sound: "Âm L",
          score: 65,
          note: "Cần luyện thêm đầu lưỡi khi phát âm"
        },
        {
          id: 2,
          sound: "Âm N",
          score: 80,
          note: "Phát âm khá tốt"
        },
        {
          id: 3,
          sound: "Âm S",
          score: 55,
          note: "Cần kéo dài âm rõ hơn"
        },
        {
          id: 4,
          sound: "Âm X",
          score: 72,
          note: "Đã cải thiện tốt"
        }
      ],

      // gợi ý luyện tập
      suggestions: [
        {
          id: 1,
          title: "Luyện âm L với từ đơn giản",
          description: "Luyện các từ: Lá, Leo, Lửa, Lợn"
        },
        {
          id: 2,
          title: "Phân biệt âm S và X",
          description: "Luyện các từ: Sông, Xe, Sữa, Xoài"
        }
      ]
    };
  },

  methods: {
    getBadgeClass(score) {
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

    goToSuggestion(suggestionId) {
      this.$router.push({
        path: '/parent/recommendation/home-practice',
        query: {
          suggestionId: suggestionId
        }
      });
    },

    goBack() {
      this.$router.push('/parent/progress/overview');
    }
  }
};
</script>

<style scoped>
.report-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>