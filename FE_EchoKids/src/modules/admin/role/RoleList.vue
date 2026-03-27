<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Danh sách vai trò</h4>
        <p class="text-muted mb-0">
          Quản lý vai trò và quyền trong hệ thống
        </p>
      </div>

      <button
        class="btn btn-primary rounded px-4"
        @click="goToPermissionMatrix"
      >
        Phân quyền
      </button>
    </div>

    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Tổng vai trò</small>
            <h3 class="fw-bold text-primary mt-2 mb-0">
              {{ summary.totalRoles }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Người dùng hoạt động</small>
            <h3 class="fw-bold text-success mt-2 mb-0">
              {{ summary.activeUsers }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Vai trò hệ thống</small>
            <h3 class="fw-bold text-warning mt-2 mb-0">
              {{ summary.systemRoles }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Quyền truy cập</small>
            <h3 class="fw-bold text-danger mt-2 mb-0">
              {{ summary.totalPermissions }}
            </h3>
          </div>
        </div>
      </div>

    </div>

    <div class="row g-4">

      <div
        v-for="role in roles"
        :key="role.id"
        class="col-lg-4 col-md-6"
      >
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">

            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 class="fw-bold mb-1">
                  {{ role.name }}
                </h5>

                <small class="text-muted">
                  {{ role.description }}
                </small>
              </div>

              <span
                class="badge px-3 py-2"
                :class="getRoleClass(role.name)"
              >
                {{ role.totalUsers }} người
              </span>
            </div>

            <div class="mb-3">
              <small class="text-muted d-block mb-2">
                Quyền chính
              </small>

              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="permission in role.permissions"
                  :key="permission"
                  class="badge bg-light text-dark border"
                >
                  {{ permission }}
                </span>
              </div>
            </div>

            <div class="border-top pt-3 d-flex gap-2">
              <button
                class="btn btn-outline-primary rounded flex-fill"
                @click="goToPermission(role.id)"
              >
                Xem quyền
              </button>

              <button
                class="btn btn-outline-secondary rounded flex-fill"
                @click="editRole(role.id)"
              >
                Chỉnh sửa
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
  name: "RoleList",

  data() {
    return {
      summary: {
        totalRoles: 4,
        activeUsers: 212,
        systemRoles: 4,
        totalPermissions: 24
      },

      roles: [
        {
          id: 1,
          name: "Admin",
          description: "Quản lý toàn bộ hệ thống",
          totalUsers: 2,
          permissions: [
            "Quản lý người dùng",
            "Quản lý nội dung",
            "Xem thống kê"
          ]
        },
        {
          id: 2,
          name: "Giáo viên",
          description: "Quản lý bài học và học sinh",
          totalUsers: 20,
          permissions: [
            "Tạo bài học",
            "Tạo bài tập",
            "Xem tiến độ"
          ]
        },
        {
          id: 3,
          name: "Phụ huynh",
          description: "Theo dõi tiến độ của trẻ",
          totalUsers: 85,
          permissions: [
            "Xem báo cáo",
            "Xem lịch sử",
            "Nhận gợi ý"
          ]
        },
        {
          id: 4,
          name: "Trẻ em",
          description: "Tham gia học tập và luyện phát âm",
          totalUsers: 135,
          permissions: [
            "Học bài",
            "Luyện tập",
            "Xem thành tích"
          ]
        }
      ]
    };
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

    goToPermission(roleId) {
      this.$router.push({
        path: '/admin/role/permission',
        query: {
          roleId: roleId
        }
      });
    },

    editRole(roleId) {
      this.$router.push({
        path: '/admin/role/edit',
        query: {
          roleId: roleId
        }
      });
    },

    goToPermissionMatrix() {
      this.$router.push('/admin/role/permission');
    }
  }
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}
</style>