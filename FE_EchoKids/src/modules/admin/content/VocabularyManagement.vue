<template>
  <div class="vocabulary-management-page p-3 p-md-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Quản lý từ vựng</h4>
        <p class="text-muted mb-0">
          Quản lý danh sách từ vựng trong hệ thống trị liệu ngôn ngữ
        </p>
      </div>

      <button class="btn btn-primary rounded-pill px-4" @click="goToCreateVocabulary">
        Thêm từ vựng
      </button>
    </div>

    <div class="card border-0 shadow-sm rounded-4 p-3 mb-4">
      <div class="row g-3">
        <div class="col-12 col-md-4">
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="Tìm theo từ vựng..."
            v-model="searchKeyword"
          >
        </div>

        <div class="col-12 col-md-3">
          <select class="form-select rounded-pill" v-model="selectedCategory">
            <option value="">Tất cả danh mục</option>
            <option value="Động vật">Động vật</option>
            <option value="Gia đình">Gia đình</option>
            <option value="Màu sắc">Màu sắc</option>
            <option value="Đồ vật">Đồ vật</option>
          </select>
        </div>

        <div class="col-12 col-md-3">
          <select class="form-select rounded-pill" v-model="selectedLevel">
            <option value="">Tất cả mức độ</option>
            <option value="Dễ">Dễ</option>
            <option value="Trung bình">Trung bình</option>
            <option value="Khó">Khó</option>
          </select>
        </div>

        <div class="col-12 col-md-2">
          <button class="btn btn-light border rounded-pill w-100" @click="resetFilter">
            Đặt lại
          </button>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="table-responsive">
        <table class="table align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th class="ps-4">Từ vựng</th>
              <th>Phiên âm</th>
              <th>Danh mục</th>
              <th>Mức độ</th>
              <th>Trạng thái</th>
              <th class="text-end pe-4">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="vocabulary in filteredVocabularyList"
              :key="vocabulary.id"
            >
              <td class="ps-4">
                <div>
                  <h6 class="fw-bold mb-1">{{ vocabulary.word }}</h6>
                  <p class="text-muted small mb-0">
                    {{ vocabulary.description }}
                  </p>
                </div>
              </td>

              <td>
                <span class="fw-semibold">{{ vocabulary.pronunciation }}</span>
              </td>

              <td>
                <span class="badge bg-info-subtle text-info rounded-pill">
                  {{ vocabulary.category }}
                </span>
              </td>

              <td>
                <span class="badge rounded-pill" :class="getLevelClass(vocabulary.level)">
                  {{ vocabulary.level }}
                </span>
              </td>

              <td>
                <span class="badge rounded-pill" :class="getStatusClass(vocabulary.status)">
                  {{ vocabulary.status }}
                </span>
              </td>

              <td class="text-end pe-4">
                <div class="d-flex justify-content-end gap-2">
                  <button
                    class="btn btn-light border rounded-pill px-3"
                    @click="goToVocabularyDetail(vocabulary)"
                  >
                    Chi tiết
                  </button>

                  <button
                    class="btn btn-primary rounded-pill px-3"
                    @click="goToVocabularyEdit(vocabulary)"
                  >
                    Chỉnh sửa
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="filteredVocabularyList.length === 0">
              <td colspan="6" class="text-center py-5">
                <h6 class="fw-bold mb-2">Không tìm thấy từ vựng phù hợp</h6>
                <p class="text-muted mb-0">
                  Vui lòng thử lại với bộ lọc khác
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VocabularyManagement',

  data() {
    return {
      searchKeyword: '',
      selectedCategory: '',
      selectedLevel: '',
      vocabularyList: [
        {
          id: 1,
          word: 'Con mèo',
          pronunciation: '/meo/',
          category: 'Động vật',
          level: 'Dễ',
          status: 'Đang sử dụng',
          description: 'Từ vựng cơ bản giúp bé nhận biết động vật quen thuộc'
        },
        {
          id: 2,
          word: 'Màu đỏ',
          pronunciation: '/do/',
          category: 'Màu sắc',
          level: 'Dễ',
          status: 'Đang sử dụng',
          description: 'Từ vựng về màu sắc cơ bản'
        },
        {
          id: 3,
          word: 'Bố',
          pronunciation: '/bo/',
          category: 'Gia đình',
          level: 'Trung bình',
          status: 'Đang sử dụng',
          description: 'Từ vựng về thành viên trong gia đình'
        },
        {
          id: 4,
          word: 'Cái bàn',
          pronunciation: '/ban/',
          category: 'Đồ vật',
          level: 'Khó',
          status: 'Tạm ẩn',
          description: 'Từ vựng về đồ vật thường gặp trong nhà'
        }
      ]
    }
  },

  computed: {
    filteredVocabularyList() {
      return this.vocabularyList.filter(vocabulary => {
        const matchKeyword = vocabulary.word
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase())

        const matchCategory = this.selectedCategory
          ? vocabulary.category === this.selectedCategory
          : true

        const matchLevel = this.selectedLevel
          ? vocabulary.level === this.selectedLevel
          : true

        return matchKeyword && matchCategory && matchLevel
      })
    }
  },

  methods: {
    resetFilter() {
      this.searchKeyword = ''
      this.selectedCategory = ''
      this.selectedLevel = ''
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

    getStatusClass(status) {
      if (status === 'Đang sử dụng') {
        return 'bg-primary-subtle text-primary'
      }

      return 'bg-secondary-subtle text-secondary'
    },

    goToCreateVocabulary() {
      this.$router.push('/teacher/vocabulary-create')
    },

    goToVocabularyDetail(vocabulary) {
      this.$router.push(`/teacher/vocabulary-detail/${vocabulary.id}`)
    },

    goToVocabularyEdit(vocabulary) {
      this.$router.push(`/teacher/vocabulary-edit/${vocabulary.id}`)
    }
  }
}
</script>

<style scoped>
.vocabulary-management-page {
  background-color: #f8f9fc;
  min-height: 100vh;
}

.table th,
.table td {
  vertical-align: middle;
}

.table tbody tr {
  transition: all 0.3s ease;
}

.table tbody tr:hover {
  background-color: #f8fbff;
}

.btn-primary {
  background: linear-gradient(135deg, #4facfe, #00c6ff);
  border: none;
}

.btn-primary:hover {
  opacity: 0.9;
}

.form-control,
.form-select {
  height: 48px;
  border: 1px solid #e5e7eb;
}

.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: #4facfe;
}
</style>