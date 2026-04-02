<template>
  <div class="bg-light min-vh-100">
    <div class="container py-5">
      <!-- Header -->
      <div class="bg-white rounded-5 shadow-sm p-4 mb-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-3 mb-lg-0">
            <span class="badge bg-warning text-dark rounded-pill px-4 py-2 mb-3">
              Bài Kiểm Tra Phát Âm
            </span>

            <h2 class="fw-bold mb-2" style="color: #0d3b66;">
              Chủ Đề: Động Vật Quanh Em
            </h2>

            <p class="text-muted mb-0">
              Câu 3 / 10 - Bé hãy nhìn hình và đọc thật to nhé
            </p>
          </div>

          <div class="col-lg-6 text-lg-end">
            <div class="d-flex flex-column align-items-lg-end">
              <div class="mb-2">
                <span class="fw-bold text-danger fs-5">⏰ 01:25</span>
              </div>

              <div
                class="progress rounded-pill"
                style="height: 12px; width: 250px; background: #f1f1f1;"
              >
                <div
                  class="progress-bar rounded-pill"
                  role="progressbar"
                  style="width: 30%; background: linear-gradient(135deg, #ff6b35, #ff8c42);"
                ></div>
              </div>

              <small class="text-muted mt-2">Đã hoàn thành 30%</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Nội dung kiểm tra -->
      <div class="row g-4 mb-4">
        <!-- Cột trái -->
        <div class="col-lg-6">
          <div class="bg-white rounded-5 shadow-sm p-4 h-100">
            <div class="text-center">
              <span class="badge bg-success rounded-pill px-4 py-2 mb-3">
                Hình Ảnh Cần Đọc
              </span>

              <div class="position-relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80"
                  class="img-fluid rounded-5 shadow-sm"
                  style="height: 380px; width: 100%; object-fit: cover;"
                  alt=""
                />

                <div
                  class="position-absolute top-0 start-0 m-3 badge rounded-pill px-3 py-2"
                  style="background: rgba(255,255,255,0.9); color: #0d3b66;"
                >
                  🐱 Con Mèo
                </div>
              </div>

              <div class="d-flex justify-content-center gap-3 flex-wrap">
                <button class="btn btn-outline-primary rounded-pill px-4 py-3 fw-bold">
                  🔊 Nghe Mẫu
                </button>

                <button class="btn btn-outline-secondary rounded-pill px-4 py-3 fw-bold">
                  🔄 Đổi Câu Khác
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cột phải -->
        <div class="col-lg-6">
          <div class="bg-white rounded-5 shadow-sm p-4 h-100">
            <div class="text-center mb-4">
              <span class="badge bg-danger rounded-pill px-4 py-2 mb-3">
                Thu Âm Giọng Nói
              </span>

              <div
                class="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 microphone-box"
              >
                <span style="font-size: 80px;">🎤</span>
              </div>

              <button class="btn start-btn rounded-pill px-5 py-3 fw-bold text-white mb-3">
                Bắt Đầu Ghi Âm
              </button>

              <p class="text-muted mb-0">
                Bé hãy nói thật rõ từ trong hình
              </p>
            </div>

            <!-- Sóng âm -->
            <div class="d-flex justify-content-center align-items-end gap-2 mb-4">
              <div class="sound-bar"></div>
              <div class="sound-bar bar-2"></div>
              <div class="sound-bar bar-3"></div>
              <div class="sound-bar bar-4"></div>
              <div class="sound-bar bar-5"></div>
            </div>

            <!-- Kết quả -->
            <div class="result-box rounded-5 p-4">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5 class="fw-bold mb-1" style="color: #0d3b66;">
                    Kết Quả AI
                  </h5>
                  <small class="text-muted">Đánh giá phát âm của bé</small>
                </div>

                <div
                  class="rounded-circle d-flex align-items-center justify-content-center score-circle"
                >
                  <span class="fw-bold fs-4 text-success">82</span>
                </div>
              </div>

              <div class="mb-3">
                <span class="badge bg-success rounded-pill px-3 py-2">
                  Phát Âm Khá Tốt
                </span>
              </div>

              <ul class="list-unstyled mb-4">
                <li class="mb-2 text-muted">
                  ✅ Bé phát âm khá rõ
                </li>

                <li class="mb-2 text-muted">
                  ⚠️ Âm "eo" chưa rõ
                </li>

                <li class="mb-2 text-muted">
                  ⚠️ Cần nói chậm hơn một chút
                </li>

                <li class="text-muted">
                  🔁 Nên luyện thêm từ "mèo"
                </li>
              </ul>

              <div class="progress rounded-pill mb-4" style="height: 12px;">
                <div
                  class="progress-bar rounded-pill bg-success"
                  role="progressbar"
                  style="width: 82%;"
                ></div>
              </div>

              <button class="btn btn-success rounded-pill px-4 py-3 fw-bold w-100">
                Câu Tiếp Theo
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Danh sách câu hỏi phía dưới -->
      <div class="bg-white rounded-5 shadow-sm p-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 class="fw-bold mb-1" style="color: #0d3b66;">
              Danh Sách Câu Hỏi
            </h4>
            <p class="text-muted mb-0">
              Theo dõi tiến độ từng câu trong bài kiểm tra
            </p>
          </div>

          <button class="btn btn-outline-primary rounded-pill px-4">
            Xem Chi Tiết
          </button>
        </div>

        <div class="row g-3">
          <div
            class="col-lg-3 col-md-4 col-6"
            v-for="item in questionList"
            :key="item.id"
          >
            <div
              class="question-card rounded-4 p-3 text-center"
              :style="{
                backgroundColor: item.bgColor
              }"
            >
              <div class="mb-2" style="font-size: 34px;">
                {{ item.icon }}
              </div>

              <h6 class="fw-bold mb-1" style="color: #0d3b66;">
                {{ item.title }}
              </h6>

              <small class="text-muted d-block mb-2">
                {{ item.score }}/100 điểm
              </small>

              <span
                class="badge rounded-pill px-3 py-2"
                :style="{
                  backgroundColor: item.badgeColor,
                  color: '#fff'
                }"
              >
                {{ item.status }}
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
  name: "TestDetailPage",
  data() {
    return {
      questionList: [
        {
          id: 1,
          title: "Chữ A",
          icon: "🔤",
          score: 95,
          status: "Hoàn Thành",
          bgColor: "#fff1eb",
          badgeColor: "#ff6b35"
        },
        {
          id: 2,
          title: "Con Chó",
          icon: "🐶",
          score: 88,
          status: "Hoàn Thành",
          bgColor: "#e8faf5",
          badgeColor: "#20c997"
        },
        {
          id: 3,
          title: "Con Mèo",
          icon: "🐱",
          score: 82,
          status: "Đang Làm",
          bgColor: "#fff8e6",
          badgeColor: "#f4a100"
        },
        {
          id: 4,
          title: "Quả Táo",
          icon: "🍎",
          score: 0,
          status: "Chưa Làm",
          bgColor: "#ffeaf0",
          badgeColor: "#ff4d6d"
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

.microphone-box {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #fff1eb, #ffe4d9);
  border: 10px solid #fff;
  box-shadow: 0 15px 35px rgba(255, 107, 53, 0.15);
}

.score-circle {
  width: 80px;
  height: 80px;
  background: #e8faf5;
  border: 6px solid #d4f5e8;
}

.result-box {
  background: #f8fafc;
}

.sound-bar {
  width: 8px;
  height: 30px;
  background: #ff6b35;
  border-radius: 20px;
  animation: soundWave 1s infinite ease-in-out;
}

.bar-2 {
  height: 50px;
  animation-delay: 0.2s;
}

.bar-3 {
  height: 70px;
  animation-delay: 0.4s;
}

.bar-4 {
  height: 50px;
  animation-delay: 0.6s;
}

.bar-5 {
  height: 30px;
  animation-delay: 0.8s;
}

.question-card {
  transition: all 0.3s ease;
}

.question-card:hover {
  transform: translateY(-5px);
}

@keyframes soundWave {
  0% {
    transform: scaleY(1);
    opacity: 0.7;
  }
  50% {
    transform: scaleY(1.6);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    opacity: 0.7;
  }
}
</style>