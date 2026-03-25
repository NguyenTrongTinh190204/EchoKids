<template>
  <div class="mission-box p-3 shadow-sm">

    <!-- tiêu đề -->
    <div class="text-center mb-3">
      <h5>Nhiệm vụ hôm nay</h5>
    </div>

    <!-- danh sách nhiệm vụ -->
    <div class="mission-list">

      <div
        v-for="(mission, index) in localMissions"
        :key="index"
        class="mission-item d-flex align-items-center justify-content-between p-2 mb-2"
      >
        <!-- tên nhiệm vụ -->
        <div class="d-flex align-items-center gap-2">
          <div class="icon">{{ mission.icon }}</div>
          <div class="name">{{ mission.name }}</div>
        </div>

        <!-- trạng thái -->
        <div>
          <span v-if="mission.done" class="done">Hoàn thành</span>
          <span v-else class="pending">Chưa xong</span>
        </div>
      </div>

    </div>

    <!-- tiến độ -->
    <div class="progress-box mt-3">
      <div class="progress">
        <div
          class="progress-bar"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      <div class="text-center mt-2">
        {{ progress }}%
      </div>
    </div>

    <!-- phần thưởng -->
    <RewardPopup
      :show="showReward"
      :success="true"
      @close="closeReward"
    />

  </div>
</template>

<script>
import RewardPopup from "../../Common/RewardPopup.vue";

export default {
  components: {
    RewardPopup
  },

  props: {
    missions: {
      type: Array,
      default: () => ([
        { name: "Nghe 1 bài", done: false, icon: "👂" },
        { name: "Nói 1 từ", done: false, icon: "🎤" },
        { name: "Chọn đúng 3 hình", done: false, icon: "🖼️" }
      ])
    }
  },

  data() {
    return {
      showReward: false,
      rewarded: false,
      localMissions: []
    };
  },

  created() {
    // clone để tránh sửa trực tiếp props
    this.localMissions = JSON.parse(JSON.stringify(this.missions));
  },

  computed: {
    progress() {
      if (this.localMissions.length === 0) return 0;

      const done = this.localMissions.filter(m => m.done).length;
      return Math.round((done / this.localMissions.length) * 100);
    }
  },

  watch: {
    progress(val) {
      // chỉ trigger 1 lần
      if (val === 100 && !this.rewarded) {
        this.showReward = true;
        this.rewarded = true;

        // báo ra ngoài
        this.$emit("completed");
      }
    }
  },

  methods: {
    closeReward() {
      this.showReward = false;
    },

    // gọi khi hoàn thành nhiệm vụ
    completeMission(index) {
      if (!this.localMissions[index].done) {
        this.localMissions[index].done = true;
      }
    }
  }
};
</script>

<style scoped>
.mission-box {
  border-radius: 16px;
  background: #ffffff;
}

/* item */
.mission-item {
  border-radius: 12px;
  background: #f8f9fa;
}

/* icon */
.icon {
  font-size: 24px;
}

/* text */
.name {
  font-weight: 600;
}

/* trạng thái */
.done {
  color: #28a745;
  font-weight: bold;
}

.pending {
  color: #6c757d;
}

/* progress */
.progress {
  height: 10px;
  border-radius: 10px;
  background: #e9ecef;
}

.progress-bar {
  background: #28a745;
  border-radius: 10px;
}
</style>