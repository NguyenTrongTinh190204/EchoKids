<template>
  <div>
    <div class="container-fluid">

      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Phân quyền hệ thống</h5>
        <small class="text-muted">
          Quản lý quyền truy cập cho từng vai trò trong hệ thống EchoKids
        </small>
      </div>

      <div class="row">

        <!-- ROLE LIST -->
        <div class="col-md-4">
          <div class="card p-3 shadow-sm">
            <h6 class="mb-3">Vai trò</h6>

            <ul class="list-group">
              <li class="list-group-item active">👑 Quản trị viên</li>
              <li class="list-group-item">👩‍🏫 Giáo viên</li>
              <li class="list-group-item">👨‍👩‍👧 Phụ huynh</li>
              <li class="list-group-item">👶 Trẻ em</li>
            </ul>

            <button class="btn btn-primary mt-3">
              ➕ Thêm vai trò
            </button>
          </div>
        </div>

        <!-- PERMISSIONS -->
        <div class="col-md-8">
          <div class="card p-3 shadow-sm">
            <h6 class="mb-3">Phân quyền chức năng</h6>

            <table class="table table-bordered align-middle text-center">
              <thead class="table-light">
                <tr>
                  <th>Chức năng</th>
                  <th>Xem</th>
                  <th>Tạo</th>
                  <th>Sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Quản lý người dùng</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                </tr>

                <tr>
                  <td>Quản lý giáo viên</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Quản lý chủ đề</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Quản lý từ vựng</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Bài luyện phát âm</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Giám sát AI</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Theo dõi tiến độ</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Lịch sử luyện tập</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

              </tbody>
            </table>

            <div class="mt-3">
              <button class="btn btn-primary me-2">
                💾 Lưu thay đổi
              </button>

              <button class="btn btn-secondary">
                Hủy
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>