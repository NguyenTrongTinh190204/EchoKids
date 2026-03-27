<template>
  <div class="container py-3 lesson-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <div class="fw-bold text-primary">Bài học 🎯</div>
        <small class="text-muted">
          Chọn bài để bắt đầu luyện tập
        </small>
      </div>

      <button
        class="btn btn-outline-primary btn-sm rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- TIẾN ĐỘ CHỦ ĐỀ -->
    <div class="bg-light rounded-4 p-3 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="fw-bold">
          {{ subject.ten_danh_muc }}
        </div>

        <small class="text-success fw-bold">
          {{ subject.progress }}%
        </small>
      </div>

      <div class="progress" style="height: 6px;">
        <div
          class="progress-bar bg-success"
          :style="{ width: subject.progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- DANH SÁCH LEVEL -->
    <div class="d-flex flex-column align-items-center">

      <div
        v-for="(lesson, index) in lessons"
        :key="lesson.id"
        class="lesson-wrapper text-center"
      >

        <!-- ĐƯỜNG NỐI -->
        <div
          v-if="index !== 0"
          class="lesson-line"
        ></div>

        <!-- NODE BÀI HỌC -->
        <div
          class="lesson-node d-flex align-items-center justify-content-center shadow-sm"
          :class="getNodeClass(lesson)"
          @click="goToLesson(lesson)"
        >
          <span class="fw-bold">
            {{ index + 1 }}
          </span>
        </div>

        <!-- TÊN BÀI -->
        <div class="mt-2 mb-4">
          <div class="fw-bold small">
            {{ lesson.ten_bai_hoc }}
          </div>

          <small class="text-muted">
            {{ getLessonStatusText(lesson.trang_thai) }}
          </small>
        </div>

      </div>

    </div>

    <!-- GỢI Ý -->
    <div class="bg-light rounded-4 p-3 shadow-sm mt-3">
      <div class="fw-bold mb-1">Gợi ý luyện tập 🎯</div>

      <small class="text-muted">
        Hãy hoàn thành bài hiện tại để mở khóa bài tiếp theo
      </small>

      <div class="mt-3">
        <button
          class="btn btn-primary btn-sm rounded-pill"
          @click="goToCurrentLesson"
        >
          Tiếp tục học
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "LessonList",

  data() {
    return {
      // dữ liệu chủ đề từ danh_muc_bai_hoc
      subject: {
        id: 1,
        ten_danh_muc: "Âm cơ bản",
        progress: 45
      },

      // dữ liệu từ bảng bai_hoc + tien_do_hoc_tap
      lessons: [
        {
          id: 1,
          ten_bai_hoc: "Âm A",
          trang_thai: "done"
        },
        {
          id: 2,
          ten_bai_hoc: "Âm B",
          trang_thai: "done"
        },
        {
          id: 3,
          ten_bai_hoc: "Âm C",
          trang_thai: "current"
        },
        {
          id: 4,
          ten_bai_hoc: "Âm D",
          trang_thai: "lock"
        },
        {
          id: 5,
          ten_bai_hoc: "Âm E",
          trang_thai: "lock"
        }
      ]
    };
  },

  methods: {
    getNodeClass(lesson) {
      if (lesson.trang_thai === "done") {
        return "node-done";
      }

      if (lesson.trang_thai === "current") {
        return "node-current";
      }

      return "node-lock";
    },

    getLessonStatusText(status) {
      if (status === "done") {
        return "Đã hoàn thành";
      }

      if (status === "current") {
        return "Đang học";
      }

      return "Chưa mở khóa";
    },

    goToLesson(lesson) {
      if (lesson.trang_thai === "lock") {
        return;
      }

      this.$router.push({
        path: '/child/practice/therapy',
        query: {
          lessonId: lesson.id
        }
      });
    },

    goToCurrentLesson() {
      const currentLesson = this.lessons.find(
        lesson => lesson.trang_thai === "current"
      );

      if (currentLesson) {
        this.$router.push({
          path: '/child/practice/therapy',
          query: {
            lessonId: currentLesson.id
          }
        });
      }
    },

    goBack() {
      this.$router.push('/child/learning/subject');
    }
  }
};
</script>

<style scoped>
.lesson-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.lesson-wrapper {
  position: relative;
}

.lesson-line {
  width: 4px;
  height: 35px;
  background-color: #dee2e6;
  margin: 0 auto 10px;
}

.lesson-node {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lesson-node:hover {
  transform: scale(1.05);
}

.node-done {
  background-color: #198754;
  color: white;
}

.node-current {
  background-color: #0d6efd;
  color: white;
  transform: scale(1.08);
}

.node-lock {
  background-color: #dee2e6;
  color: #6c757d;
  cursor: not-allowed;
}
</style>