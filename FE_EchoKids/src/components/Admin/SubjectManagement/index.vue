<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Subject Management</h5>
        <small class="text-muted"
          >Quản lý chủ đề / bài học trong hệ thống</small
        >
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-primary me-2">+ Add Subject</button>
            <button class="btn btn-success">Refresh</button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search subject..."
            />
          </div>
        </div>
      </div>

      <!-- SUBJECT TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách chủ đề</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>Description</th>
              <th>Level</th>
              <th>Lessons</th>
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
                    A
                  </div>
                  <div>
                    <div>Alphabet</div>
                    <small class="text-muted">Basic pronunciation</small>
                  </div>
                </div>
              </td>

              <td>Học bảng chữ cái cơ bản</td>

              <td>
                <span class="badge bg-success">Easy</span>
              </td>

              <td>
                <span class="badge bg-info">12</span>
              </td>

              <td>
                <span class="badge bg-success">Active</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>

            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-warning text-dark d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    W
                  </div>
                  <div>
                    <div>Words</div>
                    <small class="text-muted">Basic vocabulary</small>
                  </div>
                </div>
              </td>

              <td>Học từ vựng cơ bản</td>

              <td>
                <span class="badge bg-warning text-dark">Medium</span>
              </td>

              <td>
                <span class="badge bg-info">20</span>
              </td>

              <td>
                <span class="badge bg-danger">Inactive</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
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
