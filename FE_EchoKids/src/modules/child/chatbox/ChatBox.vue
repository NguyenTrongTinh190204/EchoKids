<template>
  <div class="position-fixed bottom-0 end-0 m-4" style="z-index: 9999;">
    
    <transition name="chat-window">
      <div v-if="isOpen" class="card shadow-lg border-0 mb-3" style="width: 380px; height: 520px; border-radius: 1.25rem; overflow: hidden; background-color: #fff; transform-origin: bottom right;">
        
        <div class="card-header d-flex justify-content-between align-items-center py-3 border-0 text-white" 
             style="background: linear-gradient(135deg, #ff7b54, #fe5d37);">
          <h6 class="mb-0 fw-bold">🐥 Cô giáo Họa Mi</h6>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center hover-scale" style="width: 30px; height: 30px;" title="Chuyển dark mode">
              <i class="fas fa-moon text-dark"></i>
            </button>
            </div>
        </div>

        <div class="card-body overflow-auto d-flex flex-column gap-3 p-3" style="background-color: #fffaf9;">
          
          <div class="d-flex justify-content-start message-pop">
            <div class="px-3 py-2 shadow-sm text-dark" 
                 style="max-width: 82%; font-size: 0.95rem; line-height: 1.4; border-radius: 18px 18px 18px 0; background-color: #ffffff; border: 1px solid #ffe0d9;">
              Chào con! Cô là Họa Mi, hôm nay con muốn tập phát âm gì nào? 🌸
            </div>
          </div>

          <div class="d-flex justify-content-end message-pop" style="animation-delay: 0.2s;">
            <div class="px-3 py-2 shadow-sm text-white" 
                 style="max-width: 82%; font-size: 0.95rem; line-height: 1.4; border-radius: 18px 18px 0 18px; background: linear-gradient(135deg, #ff8c6b, #fe5d37);">
              Cô dạy con phát âm chữ A đi ạ!
            </div>
          </div>

          <div class="d-flex justify-content-start typing-indicator">
            <div class="px-3 py-2 shadow-sm fst-italic text-muted small" 
                 style="border-radius: 18px 18px 18px 0; background-color: #ffffff; border: 1px solid #ffe0d9;">
              Cô Họa Mi đang gõ<span class="dots">...</span>
            </div>
          </div>
        </div>

        <div class="card-footer p-3 bg-white border-top">
          <div class="input-group align-items-center">
            
            <input type="text" class="form-control rounded-pill me-2 shadow-sm" 
                   placeholder="Bé hỏi cô đi..." 
                   style="border-color: #e0e0e0; padding: 10px 15px;" />

            <div class="position-relative">
              <button @click="toggleRecording" 
                      class="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-scale" 
                      :class="{ 'recording-pulse text-danger border-danger': isRecording }"
                      style="width: 48px; height: 48px;">
                <i class="fa-solid fa-microphone fa-lg"></i>
              </button>
            </div>

            <button class="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm ms-2 hover-scale" 
                    style="width: 48px; height: 48px; background: #fe5d37; border: none;">
              <span class="text-white fs-5"><i class="fa-solid fa-paper-plane"></i></span>
            </button>
          </div>

          <transition name="fade">
            <small v-if="isRecording" class="text-danger d-block mt-2 text-center fw-medium" style="opacity: 0.8;">
              Con nói đi, cô đang nghe nè... (nói xong ấn mic lần nữa để gửi)
            </small>
          </transition>
        </div>
      </div>
    </transition>

    <div class="d-flex justify-content-end">
      <button @click="toggleChat" 
              class="btn shadow-lg rounded-circle d-flex align-items-center justify-content-center fab-button hover-scale" 
              style="width: 68px; height: 68px; background: #fe5d37; border: none;">
        <span v-if="isOpen" class="text-white fw-bold" style="font-size: 1.8rem;"><i class="fa-solid fa-comment-dots"></i></span>
        <span v-else class="text-white" style="font-size: 1.8rem;"><i class="fa-regular fa-comment-dots"></i></span> 
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true) 
const isRecording = ref(false) 

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const toggleRecording = () => {
  isRecording.value = !isRecording.value
}
</script>

<style scoped>
/* CSS giữ nguyên không thay đổi so với bản trước */
.hover-scale {
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s;
}
.hover-scale:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(254, 93, 55, 0.3) !important;
}

.recording-pulse {
  animation: pulse-red 1.5s infinite;
}

@keyframes pulse-red {
  0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(220, 53, 69, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
}

.message-pop {
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  opacity: 0;
  transform: translateY(10px);
}

@keyframes popIn {
  to { opacity: 1; transform: translateY(0); }
}

.typing-indicator {
  animation: breathe 2s infinite ease-in-out;
}

@keyframes breathe {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.chat-window-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.chat-window-leave-active {
  transition: all 0.3s ease-in;
}
.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(50px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fab-button {
  animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes bounceIn {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
</style>