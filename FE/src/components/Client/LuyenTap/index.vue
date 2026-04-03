<template>
  <div class="bg-light min-vh-100">
    <div class="container py-5">


      <!-- Chủ đề luyện tập -->
      <div class="mb-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold mb-1" style="color: #0d3b66;">
              Chủ Đề Luyện Tập
            </h2>
            <p class="text-muted mb-0">
              Chọn chủ đề bé muốn luyện phát âm hôm nay
            </p>
          </div>

          <button class="btn btn-outline-primary rounded-pill px-4">
            Xem Tất Cả
          </button>
        </div>

        <div class="row g-4">
          <div
            class="col-xl-3 col-lg-4 col-md-6"
            v-for="topic in topics"
            :key="topic.id"
          >
            <div class="card border-0 rounded-5 shadow-sm overflow-hidden lesson-card h-100">
              <div class="position-relative">
                <img
                  :src="topic.image"
                  class="card-img-top"
                  style="height: 220px; object-fit: cover;"
                  alt=""
                />

                <span
                  class="position-absolute top-0 start-0 badge rounded-pill px-3 py-2 m-3"
                  :style="{
                    backgroundColor: topic.topicColor,
                    color: '#fff'
                  }"
                >
                  {{ topic.totalLessons }} bài
                </span>
              </div>

              <div class="card-body p-4">
                <div
                  class="rounded-circle d-flex align-items-center justify-content-center shadow-sm mb-3"
                  :style="{
                    width: '70px',
                    height: '70px',
                    backgroundColor: topic.iconBg
                  }"
                >
                  <span style="font-size: 34px;">
                    {{ topic.icon }}
                  </span>
                </div>

                <h4 class="fw-bold mb-2" style="color: #0d3b66;">
                  {{ topic.title }}
                </h4>

                <p class="text-muted mb-4">
                  {{ topic.description }}
                </p>

                <button
                  class="btn w-100 rounded-pill py-3 fw-bold text-white"
                  :style="{ backgroundColor: topic.topicColor }"
                >
                  Luyện Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bài học gần đây -->
      <div>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold mb-1" style="color: #0d3b66;">
              Bài Học Gần Đây
            </h2>
            <p class="text-muted mb-0">
              Tiếp tục những bài học bé đang luyện
            </p>
          </div>

          <button class="btn btn-outline-success rounded-pill px-4">
            Xem Lịch Sử
          </button>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-4"
            v-for="lesson in recentLessons"
            :key="lesson.id"
          >
            <div class="card border-0 rounded-5 shadow-sm overflow-hidden lesson-card h-100">
              <img
                :src="lesson.image"
                class="w-100"
                style="height: 220px; object-fit: cover;"
                alt=""
              />

              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span
                    class="badge rounded-pill px-3 py-2"
                    :style="{
                      backgroundColor: lesson.iconBg,
                      color: lesson.topicColor
                    }"
                  >
                    {{ lesson.type }}
                  </span>

                  <span class="fw-bold" :style="{ color: lesson.topicColor }">
                    {{ lesson.progress }}%
                  </span>
                </div>

                <h4 class="fw-bold mb-2" style="color: #0d3b66;">
                  {{ lesson.title }}
                </h4>

                <p class="text-muted mb-4">
                  {{ lesson.description }}
                </p>

                <div class="mb-4">
                  <div
                    class="progress rounded-pill"
                    style="height: 10px; background-color: #f1f1f1;"
                  >
                    <div
                      class="progress-bar rounded-pill"
                      role="progressbar"
                      :style="{
                        width: lesson.progress + '%',
                        backgroundColor: lesson.topicColor
                      }"
                    ></div>
                  </div>
                </div>

                <button
                  class="btn w-100 rounded-pill py-3 fw-bold text-white"
                  :style="{ backgroundColor: lesson.topicColor }"
                >
                  Tiếp Tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            <!-- Banner -->
      <div class="position-relative overflow-hidden rounded-5 shadow-sm bg-white mt-5">
        <div class="row align-items-center">
          <div class="col-lg-6 p-4 p-lg-5">
            <span class="badge bg-warning text-dark rounded-pill px-4 py-2 mb-3 fs-6">
              Luyện Tập EchoKids
            </span>

            <h1
              class="fw-bold mb-4"
              style="
                color: #0d3b66;
                font-size: 58px;
                line-height: 1.2;
                font-family: 'Lobster Two', cursive;
              "
            >
              Cùng Bé Luyện<br />
              Phát Âm Mỗi Ngày
            </h1>

            <p class="text-secondary fs-5 mb-4" style="max-width: 600px;">
              Bé có thể nghe phát âm mẫu, ghi âm giọng nói và nhận kết quả
              chấm điểm từ AI với nhiều bài luyện tập thú vị.
            </p>

            <div class="d-flex flex-wrap gap-3 mb-4">
              <button class="btn start-btn rounded-pill px-4 py-3 fw-bold text-white">
                Bắt Đầu Luyện
              </button>

              <button class="btn btn-light border rounded-pill px-4 py-3 fw-bold shadow-sm">
                Xem Tiến Độ
              </button>
            </div>

            <div class="d-flex flex-wrap gap-4 mt-4">
            </div>
          </div>

          <div class="col-lg-6 position-relative text-center py-5">
            <div class="position-relative d-inline-block">
              <!-- vòng nền -->
              <div
                class="position-absolute top-50 start-50 translate-middle rounded-circle"
                style="
                  width: 460px;
                  height: 460px;
                  background: #fff3ef;
                  z-index: 1;
                "
              ></div>

              <!-- ảnh chính -->
              <div
                class="position-relative rounded-circle overflow-hidden shadow-lg"
                style="
                  width: 370px;
                  height: 370px;
                  border: 10px solid #fff;
                  z-index: 2;
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
                  class="w-100 h-100"
                  style="object-fit: cover;"
                  alt=""
                />
              </div>

              <!-- card nhỏ 1 -->
              <div
                class="position-absolute bg-white rounded-circle shadow-sm d-flex flex-column align-items-center justify-content-center text-center"
                style="
                  top: 25px;
                  left: -20px;
                  width: 110px;
                  height: 110px;
                  z-index: 3;
                  border: 6px solid #fff1eb;
                "
              >
                <div
                  class="rounded-circle d-flex align-items-center justify-content-center mb-2"
                  style="
                    width: 42px;
                    height: 42px;
                    background: #fff1eb;
                  "
                >
                  <span style="font-size: 20px;">🎤</span>
                </div>
                <p
                  class="mb-0 fw-bold"
                  style="
                    font-size: 13px;
                    color: #0d3b66;
                    line-height: 1.3;
                  "
                >
                  Ghi Âm
                </p>
              </div>

              <!-- card nhỏ 2 -->
              <div
                class="position-absolute bg-white rounded-circle shadow-sm d-flex flex-column align-items-center justify-content-center text-center"
                style="
                  bottom: -10px;
                  left: -15px;
                  width: 105px;
                  height: 105px;
                  z-index: 3;
                  border: 6px solid #e8faf5;
                "
              >
                <div
                  class="rounded-circle d-flex align-items-center justify-content-center mb-2"
                  style="
                    width: 40px;
                    height: 40px;
                    background: #e8faf5;
                  "
                >
                  <span style="font-size: 20px;">🔊</span>
                </div>
                <p
                  class="mb-0 fw-bold"
                  style="
                    font-size: 13px;
                    color: #0d3b66;
                    line-height: 1.3;
                  "
                >
                  Nghe Mẫu
                </p>
              </div>

              <!-- card nhỏ 3 -->
              <div
                class="position-absolute bg-white rounded-circle shadow-sm d-flex flex-column align-items-center justify-content-center text-center"
                style="
                  top: 190px;
                  right: -35px;
                  width: 105px;
                  height: 105px;
                  z-index: 4;
                  border: 6px solid #fff8e6;
                "
              >
                <div
                  class="rounded-circle d-flex align-items-center justify-content-center mb-2"
                  style="
                    width: 40px;
                    height: 40px;
                    background: #fff8e6;
                  "
                >
                  <span style="font-size: 20px;">🤖</span>
                </div>
                <p
                  class="mb-0 fw-bold"
                  style="
                    font-size: 13px;
                    color: #0d3b66;
                    line-height: 1.3;
                  "
                >
                  AI Chấm Điểm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "PracticePage",
  data() {
    return {
      topics: [
        {
          id: 1,
          title: "Bảng Chữ Cái",
          description: "Luyện phát âm từng chữ cái tiếng Việt từ A đến Y.",
          image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
          icon: "🔤",
          totalLessons: 29,
          topicColor: "#ff6b35",
          iconBg: "#fff1eb"
        },
        {
          id: 2,
          title: "Động Vật",
          description: "Học cách phát âm tên các con vật quen thuộc.",
          image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
          icon: "🐶",
          totalLessons: 12,
          topicColor: "#20c997",
          iconBg: "#e8faf5"
        },
        {
          id: 3,
          title: "Trái Cây",
          description: "Luyện nói tên các loại trái cây gần gũi mỗi ngày.",
          image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80",
          icon: "🍎",
          totalLessons: 10,
          topicColor: "#f4a100",
          iconBg: "#fff8e6"
        },
        {
          id: 4,
          title: "Gia Đình",
          description: "Học phát âm các từ về ba, mẹ, ông, bà.",
          image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
          icon: "👨‍👩‍👧",
          totalLessons: 8,
          topicColor: "#ff4d6d",
          iconBg: "#ffeaf0"
        }
      ],

      recentLessons: [
        {
          id: 1,
          title: "Phát Âm Chữ A",
          description: "Nghe mẫu, ghi âm và luyện phát âm chữ A.",
          image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
          type: "Âm",
          progress: 80,
          topicColor: "#ff6b35",
          iconBg: "#fff1eb"
        },
        {
          id: 2,
          title: "Từ: Con Mèo",
          description: "Luyện nói từ mèo và các câu đơn giản.",
          image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
          type: "Từ",
          progress: 60,
          topicColor: "#20c997",
          iconBg: "#e8faf5"
        },
        {
          id: 3,
          title: "Câu: Con Chào Mẹ",
          description: "Luyện đọc câu giao tiếp đơn giản hằng ngày.",
          image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
          type: "Câu",
          progress: 35,
          topicColor: "#f4a100",
          iconBg: "#fff8e6"
        }
      ]
    };
  }
}
</script>

<style scoped>
.start-btn {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  transition: all 0.3s ease;
}

.start-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(255, 107, 53, 0.25);
}

.lesson-card {
  transition: all 0.3s ease;
}

.lesson-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12) !important;
}

.lesson-card img {
  transition: all 0.4s ease;
}

.lesson-card:hover img {
  transform: scale(1.05);
}
</style>