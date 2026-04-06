<template>
    <div class="container-fluid" style="background-color: #f8f9fa; min-height: 100vh;">

        <div class="d-flex justify-content-between align-items-center mb-4 text-start">
            <div>
                <h4 class="fw-bold mb-1 text-dark">Cấu hình Hệ thống</h4>
                <p class="text-muted mb-0">Quản lý tham số toàn cục, kết nối AI và thông báo hệ thống EchoKids</p>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-3 col-md-4">
                <div class="card border-0 shadow-sm rounded-3">
                    <div class="card-body p-3">
                        <div class="nav flex-column nav-pills custom-pills" id="settings-tabs" role="tablist" aria-orientation="vertical">
                            
                            <button class="nav-link active text-start px-3 py-3 mb-2 fw-semibold rounded-3" id="general-tab" data-bs-toggle="pill" data-bs-target="#general-pane" type="button" role="tab">
                                <i class="fa-solid fa-sliders me-2 w-20px text-center"></i> Cấu hình chung
                            </button>
                            
                            <button class="nav-link text-start px-3 py-3 mb-2 fw-semibold rounded-3" id="ai-tab" data-bs-toggle="pill" data-bs-target="#ai-pane" type="button" role="tab">
                                <i class="fa-solid fa-microchip me-2 w-20px text-center"></i> Cấu hình AI & API
                            </button>
                            
                            <button class="nav-link text-start px-3 py-3 fw-semibold rounded-3" id="banner-tab" data-bs-toggle="pill" data-bs-target="#banner-pane" type="button" role="tab">
                                <i class="fa-solid fa-bullhorn me-2 w-20px text-center"></i> Banner & Thông báo
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 col-md-8">
                <div class="tab-content" id="settings-tabContent">

                    <div class="tab-pane fade show active text-start" id="general-pane" role="tabpanel">
                        <div class="card border-0 shadow-sm rounded-3 mb-4">
                            <div class="card-header bg-white border-bottom py-3">
                                <h6 class="fw-bold mb-0 text-primary"><i class="fa-solid fa-building me-2"></i>Thông tin cơ bản</h6>
                            </div>
                            <div class="card-body p-4">
                                <form @submit.prevent="saveGeneralSettings">
                                    <div class="row g-4">
                                        <div class="col-12 d-flex align-items-center gap-4 mb-2">
                                            <div class="bg-light border rounded-3 d-flex align-items-center justify-content-center p-2" style="width: 100px; height: 100px;">
                                                <img :src="general.logo_url" alt="Logo" class="img-fluid" v-if="general.logo_url">
                                                <i class="fa-solid fa-image text-muted fs-3" v-else></i>
                                            </div>
                                            <div>
                                                <h6 class="fw-bold mb-1">Logo Ứng dụng</h6>
                                                <p class="small text-muted mb-2">Khuyến nghị ảnh PNG nền trong suốt, kích thước 200x50px</p>
                                                <input type="file" class="form-control form-control-sm shadow-none" accept="image/png, image/jpeg">
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label fw-semibold small text-muted">Tên Hệ thống</label>
                                            <input type="text" class="form-control shadow-none" v-model="general.site_name">
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label fw-semibold small text-muted">Hotline CSKH</label>
                                            <input type="text" class="form-control shadow-none" v-model="general.hotline">
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label fw-semibold small text-muted">Email Hỗ trợ</label>
                                            <input type="email" class="form-control shadow-none" v-model="general.support_email">
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label fw-semibold small text-muted">Fanpage Facebook URL</label>
                                            <input type="url" class="form-control shadow-none" v-model="general.facebook_url">
                                        </div>
                                        <div class="col-12 text-end mt-4">
                                            <button type="submit" class="btn btn-primary px-4 shadow-sm">
                                                <i class="fa-solid fa-floppy-disk me-2"></i>Lưu cấu hình chung
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade text-start" id="ai-pane" role="tabpanel">
                        <div class="card border-0 shadow-sm rounded-3 mb-4">
                            <div class="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0 text-success"><i class="fa-solid fa-microphone-lines me-2"></i>Engine AI Nhận diện giọng nói</h6>
                                <div class="form-check form-switch m-0">
                                    <input class="form-check-input shadow-none" type="checkbox" v-model="api.speech_to_text.is_active" id="aiToggle" style="cursor: pointer;">
                                    <label class="form-check-label small fw-semibold" for="aiToggle" :class="api.speech_to_text.is_active ? 'text-success' : 'text-danger'">
                                        {{ api.speech_to_text.is_active ? 'ĐANG BẬT' : 'ĐÃ TẮT' }}
                                    </label>
                                </div>
                            </div>
                            <div class="card-body p-4" :class="{'opacity-50': !api.speech_to_text.is_active}">
                                <form @submit.prevent="saveApiSettings">
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <label class="form-label fw-semibold small text-muted">Google Cloud API Key (Speech-to-Text)</label>
                                            <div class="input-group">
                                                <span class="input-group-text bg-light"><i class="fa-solid fa-key"></i></span>
                                                <input :type="showApiKey ? 'text' : 'password'" class="form-control shadow-none font-monospace" v-model="api.speech_to_text.api_key" :disabled="!api.speech_to_text.is_active">
                                                <button class="btn btn-outline-secondary shadow-none" type="button" @click="showApiKey = !showApiKey">
                                                    <i class="fa-solid" :class="showApiKey ? 'fa-eye-slash' : 'fa-eye'"></i>
                                                </button>
                                            </div>
                                            <small class="text-muted mt-1 d-block">Key dùng để gửi file audio của trẻ lên Google phân tích.</small>
                                        </div>

                                        <div class="col-md-6">
                                            <label class="form-label fw-semibold small text-muted">Giới hạn Request / Tháng</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control shadow-none" v-model="api.speech_to_text.monthly_limit" :disabled="!api.speech_to_text.is_active">
                                                <span class="input-group-text bg-light">Lượt</span>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <label class="form-label fw-semibold small text-muted">Đã sử dụng tháng này</label>
                                            <div class="d-flex align-items-center mt-2">
                                                <div class="progress flex-grow-1 me-3" style="height: 10px;">
                                                    <div class="progress-bar" :class="usagePercentage > 80 ? 'bg-danger' : 'bg-success'" :style="{ width: usagePercentage + '%' }"></div>
                                                </div>
                                                <span class="fw-bold small">{{ api.speech_to_text.current_usage }} / {{ api.speech_to_text.monthly_limit }}</span>
                                            </div>
                                        </div>

                                        <div class="col-12 text-end mt-4">
                                            <button type="submit" class="btn btn-success px-4 shadow-sm" :disabled="!api.speech_to_text.is_active">
                                                <i class="fa-solid fa-cloud-arrow-up me-2"></i>Cập nhật API Key
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade text-start" id="banner-pane" role="tabpanel">
                        <div class="card border-0 shadow-sm rounded-3 mb-4 border-top border-warning border-3">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h6 class="fw-bold mb-0 text-warning text-darken"><i class="fa-solid fa-triangle-exclamation me-2"></i>Bật/Tắt Cảnh báo Hệ thống</h6>
                                    <div class="form-check form-switch m-0">
                                        <input class="form-check-input shadow-none" type="checkbox" v-model="alert.is_active" id="alertToggle" style="cursor: pointer;">
                                    </div>
                                </div>
                                <p class="small text-muted">Khi bật, dòng thông báo này sẽ chạy chữ đỏ trên đầu trang chủ của tất cả Học viên & Giáo viên.</p>
                                <textarea class="form-control shadow-none" v-model="alert.message" rows="2" placeholder="VD: Hệ thống sẽ bảo trì nâng cấp AI từ 22h - 24h tối nay..." :disabled="!alert.is_active"></textarea>
                                <div class="text-end mt-3">
                                    <button class="btn btn-warning btn-sm px-3 text-dark fw-semibold shadow-sm" @click="saveAlert" :disabled="!alert.is_active">Phát thông báo</button>
                                </div>
                            </div>
                        </div>

                        <div class="card border-0 shadow-sm rounded-3">
                            <div class="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0 text-info text-darken"><i class="fa-solid fa-images me-2"></i>Slide Banner Trang chủ</h6>
                                <button class="btn btn-outline-primary btn-sm rounded-3 px-3 shadow-none">
                                    <i class="fa-solid fa-upload me-1"></i> Tải ảnh lên
                                </button>
                            </div>
                            <div class="card-body p-0">
                                <table class="table table-hover align-middle mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="ps-4">Hình ảnh</th>
                                            <th>Đường dẫn (URL)</th>
                                            <th class="text-center">Trạng thái</th>
                                            <th class="pe-4 text-end">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="banner in banners" :key="banner.id">
                                            <td class="ps-4 py-3">
                                                <img :src="banner.image" class="rounded-2 border" style="width: 120px; height: 60px; object-fit: cover;">
                                            </td>
                                            <td><small class="text-primary">{{ banner.link || 'Không có link' }}</small></td>
                                            <td class="text-center">
                                                <div class="form-check form-switch d-inline-block m-0">
                                                    <input class="form-check-input shadow-none" type="checkbox" v-model="banner.is_active" style="cursor: pointer;">
                                                </div>
                                            </td>
                                            <td class="pe-4 text-end">
                                                <button class="btn btn-sm btn-light border text-danger" title="Xóa banner">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
            // Data cấu hình chung
            general: {
                logo_url: 'https://via.placeholder.com/200x50?text=EchoKids+Logo',
                site_name: 'Hệ thống Trị liệu Ngôn ngữ EchoKids',
                hotline: '1900 1234',
                support_email: 'hotro@echokids.vn',
                facebook_url: 'https://facebook.com/echokids'
            },

            // Data Cấu hình AI
            showApiKey: false,
            api: {
                speech_to_text: {
                    is_active: true,
                    api_key: 'AIzaSyA_XXXXXXXXXXXXXXXXXXXXX_V8',
                    monthly_limit: 50000,
                    current_usage: 42150 // Mock data
                }
            },

            // Data Thông báo & Banner
            alert: {
                is_active: false,
                message: 'Hệ thống đang tiến hành nâng cấp AI. Việc chấm điểm phát âm có thể chậm hơn bình thường 1-2 giây.'
            },
            banners: [
                { id: 1, image: 'https://via.placeholder.com/800x400?text=Banner+Khuyen+Mai+1', link: '/dang-ky-goi', is_active: true },
                { id: 2, image: 'https://via.placeholder.com/800x400?text=Banner+Huong+Dan+Phu+Huynh', link: '/blog/huong-dan', is_active: true }
            ]
        }
    },
    computed: {
        // Tính toán % sử dụng API để đổi màu thanh tiến trình
        usagePercentage() {
            if (this.api.speech_to_text.monthly_limit === 0) return 0;
            return Math.round((this.api.speech_to_text.current_usage / this.api.speech_to_text.monthly_limit) * 100);
        }
    },
    methods: {
        saveGeneralSettings() {
            alert("Đã lưu Cấu hình chung!");
            // Axios gọi API PUT /admin/settings/general
        },
        saveApiSettings() {
            alert("Đã cập nhật cấu hình API/AI thành công!");
            // Axios gọi API PUT /admin/settings/api
        },
        saveAlert() {
            alert("Đã phát thông báo lên toàn hệ thống!");
        }
    }
}
</script>

<style scoped>
/* Style cho Menu dọc cột trái */
.custom-pills .nav-link {
    color: #495057;
    background-color: transparent;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
}

.custom-pills .nav-link:hover:not(.active) {
    background-color: #f8f9fa;
    border-color: #dee2e6;
}

/* Khi Menu dọc được chọn */
.custom-pills .nav-link.active {
    color: #0d6efd !important; /* Màu xanh Primary */
    background-color: #e7f1ff !important; /* Nền xanh nhạt */
    border-color: #cce5ff !important;
}

.w-20px {
    width: 20px;
}

.text-darken {
    filter: brightness(0.8);
}
</style>