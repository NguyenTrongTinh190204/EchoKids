<template>
  <div class="reward-system p-3 shadow-sm">

    <!-- tiêu đề -->
    <div class="text-center mb-3">
      <h5>Phần thưởng</h5>
    </div>

    <!-- sao -->
    <div class="section text-center mb-3">
      <div class="label">Sao</div>
      <div class="stars">
        <span v-for="i in stars" :key="i">⭐</span>
      </div>
    </div>

    <!-- huy hiệu -->
    <div class="section text-center mb-3">
      <div class="label">Huy hiệu</div>
      <div class="badges">
        <span
          v-for="(badge, index) in badges"
          :key="index"
          class="badge-item"
        >
          {{ badge }}
        </span>
      </div>
    </div>

    <!-- streak -->
    <div class="section text-center">
      <div class="label">Chuỗi ngày học</div>
      <div class="streak">
        {{ streak }} ngày
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      default: 0
    },
    badges: {
      type: Array,
      default: () => []
    },
    streak: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.reward-system {
  border-radius: 16px;
  background: #ffffff;
}

/* section */
.section {
  padding: 8px 0;
}

/* label */
.label {
  font-weight: 600;
  margin-bottom: 6px;
}

/* stars */
.stars span {
  font-size: 22px;
}

/* badges */
.badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
}

.badge-item {
  background: #f1f3f5;
  padding: 6px 10px;
  border-radius: 12px;
  font-size: 14px;
}

/* streak */
.streak {
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
}
</style>