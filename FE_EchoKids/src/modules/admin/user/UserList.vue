<template>
  <div class="container-fluid py-4">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Danh sách người dùng</h4>
        <small class="text-muted">
          Quản lý tài khoản trẻ em, phụ huynh và giáo viên
        </small>
      </div>

      <button
        class="btn btn-primary rounded px-4"
        @click="goToCreateUser"
      >
        Thêm người dùng
      </button>
    </div>

    <!-- BỘ LỌC -->
    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="row g-3">

          <div class="col-lg-3 col-md-6">
            <label class="form-label small text-muted">
              Vai trò
            </label>

            <select
              class="form-select"
              v-model="filters.role"
            >
              <option value="">Tất cả vai trò</option>
              <option value="Trẻ em">Trẻ em</option>
              <option value="Phụ huynh">Phụ huynh</option>
              <option value="Giáo viên">Giáo viên</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div class="col-lg-3 col-md-6">
            <label class="form-label small text-muted">
              Trạng thái
            </label>

            <select
              class="form-select"
              v-model="filters.status"
            >
              <option value="">Tất cả trạng thái</option>
              <option value="Hoạt động">Hoạt động</option>
              <option value="Tạm khóa">Tạm khóa</option>
            </select>
          </div>

          <div class="col-lg-4 col-md-8">
            <label class="form-label small text-muted">
              Tìm kiếm
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Nhập tên hoặc email"
              v-model="filters.keyword"
            >
          </div>

          <div class="col-lg-2 col-md-4 d-flex align-items-end">
            <button
              class="btn btn-outline-primary w-100 rounded"
              @click="resetFilter"
            >
              Đặt lại
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- DANH SÁCH NGƯỜI DÙNG -->
    <div class="card border-0 shadow-sm rounded">
      <div class="card-body">

        <div
          v-for="user in filteredUsers"
          :key="user.id"
          class="border rounded p-3 mb-3"
        >
          <div class="row align-items-center">

            <div class="col-lg-4 col-md-12 mb-3 mb-lg-0">
              <div class="d-flex align-items-center">
                <div class="avatar-circle me-3">
                  {{ user.name.charAt(0) }}
                </div>

                <div>
                  <div class="fw-bold">
                    {{ user.name }}
                  </div>

                  <small class="text-muted">
                    {{ user.email }}
                  </small>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 mb-3 mb-lg-0">
              <small class="text-muted d-block mb-1">
                Vai trò
              </small>

              <span
                class="badge"
                :class="getRoleClass(user.role)"
              >
                {{ user.role }}
              </span>
            </div>

            <div class="col-lg-2 col-md-4 mb-3 mb-lg-0">
              <small class="text-muted d-block mb-1">
                Trạng thái
              </small>

              <span
                class="badge"
                :class="user.status === 'Hoạt động' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'"
              >
                {{ user.status }}
              </span>
            </div>

            <div class="col-lg-2 col-md-4 mb-3 mb-lg-0">
              <small class="text-muted d-block mb-1">
                Ngày tạo
              </small>

              <div class="fw-semibold small">
                {{ user.created_at }}
              </div>
            </div>

            <div class="col-lg-2">
              <div class="d-flex gap-2 justify-content-lg-end">
                <button
                  class="btn btn-outline-primary btn-sm rounded"
                  @click="goToDetail(user.id)"
                >
                  Chi tiết
                </button>

                <button
                  class="btn btn-outline-secondary btn-sm rounded"
                  @click="toggleStatus(user)"
                >
                  {{ user.status === 'Hoạt động' ? 'Khóa' : 'Mở' }}
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- KHÔNG CÓ DỮ LIỆU -->
        <div
          v-if="filteredUsers.length === 0"
          class="text-center py-5"
        >
          <div class="fw-bold text-muted mb-2">
            Không tìm thấy người dùng
          </div>

          <small class="text-muted">
            Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
          </small>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserList",

  data() {
    return {
      filters: {
        role: "",
        status: "",
        keyword: ""
      },

      users: [
        {
          id: 1,
          name: "Nguyễn Văn An",
          email: "an@example.com",
          role: "Trẻ em",
          status: "Hoạt động",
          created_at: "20/03/2026"
        },
        {
          id: 2,
          name: "Trần Thị Lan",
          email: "lan@example.com",
          role: "Phụ huynh",
          status: "Hoạt động",
          created_at: "18/03/2026"
        },
        {
          id: 3,
          name: "Lê Minh Tuấn",
          email: "tuan@example.com",
          role: "Giáo viên",
          status: "Tạm khóa",
          created_at: "15/03/2026"
        },
        {
          id: 4,
          name: "Admin System",
          email: "admin@example.com",
          role: "Admin",
          status: "Hoạt động",
          created_at: "10/03/2026"
        }
      ]
    };
  },

  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        const matchRole =
          !this.filters.role ||
          user.role === this.filters.role;

        const matchStatus =
          !this.filters.status ||
          user.status === this.filters.status;

        const matchKeyword =
          !this.filters.keyword ||
          user.name.toLowerCase().includes(this.filters.keyword.toLowerCase()) ||
          user.email.toLowerCase().includes(this.filters.keyword.toLowerCase());

        return matchRole && matchStatus && matchKeyword;
      });
    }
  },

  methods: {
    getRoleClass(role) {
      if (role === "Admin") {
        return "bg-danger-subtle text-danger";
      }

      if (role === "Giáo viên") {
        return "bg-warning-subtle text-warning";
      }

      if (role === "Phụ huynh") {
        return "bg-success-subtle text-success";
      }

      return "bg-primary-subtle text-primary";
    },

    resetFilter() {
      this.filters = {
        role: "",
        status: "",
        keyword: ""
      };
    },

    goToCreateUser() {
      this.$router.push('/admin/user/create');
    },

    goToDetail(userId) {
      this.$router.push({
        path: '/admin/user/detail',
        query: {
          userId: userId
        }
      });
    },

    toggleStatus(user) {
      user.status =
        user.status === "Hoạt động"
          ? "Tạm khóa"
          : "Hoạt động";
    }
  }
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}

.avatar-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #0d6efd;
  color: #ffffff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>