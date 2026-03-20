<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Profile</h5>
        <small class="text-muted">Quản lý thông tin tài khoản</small>
      </div>

      <div class="row">
        <!-- LEFT: AVATAR -->
        <div class="col-md-4">
          <div class="card p-3 text-center">
            <img
              src="https://via.placeholder.com/120"
              class="rounded-circle mb-3"
              width="120"
              height="120"
            />

            <h6>Admin User</h6>
            <small class="text-muted">admin@gmail.com</small>

            <button class="btn btn-outline-primary mt-3">Change Avatar</button>
          </div>
        </div>

        <!-- RIGHT: INFO -->
        <div class="col-md-8">
          <!-- PERSONAL INFO -->
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Personal Information</h6>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" value="Admin User" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  value="admin@gmail.com"
                />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" value="0123456789" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label">Role</label>
                <input
                  type="text"
                  class="form-control"
                  value="Admin"
                  disabled
                />
              </div>
            </div>

            <button class="btn btn-primary">Update Profile</button>
          </div>

          <!-- CHANGE PASSWORD -->
          <div class="card p-3">
            <h6 class="mb-3">Change Password</h6>

            <div class="mb-3">
              <label class="form-label">Current Password</label>
              <input type="password" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">New Password</label>
              <input type="password" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Confirm Password</label>
              <input type="password" class="form-control" />
            </div>

            <button class="btn btn-warning">Change Password</button>
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
