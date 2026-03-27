<template>
  <div class="container-fluid py-4 system-stats-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Thống kê hệ thống
        </h4>
        <small class="text-muted">
          Tổng quan dữ liệu người dùng, bài học và AI
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- THỐNG KÊ TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Người dùng</small>
          <div class="fw-bold fs-3 text-primary">
            {{ overview.totalUsers }}
          </div>

          <small class="text-success">
            +12% tháng này
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Bài học</small>
          <div class="fw-bold fs-3 text-success">
            {{ overview.totalLessons }}
          </div>

          <small class="text-success">
            +8 bài mới
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Lượt luyện tập</small>
          <div class="fw-bold fs-3 text-warning">
            {{ overview.totalPractice }}
          </div>

          <small class="text-success">
            +24% tuần này
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Độ chính xác AI</small>
          <div class="fw-bold fs-3 text-danger">
            {{ overview.aiAccuracy }}%
          </div>

          <small class="text-success">
            +2% tháng này
          </small>
        </div>
      </div>

    </div>

    <!-- THỐNG KÊ CHI TIẾT -->
    <div class="row g-4 mb-4">

      <div class="col-lg-6">
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="fw-bold mb-3">
            Thống kê người dùng
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
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

          <div class="bg-white rounded-4 border p-3 mb-3">
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

          <div class="bg-white rounded-4 border p-3">
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

      <div class="col-lg-6">
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="fw-bold mb-3">
            Thống kê nội dung
          </div>

          <div class="row g-3">
            <div class="col-md-6">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-primary">
                  {{ contentStats.subjects }}
                </div>

                <small class="text-muted">
                  Chủ đề bài học
                </small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-success">
                  {{ contentStats.vocabulary }}
                </div>

                <small class="text-muted">
                  Từ vựng
                </small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-warning">
                  {{ contentStats.practice }}
                </div>

                <small class="text-muted">
                  Bài luyện tập
                </small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-danger">
                  {{ contentStats.pending }}
                </div>

                <small class="text-muted">
                  Chờ duyệt
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- THỐNG KÊ AI -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Dữ liệu AI và lỗi phát âm
      </div>

      <div
        v-for="error in aiErrors"
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

    <!-- HOẠT ĐỘNG GẦN ĐÂY -->
    <div class="bg-light rounded-4 p-4 shadow-sm">
      <div class="fw-bold mb-3">
        Hoạt động gần đây
      </div>

      <div
        v-for="activity in activities"
        :key="activity.id"
        class="bg-white rounded-4 border p-3 mb-3"
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
.system-stats-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>