<template>
    <div class="container-fluid py-4" style="background-color: #f8f9fa; min-height: 100vh;">

        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h4 class="fw-bold mb-1" style="color: #2b3445;">Danh Sách Từ Vựng Luyện Âm</h4>
                <p class="text-muted mb-0" style="font-size: 0.95rem;">
                    Đang quản lý nội dung của bài học ID: <span class="badge bg-primary rounded-pill">{{ bai_hoc_id }}</span>
                </p>
            </div>
            <div>
                <button class="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#tuVungModal" @click="themTuVung">
                    <i class="fa-solid fa-plus me-1"></i> Thêm từ mới
                </button>
                <button class="btn btn-sm btn-outline-secondary ms-2 shadow-sm" @click="quayLai">
                    <i class="fa-solid fa-arrow-left me-2"></i>Quay lại danh sách bài học
                </button>
            </div>
        </div>

        <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0 table-bordered">
                        <thead class="bg-light">
                            <tr>
                                <th class="ps-4 py-3 text-muted fw-semibold border-bottom-0 text-center" style="width: 5%;">TT</th>
                                <th class="py-3 text-muted fw-semibold border-bottom-0 text-center" style="width: 10%;">Hình ảnh</th>
                                <th class="py-3 text-muted fw-semibold border-bottom-0 text-center" style="width: 25%;">Từ chuẩn</th>
                                <th class="py-3 text-muted fw-semibold border-bottom-0 text-center" style="width: 20%;">Phiên âm</th>
                                <th class="py-3 text-muted fw-semibold border-bottom-0 text-center" style="width: 15%;">Cấp độ</th>
                                <th class="pe-4 py-3 text-muted fw-semibold text-end border-bottom-0 text-center" style="width: 15%;">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="danh_sach_tu_vung.length === 0">
                                <td colspan="6" class="text-center py-5">
                                    <i class="fa-solid fa-images text-muted mb-3" style="font-size: 3rem; opacity: 0.4;"></i>
                                    <h6 class="text-muted">Chưa có từ vựng nào trong bài học này cho bé.</h6>
                                </td>
                            </tr>

                            <tr v-for="tu in danh_sach_tu_vung" :key="tu.id">
                                <td class="ps-4 text-muted fw-medium">{{ tu.thu_tu }}</td>

                                <td>
                                    <div class="rounded-3 bg-white border d-flex align-items-center justify-content-center shadow-sm overflow-hidden" 
                                         style="width: 45px; height: 45px;">
                                        <img v-if="tu.hinh_anh_url" :src="tu.hinh_anh_url" alt="img" style="width: 100%; height: 100%; object-fit: cover;">
                                        <i v-else class="fa-regular fa-image text-muted"></i>
                                    </div>
                                </td>

                                <td>
                                    <div class="d-flex align-items-center">
                                        <button class="btn btn-sm btn-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                            style="width: 32px; height: 32px;" :title="tu.am_thanh_mau_url ? 'Nghe âm thanh mẫu' : 'Chưa có âm thanh'">
                                            <i class="fa-solid fa-volume-high"></i>
                                        </button>
                                        <span class="fw-bold fs-6" style="color: #333;">{{ tu.tu_chuan }}</span>
                                    </div>
                                </td>

                                <td>
                                    <span class="text-muted d-inline-block text-truncate" style="max-width: 200px;" :title="tu.phien_am">
                                        {{ tu.phien_am || '—' }}
                                    </span>
                                </td>
                                
                                <td class="text-center">
                                    <span class="badge" 
                                          :class="{
                                              'bg-success bg-opacity-10  border border-success': tu.cap_do === 'de',
                                              'bg-warning bg-opacity-10  border border-warning': tu.cap_do === 'trung_binh',
                                              'bg-danger bg-opacity-10  border border-danger': tu.cap_do === 'kho'
                                          }">
                                        {{ formatCapDo(tu.cap_do) }}
                                    </span>
                                </td>

                                <td class="pe-4 text-center">
                                    <div class="btn-group shadow-sm">
                                        <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tuVungModal" @click="suaTuVung(tu)" title="Chỉnh sửa">
                                            <i class="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#xoaTuVungModal" @click="xoaTuVung(tu)" title="Xóa">
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="tuVungModal" tabindex="-1" aria-labelledby="tuVungModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content border-0 shadow">
                    <div class="modal-header bg-light border-bottom-0">
                        <h5 class="modal-title fw-bold" id="tuVungModalLabel">
                            <i class="fa-solid" :class="isEdit ? 'fa-pen-to-square text-primary' : 'fa-plus text-success'"></i>
                            {{ isEdit ? 'Cập Nhật Từ Vựng' : 'Thêm Từ Vựng Mới' }}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="row g-3">
                            <div class="col-md-8">
                                <label class="form-label fw-medium">Từ chuẩn <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="tuVungForm.tu_chuan" placeholder="VD: Con Lợn, Mặt Trời..." required>
                            </div>
                            
                            <div class="col-md-4">
                                <label class="form-label fw-medium">Thứ tự hiển thị</label>
                                <input type="number" class="form-control" v-model="tuVungForm.thu_tu" placeholder="VD: 1, 2, 3...">
                            </div>

                            <div class="col-md-6">
                                <label class="form-label fw-medium">Phiên âm / Hướng dẫn</label>
                                <input type="text" class="form-control" v-model="tuVungForm.phien_am" placeholder="VD: Âm L uốn cong lưỡi...">
                            </div>

                            <div class="col-md-6">
                                <label class="form-label fw-medium">Cấp độ</label>
                                <select class="form-select" v-model="tuVungForm.cap_do">
                                    <option value="de">Dễ</option>
                                    <option value="trung_binh">Trung bình</option>
                                    <option value="kho">Khó</option>
                                </select>
                            </div>

                            <div class="col-md-12">
                                <label class="form-label fw-medium">Link Hình ảnh minh họa (URL)</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light"><i class="fa-regular fa-image text-muted"></i></span>
                                    <input type="text" class="form-control" v-model="tuVungForm.hinh_anh_url" placeholder="Nhập đường dẫn hình ảnh (vd: https://...)">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <label class="form-label fw-medium">Link Âm thanh mẫu (URL)</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light"><i class="fa-solid fa-microphone-lines text-muted"></i></span>
                                    <input type="text" class="form-control" v-model="tuVungForm.am_thanh_mau_url" placeholder="Nhập đường dẫn file MP3/WAV...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 bg-light">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy bỏ</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="luuTuVung">
                            <i class="fa-regular fa-floppy-disk me-1"></i> Lưu thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="xoaTuVungModal" tabindex="-1" aria-labelledby="xoaTuVungModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content border-0 shadow">
                    <div class="modal-body text-center p-4">
                        <div class="text-danger mb-3">
                            <i class="fa-regular fa-circle-xmark" style="font-size: 4rem;"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Xác nhận xóa?</h5>
                        <p class="text-muted mb-4">
                            Bạn có chắc chắn muốn xóa từ 
                            <strong class="text-danger">{{ tuVungXoa?.tu_chuan }}</strong> 
                            khỏi bài học này không?
                        </p>
                        <div class="d-flex justify-content-center gap-2">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Hủy bỏ</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="xacNhanXoa">
                                Vâng, Xóa từ này
                            </button>
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
            bai_hoc_id: null,
            danh_sach_tu_vung: [],
            
            // --- STATE CHO MODAL ---
            isEdit: false,
            // Khớp 100% database bảng tu_vung
            tuVungForm: {  
                id: null,
                bai_hoc_id: null,
                tu_chuan: "",
                phien_am: "",
                cap_do: "de", // de, trung_binh, kho
                hinh_anh_url: "",
                am_thanh_mau_url: "",
                thu_tu: 1
            },
            tuVungXoa: null
        };
    },
    created() {
        this.bai_hoc_id = this.$route.params.id;
        this.layDuLieuTuVung();
    },
    methods: {
        // Format hiển thị cho cấp độ
        formatCapDo(capDo) {
            const map = {
                'de': 'Dễ',
                'trung_binh': 'Trung bình',
                'kho': 'Khó'
            };
            return map[capDo] || 'Không xác định';
        },

        layDuLieuTuVung() {
            // Dữ liệu mẫu (mock data) chuẩn theo db mới
            const duLieuMau = [
                { 
                    id: 1, bai_hoc_id: this.bai_hoc_id, 
                    tu_chuan: "Con Lợn", phien_am: "Âm L uốn lưỡi", 
                    cap_do: "de", hinh_anh_url: "https://cdn-icons-png.flaticon.com/512/2395/2395796.png", 
                    am_thanh_mau_url: "link_audio_lon.mp3", thu_tu: 1 
                },
                { 
                    id: 2, bai_hoc_id: this.bai_hoc_id, 
                    tu_chuan: "Mặt Trời", phien_am: "Âm Tr bật hơi", 
                    cap_do: "trung_binh", hinh_anh_url: "https://cdn-icons-png.flaticon.com/512/3222/3222672.png", 
                    am_thanh_mau_url: "link_audio_mtroi.mp3", thu_tu: 2 
                },
                { 
                    id: 3, bai_hoc_id: this.bai_hoc_id, 
                    tu_chuan: "Chim Sẻ", phien_am: "Âm S uốn cong", 
                    cap_do: "kho", hinh_anh_url: "", // Thử test trường hợp không có ảnh
                    am_thanh_mau_url: "", thu_tu: 3 
                }
            ];
            
            // Sắp xếp theo thu_tu tăng dần
            this.danh_sach_tu_vung = duLieuMau.sort((a, b) => a.thu_tu - b.thu_tu);
        },

        quayLai() {
            this.$router.push('/teacher/quan-ly-bai-hoc');
        },

        // --- HÀM XỬ LÝ MODAL ---
        themTuVung() {
            this.isEdit = false;
            // Tự động tính thứ tự tiếp theo
            const nextThuTu = this.danh_sach_tu_vung.length > 0 
                ? Math.max(...this.danh_sach_tu_vung.map(t => t.thu_tu || 0)) + 1 
                : 1;

            this.tuVungForm = {
                id: null,
                bai_hoc_id: this.bai_hoc_id,
                tu_chuan: "",
                phien_am: "",
                cap_do: "de",
                hinh_anh_url: "",
                am_thanh_mau_url: "",
                thu_tu: nextThuTu
            };
        },

        suaTuVung(tu) {
            this.isEdit = true;
            this.tuVungForm = { ...tu }; 
        },

        luuTuVung() {
            if (this.isEdit) {
                const index = this.danh_sach_tu_vung.findIndex(item => item.id === this.tuVungForm.id);
                if (index !== -1) {
                    this.danh_sach_tu_vung.splice(index, 1, this.tuVungForm);
                }
            } else {
                this.tuVungForm.id = Date.now(); 
                this.danh_sach_tu_vung.push({ ...this.tuVungForm });
            }
            // Sort lại nếu có thay đổi thứ tự
            this.danh_sach_tu_vung.sort((a, b) => (a.thu_tu || 0) - (b.thu_tu || 0));
        },

        xoaTuVung(tu) {
            this.tuVungXoa = tu;
        },

        xacNhanXoa() {
            if (this.tuVungXoa) {
                this.danh_sach_tu_vung = this.danh_sach_tu_vung.filter(item => item.id !== this.tuVungXoa.id);
                this.tuVungXoa = null;
            }
        }
    }
};
</script>

<style scoped>
.table th,
.table td {
    vertical-align: middle;
}

.table-hover tbody tr:hover {
    background-color: #f8fbff;
}
</style>