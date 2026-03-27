<template>
  <div class="container-fluid py-4 lesson-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Danh sách bài học
        </h4>
        <small class="text-muted">
          Quản lý các bài học và chủ đề trong hệ thống
        </small>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToCreateLesson"
      >
        Tạo bài học
      </button>
    </div>

    <!-- BỘ LỌC -->
    <div class="bg-light rounded-4 p-3 shadow-sm mb-4">
      <div class="row g-3">

        <div class="col-md-4">
          <label class="form-label small text-muted">
            Chủ đề
          </label>

          <select
            class="form-select rounded-4"
            v-model="filters.subject"
          >
            <option value="">Tất cả chủ đề</option>
            <option value="Âm cơ bản">Âm cơ bản</option>
            <option value="Âm khó">Âm khó</option>
            <option value="Nghe hiểu">Nghe hiểu</option>
          </select>
        </div>

        <div class="col-md-4">
          <label class="form-label small text-muted">
            Mức độ
          </label>

          <select
            class="form-select rounded-4"
            v-model="filters.level"
          >
            <option value="">Tất cả mức độ</option>
            <option value="Dễ">Dễ</option>
            <option value="Trung bình">Trung bình</option>
            <option value="Khó">Khó</option>
          </select>
        </div>

        <div class="col-md-4">
          <label class="form-label small text-muted">
            Tìm kiếm
          </label>

          <input
            type="text"
            class="form-control rounded-4"
            placeholder="Nhập tên bài học"
            v-model="filters.keyword"
          >
        </div>

      </div>
    </div>

    <!-- DANH SÁCH BÀI HỌC -->
    <div class="bg-light rounded-4 p-4 shadow-sm">

      <div
        v-for="lesson in filteredLessons"
        :key="lesson.id"
        class="bg-white rounded-4 border p-3 mb-3 lesson-card"
      >
        <div class="row align-items-center">

          <div class="col-lg-4 mb-3 mb-lg-0">
            <div class="fw-bold mb-1">
              {{ lesson.ten_bai_hoc }}
            </div>

            <small class="text-muted">
              {{ lesson.danh_muc }}
            </small>
          </div>

          <div class="col-lg-2 col-md-4 mb-3 mb-lg-0">
            <small class="text-muted d-block mb-1">
              Mức độ
            </small>

            <span
              class="badge px-3 py-2"
              :class="getLevelClass(lesson.cap_do)"
            >
              {{ lesson.cap_do }}
            </span>
          </div>

          <div class="col-lg-2 col-md-4 mb-3 mb-lg-0">
            <small class="text-muted d-block mb-1">
              Số từ vựng
            </small>

            <div class="fw-bold">
              {{ lesson.so_tu_vung }}
            </div>
          </div>

          <div class="col-lg-2 col-md-4 mb-3 mb-lg-0">
            <small class="text-muted d-block mb-1">
              Trạng thái
            </small>

            <span
              class="badge px-3 py-2"
              :class="lesson.trang_thai === 'Đã duyệt' ? 'bg-success' : 'bg-warning text-dark'"
            >
              {{ lesson.trang_thai }}
            </span>
          </div>

          <div class="col-lg-2">
            <div class="d-flex gap-2 justify-content-lg-end">
              <button
                class="btn btn-outline-primary btn-sm rounded-pill"
                @click="goToEditLesson(lesson.id)"
              >
                Sửa
              </button>

              <button
                class="btn btn-outline-secondary btn-sm rounded-pill"
                @click="goToPracticeBuilder(lesson.id)"
              >
                Bài tập
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- KHÔNG CÓ DỮ LIỆU -->
      <div
        v-if="filteredLessons.length === 0"
        class="text-center py-5"
      >
        <div class="fw-bold text-muted mb-2">
          Không tìm thấy bài học
        </div>

        <small class="text-muted">
          Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
        </small>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LessonList",

  data() {
    return {
      filters: {
        subject: "",
        level: "",
        keyword: ""
      },

      // dữ liệu từ bảng bai_hoc + danh_muc_bai_hoc
      lessons: [
        {
          id: 1,
          ten_bai_hoc: "Âm L cơ bản",
          danh_muc: "Âm khó",
          cap_do: "Dễ",
          so_tu_vung: 12,
          trang_thai: "Đã duyệt"
        },
        {
          id: 2,
          ten_bai_hoc: "Phân biệt L và N",
          danh_muc: "Âm khó",
          cap_do: "Trung bình",
          so_tu_vung: 15,
          trang_thai: "Chờ duyệt"
        },
        {
          id: 3,
          ten_bai_hoc: "Nghe và chọn hình",
          danh_muc: "Nghe hiểu",
          cap_do: "Dễ",
          so_tu_vung: 10,
          trang_thai: "Đã duyệt"
        },
        {
          id: 4,
          ten_bai_hoc: "Âm S/X nâng cao",
          danh_muc: "Âm khó",
          cap_do: "Khó",
          so_tu_vung: 18,
          trang_thai: "Đã duyệt"
        }
      ]
    };
  },

  computed: {
    filteredLessons() {
      return this.lessons.filter(lesson => {
        const matchSubject =
          !this.filters.subject ||
          lesson.danh_muc === this.filters.subject;

        const matchLevel =
          !this.filters.level ||
          lesson.cap_do === this.filters.level;

        const matchKeyword =
          !this.filters.keyword ||
          lesson.ten_bai_hoc
            .toLowerCase()
            .includes(this.filters.keyword.toLowerCase());

        return matchSubject && matchLevel && matchKeyword;
      });
    }
  },

  methods: {
    getLevelClass(level) {
      if (level === "Dễ") {
        return "bg-success";
      }

      if (level === "Trung bình") {
        return "bg-warning text-dark";
      }

      return "bg-danger";
    },

    goToCreateLesson() {
      this.$router.push('/teacher/lesson/create');
    },

    goToEditLesson(lessonId) {
      this.$router.push({
        path: '/teacher/lesson/edit',
        query: {
          lessonId: lessonId
        }
      });
    },

    goToPracticeBuilder(lessonId) {
      this.$router.push({
        path: '/teacher/practice-builder/create',
        query: {
          lessonId: lessonId
        }
      });
    }
  }
};
</script>

<style scoped>
.lesson-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.lesson-card {
  transition: all 0.2s ease;
}

.lesson-card:hover {
  transform: translateY(-3px);
}
</style>