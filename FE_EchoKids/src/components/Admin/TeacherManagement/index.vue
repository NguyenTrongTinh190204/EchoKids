<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Quản lý giáo viên / chuyên gia ngôn ngữ</h5>
        <small class="text-muted">
          Quản lý chuyên gia âm ngữ trị liệu và theo dõi học viên
        </small>
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <button class="btn btn-primary me-2">
              + Thêm giáo viên
            </button>

            <button class="btn btn-success">
              Làm mới
            </button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm kiếm giáo viên..."
            />
          </div>

        </div>
      </div>

      <!-- TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách giáo viên</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Giáo viên</th>
              <th>Email</th>
              <th>Chuyên môn</th>
              <th>Học viên</th>
              <th>Hiệu quả</th>
              <th>Trạng thái</th>
              <th class="text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>

            <!-- TEACHER 1 -->
            <tr>
              <td>1</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar-circle bg-warning text-dark me-2">L</div>
                  <div>
                    <div>Nguyễn Thị Lan</div>
                    <small class="text-muted">Chuyên gia phát âm</small>
                  </div>
                </div>
              </td>

              <td>lan.nguyen@gmail.com</td>

              <td>
                <span class="badge bg-info">Âm đầu</span>
                <span class="badge bg-success ms-1">Thanh điệu</span>
              </td>

              <td>
                <span class="badge bg-primary">30</span>
              </td>

              <td>
                <span class="badge bg-success">85%</span>
              </td>

              <td>
                <span class="badge bg-success">Hoạt động</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm me-1">Xóa</button>
                <button class="btn btn-secondary btn-sm">Khóa</button>
              </td>
            </tr>

            <!-- TEACHER 2 -->
            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div class="avatar-circle bg-secondary text-white me-2">M</div>
                  <div>
                    <div>Trần Minh Hòa</div>
                    <small class="text-muted">Âm ngữ trị liệu</small>
                  </div>
                </div>
              </td>

              <td>hoa.tran@gmail.com</td>

              <td>
                <span class="badge bg-warning text-dark">Vần</span>
                <span class="badge bg-danger ms-1">Phân tích lỗi</span>
              </td>

              <td>
                <span class="badge bg-primary">18</span>
              </td>

              <td>
                <span class="badge bg-warning text-dark">70%</span>
              </td>

              <td>
                <span class="badge bg-danger">Đã khóa</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Sửa</button>
                <button class="btn btn-danger btn-sm me-1">Xóa</button>
                <button class="btn btn-success btn-sm">Mở khóa</button>
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
.avatar-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>