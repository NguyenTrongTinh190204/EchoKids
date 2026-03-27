<template>
  <div class="container-xxl py-3 subject-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h6 class="text-primary mb-0">Chủ đề học 📚</h6>
        <small class="text-muted">
          Chọn chủ đề để bắt đầu luyện tập
        </small>
      </div>

      <div style="width: 120px;">
        <div class="progress rounded-pill" style="height: 6px;">
          <div
            class="progress-bar bg-success"
            :style="{ width: overallProgress + '%' }"
          ></div>
        </div>
        <small class="text-muted">{{ overallProgress }}%</small>
      </div>
    </div>

    <!-- DANH SÁCH CHỦ ĐỀ -->
    <div class="row g-3">

      <div
        v-for="subject in subjects"
        :key="subject.id"
        class="col-12"
      >
        <div
          class="bg-light rounded-4 p-3 shadow-sm subject-card"
          @click="goToLessons(subject.id)"
        >
          <div class="d-flex justify-content-between align-items-center">

            <div>
              <div class="fw-bold">
                {{ subject.ten_danh_muc }}
              </div>

              <small class="text-muted">
                {{ subject.so_bai }} bài học
              </small>

              <div class="progress mt-2" style="height: 5px; width: 140px;">
                <div
                  class="progress-bar bg-warning"
                  :style="{ width: subject.progress + '%' }"
                ></div>
              </div>
            </div>

            <div class="text-end">
              <div class="fw-bold text-success">
                {{ subject.progress }}%
              </div>

              <button
                class="btn btn-sm rounded-pill mt-1"
                :class="subject.progress > 0 ? 'btn-outline-primary' : 'btn-primary'"
              >
                {{ subject.progress > 0 ? 'Tiếp tục' : 'Bắt đầu' }}
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>

    <!-- GỢI Ý -->
    <div class="bg-light rounded-4 p-3 shadow-sm mt-4">
      <div class="fw-bold mb-1">Gợi ý hôm nay 🎯</div>

      <small class="text-muted">
        Chủ đề "Âm khó" đang phù hợp với tiến độ hiện tại của bé
      </small>

      <div class="mt-3">
        <button
          class="btn btn-primary btn-sm rounded-pill"
          @click="goToRecommendedSubject"
        >
          Học ngay
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SubjectList",

  data() {
    return {
      // dữ liệu từ bảng danh_muc_bai_hoc
      subjects: [
        {
          id: 1,
          ten_danh_muc: "Âm cơ bản",
          so_bai: 5,
          progress: 70
        },
        {
          id: 2,
          ten_danh_muc: "Âm khó",
          so_bai: 6,
          progress: 30
        },
        {
          id: 3,
          ten_danh_muc: "Nghe hiểu",
          so_bai: 4,
          progress: 50
        }
      ]
    };
  },

  computed: {
    overallProgress() {
      if (!this.subjects.length) {
        return 0;
      }

      const total = this.subjects.reduce((sum, subject) => {
        return sum + subject.progress;
      }, 0);

      return Math.round(total / this.subjects.length);
    }
  },

  methods: {
    goToLessons(subjectId) {
      this.$router.push({
        path: '/child/learning/lesson',
        query: {
          subjectId: subjectId
        }
      });
    },

    goToRecommendedSubject() {
      this.$router.push({
        path: '/child/learning/lesson',
        query: {
          subjectId: 2
        }
      });
    }
  }
};
</script>

<style scoped>
.subject-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.subject-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.subject-card:hover {
  transform: translateY(-3px);
}
</style>