<template>
  <div class="container-fluid" style="background-color: #f8f9fa; min-height: 100vh;">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1" style="color: #2b3445;">Quản lý Tài khoản</h4>
      </div>

      <button 
        class="btn btn-danger rounded-3 px-4 shadow-sm" 
        data-bs-toggle="modal" 
        data-bs-target="#createUserModal"
      >
        <i class="fa-solid fa-user-plus me-1"></i> Cấp tài khoản
      </button>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mb-4" style="background: #fff;">
      <div class="card-body p-3">
        <div class="row g-2 align-items-center">
          <div class="col-12 col-md-4 position-relative">
            <input
              type="text"
              class="form-control ps-4"
              placeholder="Tìm theo tên, email, sđt..."
              v-model="tim_kiem"
            >
          </div>
          <div class="col-12 col-md-3">
            <select class="form-select" v-model="vai_tro_duoc_chon" style="cursor: pointer;">
              <option value="">Tất cả vai trò</option>
              <option value="Admin">Admin</option>
              <option value="Giáo viên">Giáo viên</option>
              <option value="Học viên">Học viên</option>
            </select>
          </div>
          <div class="col-12 col-md-3">
            <select class="form-select" v-model="trang_thai_duoc_chon" style="cursor: pointer;">
              <option value="">Tất cả trạng thái</option>
              <option value="Đang hoạt động">Đang hoạt động</option>
              <option value="Tạm khóa">Tạm khóa</option>
            </select>
          </div>
          <div class="col-12 col-md-2">
            <button class="btn btn-light w-100 border" @click="datLaiBoLoc">
              <i class="fa-solid fa-rotate-right me-1"></i> Đặt lại
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mb-4" style="background: #fff;">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light" style="font-size: 0.85rem;">
              <tr>
                <th class="ps-4 py-3 border-bottom-0">Người dùng</th>
                <th class="py-3 border-bottom-0">Thông tin liên hệ</th>
                <th class="py-3 border-bottom-0">Vai trò & Thông tin phụ</th>
                <th class="py-3 border-bottom-0">Ngày tạo</th>
                <th class="py-3 border-bottom-0">Trạng thái</th>
                <th class="pe-4 py-3 border-bottom-0 text-end">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in danh_sach_nguoi_dung_da_loc" :key="user.id">
                <td class="ps-4 py-3">
                  <div class="d-flex align-items-center">
                    <div 
                      class="rounded-circle d-flex align-items-center justify-content-center fw-bold me-3 text-white shadow-sm flex-shrink-0"
                      :style="`width: 40px; height: 40px; background-color: ${layMauDaiDien(user.role)};`"
                    >
                      {{ user.name.charAt(0) }}
                    </div>
                    <div>
                      <h6 class="mb-0 fw-semibold" style="color: #2b3445;">{{ user.name }}</h6>
                    </div>
                  </div>
                </td>
                
                <td class="py-3">
                  <div class="text-dark mb-1" style="font-size: 0.9rem;">
                    <i class="fa-solid fa-envelope text-muted me-1" style="width: 16px;"></i> {{ user.email }}
                  </div>
                  <div class="text-dark" style="font-size: 0.9rem;">
                    <i class="fa-solid fa-phone text-muted me-1" style="width: 16px;"></i> {{ user.phone }}
                  </div>
                </td>

                <td class="py-3">
                  <span class="badge mb-1" :class="layLopHuyHieuVaiTro(user.role)">
                    <i class="fa-solid me-1" :class="layBieuTuongVaiTro(user.role)"></i> {{ user.role }}
                  </span>
                  <div v-if="user.role === 'Giáo viên'" class="text-muted" style="font-size: 0.8rem;">
                    {{ user.specialty }} • {{ user.experience }}
                  </div>
                  <div v-if="user.role === 'Học viên'" class="text-muted" style="font-size: 0.8rem;">
                    Đã học: <span class="fw-semibold text-primary">{{ user.learningData?.totalLessons || 0 }}</span> bài
                  </div>
                </td>

                <td class="py-3 text-muted" style="font-size: 0.9rem;">
                  {{ user.joinedAt }}
                </td>

                <td class="py-3">
                  <span class="badge rounded-pill" :class="user.status === 'Đang hoạt động' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'">
                    <i class="fa-solid fa-circle me-1" style="font-size: 0.4rem; vertical-align: middle;"></i> 
                    {{ user.status }}
                  </span>
                </td>

                <td class="pe-4 py-3 text-end">
                  <button 
                    class="btn btn-sm btn-light border" 
                    :title="user.status === 'Đang hoạt động' ? 'Khóa tài khoản' : 'Mở khóa'"
                    @click="chuanBiDaoTrangThai(user)"
                    data-bs-toggle="modal" 
                    data-bs-target="#confirmStatusModal"
                  >
                    <i class="fa-solid" :class="user.status === 'Đang hoạt động' ? 'fa-unlock text-success' : 'fa-lock text-danger'"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="danh_sach_nguoi_dung_da_loc.length === 0" class="text-center py-5">
          <div class="mb-3" style="font-size: 3rem; color: #dee2e6;">
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <h6 class="fw-bold mb-2">Không tìm thấy tài khoản</h6>
          <p class="text-muted mb-0">Thử thay đổi từ khóa hoặc bộ lọc.</p>
        </div>
      </div>
    </div>

    <div class="modal fade" id="createUserModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h1 class="modal-title text-white fs-5" id="createUserModalLabel">Cấp tài khoản mới</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="datLaiForm"></button>
          </div>
          <div class="modal-body text-start">
            <form @submit.prevent="guiFormNguoiDung">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label text-muted small fw-semibold mb-1">Vai trò hệ thống <span class="text-danger">*</span></label>
                  <select class="form-select shadow-none" v-model="form_nguoi_dung.role" required>
                    <option value="" disabled selected>-- Chọn vai trò --</option>
                    <option value="Admin">Admin</option>
                    <option value="Giáo viên">Giáo viên</option>
                    <option value="Học viên">Học viên</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label text-muted small fw-semibold mb-1">Họ và tên <span class="text-danger">*</span></label>
                  <input type="text" class="form-control shadow-none" v-model="form_nguoi_dung.name" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label text-muted small fw-semibold mb-1">Số điện thoại <span class="text-danger">*</span></label>
                  <input type="tel" class="form-control shadow-none" v-model="form_nguoi_dung.phone" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label text-muted small fw-semibold mb-1">Email <span class="text-danger">*</span></label>
                  <input type="email" class="form-control shadow-none" v-model="form_nguoi_dung.email" required>
                </div>
                <div class="col-md-12">
                  <label class="form-label text-muted small fw-semibold mb-1">Mật khẩu khởi tạo <span class="text-danger">*</span></label>
                  <input type="password" class="form-control shadow-none" v-model="form_nguoi_dung.password" required>
                </div>

                <template v-if="form_nguoi_dung.role === 'Giáo viên'">
                  <div class="col-md-6">
                    <label class="form-label text-muted small fw-semibold mb-1">Chuyên môn</label>
                    <select class="form-select shadow-none" v-model="form_nguoi_dung.specialty">
                      <option value="Ngôn ngữ cơ bản">Ngôn ngữ cơ bản</option>
                      <option value="Phát âm nâng cao">Phát âm nâng cao</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-muted small fw-semibold mb-1">Kinh nghiệm (Năm)</label>
                    <input type="number" class="form-control shadow-none" min="0" v-model="form_nguoi_dung.experience">
                  </div>
                </template>

                <div class="col-12 mt-3 ms-3">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="statusSwitch" v-model="form_nguoi_dung.isActive">
                    <label class="form-check-label text-muted small" for="statusSwitch">Kích hoạt ngay</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="datLaiForm">Hủy bỏ</button>
            <button type="button" class="btn btn-danger" @click="guiFormNguoiDung">
              <i class="fa-solid fa-user-plus me-1"></i> Tạo tài khoản
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="confirmStatusModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-bottom-0 pb-0">
            <h5 class="modal-title fw-bold">Xác nhận thao tác</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center py-4" v-if="nguoi_dung_can_doi_trang_thai">
            <div 
              class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 text-white"
              :class="nguoi_dung_can_doi_trang_thai.status === 'Đang hoạt động' ? 'bg-danger' : 'bg-success'"
              style="width: 70px; height: 70px; font-size: 2rem;"
            >
              <i class="fa-solid" :class="nguoi_dung_can_doi_trang_thai.status === 'Đang hoạt động' ? 'fa-lock' : 'fa-unlock'"></i>
            </div>
            <h5 class="fw-semibold">
              Bạn có chắc chắn muốn <span :class="nguoi_dung_can_doi_trang_thai.status === 'Đang hoạt động' ? 'text-danger' : 'text-success'">{{ nguoi_dung_can_doi_trang_thai.status === 'Đang hoạt động' ? 'khóa' : 'mở khóa' }}</span>
            </h5>
            <p class="text-muted mb-0">tài khoản <strong>{{ nguoi_dung_can_doi_trang_thai.name }}</strong> không?</p>
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-center pt-0 pb-4">
            <button type="button" class="btn btn-light px-4 border" data-bs-dismiss="modal">Hủy bỏ</button>
            <button 
              type="button" 
              class="btn px-4 text-white" 
              :class="nguoi_dung_can_doi_trang_thai?.status === 'Đang hoạt động' ? 'btn-danger' : 'btn-success'" 
              @click="thucHienDaoTrangThai"
            >
              Đồng ý
            </button>
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
      tim_kiem: '',
      vai_tro_duoc_chon: '',
      trang_thai_duoc_chon: '',
      
      form_nguoi_dung: {
        role: '', name: '', phone: '', email: '', password: '',
        specialty: '', experience: '', isActive: true
      },

      nguoi_dung_can_doi_trang_thai: null, // Lưu tạm user đang cần đổi trạng thái

      // Dữ liệu mẫu
      danh_sach_nguoi_dung: [
        { id: 1, name: 'Quản trị viên', email: 'admin@echokids.com', phone: '0999999999', role: 'Admin', status: 'Đang hoạt động', joinedAt: '01/01/2026' },
        { id: 2, name: 'Nguyễn Thị Lan', email: 'lan.teacher@gmail.com', phone: '0901234567', role: 'Giáo viên', specialty: 'Ngôn ngữ cơ bản', experience: '3 năm', status: 'Đang hoạt động', joinedAt: '12/01/2026' },
        { id: 3, name: 'Bé Phạm Nam', email: 'nam.student@gmail.com', phone: '0987654321', role: 'Học viên', status: 'Đang hoạt động', joinedAt: '05/02/2026', learningData: { totalLessons: 12, completedExercises: 45, averageScore: 82, progress: 65 } },
        { id: 4, name: 'Trần Minh Anh', email: 'minhanh.teacher@gmail.com', phone: '0912345678', role: 'Giáo viên', specialty: 'Phát âm nâng cao', experience: '5 năm', status: 'Tạm khóa', joinedAt: '20/11/2025' },
        { id: 5, name: 'Bé Lê Hoa', email: 'hoa.student@gmail.com', phone: '0933445566', role: 'Học viên', status: 'Đang hoạt động', joinedAt: '10/03/2026', learningData: { totalLessons: 4, completedExercises: 10, averageScore: 70, progress: 20 } },
      ]
    }
  },

  computed: {
    danh_sach_nguoi_dung_da_loc() {
      return this.danh_sach_nguoi_dung.filter(user => {
        const keyword = this.tim_kiem.toLowerCase();
        const matchKeyword = user.name.toLowerCase().includes(keyword) || 
                             user.email.toLowerCase().includes(keyword) ||
                             user.phone.includes(keyword);

        const matchRole = this.vai_tro_duoc_chon ? user.role === this.vai_tro_duoc_chon : true;
        const matchStatus = this.trang_thai_duoc_chon ? user.status === this.trang_thai_duoc_chon : true;

        return matchKeyword && matchRole && matchStatus;
      });
    }
  },

  methods: {
    datLaiBoLoc() {
      this.tim_kiem = '';
      this.vai_tro_duoc_chon = '';
      this.trang_thai_duoc_chon = '';
    },
    
    layMauDaiDien(role) {
      if(role === 'Admin') return '#dc3545';
      if(role === 'Giáo viên') return '#0d6efd';
      return '#198754'; 
    },

    layLopHuyHieuVaiTro(role) {
      if(role === 'Admin') return 'bg-danger text-white';
      if(role === 'Giáo viên') return 'bg-primary text-white';
      return 'bg-success text-white';
    },

    layBieuTuongVaiTro(role) {
      if(role === 'Admin') return 'fa-shield-halved';
      if(role === 'Giáo viên') return 'fa-chalkboard-user';
      return 'fa-child-reaching';
    },

    guiFormNguoiDung() {
      if (!this.form_nguoi_dung.name || !this.form_nguoi_dung.email || !this.form_nguoi_dung.password || !this.form_nguoi_dung.role) {
        alert("Vui lòng điền đủ các trường (*)"); return;
      }

      const newUser = {
        id: this.danh_sach_nguoi_dung.length + 1,
        name: this.form_nguoi_dung.name,
        email: this.form_nguoi_dung.email,
        phone: this.form_nguoi_dung.phone,
        role: this.form_nguoi_dung.role,
        status: this.form_nguoi_dung.isActive ? 'Đang hoạt động' : 'Tạm khóa',
        joinedAt: new Date().toLocaleDateString('vi-VN')
      };

      if(this.form_nguoi_dung.role === 'Giáo viên') {
        newUser.specialty = this.form_nguoi_dung.specialty;
        newUser.experience = this.form_nguoi_dung.experience ? `${this.form_nguoi_dung.experience} năm` : 'Chưa cập nhật';
      }

      if(this.form_nguoi_dung.role === 'Học viên') {
        newUser.learningData = { totalLessons: 0, completedExercises: 0, averageScore: 0, progress: 0 };
      }

      this.danh_sach_nguoi_dung.unshift(newUser);
      
      this.datLaiForm();
      const modalEl = document.getElementById('createUserModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if(modal) modal.hide();
    },
    
    datLaiForm() {
      this.form_nguoi_dung = { role: '', name: '', phone: '', email: '', password: '', specialty: '', experience: '', isActive: true };
    },
    
    // --- Xử lý Khóa / Mở khóa ---
    chuanBiDaoTrangThai(user) {
      // Gán user hiện tại vào biến tạm để hiển thị trên Modal xác nhận
      this.nguoi_dung_can_doi_trang_thai = this.danh_sach_nguoi_dung.find(u => u.id === user.id);
    },

    thucHienDaoTrangThai() {
      if(!this.nguoi_dung_can_doi_trang_thai) return;

      const user = this.nguoi_dung_can_doi_trang_thai;
      user.status = user.status === 'Đang hoạt động' ? 'Tạm khóa' : 'Đang hoạt động';
      
      // Đóng modal xác nhận
      const confirmModalEl = document.getElementById('confirmStatusModal');
      const confirmModal = bootstrap.Modal.getInstance(confirmModalEl);
      if (confirmModal) confirmModal.hide();
    }
  }
}
</script>