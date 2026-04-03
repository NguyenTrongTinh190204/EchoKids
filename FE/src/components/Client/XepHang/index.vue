
<template>
  <div class="bg-light min-vh-100 py-5">
    <div class="container">
      <!-- Top 3 -->
      <div class="row justify-content-center align-items-end g-4 mb-5">
        <div
          v-for="item in topThree"
          :key="item.id"
          :class="[
            item.rank === 1 ? 'col-lg-4 col-md-5 col-12' : 'col-lg-3 col-md-4 col-12'
          ]"
        >
          <div
            class="card border-0 rounded-5 text-center p-4 top-card h-100 position-relative overflow-hidden"
            :class="item.cardClass"
          >
            <div
              class="top-bg-circle"
              :class="item.bgClass"
            ></div>

            <div
              v-if="item.rank === 1"
              class="winner-crown"
            >
              👑
            </div>

            <div class="position-relative mx-auto mb-3 mt-2">
              <div
                class="avatar-ring"
                :class="item.ringClass"
              >
                <img
                  :src="item.avatar"
                  class="rounded-circle avatar-image"
                  :class="item.rank === 1 ? 'avatar-large' : 'avatar-small'"
                  alt=""
                />
              </div>

              <div
                class="top-rank-badge"
                :class="item.badgeClass"
              >
                {{ item.rank }}
              </div>
            </div>

            <h4
              class="fw-bold mb-1"
              :class="item.rank === 1 ? 'fs-3' : 'fs-5'"
            >
              {{ item.name }}
            </h4>

            <div class="small text-muted mb-2">
              {{ item.score }} điểm
            </div>

            <div class="small fw-semibold mb-3 top-label">
              {{ item.label }}
            </div>

            <div class="top-progress">
              <div
                class="top-progress-bar"
                :class="item.progressClass"
                :style="{ width: item.progress + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ranking List -->
      <div class="bg-white rounded-5 shadow-sm p-4 p-lg-5 leaderboard-box">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h3 class="fw-bold mb-1 title-text">
              Bảng Xếp Hạng Tuần
            </h3>
            <p class="text-muted mb-0">
              Xem thứ hạng của bé và các bạn khác
            </p>
          </div>

          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-primary rounded-pill px-4 shadow-sm">
              Tuần Này
            </button>
            <button class="btn btn-outline-primary rounded-pill px-4">
              Tháng Này
            </button>
          </div>
        </div>

        <div
          class="ranking-scroll-area"
          ref="rankingContainer"
          @scroll="handleScroll"
        >
          <div
            class="ranking-item"
            v-for="(item, index) in rankingList"
            :key="item.id"
          >
            <div class="d-flex align-items-center gap-3 flex-grow-1">
              <div class="rank-number">
                {{ index + 4 }}
              </div>

              <img
                :src="item.avatar"
                class="rounded-circle shadow-sm user-avatar"
                alt=""
              />

              <div>
                <h6 class="fw-bold mb-1 title-text">
                  {{ item.name }}
                </h6>

                <small class="text-muted d-block mb-2">
                  {{ item.streak }}
                </small>

                <div class="progress rounded-pill custom-progress">
                  <div
                    class="progress-bar bg-warning"
                    :style="{ width: item.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <div class="text-end right-info">
              <h6 class="fw-bold mb-1 score-text">
                {{ item.score }} điểm
              </h6>

              <small class="text-success d-block mb-2">
                +{{ item.gain }} hôm nay
              </small>

              <span class="badge bg-light text-dark rounded-pill px-3 py-2 border">
                Level {{ item.level }}
              </span>
            </div>
          </div>

          <!-- Sticky My Rank -->
          <transition name="fade-slide">
            <div
              v-if="showStickyRank"
              class="sticky-my-rank"
            >
              <div class="ranking-item my-rank-item mb-0 border-0">
                <div class="d-flex align-items-center gap-3 flex-grow-1">
                  <div class="rank-number my-rank-number">
                    10
                  </div>

                  <img
                    src="/Client/images/user.jpg"
                    class="rounded-circle shadow-sm user-avatar"
                    alt=""
                  />

                  <div>
                    <h6 class="fw-bold mb-1 title-text">
                      Bạn
                    </h6>

                    <small class="text-muted d-block mb-2">
                      🔥 3 ngày liên tiếp
                    </small>

                    <div class="progress rounded-pill custom-progress">
                      <div
                        class="progress-bar bg-danger"
                        style="width: 45%"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="text-end right-info">
                  <h6 class="fw-bold mb-1 score-text">
                    720 điểm
                  </h6>

                  <small class="text-success d-block mb-2">
                    +15 hôm nay
                  </small>

                  <span class="badge bg-warning text-dark rounded-pill px-3 py-2">
                    Level 4
                  </span>
                </div>
              </div>
            </div>
          </transition>

          <!-- My Rank Row -->
          <div
            ref="myRankRow"
            class="ranking-item my-rank-item mt-3"
          >
            <div class="d-flex align-items-center gap-3 flex-grow-1">
              <div class="rank-number my-rank-number">
                10
              </div>

              <img
                src="/Client/images/user.jpg"
                class="rounded-circle shadow-sm user-avatar"
                alt=""
              />

              <div>
                <h6 class="fw-bold mb-1 title-text">
                  Bạn
                </h6>

                <small class="text-muted d-block mb-2">
                  🔥 3 ngày liên tiếp
                </small>

                <div class="progress rounded-pill custom-progress">
                  <div
                    class="progress-bar bg-danger"
                    style="width: 45%"
                  ></div>
                </div>
              </div>
            </div>

            <div class="text-end right-info">
              <h6 class="fw-bold mb-1 score-text">
                720 điểm
              </h6>

              <small class="text-success d-block mb-2">
                +15 hôm nay
              </small>

              <span class="badge bg-warning text-dark rounded-pill px-3 py-2">
                Level 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeaderboardPage",

  data() {
    return {
      showStickyRank: false,

      topThree: [
        {
          id: 1,
          rank: 2,
          name: "Minh Anh",
          avatar: "/Client/images/team-2.jpg",
          score: '1,250',
          label: '🔥 12 ngày liên tiếp',
          progress: 82,
          cardClass: 'second-place shadow-sm',
          bgClass: 'second-bg',
          ringClass: 'silver-ring',
          badgeClass: 'silver-badge',
          progressClass: 'second-progress'
        },
        {
          id: 2,
          rank: 1,
          name: "Quốc Bảo",
          avatar: "/Client/images/team-1.jpg",
          score: '1,580',
          label: '🏆 Nhà vô địch tuần này',
          progress: 100,
          cardClass: 'first-place shadow',
          bgClass: 'first-bg',
          ringClass: 'gold-ring',
          badgeClass: 'gold-badge',
          progressClass: 'first-progress'
        },
        {
          id: 3,
          rank: 3,
          name: "Bảo Ngọc",
          avatar: "/Client/images/team-3.jpg",
          score: '1,080',
          label: '⭐ Học chăm chỉ',
          progress: 70,
          cardClass: 'third-place shadow-sm',
          bgClass: 'third-bg',
          ringClass: 'bronze-ring',
          badgeClass: 'bronze-badge',
          progressClass: 'third-progress'
        }
      ],

      rankingList: [
        {
          id: 1,
          name: "Tuấn Kiệt",
          avatar: "/Client/images/team-1.jpg",
          score: 980,
          streak: "🔥 8 ngày liên tiếp",
          gain: 50,
          progress: 90,
          level: 8
        },
        {
          id: 2,
          name: "Khánh Vy",
          avatar: "/Client/images/team-2.jpg",
          score: 920,
          streak: "🔥 7 ngày liên tiếp",
          gain: 40,
          progress: 85,
          level: 7
        },
        {
          id: 3,
          name: "Gia Hân",
          avatar: "/Client/images/team-3.jpg",
          score: 870,
          streak: "🔥 6 ngày liên tiếp",
          gain: 35,
          progress: 80,
          level: 7
        },
        {
          id: 4,
          name: "Hoàng Nam",
          avatar: "/Client/images/user.jpg",
          score: 820,
          streak: "🔥 5 ngày liên tiếp",
          gain: 25,
          progress: 75,
          level: 6
        },
        {
          id: 5,
          name: "Thanh Thảo",
          avatar: "/Client/images/team-2.jpg",
          score: 790,
          streak: "🔥 4 ngày liên tiếp",
          gain: 20,
          progress: 70,
          level: 6
        },
        {
          id: 6,
          name: "Bảo Trân",
          avatar: "/Client/images/team-3.jpg",
          score: 760,
          streak: "🔥 3 ngày liên tiếp",
          gain: 18,
          progress: 65,
          level: 5
        },
        {
          id: 7,
          name: "Ngọc Hân",
          avatar: "/Client/images/team-1.jpg",
          score: 730,
          streak: "🔥 2 ngày liên tiếp",
          gain: 14,
          progress: 60,
          level: 5
        }
      ]
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.handleScroll();
      window.addEventListener("resize", this.handleScroll);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const container = this.$refs.rankingContainer;
      const myRankRow = this.$refs.myRankRow;

      if (!container || !myRankRow) return;

      const containerRect = container.getBoundingClientRect();
      const rowRect = myRankRow.getBoundingClientRect();

      const isVisible =
        rowRect.bottom > containerRect.top &&
        rowRect.top < containerRect.bottom;

      this.showStickyRank = !isVisible;
    }
  }
};
</script>

<style scoped>
.title-text {
  color: #0d3b66;
}

.score-text {
  color: #ff6b35;
}

.top-label {
  color: #ff9f1c;
}

.leaderboard-box {
  border: 1px solid #f2f2f2;
}

.top-card {
  background: #fff;
  transition: all 0.35s ease;
}

.top-card:hover {
  transform: translateY(-10px);
}

.first-place {
  border: 2px solid #ffe29a;
}

.second-place {
  border: 2px solid #e3e7ee;
}

.third-place {
  border: 2px solid #f0d5c3;
}

.top-bg-circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  opacity: 0.25;
}

.first-bg {
  background: #ffd54f;
}

.second-bg {
  background: #cdd5df;
}

.third-bg {
  background: #e0ab88;
}

.avatar-ring {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.gold-ring {
  background: linear-gradient(135deg, #ffd54f, #fff3bf);
}

.silver-ring {
  background: linear-gradient(135deg, #bcc5d0, #eef2f7);
}

.bronze-ring {
  background: linear-gradient(135deg, #c77d4e, #f4d3be);
}

.avatar-image {
  object-fit: cover;
  border: 4px solid #fff;
}

.avatar-large {
  width: 100px;
  height: 100px;
}

.avatar-small {
  width: 88px;
  height: 88px;
}

.top-rank-badge {
  position: absolute;
  bottom: -4px;
  right: 8px;
  min-width: 42px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

.gold-badge {
  background: linear-gradient(135deg, #ffb300, #ffd54f);
  color: #5a3d00;
}

.silver-badge {
  background: linear-gradient(135deg, #7d8796, #bcc5d0);
  color: white;
}

.bronze-badge {
  background: linear-gradient(135deg, #b76b3d, #d89b73);
  color: white;
}

.winner-crown {
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 28px;
}

.top-progress {
  width: 100%;
  height: 10px;
  background: #f2f4f7;
  border-radius: 999px;
  overflow: hidden;
}

.top-progress-bar {
  height: 100%;
  border-radius: 999px;
}

.first-progress {
  background: linear-gradient(90deg, #ffb300, #ffd54f);
}

.second-progress {
  background: linear-gradient(90deg, #8a94a5, #c6ced8);
}

.third-progress {
  background: linear-gradient(90deg, #b76b3d, #d89b73);
}

.ranking-scroll-area {
  max-height: 600px;
  overflow-y: auto;
  padding-right: 8px;
  position: relative;
}

.ranking-scroll-area::-webkit-scrollbar {
  width: 8px;
}

.ranking-scroll-area::-webkit-scrollbar-thumb {
  background: #ffb08d;
  border-radius: 999px;
}

.ranking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px;
  border-bottom: 1px solid #f3f3f3;
  border-radius: 22px;
  transition: all 0.3s ease;
}

.ranking-item:hover {
  background: #fffaf7;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.rank-number {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: #fff1eb;
  color: #ff6b35;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-avatar {
  width: 65px;
  height: 65px;
  object-fit: cover;
}

.custom-progress {
  width: 160px;
  height: 8px;
  background: #f1f3f6;
}

.my-rank-item {
  background: linear-gradient(135deg, #fff3ef, #fffaf7);
  border: 2px solid #ffd3c1;
  box-shadow: 0 10px 24px rgba(255, 107, 53, 0.1);
}

.my-rank-number {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: white;
}

.sticky-my-rank {
  position: sticky;
  bottom: 0;
  z-index: 20;
  background: #fff;
  padding: 12px 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

@media (max-width: 768px) {
  .ranking-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .right-info {
    width: 100%;
    text-align: left !important;
  }

  .custom-progress {
    width: 100%;
    min-width: 120px;
  }

  .avatar-ring {
    width: 90px;
    height: 90px;
  }

  .avatar-large,
  .avatar-small {
    width: 74px;
    height: 74px;
  }
}
</style>

