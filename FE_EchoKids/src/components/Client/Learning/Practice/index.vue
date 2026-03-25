<template>
  <div class="speech-screen">

    <!-- Hướng dẫn -->
    <VoiceGuide :text="guideText" auto />

    <!-- Hình + từ -->
    <div class="content">
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        class="image"
      />
      <div class="word">🐱 Con mèo</div>
    </div>

    <!-- STATE 1: NGHE -->
    <div v-if="step === 'listen'" class="action">
      <button class="audio-btn" @click="playSample">
        🔊 Nghe
      </button>

      <button class="next-btn" @click="step = 'speak'">
        👉 Nói thử
      </button>
    </div>

    <!-- STATE 2: GHI ÂM -->
    <div v-if="step === 'speak'" class="action">
      <button
        class="mic-btn"
        :class="{ recording: isRecording }"
        @click="toggleRecording"
      >
        🎤
      </button>
    </div>

    <!-- STATE 3: KẾT QUẢ -->
    <div v-if="step === 'feedback'" class="feedback">

      <div class="emoji">😄</div>

      <div class="score">⭐ {{ score }}%</div>

      <button class="retry-btn" @click="retry">
        🔁 Thử lại
      </button>

      <button class="next-btn" @click="goNext">
        ➡️ Tiếp tục
      </button>

    </div>

  </div>
</template>

<script>
import VoiceGuide from "../../Common/VoiceGuide.vue";

export default {
  components: { VoiceGuide },

  data() {
    return {
      step: "listen",
      isRecording: false,
      score: 85
    };
  },

  computed: {
    guideText() {
      if (this.step === "listen") return "🔊 Bé hãy nghe nhé!";
      if (this.step === "speak") return "🎤 Bé nói theo nào!";
      return "👏 Bé làm rất tốt!";
    }
  },

  methods: {
    playSample() {
      alert("🔊 Phát âm mẫu...");
    },

    toggleRecording() {
      this.isRecording = !this.isRecording;

      if (!this.isRecording) {
        setTimeout(() => {
          this.step = "feedback";
        }, 800);
      }
    },

    retry() {
      this.step = "speak";
      this.isRecording = false;
    },

    goNext() {
      this.$router.push("/lesson-list");
    }
  }
};
</script>

<style scoped>
/* layout */
.speech-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #f7f7f7;
  padding: 20px;
}

/* content */
.content {
  text-align: center;
}

.image {
  width: 140px;
}

.word {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
}

/* action */
.action {
  display: flex;
  gap: 20px;
}

/* nút nghe */
.audio-btn {
  background: #1cb0f6;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 20px;
  font-size: 18px;
}

/* nút mic (trung tâm) */
.mic-btn {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #58cc02;
  font-size: 40px;
  border: none;
}

.mic-btn.recording {
  background: #ff4b4b;
}

/* feedback */
.feedback {
  text-align: center;
}

.emoji {
  font-size: 60px;
}

.score {
  font-size: 24px;
  margin: 10px 0;
}

/* nút */
.retry-btn {
  background: #ffb020;
  border: none;
  padding: 12px 20px;
  border-radius: 15px;
  margin-right: 10px;
}

.next-btn {
  background: #58cc02;
  border: none;
  padding: 12px 20px;
  border-radius: 15px;
  color: white;
}
</style>