<template>
  <div class="teacher-management-page p-3 p-md-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Quản lý giáo viên</h4>
        <p class="text-muted mb-0">
          Theo dõi danh sách giáo viên và trạng thái hoạt động
        </p>
      </div>

      <button class="btn btn-primary rounded-pill px-4" @click="goToCreateTeacher">
        Thêm giáo viên
      </button>
    </div>

    <div class="card border-0 shadow-sm rounded-4 p-3 mb-4">
      <div class="row g-3">
        <div class="col-12 col-md-4">
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="Tìm theo tên giáo viên..."
            v-model="searchKeyword"
          >
        </div>

        <div class="col-12 col-md-3">
          <select class="form-select rounded-pill" v-model="selectedStatus">
            <option value="">Tất cả trạng thái</option>
            <option value="Đang hoạt động">Đang hoạt động</option>
            <option value="Tạm khóa">Tạm khóa</option>
          </select>
        </div>

        <div class="col-12 col-md-3">
          <select class="form-select rounded-pill" v-model="selectedSpecialty">
            <option value="">Tất cả chuyên môn</option>
            <option value="Ngôn ngữ cơ bản">Ngôn ngữ cơ bản</option>
            <option value="Phát âm nâng cao">Phát âm nâng cao</option>
            <option value="Trị liệu chuyên sâu">Trị liệu chuyên sâu</option>
          </select>
        </div>

        <div class="col-12 col-md-2">
          <button class="btn btn-light border rounded-pill w-100" @click="resetFilter">
            Đặt lại
          </button>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-xl-4"
        v-for="teacher in filteredTeachers"
        :key="teacher.id"
      >
        <div class="card border-0 shadow-sm rounded-4 p-3 h-100 teacher-card">
          <div class="d-flex align-items-center mb-3">
            <div class="teacher-avatar me-3">
              {{ teacher.name.charAt(0) }}
            </div>

            <div>
              <h6 class="fw-bold mb-1">{{ teacher.name }}</h6>
              <p class="text-muted small mb-0">
                {{ teacher.email }}
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted small">Chuyên môn</span>
              <span class="fw-semibold">{{ teacher.specialty }}</span>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted small">Học sinh phụ trách</span>
              <span class="fw-semibold">{{ teacher.totalStudents }}</span>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted small">Kinh nghiệm</span>
              <span class="fw-semibold">{{ teacher.experience }}</span>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted small">Trạng thái</span>
              <span class="badge rounded-pill" :class="getStatusClass(teacher.status)">
                {{ teacher.status }}
              </span>
            </div>
          </div>

          <div class="border-top pt-3 d-flex gap-2">
            <button
              class="btn btn-light border rounded-pill flex-fill"
              @click="goToTeacherDetail(teacher)"
            >
              Chi tiết
            </button>

            <button
              class="btn btn-primary rounded-pill flex-fill"
              @click="goToTeacherEdit(teacher)"
            >
              Chỉnh sửa
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="filteredTeachers.length === 0"
      class="card border-0 shadow-sm rounded-4 p-5 text-center"
    >
      <h6 class="fw-bold mb-2">Không tìm thấy giáo viên phù hợp</h6>
      <p class="text-muted mb-0">
        Vui lòng thử lại với bộ lọc khác
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherManagement',

  data() {
    return {
      searchKeyword: '',
      selectedStatus: '',
      selectedSpecialty: '',
      teacherList: [
        {
          id: 1,
          name: 'Nguyễn Thị Lan',
          email: 'lan.teacher@gmail.com',
          specialty: 'Ngôn ngữ cơ bản',
          totalStudents: 24,
          experience: '3 năm',
          status: 'Đang hoạt động'
        },
        {
          id: 2,
          name: 'Trần Minh Anh',
          email: 'minhanh.teacher@gmail.com',
          specialty: 'Phát âm nâng cao',
          totalStudents: 18,
          experience: '5 năm',
          status: 'Đang hoạt động'
        },
        {
          id: 3,
          name: 'Lê Hoài Phương',
          email: 'hoaiphuong.teacher@gmail.com',
          specialty: 'Trị liệu chuyên sâu',
          totalStudents: 12,
          experience: '7 năm',
          status: 'Tạm khóa'
        },
        {
          id: 4,
          name: 'Phạm Quốc Bảo',
          email: 'quocbao.teacher@gmail.com',
          specialty: 'Ngôn ngữ cơ bản',
          totalStudents: 20,
          experience: '4 năm',
          status: 'Đang hoạt động'
        }
      ]
    }
  },

  computed: {
    filteredTeachers() {
      return this.teacherList.filter(teacher => {
        const matchKeyword = teacher.name
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase())

        const matchStatus = this.selectedStatus
          ? teacher.status === this.selectedStatus
          : true

        const matchSpecialty = this.selectedSpecialty
          ? teacher.specialty === this.selectedSpecialty
          : true

        return matchKeyword && matchStatus && matchSpecialty
      })
    }
  },

  methods: {
    resetFilter() {
      this.searchKeyword = ''
      this.selectedStatus = ''
      this.selectedSpecialty = ''
    },

    getStatusClass(status) {
      if (status === 'Đang hoạt động') {
        return 'bg-success-subtle text-success'
      }

      return 'bg-danger-subtle text-danger'
    },

    goToCreateTeacher() {
      this.$router.push('/admin/teacher-create')
    },

    goToTeacherDetail(teacher) {
      this.$router.push(`/admin/teacher-detail/${teacher.id}`)
    },

    goToTeacherEdit(teacher) {
      this.$router.push(`/admin/teacher-edit/${teacher.id}`)
    }
  }
}
</script>

<style scoped>
.teacher-management-page {
  background-color: #f8f9fc;
  min-height: 100vh;
}

.teacher-card {
  transition: all 0.3s ease;
}

.teacher-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
}

.teacher-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe, #00c6ff);
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, #4facfe, #00c6ff);
  border: none;
}

.btn-primary:hover {
  opacity: 0.9;
}

.form-control,
.form-select {
  height: 48px;
  border: 1px solid #e5e7eb;
}

.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: #4facfe;
}
</style>