<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Vocabulary Management</h5>
        <small class="text-muted"
          >Quản lý từ vựng, hình ảnh và âm thanh phát âm</small
        >
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-primary me-2">+ Add Word</button>
            <button class="btn btn-success">Refresh</button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search word..."
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
              <th>Word</th>
              <th>Image</th>
              <th>Audio</th>
              <th>Subject</th>
              <th>Level</th>
              <th>Status</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>

              <!-- WORD -->
              <td>
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    A
                  </div>
                  <div>
                    <div>Apple</div>
                    <small class="text-muted">/ˈæp.əl/</small>
                  </div>
                </div>
              </td>

              <!-- IMAGE -->
              <td>
                <img src="https://via.placeholder.com/50" class="rounded" />
              </td>

              <!-- AUDIO -->
              <td>
                <audio controls style="width: 120px">
                  <source src="" />
                </audio>
              </td>

              <!-- SUBJECT -->
              <td>
                <span class="badge bg-info">Alphabet</span>
              </td>

              <!-- LEVEL -->
              <td>
                <span class="badge bg-success">Easy</span>
              </td>

              <!-- STATUS -->
              <td>
                <span class="badge bg-success">Active</span>
              </td>

              <!-- ACTION -->
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
                    B
                  </div>
                  <div>
                    <div>Ball</div>
                    <small class="text-muted">/bɔːl/</small>
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
                <span class="badge bg-info">Words</span>
              </td>

              <td>
                <span class="badge bg-warning text-dark">Medium</span>
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

      <!-- ADD WORD FORM (UI DEMO) -->
      <div class="card p-3 mt-4">
        <h6 class="mb-3">Add / Edit Vocabulary</h6>

        <div class="row">
          <div class="col-md-4">
            <label class="form-label">Word</label>
            <input type="text" class="form-control" placeholder="Enter word" />
          </div>

          <div class="col-md-4">
            <label class="form-label">Phonetic</label>
            <input type="text" class="form-control" placeholder="/ˈæp.əl/" />
          </div>

          <div class="col-md-4">
            <label class="form-label">Subject</label>
            <select class="form-control">
              <option>Alphabet</option>
              <option>Words</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Level</label>
            <select class="form-control">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Upload Image</label>
            <input type="file" class="form-control" />
          </div>

          <div class="col-md-4 mt-3">
            <label class="form-label">Upload Audio</label>
            <input type="file" class="form-control" />
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
