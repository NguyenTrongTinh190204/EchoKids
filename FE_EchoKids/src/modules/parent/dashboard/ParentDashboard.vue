<template>
  <div class="container-fluid py-4 parent-dashboard">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Dashboard phụ huynh
        </h4>
        <small class="text-muted">
          Theo dõi tình hình học tập của bé
        </small>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToChildList"
      >
        Quản lý trẻ
      </button>
    </div>

    <!-- THÔNG TIN TỔNG QUAN -->
    <div class="row g-3 mb-4">

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Số trẻ</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalChildren }}
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Điểm trung bình</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.averageScore }}
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Bài đã hoàn thành</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.completedLessons }}
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Cảnh báo</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.alerts }}
          </div>
        </div>
      </div>

    </div>

    <!-- DANH SÁCH TRẺ -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="fw-bold">
          Danh sách trẻ
        </div>

        <button
          class="btn btn-outline-primary btn-sm rounded-pill"
          @click="goToChildList"
        >
          Xem tất cả
        </button>
      </div>

      <div class="row g-3">

        <div
          v-for="child in children"
          :key="child.id"
          class="col-lg-4 col-md-6"
        >
          <div
            class="bg-white rounded-4 border p-3 child-card h-100"
            @click="goToChildDetail(child.id)"
          >
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <div class="fw-bold">
                  {{ child.name }}
                </div>

                <small class="text-muted">
                  {{ child.age }} tuổi
                </small>
              </div>

              <span
                class="badge px-3 py-2"
                :class="child.status === 'Tốt' ? 'bg-success' : 'bg-warning text-dark'"
              >
                {{ child.status }}
              </span>
            </div>

            <div class="mb-2">
              <small class="text-muted">
                Tiến độ học tập
              </small>

              <div class="progress mt-1" style="height: 6px;">
                <div
                  class="progress-bar bg-primary"
                  :style="{ width: child.progress + '%' }"
                ></div>
              </div>
            </div>

            <div class="d-flex justify-content-between mt-3">
              <small class="text-muted">
                Điểm phát âm
              </small>

              <small class="fw-bold text-success">
                {{ child.score }}/100
              </small>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- CẢNH BÁO -->
    <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
      <div class="fw-bold mb-3">
        Cảnh báo gần đây
      </div>

      <div
        v-for="alert in alerts"
        :key="alert.id"
        class="bg-white border rounded-4 p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="fw-bold">
              {{ alert.title }}
            </div>

            <small class="text-muted">
              {{ alert.message }}
            </small>
          </div>

          <span class="badge bg-danger px-3 py-2">
            {{ alert.level }}
          </span>
        </div>
      </div>
    </div>

    <!-- NÚT ĐIỀU HƯỚNG -->
    <div class="row g-3">

      <div class="col-md-4">
        <button
          class="btn btn-primary w-100 rounded-4 py-3"
          @click="goToProgressOverview"
        >
          Xem tiến độ
        </button>
      </div>

      <div class="col-md-4">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToPracticeHistory"
        >
          Lịch sử luyện tập
        </button>
      </div>

      <div class="col-md-4">
        <button
          class="btn btn-outline-primary w-100 rounded-4 py-3"
          @click="goToAlerts"
        >
          Xem cảnh báo
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ParentDashboard",

  data() {
    return {
      summary: {
        totalChildren: 2,
        averageScore: 78,
        completedLessons: 24,
        alerts: 1
      },

      // dữ liệu từ bảng trẻ + tiến độ học tập
      children: [
        {
          id: 1,
          name: "Bé An",
          age: 5,
          progress: 75,
          score: 82,
          status: "Tốt"
        },
        {
          id: 2,
          name: "Bé Minh",
          age: 6,
          progress: 45,
          score: 68,
          status: "Cần chú ý"
        }
      ],

      // dữ liệu từ bảng cảnh báo / AI
      alerts: [
        {
          id: 1,
          title: "Bé Minh tiến bộ chậm",
          message: "Âm L/N vẫn còn phát âm sai nhiều lần trong tuần này.",
          level: "Cao"
        }
      ]
    };
  },

  methods: {
    goToChildList() {
      this.$router.push('/parent/child');
    },

    goToChildDetail(childId) {
      this.$router.push({
        path: '/parent/child/detail',
        query: {
          childId: childId
        }
      });
    },

    goToProgressOverview() {
      this.$router.push('/parent/progress/overview');
    },

    goToPracticeHistory() {
      this.$router.push('/parent/history/practice');
    },

    goToAlerts() {
      this.$router.push('/parent/notification/alerts');
    }
  }
};
</script>

<style scoped>
.parent-dashboard {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.child-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.child-card:hover {
  transform: translateY(-4px);
}
</style>