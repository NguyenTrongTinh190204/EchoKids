<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Tải lên audio mẫu</h4>
        <p class="text-muted mb-0">
          Thêm file audio cho từ vựng hoặc bài học
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
              Thông tin audio
            </h6>

            <div class="row g-3">

              <div class="col-md-6">
                <label class="form-label">
                  Loại dữ liệu
                </label>

                <select
                  class="form-select"
                  v-model="audio.type"
                >
                  <option value="">Chọn loại dữ liệu</option>
                  <option value="Từ vựng">Từ vựng</option>
                  <option value="Bài học">Bài học</option>
                  <option value="Bài luyện tập">Bài luyện tập</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Tên audio
                </label>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập tên audio"
                  v-model="audio.name"
                >
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Chủ đề
                </label>

                <select
                  class="form-select"
                  v-model="audio.subject"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="Âm cơ bản">Âm cơ bản</option>
                  <option value="Âm khó">Âm khó</option>
                  <option value="Nghe hiểu">Nghe hiểu</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">
                  Mức độ
                </label>

                <select
                  class="form-select"
                  v-model="audio.level"
                >
                  <option value="">Chọn mức độ</option>
                  <option value="Dễ">Dễ</option>
                  <option value="Trung bình">Trung bình</option>
                  <option value="Khó">Khó</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">
                  File audio
                </label>

                <input
                  type="file"
                  class="form-control"
                  accept="audio/*"
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
                  placeholder="Nhập mô tả audio"
                  v-model="audio.description"
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

              <div class="audio-icon mb-3">
                🎵
              </div>

              <div class="fw-bold mb-1">
                {{ audio.name || 'Tên audio' }}
              </div>

              <small class="text-muted d-block mb-3">
                {{ audio.type || 'Loại dữ liệu' }}
              </small>

              <audio
                v-if="audio.previewUrl"
                controls
                class="w-100"
              >
                <source :src="audio.previewUrl">
              </audio>

              <small
                v-else
                class="text-muted"
              >
                Chưa có file audio được tải lên
              </small>

            </div>

          </div>
        </div>

        <div class="card border-0 shadow-sm rounded">
          <div class="card-body">
            <button
              class="btn btn-primary w-100 rounded mb-3"
              @click="saveAudio"
            >
              Lưu audio
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
  name: "AudioUpload",

  data() {
    return {
      audio: {
        type: "",
        name: "",
        subject: "",
        level: "",
        description: "",
        file: null,
        previewUrl: ""
      }
    };
  },

  methods: {
    handleAudioUpload(event) {
      const file = event.target.files[0];

      if (file) {
        this.audio.file = file;
        this.audio.previewUrl = URL.createObjectURL(file);
      }
    },

    saveAudio() {
      console.log("Lưu audio", this.audio);

      this.$router.push('/teacher/audio');
    },

    resetForm() {
      this.audio = {
        type: "",
        name: "",
        subject: "",
        level: "",
        description: "",
        file: null,
        previewUrl: ""
      };
    },

    goBack() {
      this.$router.push('/teacher/audio');
    }
  }
};
</script>

<style scoped>
.audio-icon {
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