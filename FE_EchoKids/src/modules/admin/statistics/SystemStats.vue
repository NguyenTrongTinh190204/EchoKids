<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Thống kê hệ thống</h5>
        <small class="text-muted">
          Theo dõi tiến độ học và kết quả phát âm của trẻ
        </small>
      </div>

      <!-- FILTER -->
      <div class="card p-3 mb-4">
        <div class="row">

          <div class="col-md-3">
            <label class="form-label">Từ ngày</label>
            <input type="date" class="form-control" />
          </div>

          <div class="col-md-3">
            <label class="form-label">Đến ngày</label>
            <input type="date" class="form-control" />
          </div>

          <div class="col-md-3">
            <label class="form-label">Chủ đề</label>
            <select class="form-control">
              <option>Tất cả</option>
              <option>Âm đầu</option>
              <option>Vần</option>
              <option>Thanh điệu</option>
              <option>Từ vựng</option>
            </select>
          </div>

          <div class="col-md-3 d-flex align-items-end">
            <button class="btn btn-primary w-100">
              🔍 Lọc dữ liệu
            </button>
          </div>

        </div>
      </div>

      <!-- STATS -->
      <div class="row g-3 mb-4">

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>🎤 Lượt luyện</h6>
            <h3>1,200</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>🤖 Điểm trung bình</h6>
            <h3>85%</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>⚠️ Lỗi phát âm</h6>
            <h3>320</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>👶 Trẻ đang học</h6>
            <h3>90</h3>
          </div>
        </div>

      </div>

      <!-- CHART -->
      <div class="row">

        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Tiến bộ theo thời gian</h6>
            <div class="chart-box">
              📈 Biểu đồ tiến bộ (AI score tăng dần)
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Độ chính xác phát âm</h6>
            <div class="chart-box">
              📊 Biểu đồ độ chính xác (âm đầu / vần / thanh)
            </div>
          </div>
        </div>

      </div>

      <!-- ERROR ANALYSIS -->
      <div class="row">

        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Lỗi phổ biến</h6>

            <ul class="list-group">
              <li class="list-group-item">
                Sai âm đầu: l → n
              </li>
              <li class="list-group-item">
                Sai vần: an → ang
              </li>
              <li class="list-group-item">
                Sai thanh: sắc ↔ huyền
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
                Luyện âm đầu khó (l, n)
              </li>
              <li class="list-group-item">
                Nghe mẫu trước khi phát âm
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- TOP USERS -->
      <div class="card p-3">
        <h6 class="mb-3">Trẻ tiến bộ tốt nhất</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Người dùng</th>
              <th>Lượt luyện</th>
              <th>Điểm TB</th>
              <th>Tiến bộ</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar bg-primary text-white me-2">A</div>
                  <div>Nguyễn An</div>
                </div>
              </td>

              <td>120</td>
              <td><span class="badge bg-success">90%</span></td>
              <td><span class="badge bg-success">↑ Tốt</span></td>
            </tr>

            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar bg-warning text-dark me-2">B</div>
                  <div>Trần Bình</div>
                </div>
              </td>

              <td>98</td>
              <td><span class="badge bg-info">85%</span></td>
              <td><span class="badge bg-info">↑ Ổn định</span></td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chart-box {
  height: 250px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border-radius: 10px;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>