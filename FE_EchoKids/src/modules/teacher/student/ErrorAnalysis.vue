<template>
  <div class="card border-0 shadow-sm rounded">
    <div class="card-body">

      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 class="fw-bold mb-1">Phân tích lỗi phát âm</h5>
          <p class="text-muted small mb-0">
            Những lỗi bé thường gặp trong quá trình luyện tập
          </p>
        </div>

        <button
          class="btn btn-outline-primary btn-sm rounded"
          @click="goToReport"
        >
          Xem báo cáo
        </button>
      </div>

      <div class="row g-3">
        <div
          class="col-12 col-lg-4"
          v-for="error in errorList"
          :key="error.id"
        >
          <div class="border rounded p-3 h-100 error-card">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span
                  class="badge mb-2"
                  :class="error.badgeClass"
                >
                  {{ error.level }}
                </span>

                <h6 class="fw-bold mb-1">
                  {{ error.sound }}
                </h6>

                <p class="text-muted small mb-0">
                  {{ error.description }}
                </p>
              </div>

              <div class="error-percent">
                {{ error.percent }}%
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Tỷ lệ sai</span>
                <span class="fw-semibold">{{ error.percent }}%</span>
              </div>

              <div class="progress" style="height: 8px;">
                <div
                  class="progress-bar"
                  :class="error.progressClass"
                  :style="{ width: error.percent + '%' }"
                ></div>
              </div>
            </div>

            <div class="border rounded p-3 mb-3">
              <p class="small text-muted mb-1">
                Ví dụ lỗi thường gặp
              </p>

              <p class="fw-semibold mb-0">
                {{ error.example }}
              </p>
            </div>

            <button
              class="btn btn-primary w-100 rounded"
              @click="goToPractice(error)"
            >
              Luyện lại âm này
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorAnalysis',

  data() {
    return {
      errorList: [
        {
          id: 1,
          sound: 'Âm S',
          description: 'Bé thường phát âm thiếu rõ chữ S ở đầu câu.',
          percent: 80,
          level: 'Cần cải thiện',
          example: 'sữa → đọc thành “ữa”',
          badgeClass: 'bg-danger-subtle text-danger',
          progressClass: 'bg-danger'
        },
        {
          id: 2,
          sound: 'Âm R',
          description: 'Bé phát âm âm R chưa rõ, dễ nhầm với D.',
          percent: 65,
          level: 'Trung bình',
          example: 'rồng → đọc thành “dồng”',
          badgeClass: 'bg-warning-subtle text-warning',
          progressClass: 'bg-warning'
        },
        {
          id: 3,
          sound: 'Âm CH',
          description: 'Bé còn nhầm giữa âm CH và TR khi đọc.',
          percent: 45,
          level: 'Ổn định',
          example: 'chim → đọc thành “trim”',
          badgeClass: 'bg-success-subtle text-success',
          progressClass: 'bg-success'
        }
      ]
    }
  },

  methods: {
    goToReport() {
      this.$router.push('/parent/report')
    },

    goToPractice(error) {
      this.$router.push(`/child/therapy-flow/${error.id}`)
    }
  }
}
</script>

<style scoped>
.error-card {
  transition: all 0.2s ease;
}

.error-card:hover {
  transform: translateY(-3px);
}

.error-percent {
  min-width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: #dc3545;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>