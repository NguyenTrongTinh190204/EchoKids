<template>
  <div class="container-fluid py-4 admin-dashboard">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Dashboard quản trị
        </h4>
        <small class="text-muted">
          Theo dõi tổng quan hệ thống Speech Therapy
        </small>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToUserList"
      >
        Quản lý người dùng
      </button>
    </div>

    <!-- THÔNG TIN TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tổng người dùng</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalUsers }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Phụ huynh</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.totalParents }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Giáo viên</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.totalTeachers }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Trẻ em</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.totalChildren }}
          </div>
        </div>
      </div>

    </div>

    <!-- THỐNG KÊ HỆ THỐNG -->
    <div class="row g-4 mb-4">

      <div class="col-lg-8">
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="fw-bold mb-3">
            Thống kê hệ thống
          </div>

          <div class="row g-3">

            <div class="col-md-4">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-primary">
                  {{ systemStats.totalLessons }}
                </div>

                <small class="text-muted">
                  Bài học
                </small>
              </div>
            </div>

            <div class="col-md-4">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-success">
                  {{ systemStats.totalPractices }}
                </div>

                <small class="text-muted">
                  Bài luyện tập
                </small>
              </div>
            </div>

            <div class="col-md-4">
              <div class="bg-white rounded-4 border p-3 text-center">
                <div class="fw-bold fs-4 text-warning">
                  {{ systemStats.totalVocabulary }}
                </div>

                <small class="text-muted">
                  Từ vựng
                </small>
              </div>
            </div>

          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-between mb-2">
              <small class="text-muted">
                Tần suất sử dụng hệ thống
              </small>

              <small class="fw-bold text-primary">
                {{ systemStats.usageRate }}%
              </small>
            </div>

            <div class="progress" style="height: 8px;">
              <div
                class="progress-bar bg-primary"
                :style="{ width: systemStats.usageRate + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="fw-bold mb-3">
            Dữ liệu AI
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted d-block">
              Tổng lượt chấm điểm
            </small>

            <div class="fw-bold fs-4 text-success">
              {{ aiStats.totalAnalysis }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted d-block">
              Âm lỗi phổ biến
            </small>

            <div class="fw-bold fs-5 text-warning">
              {{ aiStats.commonError }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3">
            <small class="text-muted d-block">
              Độ chính xác AI
            </small>

            <div class="fw-bold fs-4 text-primary">
              {{ aiStats.accuracy }}%
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- HOẠT ĐỘNG GẦN ĐÂY -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="fw-bold">
          Hoạt động gần đây
        </div>

        <button
          class="btn btn-outline-primary btn-sm rounded-pill"
          @click="goToSystemStats"
        >
          Xem tất cả
        </button>
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

    <!-- NÚT ĐIỀU HƯỚNG -->
    <div class="row g-3">

      <div class="col-md-3">
        <button
          class="btn btn-primary w-100 rounded-4 py-3"
          @click="goToUserList"
        >
          Người dùng
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToLessonManagement"
        >
          Nội dung
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToTeacherManagement"
        >
          Giáo viên
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
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
.admin-dashboard {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>