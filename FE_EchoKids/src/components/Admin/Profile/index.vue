<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Thông tin tài khoản</h5>
        <small class="text-muted">
          Quản lý hồ sơ quản trị viên hệ thống EchoKids
        </small>
      </div>

      <div class="row">

        <!-- AVATAR -->
        <div class="col-md-4">
          <div class="card p-3 text-center shadow-sm">

            <img
              src="https://via.placeholder.com/120"
              class="rounded-circle mb-3"
              width="120"
              height="120"
            />

            <h6 class="mb-1">Nguyễn Văn Admin</h6>
            <small class="text-muted">admin@gmail.com</small>

            <div class="mt-2">
              <span class="badge bg-primary">Quản trị hệ thống</span>
              <span class="badge bg-success ms-1">Đang hoạt động</span>
            </div>

            <button class="btn btn-outline-primary mt-3">
              📷 Đổi ảnh đại diện
            </button>

          </div>
        </div>

        <!-- INFO -->
        <div class="col-md-8">

          <!-- PERSONAL -->
          <div class="card p-3 mb-4 shadow-sm">
            <h6 class="mb-3">Thông tin cá nhân</h6>

            <div class="row">

              <div class="col-md-6 mb-3">
                <label class="form-label">Họ và tên</label>
                <input type="text" class="form-control" value="Nguyễn Văn Admin" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" value="admin@gmail.com" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" value="0123456789" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Vai trò</label>
                <input type="text" class="form-control" value="Quản trị viên" disabled />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Ngày tạo tài khoản</label>
                <input type="text" class="form-control" value="01/01/2026" disabled />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Lần đăng nhập gần nhất</label>
                <input type="text" class="form-control" value="20/03/2026" disabled />
              </div>

            </div>

            <button class="btn btn-primary">
              💾 Cập nhật thông tin
            </button>
          </div>

          <!-- PASSWORD -->
          <div class="card p-3 shadow-sm mb-4">
            <h6 class="mb-3">Bảo mật tài khoản</h6>

            <div class="mb-3">
              <label class="form-label">Mật khẩu hiện tại</label>
              <input type="password" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Mật khẩu mới</label>
              <input type="password" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Xác nhận mật khẩu</label>
              <input type="password" class="form-control" />
            </div>

            <button class="btn btn-warning">
              🔒 Đổi mật khẩu
            </button>
          </div>

          <!-- SYSTEM INFO -->
          <div class="card p-3 shadow-sm">
            <h6 class="mb-3">Thông tin hệ thống</h6>

            <div class="row text-center">

              <div class="col-md-4">
                <h6>🤖 AI trạng thái</h6>
                <span class="badge bg-success">Hoạt động</span>
              </div>

              <div class="col-md-4">
                <h6>📊 Lượt xử lý</h6>
                <p class="mb-0 fw-bold">1,250</p>
              </div>

              <div class="col-md-4">
                <h6>⚡ Hiệu suất</h6>
                <p class="mb-0 fw-bold text-success">88%</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>