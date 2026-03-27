<template>
  <div class="bg-light rounded-4 p-4 shadow-sm text-center">

    <!-- TỪ ĐANG LUYỆN -->
    <div class="mb-4">
      <div class="display-5 fw-bold text-primary">
        {{ word.ten_tu }}
      </div>

      <small class="text-muted">
        Nghe cách phát âm mẫu
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

    <!-- AUDIO MẪU -->
    <div class="mb-4">
      <button
        class="btn btn-primary rounded-pill px-4"
        @click="playAudio"
      >
        Phát âm mẫu
      </button>
    </div>

    <!-- GỢI Ý -->
    <div class="bg-white rounded-4 border p-3">
      <small class="text-muted">
        Hãy nghe kỹ âm đầu và thanh điệu trước khi chuyển sang bước tiếp theo
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "ListenStep",

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
    }
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>