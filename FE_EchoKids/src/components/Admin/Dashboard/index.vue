<template>
  <div class="container-fluid">
    <!-- HEADER -->
    <div class="card p-3 mb-4">
      <h5 class="mb-1">Dashboard</h5>
      <small class="text-muted">Quản lý tổng quan hệ thống</small>
    </div>

    <!-- STATS -->
    <div class="row g-3 mb-4">
      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>Total Users</h6>
          <h3>120</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>Active Users</h6>
          <h3>95</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>Total Lessons</h6>
          <h3>40</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-center p-3 shadow-sm">
          <h6>Total Practices</h6>
          <h3>300</h3>
        </div>
      </div>
    </div>

    <!-- QUICK ACTION -->
    <div class="card p-3 mb-4">
      <h6 class="mb-3">Quick Actions</h6>
      <button class="btn btn-primary me-2">Create Lesson</button>
      <button class="btn btn-success me-2 mt-3">Add User</button>
      <button class="btn btn-warning me-2 mt-3">View Reports</button>
    </div>

    <!-- RECENT ACTIVITY -->
    <div class="card p-3">
      <h6 class="mb-3">Recent Activities</h6>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Action</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyen Van A</td>
            <td>Completed Lesson</td>
            <td>20/03/2026</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Tran Thi B</td>
            <td>Practice Pronunciation</td>
            <td>20/03/2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
