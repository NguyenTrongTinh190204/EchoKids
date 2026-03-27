<template>
  <div class="container-fluid py-4 ai-monitor-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          AI Monitor
        </h4>
        <small class="text-muted">
          Theo dõi hiệu suất AI và dữ liệu phân tích phát âm
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- THỐNG KÊ TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tổng lượt phân tích</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalAnalysis }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Độ chính xác AI</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.accuracy }}%
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Thời gian phản hồi</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.responseTime }}s
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Lỗi hệ thống</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.totalErrors }}
          </div>
        </div>
      </div>

    </div>

    <!-- THỐNG KÊ CHẤM ĐIỂM -->
    <div class="row g-4 mb-4">

      <div class="col-lg-6">
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="fw-bold mb-3">
            Hiệu suất chấm điểm
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <div class="d-flex justify-content-between mb-2">
              <span>Âm đầu</span>
              <span class="fw-bold">{{ scoring.initialSound }}%</span>
            </div>

            <div class="progress" style="height: 6px;">
              <div
                class="progress-bar bg-primary"
                :style="{ width: scoring.initialSound + '%' }"
              ></div>
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <div class="d-flex justify-content-between mb-2">
              <span>Vần</span>
              <span class="fw-bold">{{ scoring.rhyme }}%</span>
            </div>

            <div class="progress" style="height: 6px;">
              <div
                class="progress-bar bg-success"
                :style="{ width: scoring.rhyme + '%' }"
              ></div>
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3">
            <div class="d-flex justify-content-between mb-2">
              <span>Thanh điệu</span>
              <span class="fw-bold">{{ scoring.tone }}%</span>
            </div>

            <div class="progress" style="height: 6px;">
              <div
                class="progress-bar bg-warning"
                :style="{ width: scoring.tone + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="bg-light rounded-4 p-4 shadow-sm h-100">
          <div class="fw-bold mb-3">
            Trạng thái hệ thống AI
          </div>

          <div
            v-for="service in services"
            :key="service.id"
            class="bg-white rounded-4 border p-3 mb-3"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="fw-bold">
                  {{ service.name }}
                </div>

                <small class="text-muted">
                  {{ service.description }}
                </small>
              </div>

              <span
                class="badge px-3 py-2"
                :class="service.status === 'Hoạt động' ? 'bg-success' : 'bg-danger'"
              >
                {{ service.status }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ÂM LỖI PHỔ BIẾN -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Lỗi phát âm phổ biến
      </div>

      <div
        v-for="error in commonErrors"
        :key="error.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <div class="fw-bold">
              {{ error.sound }}
            </div>

            <small class="text-muted">
              {{ error.description }}
            </small>
          </div>

          <span class="badge bg-warning text-dark px-3 py-2">
            {{ error.total }} lượt
          </span>
        </div>

        <div class="progress" style="height: 6px;">
          <div
            class="progress-bar bg-warning"
            :style="{ width: error.percent + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- NHẬT KÝ HỆ THỐNG -->
    <div class="bg-light rounded-4 p-4 shadow-sm">
      <div class="fw-bold mb-3">
        Nhật ký hệ thống
      </div>

      <div
        v-for="log in logs"
        :key="log.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="fw-bold">
              {{ log.title }}
            </div>

            <small class="text-muted">
              {{ log.description }}
            </small>
          </div>

          <small class="text-muted">
            {{ log.time }}
          </small>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AIMonitor",

  data() {
    return {
      summary: {
        totalAnalysis: 1520,
        accuracy: 91,
        responseTime: 1.8,
        totalErrors: 3
      },

      scoring: {
        initialSound: 92,
        rhyme: 88,
        tone: 85
      },

      services: [
        {
          id: 1,
          name: "Speech-to-Text",
          description: "Nhận diện giọng nói trẻ em",
          status: "Hoạt động"
        },
        {
          id: 2,
          name: "Text-to-Speech",
          description: "Đọc âm mẫu tự động",
          status: "Hoạt động"
        },
        {
          id: 3,
          name: "AI Scoring",
          description: "Chấm điểm phát âm",
          status: "Hoạt động"
        },
        {
          id: 4,
          name: "Noise Filter",
          description: "Lọc tạp âm trong môi trường",
          status: "Tạm dừng"
        }
      ],

      commonErrors: [
        {
          id: 1,
          sound: "Âm L/N",
          description: "Lỗi phổ biến nhất ở trẻ 4 - 6 tuổi",
          total: 320,
          percent: 80
        },
        {
          id: 2,
          sound: "Âm S/X",
          description: "Trẻ thường nhầm lẫn giữa âm S và X",
          total: 210,
          percent: 60
        },
        {
          id: 3,
          sound: "Thanh sắc",
          description: "Phát âm chưa rõ thanh sắc",
          total: 150,
          percent: 45
        }
      ],

      logs: [
        {
          id: 1,
          title: "AI cập nhật mô hình",
          description: "Mô hình phát âm đã được nâng cấp lên phiên bản mới.",
          time: "10 phút trước"
        },
        {
          id: 2,
          title: "Speech-to-Text hoạt động ổn định",
          description: "Không phát hiện lỗi trong 24 giờ qua.",
          time: "1 giờ trước"
        },
        {
          id: 3,
          title: "Noise Filter tạm dừng",
          description: "Dịch vụ lọc tạp âm đang được bảo trì.",
          time: "2 giờ trước"
        }
      ]
    };
  },

  methods: {
    goBack() {
      this.$router.push('/admin/dashboard');
    }
  }
};
</script>

<style scoped>
.ai-monitor-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>