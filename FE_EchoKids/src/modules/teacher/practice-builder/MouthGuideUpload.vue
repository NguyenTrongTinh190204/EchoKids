<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Tải lên hướng dẫn khẩu hình</h4>
        <p class="text-muted mb-0">
          Thêm hình ảnh hoặc video hướng dẫn khẩu hình phát âm
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
              Thông tin hướng dẫn
            </h6>

            <div class="row g-3">

              <div class="col-md-6">
                <label class="form-label">
                  Âm cần hướng dẫn
                </label>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Ví dụ: Âm S, Âm R, Âm CH"
                  v-model="guide.sound"
                >
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Loại dữ liệu
                </label>

                <select
                  class="form-select"
                  v-model="guide.type"
                >
                  <option value="">Chọn loại dữ liệu</option>
                  <option value="Hình ảnh">Hình ảnh</option>
                  <option value="Video">Video</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Mức độ
                </label>

                <select
                  class="form-select"
                  v-model="guide.level"
                >
                  <option value="">Chọn mức độ</option>
                  <option value="Dễ">Dễ</option>
                  <option value="Trung bình">Trung bình</option>
                  <option value="Khó">Khó</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Chủ đề
                </label>

                <select
                  class="form-select"
                  v-model="guide.subject"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="Âm cơ bản">Âm cơ bản</option>
                  <option value="Âm khó">Âm khó</option>
                  <option value="Nghe hiểu">Nghe hiểu</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">
                  File hướng dẫn
                </label>

                <input
                  type="file"
                  class="form-control"
                  accept="image/*,video/*"
                  @change="handleFileUpload"
                >
              </div>

              <div class="col-12">
                <label class="form-label">
                  Mô tả
                </label>

                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Nhập mô tả khẩu hình phát âm"
                  v-model="guide.description"
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

              <div
                v-if="guide.previewUrl && guide.type === 'Hình ảnh'"
                class="mb-3"
              >
                <img
                  :src="guide.previewUrl"
                  alt="Preview"
                  class="img-fluid rounded border preview-image"
                >
              </div>

              <div
                v-else-if="guide.previewUrl && guide.type === 'Video'"
                class="mb-3"
              >
                <video
                  controls
                  class="w-100 rounded border preview-video"
                >
                  <source :src="guide.previewUrl">
                </video>
              </div>

              <div
                v-else
                class="preview-placeholder mb-3"
              >
                📷
              </div>

              <div class="fw-bold mb-1">
                {{ guide.sound || 'Âm cần hướng dẫn' }}
              </div>

              <small class="text-muted d-block">
                {{ guide.type || 'Loại dữ liệu' }}
              </small>

            </div>

          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <button
              class="btn btn-primary w-100 rounded mb-3"
              @click="saveGuide"
            >
              Lưu hướng dẫn
            </button>

            <button
              class="btn btn-outline-primary w-100 rounded"
              @click="resetForm"
            >
              Làm mới
            </button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "MouthGuideUpload",

  data() {
    return {
      guide: {
        sound: "",
        type: "",
        level: "",
        subject: "",
        description: "",
        file: null,
        previewUrl: ""
      }
    };
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];

      if (file) {
        this.guide.file = file;
        this.guide.previewUrl = URL.createObjectURL(file);
      }
    },

    saveGuide() {
      console.log("Lưu hướng dẫn khẩu hình", this.guide);

      this.$router.push('/teacher/mouth-guide');
    },

    resetForm() {
      this.guide = {
        sound: "",
        type: "",
        level: "",
        subject: "",
        description: "",
        file: null,
        previewUrl: ""
      };
    },

    goBack() {
      this.$router.push('/teacher/mouth-guide');
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

.preview-video {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.preview-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #0d6efd;
  color: #ffffff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>