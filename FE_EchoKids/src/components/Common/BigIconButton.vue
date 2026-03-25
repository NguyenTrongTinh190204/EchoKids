<template>
  <button
    class="big-btn shadow-sm"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="icon">{{ icon }}</div>
    <div v-if="label" class="label">{{ label }}</div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "⭐"
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.big-btn {
  width: 100%;
  height: 140px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 20px;
  transition: all 0.2s ease;
}

/* kích thước icon */
.icon {
  font-size: 40px;
}

/* chữ hiển thị */
.label {
  font-size: 16px;
  font-weight: 600;
}

/* hiệu ứng khi bấm */
.big-btn:active {
  transform: scale(0.95);
  background: #e9ecef;
}

/* hover desktop */
.big-btn:hover {
  transform: translateY(-2px);
}

/* trạng thái disabled */
.big-btn:disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>