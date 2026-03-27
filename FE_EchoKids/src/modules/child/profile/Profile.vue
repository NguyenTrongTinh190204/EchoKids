<template>
  <div class="container-xxl py-3 kid-home">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h6 class="text-primary mb-0">Xin chào 👋</h6>
        <small class="text-muted">{{ user.name }}</small>
      </div>

      <div style="width: 120px;">
        <div class="progress rounded-pill" style="height: 6px;">
          <div
            class="progress-bar bg-success"
            :style="{ width: progress.percent + '%' }"
          ></div>
        </div>
        <small class="text-muted">{{ progress.percent }}%</small>
      </div>
    </div>

    <!-- BANNER CHÍNH -->
    <div class="bg-light rounded-4 p-4 mb-4 shadow-sm">
      <div class="fw-bold fs-5 mb-1">
        Học phát âm mỗi ngày 🎤
      </div>

      <small class="text-muted">
        Tiếp tục luyện tập để nói rõ hơn nhé!
      </small>

      <div class="mt-3">
        <button
          class="btn btn-primary rounded-pill px-3 btn-sm"
          @click="goToSubjects"
        >
          Bắt đầu học
        </button>
      </div>
    </div>

    <!-- DANH MỤC -->
    <div class="mb-4">
      <div class="fw-bold mb-2">Chủ đề học</div>

      <div class="d-flex overflow-auto pb-2">
        <div
          v-for="item in categories"
          :key="item.id"
          class="me-2 px-3 py-2 rounded-pill menu-item"
          :class="selectedCategory === item.id ? 'bg-primary text-white' : 'bg-light'"
          @click="selectCategory(item.id)"
        >
          {{ item.ten_danh_muc }}
        </div>
      </div>
    </div>

    <!-- DANH SÁCH BÀI HỌC -->
    <div class="mb-4">
      <div class="fw-bold mb-2">Bài học nổi bật</div>

      <div class="row g-3">
        <div
          v-for="lesson in filteredLessons"
          :key="lesson.id"
          class="col-12"
        >
          <div
            class="bg-light rounded-4 p-3 shadow-sm lesson-card"
            @click="goToLesson(lesson.id)"
          >
            <div class="d-flex justify-content-between align-items-center">

              <div>
                <div class="fw-bold">
                  {{ lesson.ten_bai_hoc }}
                </div>

                <small class="text-muted">
                  {{ lesson.cap_do }}
                </small>

                <div class="progress mt-2" style="height: 5px; width: 120px;">
                  <div
                    class="progress-bar bg-warning"
                    :style="{ width: lesson.progress + '%' }"
                  ></div>
                </div>
              </div>

              <div class="text-end">
                <div class="fw-bold text-success">
                  {{ lesson.progress }}%
                </div>

                <button
                  class="btn btn-sm rounded-pill mt-1"
                  :class="lesson.progress > 0 ? 'btn-outline-primary' : 'btn-primary'"
                >
                  {{ lesson.progress > 0 ? 'Tiếp tục' : 'Bắt đầu' }}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GỢI Ý -->
    <div class="bg-light rounded-4 p-3 shadow-sm">
      <div class="fw-bold mb-1">Gợi ý hôm nay 🎯</div>

      <small class="text-muted">
        Bé đang gặp khó với âm L/N, nên luyện thêm bài này
      </small>

      <div class="mt-3">
        <button
          class="btn btn-primary btn-sm rounded-pill"
          @click="goToRecommendedLesson"
        >
          Luyện ngay
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "KidHome",

  data() {
    return {
      user: {
        name: "Bé An"
      },

      progress: {
        percent: 65
      },

      selectedCategory: 1,

      // dữ liệu từ bảng danh_muc_bai_hoc
      categories: [
        {
          id: 1,
          ten_danh_muc: "Âm cơ bản"
        },
        {
          id: 2,
          ten_danh_muc: "Âm khó"
        },
        {
          id: 3,
          ten_danh_muc: "Nghe hiểu"
        }
      ],

      // dữ liệu từ bảng bai_hoc + tien_do_hoc_tap
      lessons: [
        {
          id: 1,
          danh_muc_id: 1,
          ten_bai_hoc: "Âm A",
          cap_do: "Dễ",
          progress: 80
        },
        {
          id: 2,
          danh_muc_id: 1,
          ten_bai_hoc: "Âm B",
          cap_do: "Dễ",
          progress: 0
        },
        {
          id: 3,
          danh_muc_id: 2,
          ten_bai_hoc: "Âm L/N",
          cap_do: "Trung bình",
          progress: 30
        },
        {
          id: 4,
          danh_muc_id: 3,
          ten_bai_hoc: "Nghe chọn hình",
          cap_do: "Dễ",
          progress: 60
        }
      ]
    };
  },

  computed: {
    filteredLessons() {
      return this.lessons.filter(
        lesson => lesson.danh_muc_id === this.selectedCategory
      );
    }
  },

  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    },

    goToSubjects() {
      this.$router.push('/child/learning/subject');
    },

    goToLesson(lessonId) {
      this.$router.push({
        path: '/child/learning/lesson',
        query: {
          lessonId: lessonId
        }
      });
    },

    goToRecommendedLesson() {
      this.$router.push({
        path: '/child/learning/lesson',
        query: {
          lessonId: 3
        }
      });
    }
  }
};
</script>

<style scoped>
.kid-home {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.menu-item {
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.menu-item:hover {
  opacity: 0.85;
}

.lesson-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.lesson-card:hover {
  transform: translateY(-3px);
}
</style>