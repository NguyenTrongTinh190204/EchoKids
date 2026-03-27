<template>
  <div class="container py-3 listen-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <div class="fw-bold text-primary">Nghe và chọn 🎧</div>
        <small class="text-muted">
          Nghe âm thanh và chọn hình đúng
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

    <!-- CÂU HỎI -->
    <div class="bg-light rounded-4 p-4 shadow-sm text-center mb-4">
      <div class="fw-bold fs-5 mb-2">
        Câu {{ currentQuestionIndex + 1 }}
      </div>

      <small class="text-muted">
        Hãy nghe và chọn đúng hình ảnh
      </small>

      <div class="mt-4">
        <button
          class="btn btn-primary rounded-pill px-4"
          @click="playAudio"
        >
          Phát âm thanh
        </button>
      </div>
    </div>

    <!-- DANH SÁCH HÌNH -->
    <div class="row g-3">

      <div
        v-for="option in currentQuestion.options"
        :key="option.id"
        class="col-6"
      >
        <div
          class="bg-light rounded-4 p-3 shadow-sm option-card"
          :class="{
            'selected-option': selectedOption === option.id
          }"
          @click="selectOption(option.id)"
        >
          <img
            :src="option.image"
            :alt="option.label"
            class="img-fluid rounded-4 border mb-2 option-image"
          >

          <div class="small fw-bold text-center">
            {{ option.label }}
          </div>
        </div>
      </div>

    </div>

    <!-- NÚT TIẾP TỤC -->
    <div class="mt-4 text-center">
      <button
        class="btn btn-primary rounded-pill px-4"
        :disabled="selectedOption === null"
        @click="nextQuestion"
      >
        {{ isLastQuestion ? 'Xem kết quả' : 'Tiếp tục' }}
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ListenAndChoose",

  data() {
    return {
      currentQuestionIndex: 0,
      selectedOption: null,

      // dữ liệu từ bảng bai_luyen_tap + chi_tiet_luyen_tap
      questions: [
        {
          id: 1,
          audio: "/audio/la.mp3",
          correctAnswer: 2,
          options: [
            {
              id: 1,
              label: "Con mèo",
              image: "https://via.placeholder.com/200x150"
            },
            {
              id: 2,
              label: "Chiếc lá",
              image: "https://via.placeholder.com/200x150"
            },
            {
              id: 3,
              label: "Quả táo",
              image: "https://via.placeholder.com/200x150"
            },
            {
              id: 4,
              label: "Con cá",
              image: "https://via.placeholder.com/200x150"
            }
          ]
        },
        {
          id: 2,
          audio: "/audio/meo.mp3",
          correctAnswer: 1,
          options: [
            {
              id: 1,
              label: "Con mèo",
              image: "https://via.placeholder.com/200x150"
            },
            {
              id: 2,
              label: "Chiếc lá",
              image: "https://via.placeholder.com/200x150"
            },
            {
              id: 3,
              label: "Con gà",
              image: "https://via.placeholder.com/200x150"
            },
            {
              id: 4,
              label: "Quả bóng",
              image: "https://via.placeholder.com/200x150"
            }
          ]
        }
      ]
    };
  },

  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },

    progressPercent() {
      return Math.round(
        ((this.currentQuestionIndex + 1) / this.questions.length) * 100
      );
    },

    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1;
    }
  },

  methods: {
    playAudio() {
      const audio = new Audio(this.currentQuestion.audio);
      audio.play();
    },

    selectOption(optionId) {
      this.selectedOption = optionId;
    },

    nextQuestion() {
      if (!this.isLastQuestion) {
        this.currentQuestionIndex++;
        this.selectedOption = null;
        return;
      }

      this.$router.push('/child/speaking/result');
    },

    goBack() {
      this.$router.push('/child/learning/lesson');
    }
  }
};
</script>

<style scoped>
.listen-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.option-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.option-card:hover {
  transform: translateY(-3px);
}

.selected-option {
  border: 2px solid #0d6efd;
}

.option-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
</style>