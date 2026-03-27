<template>
  <div class="container py-3 therapy-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <div class="fw-bold text-primary">Luyện tập 🎤</div>
        <small class="text-muted">
          {{ currentStep.title }}
        </small>
      </div>

      <button
        class="btn btn-outline-primary btn-sm rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- TIẾN ĐỘ -->
    <div class="progress rounded-pill mb-4" style="height: 8px;">
      <div
        class="progress-bar bg-success"
        :style="{ width: progressPercent + '%' }"
      ></div>
    </div>

    <!-- THẺ LUYỆN TẬP -->
    <div class="bg-light rounded-4 p-4 shadow-sm text-center">

      <!-- NGHE ÂM -->
      <div v-if="currentStep.type === 'listen'">
        <div class="mb-3">
          <div class="display-5 fw-bold text-primary">
            {{ practice.word }}
          </div>

          <small class="text-muted">
            Nghe cách phát âm mẫu
          </small>
        </div>

        <button class="btn btn-primary rounded-pill px-4">
          Phát âm mẫu
        </button>
      </div>

      <!-- XEM KHẨU HÌNH -->
      <div v-if="currentStep.type === 'watch'">
        <div class="mb-3">
          <div class="display-5 fw-bold text-primary">
            {{ practice.word }}
          </div>

          <small class="text-muted">
            Quan sát khẩu hình miệng
          </small>
        </div>

        <div class="bg-white rounded-4 p-5 border">
          Video khẩu hình
        </div>
      </div>

      <!-- LẶP LẠI -->
      <div v-if="currentStep.type === 'repeat'">
        <div class="mb-3">
          <div class="display-5 fw-bold text-primary">
            {{ practice.word }}
          </div>

          <small class="text-muted">
            Nghe và lặp lại theo
          </small>
        </div>

        <button class="btn btn-warning rounded-pill px-4">
          Nghe lại
        </button>
      </div>

      <!-- GHI ÂM -->
      <div v-if="currentStep.type === 'speak'">
        <div class="mb-3">
          <div class="display-5 fw-bold text-primary">
            {{ practice.word }}
          </div>

          <small class="text-muted">
            Nhấn để ghi âm giọng nói
          </small>
        </div>

        <button
          class="btn btn-danger rounded-circle record-btn"
          @click="toggleRecord"
        >
          {{ isRecording ? 'Dừng' : 'Ghi' }}
        </button>
      </div>

      <!-- PHẢN HỒI -->
      <div v-if="currentStep.type === 'feedback'">
        <div class="mb-3">
          <div class="fw-bold fs-4 text-success">
            {{ feedback.score }}/100
          </div>

          <small class="text-muted">
            {{ feedback.message }}
          </small>
        </div>

        <div class="bg-white rounded-4 p-3 border">
          <div class="fw-bold mb-2">Âm cần cải thiện</div>

          <div class="d-flex justify-content-center gap-2 flex-wrap">
            <span
              v-for="error in feedback.errors"
              :key="error"
              class="badge bg-warning text-dark px-3 py-2"
            >
              {{ error }}
            </span>
          </div>
        </div>
      </div>

    </div>

    <!-- NÚT ĐIỀU HƯỚNG -->
    <div class="d-flex justify-content-between mt-4">

      <button
        class="btn btn-outline-secondary rounded-pill"
        :disabled="currentIndex === 0"
        @click="prevStep"
      >
        Quay lại
      </button>

      <button
        class="btn btn-primary rounded-pill"
        @click="nextStep"
      >
        {{ isLastStep ? 'Xem kết quả' : 'Tiếp tục' }}
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "TherapyFlow",

  data() {
    return {
      currentIndex: 0,

      isRecording: false,

      // dữ liệu từ bảng bai_luyen_tap + chi_tiet_luyen_tap
      practice: {
        id: 1,
        word: "Lá"
      },

      // flow luyện tập
      steps: [
        {
          type: "listen",
          title: "Nghe âm mẫu"
        },
        {
          type: "watch",
          title: "Xem khẩu hình"
        },
        {
          type: "repeat",
          title: "Lặp lại"
        },
        {
          type: "speak",
          title: "Ghi âm"
        },
        {
          type: "feedback",
          title: "Phản hồi"
        }
      ],

      // dữ liệu giả lập AI trả về
      feedback: {
        score: 82,
        message: "Rất tốt! Bé cần phát âm rõ hơn âm đầu L.",
        errors: [
          "Âm đầu L",
          "Thanh sắc"
        ]
      }
    };
  },

  computed: {
    currentStep() {
      return this.steps[this.currentIndex];
    },

    progressPercent() {
      return Math.round(
        ((this.currentIndex + 1) / this.steps.length) * 100
      );
    },

    isLastStep() {
      return this.currentIndex === this.steps.length - 1;
    }
  },

  methods: {
    nextStep() {
      if (!this.isLastStep) {
        this.currentIndex++;
        return;
      }

      this.$router.push({
        path: '/child/speaking/result',
        query: {
          practiceId: this.practice.id
        }
      });
    },

    prevStep() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },

    toggleRecord() {
      this.isRecording = !this.isRecording;
    },

    goBack() {
      this.$router.push('/child/learning/lesson');
    }
  }
};
</script>

<style scoped>
.therapy-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.record-btn {
  width: 90px;
  height: 90px;
  font-size: 16px;
}
</style>