<template>
  <div class="home-screen">

    <!-- Hướng dẫn bằng giọng nói -->
    <VoiceGuide text="👋 Xin chào bé, mình cùng học nhé!" auto />

    <!-- Nhân vật -->
    <div class="character-card">
      <div class="character">🐻</div>

      <AudioButton text="🎵 Mình cùng luyện nhé!" />
    </div>

    <!-- Nút bắt đầu -->
    <button class="start-btn" @click="goSpeech">
      ▶️ Bắt đầu
    </button>

    <!-- Tiến độ -->
    <div class="progress-box">
      ⭐ 12 bài
    </div>

  </div>
</template>
<script>
import VoiceGuide from "../../Common/VoiceGuide.vue";
import AudioButton from "../../Common/AudioButton.vue";

export default {
  components: { VoiceGuide, AudioButton },

  methods: {
    goSpeech() {
      console.log("🚀 Đi vào Therapy Flow");
    }
  }
};
</script>

<style scoped>
/* Layout */
.home-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: linear-gradient(180deg, #a8edea, #fed6e3);
  position: relative;
  overflow: hidden;
}

/* hiệu ứng background blur */
.home-screen::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: #ffffff30;
  border-radius: 50%;
  top: 10%;
  left: -50px;
  filter: blur(80px);
}

.home-screen::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: #ffffff30;
  border-radius: 50%;
  bottom: 10%;
  right: -50px;
  filter: blur(80px);
}

/* Card nhân vật */
.character-card {
  background: white;
  padding: 20px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.character {
  font-size: 90px;
}

/* Nút start nâng cấp */
.start-btn {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(145deg, #58cc02, #46a302);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  box-shadow:
    0 8px 0 #2f7d00,
    0 15px 30px rgba(0,0,0,0.2);

  transition: all 0.2s ease;
}

/* hover */
.start-btn:hover {
  transform: scale(1.05);
}

/* click */
.start-btn:active {
  transform: translateY(5px);
  box-shadow:
    0 3px 0 #2f7d00,
    0 8px 15px rgba(0,0,0,0.2);
}

/* glow effect */
.start-btn::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #58cc02;
  opacity: 0.2;
  filter: blur(20px);
  z-index: -1;
}

/* animation nhẹ */
.start-btn {
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Progress */
.progress-box {
  background: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>