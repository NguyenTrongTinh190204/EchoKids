<template>
  <div class="container-fluid py-4 alerts-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Cảnh báo và nhắc nhở
        </h4>

        <small class="text-muted">
          Theo dõi các cảnh báo tiến độ và lịch học của trẻ
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- THỐNG KÊ -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tổng thông báo</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalAlerts }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Cần chú ý</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.warningAlerts }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Nhắc học</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.reminders }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Đã xử lý</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.completed }}
          </div>
        </div>
      </div>

    </div>

    <!-- DANH SÁCH THÔNG BÁO -->
    <div class="bg-light rounded-4 shadow-sm p-4">

      <div
        v-for="alert in alerts"
        :key="alert.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-start flex-wrap gap-3">

          <div class="flex-grow-1">
            <div class="d-flex align-items-center gap-2 mb-2">
              <span
                class="badge px-3 py-2"
                :class="getAlertClass(alert.type)"
              >
                {{ alert.type }}
              </span>

              <small class="text-muted">
                {{ alert.time }}
              </small>
            </div>

            <div class="fw-bold mb-1">
              {{ alert.title }}
            </div>

            <small class="text-muted d-block">
              {{ alert.description }}
            </small>
          </div>

          <div class="d-flex gap-2">
            <button
              class="btn btn-outline-primary btn-sm rounded-pill"
              @click="viewDetail(alert)"
            >
              Xem chi tiết
            </button>

            <button
              class="btn btn-outline-secondary btn-sm rounded-pill"
              @click="markAsRead(alert)"
            >
              Đánh dấu đã xem
            </button>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Alerts",

  data() {
    return {
      summary: {
        totalAlerts: 8,
        warningAlerts: 3,
        reminders: 4,
        completed: 1
      },

      alerts: [
        {
          id: 1,
          type: "Cảnh báo",
          title: "Trẻ tiến bộ chậm ở âm L/N",
          description: "Nguyễn Minh Anh có điểm phát âm âm L/N giảm trong 3 buổi gần đây.",
          time: "10 phút trước"
        },
        {
          id: 2,
          type: "Nhắc học",
          title: "Đến giờ luyện tập",
          description: "Hôm nay trẻ chưa hoàn thành bài luyện phát âm theo lịch.",
          time: "1 giờ trước"
        },
        {
          id: 3,
          type: "Gợi ý",
          title: "Bài luyện mới phù hợp",
          description: "Hệ thống đề xuất bài “Phân biệt âm S và X” cho trẻ.",
          time: "2 giờ trước"
        },
        {
          id: 4,
          type: "Cảnh báo",
          title: "Trẻ bỏ lỡ 3 ngày học liên tiếp",
          description: "Cần nhắc trẻ quay lại luyện tập để duy trì tiến độ.",
          time: "1 ngày trước"
        }
      ]
    };
  },

  methods: {
    getAlertClass(type) {
      if (type === "Cảnh báo") {
        return "bg-warning text-dark";
      }

      if (type === "Nhắc học") {
        return "bg-success";
      }

      return "bg-primary";
    },

    viewDetail(alert) {
      console.log("Xem chi tiết", alert);
    },

    markAsRead(alert) {
      this.alerts = this.alerts.filter(item => item.id !== alert.id);
    },

    goBack() {
      this.$router.push('/parent/dashboard');
    }
  }
};
</script>

<style scoped>
.alerts-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>