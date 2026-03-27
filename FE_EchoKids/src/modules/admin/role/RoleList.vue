<template>
  <div class="container-fluid py-4 role-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Danh sách vai trò
        </h4>
        <small class="text-muted">
          Quản lý vai trò và quyền trong hệ thống
        </small>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToPermissionMatrix"
      >
        Phân quyền
      </button>
    </div>

    <!-- THỐNG KÊ -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tổng vai trò</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalRoles }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Người dùng hoạt động</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.activeUsers }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Vai trò hệ thống</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.systemRoles }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Quyền truy cập</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.totalPermissions }}
          </div>
        </div>
      </div>

    </div>

    <!-- DANH SÁCH VAI TRÒ -->
    <div class="row g-4">

      <div
        v-for="role in roles"
        :key="role.id"
        class="col-lg-4 col-md-6"
      >
        <div class="bg-light rounded-4 p-4 shadow-sm h-100 role-card">

          <div class="d-flex justify-content-between align-items-start mb-3">
            <div>
              <div class="fw-bold fs-5">
                {{ role.name }}
              </div>

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
                class="badge bg-white text-dark border px-3 py-2"
              >
                {{ permission }}
              </span>
            </div>
          </div>

          <div class="d-flex gap-2 mt-4">
            <button
              class="btn btn-outline-primary btn-sm rounded-pill flex-fill"
              @click="goToPermission(role.id)"
            >
              Xem quyền
            </button>

            <button
              class="btn btn-outline-secondary btn-sm rounded-pill flex-fill"
              @click="editRole(role.id)"
            >
              Chỉnh sửa
            </button>
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
        return "bg-danger";
      }

      if (role === "Giáo viên") {
        return "bg-warning text-dark";
      }

      if (role === "Phụ huynh") {
        return "bg-success";
      }

      return "bg-primary";
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
.role-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.role-card {
  transition: all 0.2s ease;
}

.role-card:hover {
  transform: translateY(-4px);
}
</style>