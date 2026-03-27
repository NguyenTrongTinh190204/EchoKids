<template>
  <div class="container-fluid py-4 teacher-dashboard">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Dashboard giáo viên
        </h4>
        <small class="text-muted">
          Theo dõi lớp học và tiến độ học tập của trẻ
        </small>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToStudentList"
      >
        Danh sách học sinh
      </button>
    </div>

    <!-- THÔNG TIN TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tổng học sinh</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalStudents }}
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Bài học</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.totalLessons }}
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
          <small class="text-muted">Bài chờ duyệt</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.pendingLessons }}
          </div>
        </div>
      </div>

    </div>

    <!-- DANH SÁCH HỌC SINH -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="fw-bold">
          Học sinh cần chú ý
        </div>

        <button
          class="btn btn-outline-primary btn-sm rounded-pill"
          @click="goToStudentList"
        >
          Xem tất cả
        </button>
      </div>

      <div class="row g-3">

        <div
          v-for="student in students"
          :key="student.id"
          class="col-lg-4 col-md-6"
        >
          <div
            class="bg-white rounded-4 border p-3 student-card h-100"
            @click="goToStudentProgress(student.id)"
          >
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <div class="fw-bold">
                  {{ student.name }}
                </div>

                <small class="text-muted">
                  {{ student.age }} tuổi
                </small>
              </div>

              <span
                class="badge px-3 py-2"
                :class="student.status === 'Tốt' ? 'bg-success' : 'bg-warning text-dark'"
              >
                {{ student.status }}
              </span>
            </div>

            <div class="mb-2">
              <small class="text-muted">
                Tiến độ học tập
              </small>

              <div class="progress mt-1" style="height: 6px;">
                <div
                  class="progress-bar bg-primary"
                  :style="{ width: student.progress + '%' }"
                ></div>
              </div>
            </div>

            <div class="d-flex justify-content-between mt-3">
              <small class="text-muted">
                Điểm phát âm
              </small>

              <small class="fw-bold text-success">
                {{ student.score }}/100
              </small>
            </div>
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
            {{ error.total }} học sinh
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

    <!-- NÚT ĐIỀU HƯỚNG -->
    <div class="row g-3">

      <div class="col-md-3">
        <button
          class="btn btn-primary w-100 rounded-4 py-3"
          @click="goToLessonList"
        >
          Quản lý bài học
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToPracticeBuilder"
        >
          Tạo bài luyện tập
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToStudentList"
        >
          Quản lý học sinh
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToRecommendation"
        >
          Gợi ý luyện tập
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "TeacherDashboard",

  data() {
    return {
      summary: {
        totalStudents: 32,
        totalLessons: 18,
        commonErrors: 4,
        pendingLessons: 3
      },

      // dữ liệu học sinh từ bảng người dùng + tiến độ học tập
      students: [
        {
          id: 1,
          name: "Bé An",
          age: 5,
          progress: 75,
          score: 82,
          status: "Tốt"
        },
        {
          id: 2,
          name: "Bé Minh",
          age: 6,
          progress: 45,
          score: 65,
          status: "Cần chú ý"
        },
        {
          id: 3,
          name: "Bé Lan",
          age: 4,
          progress: 52,
          score: 70,
          status: "Cần chú ý"
        }
      ],

      // dữ liệu lỗi phổ biến từ AI
      commonErrors: [
        {
          id: 1,
          sound: "Âm L/N",
          description: "Nhiều trẻ nhầm lẫn giữa âm L và N",
          total: 12,
          percent: 70
        },
        {
          id: 2,
          sound: "Âm S/X",
          description: "Phát âm chưa rõ giữa S và X",
          total: 8,
          percent: 50
        }
      ]
    };
  },

  methods: {
    goToStudentProgress(studentId) {
      this.$router.push({
        path: '/teacher/student/progress',
        query: {
          studentId: studentId
        }
      });
    },

    goToStudentList() {
      this.$router.push('/teacher/student');
    },

    goToLessonList() {
      this.$router.push('/teacher/lesson');
    },

    goToPracticeBuilder() {
      this.$router.push('/teacher/practice-builder/create');
    },

    goToRecommendation() {
      this.$router.push('/teacher/recommendation');
    }
  }
};
</script>

<style scoped>
.teacher-dashboard {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.student-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.student-card:hover {
  transform: translateY(-4px);
}
</style>