<template>
  <div class="home">

    <!-- HEADER -->
    <div class="header d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img
          src="https://i.pravatar.cc/40"
          class="avatar"
        />
        <div class="ms-2">
          <div class="name">Xin chào</div>
          <div class="progress-text">Tiến độ 10%</div>
        </div>
      </div>

      <div class="notify">●</div>
    </div>

    <!-- BANNER LEVEL -->
    <div class="level-card">
      <div class="level-content">
        <h5>Cấp độ 1</h5>
        <p>Bắt đầu hành trình học của bạn</p>

        <!-- progress -->
        <div class="progress mt-2">
          <div class="progress-bar" style="width: 30%"></div>
        </div>
      </div>
    </div>

    <!-- MENU -->
    <div class="menu d-flex justify-content-between">
      <div class="menu-item active">Bài học</div>
      <div class="menu-item">Trò chơi</div>
      <div class="menu-item">Câu chuyện</div>
      <div class="menu-item">Hoạt động</div>
    </div>

    <!-- LESSON CARD -->
    <div class="section">
      <h6 class="section-title">Bài học</h6>

      <div class="lesson-card d-flex align-items-center">
        <div class="lesson-info">
          <h5>Chủ đề cơ bản</h5>
          <p>Học từ vựng cơ bản hằng ngày</p>
          <button class="btn btn-primary">Bắt đầu</button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          class="lesson-img"
        />
      </div>
    </div>

    <!-- GAME -->
    <div class="section">
      <h6 class="section-title">Trò chơi</h6>

      <div class="game-card">
        <h5>Luyện nghe nhanh</h5>
        <p>Nghe và chọn đúng hình</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "KidHome"
}
</script>

<style scoped>
.home {
  padding: 16px;
  background: #f5f7fb;
  min-height: 100vh;
}

/* HEADER */
.header {
  margin-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.name {
  font-weight: 600;
}

.progress-text {
  font-size: 12px;
  color: #777;
}

.notify {
  font-size: 20px;
  color: red;
}

/* LEVEL CARD */
.level-card {
  background: linear-gradient(135deg, #6c63ff, #5a54e6);
  border-radius: 20px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}

.progress {
  height: 8px;
  background: rgba(255,255,255,0.3);
}

.progress-bar {
  background: #fff;
}

/* MENU */
.menu {
  margin-bottom: 20px;
}

.menu-item {
  padding: 8px 12px;
  border-radius: 10px;
  background: #eee;
  font-size: 13px;
}

.menu-item.active {
  background: #000;
  color: white;
}

/* SECTION */
.section {
  margin-bottom: 20px;
}

.section-title {
  margin-bottom: 10px;
}

/* LESSON CARD */
.lesson-card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  justify-content: space-between;
}

.lesson-img {
  width: 80px;
}

/* GAME */
.game-card {
  background: #fff;
  border-radius: 16px;
  padding: 16px;
}
</style>