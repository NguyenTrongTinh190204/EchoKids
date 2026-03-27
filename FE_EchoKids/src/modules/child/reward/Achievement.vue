<template>
  <div class="container-fluid py-4 achievement-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Thành tích của bé
        </h4>

        <small class="text-muted">
          Xem huy hiệu, cấp độ và phần thưởng đã đạt được
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- LEVEL -->
    <div class="bg-primary text-white rounded-4 shadow-sm p-4 mb-4">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <small class="d-block mb-2 opacity-75">
            Cấp độ hiện tại
          </small>

          <h3 class="fw-bold mb-2">
            Level {{ currentLevel.level }}
          </h3>

          <p class="mb-3">
            {{ currentLevel.title }}
          </p>

          <div class="progress bg-white bg-opacity-25" style="height: 10px;">
            <div
              class="progress-bar bg-warning"
              :style="{ width: currentLevel.progress + '%' }"
            ></div>
          </div>

          <small class="d-block mt-2">
            {{ currentLevel.progress }}% để lên cấp tiếp theo
          </small>
        </div>

        <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
          <div class="reward-circle ms-lg-auto">
            {{ currentLevel.stars }} sao
          </div>
        </div>
      </div>
    </div>

    <!-- THỐNG KÊ -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 shadow-sm p-3 text-center h-100">
          <div class="fw-bold fs-3 text-primary">
            {{ stats.completedLessons }}
          </div>

          <small class="text-muted">
            Bài học hoàn thành
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 shadow-sm p-3 text-center h-100">
          <div class="fw-bold fs-3 text-success">
            {{ stats.totalStars }}
          </div>

          <small class="text-muted">
            Tổng số sao
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 shadow-sm p-3 text-center h-100">
          <div class="fw-bold fs-3 text-warning">
            {{ stats.bestScore }}
          </div>

          <small class="text-muted">
            Điểm cao nhất
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 shadow-sm p-3 text-center h-100">
          <div class="fw-bold fs-3 text-danger">
            {{ stats.practiceDays }}
          </div>

          <small class="text-muted">
            Ngày luyện tập
          </small>
        </div>
      </div>

    </div>

    <!-- HUY HIỆU -->
    <div class="bg-light rounded-4 shadow-sm p-4 mb-4">
      <div class="fw-bold mb-3">
        Huy hiệu đã đạt được
      </div>

      <div class="row g-3">
        <div
          v-for="badge in badges"
          :key="badge.id"
          class="col-lg-3 col-md-4 col-6"
        >
          <div class="bg-white rounded-4 border p-3 text-center h-100 badge-card">
            <div class="badge-icon mx-auto mb-3">
              {{ badge.shortName }}
            </div>

            <div class="fw-bold small mb-1">
              {{ badge.name }}
            </div>

            <small class="text-muted">
              {{ badge.description }}
            </small>
          </div>
        </div>
      </div>
    </div>

    <!-- PHẦN THƯỞNG GẦN ĐÂY -->
    <div class="bg-light rounded-4 shadow-sm p-4">
      <div class="fw-bold mb-3">
        Phần thưởng gần đây
      </div>

      <div
        v-for="reward in recentRewards"
        :key="reward.id"
        class="bg-white rounded-4 border p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div class="fw-bold">
              {{ reward.title }}
            </div>

            <small class="text-muted">
              {{ reward.date }}
            </small>
          </div>

          <span class="badge bg-success px-3 py-2">
            +{{ reward.stars }} sao
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Achievement",

  data() {
    return {
      currentLevel: {
        level: 5,
        title: "Người luyện phát âm chăm chỉ",
        progress: 72,
        stars: 128
      },

      stats: {
        completedLessons: 24,
        totalStars: 128,
        bestScore: 96,
        practiceDays: 35
      },

      badges: [
        {
          id: 1,
          shortName: "L",
          name: "Âm L giỏi",
          description: "Hoàn thành 5 bài luyện âm L"
        },
        {
          id: 2,
          shortName: "N",
          name: "Âm N xuất sắc",
          description: "Đạt trên 90 điểm ở âm N"
        },
        {
          id: 3,
          shortName: "S",
          name: "Nghe hiểu tốt",
          description: "Hoàn thành 10 bài nghe hiểu"
        },
        {
          id: 4,
          shortName: "5",
          name: "Luyện tập 5 ngày",
          description: "Học liên tiếp trong 5 ngày"
        }
      ],

      recentRewards: [
        {
          id: 1,
          title: "Hoàn thành bài Phân biệt âm L/N",
          date: "20/03/2026",
          stars: 10
        },
        {
          id: 2,
          title: "Đạt điểm trên 90",
          date: "18/03/2026",
          stars: 8
        },
        {
          id: 3,
          title: "Luyện tập liên tiếp 3 ngày",
          date: "16/03/2026",
          stars: 5
        }
      ]
    };
  },

  methods: {
    goBack() {
      this.$router.push('/child/home');
    }
  }
};
</script>

<style scoped>
.achievement-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.reward-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 6px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
}

.badge-card {
  transition: all 0.2s ease;
}

.badge-card:hover {
  transform: translateY(-4px);
}

.badge-icon {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, #0d6efd, #4da3ff);
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>