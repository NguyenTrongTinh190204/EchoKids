<template>
  <div class="container-fluid" style="background-color: #f8f9fa; min-height: 100vh;">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1" style="color: #2b3445;">Báo cáo & Thống kê chi tiết</h4>
        <p class="text-muted mb-0" style="font-size: 0.9rem;">
          Phân tích sâu dữ liệu học tập, hiệu suất giáo viên và xuất báo cáo
        </p>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary rounded-3 px-3 shadow-sm bg-white" @click="quayLai">
          <i class="fa-solid fa-arrow-left me-1"></i> Quay lại
        </button>
        <button class="btn btn-success rounded-3 px-4 shadow-sm" @click="xuatFileExcel">
          <i class="fa-solid fa-file-excel me-1"></i> Xuất Excel
        </button>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mb-4" style="background: #fff;">
      <div class="card-body p-3">
        <h6 class="fw-bold mb-3 text-dark"><i class="fa-solid fa-filter me-2 text-primary"></i>Bộ lọc dữ liệu</h6>
        <div class="row g-3 align-items-end">
          
          <div class="col-12 col-md-3">
            <label class="form-label small text-muted fw-semibold mb-1">Từ ngày</label>
            <input type="date" class="form-control shadow-none" v-model="bo_loc.startDate">
          </div>
          
          <div class="col-12 col-md-3">
            <label class="form-label small text-muted fw-semibold mb-1">Đến ngày</label>
            <input type="date" class="form-control shadow-none" v-model="bo_loc.endDate">
          </div>
          
          <div class="col-12 col-md-3">
            <label class="form-label small text-muted fw-semibold mb-1">Giáo viên phụ trách</label>
            <select class="form-select shadow-none" v-model="bo_loc.teacherId" style="cursor: pointer;">
              <option value="">-- Tất cả giáo viên --</option>
              <option v-for="teacher in tuy_chon_bo_loc.danh_sach_giao_vien" :key="teacher.id" :value="teacher.id">
                {{ teacher.name }}
              </option>
            </select>
          </div>
          
          <div class="col-12 col-md-3 d-flex gap-2">
            <button class="btn btn-primary flex-grow-1 shadow-sm" @click="apDungBoLoc">
              <i class="fa-solid fa-magnifying-glass me-1"></i> Phân tích
            </button>
            <button class="btn btn-light border" title="Đặt lại" @click="datLaiBoLoc">
              <i class="fa-solid fa-rotate-right"></i>
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100" style="background: #fff; border-left: 4px solid #0d6efd !important;">
          <div class="card-body p-3">
            <small class="text-muted fw-semibold">Tổng số bài luyện tập</small>
            <h3 class="fw-bold text-dark mt-1 mb-0">{{ tong_quan_bao_cao.totalPractices }} <small class="text-muted fs-6">lượt</small></h3>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100" style="background: #fff; border-left: 4px solid #198754 !important;">
          <div class="card-body p-3">
            <small class="text-muted fw-semibold">Độ chính xác AI (Trung bình)</small>
            <h3 class="fw-bold text-success mt-1 mb-0">{{ tong_quan_bao_cao.avgAiAccuracy }}%</h3>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100" style="background: #fff; border-left: 4px solid #ffc107 !important;">
          <div class="card-body p-3">
            <small class="text-muted fw-semibold">Lỗi phát âm phát hiện</small>
            <h3 class="fw-bold text-warning mt-1 mb-0">{{ tong_quan_bao_cao.totalErrorsDetected }} <small class="text-muted fs-6">lỗi</small></h3>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100" style="background: #fff; border-left: 4px solid #6f42c1 !important;">
          <div class="card-body p-3">
            <small class="text-muted fw-semibold">Giáo viên gửi gợi ý</small>
            <h3 class="fw-bold text-purple mt-1 mb-0" style="color: #6f42c1;">{{ tong_quan_bao_cao.totalTeacherSuggestions }} <small class="text-muted fs-6">lần</small></h3>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mb-4" style="background: #fff;">
      <div class="card-body p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="fw-bold mb-0 text-dark"><i class="fa-solid fa-chalkboard-user text-primary me-2"></i>Báo cáo hiệu suất Giáo viên</h6>
          <span class="badge bg-light text-dark border"><i class="fa-regular fa-calendar me-1"></i> Theo thời gian lọc</span>
        </div>
        
        <div class="table-responsive">
          <table class="table table-hover align-middle border text-center mb-0">
            <thead class="table-light text-muted small">
              <tr>
                <th class="text-start ps-3 py-3">Tên Giáo viên</th>
                <th class="py-3">Học sinh quản lý</th>
                <th class="py-3">Số gợi ý đã gửi (Feedback)</th>
                <th class="py-3">Điểm TB của học sinh</th>
                <th class="py-3">Đánh giá hiệu suất</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="teacher in hieu_suat_giao_vien" :key="teacher.id">
                <td class="text-start ps-3 fw-semibold text-dark">{{ teacher.name }}</td>
                <td>{{ teacher.managedStudents }} bé</td>
                <td><span class="badge bg-primary-subtle text-primary rounded-pill px-3">{{ teacher.suggestionsGiven }} lần</span></td>
                <td><strong :class="teacher.avgStudentScore >= 80 ? 'text-success' : 'text-warning'">{{ teacher.avgStudentScore }}%</strong></td>
                <td>
                  <div class="progress mx-auto" style="height: 6px; width: 80px;">
                    <div class="progress-bar" :class="teacher.avgStudentScore >= 80 ? 'bg-success' : 'bg-warning'" :style="{ width: teacher.performanceRate + '%' }"></div>
                  </div>
                  <small class="text-muted">{{ teacher.performanceRate }}%</small>
                </td>
              </tr>
              <tr v-if="hieu_suat_giao_vien.length === 0">
                <td colspan="5" class="py-4 text-muted">Không có dữ liệu trong khoảng thời gian này.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mb-4" style="background: #fff;">
      <div class="card-body p-4">
        <h6 class="fw-bold mb-3 text-dark"><i class="fa-solid fa-microchip text-danger me-2"></i>Bóc tách lỗi phát âm (Theo AI)</h6>
        
        <div class="row g-4">
          <div class="col-lg-5 border-end">
            <div v-for="(error, index) in chi_tiet_loi_ai" :key="index" class="mb-4 pe-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-semibold text-dark">{{ error.type }}</span>
                <span class="fw-bold text-danger">{{ error.count }} lỗi</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-danger" :style="{ width: error.percent + '%' }"></div>
              </div>
              <small class="text-muted d-block mt-1">{{ error.note }}</small>
            </div>
          </div>

          <div class="col-lg-7">
            <small class="fw-bold text-muted text-uppercase mb-2 d-block">Top bài học sai nhiều nhất</small>
            <div class="table-responsive">
              <table class="table table-sm table-bordered align-middle text-center mb-0">
                <thead class="table-light text-muted">
                  <tr>
                    <th class="text-start ps-2">Tên bài học / Từ vựng</th>
                    <th>Số lượt luyện</th>
                    <th>Độ chính xác TB</th>
                    <th>Lỗi chủ đạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="lesson in bai_hoc_loi_nhieu_nhat" :key="lesson.id">
                    <td class="text-start ps-2 fw-semibold">{{ lesson.title }}</td>
                    <td>{{ lesson.practices }}</td>
                    <td class="text-danger fw-bold">{{ lesson.accuracy }}%</td>
                    <td><span class="badge bg-light text-danger border">{{ lesson.mainError }}</span></td>
                  </tr>
                </tbody>
              </table>
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
      // 1. Dữ liệu bộ lọc (Filters)
      bo_loc: {
        startDate: '',
        endDate: '',
        teacherId: ''
      },
      
      // Select options
      tuy_chon_bo_loc: {
        danh_sach_giao_vien: [
          { id: 1, name: 'Nguyễn Thị Lan' },
          { id: 2, name: 'Trần Minh Anh' },
          { id: 3, name: 'Lê Hoài Phương' }
        ]
      },

      // 2. Thống kê tổng quan dựa trên khoảng thời gian lọc
      tong_quan_bao_cao: {
        totalPractices: 845,
        avgAiAccuracy: 88.5,
        totalErrorsDetected: 1250,
        totalTeacherSuggestions: 312
      },

      // 3. Data Bảng 1: Hiệu suất Giáo viên (Map với bảng quan_he_gv_hv & goi_y_luyen_tap)
      hieu_suat_giao_vien: [
        { id: 1, name: 'Nguyễn Thị Lan', managedStudents: 24, suggestionsGiven: 145, avgStudentScore: 85, performanceRate: 92 },
        { id: 2, name: 'Trần Minh Anh', managedStudents: 18, suggestionsGiven: 98, avgStudentScore: 78, performanceRate: 75 },
        { id: 3, name: 'Lê Hoài Phương', managedStudents: 12, suggestionsGiven: 69, avgStudentScore: 91, performanceRate: 95 }
      ],

      // 4. Data Bảng 2: Chi tiết lỗi (Map với các cột boolean trong chi_tiet_luyen_tap)
      chi_tiet_loi_ai: [
        { type: 'Lỗi âm đầu (loi_am_dau)', count: 650, percent: 52, note: 'Sai phụ âm đầu (VD: L/N, Tr/Ch)' },
        { type: 'Lỗi thanh điệu (loi_thanh_dieu)', count: 420, percent: 34, note: 'Sai dấu câu (Hỏi, Ngã, Nặng)' },
        { type: 'Lỗi vần (loi_van)', count: 180, percent: 14, note: 'Sai nguyên âm hoặc âm cuối' }
      ],

      // Bảng phụ: Bài học khó nhất
      bai_hoc_loi_nhieu_nhat: [
        { id: 101, title: 'Phân biệt L và N', practices: 230, accuracy: 65, mainError: 'Lỗi âm đầu' },
        { id: 102, title: 'Dấu Ngã và Dấu Hỏi', practices: 185, accuracy: 70, mainError: 'Lỗi thanh điệu' },
        { id: 103, title: 'Âm S và X', practices: 150, accuracy: 72, mainError: 'Lỗi âm đầu' },
      ]
    };
  },

  mounted() {
    // Thiết lập ngày mặc định (VD: Đầu tháng đến hiện tại)
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // Format YYYY-MM-DD cho input type="date"
    this.bo_loc.startDate = firstDay.toISOString().split('T')[0];
    this.bo_loc.endDate = today.toISOString().split('T')[0];
  },

  methods: {
    apDungBoLoc() {
      // Ở đây sau này bạn sẽ gọi API Axios:
      // axios.get(`/api/reports?start=${this.bo_loc.startDate}&end=${this.bo_loc.endDate}&teacher_id=${this.bo_loc.teacherId}`)
      
      console.log('Đang lọc dữ liệu với:', this.bo_loc);
      alert('Đã cập nhật báo cáo theo bộ lọc mới!');
      
      // Giả lập làm mới data (Hiệu ứng ngẫu nhiên con số)
      this.tong_quan_bao_cao.totalPractices = Math.floor(Math.random() * 500) + 100;
    },

    datLaiBoLoc() {
      this.bo_loc.teacherId = '';
      // Có thể reset ngày về mặc định 1 tháng
      this.apDungBoLoc();
    },

    xuatFileExcel() {
      // Xác nhận xuất Excel
      if (!this.bo_loc.startDate || !this.bo_loc.endDate) {
        alert("Vui lòng chọn khoảng thời gian hợp lệ trước khi xuất báo cáo.");
        return;
      }
      
      const fileName = `Bao_Cao_EchoKids_${this.bo_loc.startDate}_den_${this.bo_loc.endDate}.xlsx`;
      
      // Giả lập hành động tải xuống
      console.log(`Đang xuất file: ${fileName}`);
      alert(`Đang tiến hành xuất dữ liệu ra file Excel...\n(Bạn sẽ cần cài đặt thư viện sheetjs/xlsx hoặc gọi API Backend để tải file thật)`);
    },

    quayLai() {
      this.$router.push('/admin/dashboard');
    }
  }
};
</script>