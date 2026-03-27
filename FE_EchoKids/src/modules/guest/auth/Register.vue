<template>
  <div class="register-page d-flex align-items-center justify-content-center py-5">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-8">

          <!-- FORM ĐĂNG KÝ -->
          <div class="bg-white rounded-4 shadow p-4">

            <!-- HEADER -->
            <div class="text-center mb-4">
              <div class="register-logo mx-auto mb-3">
                EK
              </div>

              <h3 class="fw-bold text-primary mb-2">
                Đăng ký tài khoản
              </h3>

              <small class="text-muted">
                Tạo tài khoản để bắt đầu học và luyện phát âm
              </small>
            </div>

            <form @submit.prevent="handleRegister">

              <div class="row g-3">

                <div class="col-md-6">
                  <label class="form-label">
                    Họ và tên
                  </label>

                  <input
                    type="text"
                    class="form-control rounded-4"
                    placeholder="Nhập họ và tên"
                    v-model="form.fullName"
                  >
                </div>

                <div class="col-md-6">
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

                <div class="col-md-6">
                  <label class="form-label">
                    Số điện thoại
                  </label>

                  <input
                    type="text"
                    class="form-control rounded-4"
                    placeholder="Nhập số điện thoại"
                    v-model="form.phone"
                  >
                </div>

                <div class="col-md-6">
                  <label class="form-label">
                    Vai trò
                  </label>

                  <select
                    class="form-select rounded-4"
                    v-model="form.role"
                  >
                    <option value="">Chọn vai trò</option>
                    <option value="Phụ huynh">Phụ huynh</option>
                    <option value="Giáo viên">Giáo viên</option>
                  </select>
                </div>

                <div class="col-md-6">
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

                <div class="col-md-6">
                  <label class="form-label">
                    Xác nhận mật khẩu
                  </label>

                  <input
                    type="password"
                    class="form-control rounded-4"
                    placeholder="Nhập lại mật khẩu"
                    v-model="form.confirmPassword"
                  >
                </div>

              </div>

              <div class="form-check mt-4 mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.acceptPolicy"
                  id="acceptPolicy"
                >

                <label
                  class="form-check-label"
                  for="acceptPolicy"
                >
                  Tôi đồng ý với điều khoản và chính sách của hệ thống
                </label>
              </div>

              <button
                type="submit"
                class="btn btn-primary w-100 rounded-pill py-2 mb-3"
              >
                Đăng ký
              </button>

              <button
                type="button"
                class="btn btn-outline-primary w-100 rounded-pill py-2"
                @click="goToLogin"
              >
                Đã có tài khoản
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        confirmPassword: "",
        acceptPolicy: false
      }
    };
  },

  methods: {
    handleRegister() {
      console.log("Đăng ký", this.form);

      this.$router.push('/login');
    },

    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f2ff, #f6faff);
}

.register-logo {
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