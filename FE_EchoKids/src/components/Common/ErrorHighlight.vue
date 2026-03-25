<template>
  <div class="error-box text-center p-3">

    <!-- hiển thị từ -->
    <div class="word">
      <span
        v-for="(char, index) in letters"
        :key="index"
        :class="getClass(index)"
      >
        {{ char }}
      </span>
    </div>

    <!-- phản hồi -->
    <div class="mt-3">
      <span v-if="hasError" class="error-text">
        Thử lại nhé
      </span>
      <span v-else class="success-text">
        Rất tốt
      </span>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },

    // hỗ trợ 1 lỗi
    errorIndex: {
      type: Number,
      default: -1
    },

    // hỗ trợ nhiều lỗi (ưu tiên dùng cái này)
    errorIndexes: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    letters() {
      return this.text.split("");
    },

    hasError() {
      return this.errorIndexes.length > 0 || this.errorIndex !== -1;
    }
  },

  methods: {
    getClass(index) {
      // nếu dùng nhiều lỗi
      if (this.errorIndexes.length > 0) {
        return this.errorIndexes.includes(index) ? "error" : "normal";
      }

      // fallback 1 lỗi
      if (index === this.errorIndex) return "error";

      return "normal";
    }
  }
};
</script>

<style scoped>
.error-box {
  border-radius: 16px;
}

/* hiển thị chữ */
.word {
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 4px;
}

/* chữ bình thường */
.normal {
  color: #333;
}

/* chữ sai */
.error {
  color: #dc3545;
  background: #ffe5e5;
  padding: 4px 8px;
  border-radius: 8px;
}

/* text đúng */
.success-text {
  color: #28a745;
  font-weight: 600;
}

/* text sai */
.error-text {
  color: #dc3545;
  font-weight: 600;
}
</style>