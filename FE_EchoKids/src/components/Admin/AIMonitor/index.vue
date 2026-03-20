<template>
  <div>
    <div class="container-fluid">
      <!-- HEADER -->
      <div class="card p-3 mb-4">
        <h5 class="mb-1">AI Monitor</h5>
        <small class="text-muted"
          >Theo dõi hoạt động AI (Speech-to-Text & Pronunciation Scoring)</small
        >
      </div>

      <!-- AI STATS -->
      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Total Requests</h6>
            <h3>1,250</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Success Rate</h6>
            <h3>92%</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Avg Response Time</h6>
            <h3>1.2s</h3>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card p-3 text-center shadow-sm">
            <h6>Failed Requests</h6>
            <h3>100</h3>
          </div>
        </div>
      </div>

      <!-- ACTION BAR -->
      <div class="card p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-success me-2">Refresh</button>
            <button class="btn btn-warning">Test AI API</button>
          </div>

          <div class="w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search logs..."
            />
          </div>
        </div>
      </div>

      <!-- AI REQUEST LOG -->
      <div class="card p-3 mb-4">
        <h6 class="mb-3">AI Request Logs</h6>

        <table class="table table-hover align-middle">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Word</th>
              <th>Score</th>
              <th>Accuracy</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>

              <td>Nguyen Van A</td>

              <td>Apple</td>

              <td>
                <span class="badge bg-success">90</span>
              </td>

              <td>
                <span class="badge bg-info">Excellent</span>
              </td>

              <td>
                <span class="badge bg-success">Success</span>
              </td>

              <td>1.1s</td>
            </tr>

            <tr>
              <td>2</td>

              <td>Tran Thi B</td>

              <td>Ball</td>

              <td>
                <span class="badge bg-warning text-dark">70</span>
              </td>

              <td>
                <span class="badge bg-warning text-dark">Good</span>
              </td>

              <td>
                <span class="badge bg-danger">Failed</span>
              </td>

              <td>2.3s</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ERROR ANALYSIS -->
      <div class="row">
        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">Common Pronunciation Errors</h6>
            <ul class="list-group">
              <li class="list-group-item">/æ/ → phát âm sai thành /e/</li>
              <li class="list-group-item">/θ/ → phát âm thành /t/</li>
              <li class="list-group-item">Thiếu âm cuối (ending sound)</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card p-3 mb-4">
            <h6 class="mb-3">AI Feedback Suggestions</h6>
            <ul class="list-group">
              <li class="list-group-item">Luyện âm /æ/ với từ "apple"</li>
              <li class="list-group-item">Nghe lại audio mẫu trước khi nói</li>
              <li class="list-group-item">Tập trung vào âm cuối</li>
            </ul>
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
