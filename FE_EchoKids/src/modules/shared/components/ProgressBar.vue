<template>
  <div class="progress-wrapper">

    <!-- TIÊU ĐỀ -->
    <div
      v-if="showLabel"
      class="d-flex justify-content-between align-items-center mb-2"
    >
      <div class="fw-bold">
        {{ label }}
      </div>

      <div class="text-primary fw-bold">
        {{ percent }}%
      </div>
    </div>

    <!-- THANH TIẾN ĐỘ -->
    <div
      class="progress rounded-pill"
      :style="{ height: height + 'px' }"
    >
      <div
        class="progress-bar rounded-pill progress-bar-custom"
        :class="barClass"
        role="progressbar"
        :style="{ width: percent + '%' }"
      >
        <span
          v-if="showInsideText"
          class="small fw-bold"
        >
          {{ percent }}%
        </span>
      </div>
    </div>

    <!-- MÔ TẢ -->
    <small
      v-if="description"
      class="text-muted d-block mt-2"
    >
      {{ description }}
    </small>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",

  props: {
    percent: {
      type: Number,
      default: 0
    },

    label: {
      type: String,
      default: "Tiến độ"
    },

    description: {
      type: String,
      default: ""
    },

    height: {
      type: Number,
      default: 12
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    showInsideText: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    barClass() {
      if (this.percent >= 80) {
        return "bg-success";
      }

      if (this.percent >= 50) {
        return "bg-warning";
      }

      return "bg-danger";
    }
  }
};
</script>

<style scoped>
.progress-wrapper {
  width: 100%;
}

.progress {
  background-color: #e9ecef;
  overflow: hidden;
}

.progress-bar-custom {
  transition: width 0.4s ease;
}
</style>