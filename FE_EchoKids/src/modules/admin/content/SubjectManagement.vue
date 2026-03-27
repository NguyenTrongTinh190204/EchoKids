<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Quản lý từ vựng</h5>
        <small class="text-muted">
          Quản lý từ tiếng Việt, hình ảnh và âm thanh phục vụ luyện phát âm
        </small>
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <button class="btn btn-primary me-2">
              ➕ Thêm từ
            </button>

            <button class="btn btn-success">
              🔄 Làm mới
            </button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="🔍 Tìm từ vựng..."
            />
          </div>

        </div>
      </div>

      <!-- TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách từ vựng</h6>

        <table class="table table-hover align-middle">

          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Từ vựng</th>
              <th>Hình ảnh</th>
              <th>Âm thanh</th>
              <th>Chủ đề</th>
              <th>Mức độ</th>
              <th>Trạng thái</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody>

            <!-- ITEM 1 -->
            <tr>
              <td>1</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar bg-primary text-white me-2">
                    M
                  </div>
                  <div>
                    <div class="fw-semibold">Mẹ</div>
                    <small class="text-muted">Âm: /me/</small>
                  </div>
                </div>
              </td>

              <td>
                <img src="https://via.placeholder.com/50" class="rounded" />
              </td>

              <td>
                <audio controls style="width: 120px">
                  <source src="" />
                </audio>
              </td>

              <td>
                <span class="badge bg-info">Gia đình</span>
              </td>

              <td>
                <span class="badge bg-success">Dễ</span>
              </td>

              <td>
                <span class="badge bg-success">Hoạt động</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">
                  ✏️ Sửa
                </button>
                <button class="btn btn-danger btn-sm">
                  🗑️ Xóa
                </button>
              </td>
            </tr>

            <!-- ITEM 2 -->
            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar bg-warning text-dark me-2">
                    B
                  </div>
                  <div>
                    <div class="fw-semibold">Bàn</div>
                    <small class="text-muted">Âm: /ban/</small>
                  </div>
                </div>
              </td>

              <td>
                <img src="https://via.placeholder.com/50" class="rounded" />
              </td>

              <td>
                <audio controls style="width: 120px"></audio>
              </td>

              <td>
                <span class="badge bg-info">Đồ vật</span>
              </td>

              <td>
                <span class="badge bg-warning text-dark">Trung bình</span>
              </td>

              <td>
                <span class="badge bg-danger">Ẩn</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">
                  ✏️ Sửa
                </button>
                <button class="btn btn-danger btn-sm">
                  🗑️ Xóa
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <!-- FORM -->
      <div class="card p-3 mt-4">
        <h6 class="mb-3">Thêm / chỉnh sửa từ vựng</h6>

        <div class="row">

          <div class="col-md-4">
            <label class="form-label">Từ vựng</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ví dụ: Mẹ"
            />
          </div>

          <div class="col-md-4">
            <label class="form-label">Phiên âm</label>
            <input
              type="text"
              class="form-control"
              placeholder="/me/"
            />
          </div>

          <div class="col-md-4">
            <label class="form-label">Chủ đề</label>
            <select class="form-control">
              <option>Gia đình</option>
              <option>Đồ vật</option>
              <option>Động vật</option>
              <option>Màu sắc</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Mức độ</label>
            <select class="form-control">
              <option>Dễ</option>
              <option>Trung bình</option>
              <option>Khó</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Ảnh minh họa</label>
            <input type="file" class="form-control" />
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Audio mẫu</label>
            <input type="file" class="form-control" />
          </div>

        </div>

        <div class="mt-3">
          <button class="btn btn-primary me-2">
            💾 Lưu
          </button>

          <button class="btn btn-secondary">
            Hủy
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>