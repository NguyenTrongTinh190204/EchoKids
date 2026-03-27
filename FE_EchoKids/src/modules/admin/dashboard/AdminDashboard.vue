<template>
  <div class="container-fluid">

    <!-- HEADER -->
    <div class="card p-3 mb-4">
      <h5 class="mb-1">Tổng quan hệ thống</h5>
      <small class="text-muted">
        Theo dõi hoạt động học tập và luyện phát âm của trẻ
      </small>
    </div>

    <!-- STATS -->
    <div class="row g-3 mb-4">

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>👶 Trẻ đang học</h6>
          <h3>120</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>🎤 Lượt luyện phát âm</h6>
          <h3>300</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>🤖 Điểm trung bình</h6>
          <h3>82%</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>⚠️ Lỗi phát âm</h6>
          <h3>150</h3>
        </div>
      </div>

    </div>

    <!-- QUICK ACTION -->
    <div class="card p-3 mb-4">
      <h6 class="mb-3">Hành động nhanh</h6>

      <button class="btn btn-primary me-2">
        ➕ Thêm bài học
      </button>

      <button class="btn btn-success me-2 mt-2">
        👤 Thêm người dùng
      </button>

      <button class="btn btn-warning mt-2">
        📊 Xem báo cáo
      </button>
    </div>

    <!-- RECENT ACTIVITY -->
    <div class="card p-3 mb-4">
      <h6 class="mb-3">Hoạt động gần đây</h6>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Người dùng</th>
            <th>Hoạt động</th>
            <th>Ngày</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn An</td>
            <td>Luyện phát âm từ "mèo"</td>
            <td>20/03/2026</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Trần Bình</td>
            <td>Hoàn thành bài luyện âm đầu "b"</td>
            <td>20/03/2026</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ERROR ANALYSIS -->
    <div class="row">

      <div class="col-md-6">
        <div class="card p-3 mb-4">
          <h6 class="mb-3">Lỗi phát âm phổ biến</h6>

          <ul class="list-group">
            <li class="list-group-item">
              Sai âm đầu: l → n
            </li>
            <li class="list-group-item">
              Sai thanh: sắc ↔ huyền
            </li>
            <li class="list-group-item">
              Sai vần: an → ang
            </li>
          </ul>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card p-3 mb-4">
          <h6 class="mb-3">Gợi ý cải thiện</h6>

          <ul class="list-group">
            <li class="list-group-item">
              Tăng bài luyện thanh điệu
            </li>
            <li class="list-group-item">
              Tập trung nhóm âm đầu khó
            </li>
            <li class="list-group-item">
              Luyện nghe trước khi nói
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {};
</script>