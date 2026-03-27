<template>
  <div class="container-fluid py-4 progress-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Tiến độ học tập
        </h4>
        <small class="text-muted">
          Theo dõi kết quả học tập và phát âm của bé
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
          <small class="text-muted">Tiến độ tổng</small>
          <div class="fw-bold fs-3 text-primary">
            {{ overview.totalProgress }}%
          </div>

          <div class="progress mt-2" style="height: 6px;">
            <div
              class="progress-bar bg-primary"
              :style="{ width: overview.totalProgress + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Điểm trung bình</small>
          <div class="fw-bold fs-3 text-success">
            {{ overview.averageScore }}/100
          </div>

          <div class="progress mt-2" style="height: 6px;">
            <div
              class="progress-bar bg-success"
              :style="{ width: overview.averageScore + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Bài hoàn thành</small>
          <div class="fw-bold fs-3 text-warning">
            {{ overview.completedLessons }}
          </div>

          <small class="text-muted">
            / {{ overview.totalLessons }} bài học
          </small>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Âm cần luyện</small>
          <div class="fw-bold fs-3 text-danger">
            {{ weakSounds.length }}
          </div>

          <small class="text-muted">
            âm cần cải thiện
          </small>
        </div>
      </div>

    </div>

    <!-- TIẾN ĐỘ THEO CHỦ ĐỀ -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Tiến độ theo chủ đề
      </div>

      <div
        v-for="subject in subjects"
        :key="subject.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <div class="fw-bold">
              {{ subject.name }}
            </div>

            <small class="text-muted">
              {{ subject.completedLessons }}/{{ subject.totalLessons }} bài học
            </small>
          </div>

          <div class="fw-bold text-primary">
            {{ subject.progress }}%
          </div>
        </div>

        <div class="progress" style="height: 6px;">
          <div
            class="progress-bar"
            :class="getProgressClass(subject.progress)"
            :style="{ width: subject.progress + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- ÂM CẦN CẢI THIỆN -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Âm cần cải thiện
      </div>

      <div class="row g-3">

        <div
          v-for="sound in weakSounds"
          :key="sound.id"
          class="col-md-6"
        >
          <div class="bg-white rounded-4 border p-3 h-100">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="fw-bold">
                {{ sound.sound }}
              </div>

              <span class="badge bg-warning text-dark px-3 py-2">
                {{ sound.level }}
              </span>
            </div>

            <small class="text-muted d-block mb-2">
              {{ sound.description }}
            </small>

            <div class="progress mb-3" style="height: 6px;">
              <div
                class="progress-bar bg-danger"
                :style="{ width: sound.score + '%' }"
              ></div>
            </div>

            <button
              class="btn btn-outline-primary btn-sm rounded-pill"
              @click="goToSuggestion(sound.id)"
            >
              Xem gợi ý
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- LỊCH SỬ GẦN ĐÂY -->
    <div class="bg-light rounded-4 p-4 shadow-sm">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="fw-bold">
          Lịch sử luyện tập gần đây
        </div>

        <button
          class="btn btn-outline-primary btn-sm rounded-pill"
          @click="goToHistory"
        >
          Xem tất cả
        </button>
      </div>

      <div
        v-for="history in recentHistory"
        :key="history.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">
              {{ history.lesson }}
            </div>

            <small class="text-muted">
              {{ history.date }}
            </small>
          </div>

          <div class="text-end">
            <div class="fw-bold text-success">
              {{ history.score }}/100
            </div>

            <small class="text-muted">
              {{ history.status }}
            </small>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProgressOverview",

  data() {
    return {
      // dữ liệu tổng quan từ bảng tien_do_hoc_tap
      overview: {
        totalProgress: 68,
        averageScore: 78,
        completedLessons: 24,
        totalLessons: 35
      },

      // dữ liệu theo danh_muc_bai_hoc + bai_hoc
      subjects: [
        {
          id: 1,
          name: "Âm cơ bản",
          completedLessons: 8,
          totalLessons: 10,
          progress: 80
        },
        {
          id: 2,
          name: "Âm khó",
          completedLessons: 5,
          totalLessons: 10,
          progress: 50
        },
        {
          id: 3,
          name: "Nghe hiểu",
          completedLessons: 11,
          totalLessons: 15,
          progress: 73
        }
      ],

      // dữ liệu AI phân tích lỗi phát âm
      weakSounds: [
        {
          id: 1,
          sound: "Âm L/N",
          description: "Bé thường nhầm lẫn giữa âm L và N khi phát âm",
          level: "Cần luyện",
          score: 45
        },
        {
          id: 2,
          sound: "Âm S/X",
          description: "Bé phát âm chưa rõ sự khác biệt giữa âm S và X",
          level: "Trung bình",
          score: 60
        }
      ],

      // dữ liệu lịch sử gần đây
      recentHistory: [
        {
          id: 1,
          lesson: "Âm L",
          date: "20/03/2026",
          score: 82,
          status: "Hoàn thành"
        },
        {
          id: 2,
          lesson: "Âm N",
          date: "19/03/2026",
          score: 70,
          status: "Hoàn thành"
        },
        {
          id: 3,
          lesson: "Nghe hiểu cơ bản",
          date: "18/03/2026",
          score: 90,
          status: "Hoàn thành"
        }
      ]
    };
  },

  methods: {
    getProgressClass(progress) {
      if (progress >= 80) {
        return "bg-success";
      }

      if (progress >= 50) {
        return "bg-warning";
      }

      return "bg-danger";
    },

    goToSuggestion(soundId) {
      this.$router.push({
        path: '/parent/recommendation/home-practice',
        query: {
          soundId: soundId
        }
      });
    },

    goToHistory() {
      this.$router.push('/parent/history/practice');
    },

    goBack() {
      this.$router.push('/parent/dashboard');
    }
  }
};
</script>

<style scoped>
.progress-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>