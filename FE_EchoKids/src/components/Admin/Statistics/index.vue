<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">Statistics</h5>
        <small class="text-muted"
          >Thống kê tiến độ học tập và kết quả luyện phát âm</small
        >
      </div>

      <!-- FILTER -->
      <div class="card p-3 mb-4">
        <div class="row">
          <div class="col-md-3">
            <label class="form-label">From Date</label>
            <input type="date" class="form-control" />
          </div>

          <div class="col-md-3">
            <label class="form-label">To Date</label>
            <input type="date" class="form-control" />
          </div>

          <div class="col-md-3">
            <label class="form-label">Subject</label>
            <select class="form-control">
              <option>All</option>
              <option>Alphabet</option>
              <option>Words</option>
            </select>
          </div>

          <div class="col-md-3 d-flex align-items-end">
            <button class="btn btn-primary w-100">Filter</button>
          </div>
        </div>
      </div>

      <!-- STATS CARDS -->
      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Total Attempts</h6>
            <h3>1,200</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Average Score</h6>
            <h3>85%</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Completed Lessons</h6>
            <h3>320</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Active Users</h6>
            <h3>90</h3>
          </div>
        </div>
      </div>

      <!-- CHARTS -->
      <div class="row">
        <!-- PROGRESS CHART -->
        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Learning Progress</h6>
            <div
              class="bg-light d-flex justify-content-center align-items-center"
              style="height: 250px"
            >
              <span class="text-muted">[Chart Placeholder]</span>
            </div>
          </div>
        </div>

        <!-- ACCURACY CHART -->
        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Pronunciation Accuracy</h6>
            <div
              class="bg-light d-flex justify-content-center align-items-center"
              style="height: 250px"
            >
              <span class="text-muted">[Chart Placeholder]</span>
            </div>
          </div>
        </div>
      </div>

      <!-- TOP USERS TABLE -->
      <div class="card p-3">
        <h6 class="mb-3">Top Performing Users</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Attempts</th>
              <th>Avg Score</th>
              <th>Completed Lessons</th>
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
                  <div>Nguyen Van A</div>
                </div>
              </td>

              <td>120</td>
              <td><span class="badge bg-success">90%</span></td>
              <td>45</td>
            </tr>

            <tr>
              <td>2</td>

              <td>
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-warning text-dark d-flex justify-content-center align-items-center me-2"
                    style="width: 35px; height: 35px"
                  >
                    T
                  </div>
                  <div>Tran Thi B</div>
                </div>
              </td>

              <td>98</td>
              <td><span class="badge bg-info">85%</span></td>
              <td>38</td>
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
