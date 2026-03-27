<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Tạo bài học</h4>
        <p class="text-muted mb-0">
          Tạo bài học mới cho trẻ
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
        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Thông tin bài học
            </h6>

            <div class="row g-3">

              <div class="col-md-6">
                <label class="form-label">
                  Tên bài học
                </label>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập tên bài học"
                  v-model="lesson.ten_bai_hoc"
                >
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Chủ đề
                </label>

                <select
                  class="form-select"
                  v-model="lesson.danh_muc_id"
                >
                  <option value="">Chọn chủ đề</option>

                  <option
                    v-for="subject in subjects"
                    :key="subject.id"
                    :value="subject.id"
                  >
                    {{ subject.ten_danh_muc }}
                  </option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Mức độ
                </label>

                <select
                  class="form-select"
                  v-model="lesson.cap_do"
                >
                  <option value="">Chọn mức độ</option>
                  <option value="Dễ">Dễ</option>
                  <option value="Trung bình">Trung bình</option>
                  <option value="Khó">Khó</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Độ tuổi phù hợp
                </label>

                <select
                  class="form-select"
                  v-model="lesson.do_tuoi"
                >
                  <option value="">Chọn độ tuổi</option>
                  <option value="3-4">3 - 4 tuổi</option>
                  <option value="5-6">5 - 6 tuổi</option>
                  <option value="7-8">7 - 8 tuổi</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">
                  Mô tả bài học
                </label>

                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Nhập mô tả bài học"
                  v-model="lesson.mo_ta"
                ></textarea>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">

        <div class="card border-0 shadow-sm rounded mb-4">
          <div class="card-body">
            <h6 class="fw-bold mb-3">
              Thông tin nhanh
            </h6>

            <div class="border rounded p-3 mb-3">
              <small class="text-muted d-block mb-1">
                Số từ vựng
              </small>

              <div class="fw-bold">
                {{ lesson.so_tu_vung }}
              </div>
            </div>

            <div class="border rounded p-3 mb-3">
              <small class="text-muted d-block mb-1">
                Trạng thái
              </small>

              <div class="fw-bold text-warning">
                Chờ tạo bài tập
              </div>
            </div>

            <div class="border rounded p-3">
              <small class="text-muted d-block mb-1">
                Người tạo
              </small>

              <div class="fw-bold">
                Giáo viên
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <button
              class="btn btn-primary w-100 rounded mb-3"
              @click="saveLesson"
            >
              Lưu bài học
            </button>

            <button
              class="btn btn-outline-primary w-100 rounded"
              @click="saveAndCreatePractice"
            >
              Lưu và tạo bài tập
            </button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LessonCreate",

  data() {
    return {
      lesson: {
        ten_bai_hoc: "",
        danh_muc_id: "",
        cap_do: "",
        do_tuoi: "",
        mo_ta: "",
        so_tu_vung: 0
      },

      subjects: [
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
      ]
    };
  },

  methods: {
    saveLesson() {
      console.log("Lưu bài học", this.lesson);

      this.$router.push('/teacher/lesson');
    },

    saveAndCreatePractice() {
      console.log("Lưu bài học và tạo bài tập", this.lesson);

      this.$router.push('/teacher/practice-builder/create');
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