<template>
  <div class="container py-3 record-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <div class="fw-bold text-primary">Ghi âm 🎤</div>
        <small class="text-muted">
          Hãy đọc từ bên dưới thật rõ ràng
        </small>
      </div>

      <button
        class="btn btn-outline-primary btn-sm rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- THẺ GHI ÂM -->
    <div class="bg-light rounded-4 p-4 shadow-sm text-center mb-4">

      <!-- TỪ ĐANG LUYỆN -->
      <div class="mb-4">
        <div class="display-4 fw-bold text-primary">
          {{ practice.ten_tu }}
        </div>

        <small class="text-muted">
          {{ practice.mo_ta }}
        </small>
      </div>

      <!-- HÌNH ẢNH -->
      <div class="mb-4">
        <img
          :src="practice.hinh_anh"
          :alt="practice.ten_tu"
          class="img-fluid rounded-4 border"
          style="max-height: 220px;"
        >
      </div>

      <!-- NÚT GHI ÂM -->
      <div class="mb-4">
        <button
          class="btn rounded-circle shadow-sm record-btn"
          :class="isRecording ? 'btn-danger' : 'btn-primary'"
          @click="toggleRecord"
        >
          {{ isRecording ? 'Dừng' : 'Ghi' }}
        </button>
      </div>

      <!-- TRẠNG THÁI -->
      <div class="bg-white rounded-4 border p-3 mb-4">
        <div
          class="fw-bold"
          :class="isRecording ? 'text-danger' : 'text-muted'"
        >
          {{ recordingStatus }}
        </div>
      </div>

      <!-- THỜI GIAN GHI ÂM -->
      <div class="mb-4">
        <small class="text-muted">
          Thời gian ghi âm: {{ recordingTime }} giây
        </small>
      </div>

      <!-- NÚT HÀNH ĐỘNG -->
      <div class="d-flex justify-content-center gap-2 flex-wrap">
        <button
          class="btn btn-outline-secondary rounded-pill px-4"
          @click="playSampleAudio"
        >
          Nghe mẫu
        </button>

        <button
          class="btn btn-primary rounded-pill px-4"
          :disabled="!hasRecorded"
          @click="submitRecord"
        >
          Gửi kết quả
        </button>
      </div>

    </div>

    <!-- GỢI Ý -->
    <div class="bg-light rounded-4 p-3 shadow-sm">
      <div class="fw-bold mb-1">Gợi ý phát âm 🎯</div>

      <small class="text-muted">
        Hãy nói chậm, rõ âm đầu và giữ khoảng cách vừa phải với micro
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "RecordVoice",

  data() {
    return {
      isRecording: false,
      hasRecorded: false,
      recordingTime: 0,
      timer: null,

      // dữ liệu từ bảng tu_vung + bai_luyen_tap
      practice: {
        id: 1,
        ten_tu: "Lá",
        mo_ta: "Đọc từ thật to và rõ ràng",
        hinh_anh: "https://via.placeholder.com/300x220",
        audio_mau: "/audio/la.mp3"
      }
    };
  },

  computed: {
    recordingStatus() {
      if (this.isRecording) {
        return "Đang ghi âm...";
      }

      if (this.hasRecorded) {
        return "Đã ghi âm thành công";
      }

      return "Sẵn sàng ghi âm";
    }
  },

  methods: {
    toggleRecord() {
      this.isRecording = !this.isRecording;

      if (this.isRecording) {
        this.recordingTime = 0;

        this.timer = setInterval(() => {
          this.recordingTime++;
        }, 1000);
      } else {
        clearInterval(this.timer);
        this.hasRecorded = true;
      }
    },

    playSampleAudio() {
      const audio = new Audio(this.practice.audio_mau);
      audio.play();
    },

    submitRecord() {
      this.$router.push({
        path: '/child/speaking/result',
        query: {
          practiceId: this.practice.id
        }
      });
    },

    goBack() {
      this.$router.push('/child/practice/therapy');
    }
  },

  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.record-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.record-btn {
  width: 100px;
  height: 100px;
  font-size: 18px;
}

img {
  object-fit: cover;
}
</style>