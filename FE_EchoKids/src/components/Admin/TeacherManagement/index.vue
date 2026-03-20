<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Teacher Management</h5>
        <small class="text-muted"
          >Quản lý giáo viên / chuyên gia ngôn ngữ</small
        >
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-primary me-2">+ Add Teacher</button>
            <button class="btn btn-success">Refresh</button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search teacher..."
            />
          </div>
        </div>
      </div>

      <!-- TEACHER TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách giáo viên</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Teacher</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Students</th>
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
                    class="rounded-circle bg-warning text-dark d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    T
                  </div>
                  <div>
                    <div>Teacher A</div>
                    <small class="text-muted">teacher01</small>
                  </div>
                </div>
              </td>

              <td>teacherA@gmail.com</td>

              <td>
                <span class="badge bg-info">Phát âm</span>
              </td>

              <td>
                <span class="badge bg-primary">30</span>
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
                    class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    M
                  </div>
                  <div>
                    <div>Teacher B</div>
                    <small class="text-muted">teacher02</small>
                  </div>
                </div>
              </td>

              <td>teacherB@gmail.com</td>

              <td>
                <span class="badge bg-warning text-dark">Âm ngữ trị liệu</span>
              </td>

              <td>
                <span class="badge bg-primary">18</span>
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
