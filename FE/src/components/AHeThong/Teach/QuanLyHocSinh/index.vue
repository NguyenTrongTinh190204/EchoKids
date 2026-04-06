<template>
  <div class="container-fluid p-4 bg-light">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h3 class="m-0 text-primary"><i class="fa-solid fa-user-graduate"></i> Quản lý Học viên</h3>
        <p class="text-muted mb-0">Danh sách các học viên do bạn phụ trách</p>
      </div>
      <div class="d-flex gap-2">
        <input type="text" class="form-control shadow-sm" placeholder="Tìm tên, email..." style="width: 250px;"
          v-model="searchQuery">
        <button class="btn btn-outline-primary shadow-sm" title="Kết quả sẽ tự động lọc khi bạn gõ">
          <i class="fa-solid fa-filter me-1"></i> Lọc kết quả
        </button>
      </div>
    </div>

    <div class="card shadow-sm border-0 mb-4">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0 table-bordered">

            <thead class="table-light">
              <tr>
                <th class="ps-4">Học viên</th>
                <th>Tiến độ học viên</th>
                <th>Lỗi phát âm phổ biến</th>
                <th>Lần cuối luyện tập</th>
                <th class="text-center">Thao tác</th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="filteredStudents.length === 0">
                <td colspan="5" class="text-center py-4 text-muted">
                  Không tìm thấy học viên nào phù hợp với "{{ searchQuery }}"
                </td>
              </tr>

              <tr v-for="student in filteredStudents" :key="student.id">
                <td class="ps-4">
                  <div class="d-flex align-items-center">
                    <img :src="student.avatar" alt="avatar" class="rounded-circle me-3" width="45" height="45">
                    <div>
                      <h6 class="mb-0 fw-bold">{{ student.name }}</h6>
                      <small class="text-muted">{{ student.email }}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="mb-1 d-flex justify-content-between" style="width: 150px;">
                    <small>Điểm TB:</small>
                    <strong :class="getScoreColor(student.score)">{{ student.score }}%</strong>
                  </div>
                  <small class="text-muted">Đã luyện: {{ student.sessions }} phiên</small>
                </td>
                <td class="text-center">
                  <span v-for="(err, index) in student.errors" :key="index" class="badge me-1" :class="err.class">
                    {{ err.text }}
                  </span>
                </td>
                <td class="text-center">
                  <span class="fw-medium" :class="student.lastActiveColor">{{ student.lastActiveLabel }}</span><br>
                  <small class="text-muted">{{ student.lastActiveTime }}</small>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-light text-primary border me-1" data-bs-toggle="modal"
                    data-bs-target="#chiTietModal" title="Xem chi tiết" @click="xemChiTiet(student)">
                    <i class="fa-solid fa-eye me-1"></i> Chi tiết
                  </button>
                  <button class="btn btn-sm btn-light text-success border" data-bs-toggle="modal"
                    data-bs-target="#goiYModal" title="Gợi ý" @click="goiYChoHocVien(student)">
                    <i class="fa-regular fa-lightbulb me-1"></i> Gợi ý
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0 shadow" v-if="selectedStudent">
          <div class="modal-header bg-light border-bottom-0 pb-3">
            <div class="d-flex align-items-center">
              <img :src="selectedStudent.avatar" alt="avatar" class="rounded-circle me-3 shadow-sm" width="60"
                height="60">
              <div>
                <h5 class="modal-title fw-bold text-primary mb-1">Thông tin Học viên: {{ selectedStudent.name }}</h5>
                <p class="text-muted mb-0 small">
                  <i class="fa-regular fa-envelope me-1"></i> {{ selectedStudent.email }} |
                  <i class="fa-solid fa-phone me-1"></i> {{ selectedStudent.phone }}
                </p>
              </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">

            <div class="row g-4 mb-4">
              <div class="col-md-4">
                <div class="p-3 bg-light rounded-3 text-center h-100 border">
                  <h6 class="text-muted mb-2">Điểm Trung Bình</h6>
                  <h3 class="fw-bold mb-0" :class="getScoreColor(selectedStudent.score)">{{ selectedStudent.score }}%
                  </h3>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 bg-light rounded-3 text-center h-100 border">
                  <h6 class="text-muted mb-2">Tổng số bài đã luyện</h6>
                  <h3 class="text-primary fw-bold mb-0">{{ selectedStudent.sessions }}</h3>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 bg-light rounded-3 text-center h-100 border">
                  <h6 class="text-muted mb-2">Thời gian tích lũy</h6>
                  <h3 class="text-dark fw-bold mb-0">{{ selectedStudent.totalTime }}</h3>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <h6 class="fw-bold border-bottom pb-2 mb-3"><i
                  class="fa-solid fa-triangle-exclamation text-warning me-2"></i>Các lỗi phát âm thường gặp</h6>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="(err, index) in selectedStudent.commonMistakes" :key="index"
                  class="badge bg-danger bg-opacity-10  border border-danger p-2 px-3">
                  {{ err }}
                </span>
                <span v-if="selectedStudent.commonMistakes.length === 0" class="text-muted">Chưa ghi nhận lỗi nghiêm
                  trọng.</span>
              </div>
            </div>

            <div>
              <h6 class="fw-bold border-bottom pb-2 mb-3"><i
                  class="fa-solid fa-clock-rotate-left text-secondary me-2"></i>Lịch sử luyện tập gần đây</h6>
              <div class="list-group list-group-flush border rounded-3">
                <div v-for="(history, index) in selectedStudent.history" :key="index"
                  class="list-group-item p-3 d-flex justify-content-between align-items-center"
                  :class="{ 'bg-light': index % 2 === 0 }">
                  <div>
                    <h6 class="mb-1 fw-medium">{{ history.title }}</h6>
                    <small class="text-muted">{{ history.time }}</small>
                  </div>
                  <span class="badge rounded-pill px-3 py-2"
                    :class="history.score >= 80 ? 'bg-success' : 'bg-warning text-dark'">
                    {{ history.score }} / 100đ
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer bg-light border-top-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal"
              data-bs-target="#goiYModal">Chuyển sang Gợi ý</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="goiYModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-bottom-0">
            <h5 class="modal-title fw-bold">
              <i class="fa-regular fa-lightbulb text-success me-2"></i>Gợi ý Bài học
              <span v-if="selectedStudent" class="text-primary fs-6 ms-2">cho {{ selectedStudent.name }}</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">

            <div class="alert alert-info border-0 bg-info bg-opacity-10 d-flex align-items-center p-3 mb-4">
              <i class="fa-solid fa-circle-info fs-4 text-info me-3"></i>
              <div class="text-warning mb-0">
                Gửi bài tập đề xuất để giúp học viên cải thiện các lỗi phát âm đang gặp phải.
              </div>
            </div>

            <form>
              <div class="mb-3">
                <label class="form-label fw-medium">Chọn bài học cần luyện thêm <span
                    class="text-danger">*</span></label>
                <select class="form-select">
                  <option selected disabled>-- Vui lòng chọn bài học --</option>
                  <optgroup label="Luyện âm cơ bản">
                    <option value="1">Luyện Âm S và X</option>
                    <option value="2">Phân biệt Âm L và N</option>
                    <option value="3">Kiểm tra Thanh điệu</option>
                  </optgroup>
                  <optgroup label="Chủ đề Động vật">
                    <option value="4">Động vật hoang dã</option>
                    <option value="5">Vật nuôi trong nhà</option>
                  </optgroup>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label fw-medium">Mức độ ưu tiên</label>
                <div class="d-flex gap-3 mt-1">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="priority" id="priHigh" checked>
                    <label class="form-check-label text-danger fw-medium" for="priHigh">Cao</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="priority" id="priNormal">
                    <label class="form-check-label text-success fw-medium" for="priNormal">Bình thường</label>
                  </div>
                </div>
              </div>

              <div class="mb-1">
                <label class="form-label fw-medium">Lời nhắn / Nhắc nhở (Tùy chọn)</label>
                <textarea class="form-control" rows="3"
                  placeholder="Ví dụ: Em chú ý uốn cong lưỡi khi phát âm chữ Tr nhé..."></textarea>
              </div>
            </form>

          </div>
          <div class="modal-footer bg-light border-top-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal"><i
                class="fa-regular fa-paper-plane me-1"></i> Gửi gợi ý</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "StudentManagement",
  data() {
    return {
      searchQuery: "", // Dùng để lọc học viên
      selectedStudent: null, // Học viên đang được xem chi tiết

      // Data giả lập danh sách học viên
      students: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          email: "nva.student@gmail.com",
          phone: "0987.654.321",
          avatar: "https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random",
          score: 85,
          sessions: 24,
          totalTime: "12h 30p",
          errors: [
            { text: "Lỗi thanh điệu", class: "bg-warning text-dark" }
          ],
          commonMistakes: ["Sai thanh ngã (~)", "Bật hơi yếu âm Tr"],
          lastActiveLabel: "Hôm nay",
          lastActiveTime: "10:30 AM",
          lastActiveColor: "text-success",
          history: [
            { title: "Phân biệt Âm L và N", time: "Hôm nay, 10:30 AM", score: 92 },
            { title: "Kiểm tra Thanh điệu (Hỏi, Ngã)", time: "Hôm qua, 15:00 PM", score: 65 },
            { title: "Giao tiếp: Chào hỏi cơ bản", time: "2 ngày trước", score: 88 }
          ]
        },
        {
          id: 2,
          name: "Trần Thị B",
          email: "tranthib@gmail.com",
          phone: "0912.345.678",
          avatar: "https://ui-avatars.com/api/?name=Tran+Thi+B&background=random",
          score: 52,
          sessions: 45,
          totalTime: "24h 15p",
          errors: [
            { text: "Lỗi âm đầu", class: "bg-danger" },
            { text: "Lỗi vần", class: "bg-danger" }
          ],
          commonMistakes: ["Lẫn lộn L / N", "Phát âm sai vần 'ang' / 'an'"],
          lastActiveLabel: "Hôm qua",
          lastActiveTime: "15:45 PM",
          lastActiveColor: "text-dark",
          history: [
            { title: "Luyện Âm S và X", time: "Hôm qua, 15:45 PM", score: 55 },
            { title: "Bài tập uốn lưỡi cơ bản", time: "3 ngày trước", score: 48 }
          ]
        },
        {
          id: 3,
          name: "Lê Văn C",
          email: "levanc99@gmail.com",
          phone: "0933.111.222",
          avatar: "https://ui-avatars.com/api/?name=Le+Van+C&background=random",
          score: 70,
          sessions: 12,
          totalTime: "6h 45p",
          errors: [
            { text: "Không rõ ràng", class: "bg-secondary" }
          ],
          commonMistakes: ["Nói quá nhanh, nuốt chữ", "Chưa ngắt nghỉ đúng chỗ"],
          lastActiveLabel: "5 ngày trước",
          lastActiveTime: "Cần nhắc nhở",
          lastActiveColor: "text-danger",
          history: [
            { title: "Đọc diễn cảm đoạn văn", time: "5 ngày trước", score: 70 },
            { title: "Giao tiếp hàng ngày", time: "1 tuần trước", score: 72 }
          ]
        }
      ]
    };
  },
  computed: {
    // Hàm này sẽ tự động lọc danh sách dựa trên ô input searchQuery
    filteredStudents() {
      if (!this.searchQuery) return this.students;

      const lowerCaseQuery = this.searchQuery.toLowerCase();
      return this.students.filter(student =>
        student.name.toLowerCase().includes(lowerCaseQuery) ||
        student.email.toLowerCase().includes(lowerCaseQuery)
      );
    }
  },
  methods: {
    // Hàm tô màu điểm số
    getScoreColor(score) {
      if (score >= 80) return "text-success";
      if (score >= 60) return "text-warning";
      return "text-danger";
    },
    // Gán dữ liệu học viên khi bấm "Chi tiết"
    xemChiTiet(student) {
      this.selectedStudent = student;
    },
    // Gán dữ liệu học viên khi bấm "Gợi ý" (để lấy tên đưa vào header Modal)
    goiYChoHocVien(student) {
      this.selectedStudent = student;
    }
  }
};
</script>

<style scoped>
.table th {
  font-weight: 600;
  color: #555;
  padding-top: 15px;
  padding-bottom: 15px;
}

.table td {
  vertical-align: middle;
  padding-top: 12px;
  padding-bottom: 12px;
}

.badge {
  font-weight: 500;
}
</style>