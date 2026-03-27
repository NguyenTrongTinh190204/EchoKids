<template>
  <div class="container-fluid py-4 create-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Thêm từ vựng
        </h4>
        <small class="text-muted">
          Tạo từ vựng mới cho bài học
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
        <div class="bg-light rounded-4 p-4 shadow-sm">

          <div class="fw-bold mb-3">
            Thông tin từ vựng
          </div>

          <div class="row g-3">

            <div class="col-md-6">
              <label class="form-label">
                Từ vựng
              </label>

              <input
                type="text"
                class="form-control rounded-4"
                placeholder="Nhập từ vựng"
                v-model="word.ten_tu"
              >
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Chủ đề
              </label>

              <select
                class="form-select rounded-4"
                v-model="word.danh_muc_id"
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
                Loại lỗi phát âm
              </label>

              <select
                class="form-select rounded-4"
                v-model="word.loi_phat_am"
              >
                <option value="">Chọn loại lỗi</option>
                <option value="Âm đầu">Âm đầu</option>
                <option value="Vần">Vần</option>
                <option value="Thanh điệu">Thanh điệu</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Mức độ
              </label>

              <select
                class="form-select rounded-4"
                v-model="word.cap_do"
              >
                <option value="">Chọn mức độ</option>
                <option value="Dễ">Dễ</option>
                <option value="Trung bình">Trung bình</option>
                <option value="Khó">Khó</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Hình ảnh
              </label>

              <input
                type="file"
                class="form-control rounded-4"
                @change="handleImageUpload"
              >
            </div>

            <div class="col-md-6">
              <label class="form-label">
                Audio mẫu
              </label>

              <input
                type="file"
                class="form-control rounded-4"
                @change="handleAudioUpload"
              >
            </div>

            <div class="col-12">
              <label class="form-label">
                Mô tả
              </label>

              <textarea
                class="form-control rounded-4"
                rows="4"
                placeholder="Nhập mô tả từ vựng"
                v-model="word.mo_ta"
              ></textarea>
            </div>

          </div>
        </div>
      </div>

      <!-- XEM TRƯỚC -->
      <div class="col-lg-4">
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4">

          <div class="fw-bold mb-3">
            Xem trước
          </div>

          <div class="bg-white rounded-4 border p-3 text-center">
            <img
              :src="previewImage"
              alt="Preview"
              class="img-fluid rounded-4 border mb-3 preview-image"
            >

            <div class="fw-bold mb-1">
              {{ word.ten_tu || 'Tên từ vựng' }}
            </div>

            <small class="text-muted">
              {{ word.loi_phat_am || 'Loại lỗi phát âm' }}
            </small>
          </div>
        </div>

        <div class="bg-light rounded-4 p-4 shadow-sm">
          <button
            class="btn btn-primary w-100 rounded-pill mb-3"
            @click="saveWord"
          >
            Lưu từ vựng
          </button>

          <button
            class="btn btn-outline-primary w-100 rounded-pill"
            @click="saveAndContinue"
          >
            Lưu và thêm tiếp
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "VocabularyCreate",

  data() {
    return {
      previewImage: "https://via.placeholder.com/250x200",

      // dữ liệu form từ vựng
      word: {
        ten_tu: "",
        danh_muc_id: "",
        loi_phat_am: "",
        cap_do: "",
        mo_ta: "",
        hinh_anh: null,
        audio: null
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
    handleImageUpload(event) {
      const file = event.target.files[0];

      if (file) {
        this.word.hinh_anh = file;
        this.previewImage = URL.createObjectURL(file);
      }
    },

    handleAudioUpload(event) {
      const file = event.target.files[0];

      if (file) {
        this.word.audio = file;
      }
    },

    saveWord() {
      console.log("Lưu từ vựng", this.word);

      this.$router.push('/teacher/vocabulary');
    },

    saveAndContinue() {
      console.log("Lưu và thêm tiếp", this.word);

      this.word = {
        ten_tu: "",
        danh_muc_id: "",
        loi_phat_am: "",
        cap_do: "",
        mo_ta: "",
        hinh_anh: null,
        audio: null
      };

      this.previewImage = "https://via.placeholder.com/250x200";
    },

    goBack() {
      this.$router.push('/teacher/vocabulary');
    }
  }
};
</script>

<style scoped>
.create-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.preview-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
</style>