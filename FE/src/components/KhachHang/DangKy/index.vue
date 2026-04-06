<template>
  <div class="register-page d-flex align-items-center justify-content-center py-4">
    <div class="floating-shape floating-shape-1"></div>
    <div class="floating-shape floating-shape-2"></div>
    <div class="floating-shape floating-shape-3"></div>

    <div class="container">
      <div class="row justify-content-center align-items-center">

        <!-- Left -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="register-left pe-lg-4 position-relative">
            <span class="badge rounded-pill mb-3 register-badge shadow-sm">
              ✨ Tạo Tài Khoản Cùng EchoKids
            </span>

            <h1 class="register-title mb-3">
              Bắt Đầu Hành Trình Học Tập Cùng EchoKids
            </h1>

            <p class="text-secondary fs-5 mb-4">
              Tạo tài khoản để luyện phát âm tiếng Việt, nhận huy hiệu và khám phá những bài học vui nhộn mỗi ngày.
            </p>

            <div class="row g-3 mb-4">
              <div class="col-4">
                <div class="register-stat-card border-orange hover-card">
                  <h3>150+</h3>
                  <small>Bài Học</small>
                </div>
              </div>

              <div class="col-4">
                <div class="register-stat-card border-green hover-card">
                  <h3>20+</h3>
                  <small>Chủ Đề</small>
                </div>
              </div>

              <div class="col-4">
                <div class="register-stat-card border-yellow hover-card">
                  <h3>100%</h3>
                  <small>Vui Nhộn</small>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3 flex-wrap">
              <div class="mini-feature-card">
                🎤 Ghi Âm
              </div>

              <div class="mini-feature-card">
                🤖 AI Chấm Điểm
              </div>

              <div class="mini-feature-card">
                🏆 Huy Hiệu
              </div>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="col-lg-5">
          <div class="register-card position-relative overflow-hidden">
            <div class="register-circle register-circle-1"></div>
            <div class="register-circle register-circle-2"></div>

            <div class="text-center mb-3 position-relative">
              <div class="register-avatar mx-auto mb-3">
                <i class="fa fa-user-plus"></i>
              </div>

              <h2 class="fw-bold mb-2 register-heading">
                Đăng Ký
              </h2>

              <p class="text-muted mb-0">
                Tạo tài khoản để bắt đầu học cùng EchoKids
              </p>
            </div>

            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold text-secondary">
                    Họ Và Tên
                  </label>

                  <div class="input-group register-input-group">
                    <span class="input-group-text bg-transparent border-0">
                      <i class="fa fa-user text-warning"></i>
                    </span>

                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="Nhập họ tên"
                    >
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-bold text-secondary">
                    Ngày Sinh
                  </label>

                  <div class="input-group register-input-group">
                    <span class="input-group-text bg-transparent border-0">
                      <i class="fa fa-calendar text-warning"></i>
                    </span>

                    <input
                      type="date"
                      class="form-control border-0"
                    >
                  </div>
                </div>

                <div class="col-md-12">
                  <label class="form-label fw-bold text-secondary">
                    Email
                  </label>

                  <div class="input-group register-input-group">
                    <span class="input-group-text bg-transparent border-0">
                      <i class="fa fa-envelope text-warning"></i>
                    </span>

                    <input
                      type="email"
                      class="form-control border-0"
                      placeholder="Nhập email"
                    >
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-bold text-secondary">
                    Mật Khẩu
                  </label>

                  <div class="input-group register-input-group">
                    <span class="input-group-text bg-transparent border-0">
                      <i class="fa fa-lock text-warning"></i>
                    </span>

                    <input
                      type="password"
                      class="form-control border-0"
                      placeholder="Nhập mật khẩu"
                    >
                  </div>
                </div>

                <div class="col-6">
                  <label class="form-label fw-bold text-secondary">
                    Xác Nhận Mật Khẩu
                  </label>

                  <div class="input-group register-input-group">
                    <span class="input-group-text bg-transparent border-0">
                      <i class="fa fa-key text-warning"></i>
                    </span>

                    <input
                      type="password"
                      class="form-control border-0"
                      placeholder="Nhập lại mật khẩu"
                    >
                  </div>
                </div>
              </div>

              <div class="form-check mt-3 mb-3">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label text-muted small">
                  Tôi đồng ý với điều khoản và chính sách của EchoKids
                </label>
              </div>

              <button
                type="submit"
                class="btn register-btn w-100 rounded-pill py-3 fw-bold mb-3"
              >
                Tạo Tài Khoản
              </button>

              <button
                type="button"
                class="btn google-btn w-100 rounded-pill py-3 fw-bold mb-3"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                  width="22"
                  class="me-2"
                >
                Đăng Ký Bằng Google
              </button>

              <div class="text-center">
                <span class="text-muted">
                  Đã có tài khoản?
                </span>

                <router-link to="/dang-nhap" class="login-link ms-1">
                  Đăng nhập ngay
                </router-link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff8f4, #fff1eb);
  position: relative;
  overflow: hidden;
  padding: 20px 0;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  animation: floatShape 8s ease-in-out infinite;
}

.floating-shape-1 {
  width: 260px;
  height: 260px;
  background: rgba(255, 107, 53, 0.08);
  top: -80px;
  left: -80px;
}

.floating-shape-2 {
  width: 160px;
  height: 160px;
  background: rgba(255, 193, 7, 0.12);
  right: 80px;
  top: 100px;
}

.floating-shape-3 {
  width: 220px;
  height: 220px;
  background: rgba(32, 201, 151, 0.08);
  bottom: -80px;
  right: -60px;
}

.register-badge {
  background: linear-gradient(135deg, #fff0e8, #ffe1d4);
  color: #ff6b35;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px !important;
  border-radius: 999px;
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.12);
}

.register-title {
  color: #0d3b66;
  font-size: 50px;
  line-height: 1.2;
  font-family: 'Lobster Two', cursive;
}

.register-stat-card {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  text-align: center;
  padding: 18px 10px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
  border: 2px solid transparent;
  transition: all 0.35s ease;
}

.hover-card:hover {
  transform: translateY(-6px);
}

.register-stat-card h3 {
  font-weight: 800;
  margin-bottom: 4px;
}

.border-orange {
  border-color: #ffe3d5;
}

.border-orange h3 {
  color: #ff6b35;
}

.border-green {
  border-color: #dff5ea;
}

.border-green h3 {
  color: #20c997;
}

.border-yellow {
  border-color: #fff2c7;
}

.border-yellow h3 {
  color: #f4a100;
}

.mini-feature-card {
  background: rgba(255,255,255,0.9);
  border-radius: 999px;
  padding: 10px 20px;
  font-weight: 700;
  color: #0d3b66;
  box-shadow: 0 10px 22px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.mini-feature-card:hover {
  transform: translateY(-3px);
}

.register-card {
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(12px);
  border-radius: 36px;
  padding: 30px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.6);
}

.register-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb18f, #ffd6c7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  color: #fff;
  box-shadow: 0 15px 30px rgba(255, 107, 53, 0.15);
}

.register-heading {
  color: #0d3b66;
}

.register-input-group {
  background: #fff7f3;
  border: 2px solid #ffe5d9;
  border-radius: 16px;
  padding: 4px 10px;
  transition: all 0.3s ease;
}

.register-input-group:focus-within {
  border-color: #ffb18f;
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.08);
}

.register-input-group .form-control {
  background: transparent;
  box-shadow: none;
  padding: 8px 0;
}

.register-btn {
  background: linear-gradient(135deg, #ff6b35, #ff914d);
  color: #fff;
  border: none;
  transition: all 0.35s ease;
  box-shadow: 0 15px 30px rgba(255, 107, 53, 0.22);
}

.register-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 35px rgba(255, 107, 53, 0.3);
  color: #fff;
}

.google-btn {
  background: #fff;
  border: 2px solid #ececec;
  color: #444;
  transition: all 0.35s ease;
}

.google-btn:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}

.login-link {
  color: #ff6b35;
  font-weight: 700;
  text-decoration: none;
}

.register-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}

.register-circle-1 {
  width: 100px;
  height: 100px;
  background: rgba(255, 107, 53, 0.08);
  top: -30px;
  right: -30px;
}

.register-circle-2 {
  width: 80px;
  height: 80px;
  background: rgba(255, 193, 7, 0.1);
  bottom: -20px;
  left: -20px;
}

@keyframes floatShape {
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 991px) {
  .register-title {
    font-size: 38px;
  }

  .register-card {
    padding: 24px;
  }
}
</style>