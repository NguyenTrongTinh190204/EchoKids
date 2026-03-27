<template>
  <div class="bg-light rounded-4 p-4 shadow-sm text-center">

    <!-- TỪ ĐANG LUYỆN -->
    <div class="mb-4">
      <div class="display-5 fw-bold text-primary">
        {{ word.ten_tu }}
      </div>

      <small class="text-muted">
        Quan sát khẩu hình miệng khi phát âm
      </small>
    </div>

    <!-- VIDEO KHẨU HÌNH -->
    <div class="bg-white rounded-4 border p-3 mb-4">
      <video
        class="w-100 rounded-4"
        controls
        :src="word.video_khau_hinh"
        style="max-height: 260px; object-fit: cover;"
      >
        Trình duyệt không hỗ trợ video
      </video>
    </div>

    <!-- GỢI Ý -->
    <div class="bg-white rounded-4 border p-3">
      <small class="text-muted">
        Hãy chú ý vị trí môi, lưỡi và cách mở miệng khi phát âm
      </small>
    </div>

  </div>
</template>

<script>
export default {
  name: "WatchStep",

  props: {
    word: {
      type: Object,
      default() {
        return {
          ten_tu: "Lá",
          video_khau_hinh: "https://www.w3schools.com/html/mov_bbb.mp4"
        };
      }
    }
  }
};
</script>

<style scoped>
video {
  background-color: #f8f9fa;
}
</style>