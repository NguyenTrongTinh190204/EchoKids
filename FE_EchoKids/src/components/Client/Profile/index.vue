<template>
  <div class="container py-4">

    <!-- HEADER -->
    <div class="text-center mb-4">
      <h4>👤 Thông tin cá nhân</h4>
      <p class="text-muted">👉 Bé và phụ huynh có thể cập nhật thông tin tại đây</p>
    </div>

    <!-- CHARACTER -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Hãy cập nhật thông tin để học tốt hơn nhé!”
    </div>

    <!-- PROFILE FORM -->
    <div class="card p-4 shadow-sm border-0 mb-4">

      <h5 class="mb-3">📋 Thông tin tài khoản</h5>

      <div class="row g-3">

        <div class="col-md-6">
          <label class="form-label">👶 Tên bé</label>
          <input type="text" class="form-control" v-model="form.name">
        </div>

        <div class="col-md-6">
          <label class="form-label">🎂 Tuổi</label>
          <input type="number" class="form-control" v-model="form.age">
        </div>

        <div class="col-md-6">
          <label class="form-label">📧 Email</label>
          <input type="email" class="form-control" v-model="form.email">
        </div>

        <div class="col-md-6">
          <label class="form-label">📱 Số điện thoại</label>
          <input type="text" class="form-control" v-model="form.phone">
        </div>

      </div>

      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="updateProfile">
          💾 Cập nhật thông tin
        </button>
      </div>

    </div>

    <!-- CHANGE PASSWORD -->
    <div class="card p-4 shadow-sm border-0 mb-4">

      <h5 class="mb-3">🔐 Đổi mật khẩu</h5>

      <div class="row g-3">

        <div class="col-md-4">
          <input type="password" class="form-control" placeholder="Mật khẩu cũ" v-model="password.old">
        </div>

        <div class="col-md-4">
          <input type="password" class="form-control" placeholder="Mật khẩu mới" v-model="password.new">
        </div>

        <div class="col-md-4">
          <input type="password" class="form-control" placeholder="Xác nhận mật khẩu" v-model="password.confirm">
        </div>

      </div>

      <div class="text-center mt-4">
        <button class="btn btn-warning" @click="changePassword">
          🔄 Đổi mật khẩu
        </button>
      </div>

    </div>

    <!-- LOGOUT -->
    <div class="text-center">
      <button class="btn btn-danger" @click="logout">
        🚪 Đăng xuất
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "Nguyễn Văn A",
        age: 6,
        email: "example@gmail.com",
        phone: "0123456789"
      },
      password: {
        old: "",
        new: "",
        confirm: ""
      }
    };
  },

  methods: {
    updateProfile() {
      // TODO: call API userService
      alert("✅ Cập nhật thành công!");
    },

    changePassword() {
      if (this.password.new !== this.password.confirm) {
        alert("❌ Mật khẩu xác nhận không khớp!");
        return;
      }
      alert("🔐 Đổi mật khẩu thành công!");
    },

    logout() {
      // TODO: call authService
      this.$router.push('/login');
    }
  }
};
</script>