<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Dashboard giáo viên</h4>
        <p class="text-muted mb-0">
          Theo dõi lớp học và tiến độ học tập của trẻ
        </p>
      </div>

      <button
        class="btn btn-primary rounded px-4"
        @click="goToStudentList"
      >
        Danh sách học sinh
      </button>
    </div>

    <div class="row g-3 mb-4">

      <div class="col-md-3 col-sm-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Tổng học sinh</small>
            <h3 class="fw-bold text-primary mt-2 mb-0">
              {{ summary.totalStudents }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Bài học</small>
            <h3 class="fw-bold text-success mt-2 mb-0">
              {{ summary.totalLessons }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Âm lỗi phổ biến</small>
            <h3 class="fw-bold text-warning mt-2 mb-0">
              {{ summary.commonErrors }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Bài chờ duyệt</small>
            <h3 class="fw-bold text-danger mt-2 mb-0">
              {{ summary.pendingLessons }}
            </h3>
          </div>
        </div>
      </div>

    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="fw-bold mb-0">
            Học sinh cần chú ý
          </h6>

          <button
            class="btn btn-outline-primary btn-sm rounded"
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
              class="card border h-100 rounded cursor-pointer"
              @click="goToStudentProgress(student.id)"
            >
              <div class="card-body">
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
                    class="badge"
                    :class="student.status === 'Tốt'
                      ? 'bg-success-subtle text-success'
                      : 'bg-warning-subtle text-warning'"
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
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <h6 class="fw-bold mb-3">
          Âm lỗi phổ biến
        </h6>

        <div
          v-for="error in commonErrors"
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
    </div>

    <div class="row g-3">

      <div class="col-md-3">
        <button
          class="btn btn-primary w-100 rounded py-3"
          @click="goToLessonList"
        >
          Quản lý bài học
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded py-3"
          @click="goToPracticeBuilder"
        >
          Tạo bài luyện tập
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded py-3"
          @click="goToStudentList"
        >
          Quản lý học sinh
        </button>
      </div>

      <div class="col-md-3">
        <button
          class="btn btn-outline-primary w-100 rounded py-3"
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
.container-fluid {
  min-height: 100vh;
}

.cursor-pointer {
  cursor: pointer;
}
</style>