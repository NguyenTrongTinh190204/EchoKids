<template>
  <div class="container-fluid py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Quản lý bài luyện phát âm</h4>
        <p class="text-muted mb-0">
          Quản lý các bài luyện giúp trẻ luyện phát âm tiếng Việt với AI
        </p>
      </div>

      <button class="btn btn-primary rounded px-4">
        Tạo bài luyện
      </button>
    </div>

    <div class="row g-3 mb-4">

      <div class="col-md-3">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Tổng bài luyện</small>
            <h3 class="fw-bold text-primary mt-2 mb-0">25</h3>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Tổng từ luyện</small>
            <h3 class="fw-bold text-success mt-2 mb-0">120</h3>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Đang hoạt động</small>
            <h3 class="fw-bold text-warning mt-2 mb-0">18</h3>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card border-0 shadow-sm rounded h-100">
          <div class="card-body text-center">
            <small class="text-muted">Tạm dừng</small>
            <h3 class="fw-bold text-danger mt-2 mb-0">7</h3>
          </div>
        </div>
      </div>

    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="row g-3 align-items-center">
          <div class="col-lg-8">
            <button class="btn btn-primary rounded me-2">
              Tạo bài luyện
            </button>

            <button class="btn btn-outline-success rounded">
              Làm mới
            </button>
          </div>

          <div class="col-lg-4">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm bài luyện..."
            />
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="fw-bold mb-0">Danh sách bài luyện</h6>
        </div>

        <div class="table-responsive">
          <table class="table align-middle mb-0">
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
              <tr>
                <td>1</td>

                <td>
                  <div class="fw-semibold">Luyện âm đầu "b"</div>
                  <small class="text-muted">
                    Tập phát âm các từ bắt đầu bằng "b"
                  </small>
                </td>

                <td>
                  <span class="badge bg-info-subtle text-info">
                    Âm đầu
                  </span>
                </td>

                <td>
                  <span class="badge bg-primary-subtle text-primary">
                    10 từ
                  </span>
                </td>

                <td>5 phút</td>

                <td>
                  <span class="badge bg-success-subtle text-success">
                    Dễ
                  </span>
                </td>

                <td>
                  <span class="badge bg-success-subtle text-success">
                    Hoạt động
                  </span>
                </td>

                <td class="text-center">
                  <button class="btn btn-outline-warning btn-sm rounded me-1">
                    Sửa
                  </button>

                  <button class="btn btn-outline-danger btn-sm rounded me-1">
                    Xóa
                  </button>

                  <button class="btn btn-outline-secondary btn-sm rounded">
                    Tạm dừng
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>

                <td>
                  <div class="fw-semibold">Luyện thanh điệu</div>
                  <small class="text-muted">
                    Phân biệt thanh sắc và thanh huyền
                  </small>
                </td>

                <td>
                  <span class="badge bg-warning-subtle text-warning">
                    Thanh điệu
                  </span>
                </td>

                <td>
                  <span class="badge bg-primary-subtle text-primary">
                    15 từ
                  </span>
                </td>

                <td>10 phút</td>

                <td>
                  <span class="badge bg-warning-subtle text-warning">
                    Trung bình
                  </span>
                </td>

                <td>
                  <span class="badge bg-warning-subtle text-warning">
                    Tạm dừng
                  </span>
                </td>

                <td class="text-center">
                  <button class="btn btn-outline-warning btn-sm rounded me-1">
                    Sửa
                  </button>

                  <button class="btn btn-outline-danger btn-sm rounded me-1">
                    Xóa
                  </button>

                  <button class="btn btn-outline-success btn-sm rounded">
                    Kích hoạt
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded">
      <div class="card-body">
        <h6 class="fw-bold mb-3">Tạo / chỉnh sửa bài luyện</h6>

        <div class="row g-3">
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
            <select class="form-select">
              <option>Âm đầu</option>
              <option>Vần</option>
              <option>Thanh điệu</option>
              <option>Từ vựng</option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label">Số từ luyện</label>
            <input
              type="number"
              class="form-control"
              placeholder="10"
            />
          </div>

          <div class="col-md-4">
            <label class="form-label">Thời lượng (phút)</label>
            <input
              type="number"
              class="form-control"
              placeholder="5"
            />
          </div>

          <div class="col-md-4">
            <label class="form-label">Cấp độ</label>
            <select class="form-select">
              <option>Dễ</option>
              <option>Trung bình</option>
              <option>Khó</option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label">Trạng thái</label>
            <select class="form-select">
              <option>Hoạt động</option>
              <option>Tạm dừng</option>
            </select>
          </div>
        </div>

        <div class="mt-4">
          <button class="btn btn-primary rounded me-2">
            Lưu
          </button>

          <button class="btn btn-outline-secondary rounded">
            Hủy
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PracticeManagement'
}
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}
</style>