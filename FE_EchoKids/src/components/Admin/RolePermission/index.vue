<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Role & Permission</h5>
        <small class="text-muted">Quản lý phân quyền hệ thống</small>
      </div>

      <div class="row">
        <!-- LEFT: ROLE LIST -->
        <div class="col-md-4">
          <div class="card p-3">
            <h6 class="mb-3">Roles</h6>

            <ul class="list-group">
              <li class="list-group-item active">Admin</li>

              <li class="list-group-item">Teacher</li>

              <li class="list-group-item">User</li>
            </ul>

            <button class="btn btn-primary mt-3">+ Add Role</button>
          </div>
        </div>

        <!-- RIGHT: PERMISSION -->
        <div class="col-md-8">
          <div class="card p-3">
            <h6 class="mb-3">Permissions</h6>

            <table class="table table-bordered align-middle text-center">
              <thead class="table-light">
                <tr>
                  <th>Module</th>
                  <th>View</th>
                  <th>Create</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>User Management</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                </tr>

                <tr>
                  <td>Teacher Management</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Subject Management</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Vocabulary</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>Quiz</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>

                <tr>
                  <td>AI Monitor</td>
                  <td><input type="checkbox" checked /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                  <td><input type="checkbox" /></td>
                </tr>
              </tbody>
            </table>

            <div class="mt-3">
              <button class="btn btn-primary me-2">Save Changes</button>
              <button class="btn btn-secondary">Cancel</button>
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
<style></style>
