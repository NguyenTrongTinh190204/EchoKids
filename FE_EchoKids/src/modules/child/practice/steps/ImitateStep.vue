<template>
  <div class="bg-light rounded-4 p-4 shadow-sm text-center">

    <!-- TỪ ĐANG LUYỆN -->
    <div class="mb-4">
      <div class="display-5 fw-bold text-primary">
        {{ word.ten_tu }}
      </div>

      <small class="text-muted">
        Nghe và lặp lại theo âm mẫu
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

    <!-- NÚT ÂM THANH -->
    <div class="d-flex justify-content-center gap-2 flex-wrap mb-4">
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

    <!-- GỢI Ý -->
    <div class="bg-white rounded-4 border p-3">
      <small class="text-muted">
        Hãy lặp lại chậm rãi và cố gắng giống âm mẫu nhất có thể
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "ImitateStep",

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