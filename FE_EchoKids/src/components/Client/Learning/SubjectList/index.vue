<template>
  <div class="container py-4">

    <!--  HEADER -->
    <div class="text-center mb-4">
      <h4>🎮 Bé muốn học gì hôm nay?</h4>
      <p class="text-muted">Hãy chọn một chủ đề bên dưới nhé 🎈</p>
    </div>

    <!--  NHÂN VẬT -->
    <div class="card p-3 mb-4 shadow-sm border-0 text-center bg-light">
      🐻 <b>Bạn Gấu nói:</b> “Chọn chủ đề mà bé thích nhé!”
    </div>

    <!--  SUBJECT LIST -->
    <div class="row g-4">

      <!--  CHỮ CÁI -->
      <div class="col-md-3">
        <div class="card subject-card text-center p-4 shadow-sm border-0 h-100"
             @click="goToLesson('alphabet')">
          <div class="display-4 mb-2">🔤</div>
          <h5>Chữ cái</h5>
          <p class="text-muted small">Luyện phát âm từng chữ</p>
          <button class="btn btn-primary mt-2">Chọn</button>
        </div>
      </div>

      <!--  CON VẬT -->
      <div class="col-md-3">
        <div class="card subject-card text-center p-4 shadow-sm border-0 h-100"
             @click="goToLesson('animal')">
          <div class="display-4 mb-2">🐶</div>
          <h5>Con vật</h5>
          <p class="text-muted small">Học tên các con vật</p>
          <button class="btn btn-success mt-2">Chọn</button>
        </div>
      </div>

      <!--  TRÁI CÂY -->
      <div class="col-md-3">
        <div class="card subject-card text-center p-4 shadow-sm border-0 h-100"
             @click="goToLesson('fruit')">
          <div class="display-4 mb-2">🍎</div>
          <h5>Trái cây</h5>
          <p class="text-muted small">Luyện phát âm dễ nhớ</p>
          <button class="btn btn-warning mt-2">Chọn</button>
        </div>
      </div>

      <!--  MÀU SẮC -->
      <div class="col-md-3">
        <div class="card subject-card text-center p-4 shadow-sm border-0 h-100"
             @click="goToLesson('color')">
          <div class="display-4 mb-2">🎨</div>
          <h5>Màu sắc</h5>
          <p class="text-muted small">Nhận biết và luyện nói</p>
          <button class="btn btn-danger mt-2">Chọn</button>
        </div>
      </div>

    </div>

    <!--  CTA -->
    <div class="text-center mt-5">
      <p class="text-muted">👉 Bé hãy chọn 1 chủ đề để bắt đầu nhé!</p>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    goToLesson(subject) {

      this.$router.push(`/lesson-list/${subject}`);
    }
  }
};
</script>

<style scoped>
.subject-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.subject-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
</style>