
<template>
  <div class="container-xxl py-4 kid-home">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <small class="text-muted d-block">
          Xin chào 👋
        </small>

        <h4 class="fw-bold text-primary mb-1">
          {{ user.name }}
        </h4>

        <small class="text-muted">
          Hôm nay bé đã học {{ todayProgress }} phút
        </small>
      </div>

      <div class="text-end">
        <div class="badge bg-warning text-dark rounded-pill px-3 py-2 mb-2">
          Level {{ user.level }}
        </div>

        <div class="small text-muted">
          {{ user.stars }} sao
        </div>
      </div>
    </div>

    <!-- BANNER -->
    <div class="main-banner rounded-4 p-4 mb-4 shadow-sm text-white">
      <div class="row align-items-center">

        <div class="col-lg-8">
          <small class="d-block mb-2 opacity-75">
            Hành trình luyện nói hôm nay
          </small>

          <h3 class="fw-bold mb-2">
            Tiếp tục luyện âm L / N
          </h3>

          <p class="mb-4 opacity-75">
            Bé đang tiến bộ rất tốt, hãy hoàn thành thêm 2 bài học nữa nhé.
          </p>

          <button
            class="btn btn-light rounded-pill px-4"
            @click="goToLesson(3)"
          >
            Tiếp tục học
          </button>
        </div>

        <div class="col-lg-4 mt-4 mt-lg-0">
          <div class="bg-white bg-opacity-25 rounded-4 p-3">
            <div class="d-flex justify-content-between mb-2">
              <small>Tiến độ tuần này</small>
              <small>{{ progress.percent }}%</small>
            </div>

            <div class="progress bg-white bg-opacity-25" style="height: 8px;">
              <div
                class="progress-bar bg-warning"
                :style="{ width: progress.percent + '%' }"
              ></div>
            </div>

            <div class="row text-center mt-3">
              <div class="col-4">
                <div class="fw-bold">12</div>
                <small>Bài học</small>
              </div>

              <div class="col-4">
                <div class="fw-bold">85</div>
                <small>Điểm TB</small>
              </div>

              <div class="col-4">
                <div class="fw-bold">7</div>
                <small>Ngày học</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- MENU NHANH -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-white rounded-4 shadow-sm p-3 quick-card h-100" @click="goToSubjects">
          <div class="quick-box bg-primary-subtle text-primary mb-3">
            12
          </div>

          <div class="fw-bold mb-1">
            Chủ đề học
          </div>

          <small class="text-muted">
            Xem các chủ đề phát âm
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-white rounded-4 shadow-sm p-3 quick-card h-100" @click="goToListening">
          <div class="quick-box bg-success-subtle text-success mb-3">
            08
          </div>

          <div class="fw-bold mb-1">
            Luyện nghe
          </div>

          <small class="text-muted">
            Nghe và chọn hình đúng
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-white rounded-4 shadow-sm p-3 quick-card h-100" @click="goToAchievement">
          <div class="quick-box bg-warning-subtle text-warning mb-3">
            24
          </div>

          <div class="fw-bold mb-1">
            Thành tích
          </div>

          <small class="text-muted">
            Xem sao và phần thưởng
          </small>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-white rounded-4 shadow-sm p-3 quick-card h-100" @click="goToTracking">
          <div class="quick-box bg-danger-subtle text-danger mb-3">
            65%
          </div>

          <div class="fw-bold mb-1">
            Tiến độ
          </div>

          <small class="text-muted">
            Theo dõi kết quả học tập
          </small>
        </div>
      </div>

    </div>

    <!-- CHỦ ĐỀ -->
    <div class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 class="fw-bold mb-1">
            Chủ đề nổi bật
          </h5>

          <small class="text-muted">
            Chọn chủ đề bé muốn luyện hôm nay
          </small>
        </div>

        <button
          class="btn btn-outline-primary rounded-pill btn-sm"
          @click="goToSubjects"
        >
          Xem tất cả
        </button>
      </div>

      <div class="row g-3">
        <div
          v-for="item in categories"
          :key="item.id"
          class="col-lg-4 col-md-6"
        >
          <div
            class="bg-white rounded-4 shadow-sm p-3 category-card h-100"
            @click="selectCategory(item.id)"
          >
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div>
                <div class="fw-bold">
                  {{ item.ten_danh_muc }}
                </div>

                <small class="text-muted">
                  {{ item.totalLesson }} bài học
                </small>
              </div>

              <div class="category-icon">
                {{ item.shortName }}
              </div>
            </div>

            <div class="progress" style="height: 6px;">
              <div
                class="progress-bar bg-primary"
                :style="{ width: item.progress + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TIẾP TỤC HỌC -->
    <div class="bg-white rounded-4 shadow-sm p-4 mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 class="fw-bold mb-1">
            Tiếp tục học
          </h5>

          <small class="text-muted">
            Các bài học đang luyện gần đây
          </small>
        </div>
      </div>

      <div
        v-for="lesson in lessons"
        :key="lesson.id"
        class="lesson-card border rounded-4 p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">

          <div>
            <div class="fw-bold mb-1">
              {{ lesson.ten_bai_hoc }}
            </div>

            <small class="text-muted d-block mb-2">
              {{ lesson.cap_do }} · {{ lesson.time }} phút
            </small>

            <div class="progress" style="height: 6px; width: 180px;">
              <div
                class="progress-bar bg-success"
                :style="{ width: lesson.progress + '%' }"
              ></div>
            </div>
          </div>

          <div class="text-end">
            <div class="fw-bold text-success mb-2">
              {{ lesson.progress }}%
            </div>

            <button
              class="btn btn-primary rounded-pill btn-sm px-3"
              @click="goToLesson(lesson.id)"
            >
              {{ lesson.progress > 0 ? 'Tiếp tục' : 'Bắt đầu' }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- GỢI Ý + THÀNH TÍCH -->
    <div class="row g-4">

      <div class="col-lg-7">
        <div class="bg-white rounded-4 shadow-sm p-4 h-100">
          <h5 class="fw-bold mb-3">
            Gợi ý hôm nay
          </h5>

          <div class="recommend-box rounded-4 p-4">
            <div class="fw-bold mb-2">
              Bé đang gặp khó với âm L/N
            </div>

            <small class="text-muted d-block mb-3">
              Hệ thống đề xuất luyện thêm bài phân biệt âm đầu để cải thiện phát âm.
            </small>

            <button
              class="btn btn-primary rounded-pill px-4"
              @click="goToLesson(3)"
            >
              Luyện ngay
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-5">
        <div class="bg-white rounded-4 shadow-sm p-4 h-100">
          <h5 class="fw-bold mb-3">
            Thành tích gần đây
          </h5>

          <div
            v-for="item in achievements"
            :key="item.id"
            class="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3"
          >
            <div>
              <div class="fw-bold">
                {{ item.title }}
              </div>

              <small class="text-muted">
                {{ item.date }}
              </small>
            </div>

            <span class="badge bg-warning text-dark rounded-pill px-3 py-2">
              +{{ item.star }} sao
            </span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'KidHome',

  data() {
    return {
      user: {
        name: 'Bé An',
        level: 5,
        stars: 128
      },

      todayProgress: 25,

      progress: {
        percent: 65
      },

      categories: [
        {
          id: 1,
          ten_danh_muc: 'Âm cơ bản',
          totalLesson: 12,
          progress: 80,
          shortName: 'A'
        },
        {
          id: 2,
          ten_danh_muc: 'Âm khó',
          totalLesson: 8,
          progress: 45,
          shortName: 'L'
        },
        {
          id: 3,
          ten_danh_muc: 'Nghe hiểu',
          totalLesson: 10,
          progress: 60,
          shortName: 'N'
        }
      ],

      lessons: [
        {
          id: 1,
          ten_bai_hoc: 'Phân biệt âm A',
          cap_do: 'Dễ',
          time: 10,
          progress: 80
        },
        {
          id: 2,
          ten_bai_hoc: 'Phân biệt âm B',
          cap_do: 'Trung bình',
          time: 12,
          progress: 45
        },
        {
          id: 3,
          ten_bai_hoc: 'Luyện âm L / N',
          cap_do: 'Khó',
          time: 15,
          progress: 30
        }
      ],

      achievements: [
        {
          id: 1,
          title: 'Hoàn thành 5 bài học',
          date: 'Hôm nay',
          star: 10
        },
        {
          id: 2,
          title: 'Đạt 90 điểm phát âm',
          date: 'Hôm qua',
          star: 8
        }
      ]
    };
  },

  methods: {
    selectCategory(categoryId) {
      this.$router.push({
        path: '/child/learning/lesson-list',
        query: {
          categoryId: categoryId
        }
      });
    },

    goToSubjects() {
      this.$router.push('/child/learning/subject-list');
    },

    goToLesson(lessonId) {
      this.$router.push({
        path: '/child/learning/lesson-list',
        query: {
          lessonId: lessonId
        }
      });
    },

    goToListening() {
      this.$router.push('/child/listening/listen-and-choose');
    },

    goToAchievement() {
      this.$router.push('/child/reward/achievement');
    },

    goToTracking() {
      this.$router.push('/child/tracking/progress');
    }
  }
};
</script>

<style scoped>
.kid-home {
  background-color: #f8f9fc;
  min-height: 100vh;
}

.main-banner {
  background: linear-gradient(135deg, #ff7b54, #ffb26b);
}

.quick-card,
.category-card,
.lesson-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-card:hover,
.category-card:hover,
.lesson-card:hover {
  transform: translateY(-4px);
}

.quick-box {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.category-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background-color: #eef5ff;
  color: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.recommend-box {
  background-color: #fff5eb;
}
</style>



