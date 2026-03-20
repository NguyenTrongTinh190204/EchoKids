<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">User Management</h5>
        <small class="text-muted"
          >Quản lý tài khoản người dùng trong hệ thống</small
        >
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-primary me-2">+ Add User</button>
            <button class="btn btn-success">Refresh</button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search user..."
            />
          </div>
        </div>
      </div>

      <!-- USER TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách người dùng</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>

              <td>
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    N
                  </div>
                  <div>
                    <div>Nguyen Van A</div>
                    <small class="text-muted">user01</small>
                  </div>
                </div>
              </td>

              <td>a@gmail.com</td>

              <td>
                <span class="badge bg-info">User</span>
              </td>

              <td>
                <span class="badge bg-success">Active</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Edit</button>
                <button class="btn btn-danger btn-sm me-1">Delete</button>
                <button class="btn btn-secondary btn-sm">Lock</button>
              </td>
            </tr>

            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    T
                  </div>
                  <div>
                    <div>Tran Thi B</div>
                    <small class="text-muted">user02</small>
                  </div>
                </div>
              </td>

              <td>b@gmail.com</td>

              <td>
                <span class="badge bg-warning text-dark">Teacher</span>
              </td>

              <td>
                <span class="badge bg-danger">Locked</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Edit</button>
                <button class="btn btn-danger btn-sm me-1">Delete</button>
                <button class="btn btn-success btn-sm">Unlock</button>
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
<style></style>
