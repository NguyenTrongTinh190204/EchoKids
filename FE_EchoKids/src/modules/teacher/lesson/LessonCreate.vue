<template>
  <div class="container-fluid py-4 create-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Tạo bài học
        </h4>
        <small class="text-muted">
          Tạo bài học mới cho trẻ
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

      <!-- FORM THÔNG TIN BÀI HỌC -->
      <div class="col-lg-8">
        <div class="bg-light rounded-4 p-4 shadow-sm">

          <div class="fw-bold mb-3">
            Thông tin bài học
          </div>

          <div class="row g-3">

            <div class="col-md-6">
              <label class="form-label">
                Tên bài học
              </label>

              <input
                type="text"
                class="form-control rounded-4"
                placeholder="Nhập tên bài học"
                v-model="lesson.ten_bai_hoc"
              >
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Chủ đề
              </label>

              <select
                class="form-select rounded-4"
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
                class="form-select rounded-4"
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
                class="form-select rounded-4"
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
                class="form-control rounded-4"
                rows="4"
                placeholder="Nhập mô tả bài học"
                v-model="lesson.mo_ta"
              ></textarea>
            </div>

          </div>

        </div>
      </div>

      <!-- THÔNG TIN PHỤ -->
      <div class="col-lg-4">
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4">

          <div class="fw-bold mb-3">
            Thông tin nhanh
          </div>

          <div class="mb-3">
            <small class="text-muted d-block">
              Số từ vựng
            </small>

            <div class="fw-bold">
              {{ lesson.so_tu_vung }}
            </div>
          </div>

          <div class="mb-3">
            <small class="text-muted d-block">
              Trạng thái
            </small>

            <div class="fw-bold text-warning">
              Chờ tạo bài tập
            </div>
          </div>

          <div>
            <small class="text-muted d-block">
              Người tạo
            </small>

            <div class="fw-bold">
              Giáo viên
            </div>
          </div>

        </div>

        <div class="bg-light rounded-4 p-4 shadow-sm">
          <button
            class="btn btn-primary w-100 rounded-pill mb-3"
            @click="saveLesson"
          >
            Lưu bài học
          </button>

          <button
            class="btn btn-outline-primary w-100 rounded-pill"
            @click="saveAndCreatePractice"
          >
            Lưu và tạo bài tập
          </button>
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
      // dữ liệu form bài học
      lesson: {
        ten_bai_hoc: "",
        danh_muc_id: "",
        cap_do: "",
        do_tuoi: "",
        mo_ta: "",
        so_tu_vung: 0
      },

      // dữ liệu từ bảng danh_muc_bai_hoc
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
.create-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>