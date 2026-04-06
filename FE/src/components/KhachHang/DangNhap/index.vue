<template>
  <div class="login-page d-flex align-items-center justify-content-center py-5">
    <div class="floating-shape floating-shape-1"></div>
    <div class="floating-shape floating-shape-2"></div>
    <div class="floating-shape floating-shape-3"></div>

    <div class="container">
      <div class="row justify-content-center align-items-center">

        <!-- Left -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="login-left pe-lg-5 position-relative">
            <span class="badge rounded-pill px-4 py- mb-3 login-badge shadow-sm">
              ✨ Chào Mừng Đến Với EchoKids
            </span>

            <h1 class="login-title mb-4">
             Cùng EchoKids Khám Phá Mỗi Ngày
            </h1>

            <p class="text-secondary fs-5 mb-4">
              Luyện phát âm tiếng Việt với hình ảnh sinh động, ghi âm trực tiếp và AI chấm điểm vui nhộn. 
            </p>

            <div class="row g-3 mb-4">
              <div class="col-4">
                <div class="login-stat-card border-orange hover-card">
                  <h3>150+</h3>
                  <small>Bài Học</small>
                </div>
              </div>

              <div class="col-4">
                <div class="login-stat-card border-green hover-card">
                  <h3>20+</h3>
                  <small>Chủ Đề</small>
                </div>
              </div>

              <div class="col-4">
                <div class="login-stat-card border-yellow hover-card">
                  <h3>100%</h3>
                  <small>Vui Nhộn</small>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3 flex-wrap mb-4">
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
          <div class="login-card position-relative overflow-hidden">

            <div class="login-circle login-circle-1"></div>
            <div class="login-circle login-circle-2"></div>

            <div class="text-center mb-4 position-relative">
<div class="login-avatar mx-auto mb-3">
  <i class="fa fa-book-reader"></i>
</div>

              <h2 class="fw-bold mb-2" style="color: #0d3b66;">
                Đăng Nhập
              </h2>

              <p class="text-muted mb-0">
                Bé hãy đăng nhập để tiếp tục học nhé
              </p>
            </div>

            <form>
              <div class="mb-3">
                <label class="form-label fw-bold text-secondary">
                  Email
                </label>

                <div class="input-group login-input-group">
                  <span class="input-group-text bg-transparent border-0">
                    <i class="fa fa-envelope text-warning"></i>
                  </span>

                  <input
                    type="email"
                    class="form-control border-0"
                    placeholder="Nhập email của bé"
                  >
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold text-secondary">
                  Mật Khẩu
                </label>

                <div class="input-group login-input-group">
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

              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                  <label class="form-check-label text-muted">
                    Ghi nhớ
                  </label>
                </div>

                <router-link to="/quen-mat-khau" class="forgot-link">
                  Quên mật khẩu?
                </router-link>
              </div>

              <button
                type="submit"
                class="btn login-btn w-100 rounded-pill py-3 fw-bold mb-3"
              >
                Đăng Nhập
              </button>

              <button
                type="button"
                class="btn google-btn w-100 rounded-pill py-3 fw-bold mb-4"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                  width="22"
                  class="me-2"
                >
                Đăng Nhập Bằng Google
              </button>

              <div class="text-center">
                <span class="text-muted">
                  Chưa có tài khoản?
                </span>

                <router-link to="/dang-ky" class="register-link ms-1">
                  Đăng ký ngay
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
.login-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff0e8, #ffe1d4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  color: #ff6b35;
  box-shadow: 0 12px 25px rgba(255, 107, 53, 0.15);
}
.login-badge {
  background: linear-gradient(135deg, #fff0e8, #ffe1d4);
  color: #ff6b35;
  font-size: 18px;
  font-weight: 700;
  padding: 14px 28px !important;
  border-radius: 999px;
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.12);
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  animation: floatShape 8s ease-in-out infinite;
}

.floating-shape-1 {
  width: 300px;
  height: 300px;
  background: rgba(255, 107, 53, 0.08);
  top: -80px;
  left: -80px;
}

.floating-shape-2 {
  width: 180px;
  height: 180px;
  background: rgba(255, 193, 7, 0.12);
  right: 80px;
  top: 100px;
}

.floating-shape-3 {
  width: 250px;
  height: 250px;
  background: rgba(32, 201, 151, 0.08);
  bottom: -80px;
  right: -60px;
}

.login-badge {
  background: #fff1e8;
  color: #ff6b35;
  font-weight: 700;
  border: 2px solid #ffd8c8;
}

.login-title {
  color: #0d3b66;
  font-size: 58px;
  line-height: 1.2;
  font-family: 'Lobster Two', cursive;
}

.login-stat-card {
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(10px);
  border-radius: 28px;
  text-align: center;
  padding: 22px 10px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.06);
  border: 2px solid transparent;
  transition: all 0.35s ease;
}

.hover-card:hover {
  transform: translateY(-8px) scale(1.03);
}

.login-stat-card h3 {
  font-weight: 800;
  margin-bottom: 5px;
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
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(10px);
  border-radius: 999px;
  padding: 12px 22px;
  font-weight: 700;
  color: #0d3b66;
  box-shadow: 0 12px 25px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.mini-feature-card:hover {
  transform: translateY(-4px);
}

.big-image-circle {
  width: 340px;
  height: 340px;
  border-radius: 50%;
  padding: 12px;
  background: linear-gradient(135deg, #ffd7c6, #fff0e8);
  box-shadow: 0 25px 50px rgba(0,0,0,0.08);
  overflow: hidden;
}

.big-image-circle img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.floating-badge {
  position: absolute;
  background: #fff;
  padding: 14px 18px;
  border-radius: 20px;
  font-weight: 700;
  color: #0d3b66;
  box-shadow: 0 18px 35px rgba(0,0,0,0.08);
}

.badge-1 {
  top: 20px;
  right: 20px;
}

.badge-2 {
  top: 140px;
  left: 260px;
}

.badge-3 {
  bottom: 20px;
  left: 220px;
}

.login-card {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-radius: 40px;
  padding: 45px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.6);
}

.login-avatar {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb18f, #ffd6c7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  box-shadow: 0 15px 30px rgba(255, 107, 53, 0.15);
}

.login-input-group {
  background: #fff7f3;
  border: 2px solid #ffe5d9;
  border-radius: 18px;
  padding: 6px 10px;
  transition: all 0.3s ease;
}

.login-input-group:focus-within {
  border-color: #ffb18f;
  box-shadow: 0 0 0 5px rgba(255, 107, 53, 0.08);
}

.login-input-group .form-control {
  background: transparent;
  box-shadow: none;
  padding: 10px 0;
}

.login-btn {
  background: linear-gradient(135deg, #ff6b35, #ff914d);
  color: #fff;
  border: none;
  transition: all 0.35s ease;
  box-shadow: 0 15px 30px rgba(255, 107, 53, 0.22);
}

.login-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px rgba(255, 107, 53, 0.3);
}

.google-btn {
  background: #fff;
  border: 2px solid #ececec;
  color: #444;
  transition: all 0.35s ease;
}

.google-btn:hover {
  background: #f8f9fa;
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}

.forgot-link,
.register-link {
  color: #ff6b35;
  font-weight: 700;
  text-decoration: none;
}

.login-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}

.login-circle-1 {
  width: 120px;
  height: 120px;
  background: rgba(255, 107, 53, 0.08);
  top: -30px;
  right: -30px;
}

.login-circle-2 {
  width: 90px;
  height: 90px;
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
</style>