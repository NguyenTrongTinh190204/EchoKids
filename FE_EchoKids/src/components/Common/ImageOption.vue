<template>
  <div
    class="option-card shadow-sm"
    :class="stateClass"
    @click="handleClick"
  >
    <!-- hiển thị hình -->
    <div class="emoji">{{ emoji }}</div>

    <!-- chữ (có thể ẩn) -->
    <div v-if="showText" class="label">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emoji: {
      type: String,
      default: "🍎"
    },
    text: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    correctValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },

    // bật khi cần hiển thị đáp án đúng/sai sau khi chọn
    revealAnswer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selected: false
    };
  },

  computed: {
    isCorrect() {
      return this.value === this.correctValue;
    },

    stateClass() {
      // chưa chọn gì
      if (!this.revealAnswer) return "";

      // nếu đúng thì highlight
      if (this.isCorrect) return "correct";

      // nếu sai nhưng đã chọn
      if (this.selected && !this.isCorrect) return "wrong";

      return "";
    }
  },

  methods: {
    handleClick() {
      if (this.disabled) return;

      this.selected = true;

      this.$emit("select", {
        value: this.value,
        correct: this.isCorrect
      });
    },

    // reset lại trạng thái khi sang câu mới
    reset() {
      this.selected = false;
    }
  }
};
</script>

<style scoped>
.option-card {
  width: 100%;
  height: 140px;
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

/* hiển thị icon */
.emoji {
  font-size: 48px;
}

/* chữ */
.label {
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
}

/* hover */
.option-card:hover {
  transform: translateY(-3px);
}

/* khi bấm */
.option-card:active {
  transform: scale(0.95);
}

/* đúng */
.correct {
  background: #d4edda;
  border: 2px solid #28a745;
}

/* sai */
.wrong {
  background: #f8d7da;
  border: 2px solid #dc3545;
}

/* disabled */
.option-card[disabled],
.option-card.disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>