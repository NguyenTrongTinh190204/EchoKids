<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Thêm từ vựng</h4>
        <p class="text-muted mb-0">
          Tạo từ vựng mới cho bài học
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
              Thông tin từ vựng
            </h6>

            <div class="row g-3">

              <div class="col-md-6">
                <label class="form-label">
                  Từ vựng
                </label>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập từ vựng"
                  v-model="word.ten_tu"
                >
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Chủ đề
                </label>

                <select
                  class="form-select"
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
                  class="form-select"
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
                  class="form-select"
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
                  class="form-control"
                  @change="handleImageUpload"
                >
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Audio mẫu
                </label>

                <input
                  type="file"
                  class="form-control"
                  @change="handleAudioUpload"
                >
              </div>

              <div class="col-12">
                <label class="form-label">
                  Mô tả
                </label>

                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Nhập mô tả từ vựng"
                  v-model="word.mo_ta"
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
              Xem trước
            </h6>

            <div class="border rounded p-3 text-center">
              <img
                :src="previewImage"
                alt="Preview"
                class="img-fluid rounded border mb-3 preview-image"
              >

              <div class="fw-bold mb-1">
                {{ word.ten_tu || 'Tên từ vựng' }}
              </div>

              <small class="text-muted">
                {{ word.loi_phat_am || 'Loại lỗi phát âm' }}
              </small>
            </div>

          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <button
              class="btn btn-primary w-100 rounded mb-3"
              @click="saveWord"
            >
              Lưu từ vựng
            </button>

            <button
              class="btn btn-outline-primary w-100 rounded"
              @click="saveAndContinue"
            >
              Lưu và thêm tiếp
            </button>
          </div>
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

      word: {
        ten_tu: "",
        danh_muc_id: "",
        loi_phat_am: "",
        cap_do: "",
        mo_ta: "",
        hinh_anh: null,
        audio: null
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
.preview-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
</style>