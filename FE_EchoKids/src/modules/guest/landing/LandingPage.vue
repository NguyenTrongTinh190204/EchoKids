<template>
  <div class="landing-page">

    <!-- HERO -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center g-4">

          <div class="col-lg-6">
            <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
              Hệ thống luyện phát âm cho trẻ em
            </span>

            <h1 class="fw-bold display-5 mb-3">
              Giúp trẻ luyện nói tốt hơn mỗi ngày
            </h1>

            <p class="text-muted mb-4">
              EchoKids hỗ trợ trẻ luyện phát âm, nghe hiểu và học từ vựng trực quan thông qua hình ảnh, âm thanh và AI.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                class="btn btn-primary rounded-pill px-4 py-2"
                @click="goToRegister"
              >
                Bắt đầu miễn phí
              </button>

              <button
                class="btn btn-outline-primary rounded-pill px-4 py-2"
                @click="goToDemo"
              >
                Xem demo
              </button>
            </div>

            <div class="row mt-4 g-3">
              <div class="col-4">
                <div class="bg-white rounded-4 shadow-sm p-3 text-center">
                  <div class="fw-bold fs-4 text-primary">
                    1.500+
                  </div>
                  <small class="text-muted">
                    Lượt luyện tập
                  </small>
                </div>
              </div>

              <div class="col-4">
                <div class="bg-white rounded-4 shadow-sm p-3 text-center">
                  <div class="fw-bold fs-4 text-success">
                    240+
                  </div>
                  <small class="text-muted">
                    Người dùng
                  </small>
                </div>
              </div>

              <div class="col-4">
                <div class="bg-white rounded-4 shadow-sm p-3 text-center">
                  <div class="fw-bold fs-4 text-warning">
                    91%
                  </div>
                  <small class="text-muted">
                    Độ chính xác AI
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="bg-white rounded-4 shadow p-4">
              <div class="row g-3">

                <div class="col-6">
                  <div class="bg-light rounded-4 p-3 h-100">
                    <div class="fw-bold mb-2">
                      Luyện phát âm
                    </div>

                    <small class="text-muted">
                      Nghe mẫu, ghi âm và nhận phản hồi AI.
                    </small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="bg-light rounded-4 p-3 h-100">
                    <div class="fw-bold mb-2">
                      Học từ vựng
                    </div>

                    <small class="text-muted">
                      Học bằng hình ảnh và âm thanh trực quan.
                    </small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="bg-light rounded-4 p-3 h-100">
                    <div class="fw-bold mb-2">
                      Theo dõi tiến độ
                    </div>

                    <small class="text-muted">
                      Phụ huynh xem báo cáo chi tiết của trẻ.
                    </small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="bg-light rounded-4 p-3 h-100">
                    <div class="fw-bold mb-2">
                      Cá nhân hóa
                    </div>

                    <small class="text-muted">
                      Hệ thống tự điều chỉnh độ khó phù hợp.
                    </small>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- GIỚI THIỆU -->
    <section
      id="gioi-thieu"
      class="py-5 bg-white"
    >
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-3">
            EchoKids phù hợp với ai?
          </h2>

          <p class="text-muted">
            Hệ thống dành cho trẻ em, phụ huynh, giáo viên và chuyên gia ngôn ngữ.
          </p>
        </div>

        <div class="row g-4">

          <div class="col-lg-3 col-md-6">
            <div class="bg-light rounded-4 shadow-sm p-4 h-100 landing-card">
              <h5 class="fw-bold mb-3">
                Trẻ em
              </h5>

              <p class="text-muted mb-0">
                Luyện phát âm, nghe hiểu, học từ vựng và nhận phần thưởng theo tiến trình.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="bg-light rounded-4 shadow-sm p-4 h-100 landing-card">
              <h5 class="fw-bold mb-3">
                Phụ huynh
              </h5>

              <p class="text-muted mb-0">
                Theo dõi kết quả, nhận cảnh báo và gợi ý luyện tập tại nhà.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="bg-light rounded-4 shadow-sm p-4 h-100 landing-card">
              <h5 class="fw-bold mb-3">
                Giáo viên
              </h5>

              <p class="text-muted mb-0">
                Tạo bài học, quản lý nội dung và theo dõi tiến bộ của trẻ.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="bg-light rounded-4 shadow-sm p-4 h-100 landing-card">
              <h5 class="fw-bold mb-3">
                Admin
              </h5>

              <p class="text-muted mb-0">
                Quản lý tài khoản, thống kê hệ thống và dữ liệu AI.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CHỨC NĂNG -->
    <section
      id="chuc-nang"
      class="py-5"
    >
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-3">
            Chức năng nổi bật
          </h2>

          <p class="text-muted">
            Hệ thống được thiết kế để phù hợp với quá trình luyện nói của trẻ nhỏ.
          </p>
        </div>

        <div class="row g-4">

          <div
            v-for="feature in features"
            :key="feature.id"
            class="col-lg-4 col-md-6"
          >
            <div class="bg-white rounded-4 shadow-sm p-4 h-100 feature-card">
              <div class="fw-bold mb-2">
                {{ feature.title }}
              </div>

              <small class="text-muted">
                {{ feature.description }}
              </small>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-5">
      <div class="container">
        <div class="bg-primary text-white rounded-4 shadow p-5 text-center">
          <h2 class="fw-bold mb-3">
            Bắt đầu hành trình luyện phát âm cùng EchoKids
          </h2>

          <p class="mb-4">
            Đăng ký ngay để trải nghiệm hệ thống học tập trực quan và cá nhân hóa cho trẻ.
          </p>

          <button
            class="btn btn-light rounded-pill px-4"
            @click="goToRegister"
          >
            Tạo tài khoản
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "LandingPage",

  data() {
    return {
      features: [
        {
          id: 1,
          title: "Luyện phát âm bằng AI",
          description: "AI phân tích âm đầu, vần và thanh điệu để chấm điểm phát âm."
        },
        {
          id: 2,
          title: "Luyện nghe hiểu",
          description: "Nghe âm thanh và chọn đúng hình ảnh hoặc hành động."
        },
        {
          id: 3,
          title: "Xem khẩu hình miệng",
          description: "Trẻ học theo video và hướng dẫn khẩu hình trực quan."
        },
        {
          id: 4,
          title: "Theo dõi tiến độ",
          description: "Phụ huynh xem báo cáo, lịch sử học tập và mức độ tiến bộ."
        },
        {
          id: 5,
          title: "Tạo bài học linh hoạt",
          description: "Giáo viên có thể tạo bài học, từ vựng và bài luyện tập mới."
        },
        {
          id: 6,
          title: "Cá nhân hóa độ khó",
          description: "Hệ thống tự động gợi ý bài học phù hợp với khả năng của trẻ."
        }
      ]
    };
  },

  methods: {
    goToLogin() {
      this.$router.push('/login');
    },

    goToRegister() {
      this.$router.push('/register');
    },

    goToDemo() {
      this.$router.push('/demo');
    },

    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.landing-page {
  background-color: #f8f9fc;
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #eef5ff, #f9fbff);
}

.landing-card,
.feature-card {
  transition: all 0.2s ease;
}

.landing-card:hover,
.feature-card:hover {
  transform: translateY(-4px);
}
</style>