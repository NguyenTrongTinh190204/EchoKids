<template>
  <div class="container-fluid py-4 edit-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Chỉnh sửa bài học
        </h4>
        <small class="text-muted">
          Cập nhật thông tin bài học và nội dung liên quan
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

      <!-- FORM CHỈNH SỬA -->
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
                v-model="lesson.mo_ta"
              ></textarea>
            </div>

          </div>
        </div>

        <!-- DANH SÁCH TỪ VỰNG -->
        <div class="bg-light rounded-4 p-4 shadow-sm mt-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="fw-bold">
              Từ vựng trong bài học
            </div>

            <button
              class="btn btn-primary btn-sm rounded-pill"
              @click="addVocabulary"
            >
              Thêm từ
            </button>
          </div>

          <div
            v-for="(word, index) in vocabularies"
            :key="index"
            class="bg-white rounded-4 border p-3 mb-3"
          >
            <div class="row g-3">

              <div class="col-md-4">
                <label class="form-label small">
                  Từ vựng
                </label>

                <input
                  type="text"
                  class="form-control rounded-4"
                  v-model="word.ten_tu"
                >
              </div>

              <div class="col-md-4">
                <label class="form-label small">
                  Loại lỗi
                </label>

                <select
                  class="form-select rounded-4"
                  v-model="word.loi_phat_am"
                >
                  <option value="Âm đầu">Âm đầu</option>
                  <option value="Vần">Vần</option>
                  <option value="Thanh điệu">Thanh điệu</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label small">
                  Mức độ
                </label>

                <select
                  class="form-select rounded-4"
                  v-model="word.cap_do"
                >
                  <option value="Dễ">Dễ</option>
                  <option value="Trung bình">Trung bình</option>
                  <option value="Khó">Khó</option>
                </select>
              </div>

            </div>

            <div class="text-end mt-3">
              <button
                class="btn btn-outline-danger btn-sm rounded-pill"
                @click="removeVocabulary(index)"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- THÔNG TIN PHỤ -->
      <div class="col-lg-4">
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
          <div class="fw-bold mb-3">
            Thông tin bài học
          </div>

          <div class="mb-3">
            <small class="text-muted d-block">
              Trạng thái
            </small>

            <span
              class="badge px-3 py-2"
              :class="lesson.trang_thai === 'Đã duyệt' ? 'bg-success' : 'bg-warning text-dark'"
            >
              {{ lesson.trang_thai }}
            </span>
          </div>

          <div class="mb-3">
            <small class="text-muted d-block">
              Số từ vựng
            </small>

            <div class="fw-bold">
              {{ vocabularies.length }}
            </div>
          </div>

          <div>
            <small class="text-muted d-block">
              Cập nhật gần nhất
            </small>

            <div class="fw-bold">
              20/03/2026
            </div>
          </div>
        </div>

        <div class="bg-light rounded-4 p-4 shadow-sm">
          <button
            class="btn btn-primary w-100 rounded-pill mb-3"
            @click="saveLesson"
          >
            Lưu thay đổi
          </button>

          <button
            class="btn btn-outline-primary w-100 rounded-pill"
            @click="goToPracticeBuilder"
          >
            Chỉnh sửa bài tập
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LessonEdit",

  data() {
    return {
      // dữ liệu từ bảng bai_hoc
      lesson: {
        id: 1,
        ten_bai_hoc: "Âm L cơ bản",
        danh_muc_id: 2,
        cap_do: "Dễ",
        do_tuoi: "5-6",
        mo_ta: "Giúp bé phát âm rõ âm L qua các từ đơn giản.",
        trang_thai: "Đã duyệt"
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
      ],

      // dữ liệu từ bảng tu_vung
      vocabularies: [
        {
          ten_tu: "Lá",
          loi_phat_am: "Âm đầu",
          cap_do: "Dễ"
        },
        {
          ten_tu: "Lửa",
          loi_phat_am: "Âm đầu",
          cap_do: "Trung bình"
        }
      ]
    };
  },

  methods: {
    addVocabulary() {
      this.vocabularies.push({
        ten_tu: "",
        loi_phat_am: "Âm đầu",
        cap_do: "Dễ"
      });
    },

    removeVocabulary(index) {
      this.vocabularies.splice(index, 1);
    },

    saveLesson() {
      console.log("Lưu thay đổi", this.lesson, this.vocabularies);

      this.$router.push('/teacher/lesson');
    },

    goToPracticeBuilder() {
      this.$router.push({
        path: '/teacher/practice-builder/create',
        query: {
          lessonId: this.lesson.id
        }
      });
    },

    goBack() {
      this.$router.push('/teacher/lesson');
    }
  }
};
</script>

<style scoped>
.edit-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}
</style>