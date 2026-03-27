<template>
  <div class="container-fluid py-4 child-detail-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Hồ sơ trẻ
        </h4>

        <small class="text-muted">
          Quản lý thông tin và tiến độ học tập của trẻ
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <div class="row g-4">

      <!-- THÔNG TIN TRẺ -->
      <div class="col-lg-4">
        <div class="bg-light rounded-4 shadow-sm p-4 h-100">

          <div class="text-center mb-4">
            <div class="avatar-circle mx-auto mb-3">
              {{ child.name.charAt(0) }}
            </div>

            <h5 class="fw-bold mb-1">
              {{ child.name }}
            </h5>

            <small class="text-muted">
              {{ child.age }} tuổi
            </small>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted d-block mb-1">
              Mức độ hiện tại
            </small>

            <div class="fw-bold text-primary">
              {{ child.level }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted d-block mb-1">
              Mục tiêu học
            </small>

            <div class="fw-bold">
              {{ child.goal }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3">
            <small class="text-muted d-block mb-1">
              Trạng thái
            </small>

            <span class="badge bg-success px-3 py-2">
              Đang học
            </span>
          </div>
        </div>
      </div>

      <!-- THÔNG TIN CHI TIẾT -->
      <div class="col-lg-8">

        <!-- TIẾN ĐỘ -->
        <div class="bg-light rounded-4 shadow-sm p-4 mb-4">
          <div class="fw-bold mb-3">
            Tiến độ học tập
          </div>

          <div class="row g-3">
            <div class="col-md-4">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-primary">
                  {{ progress.completedLessons }}
                </div>

                <small class="text-muted">
                  Bài học hoàn thành
                </small>
              </div>
            </div>

            <div class="col-md-4">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-success">
                  {{ progress.averageScore }}
                </div>

                <small class="text-muted">
                  Điểm trung bình
                </small>
              </div>
            </div>

            <div class="col-md-4">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-warning">
                  {{ progress.practiceDays }}
                </div>

                <small class="text-muted">
                  Ngày luyện tập
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- ÂM SAI PHỔ BIẾN -->
        <div class="bg-light rounded-4 shadow-sm p-4 mb-4">
          <div class="fw-bold mb-3">
            Âm sai phổ biến
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
                {{ error.percent }}%
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

        <!-- LỊCH SỬ GẦN ĐÂY -->
        <div class="bg-light rounded-4 shadow-sm p-4">
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
            v-for="item in histories"
            :key="item.id"
            class="bg-white rounded-4 border p-3 mb-3"
          >
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <div class="fw-bold">
                  {{ item.lesson }}
                </div>

                <small class="text-muted">
                  {{ item.date }}
                </small>
              </div>

              <span class="badge bg-primary px-3 py-2">
                {{ item.score }} điểm
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ChildDetail",

  data() {
    return {
      child: {
        id: 1,
        name: "Nguyễn Minh Anh",
        age: 5,
        level: "Trung bình",
        goal: "Cải thiện âm L/N"
      },

      progress: {
        completedLessons: 18,
        averageScore: 82,
        practiceDays: 25
      },

      commonErrors: [
        {
          id: 1,
          sound: "Âm L/N",
          description: "Thường nhầm giữa âm L và N",
          percent: 75
        },
        {
          id: 2,
          sound: "Âm S/X",
          description: "Chưa phát âm rõ âm đầu",
          percent: 50
        }
      ],

      histories: [
        {
          id: 1,
          lesson: "Phân biệt âm L và N",
          date: "20/03/2026",
          score: 85
        },
        {
          id: 2,
          lesson: "Luyện âm S cơ bản",
          date: "18/03/2026",
          score: 78
        },
        {
          id: 3,
          lesson: "Nghe hiểu hình ảnh",
          date: "16/03/2026",
          score: 90
        }
      ]
    };
  },

  methods: {
    goBack() {
      this.$router.push('/parent/child');
    },

    goToHistory() {
      this.$router.push('/parent/history');
    }
  }
};
</script>

<style scoped>
.child-detail-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.avatar-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0d6efd, #4da3ff);
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>