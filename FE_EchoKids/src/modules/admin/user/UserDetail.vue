<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Chi tiết người dùng</h4>
        <p class="text-muted mb-0">
          Xem thông tin chi tiết và trạng thái tài khoản người dùng
        </p>
      </div>

      <button
        class="btn btn-outline-primary rounded px-4"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <div class="row g-4">

      <div class="col-lg-4">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">

            <div class="user-avatar mx-auto mb-3">
              {{ user.name.charAt(0) }}
            </div>

            <h5 class="fw-bold mb-1">
              {{ user.name }}
            </h5>

            <p class="text-muted mb-3">
              {{ user.email }}
            </p>

            <span
              class="badge px-3 py-2"
              :class="getRoleClass(user.role)"
            >
              {{ user.role }}
            </span>

            <div class="mt-3">
              <span
                class="badge px-3 py-2"
                :class="user.status === 'Hoạt động'
                  ? 'bg-success-subtle text-success'
                  : 'bg-danger-subtle text-danger'"
              >
                {{ user.status }}
              </span>
            </div>

          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="card border-0 shadow-sm rounded mb-4">
          <div class="card-body">
            <h6 class="fw-bold mb-3">Thông tin cơ bản</h6>

            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label text-muted small">
                  Họ và tên
                </label>
                <div class="fw-semibold">
                  {{ user.name }}
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label text-muted small">
                  Email
                </label>
                <div class="fw-semibold">
                  {{ user.email }}
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label text-muted small">
                  Số điện thoại
                </label>
                <div class="fw-semibold">
                  {{ user.phone }}
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label text-muted small">
                  Ngày tạo
                </label>
                <div class="fw-semibold">
                  {{ user.createdAt }}
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label text-muted small">
                  Vai trò
                </label>
                <div class="fw-semibold">
                  {{ user.role }}
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label text-muted small">
                  Trạng thái
                </label>
                <div class="fw-semibold">
                  {{ user.status }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm rounded mb-4">
          <div class="card-body">
            <h6 class="fw-bold mb-3">Thông tin học tập</h6>

            <div class="row g-3">
              <div class="col-md-4">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-primary mb-1">
                    {{ learning.totalLessons }}
                  </h4>
                  <small class="text-muted">
                    Bài học đã học
                  </small>
                </div>
              </div>

              <div class="col-md-4">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-success mb-1">
                    {{ learning.completedExercises }}
                  </h4>
                  <small class="text-muted">
                    Bài luyện hoàn thành
                  </small>
                </div>
              </div>

              <div class="col-md-4">
                <div class="border rounded p-3 text-center">
                  <h4 class="fw-bold text-warning mb-1">
                    {{ learning.averageScore }}%
                  </h4>
                  <small class="text-muted">
                    Điểm trung bình
                  </small>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <label class="form-label text-muted small">
                Tiến độ học tập
              </label>

              <div class="progress" style="height: 8px;">
                <div
                  class="progress-bar bg-primary"
                  :style="{ width: learning.progress + '%' }"
                ></div>
              </div>

              <small class="text-muted">
                {{ learning.progress }}% hoàn thành chương trình
              </small>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <h6 class="fw-bold mb-3">Hành động</h6>

            <div class="d-flex flex-wrap gap-2">
              <button
                class="btn btn-primary rounded px-4"
                @click="editUser"
              >
                Chỉnh sửa
              </button>

              <button
                class="btn btn-outline-warning rounded px-4"
                @click="resetPassword"
              >
                Đặt lại mật khẩu
              </button>

              <button
                class="btn btn-outline-danger rounded px-4"
                @click="toggleStatus"
              >
                {{ user.status === 'Hoạt động' ? 'Khóa tài khoản' : 'Mở khóa tài khoản' }}
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'UserDetail',

  data() {
    return {
      user: {
        id: 1,
        name: 'Nguyễn Văn An',
        email: 'an@example.com',
        phone: '0901234567',
        role: 'Trẻ em',
        status: 'Hoạt động',
        createdAt: '20/03/2026'
      },

      learning: {
        totalLessons: 18,
        completedExercises: 42,
        averageScore: 87,
        progress: 68
      }
    }
  },

  methods: {
    getRoleClass(role) {
      if (role === 'Admin') {
        return 'bg-danger-subtle text-danger'
      }

      if (role === 'Giáo viên') {
        return 'bg-warning-subtle text-warning'
      }

      if (role === 'Phụ huynh') {
        return 'bg-success-subtle text-success'
      }

      return 'bg-primary-subtle text-primary'
    },

    goBack() {
      this.$router.push('/admin/user')
    },

    editUser() {
      this.$router.push(`/admin/user/edit/${this.user.id}`)
    },

    resetPassword() {
      console.log('Reset mật khẩu')
    },

    toggleStatus() {
      this.user.status =
        this.user.status === 'Hoạt động'
          ? 'Tạm khóa'
          : 'Hoạt động'
    }
  }
}
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}

.user-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #0d6efd;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>