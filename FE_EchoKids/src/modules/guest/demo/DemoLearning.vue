<template>
  <div class="demo-page">

    <!-- HERO -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center g-4">

          <div class="col-lg-6">
            <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
              Trải nghiệm demo miễn phí
            </span>

            <h1 class="fw-bold mb-3">
              Xem cách trẻ học và luyện phát âm cùng EchoKids
            </h1>

            <p class="text-muted mb-4">
              Trẻ sẽ được nghe âm thanh mẫu, xem khẩu hình, ghi âm và nhận phản hồi ngay lập tức từ hệ thống AI.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                class="btn btn-primary rounded-pill px-4"
                @click="goToRegister"
              >
                Đăng ký ngay
              </button>

              <button
                class="btn btn-outline-primary rounded-pill px-4"
                @click="goToHome"
              >
                Về trang chủ
              </button>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="bg-white rounded-4 shadow p-4">
              <div class="ratio ratio-16x9 rounded-4 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Demo Speech Therapy"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CÁC BƯỚC HỌC -->
    <section class="py-5 bg-white">
      <div class="container">

        <div class="text-center mb-5">
          <h3 class="fw-bold mb-2">
            Quy trình học của trẻ
          </h3>

          <p class="text-muted mb-0">
            Hệ thống được thiết kế đơn giản, trực quan và phù hợp với trẻ nhỏ
          </p>
        </div>

        <div class="row g-4">

          <div
            v-for="step in steps"
            :key="step.id"
            class="col-lg-3 col-md-6"
          >
            <div class="bg-light rounded-4 p-4 shadow-sm h-100 demo-card">
              <div class="step-number mb-3">
                {{ step.id }}
              </div>

              <h6 class="fw-bold mb-2">
                {{ step.title }}
              </h6>

              <p class="text-muted small mb-0">
                {{ step.description }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CHỨC NĂNG -->
    <section class="py-5">
      <div class="container">

        <div class="text-center mb-5">
          <h3 class="fw-bold mb-2">
            Những gì trẻ có thể làm
          </h3>

          <p class="text-muted mb-0">
            Dựa trên hệ thống luyện phát âm, nghe hiểu và theo dõi tiến trình
          </p>
        </div>

        <div class="row g-4">

          <div
            v-for="feature in features"
            :key="feature.id"
            class="col-lg-4 col-md-6"
          >
            <div class="bg-white rounded-4 shadow-sm p-4 h-100 feature-card">
              <h6 class="fw-bold mb-2">
                {{ feature.title }}
              </h6>

              <p class="text-muted small mb-0">
                {{ feature.description }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-5">
      <div class="container">
        <div class="bg-primary text-white rounded-4 p-5 text-center shadow">
          <h3 class="fw-bold mb-3">
            Sẵn sàng bắt đầu hành trình luyện phát âm?
          </h3>

          <p class="mb-4">
            Tạo tài khoản để trải nghiệm đầy đủ các bài học, bài luyện tập và báo cáo tiến độ.
          </p>

          <button
            class="btn btn-light rounded-pill px-4"
            @click="goToRegister"
          >
            Tạo tài khoản miễn phí
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "DemoLearning",

  data() {
    return {
      steps: [
        {
          id: 1,
          title: "Nghe âm mẫu",
          description: "Trẻ nghe cách phát âm đúng từ hệ thống."
        },
        {
          id: 2,
          title: "Xem khẩu hình",
          description: "Quan sát video khẩu hình miệng để bắt chước."
        },
        {
          id: 3,
          title: "Ghi âm giọng nói",
          description: "Trẻ đọc lại và ghi âm trực tiếp trên hệ thống."
        },
        {
          id: 4,
          title: "Nhận phản hồi AI",
          description: "AI chấm điểm và chỉ ra lỗi phát âm cụ thể."
        }
      ],

      features: [
        {
          id: 1,
          title: "Luyện phát âm",
          description: "Nghe, ghi âm và nhận phản hồi theo từng âm đầu, vần và thanh điệu."
        },
        {
          id: 2,
          title: "Luyện nghe hiểu",
          description: "Nghe âm thanh và chọn hình ảnh hoặc hành động phù hợp."
        },
        {
          id: 3,
          title: "Theo dõi tiến trình",
          description: "Phụ huynh có thể xem báo cáo chi tiết và lịch sử học tập."
        },
        {
          id: 4,
          title: "Cá nhân hóa",
          description: "Hệ thống tự điều chỉnh độ khó theo khả năng của trẻ."
        },
        {
          id: 5,
          title: "Bài học trực quan",
          description: "Học thông qua hình ảnh, màu sắc và âm thanh sinh động."
        },
        {
          id: 6,
          title: "Gợi ý luyện tập tại nhà",
          description: "Phụ huynh nhận được các bài luyện phù hợp cho trẻ."
        }
      ]
    };
  },

  methods: {
    goToRegister() {
      this.$router.push('/register');
    },

    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.demo-page {
  background-color: #f8f9fc;
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #eef5ff, #f9fbff);
}

.demo-card,
.feature-card {
  transition: all 0.2s ease;
}

.demo-card:hover,
.feature-card:hover {
  transform: translateY(-4px);
}

.step-number {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background-color: #0d6efd;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>