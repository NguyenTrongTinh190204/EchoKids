<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Tạo bài luyện tập</h4>
        <p class="text-muted mb-0">
          Thiết kế bài luyện phát âm và nghe hiểu cho trẻ
        </p>
      </div>

      <button
        class="btn btn-outline-primary rounded px-4"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <div class="row g-4">

      <div class="col-lg-8">
        <div class="card border-0 shadow-sm rounded mb-4">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Thông tin bài luyện tập
            </h6>

            <div class="row g-3">

              <div class="col-md-6">
                <label class="form-label">
                  Bài học
                </label>

                <select
                  class="form-select"
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
                  class="form-select"
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
                  class="form-select"
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
                  class="form-select"
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
                  class="form-control"
                  rows="4"
                  placeholder="Nhập mô tả bài luyện tập"
                  v-model="practice.description"
                ></textarea>
              </div>

            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="fw-bold mb-0">
                Các bước luyện tập
              </h6>

              <button
                class="btn btn-primary btn-sm rounded"
                @click="addStep"
              >
                Thêm bước
              </button>
            </div>

            <div
              v-for="(step, index) in practice.steps"
              :key="index"
              class="border rounded p-3 mb-3"
            >
              <div class="row g-3">

                <div class="col-md-4">
                  <label class="form-label small">
                    Loại bước
                  </label>

                  <select
                    class="form-select"
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
                    class="form-control"
                    v-model="step.title"
                  >
                </div>

                <div class="col-md-2 d-flex align-items-end">
                  <button
                    class="btn btn-outline-danger w-100 rounded"
                    @click="removeStep(index)"
                  >
                    Xóa
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-lg-4">

        <div class="card border-0 shadow-sm rounded mb-4">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Tóm tắt bài luyện
            </h6>

            <div class="border rounded p-3 mb-3">
              <small class="text-muted d-block mb-1">
                Tổng số bước
              </small>

              <div class="fw-bold">
                {{ practice.steps.length }}
              </div>
            </div>

            <div class="border rounded p-3 mb-3">
              <small class="text-muted d-block mb-1">
                Loại bài luyện
              </small>

              <div class="fw-bold">
                {{ practice.type || 'Chưa chọn' }}
              </div>
            </div>

            <div class="border rounded p-3">
              <small class="text-muted d-block mb-1">
                Trạng thái
              </small>

              <div class="fw-bold text-warning">
                Chưa lưu
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <button
              class="btn btn-primary w-100 rounded mb-3"
              @click="savePractice"
            >
              Lưu bài luyện
            </button>

            <button
              class="btn btn-outline-primary w-100 rounded"
              @click="previewPractice"
            >
              Xem trước
            </button>
          </div>
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
.container-fluid {
  min-height: 100vh;
}
</style>