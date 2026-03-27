<template>
  <div class="container py-4">

    <!-- HEADER -->
    <div class="text-center mb-4">
      <h4>📘 Chọn bài luyện</h4>
      <p class="text-muted">👉 Bé hãy chọn một bài để bắt đầu nhé 🎈</p>
    </div>

    <!-- CHARACTER GUIDE -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Bé chọn bài dễ trước nhé, mình cùng cố gắng!”
    </div>

    <!-- LESSON LIST -->
    <div class="row g-4">

      <!-- LESSON ITEM -->
      <div class="col-md-4" v-for="lesson in lessons" :key="lesson.id">
        <div class="card lesson-card p-4 shadow-sm border-0 text-center h-100"
             @click="goToPractice(lesson.id)">

          <div class="mb-2" style="font-size: 40px">
            {{ lesson.icon }}
          </div>

          <h5>{{ lesson.title }}</h5>

          <p class="text-muted small">
            {{ lesson.description }}
          </p>

          <span :class="getLevelClass(lesson.level)" class="badge mb-2">
            {{ lesson.level }}
          </span>

          <button :class="getBtnClass(lesson.level)" class="btn mt-2">
            🎯 Bắt đầu
          </button>

        </div>
      </div>

    </div>

    <!-- CTA -->
    <div class="text-center mt-5">
      <p class="text-muted">👉 Bé hãy chọn bài phù hợp với mình nhé 💪</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      lessons: [
        {
          id: 1,
          icon: "🅰️",
          title: "Chữ cái A",
          description: "Luyện phát âm đơn giản",
          level: "Dễ"
        },
        {
          id: 2,
          icon: "🐱",
          title: "Con mèo",
          description: "Tập nói từ quen thuộc",
          level: "Trung bình"
        },
        {
          id: 3,
          icon: "🍎",
          title: "Quả táo đỏ",
          description: "Luyện phát âm rõ ràng",
          level: "Khó"
        }
      ]
    };
  },

  methods: {
    goToPractice(id) {
      this.$router.push(`/practice/${id}`);
    },

    getLevelClass(level) {
      if (level === "Dễ") return "bg-success";
      if (level === "Trung bình") return "bg-warning text-dark";
      return "bg-danger";
    },

    getBtnClass(level) {
      if (level === "Dễ") return "btn-success";
      if (level === "Trung bình") return "btn-warning";
      return "btn-danger";
    }
  }
};
</script>

<style scoped>
.lesson-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px;
}

.lesson-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12);
}
</style>