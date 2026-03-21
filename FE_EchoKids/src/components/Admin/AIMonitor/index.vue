<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Theo dõi AI phát âm</h5>
        <small class="text-muted">
          Giám sát hoạt động chấm điểm phát âm tiếng Việt của hệ thống AI
        </small>
      </div>

      <!-- STATS -->
      <div class="row g-3 mb-4">

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Tổng lượt luyện</h6>
            <h3>1,250</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Tỷ lệ chính xác</h6>
            <h3>92%</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Thời gian xử lý</h6>
            <h3>1.2s</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Lượt lỗi</h6>
            <h3>100</h3>
          </div>
        </div>

      </div>

      <!-- ACTION -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <button class="btn btn-success me-2">
              🔄 Làm mới
            </button>

            <button class="btn btn-warning">
              🧪 Test AI
            </button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm kiếm..."
            />
          </div>

        </div>
      </div>

      <!-- LOG TABLE -->
      <div class="card p-3 mb-4">
        <h6 class="mb-3">Lịch sử chấm phát âm</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Học viên</th>
              <th>Từ luyện</th>
              <th>Điểm</th>
              <th>Đánh giá</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Nguyễn Văn A</td>
              <td>Mẹ</td>

              <td>
                <span class="badge bg-success">90</span>
              </td>

              <td>
                <span class="badge bg-info">Tốt</span>
              </td>

              <td>
                <span class="badge bg-success">Thành công</span>
              </td>

              <td>1.1s</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Trần Thị B</td>
              <td>Bàn</td>

              <td>
                <span class="badge bg-warning text-dark">70</span>
              </td>

              <td>
                <span class="badge bg-warning text-dark">Trung bình</span>
              </td>

              <td>
                <span class="badge bg-danger">Lỗi</span>
              </td>

              <td>2.3s</td>
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
                Sai âm đầu: "m" → "n"
              </li>

              <li class="list-group-item">
                Sai vần: "an" → "ang"
              </li>

              <li class="list-group-item">
                Sai thanh điệu (hỏi/ngã)
              </li>
            </ul>

          </div>
        </div>

        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Gợi ý luyện tập từ AI</h6>

            <ul class="list-group">
              <li class="list-group-item">
                Luyện từ "mẹ", "má", "mà"
              </li>

              <li class="list-group-item">
                Nghe audio mẫu trước khi nói
              </li>

              <li class="list-group-item">
                Luyện thanh hỏi và thanh ngã
              </li>
            </ul>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>