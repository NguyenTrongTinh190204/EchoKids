<template>
  <div class="student-progress-page p-3 p-md-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Tiến độ học sinh</h4>
        <p class="text-muted mb-0">
          Theo dõi kết quả học tập và phát triển kỹ năng của học sinh
        </p>
      </div>

      <button class="btn btn-light border rounded-pill px-4" @click="goBack">
        Quay lại
      </button>
    </div>

    <div class="row g-4 mb-4">
      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 p-3 stat-card h-100">
          <p class="text-muted small mb-2">Tổng bài học</p>
          <h3 class="fw-bold mb-0">24</h3>
        </div>
      </div>

      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 p-3 stat-card h-100">
          <p class="text-muted small mb-2">Đã hoàn thành</p>
          <h3 class="fw-bold mb-0 text-success">18</h3>
        </div>
      </div>

      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 p-3 stat-card h-100">
          <p class="text-muted small mb-2">Tỷ lệ hoàn thành</p>
          <h3 class="fw-bold mb-0 text-primary">75%</h3>
        </div>
      </div>

      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 p-3 stat-card h-100">
          <p class="text-muted small mb-2">Điểm trung bình</p>
          <h3 class="fw-bold mb-0 text-warning">8.5/10</h3>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 class="fw-bold mb-1">Tiến độ tổng thể</h5>
          <p class="text-muted small mb-0">
            Dựa trên số lượng bài học và bài luyện tập đã hoàn thành
          </p>
        </div>

        <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
          75%
        </span>
      </div>

      <div class="progress rounded-pill progress-large">
        <div class="progress-bar rounded-pill bg-primary" style="width: 75%"></div>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-12 col-lg-7">
        <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 class="fw-bold mb-1">Danh sách bài học</h5>
              <p class="text-muted small mb-0">
                Trạng thái từng bài học của học sinh
              </p>
            </div>
          </div>

          <div
            class="lesson-item border rounded-4 p-3 mb-3"
            v-for="lesson in lessonList"
            :key="lesson.id"
          >
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="fw-bold mb-1">{{ lesson.name }}</h6>
                <p class="text-muted small mb-0">
                  {{ lesson.description }}
                </p>
              </div>

              <span class="badge rounded-pill" :class="getStatusClass(lesson.status)">
                {{ lesson.status }}
              </span>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <div class="w-100 me-3">
                <div class="progress rounded-pill" style="height: 8px;">
                  <div
                    class="progress-bar rounded-pill"
                    :class="getProgressClass(lesson.status)"
                    :style="{ width: lesson.progress + '%' }"
                  ></div>
                </div>
              </div>

              <span class="small fw-semibold text-nowrap">
                {{ lesson.progress }}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5">
        <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
          <div class="mb-4">
            <h5 class="fw-bold mb-1">Nhận xét của giáo viên</h5>
            <p class="text-muted small mb-0">
              Đánh giá chung về quá trình học tập
            </p>
          </div>

          <div class="teacher-note-card rounded-4 p-3 mb-3">
            <p class="mb-0">
              Học sinh có tiến bộ tốt trong các bài luyện phát âm cơ bản. Bé đã cải thiện rõ rệt khả năng nhận diện từ và phát âm các âm đơn giản.
            </p>
          </div>

          <div class="teacher-note-card rounded-4 p-3 mb-3">
            <p class="mb-0">
              Cần tiếp tục luyện thêm các âm khó như S, R và CH để tăng độ chính xác khi giao tiếp.
            </p>
          </div>

          <div class="teacher-note-card rounded-4 p-3">
            <p class="mb-0">
              Phụ huynh nên hỗ trợ bé luyện tập thêm 15 - 20 phút mỗi ngày tại nhà.
            </p>
          </div>

          <button class="btn btn-primary rounded-pill w-100 mt-4" @click="goToReport">
            Xem báo cáo chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentProgress',

  data() {
    return {
      lessonList: [
        {
          id: 1,
          name: 'Luyện âm chữ A',
          description: 'Bé luyện phát âm chữ A trong các từ đơn giản',
          progress: 100,
          status: 'Hoàn thành'
        },
        {
          id: 2,
          name: 'Nhận diện hình ảnh',
          description: 'Ghép hình ảnh với từ vựng phù hợp',
          progress: 80,
          status: 'Đang học'
        },
        {
          id: 3,
          name: 'Luyện âm chữ S',
          description: 'Luyện phát âm âm S ở đầu và cuối từ',
          progress: 45,
          status: 'Đang học'
        },
        {
          id: 4,
          name: 'Luyện nói câu ngắn',
          description: 'Thực hành các câu giao tiếp ngắn',
          progress: 0,
          status: 'Chưa bắt đầu'
        }
      ]
    }
  },

  methods: {
    getStatusClass(status) {
      if (status === 'Hoàn thành') {
        return 'bg-success-subtle text-success'
      }

      if (status === 'Đang học') {
        return 'bg-warning-subtle text-warning'
      }

      return 'bg-secondary-subtle text-secondary'
    },

    getProgressClass(status) {
      if (status === 'Hoàn thành') {
        return 'bg-success'
      }

      if (status === 'Đang học') {
        return 'bg-warning'
      }

      return 'bg-secondary'
    },

    goBack() {
      this.$router.push('/teacher/student-list')
    },

    goToReport() {
      this.$router.push('/teacher/student-report/1')
    }
  }
}
</script>

<style scoped>
.student-progress-page {
  background-color: #f8f9fc;
  min-height: 100vh;
}

.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.progress-large {
  height: 14px;
}

.lesson-item {
  transition: all 0.3s ease;
  background-color: #fafafa;
}

.lesson-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
}

.teacher-note-card {
  background: linear-gradient(135deg, #eef7ff, #f8fbff);
  border: 1px solid #dbeafe;
}

.btn-primary {
  background: linear-gradient(135deg, #4facfe, #00c6ff);
  border: none;
}

.btn-primary:hover {
  opacity: 0.9;
}

.progress-bar.bg-warning {
  background-color: #f59e0b !important;
}

.progress-bar.bg-secondary {
  background-color: #d1d5db !important;
}
</style>