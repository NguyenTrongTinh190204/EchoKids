<template>
  <div class="container-fluid py-4 history-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Lịch sử luyện tập
        </h4>
        <small class="text-muted">
          Theo dõi các bài học và kết quả gần đây của bé
        </small>
      </div>

      <button
        class="btn btn-outline-primary rounded-pill"
        @click="goBack"
      >
        Quay lại
      </button>
    </div>

    <!-- BỘ LỌC -->
    <div class="bg-light rounded-4 p-3 shadow-sm mb-4">
      <div class="row g-3">

        <div class="col-md-4">
          <label class="form-label small text-muted">
            Chủ đề
          </label>

          <select
            class="form-select rounded-4"
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
            Kết quả
          </label>

          <select
            class="form-select rounded-4"
            v-model="filters.status"
          >
            <option value="">Tất cả</option>
            <option value="Tốt">Tốt</option>
            <option value="Trung bình">Trung bình</option>
            <option value="Cần cải thiện">Cần cải thiện</option>
          </select>
        </div>

        <div class="col-md-4">
          <label class="form-label small text-muted">
            Tìm kiếm
          </label>

          <input
            type="text"
            class="form-control rounded-4"
            placeholder="Nhập tên bài học"
            v-model="filters.keyword"
          >
        </div>

      </div>
    </div>

    <!-- DANH SÁCH LỊCH SỬ -->
    <div class="bg-light rounded-4 p-4 shadow-sm">

      <div
        v-for="history in filteredHistory"
        :key="history.id"
        class="bg-white rounded-4 border p-3 mb-3 history-card"
        @click="goToDetail(history.id)"
      >
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div>
            <div class="fw-bold">
              {{ history.lesson }}
            </div>

            <small class="text-muted">
              {{ history.subject }} • {{ history.date }}
            </small>
          </div>

          <span
            class="badge px-3 py-2"
            :class="getStatusClass(history.status)"
          >
            {{ history.status }}
          </span>
        </div>

        <div class="row g-3 mt-2">

          <div class="col-md-4">
            <small class="text-muted d-block mb-1">
              Điểm phát âm
            </small>

            <div class="fw-bold text-success">
              {{ history.score }}/100
            </div>
          </div>

          <div class="col-md-4">
            <small class="text-muted d-block mb-1">
              Thời gian học
            </small>

            <div class="fw-bold">
              {{ history.duration }}
            </div>
          </div>

          <div class="col-md-4">
            <small class="text-muted d-block mb-1">
              Âm lỗi
            </small>

            <div class="fw-bold text-danger">
              {{ history.errorSound }}
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "PracticeHistory",

  data() {
    return {
      filters: {
        subject: "",
        status: "",
        keyword: ""
      },

      // dữ liệu từ bảng tien_do_hoc_tap + bai_hoc
      histories: [
        {
          id: 1,
          lesson: "Âm L cơ bản",
          subject: "Âm khó",
          date: "20/03/2026",
          status: "Tốt",
          score: 82,
          duration: "12 phút",
          errorSound: "Âm đầu L"
        },
        {
          id: 2,
          lesson: "Nghe hiểu hình ảnh",
          subject: "Nghe hiểu",
          date: "19/03/2026",
          status: "Trung bình",
          score: 68,
          duration: "10 phút",
          errorSound: "Thanh sắc"
        },
        {
          id: 3,
          lesson: "Âm S/X",
          subject: "Âm khó",
          date: "18/03/2026",
          status: "Cần cải thiện",
          score: 55,
          duration: "15 phút",
          errorSound: "Âm S/X"
        }
      ]
    };
  },

  computed: {
    filteredHistory() {
      return this.histories.filter(history => {
        const matchSubject =
          !this.filters.subject ||
          history.subject === this.filters.subject;

        const matchStatus =
          !this.filters.status ||
          history.status === this.filters.status;

        const matchKeyword =
          !this.filters.keyword ||
          history.lesson
            .toLowerCase()
            .includes(this.filters.keyword.toLowerCase());

        return matchSubject && matchStatus && matchKeyword;
      });
    }
  },

  methods: {
    getStatusClass(status) {
      if (status === "Tốt") {
        return "bg-success";
      }

      if (status === "Trung bình") {
        return "bg-warning text-dark";
      }

      return "bg-danger";
    },

    goToDetail(historyId) {
      this.$router.push({
        path: '/parent/progress/report',
        query: {
          historyId: historyId
        }
      });
    },

    goBack() {
      this.$router.push('/parent/dashboard');
    }
  }
};
</script>

<style scoped>
.history-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.history-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.history-card:hover {
  transform: translateY(-3px);
}
</style>