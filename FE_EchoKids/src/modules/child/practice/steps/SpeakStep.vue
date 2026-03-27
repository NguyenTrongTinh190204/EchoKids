<template>
  <div class="bg-light rounded-4 p-4 shadow-sm text-center">

    <!-- TỪ ĐANG LUYỆN -->
    <div class="mb-4">
      <div class="display-5 fw-bold text-primary">
        {{ word.ten_tu }}
      </div>

      <small class="text-muted">
        Nhấn nút để ghi âm giọng nói của bé
      </small>
    </div>

    <!-- HÌNH ẢNH -->
    <div class="mb-4">
      <img
        :src="word.hinh_anh"
        :alt="word.ten_tu"
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
    <div class="bg-white rounded-4 border p-3">
      <small
        class="fw-bold"
        :class="isRecording ? 'text-danger' : 'text-muted'"
      >
        {{ isRecording ? 'Đang ghi âm...' : 'Sẵn sàng ghi âm' }}
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "SpeakStep",

  props: {
    word: {
      type: Object,
      default() {
        return {
          ten_tu: "Lá",
          hinh_anh: "https://via.placeholder.com/300x220"
        };
      }
    }
  },

  data() {
    return {
      isRecording: false
    };
  },

  methods: {
    toggleRecord() {
      this.isRecording = !this.isRecording;
    }
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
}

.record-btn {
  width: 90px;
  height: 90px;
  font-size: 16px;
}
</style>