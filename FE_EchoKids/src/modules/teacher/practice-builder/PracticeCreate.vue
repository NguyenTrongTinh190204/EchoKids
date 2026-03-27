<template>
  <div class="container-fluid py-4 practice-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Tạo bài luyện tập
        </h4>
        <small class="text-muted">
          Thiết kế bài luyện phát âm và nghe hiểu cho trẻ
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <div class="row g-4">

      <!-- FORM THÔNG TIN -->
      <div class="col-lg-8">
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4">

          <div class="fw-bold mb-3">
            Thông tin bài luyện tập
          </div>

          <div class="row g-3">

            <div class="col-md-6">
              <label class="form-label">
                Bài học
              </label>

              <select
                class="form-select rounded-4"
                v-model="practice.lesson_id"
              >
                <option value="">Chọn bài học</option>
                <option
                  v-for="lesson in lessons"
                  :key="lesson.id"
                  :value="lesson.id"
                >
                  {{ lesson.ten_bai_hoc }}
                </option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Loại bài luyện
              </label>

              <select
                class="form-select rounded-4"
                v-model="practice.type"
              >
                <option value="">Chọn loại bài luyện</option>
                <option value="Phát âm">Phát âm</option>
                <option value="Nghe hiểu">Nghe hiểu</option>
                <option value="Lặp lại">Lặp lại</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Từ vựng chính
              </label>

              <select
                class="form-select rounded-4"
                v-model="practice.word_id"
              >
                <option value="">Chọn từ vựng</option>
                <option
                  v-for="word in words"
                  :key="word.id"
                  :value="word.id"
                >
                  {{ word.ten_tu }}
                </option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Mức độ
              </label>

              <select
                class="form-select rounded-4"
                v-model="practice.level"
              >
                <option value="">Chọn mức độ</option>
                <option value="Dễ">Dễ</option>
                <option value="Trung bình">Trung bình</option>
                <option value="Khó">Khó</option>
              </select>
            </div>

            <div class="col-12">
              <label class="form-label">
                Mô tả bài luyện
              </label>

              <textarea
                class="form-control rounded-4"
                rows="4"
                placeholder="Nhập mô tả bài luyện tập"
                v-model="practice.description"
              ></textarea>
            </div>

          </div>
        </div>

        <!-- DANH SÁCH BƯỚC LUYỆN TẬP -->
        <div class="bg-light rounded-4 p-4 shadow-sm">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="fw-bold">
              Các bước luyện tập
            </div>

            <button
              class="btn btn-primary btn-sm rounded-pill"
              @click="addStep"
            >
              Thêm bước
            </button>
          </div>

          <div
            v-for="(step, index) in practice.steps"
            :key="index"
            class="bg-white rounded-4 border p-3 mb-3"
          >
            <div class="row g-3">

              <div class="col-md-4">
                <label class="form-label small">
                  Loại bước
                </label>

                <select
                  class="form-select rounded-4"
                  v-model="step.type"
                >
                  <option value="listen">Nghe âm</option>
                  <option value="watch">Xem khẩu hình</option>
                  <option value="repeat">Lặp lại</option>
                  <option value="speak">Ghi âm</option>
                  <option value="feedback">Phản hồi</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label small">
                  Tiêu đề
                </label>

                <input
                  type="text"
                  class="form-control rounded-4"
                  v-model="step.title"
                >
              </div>

              <div class="col-md-2 d-flex align-items-end">
                <button
                  class="btn btn-outline-danger w-100 rounded-pill"
                  @click="removeStep(index)"
                >
                  Xóa
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- THÔNG TIN PHỤ -->
      <div class="col-lg-4">
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
          <div class="fw-bold mb-3">
            Tóm tắt bài luyện
          </div>

          <div class="mb-3">
            <small class="text-muted d-block">
              Tổng số bước
            </small>

            <div class="fw-bold">
              {{ practice.steps.length }}
            </div>
          </div>

          <div class="mb-3">
            <small class="text-muted d-block">
              Loại bài luyện
            </small>

            <div class="fw-bold">
              {{ practice.type || 'Chưa chọn' }}
            </div>
          </div>

          <div>
            <small class="text-muted d-block">
              Trạng thái
            </small>

            <div class="fw-bold text-warning">
              Chưa lưu
            </div>
          </div>
        </div>

        <div class="bg-light rounded-4 p-4 shadow-sm">
          <button
            class="btn btn-primary w-100 rounded-pill mb-3"
            @click="savePractice"
          >
            Lưu bài luyện
          </button>

          <button
            class="btn btn-outline-primary w-100 rounded-pill"
            @click="previewPractice"
          >
            Xem trước
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "PracticeCreate",

  data() {
    return {
      // dữ liệu form bài luyện tập
      practice: {
        lesson_id: "",
        type: "",
        word_id: "",
        level: "",
        description: "",
        steps: [
          {
            type: "listen",
            title: "Nghe âm mẫu"
          },
          {
            type: "watch",
            title: "Xem khẩu hình"
          }
        ]
      },

      // dữ liệu từ bảng bai_hoc
      lessons: [
        {
          id: 1,
          ten_bai_hoc: "Âm L cơ bản"
        },
        {
          id: 2,
          ten_bai_hoc: "Phân biệt L và N"
        }
      ],

      // dữ liệu từ bảng tu_vung
      words: [
        {
          id: 1,
          ten_tu: "Lá"
        },
        {
          id: 2,
          ten_tu: "Lửa"
        }
      ]
    };
  },

  methods: {
    addStep() {
      this.practice.steps.push({
        type: "listen",
        title: ""
      });
    },

    removeStep(index) {
      this.practice.steps.splice(index, 1);
    },

    savePractice() {
      console.log("Lưu bài luyện tập", this.practice);

      this.$router.push('/teacher/lesson');
    },

    previewPractice() {
      this.$router.push('/child/practice/therapy');
    },

    goBack() {
      this.$router.push('/teacher/lesson');
    }
  }
};
</script>

<style scoped>
.practice-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>