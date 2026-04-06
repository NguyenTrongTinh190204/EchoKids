<template>
<div class="page-full bg-light min-vh-100">
    <div class="content-wrapper py-5">
      <!-- Summary -->
      <div class="streak-header rounded-5 shadow-sm overflow-hidden mb-4">
        <div class="row align-items-center g-4">
          <div class="col-lg-5">
            <div class="d-flex align-items-center gap-4">
              <div class="streak-fire-wrap">
                <div class="streak-fire">
                  🔥
                </div>
              </div>

              <div>
                <span class="badge rounded-pill px-3 py-2 mb-3 streak-badge">
                  Chuỗi học hiện tại
                </span>

                <h2 class="fw-bold mb-2" style="color: #0d3b66;">
                  7 Ngày Liên Tiếp
                </h2>

                <p class="text-muted mb-0">
                  Bé đang duy trì việc học rất tốt mỗi ngày
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="row g-3">
              <div class="col-md-4">
                <div class="mini-card orange-card">
                  <div class="mini-icon orange-bg">⭐</div>
                  <div>
                    <h5 class="fw-bold mb-1">120 XP</h5>
                    <small>Điểm thưởng</small>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="mini-card blue-card">
                  <div class="mini-icon blue-bg">🏆</div>
                  <div>
                    <h5 class="fw-bold mb-1">3</h5>
                    <small>Huy hiệu</small>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="mini-card pink-card">
                  <div class="mini-icon pink-bg">🎁</div>
                  <div>
                    <h5 class="fw-bold mb-1">2</h5>
                    <small>Quà thưởng</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Week Streak -->
      <div class="bg-white rounded-5 shadow-sm p-4 mb-4">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h4 class="fw-bold mb-1" style="color: #0d3b66;">
              Chuỗi Học Tuần Này
            </h4>
            <p class="text-muted mb-0">
              Bé đã học đều đặn mỗi ngày
            </p>
          </div>

          <button class="btn btn-outline-primary rounded-pill px-4">
            Xem Tháng
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
              <small class="fw-bold d-block mb-2" style="font-size: 18px;">
                {{ day.label }}
              </small>

              <div class="day-icon" >
                {{ day.icon }}
              </div>

              <small class="d-block mt-2"  style="font-size: 18px;">
                {{ day.date }}
              </small>
            </div>
          </div>
        </div>
      </div>

      <!-- Badges -->
      <div class="bg-white rounded-5 shadow-sm p-4">
        <div class="mb-4">
          <h4 class="fw-bold mb-1" style="color: #0d3b66;">
            Huy Hiệu Đã Nhận
          </h4>
          <p class="text-muted mb-0">
            Các thành tích bé đã mở khóa
          </p>
        </div>

        <div class="row g-3">
          <div
            class="col-lg-3 col-md-6"
            v-for="badge in badges"
            :key="badge.id"
          >
            <div class="badge-card text-center">
              <div class="badge-icon" >
                {{ badge.icon }}
              </div>

              <h6 class="fw-bold mb-2" style="color: #0d3b66;font-size: 18px;">
                {{ badge.title }}
              </h6>

              <small class="text-muted" style="font-size: 18px;">
                {{ badge.description }}
              </small>
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
          description: "Học liên tục trong 3 ngày"
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
          title: "Siêu Sao",
          description: "Đạt hơn 100 XP"
        },
        {
          id: 4,
          icon: "🎁",
          title: "Quà Đầu Tiên",
          description: "Mở khóa quà thưởng"
        }
      ]
    };
  }
};
</script>

<style scoped>
.streak-header {
  background: linear-gradient(135deg, #fff7f2, #ffffff);
  padding: 30px;
  position: relative;
}

.streak-header::before {
  content: "";
  position: absolute;
  top: -60px;
  right: -60px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255, 183, 71, 0.12);
}

.streak-badge {
  background: #ffe6d8;
  color: #ff6b35;
  font-weight: 600;
}

.streak-fire-wrap {
  width: 120px;
  height: 120px;
  border-radius: 35px;
  background: rgba(255, 107, 53, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.streak-fire {
  width: 90px;
  height: 90px;
  border-radius: 30px;
  background: linear-gradient(135deg, #ff6b35, #ffb347);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: white;
  box-shadow: 0 12px 25px rgba(255, 107, 53, 0.2);
}

.mini-card {
  border-radius: 24px;
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.mini-card:hover {
  transform: translateY(-5px);
}

.orange-card {
  background: #fff7f2;
  border-color: #ffe1d0;
}

.blue-card {
  background: #f4f8ff;
  border-color: #dfeaff;
}

.pink-card {
  background: #fff5f8;
  border-color: #ffe1ec;
}

.mini-icon {
  width: 58px;
  height: 58px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.orange-bg {
  background: #ffe9dd;
}

.blue-bg {
  background: #e6f0ff;
}

.pink-bg {
  background: #ffe7f0;
}

.day-card {
  background: #f8f9fb;
  border-radius: 24px;
  padding: 18px 8px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.day-card:hover {
  transform: translateY(-4px);
}

.day-card.active {
  background: linear-gradient(135deg,#fceabb, #f8b9d4);
  color: rgb(37, 0, 124);
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.18);
}

.day-card.today {
  border-color: #0d3b66;
}

.day-icon {
  font-size: 24px;
}

.badge-card {
  background: #fffaf7;
  border-radius: 28px;
  padding: 24px 18px;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #fff0e8;
}

.badge-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.badge-icon {
  width: 78px;
  height: 78px;
  background: linear-gradient(135deg, #ff6b35, #ffb347);
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.15);
}

@media (max-width: 768px) {
  .streak-header {
    padding: 20px;
  }

  .streak-fire-wrap {
    width: 90px;
    height: 90px;
    border-radius: 28px;
  }

  .streak-fire {
    width: 70px;
    height: 70px;
    border-radius: 22px;
    font-size: 32px;
  }

  .mini-card {
    padding: 14px;
  }

  .mini-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .day-card {
    padding: 14px 4px;
  }

  .day-icon {
    font-size: 20px;
  }
}
.content-wrapper { width: 92%; max-width: 1650px; margin: 0 auto; } .page-full { width: 100vw; margin-left: calc(-50vw + 50%); }
</style>