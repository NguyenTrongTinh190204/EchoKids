<template>
  <div class="bg-light rounded-4 p-4 shadow-sm text-center">

    <!-- TỪ ĐANG LUYỆN -->
    <div class="mb-4">
      <div class="display-5 fw-bold text-primary">
        {{ word.ten_tu }}
      </div>

      <small class="text-muted">
        Nghe thật kỹ và lặp lại theo âm mẫu
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

    <!-- KHU VỰC PHÁT ÂM -->
    <div class="bg-white rounded-4 border p-4 mb-4">
      <div class="mb-3">
        <small class="text-muted">
          Nhấn để nghe âm mẫu nhiều lần
        </small>
      </div>

      <div class="d-flex justify-content-center gap-2 flex-wrap">
        <button
          class="btn btn-primary rounded-pill px-4"
          @click="playAudio"
        >
          Nghe mẫu
        </button>

        <button
          class="btn btn-warning rounded-pill px-4"
          @click="repeatAudio"
        >
          Nghe lại
        </button>
      </div>
    </div>

    <!-- GỢI Ý -->
    <div class="bg-white rounded-4 border p-3">
      <small class="text-muted">
        Hãy chú ý âm đầu, vần và thanh điệu khi lặp lại
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "RepeatStep",

  props: {
    word: {
      type: Object,
      default() {
        return {
          ten_tu: "Lá",
          hinh_anh: "https://via.placeholder.com/300x220",
          audio: "/audio/la.mp3"
        };
      }
    }
  },

  methods: {
    playAudio() {
      const audio = new Audio(this.word.audio);
      audio.play();
    },

    repeatAudio() {
      const audio = new Audio(this.word.audio);
      audio.play();
    }
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>