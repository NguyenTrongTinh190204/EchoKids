<template>
  <div class="container-fluid " style="background-color: #f8f9fa; min-height: 100vh;">
    
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4  class="fw-bold mb-1 text-primary" style="color: #2b3445;"> <i class="fa-solid fa-chalkboard-user"></i> Quản Lý Bài Học</h4>
        <p class="text-muted mb-0" style="font-size: 0.9rem;">
          Tổ chức danh mục và nội dung luyện phát âm
        </p>
      </div>
    </div>

    <div class="row g-4">
      
      <div class="col-lg-4 col-md-5">
        <div class="card border-0 shadow-sm rounded-3 h-100" style="background: #fff;">
          <div class="card-header bg-white border-bottom-0 pt-4 pb-2 d-flex justify-content-between align-items-center">
            <h6 class="fw-bold mb-0">
              <i class="fa-solid fa-folder-tree text-primary me-2"></i> Danh mục
            </h6>
            <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#danhMucModal" @click="themDanhMuc" title="Thêm danh mục mới">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div class="card-body p-3">
            <div class="list-group list-group-flush gap-2">
              <button
                v-for="dm in danh_muc" 
                :key="dm.id"
                class="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center p-3 transition-all"
                :class="{ 
                  'bg-primary text-white shadow-sm': danh_muc_dang_chon === dm.id, 
                  'bg-light text-dark': danh_muc_dang_chon !== dm.id 
                }"
                @click="chonDanhMuc(dm.id)"
              >
                <div>
                  <i :class="dm.icon + ' me-3 fs-5'" :style="danh_muc_dang_chon === dm.id ? 'color: #fff;' : 'color: #6c757d;'"></i>
                  <span class="fw-medium">{{ dm.ten }}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span class="badge rounded-pill" :class="danh_muc_dang_chon === dm.id ? 'bg-white text-primary' : 'bg-secondary'">
                    {{ demSoBaiHoc(dm.id) }}
                  </span>
                  <div class="dropdown" @click.stop v-if="danh_muc_dang_chon === dm.id">
                    <button class="btn btn-sm p-0 text-white" type="button" data-bs-toggle="dropdown">
                      <i class="fa-solid fa-ellipsis-vertical px-1"></i>
                    </button>
                    <ul class="dropdown-menu shadow-sm border-0">
                      <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#danhMucModal" @click.prevent="suaDanhMuc(dm)"><i class="fa-solid fa-pen text-primary me-2"></i>Sửa danh mục</a></li>
                      <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#xoaModal" @click.prevent="xoaDoiTuong(dm, 'danh_muc')"><i class="fa-solid fa-trash me-2"></i>Xóa danh mục</a></li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-8 col-md-7">
        <div class="card border-0 shadow-sm rounded-3 h-100" style="background: #fff;">
          <div class="card-header bg-white border-bottom-0 pt-4 pb-2 d-flex justify-content-between align-items-center">
            <h6 class="fw-bold mb-0">
              <i class="fa-solid fa-book-open text-success me-2"></i> 
              Bài học 
              <span v-if="tenDanhMucDangChon" class="text-muted fw-normal" style="font-size: 0.9rem;">
                - {{ tenDanhMucDangChon }}
              </span>
            </h6>
            <button class="btn btn-primary btn-sm shadow-sm" data-bs-toggle="modal" data-bs-target="#baiHocModal" @click="themBaiHoc">
              <i class="fa-solid fa-plus me-1"></i> Bài học mới
            </button>
          </div>
          
          <div class="card-body p-4">
            <div v-if="bai_hoc_hien_thi.length === 0" class="text-center py-5">
              <i class="fa-regular fa-folder-open text-muted mb-3" style="font-size: 3rem; opacity: 0.5;"></i>
              <h6 class="text-muted">Chưa có bài học nào trong danh mục này.</h6>
              <button class="btn btn-sm btn-outline-primary mt-2" data-bs-toggle="modal" data-bs-target="#baiHocModal" @click="themBaiHoc">Tạo bài học đầu tiên</button>
            </div>

            <div class="row g-3" v-else>
              <div class="col-xl-6" v-for="bai in bai_hoc_hien_thi" :key="bai.id">
                
                <div class="card h-100 border rounded-3 hover-card" style="cursor: pointer;" @click="quanLyTuVung(bai)">
                  <div class="card-body p-3">
                    <div class="d-flex align-items-start">
                      
                      <div class="p-2 rounded-3 me-3 d-flex align-items-center justify-content-center flex-shrink-0" 
                           :style="`background-color: ${bai.mau_nen}; width: 55px; height: 55px;`">
                        <i :class="bai.icon + ' fs-4'" :style="`color: ${bai.mau_icon};`"></i>
                      </div>

                      <div class="flex-grow-1 min-w-0">
                        <div class="d-flex justify-content-between align-items-start mb-1">
                          <h6 class="fw-bold text-truncate mb-0 pe-2" style="color: #333;" :title="bai.tieu_de">{{ bai.tieu_de }}</h6>
                          
                          <div class="dropdown">
                            <button class="btn btn-link text-muted p-0" type="button" data-bs-toggle="dropdown" @click.stop>
                              <i class="fa-solid fa-ellipsis-vertical px-2"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                              <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#baiHocModal" @click.stop.prevent="suaBaiHoc(bai)"><i class="fa-regular fa-pen-to-square me-2 text-primary"></i>Sửa bài học</a></li>
                              <li><a class="dropdown-item" href="#" @click.stop.prevent="quanLyTuVung(bai)"><i class="fa-solid fa-list-ul me-2 text-success"></i>Quản lý từ vựng</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#xoaModal" @click.stop.prevent="xoaDoiTuong(bai, 'bai_hoc')"><i class="fa-regular fa-trash-can me-2"></i>Xóa bài học</a></li>
                            </ul>
                          </div>
                        </div>

                        <p class="text-muted small mb-2 text-truncate" :title="bai.mo_ta">{{ bai.mo_ta }}</p>
                        
                        <div class="d-flex justify-content-between align-items-center mt-3">
                          <span class="badge bg-light text-dark border fw-normal">
                            <i class="fa-solid fa-cubes me-1 text-muted"></i> Cấp độ: {{ formatCapDo(bai.cap_do) }}
                          </span>
                          <span class="badge" 
                                :class="bai.trang_thai === 'hoat_dong' ? 'bg-success text-white' : 'bg-secondary text-white'">
                            {{ bai.trang_thai === 'hoat_dong' ? 'Hoạt động' : 'Bản nháp' }}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="baiHocModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-bottom-0">
            <h5 class="modal-title fw-bold">
              <i class="fa-solid fa-book-open text-primary me-2"></i>
              {{ isEditBaiHoc ? 'Sửa Bài Học' : 'Thêm Bài Học Mới' }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            
            <div class="mb-3">
              <label class="form-label fw-medium">Thuộc danh mục <span class="text-danger">*</span></label>
              <select class="form-select" v-model="formBaiHoc.danh_muc_id">
                <option v-for="dm in danh_muc" :key="dm.id" :value="dm.id">
                  {{ dm.ten }}
                </option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label fw-medium">Tiêu đề bài học <span class="text-danger">*</span></label>
              <input type="text" class="form-control" v-model="formBaiHoc.tieu_de" placeholder="VD: Phân biệt Âm L và N" required>
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-medium">Mô tả nội dung</label>
              <textarea class="form-control" v-model="formBaiHoc.mo_ta" rows="2" placeholder="Ghi chú ngắn về bài học..."></textarea>
            </div>
            
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label fw-medium">Cấp độ</label>
                <select class="form-select" v-model="formBaiHoc.cap_do">
                  <option value="de">Dễ (Mầm non)</option>
                  <option value="trung_binh">Trung bình (Lớp 1-2)</option>
                  <option value="kho">Khó (Nâng cao)</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-medium">Trạng thái</label>
                <select class="form-select" v-model="formBaiHoc.trang_thai">
                  <option value="hoat_dong">Đang hoạt động</option>
                  <option value="nhap">Bản nháp (Ẩn)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light border-top-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy bỏ</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="luuBaiHoc">Lưu dữ liệu</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="danhMucModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-bottom-0">
            <h5 class="modal-title fw-bold">
              <i class="fa-solid fa-folder-tree text-primary me-2"></i>
              {{ isEditDanhMuc ? 'Sửa Danh Mục' : 'Thêm Danh Mục Mới' }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label fw-medium">Tên danh mục <span class="text-danger">*</span></label>
              <input type="text" class="form-control" v-model="formDanhMuc.ten" placeholder="VD: Luyện âm cơ bản" required>
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">Icon minh họa (Class FontAwesome)</label>
              <input type="text" class="form-control" v-model="formDanhMuc.icon" placeholder="VD: fa-solid fa-lips">
              <div class="mt-2 text-muted small">
                <i :class="formDanhMuc.icon || 'fa-solid fa-folder'"></i> Xem trước Icon
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light border-top-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy bỏ</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="luuDanhMuc">Lưu dữ liệu</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="xoaModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-body text-center p-4">
            <div class="text-danger mb-3">
              <i class="fa-regular fa-circle-xmark" style="font-size: 4rem;"></i>
            </div>
            <h5 class="fw-bold mb-3">Xác nhận xóa?</h5>
            <p class="text-muted mb-4">
              Bạn có chắc chắn muốn xóa 
              <strong class="text-danger">{{ doiTuongXoa?.ten || doiTuongXoa?.tieu_de }}</strong> 
              không? Dữ liệu này sẽ không thể khôi phục.
            </p>
            <div class="d-flex justify-content-center gap-2">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal">Hủy bỏ</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="xacNhanXoa">Vâng, Xóa ngay</button>
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
      danh_muc_dang_chon: 1, 
      
      danh_muc: [
        { id: 1, ten: "Luyện âm cơ bản", icon: "fa-solid fa-lips" },
        { id: 2, ten: "Chủ đề Động vật", icon: "fa-solid fa-paw" },
        { id: 3, ten: "Chủ đề Gia đình", icon: "fa-solid fa-house-chimney" },
        { id: 4, ten: "Giao tiếp hàng ngày", icon: "fa-solid fa-comments" }
      ],

      bai_hoc: [
        { id: 101, danh_muc_id: 1, tieu_de: "Phân biệt Âm L và N", mo_ta: "Bài tập uốn lưỡi cơ bản.", cap_do: "de", trang_thai: "hoat_dong", icon: "fa-solid fa-language", mau_nen: "#e7f0ff", mau_icon: "#0d6efd" },
        { id: 102, danh_muc_id: 1, tieu_de: "Luyện Âm S và X", mo_ta: "Sửa lỗi ngọng xát.", cap_do: "trung_binh", trang_thai: "hoat_dong", icon: "fa-solid fa-ear-listen", mau_nen: "#e6f8f0", mau_icon: "#198754" },
        { id: 103, danh_muc_id: 1, tieu_de: "Luyện Âm Tr và Ch", mo_ta: "Sửa lỗi bật hơi nhẹ.", cap_do: "kho", trang_thai: "hoat_dong", icon: "fa-solid fa-comment-dots", mau_nen: "#fff4e5", mau_icon: "#ffc107" },
        { id: 104, danh_muc_id: 1, tieu_de: "Kiểm tra Thanh điệu", mo_ta: "Bài kiểm tra thanh hỏi, ngã.", cap_do: "trung_binh", trang_thai: "nhap", icon: "fa-solid fa-clipboard-check", mau_nen: "#f8d7da", mau_icon: "#dc3545" },
        { id: 201, danh_muc_id: 2, tieu_de: "Vật nuôi trong nhà", mo_ta: "Chó, mèo, gà, lợn...", cap_do: "de", trang_thai: "hoat_dong", icon: "fa-solid fa-cat", mau_nen: "#e7f0ff", mau_icon: "#0d6efd" },
        
      ],

      // --- TRẠNG THÁI MODAL ---
      isEditBaiHoc: false,
      formBaiHoc: { id: null, danh_muc_id: null, tieu_de: "", mo_ta: "", cap_do: "de", trang_thai: "hoat_dong", icon: "fa-solid fa-book", mau_nen: "#e7f0ff", mau_icon: "#0d6efd" },
      
      isEditDanhMuc: false,
      formDanhMuc: { id: null, ten: "", icon: "fa-solid fa-folder" },

      doiTuongXoa: null, // Lưu bài học/danh mục đang cần xóa
      loaiXoa: "" // 'danh_muc' hoặc 'bai_hoc'
    };
  },
  computed: {
    bai_hoc_hien_thi() {
      return this.bai_hoc.filter(bai => bai.danh_muc_id === this.danh_muc_dang_chon);
    },
    tenDanhMucDangChon() {
      const dm = this.danh_muc.find(d => d.id === this.danh_muc_dang_chon);
      return dm ? dm.ten : "";
    }
  },
  methods: {
    chonDanhMuc(id) {
      this.danh_muc_dang_chon = id;
    },
    demSoBaiHoc(danhMucId) {
      return this.bai_hoc.filter(bai => bai.danh_muc_id === danhMucId).length;
    },
    formatCapDo(capDo) {
      const map = { 'de': 'Dễ', 'trung_binh': 'TB', 'kho': 'Khó' };
      return map[capDo] || 'Dễ';
    },

    // --- LOGIC DANH MỤC ---
    themDanhMuc() {
      this.isEditDanhMuc = false;
      this.formDanhMuc = { id: null, ten: "", icon: "fa-solid fa-folder" };
    },
    suaDanhMuc(dm) {
      this.isEditDanhMuc = true;
      this.formDanhMuc = { ...dm };
    },
    luuDanhMuc() {
      if (this.isEditDanhMuc) {
        const index = this.danh_muc.findIndex(d => d.id === this.formDanhMuc.id);
        if (index !== -1) this.danh_muc.splice(index, 1, this.formDanhMuc);
      } else {
        this.formDanhMuc.id = Date.now();
        this.danh_muc.push({ ...this.formDanhMuc });
        this.danh_muc_dang_chon = this.formDanhMuc.id; 
      }
    },

    // --- LOGIC BÀI HỌC ---
    themBaiHoc() {
      this.isEditBaiHoc = false;
      this.formBaiHoc = { 
        id: null, 
        danh_muc_id: this.danh_muc_dang_chon, // Mặc định tự động nhận danh mục đang xem
        tieu_de: "", 
        mo_ta: "", 
        cap_do: "de", 
        trang_thai: "hoat_dong", 
        icon: "fa-solid fa-book-open", 
        mau_nen: "#e7f0ff", 
        mau_icon: "#0d6efd" 
      };
    },
    suaBaiHoc(bai) {
      this.isEditBaiHoc = true;
      this.formBaiHoc = { ...bai };
    },
    luuBaiHoc() {
      if (this.isEditBaiHoc) {
        const index = this.bai_hoc.findIndex(b => b.id === this.formBaiHoc.id);
        if (index !== -1) this.bai_hoc.splice(index, 1, this.formBaiHoc);
      } else {
        this.formBaiHoc.id = Date.now();
        this.bai_hoc.push({ ...this.formBaiHoc });
      }
      // Nếu user chọn danh mục khác với danh mục đang xem, có thể tự động chuyển view qua danh mục đó (tuỳ chọn)
      if (this.formBaiHoc.danh_muc_id !== this.danh_muc_dang_chon) {
        this.danh_muc_dang_chon = this.formBaiHoc.danh_muc_id;
      }
    },

    // --- CHUYỂN TRANG ---
    quanLyTuVung(bai) {
      this.$router.push(`/teacher/tu-vung`);
    },

    // --- LOGIC XÓA (DÙNG CHUNG) ---
    xoaDoiTuong(doiTuong, loai) {
      this.doiTuongXoa = doiTuong;
      this.loaiXoa = loai;
    },
    xacNhanXoa() {
      if (this.loaiXoa === 'bai_hoc') {
        this.bai_hoc = this.bai_hoc.filter(b => b.id !== this.doiTuongXoa.id);
      } else if (this.loaiXoa === 'danh_muc') {
        this.danh_muc = this.danh_muc.filter(d => d.id !== this.doiTuongXoa.id);
        this.bai_hoc = this.bai_hoc.filter(b => b.danh_muc_id !== this.doiTuongXoa.id);
        if (this.danh_muc_dang_chon === this.doiTuongXoa.id && this.danh_muc.length > 0) {
          this.danh_muc_dang_chon = this.danh_muc[0].id;
        }
      }
      this.doiTuongXoa = null;
    }
  }
};
</script>

<style scoped>
.transition-all {
  transition: all 0.2s ease-in-out;
}
.hover-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1) !important;
}
.list-group {
  max-height: 600px;
  overflow-y: auto;
}
.list-group::-webkit-scrollbar {
  width: 5px;
}
.list-group::-webkit-scrollbar-thumb {
  background-color: #dee2e6;
  border-radius: 10px;
}
</style>