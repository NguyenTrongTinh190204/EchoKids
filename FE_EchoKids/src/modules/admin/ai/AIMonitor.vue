<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">AI Monitor</h4>
        <p class="text-muted mb-0">
          Theo dõi hiệu suất AI và dữ liệu phân tích phát âm
        </p>
      </div>

      <button
        class="btn btn-outline-primary rounded px-4"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Tổng lượt phân tích</small>
            <h3 class="fw-bold text-primary mt-2 mb-0">
              {{ summary.totalAnalysis }}
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Độ chính xác AI</small>
            <h3 class="fw-bold text-success mt-2 mb-0">
              {{ summary.accuracy }}%
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Thời gian phản hồi</small>
            <h3 class="fw-bold text-warning mt-2 mb-0">
              {{ summary.responseTime }}s
            </h3>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Lỗi hệ thống</small>
            <h3 class="fw-bold text-danger mt-2 mb-0">
              {{ summary.totalErrors }}
            </h3>
          </div>
        </div>
      </div>

    </div>

    <div class="row g-4 mb-4">

      <div class="col-lg-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Hiệu suất chấm điểm
            </h6>

            <div class="border rounded p-3 mb-3">
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

            <div class="border rounded p-3 mb-3">
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

            <div class="border rounded p-3">
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
      </div>

      <div class="col-lg-6">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Trạng thái hệ thống AI
            </h6>

            <div
              v-for="service in services"
              :key="service.id"
              class="border rounded p-3 mb-3"
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
                  class="badge"
                  :class="service.status === 'Hoạt động'
                    ? 'bg-success-subtle text-success'
                    : 'bg-danger-subtle text-danger'"
                >
                  {{ service.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <h6 class="fw-bold mb-3">
          Lỗi phát âm phổ biến
        </h6>

        <div
          v-for="error in commonErrors"
          :key="error.id"
          class="border rounded p-3 mb-3"
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

            <span class="badge bg-warning-subtle text-warning px-3 py-2">
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
    </div>

    <div class="card border-0 shadow-sm rounded">
      <div class="card-body">
        <h6 class="fw-bold mb-3">
          Nhật ký hệ thống
        </h6>

        <div
          v-for="log in logs"
          :key="log.id"
          class="border rounded p-3 mb-3"
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
.container-fluid {
  min-height: 100vh;
}
</style>