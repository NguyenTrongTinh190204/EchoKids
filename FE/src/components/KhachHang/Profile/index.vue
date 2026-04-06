<template>
  <div class="container-fluid py-4" style="background-color: #f8f9fa; min-height: 100vh;">

    <div class="d-flex justify-content-end mb-3">
      <div class="d-flex align-items-center bg-white border rounded-3 p-2 shadow-sm">
        <span class="text-muted small fw-semibold me-2">Chế độ xem Profile:</span>
        <select class="form-select form-select-sm shadow-none" v-model="currentRole" @change="switchRole" style="width: 150px; cursor: pointer;">
          <option value="Admin">Admin</option>
          <option value="Giáo viên">Giáo viên</option>
          <option value="Học viên">Học viên</option>
        </select>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mx-auto" style="max-width: 1200px; background: #fff;">
      <div class="card-body p-4">
        
        <ul class="nav nav-tabs profile-tabs mb-4 d-flex" role="tablist">
          <li class="nav-item flex-fill text-center" role="presentation">
            <button 
              class="nav-link active w-100 fw-bold border-0 bg-transparent py-3" 
              id="info-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#info-pane" 
              type="button" 
              role="tab"
            >
              <i class="fa-solid fa-user me-2"></i>Thông tin cá nhân
            </button>
          </li>
          <li class="nav-item flex-fill text-center" role="presentation">
            <button 
              class="nav-link w-100 fw-bold border-0 bg-transparent py-3 text-muted" 
              id="password-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#password-pane" 
              type="button" 
              role="tab"
            >
              <i class="fa-solid fa-lock me-2"></i>Đổi mật khẩu
            </button>
          </li>
        </ul>

        <div class="tab-content">
          
          <div class="tab-pane fade show active" id="info-pane" role="tabpanel">
            <div class="row g-4">
              
              <div class="col-lg-4">
                <div class="border rounded-3 p-4 text-center h-100 d-flex flex-column justify-content-start position-relative">
                  
                  <div 
                    class="rounded-circle text-white d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm"
                    :class="getAvatarBgClass(currentRole)"
                    style="width: 110px; height: 110px; font-size: 3.5rem;"
                  >
                    <i class="fa-solid fa-user"></i>
                  </div>

                  <h4 class="fw-bold mb-1 text-dark">{{ user.ho_ten }}</h4>
                  <p class="text-muted mb-2">{{ user.email }}</p>
                  
                  <div>
                    <span class="badge text-white rounded-pill px-3 py-1 fw-normal" :class="getRoleBadgeClass(currentRole)" style="font-size: 0.85rem;">
                      {{ user.roleName }}
                    </span>
                  </div>

                  <div class="mt-2 pt-4 border-top text-start">
                    <template v-if="currentRole === 'Admin'">
                      <div class="d-flex align-items-center justify-content-between mb-2 p-2 bg-light rounded-2">
                        <div class="text-muted small fw-semibold"><i class="fa-solid fa-users text-primary me-2"></i>Tổng người dùng</div>
                        <span class="text-dark fw-bold">{{ systemStats.totalUsers }}</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-2 p-2 bg-light rounded-2">
                        <div class="text-muted small fw-semibold"><i class="fa-solid fa-book-open text-success me-2"></i>Tổng bài học</div>
                        <span class="text-dark fw-bold">{{ systemStats.totalLessons }}</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-2 p-2 bg-danger-subtle rounded-2 border border-danger-subtle">
                        <div class="text-danger small fw-semibold"><i class="fa-solid fa-spinner fa-spin me-2"></i>Bài học chờ duyệt</div>
                        <span class="text-danger fw-bold">{{ systemStats.pendingLessons }} bài</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-between p-2 bg-light rounded-2">
                        <div class="text-muted small fw-semibold"><i class="fa-solid fa-microphone-lines text-warning me-2"></i>Lượt luyện AI</div>
                        <span class="text-dark fw-bold">{{ systemStats.totalPractices }}</span>
                      </div>
                    </template>

                    <template v-if="currentRole === 'Giáo viên'">
                      <div class="d-flex align-items-center mb-2">
                        <div style="width: 25px;" class="text-center"><i class="fa-solid fa-file-signature text-warning fs-5"></i></div>
                        <span class="text-muted fw-semibold ms-2">Bài học đã tạo: <span class="text-dark">12 bài</span></span>
                      </div>
                      <div class="d-flex align-items-center">
                        <div style="width: 25px;" class="text-center"><i class="fa-solid fa-comment-dots text-info fs-5"></i></div>
                        <span class="text-muted fw-semibold ms-2">Gợi ý đã gửi: <span class="text-dark">156 lần</span></span>
                      </div>
                    </template>

                    <template v-if="currentRole === 'Học viên'">
                      <div class="d-flex align-items-center mb-2">
                        <div style="width: 25px;" class="text-center"><i class="fa-solid fa-microphone text-danger fs-5"></i></div>
                        <span class="text-muted fw-semibold ms-2">Số lượt luyện: <span class="text-dark">156 lượt</span></span>
                      </div>
                      <div class="d-flex align-items-center mb-3">
                        <div style="width: 25px;" class="text-center"><i class="fa-solid fa-star text-warning fs-5"></i></div>
                        <span class="text-muted fw-semibold ms-2">Điểm trung bình AI: <span class="text-success">85%</span></span>
                      </div>
                      
                      <div class="mt-3">
                        <div class="d-flex justify-content-between mb-1">
                          <small class="text-muted fw-semibold">Hoàn thành khóa học</small>
                          <small class="fw-bold text-primary">65%</small>
                        </div>
                        <div class="progress" style="height: 6px;">
                          <div class="progress-bar bg-primary" style="width: 65%"></div>
                        </div>
                      </div>
                    </template>

                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <div class="border rounded-3 p-4 h-100 d-flex flex-column">
                  
                  <h5 class="fw-bold text-dark mb-4">
                    <i class="fa-solid fa-pen-to-square me-2 text-secondary"></i>Cập nhật thông tin
                  </h5>

                  <form @submit.prevent="saveProfile" class="flex-grow-1 d-flex flex-column">
                    <div class="row g-4 mb-4">
                      <div class="col-md-6">
                        <label class="form-label text-muted small fw-semibold">Họ và tên <span class="text-danger">*</span></label>
                        <input type="text" class="form-control shadow-none" v-model="user.ho_ten" required>
                      </div>
                      
                      <div class="col-md-6">
                        <label class="form-label text-muted small fw-semibold">Email</label>
                        <input type="email" class="form-control shadow-none bg-light" v-model="user.email" disabled>
                      </div>

                      <div class="col-md-6">
                        <label class="form-label text-muted small fw-semibold">Ngày sinh</label>
                        <input type="date" class="form-control shadow-none" v-model="user.ngay_sinh">
                      </div>

                      <div class="col-md-6">
                        <label class="form-label text-muted small fw-semibold">Chức vụ</label>
                        <input type="text" class="form-control shadow-none bg-light" v-model="user.roleName" disabled>
                      </div>
                    </div>

                    <div class="mt-auto pt-4 d-flex justify-content-end gap-3 align-items-center border-top">
                      <button type="button" class="btn btn-light px-4 border shadow-none" style="background: #f8f9fa;">Huỷ</button>
                      <button type="submit" class="btn text-white px-4 shadow-sm" style="background-color: #6f42c1; border-color: #6f42c1;">
                        <i class="fa-solid fa-floppy-disk me-2"></i>Lưu thay đổi
                      </button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>

          <div class="tab-pane fade" id="password-pane" role="tabpanel">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="border rounded-3 p-4">
                  <h5 class="fw-bold text-dark mb-4">
                    <i class="fa-solid fa-lock me-2 text-secondary"></i>Bảo mật tài khoản
                  </h5>

                  <form @submit.prevent="changePassword">
                    <div class="mb-3">
                      <label class="form-label text-muted small fw-semibold">Mật khẩu hiện tại <span class="text-danger">*</span></label>
                      <input type="password" class="form-control shadow-none" required placeholder="Nhập mật khẩu hiện tại...">
                    </div>
                    <div class="mb-3">
                      <label class="form-label text-muted small fw-semibold">Mật khẩu mới <span class="text-danger">*</span></label>
                      <input type="password" class="form-control shadow-none" required placeholder="Tối thiểu 6 ký tự">
                    </div>
                    <div class="mb-4">
                      <label class="form-label text-muted small fw-semibold">Xác nhận mật khẩu mới <span class="text-danger">*</span></label>
                      <input type="password" class="form-control shadow-none" required placeholder="Nhập lại mật khẩu mới...">
                    </div>

                    <div class="d-flex justify-content-end gap-3 border-top pt-4">
                      <button type="button" class="btn btn-light px-4 border shadow-none">Huỷ</button>
                      <button type="submit" class="btn text-white px-4 shadow-sm" style="background-color: #6f42c1; border-color: #6f42c1;">
                        <i class="fa-solid fa-key me-2"></i>Cập nhật mật khẩu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRole: "Admin", 
      
      user: {
        id: 1,
        ho_ten: "Nguyễn Quốc Việt",
        email: "viet.admin@echokids.com",
        ngay_sinh: "2002-05-15",
        roleName: "Quản trị viên Hệ thống",
      },

      systemStats: {
        totalUsers: 245,
        totalLessons: 52,
        pendingLessons: 6, 
        totalPractices: 1540
      }
    };
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    },

    getAvatarBgClass(role) {
      if (role === 'Admin') return 'bg-danger';
      if (role === 'Giáo viên') return 'bg-primary';
      return 'bg-success';
    },

    getRoleBadgeClass(role) {
      if (role === 'Admin') return 'bg-danger';
      if (role === 'Giáo viên') return 'bg-primary';
      return 'bg-success';
    },

    // Hàm chuyển đổi data mẫu khi bạn chọn Dropdown test
    switchRole() {
      if (this.currentRole === 'Admin') {
        this.user.ho_ten = "Nguyễn Quốc Việt";
        this.user.email = "viet.admin@echokids.com";
        this.user.roleName = "Quản trị viên Hệ thống";
      } else if (this.currentRole === 'Giáo viên') {
        this.user.ho_ten = "Cô giáo Trần Lan";
        this.user.email = "lan.tran@gmail.com";
        this.user.roleName = "Giáo viên chuyên môn";
      } else {
        this.user.ho_ten = "Bé Phạm Nam";
        this.user.email = "phuhuynh.nam@gmail.com";
        this.user.roleName = "Học viên luyện tập";
      }
    },

    saveProfile() {
      alert("Đã lưu thông tin cá nhân thành công!");
    },

    changePassword() {
      alert("Đã đổi mật khẩu an toàn!");
    }
  }
};
</script>

<style scoped>
.profile-tabs .nav-link {
  border-bottom: 2px solid transparent !important;
  color: #6c757d;
  transition: all 0.2s ease;
}

.profile-tabs .nav-link.active {
  border-bottom: 2px solid #0d6efd !important;
  color: #0d6efd !important;
}

.profile-tabs .nav-link:hover:not(.active) {
  border-bottom: 2px solid #dee2e6 !important;
}

input:disabled {
  background-color: #e9ecef !important;
  cursor: not-allowed;
}
</style>