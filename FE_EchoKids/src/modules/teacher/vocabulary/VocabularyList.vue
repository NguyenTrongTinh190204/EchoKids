<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Danh sách từ vựng</h4>
        <p class="text-muted mb-0">
          Quản lý từ vựng, hình ảnh và lỗi phát âm
        </p>
      </div>

      <button
        class="btn btn-primary rounded px-4"
        @click="goToCreateVocabulary"
      >
        Thêm từ vựng
      </button>
    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="row g-3">

          <div class="col-md-4">
            <label class="form-label small text-muted">
              Chủ đề
            </label>

            <select
              class="form-select"
              v-model="filters.subject"
            >
              <option value="">Tất cả chủ đề</option>
              <option value="Âm cơ bản">Âm cơ bản</option>
              <option value="Âm khó">Âm khó</option>
              <option value="Nghe hiểu">Nghe hiểu</option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label small text-muted">
              Loại lỗi
            </label>

            <select
              class="form-select"
              v-model="filters.errorType"
            >
              <option value="">Tất cả lỗi</option>
              <option value="Âm đầu">Âm đầu</option>
              <option value="Vần">Vần</option>
              <option value="Thanh điệu">Thanh điệu</option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label small text-muted">
              Tìm kiếm
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Nhập từ vựng"
              v-model="filters.keyword"
            >
          </div>

        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded">
      <div class="card-body">

        <div
          v-for="word in filteredWords"
          :key="word.id"
          class="border rounded p-3 mb-3 vocabulary-card"
        >
          <div class="row align-items-center">

            <div class="col-lg-2 col-md-3 mb-3 mb-lg-0">
              <img
                :src="word.hinh_anh"
                :alt="word.ten_tu"
                class="img-fluid rounded border vocabulary-image"
              >
            </div>

            <div class="col-lg-3 col-md-4 mb-3 mb-lg-0">
              <div class="fw-bold mb-1">
                {{ word.ten_tu }}
              </div>

              <small class="text-muted">
                {{ word.danh_muc }}
              </small>
            </div>

            <div class="col-lg-2 col-md-3 mb-3 mb-lg-0">
              <small class="text-muted d-block mb-1">
                Loại lỗi
              </small>

              <span class="badge bg-warning-subtle text-warning">
                {{ word.loi_phat_am }}
              </span>
            </div>

            <div class="col-lg-2 col-md-2 mb-3 mb-lg-0">
              <small class="text-muted d-block mb-1">
                Mức độ
              </small>

              <span
                class="badge"
                :class="getLevelClass(word.cap_do)"
              >
                {{ word.cap_do }}
              </span>
            </div>

            <div class="col-lg-3">
              <div class="d-flex gap-2 justify-content-lg-end">
                <button
                  class="btn btn-outline-primary btn-sm rounded"
                  @click="goToEditWord(word.id)"
                >
                  Sửa
                </button>

                <button
                  class="btn btn-outline-secondary btn-sm rounded"
                  @click="previewWord(word.id)"
                >
                  Xem
                </button>
              </div>
            </div>

          </div>
        </div>

        <div
          v-if="filteredWords.length === 0"
          class="text-center py-5"
        >
          <div class="fw-bold text-muted mb-2">
            Không tìm thấy từ vựng
          </div>

          <small class="text-muted">
            Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
          </small>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "VocabularyList",

  data() {
    return {
      filters: {
        subject: "",
        errorType: "",
        keyword: ""
      },

      words: [
        {
          id: 1,
          ten_tu: "Lá",
          danh_muc: "Âm khó",
          loi_phat_am: "Âm đầu",
          cap_do: "Dễ",
          hinh_anh: "https://via.placeholder.com/120x120"
        },
        {
          id: 2,
          ten_tu: "Lửa",
          danh_muc: "Âm khó",
          loi_phat_am: "Âm đầu",
          cap_do: "Trung bình",
          hinh_anh: "https://via.placeholder.com/120x120"
        },
        {
          id: 3,
          ten_tu: "Sông",
          danh_muc: "Âm khó",
          loi_phat_am: "Âm đầu",
          cap_do: "Khó",
          hinh_anh: "https://via.placeholder.com/120x120"
        }
      ]
    };
  },

  computed: {
    filteredWords() {
      return this.words.filter(word => {
        const matchSubject =
          !this.filters.subject ||
          word.danh_muc === this.filters.subject;

        const matchError =
          !this.filters.errorType ||
          word.loi_phat_am === this.filters.errorType;

        const matchKeyword =
          !this.filters.keyword ||
          word.ten_tu
            .toLowerCase()
            .includes(this.filters.keyword.toLowerCase());

        return matchSubject && matchError && matchKeyword;
      });
    }
  },

  methods: {
    getLevelClass(level) {
      if (level === "Dễ") {
        return "bg-success-subtle text-success";
      }

      if (level === "Trung bình") {
        return "bg-warning-subtle text-warning";
      }

      return "bg-danger-subtle text-danger";
    },

    goToCreateVocabulary() {
      this.$router.push('/teacher/vocabulary/create');
    },

    goToEditWord(wordId) {
      this.$router.push({
        path: '/teacher/vocabulary/edit',
        query: {
          wordId: wordId
        }
      });
    },

    previewWord(wordId) {
      this.$router.push({
        path: '/teacher/vocabulary/detail',
        query: {
          wordId: wordId
        }
      });
    }
  }
};
</script>

<style scoped>
.vocabulary-card {
  transition: all 0.2s ease;
}

.vocabulary-card:hover {
  transform: translateY(-3px);
}

.vocabulary-image {
  width: 100%;
  max-width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>