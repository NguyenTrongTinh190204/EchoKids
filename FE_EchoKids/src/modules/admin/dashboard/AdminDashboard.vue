<template>
  <div class="container-fluid py-4">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Dashboard quản trị</h4>
        <p class="text-muted mb-0">
          Theo dõi tổng quan hệ thống Speech Therapy
        </p>
      </div>

      <button
        class="btn btn-primary rounded px-4"
        @click="goToUserList"
      >
        Quản lý người dùng
      </button>
    </div>

    <!-- THÔNG TIN TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <small class="text-muted">Tổng người dùng</small>
            <h3 class="mt-2 mb-0 text-primary fw-bold">
              {{ summary.totalUsers }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <small class="text-muted">Phụ huynh</small>
            <h3 class="mt-2 mb-0 text-success fw-bold">
              {{ summary.totalParents }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <small class="text-muted">Giáo viên</small>
            <h3 class="mt-2 mb-0 text-warning fw-bold">
              {{ summary.totalTeachers }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <small class="text-muted">Trẻ em</small>
            <h3 class="mt-2 mb-0 text-danger fw-bold">
              {{ summary.totalChildren }}
            </h3>
          </div>
        </div>
      </div>

    </div>

    <!-- THỐNG KÊ HỆ THỐNG -->
    <div class="row g-4 mb-4">

      <div class="col-lg-8">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="fw-bold mb-0">Thống kê hệ thống</h6>
            </div>

            <div class="row g-3 mb-4">
              <div class="col-md-4">
                <div class="border rounded p-3 text-center h-100">
                  <h4 class="fw-bold text-primary mb-1">
                    {{ systemStats.totalLessons }}
                  </h4>
                  <small class="text-muted">Bài học</small>
                </div>
              </div>

              <div class="col-md-4">
                <div class="border rounded p-3 text-center h-100">
                  <h4 class="fw-bold text-success mb-1">
                    {{ systemStats.totalPractices }}
                  </h4>
                  <small class="text-muted">Bài luyện tập</small>
                </div>
              </div>

              <div class="col-md-4">
                <div class="border rounded p-3 text-center h-100">
                  <h4 class="fw-bold text-warning mb-1">
                    {{ systemStats.totalVocabulary }}
                  </h4>
                  <small class="text-muted">Từ vựng</small>
                </div>
              </div>
            </div>

            <div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <small class="text-muted">Tần suất sử dụng hệ thống</small>
                <small class="fw-bold text-primary">
                  {{ systemStats.usageRate }}%
                </small>
              </div>

              <div class="progress" style="height: 8px;">
                <div
                  class="progress-bar"
                  :style="{ width: systemStats.usageRate + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-3">Dữ liệu AI</h6>

            <div class="border rounded p-3 mb-3">
              <small class="text-muted d-block mb-1">
                Tổng lượt chấm điểm
              </small>
              <h4 class="fw-bold text-success mb-0">
                {{ aiStats.totalAnalysis }}
              </h4>
            </div>

            <div class="border rounded p-3 mb-3">
              <small class="text-muted d-block mb-1">
                Âm lỗi phổ biến
              </small>
              <h5 class="fw-bold text-warning mb-0">
                {{ aiStats.commonError }}
              </h5>
            </div>

            <div class="border rounded p-3">
              <small class="text-muted d-block mb-1">
                Độ chính xác AI
              </small>
              <h4 class="fw-bold text-primary mb-0">
                {{ aiStats.accuracy }}%
              </h4>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- HOẠT ĐỘNG GẦN ĐÂY -->
    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="fw-bold mb-0">Hoạt động gần đây</h6>

          <button
            class="btn btn-outline-primary btn-sm rounded"
            @click="goToSystemStats"
          >
            Xem tất cả
          </button>
        </div>

        <div
          v-for="activity in activities"
          :key="activity.id"
          class="border rounded p-3 mb-3"
        >
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <div class="fw-bold mb-1">
                {{ activity.title }}
              </div>

              <small class="text-muted">
                {{ activity.description }}
              </small>
            </div>

            <small class="text-muted text-nowrap ms-3">
              {{ activity.time }}
            </small>
          </div>
        </div>
      </div>
    </div>

    <!-- NÚT ĐIỀU HƯỚNG -->
    <div class="row g-3">
      <div class="col-md-3">
        <button
          class="btn btn-primary w-100 rounded py-3"
          @click="goToUserList"
        >
          Người dùng
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded py-3"
          @click="goToLessonManagement"
        >
          Nội dung
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded py-3"
          @click="goToTeacherManagement"
        >
          Giáo viên
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded py-3"
          @click="goToAIStats"
        >
          AI Monitor
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AdminDashboard",

  data() {
    return {
      summary: {
        totalUsers: 240,
        totalParents: 85,
        totalTeachers: 20,
        totalChildren: 135
      },

      systemStats: {
        totalLessons: 52,
        totalPractices: 138,
        totalVocabulary: 420,
        usageRate: 74
      },

      aiStats: {
        totalAnalysis: 1520,
        commonError: "Âm L/N",
        accuracy: 91
      },

      activities: [
        {
          id: 1,
          title: "Giáo viên vừa tạo bài học mới",
          description: "Bài học “Âm S/X cơ bản” đã được thêm vào hệ thống.",
          time: "10 phút trước"
        },
        {
          id: 2,
          title: "Có người dùng mới đăng ký",
          description: "Phụ huynh Nguyễn Văn A vừa tạo tài khoản.",
          time: "30 phút trước"
        },
        {
          id: 3,
          title: "AI phát hiện lỗi phổ biến",
          description: "Âm L/N đang là lỗi phát âm phổ biến nhất tuần này.",
          time: "1 giờ trước"
        }
      ]
    };
  },

  methods: {
    goToUserList() {
      this.$router.push('/admin/user');
    },

    goToLessonManagement() {
      this.$router.push('/admin/content/subject');
    },

    goToTeacherManagement() {
      this.$router.push('/admin/teacher');
    },

    goToAIStats() {
      this.$router.push('/admin/ai');
    },

    goToSystemStats() {
      this.$router.push('/admin/statistics');
    }
  }
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}
</style>