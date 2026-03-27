<template>
  <div class="card border-0 shadow-sm rounded">
    <div class="card-body">

      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 class="fw-bold mb-1">Bài luyện tập gợi ý</h5>
          <p class="text-muted small mb-0">
            Các bài luyện tập phù hợp với tiến độ hiện tại của bé
          </p>
        </div>

        <button
          class="btn btn-outline-primary btn-sm rounded"
          @click="goToAllExercises"
        >
          Xem tất cả
        </button>
      </div>

      <div class="row g-3">
        <div
          class="col-12 col-md-6"
          v-for="exercise in exerciseList"
          :key="exercise.id"
        >
          <div class="border rounded p-3 h-100 exercise-card">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span
                  class="badge mb-2"
                  :class="exercise.badgeClass"
                >
                  {{ exercise.level }}
                </span>

                <h6 class="fw-bold mb-1">
                  {{ exercise.title }}
                </h6>

                <p class="text-muted small mb-0">
                  {{ exercise.description }}
                </p>
              </div>

              <div class="score-circle">
                {{ exercise.progress }}%
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Tiến độ</span>
                <span class="fw-semibold">{{ exercise.progress }}%</span>
              </div>

              <div class="progress" style="height: 8px;">
                <div
                  class="progress-bar"
                  :class="exercise.progressClass"
                  :style="{ width: exercise.progress + '%' }"
                ></div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <p class="small text-muted mb-0">
                {{ exercise.totalQuestion }} câu hỏi
              </p>

              <button
                class="btn btn-primary btn-sm rounded"
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
    goToAllExercises() {
      this.$router.push('/child/exercises')
    },

    startExercise(exercise) {
      this.$router.push(`/child/therapy-flow/${exercise.id}`)
    }
  }
}
</script>

<style scoped>
.exercise-card {
  transition: all 0.2s ease;
  cursor: pointer;
}

.exercise-card:hover {
  transform: translateY(-3px);
}

.score-circle {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #0d6efd;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>