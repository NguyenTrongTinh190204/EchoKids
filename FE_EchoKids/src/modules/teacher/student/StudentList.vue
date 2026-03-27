<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Danh sách học sinh</h4>
        <p class="text-muted mb-0">
          Quản lý thông tin và tiến độ học tập của học sinh
        </p>
      </div>

      <button
        class="btn btn-primary rounded px-4"
        @click="goToCreateStudent"
      >
        Thêm học sinh
      </button>
    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="row g-3">

          <div class="col-12 col-md-4">
            <label class="form-label small text-muted">
              Tìm kiếm
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Tìm theo tên học sinh..."
              v-model="searchKeyword"
            >
          </div>

          <div class="col-12 col-md-3">
            <label class="form-label small text-muted">
              Mức độ
            </label>

            <select
              class="form-select"
              v-model="selectedLevel"
            >
              <option value="">Tất cả mức độ</option>
              <option value="Nhẹ">Nhẹ</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Nặng">Nặng</option>
            </select>
          </div>

          <div class="col-12 col-md-3">
            <label class="form-label small text-muted">
              Trạng thái
            </label>

            <select
              class="form-select"
              v-model="selectedStatus"
            >
              <option value="">Tất cả trạng thái</option>
              <option value="Đang học">Đang học</option>
              <option value="Tạm nghỉ">Tạm nghỉ</option>
              <option value="Hoàn thành">Hoàn thành</option>
            </select>
          </div>

          <div class="col-12 col-md-2 d-flex align-items-end">
            <button
              class="btn btn-outline-secondary w-100 rounded"
              @click="resetFilter"
            >
              Đặt lại
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-xl-4"
        v-for="student in filteredStudents"
        :key="student.id"
      >
        <div class="card border-0 shadow-sm rounded h-100 student-card">
          <div class="card-body">

            <div class="d-flex align-items-center mb-3">
              <div class="student-avatar me-3">
                {{ student.name.charAt(0) }}
              </div>

              <div>
                <h6 class="fw-bold mb-1">
                  {{ student.name }}
                </h6>

                <p class="text-muted small mb-0">
                  {{ student.age }} tuổi
                </p>
              </div>
            </div>

            <div class="mb-3">

              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">
                  Mức độ
                </span>

                <span
                  class="badge"
                  :class="getLevelClass(student.level)"
                >
                  {{ student.level }}
                </span>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">
                  Trạng thái
                </span>

                <span
                  class="badge"
                  :class="getStatusClass(student.status)"
                >
                  {{ student.status }}
                </span>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">
                  Bài học hoàn thành
                </span>

                <span class="fw-semibold">
                  {{ student.completedLessons }}/{{ student.totalLessons }}
                </span>
              </div>

              <div class="progress mb-2" style="height: 8px;">
                <div
                  class="progress-bar bg-primary"
                  :style="{ width: student.progress + '%' }"
                ></div>
              </div>

              <p class="small text-muted mb-0">
                Tiến độ tổng thể: {{ student.progress }}%
              </p>

            </div>

            <div class="border-top pt-3 d-flex gap-2">
              <button
                class="btn btn-outline-primary flex-fill rounded"
                @click="goToStudentDetail(student)"
              >
                Chi tiết
              </button>

              <button
                class="btn btn-primary flex-fill rounded"
                @click="goToStudentProgress(student)"
              >
                Tiến độ
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div
      v-if="filteredStudents.length === 0"
      class="card border-0 shadow-sm rounded p-5 text-center mt-4"
    >
      <h6 class="fw-bold mb-2">
        Không tìm thấy học sinh phù hợp
      </h6>

      <p class="text-muted mb-0">
        Vui lòng thử lại với bộ lọc khác
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StudentList',

  data() {
    return {
      searchKeyword: '',
      selectedLevel: '',
      selectedStatus: '',
      studentList: [
        {
          id: 1,
          name: 'Nguyễn Minh Anh',
          age: 6,
          level: 'Nhẹ',
          status: 'Đang học',
          completedLessons: 12,
          totalLessons: 20,
          progress: 60
        },
        {
          id: 2,
          name: 'Trần Gia Hân',
          age: 7,
          level: 'Trung bình',
          status: 'Đang học',
          completedLessons: 8,
          totalLessons: 20,
          progress: 40
        },
        {
          id: 3,
          name: 'Lê Hoàng Nam',
          age: 8,
          level: 'Nặng',
          status: 'Tạm nghỉ',
          completedLessons: 5,
          totalLessons: 20,
          progress: 25
        },
        {
          id: 4,
          name: 'Phạm Khánh Linh',
          age: 6,
          level: 'Nhẹ',
          status: 'Hoàn thành',
          completedLessons: 20,
          totalLessons: 20,
          progress: 100
        }
      ]
    }
  },

  computed: {
    filteredStudents() {
      return this.studentList.filter(student => {
        const matchName = student.name
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase())

        const matchLevel = this.selectedLevel
          ? student.level === this.selectedLevel
          : true

        const matchStatus = this.selectedStatus
          ? student.status === this.selectedStatus
          : true

        return matchName && matchLevel && matchStatus
      })
    }
  },

  methods: {
    resetFilter() {
      this.searchKeyword = ''
      this.selectedLevel = ''
      this.selectedStatus = ''
    },

    getLevelClass(level) {
      if (level === 'Nhẹ') {
        return 'bg-success-subtle text-success'
      }

      if (level === 'Trung bình') {
        return 'bg-warning-subtle text-warning'
      }

      return 'bg-danger-subtle text-danger'
    },

    getStatusClass(status) {
      if (status === 'Đang học') {
        return 'bg-primary-subtle text-primary'
      }

      if (status === 'Hoàn thành') {
        return 'bg-success-subtle text-success'
      }

      return 'bg-secondary-subtle text-secondary'
    },

    goToCreateStudent() {
      this.$router.push('/teacher/student-create')
    },

    goToStudentDetail(student) {
      this.$router.push(`/teacher/student-detail/${student.id}`)
    },

    goToStudentProgress(student) {
      this.$router.push(`/teacher/student-progress/${student.id}`)
    }
  }
}
</script>

<style scoped>
.student-card {
  transition: all 0.2s ease;
}

.student-card:hover {
  transform: translateY(-3px);
}

.student-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0d6efd;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>