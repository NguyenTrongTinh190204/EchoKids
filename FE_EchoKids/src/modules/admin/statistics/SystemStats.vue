<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Thống kê hệ thống</h4>
        <p class="text-muted mb-0">
          Tổng quan dữ liệu người dùng, bài học và AI
        </p>
      </div>

      <button
        class="btn btn-outline-primary rounded px-4"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Người dùng</small>
            <h3 class="fw-bold text-primary mt-2 mb-1">
              {{ overview.totalUsers }}
            </h3>
            <small class="text-success">
              +12% tháng này
            </small>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Bài học</small>
            <h3 class="fw-bold text-success mt-2 mb-1">
              {{ overview.totalLessons }}
            </h3>
            <small class="text-success">
              +8 bài mới
            </small>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Lượt luyện tập</small>
            <h3 class="fw-bold text-warning mt-2 mb-1">
              {{ overview.totalPractice }}
            </h3>
            <small class="text-success">
              +24% tuần này
            </small>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Độ chính xác AI</small>
            <h3 class="fw-bold text-danger mt-2 mb-1">
              {{ overview.aiAccuracy }}%
            </h3>
            <small class="text-success">
              +2% tháng này
            </small>
          </div>
        </div>
      </div>

    </div>

    <div class="row g-4 mb-4">

      <div class="col-lg-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Thống kê người dùng
            </h6>

            <div class="border rounded p-3 mb-3">
              <div class="d-flex justify-content-between mb-2">
                <span>Trẻ em</span>
                <span class="fw-bold">{{ userStats.children }}</span>
              </div>

              <div class="progress" style="height: 6px;">
                <div
                  class="progress-bar bg-primary"
                  :style="{ width: userStats.children + '%' }"
                ></div>
              </div>
            </div>

            <div class="border rounded p-3 mb-3">
              <div class="d-flex justify-content-between mb-2">
                <span>Phụ huynh</span>
                <span class="fw-bold">{{ userStats.parents }}</span>
              </div>

              <div class="progress" style="height: 6px;">
                <div
                  class="progress-bar bg-success"
                  :style="{ width: userStats.parents + '%' }"
                ></div>
              </div>
            </div>

            <div class="border rounded p-3">
              <div class="d-flex justify-content-between mb-2">
                <span>Giáo viên</span>
                <span class="fw-bold">{{ userStats.teachers }}</span>
              </div>

              <div class="progress" style="height: 6px;">
                <div
                  class="progress-bar bg-warning"
                  :style="{ width: userStats.teachers + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Thống kê nội dung
            </h6>

            <div class="row g-3">
              <div class="col-md-6">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-primary mb-1">
                    {{ contentStats.subjects }}
                  </h4>

                  <small class="text-muted">
                    Chủ đề bài học
                  </small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-success mb-1">
                    {{ contentStats.vocabulary }}
                  </h4>

                  <small class="text-muted">
                    Từ vựng
                  </small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-warning mb-1">
                    {{ contentStats.practice }}
                  </h4>

                  <small class="text-muted">
                    Bài luyện tập
                  </small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-danger mb-1">
                    {{ contentStats.pending }}
                  </h4>

                  <small class="text-muted">
                    Chờ duyệt
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <h6 class="fw-bold mb-3">
          Dữ liệu AI và lỗi phát âm
        </h6>

        <div
          v-for="error in aiErrors"
          :key="error.id"
          class="border rounded p-3 mb-3"
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

            <span class="badge bg-warning-subtle text-warning px-3 py-2">
              {{ error.total }} lượt
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
    </div>

    <div class="card border-0 shadow-sm rounded">
      <div class="card-body">
        <h6 class="fw-bold mb-3">
          Hoạt động gần đây
        </h6>

        <div
          v-for="activity in activities"
          :key="activity.id"
          class="border rounded p-3 mb-3"
        >
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <div class="fw-bold">
                {{ activity.title }}
              </div>

              <small class="text-muted">
                {{ activity.description }}
              </small>
            </div>

            <small class="text-muted">
              {{ activity.time }}
            </small>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SystemStats",

  data() {
    return {
      overview: {
        totalUsers: 240,
        totalLessons: 52,
        totalPractice: 1320,
        aiAccuracy: 91
      },

      userStats: {
        children: 135,
        parents: 85,
        teachers: 20
      },

      contentStats: {
        subjects: 12,
        vocabulary: 420,
        practice: 138,
        pending: 6
      },

      aiErrors: [
        {
          id: 1,
          sound: "Âm L/N",
          description: "Lỗi phổ biến nhất ở trẻ 4 - 6 tuổi",
          total: 320,
          percent: 80
        },
        {
          id: 2,
          sound: "Âm S/X",
          description: "Trẻ thường nhầm giữa âm S và X",
          total: 210,
          percent: 60
        },
        {
          id: 3,
          sound: "Thanh sắc",
          description: "Phát âm chưa rõ thanh sắc và thanh hỏi",
          total: 150,
          percent: 45
        }
      ],

      activities: [
        {
          id: 1,
          title: "Bài học mới được tạo",
          description: "Giáo viên vừa thêm bài “Âm S/X nâng cao”.",
          time: "15 phút trước"
        },
        {
          id: 2,
          title: "Người dùng mới đăng ký",
          description: "Có 5 tài khoản phụ huynh mới trong hôm nay.",
          time: "1 giờ trước"
        },
        {
          id: 3,
          title: "AI cập nhật mô hình",
          description: "Hệ thống AI đã tăng độ chính xác lên 91%.",
          time: "3 giờ trước"
        }
      ]
    };
  },

  methods: {
    goBack() {
      this.$router.push('/admin/dashboard');
    }
  }
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}
</style>