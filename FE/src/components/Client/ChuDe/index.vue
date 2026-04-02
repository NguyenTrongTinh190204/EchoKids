<template>
  <div class="subject-page">
    <!-- Banner -->
    <div class="container-fluid subject-banner py-5 mb-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <h1 class="display-4 fw-bold text-white mb-3">
              Khám Phá Các Chủ Đề Học Tập
            </h1>

            <p class="text-white fs-5 mb-4">
              Bé có thể lựa chọn các chủ đề yêu thích để luyện nghe, luyện nói
              và phát triển khả năng giao tiếp mỗi ngày.
            </p>

            <div class="search-box bg-white rounded-pill shadow-sm p-2 d-flex align-items-center">
              <input
                type="text"
                class="form-control border-0 shadow-none px-3"
                placeholder="Tìm kiếm chủ đề yêu thích..."
                v-model="searchKeyword"
              >

              <button class="btn btn-primary rounded-pill px-4">
                Tìm Kiếm
              </button>
            </div>
          </div>

          <div class="col-lg-6 text-center wow fadeInRight" data-wow-delay="0.3s">
            <img
              src="/Client/images/about-1.jpg"
              alt="Banner chủ đề"
              class="img-fluid banner-image"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Danh sách chủ đề -->
    <div class="container-xxl py-5">
      <div class="container">
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style="max-width: 700px;"
        >
          <h1 class="mb-3">Chủ Đề Dành Cho Bé</h1>
          <p class="text-muted fs-5">
            Mỗi chủ đề đều có hình ảnh sinh động, bài học thú vị và trò chơi tương tác giúp bé học hiệu quả hơn.
          </p>
        </div>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
            v-for="(topic, index) in filteredTopics"
            :key="index"
          >
            <div class="topic-card h-100">
              <div class="topic-image-wrapper">
                <img
                  :src="topic.image"
                  :alt="topic.name"
                  class="img-fluid w-100 topic-image"
                >
              </div>

              <div class="p-4 text-center">
                <div class="topic-icon mb-3">
                  {{ topic.emoji }}
                </div>

                <h4 class="fw-bold mb-2">{{ topic.name }}</h4>

                <p class="text-muted small mb-4">
                  {{ topic.description }}
                </p>

                <button class="btn btn-primary rounded-pill px-4 py-2">
                  Học Ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="filteredTopics.length === 0"
          class="text-center py-5"
        >
          <h4 class="text-muted">Không tìm thấy chủ đề phù hợp</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicIndex',

  data() {
    return {
      searchKeyword: '',

      topics: [
        {
          name: 'Động Vật',
          description: 'Khám phá thế giới động vật vui nhộn và học tên các con vật.',
          image: '/Client/images/classes-1.jpg',
          emoji: '🐶'
        },
        {
          name: 'Màu Sắc',
          description: 'Học nhận biết và gọi tên các màu sắc quen thuộc.',
          image: '/Client/images/classes-2.jpg',
          emoji: '🎨'
        },
        {
          name: 'Âm Nhạc',
          description: 'Làm quen với nhạc cụ, âm thanh và các bài hát vui nhộn.',
          image: '/Client/images/classes-3.jpg',
          emoji: '🎵'
        },
        {
          name: 'Giao Tiếp',
          description: 'Luyện nói các câu giao tiếp đơn giản mỗi ngày.',
          image: '/Client/images/classes-4.jpg',
          emoji: '💬'
        },
        {
          name: 'Số Đếm',
          description: 'Học đếm số từ 1 đến 20 với hình ảnh sinh động.',
          image: '/Client/images/about-1.jpg',
          emoji: '🔢'
        },
        {
          name: 'Đồ Vật',
          description: 'Nhận biết các đồ vật quen thuộc xung quanh bé.',
          image: '/Client/images/about-2.jpg',
          emoji: '🧸'
        },
        {
          name: 'Gia Đình',
          description: 'Tìm hiểu các thành viên trong gia đình và cách xưng hô.',
          image: '/Client/images/about-3.jpg',
          emoji: '👨‍👩‍👧'
        },
        {
          name: 'Trái Cây',
          description: 'Học tên các loại trái cây và màu sắc đặc trưng.',
          image: '/Client/images/classes-5.jpg',
          emoji: '🍎'
        }
      ]
    }
  },

  computed: {
    filteredTopics() {
      return this.topics.filter(topic =>
        topic.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.subject-page {
  background-color: #fffaf7;
}

.subject-banner {
  background: linear-gradient(135deg, #ff8a65, #ffb74d);
  position: relative;
  overflow: hidden;
}

.subject-banner::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -80px;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
}

.subject-banner::after {
  content: '';
  position: absolute;
  bottom: -120px;
  left: -80px;
  width: 280px;
  height: 280px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 50%;
}

.banner-image {
  max-height: 420px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.search-box {
  max-width: 520px;
}

.search-box input {
  height: 55px;
  font-size: 16px;
}

.topic-card {
  background: #fff;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.topic-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  border-color: #ff8a65;
}

.topic-image-wrapper {
  height: 220px;
  overflow: hidden;
}

.topic-image {
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.topic-card:hover .topic-image {
  transform: scale(1.08);
}

.topic-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  background: #fff3ec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  border: none;
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #ff5a5a, #ff7b3d);
  transform: translateY(-2px);
}

@media (max-width: 991px) {
  .subject-banner {
    text-align: center;
  }

  .search-box {
    margin: 0 auto;
  }

  .banner-image {
    margin-top: 40px;
    max-height: 300px;
  }
}

@media (max-width: 576px) {
  .subject-banner h1 {
    font-size: 2rem;
  }

  .search-box {
    flex-direction: column;
    border-radius: 20px !important;
  }

  .search-box input {
    width: 100%;
    margin-bottom: 10px;
  }

  .search-box button {
    width: 100%;
  }
}
</style>