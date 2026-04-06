<template>
  <div class="container-fluid" style="background-color: #f8f9fa; min-height: 100vh;">

    <div class="d-flex justify-content-between align-items-center mb-4 pt-3">
      <div>
        <h4 class="fw-bold mb-1" style="color: #2b3445;">Tổng Quan Quản Trị EchoKids</h4>
        <p class="text-muted mb-0" style="font-size: 0.9rem;">
          Giám sát hệ thống & Đo lường các chỉ số luyện phát âm lõi
        </p>
      </div>
      <div>
        <select class="form-select shadow-sm fw-semibold" v-model="bo_loc_thoi_gian" @change="capNhatToanBoDuLieu" style="cursor: pointer; border-radius: 8px;">
          <option value="tuan">Theo Tuần</option>
          <option value="thang">Theo Tháng</option>
          <option value="nam">Theo Năm</option>
        </select>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-xl-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <small class="text-muted fw-semibold">Tổng Học Viên (Trẻ em)</small>
                <h3 class="mb-0 fw-bold mt-1 text-primary">{{ keyMetrics.nguoi_dung }}</h3>
                <small class="text-success fw-bold"><i class="fa-solid fa-arrow-trend-up me-1"></i>+12%</small>
              </div>
              <div class="p-2 rounded-3 bg-primary-subtle text-primary"><i class="fa-solid fa-children fa-lg"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <small class="text-muted fw-semibold">Tổng giáo viên</small>
                <h3 class="mb-0 fw-bold mt-1 text-warning">{{ keyMetrics.giao_vien }}</h3>
                <small class="text-muted">Tài khoản giáo viên</small>
              </div>
              <div class="p-2 rounded-3 bg-warning-subtle text-warning"><i class="fa-solid fa-microphone-lines fa-lg"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <small class="text-muted fw-semibold">Bài chờ kiểm duyệt</small>
                <h3 class="mb-0 fw-bold mt-1 text-danger">{{ keyMetrics.bai_hoc_cho }}</h3>
                <small class="text-danger fw-bold">Chưa xử lý</small>
              </div>
              <div class="p-2 rounded-3 bg-danger-subtle text-danger"><i class="fa-solid fa-triangle-exclamation fa-lg"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white border-bottom border-success border-3">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <small class="text-muted fw-semibold">Dung lượng Voice AI (Quota)</small>
              <i class="fa-solid fa-microchip text-success"></i>
            </div>
            <div class="d-flex justify-content-between align-items-end mb-1">
              <h4 class="mb-0 fw-bold text-success">{{ apiUsagePercentage }}%</h4>
              <small class="text-muted">{{ keyMetrics.api_used.toLocaleString() }}/{{ keyMetrics.api_limit.toLocaleString() }} req</small>
            </div>
            <div class="progress" style="height: 6px;">
              <div class="progress-bar bg-success" :style="{ width: apiUsagePercentage + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-lg-8">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h6 class="fw-bold mb-0"><i class="fa-solid fa-chart-line me-2 text-primary"></i>Tăng trưởng Học viên mới</h6>
            </div>
            <div style="position: relative; height: 300px;">
              <canvas ref="userGrowthChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-4 d-flex flex-column">
            <h6 class="fw-bold mb-4"><i class="fa-solid fa-chart-pie me-2 text-info"></i>Lỗi Phát Âm Phổ Biến</h6>
            <div style="position: relative; flex-grow: 1; display: flex; justify-content: center;">
              <canvas ref="lessonCategoryChart" style="max-height: 250px;"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3">
      <div class="col-lg-6">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-4">
            <h6 class="fw-bold mb-4"><i class="fa-solid fa-chart-column me-2 text-warning"></i>Tiến độ Luyện tập của Trẻ</h6>
            <div style="position: relative; height: 250px;">
              <canvas ref="practiceStatusChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card border-0 shadow-sm rounded-3 h-100 bg-white">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h6 class="fw-bold mb-0">Hoạt động hệ thống gần đây</h6>
              <a href="/admin/system-logs" class="text-decoration-none text-primary" style="font-size: 0.85rem;">Xem chi tiết Log</a>
            </div>

            <div class="d-flex align-items-start mb-3" v-for="hoat_dong in danh_sach_hoat_dong" :key="hoat_dong.id">
              <div class="p-2 rounded-circle me-3" style="background-color: #f8f9fa; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                <i :class="hoat_dong.icon" class="text-secondary"></i>
              </div>
              <div class="flex-grow-1 border-bottom pb-3">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="fw-bold" style="font-size: 0.95rem; color: #333;">{{ hoat_dong.tieu_de }}</span>
                  <small class="text-muted" style="font-size: 0.75rem;">{{ hoat_dong.thoi_gian }}</small>
                </div>
                <p class="text-muted mb-0" style="font-size: 0.85rem;">{{ hoat_dong.mo_ta }}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: "AdminDashboard",
  data() {
    return {
      bo_loc_thoi_gian: 'thang',

      // --- Dữ liệu Thẻ (Cards) ---
      keyMetrics: {
        nguoi_dung: 452,
        giao_vien: 45,       // Đã thêm trường Giáo viên
        bai_hoc_cho: 12,     // Map đúng cho thẻ "Bài chờ duyệt"
        phan_hoi_cho: 5,
        api_used: 35000,
        api_limit: 50000
      },

      // --- Dữ liệu Biểu đồ ---
      duLieuLine: {
        tuan: { labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], data: [5, 12, 8, 15, 10, 25, 30] },
        thang: { labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], data: [40, 55, 35, 80] },
        nam: { labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'], data: [150, 200, 180, 250, 300, 450] }
      },

      duLieuBar: {
        tuan: { labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], dataDone: [20, 30, 25, 40, 35, 60, 80], dataDoing: [10, 15, 12, 20, 18, 30, 40] },
        thang: { labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], dataDone: [150, 180, 160, 220], dataDoing: [80, 90, 75, 110] },
        nam: { labels: ['T1', 'T2', 'T3', 'T4'], dataDone: [500, 600, 550, 800], dataDoing: [200, 250, 220, 350] }
      },

      danh_sach_hoat_dong: [
        { id: 1, icon: "fa-solid fa-microphone", tieu_de: "Cảnh báo AI nhận diện", mo_ta: "Nhiều trẻ phát âm sai 'Âm L/N' ở bài học số 4.", thoi_gian: "10 phút trước" },
        { id: 2, icon: "fa-solid fa-user-plus", tieu_de: "Học viên mới đăng ký", mo_ta: "Phụ huynh Phạm Văn A vừa tạo tài khoản cho bé.", thoi_gian: "30 phút trước" },
        { id: 3, icon: "fa-solid fa-triangle-exclamation", tieu_de: "Khiếu nại từ Phụ huynh", mo_ta: "Mẹ bé Na báo lỗi app không thu âm được.", thoi_gian: "1 giờ trước" },
      ]
    };
  },
  
  computed: {
    apiUsagePercentage() {
      return Math.round((this.keyMetrics.api_used / this.keyMetrics.api_limit) * 100);
    }
  },

  created() {
    this.chartInstances = {
      userLine: null,
      categoryPie: null,
      practiceBar: null
    };
  },

  mounted() {
    this.renderLineChart();
    this.renderPieChart();
    this.renderBarChart();
  },

  beforeUnmount() {
    if (this.chartInstances.userLine) this.chartInstances.userLine.destroy();
    if (this.chartInstances.categoryPie) this.chartInstances.categoryPie.destroy();
    if (this.chartInstances.practiceBar) this.chartInstances.practiceBar.destroy();
  },

  methods: {
    renderLineChart() {
      const ctx = this.$refs.userGrowthChart.getContext('2d');
      const dl = this.duLieuLine[this.bo_loc_thoi_gian];
      
      this.chartInstances.userLine = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dl.labels,
          datasets: [{
            label: 'Lượt đăng ký mới',
            data: dl.data,
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: { y: { beginAtZero: true, grid: { borderDash: [5, 5] } } }
        }
      });
    },

    renderPieChart() {
      const ctx = this.$refs.lessonCategoryChart.getContext('2d');
      this.chartInstances.categoryPie = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Ngọng L/N', 'Sai Thanh Điệu', 'Ngọng Tr/Ch', 'Lỗi Khác'],
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          cutout: '65%'
        }
      });
    },

    renderBarChart() {
      const ctx = this.$refs.practiceStatusChart.getContext('2d');
      const dl = this.duLieuBar[this.bo_loc_thoi_gian];

      this.chartInstances.practiceBar = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dl.labels,
          datasets: [
            {
              label: 'Bài tập đã hoàn thành',
              data: dl.dataDone,
              backgroundColor: '#198754',
              borderRadius: 4
            },
            {
              label: 'Bài tập đang thực hiện',
              data: dl.dataDoing,
              backgroundColor: '#ffc107',
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            x: { grid: { display: false }, stacked: true },
            y: { beginAtZero: true, grid: { borderDash: [5, 5] }, stacked: true }
          }
        }
      });
    },

    capNhatToanBoDuLieu() {
      // 1. Cập nhật Line Chart
      const lineData = this.duLieuLine[this.bo_loc_thoi_gian];
      this.chartInstances.userLine.data.labels = lineData.labels;
      this.chartInstances.userLine.data.datasets[0].data = lineData.data;
      this.chartInstances.userLine.update();

      // 2. Cập nhật Bar Chart
      const barData = this.duLieuBar[this.bo_loc_thoi_gian];
      this.chartInstances.practiceBar.data.labels = barData.labels;
      this.chartInstances.practiceBar.data.datasets[0].data = barData.dataDone;
      this.chartInstances.practiceBar.data.datasets[1].data = barData.dataDoing;
      this.chartInstances.practiceBar.update();
      
      // Giả lập thay đổi API Quota
      this.keyMetrics.api_used = Math.floor(Math.random() * (45000 - 10000 + 1) + 10000);
    }
  }
};
</script>