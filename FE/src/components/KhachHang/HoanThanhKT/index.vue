<template>
  <div
    class="min-vh-100 d-flex align-items-center justify-content-center"
    style="background: linear-gradient(180deg, #fff8f5 0%, #fefefe 100%);"
  >
     <div class="content-wrapper py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="bg-white rounded-5 shadow-lg p-4 p-lg-5 text-center position-relative overflow-hidden">
            <!-- Hình trang trí -->
            <div
              class="position-absolute rounded-circle"
              style="
                width: 180px;
                height: 180px;
                background: rgba(255, 107, 53, 0.08);
                top: -60px;
                left: -60px;
              "
            ></div>

            <div
              class="position-absolute rounded-circle"
              style="
                width: 140px;
                height: 140px;
                background: rgba(111, 207, 151, 0.12);
                bottom: -40px;
                right: -40px;
              "
            ></div>

            <!-- Icon hoàn thành -->
            <div
              class="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
              style="
                width: 160px;
                height: 160px;
                background: linear-gradient(135deg, #fff1eb, #ffe4d9);
                border: 8px solid #fff;
                box-shadow:
                  0 0 0 10px rgba(255, 140, 66, 0.15),
                  0 15px 35px rgba(255, 107, 53, 0.2);
              "
            >
              <span style="font-size: 80px;">🎉</span>
            </div>

            <!-- Nội dung -->
            <h1
              class="fw-bold mb-3"
              style="
                color: #ff8c42;
                font-size: 48px;
                font-family: 'Lobster Two', cursive;
              "
            >
              Bé Hoàn Thành Xuất Sắc!
            </h1>

            <p class="text-muted fs-5 mb-4">
              Bé đã hoàn thành bài kiểm tra phát âm rất tốt. Hãy tiếp tục luyện tập mỗi ngày nhé!
            </p>

            <!-- Điểm -->
            <div class="row g-3 justify-content-center mb-4">
              <div class="col-md-4">
                <div
                  class="rounded-5 p-4 h-100"
                  style="
                    background: #fff8e6;
                    border: 2px solid #ffd166;
                  "
                >
                  <div class="fw-bold mb-2" style="color: #ffb703;">
                    Tổng Điểm
                  </div>

                  <div class="fw-bold" style="font-size: 36px; color: #ff8c42;">
                    82
                  </div>

                  <small class="text-muted">Điểm phát âm</small>
                </div>
              </div>

              <div class="col-md-4">
                <div
                  class="rounded-5 p-4 h-100"
                  style="
                    background: #eefaf3;
                    border: 2px solid #7bd389;
                  "
                >
                  <div class="fw-bold mb-2" style="color: #2d9c5b;">
                    Độ Chính Xác
                  </div>

                  <div class="fw-bold" style="font-size: 36px; color: #27ae60;">
                    92%
                  </div>

                  <small class="text-muted">Phát âm đúng</small>
                </div>
              </div>

              <div class="col-md-4">
                <div
                  class="rounded-5 p-4 h-100"
                  style="
                    background: #eef5ff;
                    border: 2px solid #74b9ff;
                  "
                >
                  <div class="fw-bold mb-2" style="color: #0984e3;">
                    Chuỗi Ngày Học
                  </div>

                  <div class="fw-bold" style="font-size: 36px; color: #0984e3;">
                    5 🔥
                  </div>

                  <small class="text-muted">Ngày liên tiếp</small>
                </div>
              </div>
            </div>

            <!-- Nhận xét -->
            <div
              class="rounded-5 p-4 mb-4 text-start"
              style="
                background: #f8fafc;
                border: 1px dashed #d6e4f0;
              "
            >
              <h5 class="fw-bold mb-3" style="color: #0d3b66;">
                Nhận Xét Từ AI
              </h5>

              <ul class="list-unstyled mb-0">
                <li class="mb-2 text-muted">
                  ✅ Bé phát âm rõ ràng và tự tin
                </li>

                <li class="mb-2 text-muted">
                  ✅ Âm đầu và âm cuối khá chính xác
                </li>

                <li class="mb-2 text-muted">
                  ⚠️ Bé nên đọc chậm hơn ở các từ dài
                </li>

                <li class="text-muted">
                  🔁 Gợi ý luyện thêm: "con mèo", "quả táo", "xe đạp"
                </li>
              </ul>
            </div>

            <!-- Nút -->
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <button
                class="btn rounded-pill px-5 py-3 fw-bold"
                style="
                  border: 2px solid #dcdcdc;
                  color: #6c757d;
                  background: white;
                "
              >
                Xem Lại Bài Học
              </button>

              <button
                class="btn rounded-pill px-5 py-3 fw-bold text-white"
                style="
                  background: linear-gradient(135deg, #36a2eb, #4cc9f0);
                  box-shadow: 0 10px 25px rgba(54, 162, 235, 0.25);
                "
              >
                Luyện Tập Lại
              </button>

              <button
                class="btn rounded-pill px-5 py-3 fw-bold text-white"
                style="
                  background: linear-gradient(135deg, #67d11f, #4caf50);
                  box-shadow: 0 10px 25px rgba(103, 209, 31, 0.25);
                "
              >
                Tiếp Tục
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>