<template>
  <div class="forgot-page d-flex align-items-center justify-content-center py-5">
    <div class="floating-shape floating-shape-1"></div>
    <div class="floating-shape floating-shape-2"></div>
    <div class="floating-shape floating-shape-3"></div>

    <div class="container">
      <div class="row justify-content-center align-items-center">


        <!-- Right -->
        <div class="col-lg-5">
          <div class="forgot-card position-relative overflow-hidden">

            <div class="card-circle card-circle-1"></div>
            <div class="card-circle card-circle-2"></div>

            <div class="text-center mb-4">
              <div class="forgot-icon mx-auto mb-3">
                <i class="fa fa-envelope-open-text"></i>
              </div>

              <h2 class="fw-bold mb-2" style="color: #0d3b66;">
                Xác Nhận Email
              </h2>

              <p class="text-muted">
                Nhập email để nhận mã xác thực
              </p>
            </div>

            <form>
              <div class="mb-4">
                <label class="form-label fw-bold text-secondary">
                  Email Đã Đăng Ký
                </label>

                <div class="input-group forgot-input-group">
                  <span class="input-group-text bg-transparent border-0">
                    <i class="fa fa-envelope text-warning"></i>
                  </span>

                  <input
                    type="email"
                    class="form-control border-0"
                    placeholder="Nhập email của bạn"
                  >
                </div>
              </div>

              <button
                type="submit"
                class="btn forgot-btn w-100 rounded-pill py-3 fw-bold mb-4"
              >
                Gửi Mã Xác Nhận
              </button>

              <div class="verify-box mb-4">
                <label class="form-label fw-bold text-secondary mb-3">
                  Nhập Mã Xác Nhận
                </label>

                <div class="d-flex justify-content-between gap-2">
                  <input type="text" maxlength="1" class="verify-input">
                  <input type="text" maxlength="1" class="verify-input">
                  <input type="text" maxlength="1" class="verify-input">
                  <input type="text" maxlength="1" class="verify-input">
                  <input type="text" maxlength="1" class="verify-input">
                  <input type="text" maxlength="1" class="verify-input">
                </div>

                <div class="text-end mt-3">
                  <a href="#" class="resend-link">
                    Gửi lại mã
                  </a>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold text-secondary">
                  Mật Khẩu Mới
                </label>

                <div class="input-group forgot-input-group">
                  <span class="input-group-text bg-transparent border-0">
                    <i class="fa fa-lock text-warning"></i>
                  </span>

                  <input
                    type="password"
                    class="form-control border-0"
                    placeholder="Nhập mật khẩu mới"
                  >
                </div>
              </div>

              <div class="mb-4">
                <label class="form-label fw-bold text-secondary">
                  Xác Nhận Mật Khẩu
                </label>

                <div class="input-group forgot-input-group">
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

              <button
                type="button"
                class="btn reset-btn w-100 rounded-pill py-3 fw-bold mb-3"
              >
                Đặt Lại Mật Khẩu
              </button>

              <div class="text-center">
                <router-link to="/dang-nhap" class="back-login-link">
                  ← Quay Lại Đăng Nhập
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
.forgot-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff8f4, #fff1eb);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.forgot-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 28px;
  padding: 22px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.forgot-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb18f, #ffd6c7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  margin: 0 auto;
}

.forgot-input-group {
  background: #fff7f3;
  border: 2px solid #ffe5d9;
  border-radius: 14px;
  padding: 2px 10px;
  transition: all 0.3s ease;
}

.forgot-input-group:focus-within {
  border-color: #ffb18f;
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.08);
}

.forgot-inputGroup .form-control,
.forgot-input-group .form-control {
  background: transparent;
  box-shadow: none;
  padding: 6px 0;
  height: 40px;
}

.forgot-btn,
.reset-btn {
  background: linear-gradient(135deg, #ff6b35, #ff914d);
  color: #fff;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 12px 24px rgba(255, 107, 53, 0.18);
}

.forgot-btn:hover,
.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 28px rgba(255, 107, 53, 0.25);
  color: #fff;
}

.verify-box {
  background: #fff8f4;
  border: 2px dashed #ffd8c8;
  border-radius: 16px;
  padding: 10px;
}

.verify-box .d-flex {
  gap: 8px !important;
}

.verify-input {
  width: 46px;
  height: 50px;
  border-radius: 12px;
  border: 2px solid #ffe0d1;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #0d3b66;
  background: #fff;
  flex-shrink: 0;
}

.verify-input:focus {
  outline: none;
  border-color: #ff6b35;
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.12);
}

.resend-link,
.back-login-link {
  color: #ff6b35;
  font-weight: 700;
  text-decoration: none;
}

.card-circle {
  position: absolute;
  border-radius: 50%;
}

.card-circle-1 {
  width: 90px;
  height: 90px;
  background: rgba(255, 107, 53, 0.08);
  top: -20px;
  right: -20px;
}

.card-circle-2 {
  width: 70px;
  height: 70px;
  background: rgba(255, 193, 7, 0.1);
  bottom: -15px;
  left: -15px;
}

@media (max-width: 991px) {
  .forgot-card {
    padding: 18px;
    border-radius: 22px;
  }

  .verify-input {
    width: 32px;
    height: 36px;
    font-size: 15px;
  }
}
</style>