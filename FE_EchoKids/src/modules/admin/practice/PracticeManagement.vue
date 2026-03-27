<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Quản lý bài luyện phát âm</h5>
        <small class="text-muted">
          Quản lý các bài luyện giúp trẻ luyện phát âm tiếng Việt với AI
        </small>
      </div>

      <!-- STATS -->
      <div class="row g-3 mb-4">

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Tổng bài luyện</h6>
            <h3>25</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Tổng từ luyện</h6>
            <h3>120</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Đang hoạt động</h6>
            <h3>18</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Tạm dừng</h6>
            <h3>7</h3>
          </div>
        </div>

      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <button class="btn btn-primary me-2">
              ➕ Tạo bài luyện
            </button>

            <button class="btn btn-success">
              Làm mới
            </button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm bài luyện..."
            />
          </div>

        </div>
      </div>

      <!-- TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách bài luyện</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Tên bài luyện</th>
              <th>Chủ đề</th>
              <th>Số từ</th>
              <th>Thời lượng</th>
              <th>Cấp độ</th>
              <th>Trạng thái</th>
              <th class="text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>

            <!-- BÀI 1 -->
            <tr>
              <td>1</td>

              <td>
                <div>
                  <div class="fw-semibold">Luyện âm đầu "b"</div>
                  <small class="text-muted">
                    Tập phát âm các từ bắt đầu bằng "b"
                  </small>
                </div>
              </td>

              <td>
                <span class="badge bg-info">Âm đầu</span>
              </td>

              <td>
                <span class="badge bg-primary">10</span>
              </td>

              <td>5 phút</td>

              <td>
                <span class="badge bg-success">Dễ</span>
              </td>

              <td>
                <span class="badge bg-success">Hoạt động</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm me-1">Xóa</button>
                <button class="btn btn-secondary btn-sm">Tạm dừng</button>
              </td>
            </tr>

            <!-- BÀI 2 -->
            <tr>
              <td>2</td>

              <td>
                <div>
                  <div class="fw-semibold">Luyện thanh điệu</div>
                  <small class="text-muted">
                    Phân biệt thanh sắc và thanh huyền
                  </small>
                </div>
              </td>

              <td>
                <span class="badge bg-warning text-dark">Thanh điệu</span>
              </td>

              <td>
                <span class="badge bg-primary">15</span>
              </td>

              <td>10 phút</td>

              <td>
                <span class="badge bg-warning text-dark">Trung bình</span>
              </td>

              <td>
                <span class="badge bg-warning text-dark">Tạm dừng</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm me-1">Xóa</button>
                <button class="btn btn-success btn-sm">Kích hoạt</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <!-- FORM -->
      <div class="card p-3 mt-4">
        <h6 class="mb-3">Tạo / chỉnh sửa bài luyện</h6>

        <div class="row">

          <div class="col-md-6">
            <label class="form-label">Tên bài luyện</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ví dụ: Luyện âm đầu b"
            />
          </div>

          <div class="col-md-6">
            <label class="form-label">Chủ đề</label>
            <select class="form-control">
              <option>Âm đầu</option>
              <option>Vần</option>
              <option>Thanh điệu</option>
              <option>Từ vựng</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Số từ luyện</label>
            <input type="number" class="form-control" placeholder="10" />
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Thời lượng (phút)</label>
            <input type="number" class="form-control" placeholder="5" />
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Cấp độ</label>
            <select class="form-control">
              <option>Dễ</option>
              <option>Trung bình</option>
              <option>Khó</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Trạng thái</label>
            <select class="form-control">
              <option>Hoạt động</option>
              <option>Tạm dừng</option>
            </select>
          </div>

        </div>

        <div class="mt-3">
          <button class="btn btn-primary me-2">Lưu</button>
          <button class="btn btn-secondary">Hủy</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>