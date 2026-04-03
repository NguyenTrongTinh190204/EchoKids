<script>
export default {
  name: "TestDetailPage",
  data() {
    return {
      isRecording: false
    };
  }
}
</script>

<template>
  <div class="bg-light min-vh-100">
    <div class="container py-4">
      <!-- Header -->
      <div class="bg-white rounded-5 shadow-sm p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="fw-bold" style="color: #0d3b66; font-size: 20px;">
            Câu 3 / 10
          </span>

          <span class="fw-bold text-danger" style="font-size: 22px;">
            ⏰ 01:25
          </span>
        </div>

        <div
          class="progress rounded-pill mb-2"
          style="height: 16px; width: 100%; background: #f1f1f1;"
        >
          <div
            class="progress-bar rounded-pill"
            role="progressbar"
            style="width: 30%; background: linear-gradient(135deg, #ff6b35, #ff8c42);"
          ></div>
        </div>

        <div class="text-end">
          <span class="fw-bold" style="color: #ff6b35; font-size: 16px;">
            Hoàn thành 30%
          </span>
        </div>
      </div>

      <!-- Nội dung kiểm tra -->
      <div class="row g-3">
        <!-- Cột trái -->
        <div class="col-lg-7">
          <div class="bg-white rounded-5 shadow-sm p-3 h-100">
            <div class="text-center mb-3">
              <h3 class="fw-bold mb-1" style="color: #0d3b66; font-size: 34px;">
                Bài Học: Động Vật Quanh Em
              </h3>

              <p class="text-muted mb-0">
                Bé hãy nhìn hình và đọc thật to tên con vật nhé
              </p>
            </div>

            <div class="position-relative mb-3">
              <img
                src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80"
                class="img-fluid rounded-5 shadow-sm"
                style="height: 380px; width: 100%; object-fit: cover;"
                alt=""
              />

              <div
                class="position-absolute top-0 start-0 m-3 badge rounded-pill px-3 py-2"
                style="background: rgba(255,255,255,0.95); color: #0d3b66; font-size: 15px;"
              >
                🐱 Con Mèo
              </div>
            </div>

            <div class="row g-2">
              <div class="col-6">
                <button class="btn btn-outline-primary rounded-pill py-3 fw-bold w-100">
                  🔊 Nghe Mẫu
                </button>
              </div>

              <div class="col-6">
                <button class="btn btn-outline-secondary rounded-pill py-3 fw-bold w-100">
                  🔄 Bỏ Qua
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cột phải -->
        <div class="col-lg-5">
          <div class="bg-white rounded-5 shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="text-center mb-3">
                <span class="badge bg-danger rounded-pill px-4 py-2 mb-3">
                  Thu Âm Giọng Nói
                </span>

                <button
                  class="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 microphone-box border-0"
                  @click="isRecording = !isRecording"
                  :class="{ 'recording-active': isRecording }"
                >
                  <span
                    v-if="!isRecording"
                    style="font-size: 70px;"
                  >
                    🎤
                  </span>

                  <div
                    v-else
                    class="d-flex justify-content-center align-items-end gap-2"
                    style="height: 70px;"
                  >
                    <div class="sound-bar"></div>
                    <div class="sound-bar bar-2"></div>
                    <div class="sound-bar bar-3"></div>
                    <div class="sound-bar bar-4"></div>
                    <div class="sound-bar bar-5"></div>
                  </div>
                </button>

                <p
                  class="fw-bold mb-2"
                  style="color: #ff6b35;"
                >
                  {{ isRecording ? 'Đang Ghi Âm...' : 'Nhấn vào micro để bắt đầu' }}
                </p>

                <p class="text-muted mb-3">
                  Bé hãy nói thật rõ từ trong hình
                </p>
              </div>
            </div>

            <div class="result-box rounded-5 p-3 mt-2">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 class="fw-bold mb-1" style="color: #0d3b66;">
                    Kết Quả AI
                  </h5>
                  <small class="text-muted">Đánh giá phát âm của bé</small>
                </div>

                <div class="rounded-circle d-flex align-items-center justify-content-center score-circle">
                  <span class="fw-bold fs-5 text-success">82</span>
                </div>
              </div>

              <div class="mb-3">
                <span class="badge bg-success rounded-pill px-3 py-2">
                  Phát Âm Khá Tốt
                </span>
              </div>

              <ul class="list-unstyled mb-3">
                <li class="mb-2 text-muted">✅ Bé phát âm khá rõ</li>
                <li class="mb-2 text-muted">⚠️ Âm "eo" chưa rõ</li>
                <li class="mb-2 text-muted">⚠️ Cần nói chậm hơn một chút</li>
                <li class="text-muted">🔁 Nên luyện thêm từ "mèo"</li>
              </ul>

              <div class="progress rounded-pill mb-3" style="height: 10px;">
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
    </div>
  </div>
</template>

<style scoped>
.microphone-box {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #fff1eb, #ffe4d9);
  border: 6px solid #ff8c42;
  box-shadow:
    0 0 0 8px rgba(255, 140, 66, 0.25),
    0 15px 35px rgba(255, 107, 53, 0.15);
  transition: all 0.3s ease;
}
.microphone-box:hover {
  transform: scale(1.05);
}

.recording-active {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  box-shadow: 0 15px 35px rgba(255, 107, 53, 0.3);
}

.score-circle {
  width: 70px;
  height: 70px;
  background: #e8faf5;
  border: 5px solid #d4f5e8;
}

.result-box {
  background: #f8fafc;
}

.sound-bar {
  width: 7px;
  height: 28px;
  background: #fff;
  border-radius: 20px;
  animation: soundWave 1s infinite ease-in-out;
}

.bar-2 {
  height: 45px;
  animation-delay: 0.2s;
}

.bar-3 {
  height: 60px;
  animation-delay: 0.4s;
}

.bar-4 {
  height: 45px;
  animation-delay: 0.6s;
}

.bar-5 {
  height: 28px;
  animation-delay: 0.8s;
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