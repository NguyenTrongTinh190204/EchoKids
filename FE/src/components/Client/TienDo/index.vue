<template>
  <div class="page-full bg-light min-vh-100">
     <div class="content-wrapper py-5">
<!-- Header -->
<div
  class="rounded-5 p-4 mb-4 position-relative overflow-hidden shadow-sm"
  style="
    background: linear-gradient(135deg, #ff8c42, #ff6b35);
  "
>
  <div
    class="position-absolute rounded-circle"
    style="
      width: 180px;
      height: 180px;
      background: rgba(255,255,255,0.08);
      top: -50px;
      right: -50px;
    "
  ></div>

  <div class="row align-items-center position-relative">
    <div class="col-lg-8">
      <span class="badge bg-white text-dark rounded-pill px-3 py-2 mb-3">
        Tiến Độ Học Tập
      </span>

      <h2
        class="fw-bold text-white mb-2"
        style="
          font-size: 40px;
          font-family: 'Lobster Two', cursive;
        "
      >
        Bé Đang Tiến Bộ Mỗi Ngày 🎉
      </h2>

      <p class="text-white mb-3" style="max-width: 600px;">
        Theo dõi số bài học đã hoàn thành, điểm phát âm và chuỗi ngày học của bé.
      </p>

      <div class="d-flex flex-wrap gap-2">
        <div class="rounded-4 px-3 py-2 progress-top-box">
          <h6 class="fw-bold mb-0 text-white">18 Bài Học</h6>
        </div>

        <div class="rounded-4 px-3 py-2 progress-top-box">
          <h6 class="fw-bold mb-0 text-white">82% Phát Âm</h6>
        </div>

        <div class="rounded-4 px-3 py-2 progress-top-box">
          <h6 class="fw-bold mb-0 text-white">5🔥 Streak</h6>
        </div>
      </div>
    </div>

    <div class="col-lg-4 text-center mt-4 mt-lg-0">
      <div
        class="rounded-circle d-inline-flex align-items-center justify-content-center"
        style="
          width: 140px;
          height: 140px;
          background: rgba(255,255,255,0.15);
          border: 8px solid rgba(255,255,255,0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        "
      >
        <span style="font-size: 60px;">📈</span>
      </div>
    </div>
  </div>
</div>

<!-- Thống kê -->
<div class="row g-3 mb-4">
  <div class="col-lg-3 col-md-6">
    <div
      class="bg-white rounded-5 shadow-sm p-3 h-100 progress-card"
      style="border-top: 4px solid #ff8c42;"
    >
      <div class="d-flex align-items-center gap-3">
        <div
          class="rounded-circle d-flex align-items-center justify-content-center"
          style="
            width: 65px;
            height: 65px;
            background: #fff1eb;
            flex-shrink: 0;
          "
        >
          <span style="font-size: 30px;">📚</span>
        </div>

        <div>
          <h4 class="fw-bold mb-1" style="color: #0d3b66;">18</h4>
          <p class="text-muted mb-0 small">Bài Học Đã Hoàn Thành</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6">
    <div
      class="bg-white rounded-5 shadow-sm p-3 h-100 progress-card"
      style="border-top: 4px solid #67d11f;"
    >
      <div class="d-flex align-items-center gap-3">
        <div
          class="rounded-circle d-flex align-items-center justify-content-center"
          style="
            width: 65px;
            height: 65px;
            background: #fff8e6;
            flex-shrink: 0;
          "
        >
          <span style="font-size: 30px;">🔥</span>
        </div>

        <div>
          <h4 class="fw-bold mb-1" style="color: #0d3b66;">5 Ngày</h4>
          <p class="text-muted mb-0 small">Chuỗi Học Liên Tiếp</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6">
    <div
      class="bg-white rounded-5 shadow-sm p-3 h-100 progress-card"
      style="border-top: 4px solid #36a2eb;"
    >
      <div class="d-flex align-items-center gap-3">
        <div
          class="rounded-circle d-flex align-items-center justify-content-center"
          style="
            width: 65px;
            height: 65px;
            background: #eaf8f0;
            flex-shrink: 0;
          "
        >
          <span style="font-size: 30px;">🎯</span>
        </div>

        <div>
          <h4 class="fw-bold mb-1" style="color: #0d3b66;">82%</h4>
          <p class="text-muted mb-0 small">Điểm Phát Âm Trung Bình</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6">
    <div
      class="bg-white rounded-5 shadow-sm p-3 h-100 progress-card"
      style="border-top: 4px solid #9b5de5;"
    >
      <div class="d-flex align-items-center gap-3">
        <div
          class="rounded-circle d-flex align-items-center justify-content-center"
          style="
            width: 65px;
            height: 65px;
            background: #f3ebff;
            flex-shrink: 0;
          "
        >
          <span style="font-size: 30px;">🏆</span>
        </div>

        <div>
          <h4 class="fw-bold mb-1" style="color: #0d3b66;">Top 8</h4>
          <p class="text-muted mb-0 small">Xếp Hạng Tuần Này</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <!-- Tiến độ chủ đề -->
      <div class="bg-white rounded-5 shadow-sm p-4 mb-4">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <div>
            <h3 class="fw-bold mb-1" style="color: #0d3b66;">
              Tiến Độ Theo Chủ Đề
            </h3>
            <p class="text-muted mb-0">
              Các chủ đề bé đã học và mức độ hoàn thành
            </p>
          </div>

          <button
            class="btn rounded-pill px-4 py-2 fw-bold text-white"
            style="
              background: linear-gradient(135deg, #ff8c42, #ff6b35);
              box-shadow: 0 10px 20px rgba(255, 107, 53, 0.2);
            "
          >
            Xem Chi Tiết
          </button>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div
              class="rounded-5 p-4 h-100 topic-card"
              style="
                background: linear-gradient(135deg, #fff8f5, #fff);
                border: 2px solid #ffe4d9;
              "
            >
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-3">
                  <div
                    class="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style="
                      width: 70px;
                      height: 70px;
                      background: #ffe4d9;
                      font-size: 30px;
                    "
                  >
                    🐶
                  </div>

                  <div>
                    <h5 class="fw-bold mb-1" style="color: #0d3b66;">
                      Động Vật
                    </h5>
                    <small class="text-muted">8 / 10 bài học</small>
                  </div>
                </div>

                <div
                  class="topic-percent"
                  style="
                    color: #ff6b35;
                    border: 2px solid #ffd7c8;
                  "
                >
                  80%
                </div>
              </div>

              <div
                class="progress rounded-pill mb-3"
                style="height: 16px; background: #f1f1f1;"
              >
                <div
                  class="progress-bar rounded-pill"
                  role="progressbar"
                  style="
                    width: 80%;
                    background: linear-gradient(135deg, #ff8c42, #ff6b35);
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div
              class="rounded-5 p-4 h-100 topic-card"
              style="
                background: linear-gradient(135deg, #eefaf3, #fff);
                border: 2px solid #dff6e7;
              "
            >
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-3">
                  <div
                    class="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style="
                      width: 70px;
                      height: 70px;
                      background: #dff6e7;
                      font-size: 30px;
                    "
                  >
                    🍎
                  </div>

                  <div>
                    <h5 class="fw-bold mb-1" style="color: #0d3b66;">
                      Trái Cây
                    </h5>
                    <small class="text-muted">6 / 10 bài học</small>
                  </div>
                </div>

                <div
                  class="topic-percent"
                  style="
                    color: #27ae60;
                    border: 2px solid #ccefd8;
                  "
                >
                  60%
                </div>
              </div>

              <div
                class="progress rounded-pill mb-3"
                style="height: 16px; background: #f1f1f1;"
              >
                <div
                  class="progress-bar rounded-pill bg-success"
                  role="progressbar"
                  style="width: 60%;"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div
              class="rounded-5 p-4 h-100 topic-card"
              style="
                background: linear-gradient(135deg, #eef5ff, #fff);
                border: 2px solid #dbeeff;
              "
            >
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-3">
                  <div
                    class="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style="
                      width: 70px;
                      height: 70px;
                      background: #dbeeff;
                      font-size: 30px;
                    "
                  >
                    🔤
                  </div>

                  <div>
                    <h5 class="fw-bold mb-1" style="color: #0d3b66;">
                      Bảng Chữ Cái
                    </h5>
                    <small class="text-muted">10 / 10 bài học</small>
                  </div>
                </div>

                <div
                  class="topic-percent"
                  style="
                    color: #0984e3;
                    border: 2px solid #c8e4ff;
                  "
                >
                  100%
                </div>
              </div>

              <div
                class="progress rounded-pill mb-3"
                style="height: 16px; background: #f1f1f1;"
              >
                <div
                  class="progress-bar rounded-pill"
                  role="progressbar"
                  style="
                    width: 100%;
                    background: linear-gradient(135deg, #36a2eb, #4cc9f0);
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div
              class="rounded-5 p-4 h-100 topic-card"
              style="
                background: linear-gradient(135deg, #f7f0ff, #fff);
                border: 2px solid #eadcff;
              "
            >
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-3">
                  <div
                    class="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style="
                      width: 70px;
                      height: 70px;
                      background: #eadcff;
                      font-size: 30px;
                    "
                  >
                    🚗
                  </div>

                  <div>
                    <h5 class="fw-bold mb-1" style="color: #0d3b66;">
                      Phương Tiện
                    </h5>
                    <small class="text-muted">4 / 10 bài học</small>
                  </div>
                </div>

                <div
                  class="topic-percent"
                  style="
                    color: #9b5de5;
                    border: 2px solid #e3d0ff;
                  "
                >
                  40%
                </div>
              </div>

              <div
                class="progress rounded-pill mb-3"
                style="height: 16px; background: #f1f1f1;"
              >
                <div
                  class="progress-bar rounded-pill"
                  role="progressbar"
                  style="
                    width: 40%;
                    background: linear-gradient(135deg, #9b5de5, #b388ff);
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kỹ năng cần luyện thêm -->
<div class="bg-white rounded-5 shadow-sm p-4">
  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
    <div>
      <h3 class="fw-bold mb-1" style="color: #0d3b66;">
        Bé Cần Luyện Thêm
      </h3>
      <p class="text-muted mb-0">
        Những lỗi phát âm AI phát hiện gần đây
      </p>
    </div>

    <button
      class="btn rounded-pill px-4 py-2 fw-bold text-white"
      style="
        background: linear-gradient(135deg, #36a2eb, #4cc9f0);
        box-shadow: 0 10px 20px rgba(54, 162, 235, 0.2);
      "
    >
      Xem Tất Cả
    </button>
  </div>

  <div class="row g-4">
    <div class="col-lg-4">
      <div
        class="rounded-5 p-4 h-100 skill-card"
        style="
          background: linear-gradient(135deg, #fff8f5, #fff);
          border: 2px solid #ffe4d9;
        "
      >
        <div
          class="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
          style="
            width: 75px;
            height: 75px;
            background: #ffe4d9;
            font-size: 34px;
          "
        >
          🗣️
        </div>

        <div class="mb-3">
          <span
            class="badge rounded-pill px-3 py-2"
            style="
              background: #fff1eb;
              color: #ff6b35;
            "
          >
            Cần Luyện Thêm
          </span>
        </div>

        <h5 class="fw-bold mb-2" style="color: #0d3b66;">
          Âm "tr"
        </h5>

        <p class="text-muted mb-3">
          Bé thường phát âm chưa rõ các từ như: trời, trái cây, trường học.
        </p>

        <div class="progress rounded-pill mb-3" style="height: 12px; background: #f1f1f1;">
          <div
            class="progress-bar rounded-pill"
            role="progressbar"
            style="
              width: 45%;
              background: linear-gradient(135deg, #ff8c42, #ff6b35);
            "
          ></div>
        </div>

        <button
          class="btn rounded-pill px-4 py-2 fw-bold text-white"
          style="
            background: linear-gradient(135deg, #ff8c42, #ff6b35);
            box-shadow: 0 10px 20px rgba(255, 107, 53, 0.2);
          "
        >
          Luyện Ngay
        </button>
      </div>
    </div>

    <div class="col-lg-4">
      <div
        class="rounded-5 p-4 h-100 skill-card"
        style="
          background: linear-gradient(135deg, #eefaf3, #fff);
          border: 2px solid #dff6e7;
        "
      >
        <div
          class="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
          style="
            width: 75px;
            height: 75px;
            background: #dff6e7;
            font-size: 34px;
          "
        >
          🔊
        </div>

        <div class="mb-3">
          <span
            class="badge rounded-pill px-3 py-2"
            style="
              background: #eaf8f0;
              color: #27ae60;
            "
          >
            Đã Tiến Bộ
          </span>
        </div>

        <h5 class="fw-bold mb-2" style="color: #0d3b66;">
          Âm "s"
        </h5>

        <p class="text-muted mb-3">
          Bé đã phát âm tốt hơn với các từ như: sông, sách, siêu nhân.
        </p>

        <div class="progress rounded-pill mb-3" style="height: 12px; background: #f1f1f1;">
          <div
            class="progress-bar rounded-pill bg-success"
            role="progressbar"
            style="width: 80%;"
          ></div>
        </div>

        <button
          class="btn rounded-pill px-4 py-2 fw-bold text-white"
          style="
            background: linear-gradient(135deg, #67d11f, #4caf50);
            box-shadow: 0 10px 20px rgba(76, 175, 80, 0.2);
          "
        >
          Tiếp Tục
        </button>
      </div>
    </div>

    <div class="col-lg-4">
      <div
        class="rounded-5 p-4 h-100 skill-card"
        style="
          background: linear-gradient(135deg, #eef5ff, #fff);
          border: 2px solid #dbeeff;
        "
      >
        <div
          class="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
          style="
            width: 75px;
            height: 75px;
            background: #dbeeff;
            font-size: 34px;
          "
        >
          🎯
        </div>

        <div class="mb-3">
          <span
            class="badge rounded-pill px-3 py-2"
            style="
              background: #eef5ff;
              color: #36a2eb;
            "
          >
            Cần Luyện Thêm
          </span>
        </div>

        <h5 class="fw-bold mb-2" style="color: #0d3b66;">
          Âm "r"
        </h5>

        <p class="text-muted mb-3">
          Bé cần luyện thêm các từ như: rồng, rổ, rau củ để phát âm rõ hơn.
        </p>

        <div class="progress rounded-pill mb-3" style="height: 12px; background: #f1f1f1;">
          <div
            class="progress-bar rounded-pill"
            role="progressbar"
            style="
              width: 55%;
              background: linear-gradient(135deg, #36a2eb, #4cc9f0);
            "
          ></div>
        </div>

        <button
          class="btn rounded-pill px-4 py-2 fw-bold text-white"
          style="
            background: linear-gradient(135deg, #36a2eb, #4cc9f0);
            box-shadow: 0 10px 20px rgba(54, 162, 235, 0.2);
          "
        >
          Xem Bài Học
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<style scoped>
.rounded-5 {
  border-radius: 28px !important;
}

.progress-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.progress-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12) !important;
  border-color: #ffe3d4;
}

.icon-box {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.topic-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.topic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
}

.topic-percent {
  min-width: 75px;
  text-align: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  background: rgba(255,255,255,0.8);
}

.header-circle {
  width: 200px;
  height: 200px;
  background: rgba(255,255,255,0.15);
  border: 10px solid rgba(255,255,255,0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.progress-top-box {
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  min-width: 130px;
}

.skill-card {
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
}
.content-wrapper { width: 92%; max-width: 1650px; margin: 0 auto; } .page-full { width: 100vw; margin-left: calc(-50vw + 50%); }
</style>