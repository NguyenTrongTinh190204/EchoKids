<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Quản lý danh mục bài học</h4>
        <p class="text-muted mb-0">
          Quản lý các danh mục bài học trong hệ thống Speech Therapy
        </p>
      </div>

      <button class="btn btn-primary rounded px-4" @click="goToCreateSubject">
        Thêm danh mục
      </button>
    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm theo tên danh mục..."
              v-model="searchKeyword"
            >
          </div>

          <div class="col-12 col-md-3">
            <select class="form-select" v-model="selectedStatus">
              <option value="">Tất cả trạng thái</option>
              <option value="Đang hoạt động">Đang hoạt động</option>
              <option value="Tạm ẩn">Tạm ẩn</option>
            </select>
          </div>

          <div class="col-12 col-md-3">
            <select class="form-select" v-model="selectedLevel">
              <option value="">Tất cả mức độ</option>
              <option value="Dễ">Dễ</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Khó">Khó</option>
            </select>
          </div>

          <div class="col-12 col-md-2">
            <button class="btn btn-outline-secondary w-100 rounded" @click="resetFilter">
              Đặt lại
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-xl-4"
        v-for="subject in filteredSubjectList"
        :key="subject.id"
      >
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span class="badge bg-primary-subtle text-primary mb-2">
                  {{ subject.totalLessons }} bài học
                </span>

                <h5 class="fw-bold mb-1">{{ subject.name }}</h5>

                <p class="text-muted small mb-0">
                  {{ subject.description }}
                </p>
              </div>

              <span class="badge" :class="getStatusClass(subject.status)">
                {{ subject.status }}
              </span>
            </div>

            <div class="border rounded p-3 mb-3">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Mức độ</span>

                <span class="badge" :class="getLevelClass(subject.level)">
                  {{ subject.level }}
                </span>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Từ vựng</span>
                <span class="fw-semibold">{{ subject.totalVocabulary }}</span>
              </div>

              <div class="d-flex justify-content-between">
                <span class="text-muted small">Bài luyện tập</span>
                <span class="fw-semibold">{{ subject.totalExercises }}</span>
              </div>
            </div>

            <div class="border-top pt-3 d-flex gap-2">
              <button
                class="btn btn-outline-primary rounded flex-fill"
                @click="goToSubjectDetail(subject)"
              >
                Chi tiết
              </button>

              <button
                class="btn btn-primary rounded flex-fill"
                @click="goToSubjectEdit(subject)"
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="filteredSubjectList.length === 0"
      class="card border-0 shadow-sm rounded mt-4"
    >
      <div class="card-body text-center py-5">
        <h6 class="fw-bold mb-2">Không tìm thấy danh mục phù hợp</h6>
        <p class="text-muted mb-0">
          Vui lòng thử lại với bộ lọc khác
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SubjectManagement',

  data() {
    return {
      searchKeyword: '',
      selectedStatus: '',
      selectedLevel: '',
      subjectList: [
        {
          id: 1,
          name: 'Phát âm cơ bản',
          description: 'Danh mục luyện các âm đơn giản và từ ngắn cho trẻ mới bắt đầu.',
          totalLessons: 12,
          totalVocabulary: 48,
          totalExercises: 20,
          level: 'Dễ',
          status: 'Đang hoạt động'
        },
        {
          id: 2,
          name: 'Nhận diện từ vựng',
          description: 'Giúp trẻ nhận biết từ vựng qua hình ảnh và âm thanh.',
          totalLessons: 10,
          totalVocabulary: 35,
          totalExercises: 16,
          level: 'Trung bình',
          status: 'Đang hoạt động'
        },
        {
          id: 3,
          name: 'Luyện câu giao tiếp',
          description: 'Hỗ trợ trẻ luyện nói các câu giao tiếp đơn giản hằng ngày.',
          totalLessons: 8,
          totalVocabulary: 22,
          totalExercises: 14,
          level: 'Khó',
          status: 'Tạm ẩn'
        }
      ]
    }
  },

  computed: {
    filteredSubjectList() {
      return this.subjectList.filter(subject => {
        const matchKeyword = subject.name
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase())

        const matchStatus = this.selectedStatus
          ? subject.status === this.selectedStatus
          : true

        const matchLevel = this.selectedLevel
          ? subject.level === this.selectedLevel
          : true

        return matchKeyword && matchStatus && matchLevel
      })
    }
  },

  methods: {
    resetFilter() {
      this.searchKeyword = ''
      this.selectedStatus = ''
      this.selectedLevel = ''
    },

    getStatusClass(status) {
      if (status === 'Đang hoạt động') {
        return 'bg-success-subtle text-success'
      }

      return 'bg-secondary-subtle text-secondary'
    },

    getLevelClass(level) {
      if (level === 'Dễ') {
        return 'bg-success-subtle text-success'
      }

      if (level === 'Trung bình') {
        return 'bg-warning-subtle text-warning'
      }

      return 'bg-danger-subtle text-danger'
    },

    goToCreateSubject() {
      this.$router.push('/admin/subject-create')
    },

    goToSubjectDetail(subject) {
      this.$router.push(`/admin/subject-detail/${subject.id}`)
    },

    goToSubjectEdit(subject) {
      this.$router.push(`/admin/subject-edit/${subject.id}`)
    }
  }
}
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}
</style>