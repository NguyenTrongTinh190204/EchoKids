<template>
  <div class="bg-light min-vh-100">
    <div class="container py-5">
      <!-- Banner -->
      <div class="streak-banner rounded-5 overflow-hidden shadow-sm mb-5">
        <div class="row align-items-center">
          <div class="col-lg-7 p-4 p-lg-5">
            <span class="badge rounded-pill px-4 py-2 mb-3 banner-badge">
              Chuỗi Ngày Học
            </span>

            <h1 class="banner-title mb-4">
              Giữ Lửa Học Tập<br />
              Mỗi Ngày
            </h1>

            <p class="banner-text mb-4">
              Học đều đặn mỗi ngày để tăng chuỗi streak, nhận huy hiệu và mở khóa nhiều phần quà thú vị nhé.
            </p>

            <div class="d-flex flex-wrap gap-3">
              <button class="btn streak-btn rounded-pill px-4 py-3 fw-bold text-white">
                Tiếp Tục Học
              </button>

              <button class="btn btn-light rounded-pill px-4 py-3 fw-bold border">
                Xem Thành Tích
              </button>
            </div>
          </div>

          <div class="col-lg-5 text-center position-relative py-5">
            <div class="fire-circle">
              🔥
            </div>

            <div class="floating-day day-top">
              7 Ngày
            </div>

            <div class="floating-day day-left">
              ⭐ 120 XP
            </div>

            <div class="floating-day day-right">
              🏆 Huy Hiệu
            </div>
          </div>
        </div>
      </div>

      <!-- Tổng quan -->
      <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
          <div class="card border-0 rounded-5 shadow-sm p-4 text-center streak-card">
            <div class="icon-circle orange-bg mb-3">
              🔥
            </div>
            <h2 class="fw-bold mb-1">7</h2>
            <p class="text-muted mb-0">Ngày liên tiếp</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card border-0 rounded-5 shadow-sm p-4 text-center streak-card">
            <div class="icon-circle yellow-bg mb-3">
              ⭐
            </div>
            <h2 class="fw-bold mb-1">120</h2>
            <p class="text-muted mb-0">XP nhận được</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card border-0 rounded-5 shadow-sm p-4 text-center streak-card">
            <div class="icon-circle blue-bg mb-3">
              🏆
            </div>
            <h2 class="fw-bold mb-1">3</h2>
            <p class="text-muted mb-0">Huy hiệu đã mở</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card border-0 rounded-5 shadow-sm p-4 text-center streak-card">
            <div class="icon-circle pink-bg mb-3">
              🎁
            </div>
            <h2 class="fw-bold mb-1">2</h2>
            <p class="text-muted mb-0">Quà thưởng</p>
          </div>
        </div>
      </div>

      <!-- Lịch học -->
      <div class="card border-0 rounded-5 shadow-sm p-4 mb-5">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h3 class="fw-bold mb-1" style="color: #0d3b66;">
              Chuỗi Học Tuần Này
            </h3>
            <p class="text-muted mb-0">
              Bé đã học đều đặn trong tuần này
            </p>
          </div>

          <button class="btn btn-outline-primary rounded-pill px-4">
            Xem Tháng Này
          </button>
        </div>

        <div class="row g-3">
          <div
            class="col"
            v-for="day in streakDays"
            :key="day.id"
          >
            <div
              class="day-card text-center"
              :class="{
                active: day.active,
                today: day.today
              }"
            >
              <p class="small fw-bold mb-2">
                {{ day.label }}
              </p>

              <div class="day-icon">
                {{ day.icon }}
              </div>

              <small class="d-block mt-2">
                {{ day.date }}
              </small>
            </div>
          </div>
        </div>
      </div>

      <!-- Huy hiệu -->
      <div class="card border-0 rounded-5 shadow-sm p-4">
        <div class="mb-4">
          <h3 class="fw-bold mb-1" style="color: #0d3b66;">
            Huy Hiệu Đã Nhận
          </h3>
          <p class="text-muted mb-0">
            Hoàn thành chuỗi học để mở khóa huy hiệu mới
          </p>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-6"
            v-for="badge in badges"
            :key="badge.id"
          >
            <div class="badge-card text-center">
              <div class="badge-icon">
                {{ badge.icon }}
              </div>

              <h5 class="fw-bold mb-2" style="color: #0d3b66;">
                {{ badge.title }}
              </h5>

              <p class="text-muted small mb-0">
                {{ badge.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StreakPage",
  data() {
    return {
      streakDays: [
        { id: 1, label: "T2", date: "01/04", icon: "🔥", active: true },
        { id: 2, label: "T3", date: "02/04", icon: "🔥", active: true },
        { id: 3, label: "T4", date: "03/04", icon: "🔥", active: true },
        { id: 4, label: "T5", date: "04/04", icon: "🔥", active: true },
        { id: 5, label: "T6", date: "05/04", icon: "🔥", active: true },
        { id: 6, label: "T7", date: "06/04", icon: "🔥", active: true, today: true },
        { id: 7, label: "CN", date: "07/04", icon: "⭐", active: false }
      ],
      badges: [
        {
          id: 1,
          icon: "🔥",
          title: "3 Ngày Liên Tiếp",
          description: "Hoàn thành học liên tục trong 3 ngày"
        },
        {
          id: 2,
          icon: "⭐",
          title: "7 Ngày Chăm Chỉ",
          description: "Duy trì streak trong 1 tuần"
        },
        {
          id: 3,
          icon: "🏆",
          title: "Siêu Sao Học Tập",
          description: "Đạt hơn 100 XP trong tuần"
        },
        {
          id: 4,
          icon: "🎁",
          title: "Nhận Quà Đầu Tiên",
          description: "Mở khóa phần quà đầu tiên"
        }
      ]
    };
  }
}
</script>

<style scoped>
.streak-banner {
  background: linear-gradient(135deg, #fff7f2, #ffffff);
}

.banner-badge {
  background: #ffe3d6;
  color: #ff6b35;
  font-weight: 600;
}

.banner-title {
  font-size: 58px;
  font-weight: bold;
  color: #0d3b66;
  line-height: 1.2;
  font-family: "Lobster Two", cursive;
}

.banner-text {
  font-size: 18px;
  color: #6c757d;
  max-width: 600px;
}

.streak-btn {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  transition: all 0.3s ease;
}

.streak-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(255, 107, 53, 0.25);
}

.fire-circle {
  width: 260px;
  height: 260px;
  margin: auto;
  background: linear-gradient(135deg, #ff6b35, #ffb347);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
}

.floating-day {
  position: absolute;
  background: white;
  border-radius: 50px;
  padding: 12px 20px;
  font-weight: bold;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.day-top {
  top: 30px;
  left: 60%;
}

.day-left {
  bottom: 50px;
  left: 10%;
}

.day-right {
  top: 50%;
  right: 5%;
}

.streak-card {
  transition: all 0.3s ease;
}

.streak-card:hover {
  transform: translateY(-8px);
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 24px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
}

.orange-bg {
  background: #fff1eb;
}

.yellow-bg {
  background: #fff8d9;
}

.blue-bg {
  background: #e8f1ff;
}

.pink-bg {
  background: #ffeaf3;
}

.day-card {
  background: #f8f9fb;
  border-radius: 24px;
  padding: 20px 10px;
  transition: all 0.3s ease;
}

.day-card.active {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: white;
}

.day-card.today {
  border: 3px solid #0d3b66;
}

.day-icon {
  font-size: 28px;
}

.badge-card {
  background: #fffaf7;
  border-radius: 28px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.badge-card:hover {
  transform: translateY(-8px);
}

.badge-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #ff6b35, #ffb347);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
}
</style>