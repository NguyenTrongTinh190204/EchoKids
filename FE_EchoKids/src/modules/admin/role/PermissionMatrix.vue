<template>
  <div class="container-fluid py-4 permission-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Ma trận phân quyền
        </h4>
        <small class="text-muted">
          Quản lý quyền truy cập của từng vai trò trong hệ thống
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- BỘ LỌC -->
    <div class="bg-light rounded-4 p-3 shadow-sm mb-4">
      <div class="row g-3">

        <div class="col-md-4">
          <label class="form-label small text-muted">
            Vai trò
          </label>

          <select
            class="form-select rounded-4"
            v-model="selectedRole"
          >
            <option value="">Tất cả vai trò</option>
            <option value="Admin">Admin</option>
            <option value="Giáo viên">Giáo viên</option>
            <option value="Phụ huynh">Phụ huynh</option>
            <option value="Trẻ em">Trẻ em</option>
          </select>
        </div>

        <div class="col-md-8">
          <label class="form-label small text-muted">
            Tìm kiếm quyền
          </label>

          <input
            type="text"
            class="form-control rounded-4"
            placeholder="Nhập tên quyền"
            v-model="keyword"
          >
        </div>

      </div>
    </div>

    <!-- BẢNG PHÂN QUYỀN -->
    <div class="bg-light rounded-4 p-4 shadow-sm overflow-auto">

      <table class="table align-middle mb-0">
        <thead>
          <tr>
            <th class="fw-bold">Chức năng</th>
            <th class="text-center">Admin</th>
            <th class="text-center">Giáo viên</th>
            <th class="text-center">Phụ huynh</th>
            <th class="text-center">Trẻ em</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="permission in filteredPermissions"
            :key="permission.id"
          >
            <td>
              <div class="fw-bold">
                {{ permission.name }}
              </div>

              <small class="text-muted">
                {{ permission.description }}
              </small>
            </td>

            <td class="text-center">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="permission.admin"
              >
            </td>

            <td class="text-center">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="permission.teacher"
              >
            </td>

            <td class="text-center">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="permission.parent"
              >
            </td>

            <td class="text-center">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="permission.child"
              >
            </td>
          </tr>
        </tbody>
      </table>

      <!-- KHÔNG CÓ DỮ LIỆU -->
      <div
        v-if="filteredPermissions.length === 0"
        class="text-center py-5"
      >
        <div class="fw-bold text-muted mb-2">
          Không tìm thấy quyền phù hợp
        </div>

        <small class="text-muted">
          Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
        </small>
      </div>

    </div>

    <!-- NÚT HÀNH ĐỘNG -->
    <div class="d-flex justify-content-end gap-2 mt-4">
      <button
        class="btn btn-outline-secondary rounded-pill px-4"
        @click="resetPermissions"
      >
        Đặt lại
      </button>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="savePermissions"
      >
        Lưu thay đổi
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "PermissionMatrix",

  data() {
    return {
      selectedRole: "",
      keyword: "",

      permissions: [
        {
          id: 1,
          name: "Quản lý người dùng",
          description: "Xem và chỉnh sửa tài khoản người dùng",
          admin: true,
          teacher: false,
          parent: false,
          child: false
        },
        {
          id: 2,
          name: "Tạo bài học",
          description: "Tạo và chỉnh sửa bài học",
          admin: true,
          teacher: true,
          parent: false,
          child: false
        },
        {
          id: 3,
          name: "Xem tiến độ học tập",
          description: "Theo dõi kết quả học tập của trẻ",
          admin: true,
          teacher: true,
          parent: true,
          child: true
        },
        {
          id: 4,
          name: "Luyện phát âm",
          description: "Tham gia bài luyện phát âm",
          admin: false,
          teacher: false,
          parent: false,
          child: true
        },
        {
          id: 5,
          name: "Xem báo cáo phát âm",
          description: "Xem phân tích lỗi phát âm",
          admin: true,
          teacher: true,
          parent: true,
          child: false
        }
      ]
    };
  },

  computed: {
    filteredPermissions() {
      return this.permissions.filter(permission => {
        const matchKeyword =
          !this.keyword ||
          permission.name.toLowerCase().includes(this.keyword.toLowerCase());

        if (!this.selectedRole) {
          return matchKeyword;
        }

        if (this.selectedRole === "Admin") {
          return matchKeyword && permission.admin;
        }

        if (this.selectedRole === "Giáo viên") {
          return matchKeyword && permission.teacher;
        }

        if (this.selectedRole === "Phụ huynh") {
          return matchKeyword && permission.parent;
        }

        return matchKeyword && permission.child;
      });
    }
  },

  methods: {
    resetPermissions() {
      this.selectedRole = "";
      this.keyword = "";
    },

    savePermissions() {
      console.log("Lưu quyền", this.permissions);
    },

    goBack() {
      this.$router.push('/admin/role');
    }
  }
};
</script>

<style scoped>
.permission-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.table th,
.table td {
  vertical-align: middle;
  white-space: nowrap;
}
</style>