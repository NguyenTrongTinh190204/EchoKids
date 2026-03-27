```vue
<template>
  <div class="suggest-exercise-wrapper">
    <div class="card border-0 shadow-sm rounded-4 p-3 bg-white">
      <!-- Tiêu đề -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 class="fw-bold mb-1">Bài luyện tập gợi ý</h5>
          <p class="text-muted small mb-0">
            Các bài luyện tập phù hợp với tiến độ hiện tại của bé
          </p>
        </div>

        <button class="btn btn-sm btn-light rounded-pill px-3" @click="goToAllExercises">
          Xem tất cả
        </button>
      </div>

      <!-- Danh sách bài tập -->
      <div class="row g-3">
        <div
          class="col-12 col-md-6"
          v-for="exercise in exerciseList"
          :key="exercise.id"
        >
          <div class="exercise-card h-100 border rounded-4 p-3 bg-light">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span class="badge rounded-pill mb-2" :class="exercise.badgeClass">
                  {{ exercise.level }}
                </span>

                <h6 class="fw-bold mb-1">{{ exercise.title }}</h6>
                <p class="text-muted small mb-0">
                  {{ exercise.description }}
                </p>
              </div>

              <div class="exercise-score text-center">
                <div class="score-circle">
                  {{ exercise.progress }}%
                </div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Tiến độ</span>
                <span class="fw-semibold">{{ exercise.progress }}%</span>
              </div>

              <div class="progress rounded-pill" style="height: 8px">
                <div
                  class="progress-bar rounded-pill"
                  :class="exercise.progressClass"
                  :style="{ width: exercise.progress + '%' }"
                ></div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="small text-muted mb-0">
                  {{ exercise.totalQuestion }} câu hỏi
                </p>
              </div>

              <button
                class="btn btn-primary rounded-pill px-3"
                @click="startExercise(exercise)"
              >
                Bắt đầu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestExercise',

  data() {
    return {
      exerciseList: [
        {
          id: 1,
          title: 'Luyện âm chữ A',
          description: 'Giúp bé phát âm rõ và chuẩn chữ A trong nhiều tình huống.',
          level: 'Dễ',
          progress: 85,
          totalQuestion: 10,
          badgeClass: 'bg-success-subtle text-success',
          progressClass: 'bg-success'
        },
        {
          id: 2,
          title: 'Nhận diện từ vựng cơ bản',
          description: 'Luyện nghe và chọn đúng từ phù hợp với hình ảnh.',
          level: 'Trung bình',
          progress: 60,
          totalQuestion: 15,
          badgeClass: 'bg-warning-subtle text-warning',
          progressClass: 'bg-warning'
        },
        {
          id: 3,
          title: 'Luyện nói câu ngắn',
          description: 'Bé luyện đọc các câu đơn giản theo từng chủ đề.',
          level: 'Khó',
          progress: 40,
          totalQuestion: 12,
          badgeClass: 'bg-danger-subtle text-danger',
          progressClass: 'bg-danger'
        },
        {
          id: 4,
          title: 'Ghép âm và hình ảnh',
          description: 'Chọn đúng hình ảnh tương ứng với âm thanh được phát.',
          level: 'Dễ',
          progress: 75,
          totalQuestion: 8,
          badgeClass: 'bg-success-subtle text-success',
          progressClass: 'bg-success'
        }
      ]
    }
  },

  methods: {
    // Điều hướng sang trang danh sách bài luyện tập
    goToAllExercises() {
      this.$router.push('/child/exercises')
    },

    // Điều hướng sang màn hình luyện tập chi tiết
    startExercise(exercise) {
      this.$router.push(`/child/therapy-flow/${exercise.id}`)
    }
  }
}
</script>

<style scoped>
.suggest-exercise-wrapper {
  width: 100%;
}

.exercise-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.exercise-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  background-color: #ffffff !important;
}

.score-circle {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe, #00c6ff);
  color: white;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 18px rgba(79, 172, 254, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #4facfe, #00c6ff);
  border: none;
}

.btn-primary:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .score-circle {
    width: 48px;
    height: 48px;
    font-size: 12px;
  }
}
</style>
```
