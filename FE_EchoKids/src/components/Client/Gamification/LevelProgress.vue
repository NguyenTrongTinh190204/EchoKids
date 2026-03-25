<template>
  <div class="level-box p-3 shadow-sm">

    <!-- tiêu đề -->
    <div class="text-center mb-2">
      <h6>Cấp độ</h6>
    </div>

    <!-- level hiện tại -->
    <div class="text-center level-number">
      Level {{ level }}
    </div>

    <!-- thanh tiến trình -->
    <div class="progress mt-3">
      <div
        class="progress-bar"
        :style="{ width: progress + '%' }"
      ></div>
    </div>

    <!-- phần trăm -->
    <div class="text-center mt-2 percent">
      {{ progress }}%
    </div>

    <!-- thông báo -->
    <div class="text-center mt-2 message">
      {{ message }}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    message() {
      if (this.progress === 100) return "Lên cấp rồi!";
      if (this.progress >= 70) return "Gần xong rồi!";
      if (this.progress >= 40) return "Cố lên nhé!";
      return "Bắt đầu nào!";
    }
  }
};
</script>

<style scoped>
.level-box {
  border-radius: 16px;
  background: #ffffff;
}

/* level */
.level-number {
  font-size: 20px;
  font-weight: bold;
}

/* progress */
.progress {
  height: 10px;
  border-radius: 10px;
  background: #e9ecef;
}

.progress-bar {
  background: #007bff;
  border-radius: 10px;
}

/* percent */
.percent {
  font-size: 14px;
}

/* message */
.message {
  font-size: 16px;
  font-weight: 600;
}
</style>