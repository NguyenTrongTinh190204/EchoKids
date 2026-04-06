<template>
    <div class="container-fluid" style="background-color: #f8f9fa; min-height: 100vh;">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="text-start">
                <h4 class="fw-bold mb-1" style="color: #2b3445;">Phân Quyền</h4>
                <p class="text-muted mb-0" style="font-size: 0.9rem;">
                    Thêm/bớt vai trò tùy ý và quản lý quyền truy cập chéo
                </p>
            </div>

            <div class="d-flex gap-2">
                <button class="btn btn-success rounded-3 px-4 shadow-sm" data-bs-toggle="modal"
                    data-bs-target="#addRoleModal">
                    <i class="fa-solid fa-plus me-1"></i> Thêm vai trò mới
                </button>
            </div>
        </div>

        <div class="card border-0 shadow-sm rounded-3 mb-4" style="background: #fff;">
            <div class="card-body ">
                <div class="row g-3 align-items-end">
                    <div class="col-md-8 text-start">
                        <label class="form-label mb-1">Tìm kiếm chức năng</label>
                        <div class="input-group"
                            style="border: 1px solid #ced4da; border-radius: 0.375rem; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;height: 36px;">
                            <span class="input-group-text bg-white border-end-0 d-flex align-items-center"
                                style="border: none; height: 36px;">
                                <i class="fa-solid fa-magnifying-glass text-muted"></i>
                            </span>
                            <input type="text" class="form-control border-start-0 shadow-none ps-0"
                                placeholder="Nhập tên chức năng hoặc mô tả..." v-model="tu_khoa"
                                style="border: none; height: 36px;">
                        </div>
                    </div>

                    <div class="col-md-4 text-start">
                        <label class="form-label mb-1">Tập trung vào Vai trò</label>
                        <select class="form-select shadow-none" v-model="id_vai_tro_chon" style="cursor: pointer;">
                            <option value="">Hiển thị tất cả vai trò</option>
                            <option v-for="vt in danh_sach_vai_tro" :key="vt.id" :value="vt.id">
                                {{ vt.ten }}
                            </option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
        <div class="card border-0 shadow-sm rounded-3 overflow-hidden" style="background: #fff;">
            <div class="table-responsive">
                <table class="table table-hover align-middle mb-0 table-bordered"
                    style="border-collapse: collapse; border: 1px solid #dee2e6;">
                    <thead class="table-light text-muted">
                        <tr>
                            <th class="align-middle border-bottom-0 text-uppercase" style="border: 1px solid #dee2e6;">
                                <h5><b>Chức năng hệ thống</b></h5>
                            </th>

                            <th v-for="vt in danh_sach_vai_tro" :key="vt.id" v-show="hienThiCot(vt.id)"
                                class="text-center align-middle py-2 border-bottom-0"
                                style="min-width: 130px; border: 1px solid #dee2e6;">
                                <div class="text-center">
                                    <i class="fa-solid mb-2 fs-5 me-1"
                                        :class="[vt.bieu_tuong || 'fa-user-tag', vt.mau_sac || 'text-secondary']"></i>
                                    <span class="text-uppercase text-center"
                                        style="font-size: 0.8rem; letter-spacing: 0.5px;">{{ vt.ten }}</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="q in danh_sach_quyen_da_loc" :key="q.id">
                            <td class="text-start" style="border: 1px solid #dee2e6; vertical-align: middle;">
                                <div class="fw-bold text-dark" style="font-size: 0.95rem;">{{ q.ten }}</div>
                                <small class="text-muted">{{ q.mo_ta }}</small>
                            </td>

                            <td v-for="vt in danh_sach_vai_tro" :key="vt.id" v-show="hienThiCot(vt.id)"
                                class="text-center" style="border: 1px solid #dee2e6; vertical-align: middle;">

                                <div class="d-flex align-items-center justify-content-center" style="height: 100%;">
                                    <input type="checkbox" class="form-check-input"
                                        style="width: 1.25rem; height: 1.25rem; cursor: pointer;"
                                        v-model="q.truy_cap_vai_tro[vt.id]">
                                </div>
                            </td>
                        </tr>

                        <tr v-if="danh_sach_quyen_da_loc.length === 0">
                            <td :colspan="tong_so_cot" class="text-center py-5" style="border: 1px solid #dee2e6;">
                                <div class="mb-3" style="font-size: 3rem; color: #dee2e6;"><i
                                        class="fa-solid fa-shield-cat"></i></div>
                                <div class="fw-bold text-dark mb-1">Không tìm thấy chức năng phù hợp</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="d-flex justify-content-end gap-2 mt-4">
            <button class="btn btn-success rounded-3 px-4 shadow-sm" @click="luuPhanQuyen">
                <i class="fa-solid fa-floppy-disk me-1"></i> Lưu toàn bộ thay đổi
            </button>
        </div>

        <!-- Modal Thêm vai trò -->
        <div class="modal fade" id="addRoleModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0 shadow">
                    <div class="modal-header border-bottom-0 pb-0">
                        <h5 class="modal-title fw-bold text-dark">Thêm vai trò</h5>
                        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                            @click="ten_vai_tro_moi = ''"></button>
                    </div>
                    <div class="modal-body text-start">
                        <div class="mb-3">
                            <label class="form-label small fw-semibold text-muted">Tên vai trò mới <span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control shadow-none"
                                placeholder="VD: Kế toán, Trợ giảng, Quản lý..." v-model="ten_vai_tro_moi"
                                @keyup.enter="themVaiTroMoi">
                        </div>
                        <div class="alert alert-info small border-0 bg-info-subtle mb-0">
                            <i class="fa-solid fa-circle-info me-1"></i> Hệ thống sẽ tự động tạo thêm một cột mới trong
                            Ma trận phân quyền.
                        </div>
                    </div>
                    <div class="modal-footer border-top-0">
                        <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal"
                            @click="ten_vai_tro_moi = ''">Hủy</button>
                        <button type="button" class="btn btn-success px-4" data-bs-dismiss="modal"
                            @click="themVaiTroMoi">
                            <i class="fa-solid fa-plus me-1"></i> Tạo vai trò
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
            id_vai_tro_chon: "",
            tu_khoa: "",
            ten_vai_tro_moi: "",

            danh_sach_vai_tro: [
                { id: 1, ten: "Admin", bieu_tuong: "fa-shield-halved", mau_sac: "text-danger" },
                { id: 2, ten: "Giáo viên", bieu_tuong: "fa-chalkboard-user", mau_sac: "text-primary" },
                { id: 3, ten: "Phụ huynh", bieu_tuong: "fa-users", mau_sac: "text-success" },
                { id: 4, ten: "Học viên", bieu_tuong: "fa-child-reaching", mau_sac: "text-warning" }
            ],

            danh_sach_quyen: [
                {
                    id: 1, ten: "Quản lý người dùng", mo_ta: "Xem, thêm, sửa, khóa tài khoản",
                    truy_cap_vai_tro: { 1: true, 2: false, 3: false, 4: false }
                },
                {
                    id: 2, ten: "Quản lý bài học", mo_ta: "Tạo, chỉnh sửa và duyệt nội dung",
                    truy_cap_vai_tro: { 1: true, 2: true, 3: false, 4: false }
                },
                {
                    id: 3, ten: "Tham gia luyện tập", mo_ta: "Mở bài học và thu âm",
                    truy_cap_vai_tro: { 1: false, 2: false, 3: false, 4: true }
                },
                {
                    id: 4, ten: "Xem báo cáo AI", mo_ta: "Xem phân tích lỗi chi tiết",
                    truy_cap_vai_tro: { 1: true, 2: true, 3: true, 4: false }
                }
            ]
        };
    },

    computed: {
        danh_sach_quyen_da_loc() {
            if (!this.tu_khoa) return this.danh_sach_quyen;
            const tk = this.tu_khoa.toLowerCase();
            return this.danh_sach_quyen.filter(q =>
                q.ten.toLowerCase().includes(tk) || q.mo_ta.toLowerCase().includes(tk)
            );
        },

        tong_so_cot() {
            let vt_hien_thi = this.id_vai_tro_chon ? 1 : this.danh_sach_vai_tro.length;
            return 1 + vt_hien_thi;
        }
    },

    methods: {
        hienThiCot(idVaiTro) {
            if (!this.id_vai_tro_chon) return true;
            return this.id_vai_tro_chon === idVaiTro;
        },

        themVaiTroMoi() {
            if (!this.ten_vai_tro_moi.trim()) {
                alert("Vui lòng nhập tên vai trò!");
                return;
            }

            const idVaiTroMoi = Math.max(...this.danh_sach_vai_tro.map(vt => vt.id)) + 1;

            this.danh_sach_vai_tro.push({
                id: idVaiTroMoi,
                ten: this.ten_vai_tro_moi.trim(),
                bieu_tuong: "fa-user-tag",
                mau_sac: "text-secondary"
            });

            this.danh_sach_quyen.forEach(quyen => {
                quyen.truy_cap_vai_tro[idVaiTroMoi] = false;
            });

            alert(`Đã thêm cột "${this.ten_vai_tro_moi}" vào ma trận thành công!`);
            this.ten_vai_tro_moi = "";
        },

        luuPhanQuyen() {
            console.log("Dữ liệu gửi lên Backend:", {
                danh_sach_vai_tro: this.danh_sach_vai_tro,
                ma_tran_quyen: this.danh_sach_quyen
            });
        },
    }
};
</script>