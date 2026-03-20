<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Quiz Management</h5>
        <small class="text-muted"
          >Quản lý bài luyện tập / câu hỏi phát âm</small
        >
      </div>

      <!-- STATS -->
      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Total Quiz</h6>
            <h3>25</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Total Questions</h6>
            <h3>120</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Published</h6>
            <h3>18</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Draft</h6>
            <h3>7</h3>
          </div>
        </div>
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-primary me-2">+ Create Quiz</button>
            <button class="btn btn-success">Refresh</button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search quiz..."
            />
          </div>
        </div>
      </div>

      <!-- QUIZ TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Danh sách bài luyện</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Quiz Title</th>
              <th>Subject</th>
              <th>Questions</th>
              <th>Duration</th>
              <th>Status</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>

              <td>
                <div>
                  <div class="fw-semibold">Alphabet Practice</div>
                  <small class="text-muted">Luyện phát âm bảng chữ cái</small>
                </div>
              </td>

              <td>
                <span class="badge bg-info">Alphabet</span>
              </td>

              <td>
                <span class="badge bg-primary">10</span>
              </td>

              <td>10 mins</td>

              <td>
                <span class="badge bg-success">Published</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Edit</button>
                <button class="btn btn-danger btn-sm me-1">Delete</button>
                <button class="btn btn-secondary btn-sm">Draft</button>
              </td>
            </tr>

            <tr>
              <td>2</td>

              <td>
                <div>
                  <div class="fw-semibold">Basic Words</div>
                  <small class="text-muted">Từ vựng cơ bản</small>
                </div>
              </td>

              <td>
                <span class="badge bg-info">Words</span>
              </td>

              <td>
                <span class="badge bg-primary">15</span>
              </td>

              <td>15 mins</td>

              <td>
                <span class="badge bg-warning text-dark">Draft</span>
              </td>

              <td class="text-center">
                <button class="btn btn-warning btn-sm me-1">Edit</button>
                <button class="btn btn-danger btn-sm me-1">Delete</button>
                <button class="btn btn-success btn-sm">Publish</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ADD / EDIT QUIZ FORM -->
      <div class="card p-3 mt-4">
        <h6 class="mb-3">Create / Edit Quiz</h6>

        <div class="row">
          <div class="col-md-6">
            <label class="form-label">Quiz Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter quiz title"
            />
          </div>

          <div class="col-md-6">
            <label class="form-label">Subject</label>
            <select class="form-control">
              <option>Alphabet</option>
              <option>Words</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Duration (minutes)</label>
            <input type="number" class="form-control" placeholder="10" />
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Total Questions</label>
            <input type="number" class="form-control" placeholder="10" />
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Status</label>
            <select class="form-control">
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>
        </div>

        <div class="mt-3">
          <button class="btn btn-primary me-2">Save</button>
          <button class="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
