<template>
  <div class="score-box text-center p-3">

    <!-- hiển thị sao -->
    <div class="stars">
      <span
        v-for="i in 5"
        :key="i"
        :class="i <= starCount ? 'active' : ''"
      >
        ⭐
      </span>
    </div>

    <!-- điểm số (tùy chọn) -->
    <div v-if="showScore" class="score-text mt-2">
      {{ safeScore }}/{{ maxScore }}
    </div>

    <!-- thông điệp -->
    <div class="message mt-2">
      {{ message }}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0
    },

    maxScore: {
      type: Number,
      default: 100
    },

    showScore: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // đảm bảo điểm hợp lệ
    safeScore() {
      if (this.score < 0) return 0;
      if (this.score > this.maxScore) return this.maxScore;
      return this.score;
    },

    // số sao
    starCount() {
      const percent = (this.safeScore / this.maxScore) * 100;

      if (percent >= 80) return 5;
      if (percent >= 60) return 4;
      if (percent >= 40) return 3;
      if (percent >= 20) return 2;
      return 1;
    },

    // thông điệp
    message() {
      const percent = (this.safeScore / this.maxScore) * 100;

      if (percent >= 80) return "Giỏi lắm!";
      if (percent >= 60) return "Rất tốt!";
      if (percent >= 40) return "Cố lên nhé!";
      return "Thử lại nhé!";
    }
  }
};
</script>

<style scoped>
.score-box {
  border-radius: 16px;
}

/* hiển thị sao */
.stars span {
  font-size: 28px;
  opacity: 0.3;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* sao active */
.stars .active {
  opacity: 1;
  transform: scale(1.2);
}

/* điểm số */
.score-text {
  font-size: 16px;
  font-weight: 600;
}

/* thông điệp */
.message {
  font-size: 18px;
  font-weight: bold;
}
</style>