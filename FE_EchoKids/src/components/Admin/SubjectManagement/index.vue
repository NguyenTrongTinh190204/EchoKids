<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Quản lý chủ đề phát âm</h5>
        <small class="text-muted">
          Quản lý các nhóm âm: âm đầu, vần, thanh điệu và từ vựng tiếng Việt
        </small>
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <button class="btn btn-primary me-2">
              + Thêm chủ đề
            </button>

            <button class="btn btn-success">
              Làm mới
            </button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm kiếm chủ đề..."
            />
          </div>

        </div>
      </div>

      <!-- TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách chủ đề</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Chủ đề</th>
              <th>Mô tả</th>
              <th>Cấp độ</th>
              <th>Số bài</th>
              <th>Trạng thái</th>
              <th class="text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>

            <!-- ÂM ĐẦU -->
            <tr>
              <td>1</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="icon-circle bg-primary me-2">B</div>
                  <div>
                    <div>Âm đầu</div>
                    <small class="text-muted">b, m, n, t...</small>
                  </div>
                </div>
              </td>

              <td>Luyện phát âm các phụ âm đầu</td>

              <td>
                <span class="badge bg-success">Dễ</span>
              </td>

              <td>
                <span class="badge bg-info">15</span>
              </td>

              <td>
                <span class="badge bg-success">Hoạt động</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>

            <!-- VẦN -->
            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="icon-circle bg-warning text-dark me-2">AN</div>
                  <div>
                    <div>Vần</div>
                    <small class="text-muted">an, ang, on...</small>
                  </div>
                </div>
              </td>

              <td>Luyện phát âm phần vần</td>

              <td>
                <span class="badge bg-warning text-dark">Trung bình</span>
              </td>

              <td>
                <span class="badge bg-info">20</span>
              </td>

              <td>
                <span class="badge bg-success">Hoạt động</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>

            <!-- THANH ĐIỆU -->
            <tr>
              <td>3</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="icon-circle bg-danger me-2">´</div>
                  <div>
                    <div>Thanh điệu</div>
                    <small class="text-muted">sắc, huyền, hỏi...</small>
                  </div>
                </div>
              </td>

              <td>Luyện phát âm thanh điệu tiếng Việt</td>

              <td>
                <span class="badge bg-danger">Khó</span>
              </td>

              <td>
                <span class="badge bg-info">10</span>
              </td>

              <td>
                <span class="badge bg-success">Hoạt động</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </td>
            </tr>

            <!-- TỪ VỰNG -->
            <tr>
              <td>4</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="icon-circle bg-info me-2">🐱</div>
                  <div>
                    <div>Từ vựng</div>
                    <small class="text-muted">con vật, đồ vật...</small>
                  </div>
                </div>
              </td>

              <td>Luyện phát âm từ hoàn chỉnh</td>

              <td>
                <span class="badge bg-warning text-dark">Trung bình</span>
              </td>

              <td>
                <span class="badge bg-info">25</span>
              </td>

              <td>
                <span class="badge bg-danger">Tạm dừng</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm">Xóa</button>
              </td>
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
.icon-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
</style>