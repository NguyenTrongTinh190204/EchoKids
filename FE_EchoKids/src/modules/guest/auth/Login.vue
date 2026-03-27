<template>
  <div class="login-page d-flex align-items-center justify-content-center">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7">

          <!-- FORM ĐĂNG NHẬP -->
          <div class="bg-white rounded-4 shadow p-4">

            <!-- HEADER -->
            <div class="text-center mb-4">
              <h class="login-logo mx-auto mb-3">
                EchoKids
              </h>

              <h3 class="fw-bold text-primary mb-2">
                Đăng nhập
              </h3>

              <small class="text-muted">
                Chào mừng quay lại với hệ thống Speech Therapy
              </small>
            </div>

            <!-- FORM -->
            <form @submit.prevent="handleLogin">

              <div class="mb-3">
                <label class="form-label">
                  Email
                </label>

                <input
                  type="email"
                  class="form-control rounded-4"
                  placeholder="Nhập email"
                  v-model="form.email"
                >
              </div>

              <div class="mb-3">
                <label class="form-label">
                  Mật khẩu
                </label>

                <input
                  type="password"
                  class="form-control rounded-4"
                  placeholder="Nhập mật khẩu"
                  v-model="form.password"
                >
              </div>

              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="form.remember"
                    id="rememberMe"
                  >

                  <label
                    class="form-check-label"
                    for="rememberMe"
                  >
                    Ghi nhớ đăng nhập
                  </label>
                </div>

                <button
                  type="button"
                  class="btn btn-link text-decoration-none p-0"
                  @click="goToForgotPassword"
                >
                  Quên mật khẩu?
                </button>
              </div>

              <button
                type="submit"
                class="btn btn-primary w-100 rounded-pill py-2 mb-3"
              >
                Đăng nhập
              </button>

              <button
                type="button"
                class="btn btn-outline-primary w-100 rounded-pill py-2"
                @click="goToRegister"
              >
                Tạo tài khoản
              </button>

            </form>

            <!-- DEMO ACCOUNT -->
            <div class="bg-light rounded-4 p-3 mt-4">
              <div class="fw-bold mb-2">
                Tài khoản demo
              </div>

              <small class="text-muted d-block">
                Admin: admin@example.com
              </small>

              <small class="text-muted d-block">
                Giáo viên: teacher@example.com
              </small>

              <small class="text-muted d-block">
                Phụ huynh: parent@example.com
              </small>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false
      }
    };
  },

  methods: {
    handleLogin() {
      console.log("Đăng nhập", this.form);

      // điều hướng demo theo email
      if (this.form.email.includes("admin")) {
        this.$router.push('/admin/dashboard');
        return;
      }

      if (this.form.email.includes("teacher")) {
        this.$router.push('/teacher/dashboard');
        return;
      }

      if (this.form.email.includes("parent")) {
        this.$router.push('/parent/dashboard');
        return;
      }

      this.$router.push('/child/home');
    },

    goToRegister() {
      this.$router.push('/register');
    },

    goToForgotPassword() {
      this.$router.push('/forgot-password');
    }
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f2ff, #f6faff);
}

.login-logo {
  width: 72px;
  height: 72px;
  border-radius: 24px;
  background: linear-gradient(135deg, #0d6efd, #4da3ff);
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>