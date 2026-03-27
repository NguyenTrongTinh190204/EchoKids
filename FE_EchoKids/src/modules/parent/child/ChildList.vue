<template>
  <div class="container-fluid py-4 child-list-page">

    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold text-primary mb-1">
          Danh sách trẻ
        </h4>

        <small class="text-muted">
          Quản lý hồ sơ và tiến độ học tập của trẻ
        </small>
      </div>

      <button
        class="btn btn-primary rounded-pill px-4"
        @click="goToCreateChild"
      >
        Thêm trẻ
      </button>
    </div>

    <!-- THỐNG KÊ -->
    <div class="row g-3 mb-4">

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tổng số trẻ</small>
          <div class="fw-bold fs-3 text-primary">
            {{ summary.totalChildren }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Đang học</small>
          <div class="fw-bold fs-3 text-success">
            {{ summary.activeChildren }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Cần hỗ trợ thêm</small>
          <div class="fw-bold fs-3 text-warning">
            {{ summary.needSupport }}
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="bg-light rounded-4 p-3 shadow-sm h-100">
          <small class="text-muted">Tiến bộ tốt</small>
          <div class="fw-bold fs-3 text-danger">
            {{ summary.goodProgress }}
          </div>
        </div>
      </div>

    </div>

    <!-- DANH SÁCH -->
    <div class="row g-4">

      <div
        v-for="child in children"
        :key="child.id"
        class="col-lg-4 col-md-6"
      >
        <div class="bg-light rounded-4 shadow-sm p-4 h-100 child-card">

          <div class="text-center mb-4">
            <div class="avatar-circle mx-auto mb-3">
              {{ child.name.charAt(0) }}
            </div>

            <h5 class="fw-bold mb-1">
              {{ child.name }}
            </h5>

            <small class="text-muted">
              {{ child.age }} tuổi
            </small>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted d-block mb-1">
              Mức độ hiện tại
            </small>

            <div class="fw-bold text-primary">
              {{ child.level }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-3">
            <small class="text-muted d-block mb-1">
              Mục tiêu học
            </small>

            <div class="fw-bold">
              {{ child.goal }}
            </div>
          </div>

          <div class="bg-white rounded-4 border p-3 mb-4">
            <div class="d-flex justify-content-between mb-2">
              <small class="text-muted">
                Tiến độ
              </small>

              <small class="fw-bold text-primary">
                {{ child.progress }}%
              </small>
            </div>

            <div class="progress" style="height: 6px;">
              <div
                class="progress-bar bg-primary"
                :style="{ width: child.progress + '%' }"
              ></div>
            </div>
          </div>

          <div class="d-flex gap-2">
            <button
              class="btn btn-primary rounded-pill flex-fill"
              @click="goToChildDetail(child.id)"
            >
              Xem chi tiết
            </button>

            <button
              class="btn btn-outline-primary rounded-pill flex-fill"
              @click="goToProgress(child.id)"
            >
              Tiến độ
            </button>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ChildList",

  data() {
    return {
      summary: {
        totalChildren: 3,
        activeChildren: 2,
        needSupport: 1,
        goodProgress: 2
      },

      children: [
        {
          id: 1,
          name: "Nguyễn Minh Anh",
          age: 5,
          level: "Trung bình",
          goal: "Cải thiện âm L/N",
          progress: 72
        },
        {
          id: 2,
          name: "Trần Gia Huy",
          age: 6,
          level: "Dễ",
          goal: "Luyện âm S/X",
          progress: 55
        },
        {
          id: 3,
          name: "Lê Bảo Ngọc",
          age: 4,
          level: "Khó",
          goal: "Luyện nghe hiểu",
          progress: 88
        }
      ]
    };
  },

  methods: {
    goToCreateChild() {
      this.$router.push('/parent/child/create');
    },

    goToChildDetail(childId) {
      this.$router.push({
        path: '/parent/child/detail',
        query: {
          childId: childId
        }
      });
    },

    goToProgress(childId) {
      this.$router.push({
        path: '/parent/progress',
        query: {
          childId: childId
        }
      });
    }
  }
};
</script>

<style scoped>
.child-list-page {
  background-color: #f9fbfd;
  min-height: 100vh;
}

.child-card {
  transition: all 0.2s ease;
}

.child-card:hover {
  transform: translateY(-4px);
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0d6efd, #4da3ff);
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>