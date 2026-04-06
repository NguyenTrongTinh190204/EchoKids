<template>

  <div class="container-fluid p-4 bg-light" style="min-height: 100vh;">

   

    <div class="d-flex justify-content-between align-items-center mb-4">

      <div>

        <h3 class="m-0 text-primary"><i class="fa-solid fa-chart-pie me-2"></i>Báo Cáo Thống Kê</h3>

        <p class="text-muted mb-0">Tổng quan tình hình học tập của học viên và bài giảng</p>

      </div>

      <div>

        <button class="btn btn-outline-primary shadow-sm me-2">

          <i class="fa-solid fa-download me-1"></i> Xuất báo cáo

        </button>

        <button class="btn btn-primary shadow-sm">

          <i class="fa-solid fa-rotate-right me-1"></i> Làm mới

        </button>

      </div>

    </div>



    <div class="row g-4 mb-4">

      <div class="col-xl-3 col-md-6">

        <div class="card border-0 shadow-sm rounded-3 h-100 border-start border-4 border-primary">

          <div class="card-body d-flex align-items-center justify-content-between p-4">

            <div>

              <h6 class="text-muted fw-semibold mb-1">Tổng Học Viên</h6>

              <h3 class="fw-bold mb-0 text-dark ">{{ thongKe.tongHocVien }}</h3>

            </div>

            <div class="bg-primary bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">

              <i class="fa-solid fa-users fs-4"></i>

            </div>

          </div>

        </div>

      </div>

      <div class="col-xl-3 col-md-6">

        <div class="card border-0 shadow-sm rounded-3 h-100 border-start border-4 border-success">

          <div class="card-body d-flex align-items-center justify-content-between p-4">

            <div>

              <h6 class="text-muted fw-semibold mb-1">Bài Học Hoạt Động</h6>

              <h3 class="fw-bold mb-0 text-dark">{{ thongKe.tongBaiHoc }}</h3>

            </div>

            <div class="bg-success bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">

              <i class="fa-solid fa-book-open fs-4"></i>

            </div>

          </div>

        </div>

      </div>

      <div class="col-xl-3 col-md-6">

        <div class="card border-0 shadow-sm rounded-3 h-100 border-start border-4 border-warning">

          <div class="card-body d-flex align-items-center justify-content-between p-4">

            <div>

              <h6 class="text-muted fw-semibold mb-1">Lượt Hoàn Thành</h6>

              <h3 class="fw-bold mb-0 text-dark">{{ thongKe.luotHoanThanh }}</h3>

            </div>

            <div class="bg-warning bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">

              <i class="fa-solid fa-check-double fs-4"></i>

            </div>

          </div>

        </div>

      </div>

      <div class="col-xl-3 col-md-6">

        <div class="card border-0 shadow-sm rounded-3 h-100 border-start border-4 border-info">

          <div class="card-body d-flex align-items-center justify-content-between p-4">

            <div>

              <h6 class="text-muted fw-semibold mb-1">Điểm Trung Bình</h6>

              <h3 class="fw-bold mb-0 text-dark">{{ thongKe.diemTrungBinh }}</h3>

            </div>

            <div class="bg-info bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">

              <i class="fa-solid fa-star fs-4"></i>

            </div>

          </div>

        </div>

      </div>

    </div>



    <div class="row g-4 mb-4">

     

      <div class="col-lg-8">

        <div class="card border-0 shadow-sm rounded-3 h-100">

          <div class="card-header bg-white border-bottom-0 pt-4 pb-2 d-flex justify-content-between align-items-center">

            <h6 class="fw-bold mb-0"><i class="fa-solid fa-chart-line text-primary me-2"></i>Theo Dõi Tiến Độ Luyện Tập (7 Ngày Qua)</h6>

            <select class="form-select form-select-sm w-auto shadow-none border-light bg-light">

              <option>Tuần này</option>

              <option>Tháng này</option>

            </select>

          </div>

          <div class="card-body p-4 position-relative">

            <canvas id="tienDoChart" height="100"></canvas>

          </div>

        </div>

      </div>



      <div class="col-lg-4">

        <div class="card border-0 shadow-sm rounded-3 h-100">

          <div class="card-header bg-white border-bottom-0 pt-4 pb-2">

            <h6 class="fw-bold mb-0"><i class="fa-solid fa-chart-pie text-danger me-2"></i>Phân Tích Lỗi Phổ Biến</h6>

          </div>

          <div class="card-body p-4 d-flex justify-content-center align-items-center position-relative">

            <canvas id="loiPhatAmChart"></canvas>

          </div>

        </div>

      </div>



    </div>



    <div class="row g-4 mb-4">

     

      <div class="col-lg-5">

        <div class="card border-0 shadow-sm rounded-3 h-100">

          <div class="card-header bg-white border-bottom-0 pt-4 pb-2">

            <h6 class="fw-bold mb-0"><i class="fa-solid fa-layer-group text-primary me-2"></i>Phân Bổ Cấp Độ Bài Học</h6>

          </div>

          <div class="card-body p-4">

           

            <div class="mb-4">

              <div class="d-flex justify-content-between mb-1">

                <span class="text-muted fw-medium">Dễ (Mầm non)</span>

                <span class="fw-bold text-success">{{ phanBoCapDo.de.count }} bài ({{ phanBoCapDo.de.percent }}%)</span>

              </div>

              <div class="progress" style="height: 10px;">

                <div class="progress-bar bg-success rounded-pill" :style="`width: ${phanBoCapDo.de.percent}%`"></div>

              </div>

            </div>



            <div class="mb-4">

              <div class="d-flex justify-content-between mb-1">

                <span class="text-muted fw-medium">Trung Bình (Lớp 1-2)</span>

                <span class="fw-bold text-warning">{{ phanBoCapDo.tb.count }} bài ({{ phanBoCapDo.tb.percent }}%)</span>

              </div>

              <div class="progress" style="height: 10px;">

                <div class="progress-bar bg-warning rounded-pill" :style="`width: ${phanBoCapDo.tb.percent}%`"></div>

              </div>

            </div>



            <div class="mb-2">

              <div class="d-flex justify-content-between mb-1">

                <span class="text-muted fw-medium">Khó (Nâng cao)</span>

                <span class="fw-bold text-danger">{{ phanBoCapDo.kho.count }} bài ({{ phanBoCapDo.kho.percent }}%)</span>

              </div>

              <div class="progress" style="height: 10px;">

                <div class="progress-bar bg-danger rounded-pill" :style="`width: ${phanBoCapDo.kho.percent}%`"></div>

              </div>

            </div>



          </div>

        </div>

      </div>



      <div class="col-lg-7">

        <div class="card border-0 shadow-sm rounded-3 h-100">

          <div class="card-header bg-white border-bottom-0 pt-4 pb-2 d-flex justify-content-between align-items-center">

            <h6 class="fw-bold mb-0"><i class="fa-solid fa-bars-progress text-primary me-2"></i>Trạng Thái Tiến Trình Học Tập</h6>

          </div>

          <div class="card-body p-4 d-flex flex-column justify-content-center">

           

            <div class="row text-center mb-4">

              <div class="col-4 border-end">

                <h4 class="fw-bold text-success mb-1">{{ tienTrinh.hoanThanh }}</h4>

                <small class="text-muted">Đã hoàn thành</small>

              </div>

              <div class="col-4 border-end">

                <h4 class="fw-bold text-primary mb-1">{{ tienTrinh.dangHoc }}</h4>

                <small class="text-muted">Đang học</small>

              </div>

              <div class="col-4">

                <h4 class="fw-bold text-secondary mb-1">{{ tienTrinh.chuaHoc }}</h4>

                <small class="text-muted">Chưa học</small>

              </div>

            </div>



            <div class="progress rounded-pill shadow-sm mt-2" style="height: 25px;">

              <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" :style="`width: ${phanTramTienTrinh.hoanThanh}%`">

                {{ phanTramTienTrinh.hoanThanh }}%

              </div>

              <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" :style="`width: ${phanTramTienTrinh.dangHoc}%`">

                {{ phanTramTienTrinh.dangHoc }}%

              </div>

              <div class="progress-bar bg-secondary" :style="`width: ${phanTramTienTrinh.chuaHoc}%`">

                {{ phanTramTienTrinh.chuaHoc }}%

              </div>

            </div>

           

          </div>

        </div>

      </div>



    </div>



    <div class="row g-4">

      <div class="col-lg-6">

        <div class="card border-0 shadow-sm rounded-3 h-100">

          <div class="card-header bg-white border-bottom pt-4 pb-3">

            <h6 class="fw-bold mb-0"><i class="fa-solid fa-medal text-warning me-2"></i>Top Học Viên Xuất Sắc</h6>

          </div>

          <div class="card-body p-0">

            <div class="table-responsive">

              <table class="table table-hover align-middle mb-0">

                <thead class="table-light">

                  <tr>

                    <th class="ps-4">Học viên</th>

                    <th class="text-center">Số bài đã test</th>

                    <th class="text-center">Điểm TB</th>

                  </tr>

                </thead>

                <tbody>

                  <tr v-for="(hv, index) in topHocVien" :key="hv.id">

                    <td class="ps-4 py-3">

                      <div class="d-flex align-items-center">

                        <div class="me-3 position-relative">

                          <img :src="`https://ui-avatars.com/api/?name=${hv.ten}&background=random`" class="rounded-circle" width="40" height="40">

                          <span v-if="index === 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">👑</span>

                        </div>

                        <div>

                          <h6 class="mb-0 fw-semibold">{{ hv.ten }}</h6>

                          <small class="text-muted">{{ hv.email }}</small>

                        </div>

                      </div>

                    </td>

                    <td class="text-center text-muted">{{ hv.soBaiTest }}</td>

                    <td class="text-center">

                      <span class="badge bg-success bg-opacity-10 border border-success px-2 py-1">

                        {{ hv.diemTB }}đ

                      </span>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>



      <div class="col-lg-6">

        <div class="card border-0 shadow-sm rounded-3 h-100">

          <div class="card-header bg-white border-bottom pt-4 pb-3">

            <h6 class="fw-bold mb-0"><i class="fa-solid fa-fire text-danger me-2"></i>Bài Học Được Quan Tâm Nhất</h6>

          </div>

          <div class="card-body p-0">

            <div class="table-responsive">

              <table class="table table-hover align-middle mb-0">

                <thead class="table-light">

                  <tr>

                    <th class="ps-4">Tên bài học</th>

                    <th>Cấp độ</th>

                    <th class="text-center">Lượt học</th>

                  </tr>

                </thead>

                <tbody>

                  <tr v-for="bai in topBaiHoc" :key="bai.id">

                    <td class="ps-4 py-3">

                      <h6 class="mb-0 fw-semibold">{{ bai.tieu_de }}</h6>

                      <small class="text-muted text-truncate d-inline-block" style="max-width: 200px;">

                        {{ bai.mo_ta }}

                      </small>

                    </td>

                    <td>

                      <span class="badge text-white" :class="getCapDoClass(bai.cap_do)">

                        {{ formatCapDo(bai.cap_do) }}

                      </span>

                    </td>

                    <td class="text-center">

                      <span class="fw-bold text-primary">{{ bai.luotHoc }}</span> <small class="text-muted">lượt</small>

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

</template>



<script>

// Import Chart.js (Yêu cầu đã chạy npm install chart.js)

import Chart from 'chart.js/auto';



export default {

  name: "TeacherDashboard",

  data() {

    return {

      // 1. Chỉ số tổng quan

      thongKe: {

        tongHocVien: 45,

        tongBaiHoc: 32,

        luotHoanThanh: 215,

        diemTrungBinh: 84.5

      },

      // 2. Phân bổ cấp độ

      phanBoCapDo: {

        de: { count: 16, percent: 50 },

        tb: { count: 10, percent: 31 },

        kho: { count: 6, percent: 19 }

      },

      // 3. Tiến trình

      tienTrinh: {

        hoanThanh: 215,

        dangHoc: 85,

        chuaHoc: 40

      },

      // 4. Bảng học viên xuất sắc

      topHocVien: [

        { id: 1, ten: "Nguyễn Văn A", email: "nva@gmail.com", soBaiTest: 12, diemTB: 95.5 },

        { id: 2, ten: "Trần Thị B", email: "ttb@gmail.com", soBaiTest: 15, diemTB: 92.0 },

        { id: 3, ten: "Lê Minh C", email: "lmc@gmail.com", soBaiTest: 10, diemTB: 89.5 },

        { id: 4, ten: "Phạm Hoàng D", email: "phd@gmail.com", soBaiTest: 14, diemTB: 88.0 }

      ],

      // 5. Bảng bài học phổ biến

      topBaiHoc: [

        { id: 101, tieu_de: "Phân biệt Âm L và N", mo_ta: "Bài tập uốn lưỡi...", cap_do: "de", luotHoc: 42 },

        { id: 102, tieu_de: "Luyện Âm S và X", mo_ta: "Sửa lỗi ngọng xát...", cap_do: "trung_binh", luotHoc: 38 },

        { id: 103, tieu_de: "Giao tiếp cơ bản", mo_ta: "Chào hỏi hàng ngày...", cap_do: "de", luotHoc: 35 },

        { id: 104, tieu_de: "Luyện Âm Tr và Ch", mo_ta: "Sửa lỗi ngọng Tr/Ch...", cap_do: "kho", luotHoc: 20 }

      ],



      // Biến lưu trữ instance của Chart.js để hủy khi component unmount

      tienDoChartInstance: null,

      loiPhatAmChartInstance: null

    };

  },

  computed: {

    phanTramTienTrinh() {

      const tong = this.tienTrinh.hoanThanh + this.tienTrinh.dangHoc + this.tienTrinh.chuaHoc;

      if (tong === 0) return { hoanThanh: 0, dangHoc: 0, chuaHoc: 0 };

      return {

        hoanThanh: Math.round((this.tienTrinh.hoanThanh / tong) * 100),

        dangHoc: Math.round((this.tienTrinh.dangHoc / tong) * 100),

        chuaHoc: Math.round((this.tienTrinh.chuaHoc / tong) * 100)

      };

    }

  },

  mounted() {

    // Khởi tạo biểu đồ sau khi giao diện đã render xong

    this.renderTienDoChart();

    this.renderLoiPhatAmChart();

  },

  beforeUnmount() {

    // Hủy biểu đồ để tránh rò rỉ bộ nhớ khi rời trang

    if (this.tienDoChartInstance) this.tienDoChartInstance.destroy();

    if (this.loiPhatAmChartInstance) this.loiPhatAmChartInstance.destroy();

  },

  methods: {

    formatCapDo(capDo) {

      const map = { 'de': 'Dễ', 'trung_binh': 'Trung bình', 'kho': 'Khó' };

      return map[capDo] || capDo;

    },

    getCapDoClass(capDo) {

      const map = {

        'de': 'bg-success bg-opacity-10 text-success border border-success',

        'trung_binh': 'bg-warning bg-opacity-10 text-warning border border-warning',

        'kho': 'bg-danger bg-opacity-10 text-danger border border-danger'

      };

      return map[capDo] || 'bg-secondary';

    },



    // --- VẼ BIỂU ĐỒ ĐƯỜNG (THEO DÕI TIẾN ĐỘ) ---

    renderTienDoChart() {

      const ctx = document.getElementById('tienDoChart').getContext('2d');

      this.tienDoChartInstance = new Chart(ctx, {

        type: 'line',

        data: {

          labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],

          datasets: [

            {

              label: 'Số lượt luyện tập',

              data: [12, 19, 15, 25, 22, 30, 28],

              borderColor: '#0d6efd', // Màu primary của Bootstrap

              backgroundColor: 'rgba(13, 110, 253, 0.1)',

              borderWidth: 2,

              tension: 0.4, // Tạo độ cong mượt mà cho đường

              fill: true

            },

            {

              label: 'Điểm trung bình',

              data: [75, 78, 80, 79, 82, 85, 84],

              borderColor: '#198754', // Màu success

              backgroundColor: 'transparent',

              borderWidth: 2,

              borderDash: [5, 5], // Nét đứt

              tension: 0.4

            }

          ]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false,

          plugins: {

            legend: { position: 'top' }

          },

          scales: {

            y: { beginAtZero: true }

          }

        }

      });

    },



    // --- VẼ BIỂU ĐỒ TRÒN (PHÂN TÍCH LỖI) ---

    renderLoiPhatAmChart() {

      const ctx = document.getElementById('loiPhatAmChart').getContext('2d');

      this.loiPhatAmChartInstance = new Chart(ctx, {

        type: 'doughnut',

        data: {

          labels: ['Lẫn lộn L/N', 'Sai thanh điệu', 'Lỗi S/X', 'Ngọng Tr/Ch', 'Lỗi khác'],

          datasets: [{

            data: [35, 25, 15, 15, 10],

            backgroundColor: [

              '#dc3545', // Danger

              '#fd7e14', // Orange

              '#ffc107', // Warning

              '#0dcaf0', // Info

              '#6c757d'  // Secondary

            ],

            borderWidth: 0,

            hoverOffset: 4

          }]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false,

          cutout: '65%', // Làm rỗng ở giữa tạo hình Donut

          plugins: {

            legend: {

              position: 'bottom',

              labels: { boxWidth: 12, padding: 15 }

            }

          }

        }

      });

    }

  }

};

</script>



<style scoped>

.border-start.border-4 {

  border-left-width: 4px !important;

}

.progress-bar {

  font-weight: 500;

  font-size: 0.8rem;

  line-height: 25px;

}

/* Đảm bảo canvas của biểu đồ không bị tràn ra ngoài */

canvas {

  max-width: 100%;

}

</style>