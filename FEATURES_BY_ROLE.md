# 👥 EchoKids - Danh sách Tính năng Theo Vai trò

## 📋 Mục lục
- [Khách vãng lai (Guest)](#-khách-vãng-lai-guest)
- [Người dùng (User)](#-người-dùng-user)
- [Giáo viên (Teacher)](#-giáo-viên-teacher)
- [Admin (Quản trị viên)](#-admin-quản-trị-viên)
- [AI System](#-ai-system)

---

## 👤 Khách vãng lai (Guest)

### 📌 Mô tả
Người truy cập chưa đăng nhập, có quyền hạn nhất trong hệ thống.

### ✅ Chức năng Cho phép

#### 1. Xem Trang chủ
- [x] Hiển thị giới thiệu về EchoKids
- [x] Hiển thị các tính năng nổi bật
- [x] Hiển thị lời chứng thực từ người dùng
- [x] Hiển thị call-to-action (CTA) buttons

**Routes**:
```
GET / - Trang chủ
```

**Components**:
```
- HeroSection
- FeaturesSection
- TestimonialsSection
- CTASection
```

---

#### 2. Xem Giới thiệu Hệ thống
- [x] Tổng quan về EchoKids
- [x] Lợi ích của việc học phát âm
- [x] Công nghệ AI được sử dụng
- [x] Những ai nên sử dụng
- [x] FAQ cơ bản

**Routes**:
```
GET /about - Giới thiệu
GET /features - Tính năng
GET /how-it-works - Cách hoạt động
GET /faq - Câu hỏi thường gặp
```

---

#### 3. Xem Hướng dẫn Sử dụng
- [x] Video hướng dẫn từng bước
- [x] Ảnh chụp màn hình
- [x] Hướng dẫn cho mỗi vai trò (User, Teacher, Admin)
- [x] Thông tin xử lý sự cố
- [x] Liên hệ hỗ trợ

**Routes**:
```
GET /guide - Hướng dẫn chung
GET /guide/user - Hướng dẫn người dùng
GET /guide/teacher - Hướng dẫn giáo viên
GET /guide/admin - Hướng dẫn admin
GET /support - Hỗ trợ
```

---

#### 4. Đăng ký Tài khoản
- [x] Form đăng ký (Họ tên, Email, Password)
- [x] Chọn vai trò (User / Teacher)
- [x] Xác thực email
- [x] Điều khoản sử dụng
- [x] Chính sách bảo mật

**Routes**:
```
GET /register - Form đăng ký
POST /api/auth/register - Gửi đăng ký
```

**Form Fields**:
```
- fullName (required)
- email (required, unique)
- password (required, min 8 chars)
- password_confirmation (required)
- role (required: user | teacher)
- terms_accepted (required: true)
```

---

#### 5. Đăng nhập
- [x] Form đăng nhập (Email + Password)
- [x] "Nhớ tôi" checkbox
- [x] Quên mật khẩu link
- [x] Chuyển hướng sau đăng nhập
- [x] Thông báo lỗi rõ ràng

**Routes**:
```
GET /login - Form đăng nhập
POST /api/auth/login - Xác thực
```

**API Request**:
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**API Response**:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com",
      "role": "user"
    },
    "token": "Bearer eyJ0eXAiOiJKV1Q..."
  }
}
```

---

#### 6. Quên Mật khẩu
- [x] Nhập email đã đăng ký
- [x] Gửi link đặt lại mật khẩu
- [x] Tạo mật khẩu mới
- [x] Xác thực qua email

**Routes**:
```
GET /forgot-password
POST /api/auth/forgot-password
PUT /api/auth/reset-password
```

---

### ❌ Chức năng Bị chặn
- ❌ Luyện tập (cần đăng nhập)
- ❌ Xem bài học (cần đăng nhập)
- ❌ Xem dashboard cá nhân (cần đăng nhập)
- ❌ Tạo bài học (cần là Teacher)
- ❌ Quản lý tài khoản (cần đăng nhập)

---

## 👨‍👧 Người dùng (User)

### 📌 Mô tả
Trẻ em hoặc phụ huynh đã đăng nhập, có thể luyện tập phát âm.

### ✅ Chức năng Cho phép

#### 1️⃣ Học Tập

##### A. Chọn Chủ đề Bài học
- [x] Danh sách tất cả chủ đề
- [x] Hiển thị số bài học/chủ đề
- [x] Lọc theo độ khó (Dễ/Trung bình/Khó)
- [x] Tìm kiếm bài học
- [x] Sắp xếp (Mới nhất/Phổ biến nhất)

**Routes**:
```
GET /lessons - Danh sách bài học
GET /lessons?difficulty=easy - Lọc theo độ khó
GET /lessons?search=animals - Tìm kiếm
```

**API Endpoint**:
```
GET /api/lessons?page=1&limit=10&difficulty=easy&search=animals
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Animals",
      "description": "Learn animal vocabulary",
      "difficulty": "easy",
      "topic": "animals",
      "vocabularies_count": 10,
      "teacher_name": "John Doe"
    }
  ],
  "pagination": {
    "total": 50,
    "current_page": 1,
    "last_page": 5
  }
}
```

---

##### B. Xem Chi tiết Bài học
- [x] Tiêu đề và mô tả bài học
- [x] Độ khó và chủ đề
- [x] Danh sách từ vựng
- [x] Tên giáo viên tạo
- [x] Số lần luyện tập của bạn
- [x] Điểm trung bình của bạn
- [x] Nút "Bắt đầu luyện tập"

**Routes**:
```
GET /lesson/:id - Chi tiết bài
```

**API Endpoint**:
```
GET /api/lessons/:id
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Animals",
    "description": "Learn animal vocabulary",
    "difficulty": "easy",
    "topic": "animals",
    "teacher": {
      "id": 1,
      "name": "John Doe"
    },
    "vocabularies": [
      {
        "id": 1,
        "word": "dog",
        "image_url": "...",
        "pronunciation_audio_url": "...",
        "meaning": "A domestic animal"
      }
    ],
    "user_progress": {
      "completed": false,
      "total_practices": 5,
      "average_score": 82.5
    }
  }
}
```

---

##### C. Học Từ vựng Qua Hình ảnh
- [x] Hiển thị hình ảnh minh họa
- [x] Hiển thị từ vựng
- [x] Hiển thị nghĩa
- [x] Điều hướng qua lại giữa các từ
- [x] Zoom hình ảnh
- [x] Fullscreen mode

**Components**:
```
- VocabularyCard
  ├── ImageDisplay (zoomable)
  ├── WordDisplay
  ├── MeaningDisplay
  └── NavigationButtons
```

---

##### D. Nghe Phát âm Mẫu
- [x] Nút phát âm mẫu
- [x] Hiển thị progress bar âm thanh
- [x] Hiển thị thời gian âm thanh
- [x] Nút tắt tiếng
- [x] Điều chỉnh âm lượng
- [x] Phát lại âm thanh

**Components**:
```
- AudioPlayer
  ├── PlayButton
  ├── ProgressBar
  ├── VolumeControl
  ├── TimeDisplay
  └── ReplayButton
```

---

##### E. Ghi Âm Giọng Nói Thực hành
- [x] Nút bắt đầu ghi âm
- [x] Hiển thị thời gian ghi
- [x] Hiển thị level âm thanh (meter)
- [x] Nút dừng ghi âm
- [x] Preview âm thanh đã ghi
- [x] Nút ghi lại
- [x] Nút gửi bài

**Components**:
```
- AudioRecorder
  ├── RecordButton (start/stop)
  ├── TimerDisplay
  ├── AudioLevelMeter
  ├── PlaybackPreview
  ├── RerecordButton
  └── SubmitButton
```

**Quy trình**:
```
1. Click "Ghi âm"
2. Hệ thống yêu cầu quyền microphone
3. User phát âm từ
4. Click "Dừng" khi xong
5. Preview âm thanh
6. Click "Gửi" để submit
```

---

#### 2️⃣ AI Hỗ Trợ

##### A. Nhận Kết quả Chấm điểm từ AI
- [x] Điểm số (0-100 điểm)
- [x] Xếp hạng (Excellent/Good/Fair/Needs Improvement)
- [x] Biểu đồ so sánh
- [x] Chi tiết điểm từng khía cạnh:
  - Độ chính xác phát âm
  - Nhấn điểm
  - Tốc độ nói
  - Intonation

**Response từ AI**:
```json
{
  "success": true,
  "data": {
    "practice_id": 1,
    "score": 85,
    "grade": "Good",
    "breakdown": {
      "pronunciation_accuracy": 85,
      "stress": 80,
      "intonation": 90,
      "speed": 85
    },
    "timestamp": "2024-01-20T10:30:00Z"
  }
}
```

---

##### B. Nhận Phản hồi Luyện Phát âm
- [x] Phản hồi chi tiết về lỗi phát âm
- [x] Lỗi phát âm cụ thể:
  - Phát âm nguyên âm sai (vowel errors)
  - Phát âm phụ âm sai (consonant errors)
  - Nhấn điểm sai (stress errors)
  - Intonation sai
- [x] Lời khuyên cải thiện cụ thể
- [x] Link để nghe phát âm mẫu lại
- [x] Gợi ý luyện tập thêm

**Feedback Example**:
```
Score: 85/100 - Good!

Errors found:
- Vowel error in word "dog": You pronounced as [dɔg] but should be [dɑ:g]
- Stress error in word "about": Stress should be on second syllable

Suggestions:
1. Practice the vowel sound [ɑ:] by listening to the example
2. Try emphasizing the second syllable more
3. Slow down your speech slightly

Next steps:
- Practice this lesson 2 more times
- Then move to intermediate level
```

---

#### 3️⃣ Theo Dõi Tiến Độ

##### A. Xem Dashboard Tiến độ Học tập
- [x] Thống kê tổng quan:
  - Tổng bài học đã luyện
  - Tổng luyện tập
  - Điểm trung bình
  - Streaks (ngày liên tục luyện)
- [x] Biểu đồ tiến độ (chart):
  - Biểu đồ điểm theo thời gian
  - Biểu đồ số lần luyện
- [x] Tiến độ theo bài học
- [x] Những bài học cần cải thiện

**Routes**:
```
GET /progress - Dashboard tiến độ
```

**API Endpoint**:
```
GET /api/progress
```

**Response**:
```json
{
  "success": true,
  "data": {
    "total_lessons": 50,
    "completed_lessons": 15,
    "total_practices": 120,
    "average_score": 82.5,
    "current_streak": 7,
    "longest_streak": 15,
    "lessons": [
      {
        "id": 1,
        "title": "Animals",
        "completed": true,
        "total_practices": 10,
        "average_score": 85,
        "last_practice": "2024-01-20T10:30:00Z"
      }
    ],
    "chart_data": {
      "dates": ["2024-01-14", "2024-01-15", ...],
      "scores": [80, 82, 85, ...],
      "practice_counts": [2, 3, 5, ...]
    }
  }
}
```

---

##### B. Xem Lịch Sử Luyện Tập
- [x] Danh sách tất cả bài luyện tập
- [x] Hiển thị:
  - Ngày/giờ luyện tập
  - Bài học
  - Điểm số
  - Trạng thái (Passed/Needs work)
- [x] Lọc theo bài học
- [x] Lọc theo ngày
- [x] Sắp xếp (Mới nhất/Cũ nhất/Điểm cao nhất)
- [x] Xem chi tiết mỗi bài luyện

**Routes**:
```
GET /history - Lịch sử luyện tập
```

**API Endpoint**:
```
GET /api/users/me/practices?limit=20&sort=newest
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 123,
      "lesson": {
        "id": 1,
        "title": "Animals"
      },
      "score": 85,
      "practice_date": "2024-01-20T10:30:00Z",
      "feedback": "Good pronunciation overall..."
    }
  ],
  "pagination": { ... }
}
```

---

#### 4️⃣ Quản Lý Cá Nhân

##### A. Cập Nhật Thông Tin Tài khoản
- [x] Thay đổi họ tên
- [x] Thay đổi ảnh đại diện
- [x] Cập nhật tiểu sử cá nhân
- [x] Thay đổi mật khẩu
- [x] Xác thực lại email
- [x] Cài đặt thông báo
- [x] Cài đặt quyền riêng tư

**Routes**:
```
GET /profile - Trang hồ sơ
PUT /api/users/me - Cập nhật thông tin
POST /api/users/me/password - Thay đổi mật khẩu
POST /api/users/me/avatar - Upload ảnh
```

---

##### B. Đăng Xuất
- [x] Nút đăng xuất
- [x] Xóa token localStorage
- [x] Chuyển hướng tới trang login
- [x] Xóa session

**Routes**:
```
POST /api/auth/logout
```

---

### ❌ Chức năng Bị chặn
- ❌ Tạo bài học (cần là Teacher)
- ❌ Quản lý bài học (cần là Teacher)
- ❌ Quản lý người dùng (cần là Admin)
- ❌ Xem thống kê hệ thống (cần là Admin/Teacher)
- ❌ Xem thông tin giáo viên khác (privacy)

---

## 👨‍🏫 Giáo viên (Teacher)

### 📌 Mô tả
Giáo viên hoặc chuyên gia ngôn ngữ, có thể tạo nội dung và quản lý học viên.

### ✅ Chức năng Cho phép

#### 1️⃣ Quản Lý Nội Dung Học Tập

##### A. Tạo Chủ đề Bài học
- [x] Form tạo bài học
- [x] Nhập tiêu đề bài
- [x] Nhập mô tả chi tiết
- [x] Chọn chủ đề (Topics dropdown)
- [x] Chọn độ khó (Easy/Medium/Hard)
- [x] Xác định thứ tự bài học
- [x] Lưu bản nháp
- [x] Công khai bài học

**Routes**:
```
GET /teacher/lessons - Danh sách bài
GET /teacher/lessons/create - Form tạo
POST /api/lessons - Tạo bài
```

**API Request**:
```json
{
  "title": "Animals in English",
  "description": "Learn common animal names and their pronunciations",
  "topic": "animals",
  "difficulty": "easy",
  "order": 1
}
```

---

##### B. Tạo Bài Luyện Phát Âm
- [x] Liên kết với bài học
- [x] Chọn từ vựng để luyện
- [x] Thiết lập thứ tự luyện
- [x] Thêm hướng dẫn luyện
- [x] Lưu cấu hình luyện

**Components**:
```
- LessonBuilder
  ├── VocabularySelector
  ├── OrderManager
  ├── GuidelineInput
  └── SaveButton
```

---

##### C. Thêm Từ Vựng
- [x] Form thêm từ vựng
- [x] Nhập từ (English)
- [x] Nhập nghĩa (Vietnamese)
- [x] Nhập phát âm (IPA)
- [x] Upload hình ảnh minh họa
- [x] Upload/Record phát âm mẫu
- [x] Xác định thứ tự từ
- [x] Batch import từ Excel/CSV

**Routes**:
```
POST /api/vocabularies - Thêm từ
POST /api/vocabularies/bulk-import - Import từ CSV
```

**API Request**:
```json
{
  "lesson_id": 1,
  "word": "dog",
  "meaning": "An animal with four legs",
  "phonetic": "dɔg",
  "order": 1
}
```

---

##### D. Thêm Hình Ảnh Minh Họa
- [x] Upload hình ảnh
- [x] Crop/resize hình ảnh
- [x] Liên kết với từ vựng
- [x] Đặt tên file
- [x] CDN/Cloud storage
- [x] Xóa hình ảnh

**Components**:
```
- ImageUploader
  ├── DragDrop
  ├── FileSelector
  ├── ImageEditor
  │   ├── Crop Tool
  │   ├── Resize Tool
  │   └── Preview
  └── UploadButton
```

---

##### E. Thêm Âm Thanh Mẫu
- [x] Upload file âm thanh
- [x] Record trực tiếp
- [x] Liên kết với từ vựng
- [x] Preview âm thanh
- [x] Trim/Edit âm thanh
- [x] Xóa âm thanh

**Components**:
```
- AudioUploader
  ├── FileUpload
  ├── AudioRecorder
  ├── AudioEditor
  │   ├── Trim Tool
  │   ├── VolumeControl
  │   └── Preview
  └── UploadButton
```

---

#### 2️⃣ Quản Lý Bài Tập

##### A. Tạo Bài Luyện Phát Âm
- [x] Chọn bài học
- [x] Chọn từ vựng cần luyện
- [x] Đặt số lần luyện tối thiểu
- [x] Thiết lập deadline (nếu có)
- [x] Thêm hướng dẫn cụ thể
- [x] Lưu cấu hình

---

##### B. Cập Nhật Bài Học
- [x] Sửa tiêu đề, mô tả
- [x] Cập nhật độ khó
- [x] Thêm/xóa từ vựng
- [x] Cập nhật hình ảnh
- [x] Cập nhật âm thanh
- [x] Lịch sử thay đổi (versioning)

**Routes**:
```
GET /teacher/lessons/:id/edit - Form sửa
PUT /api/lessons/:id - Cập nhật
```

---

##### C. Phân Cấp Bài Học
- [x] Đặt độ khó (Easy/Medium/Hard)
- [x] Gợi ý bài học tiếp theo
- [x] Thiết lập yêu cầu điểm tối thiểu
- [x] Thiết lập số lần luyện tối thiểu

**Components**:
```
- DifficultyLevel
  ├── EasyCheckbox
  ├── MediumCheckbox
  ├── HardCheckbox
  └── Description
```

---

#### 3️⃣ Theo Dõi Học Viên

##### A. Xem Tiến Độ Học Tập Của Trẻ
- [x] Danh sách học viên
- [x] Xem chi tiết mỗi học viên
- [x] Tiến độ bài học
- [x] Luyện tập thường xuyên
- [x] Xu hướng điểm số

**Routes**:
```
GET /teacher/students - Danh sách
GET /teacher/students/:id - Chi tiết
GET /teacher/students/:id/progress - Tiến độ
```

**API Endpoint**:
```
GET /api/teachers/me/students/:id/progress
```

**Response**:
```json
{
  "success": true,
  "data": {
    "student": {
      "id": 5,
      "name": "Lan Nhi",
      "email": "lan@example.com"
    },
    "progress": {
      "total_practices": 45,
      "average_score": 78.5,
      "lessons": [
        {
          "id": 1,
          "title": "Animals",
          "practices": 10,
          "average_score": 82
        }
      ]
    }
  }
}
```

---

##### B. Xem Lỗi Phát Âm Phổ Biến
- [x] Biểu đồ lỗi thường gặp
- [x] Phân tích từng loại lỗi
- [x] Từ có lỗi nhất
- [x] Xu hướng theo thời gian

---

##### C. Đưa Gợi ý Luyện Tập Thêm
- [x] Gửi message cho học viên
- [x] Gợi ý bài học tiếp theo
- [x] Gợi ý từ cần luyện lại
- [x] Gợi ý tài liệu bổ sung
- [x] Thông báo qua email

**Routes**:
```
POST /api/teachers/me/students/:id/suggestions
```

---

##### D. Tạo Nhóm/Lớp Học (Optional)
- [x] Tạo lớp học
- [x] Thêm học viên vào lớp
- [x] Gán bài tập cho lớp
- [x] Xem tiến độ lớp

---

### ❌ Chức năng Bị chặn
- ❌ Sửa bài học của giáo viên khác
- ❌ Quản lý người dùng toàn hệ thống (cần Admin)
- ❌ Xem tiến độ học viên không phải của mình
- ❌ Thay đổi settings hệ thống (cần Admin)

---

## 🔐 Admin (Quản Trị Viên)

### 📌 Mô tả
Quản trị viên hệ thống, có quyền cao nhất, quản lý toàn bộ hệ thống.

### ✅ Chức năng Cho phép

#### 1️⃣ Quản Trị Hệ Thống

##### A. Quản Lý Tài Khoản Người Dùng
- [x] Danh sách tất cả người dùng
- [x] Lọc theo vai trò (Guest/User/Teacher/Admin)
- [x] Lọc theo trạng thái (Active/Inactive)
- [x] Tìm kiếm theo name/email
- [x] Xem chi tiết người dùng
- [x] Sửa thông tin người dùng
- [x] Khóa/mở khóa tài khoản
- [x] Xóa tài khoản (soft delete)
- [x] Reset mật khẩu người dùng
- [x] Gửi thông báo cho người dùng

**Routes**:
```
GET /admin/users - Danh sách người dùng
GET /admin/users/:id - Chi tiết
PUT /admin/users/:id - Cập nhật
POST /admin/users/:id/lock - Khóa
POST /admin/users/:id/unlock - Mở khóa
DELETE /admin/users/:id - Xóa
```

**API Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "is_active": true,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

---

##### B. Quản Lý Tài Khoản Giáo Viên
- [x] Danh sách giáo viên
- [x] Duyệt giáo viên mới
- [x] Phê chuẩn/từ chối yêu cầu giáo viên
- [x] Xem thông tin giáo viên
- [x] Xem bài học tạo bởi giáo viên
- [x] Khóa/mở khóa giáo viên
- [x] Xóa giáo viên
- [x] Gửi lời nhắc đến giáo viên

**Routes**:
```
GET /admin/teachers - Danh sách
GET /admin/teachers/pending - Chờ duyệt
POST /admin/teachers/:id/approve - Phê chuẩn
POST /admin/teachers/:id/reject - Từ chối
```

---

##### C. Phân Quyền Hệ Thống
- [x] Gán vai trò cho người dùng
- [x] Gán quyền cụ thể
- [x] Tạo vai trò tuỳ chỉnh (nếu cần)
- [x] Quản lý permissions
- [x] Kiểm tra access logs

**Routes**:
```
PUT /admin/users/:id/role - Thay đổi vai trò
PUT /admin/users/:id/permissions - Cập nhật quyền
```

---

#### 2️⃣ Giám Sát Hệ Thống

##### A. Xem Thống Kê Tổng Quan
- [x] Tổng số người dùng
- [x] Tổng số bài học
- [x] Tổng số luyện tập
- [x] Tổng số giáo viên
- [x] Phân bố người dùng (User/Teacher/Admin)
- [x] Hoạt động hôm nay/tuần/tháng

**Routes**:
```
GET /admin/statistics - Thống kê tổng quan
```

**Response**:
```json
{
  "success": true,
  "data": {
    "total_users": 1500,
    "total_teachers": 50,
    "total_lessons": 200,
    "total_practices": 50000,
    "active_users_today": 350,
    "new_users_this_month": 200
  }
}
```

---

##### B. Xem Số Lượng Người Dùng
- [x] Tổng số người dùng
- [x] Người dùng hoạt động
- [x] Người dùng không hoạt động
- [x] Biểu đồ tăng trưởng người dùng
- [x] Phân bố theo quốc gia/ngôn ngữ

---

##### C. Xem Số Lượng Bài Học
- [x] Tổng bài học
- [x] Bài học theo topic
- [x] Bài học theo độ khó
- [x] Bài học theo giáo viên
- [x] Bài học mới nhất

---

##### D. Xem Thống Kê Luyện Tập
- [x] Tổng số luyện tập
- [x] Luyện tập hàng ngày (biểu đồ)
- [x] Luyện tập hàng tuần
- [x] Luyện tập hàng tháng
- [x] Bài tập được luyện nhiều nhất
- [x] Điểm trung bình hệ thống

**Routes**:
```
GET /admin/statistics/practices
GET /admin/statistics/practices/daily
GET /admin/statistics/practices/weekly
```

---

##### E. Xem Activity Logs
- [x] Log đăng nhập người dùng
- [x] Log tạo bài học
- [x] Log nộp bài luyện
- [x] Log xóa tài khoản
- [x] Lọc theo ngày
- [x] Lọc theo người dùng
- [x] Lọc theo loại hoạt động

---

#### 3️⃣ Cấu Hình Hệ Thống

##### A. Cài Đặt Chung
- [x] Tên ứng dụng
- [x] Logo
- [x] Mô tả hệ thống
- [x] URL domain
- [x] Múi giờ
- [x] Ngôn ngữ mặc định
- [x] Maintenance mode

**Routes**:
```
GET /admin/settings/general
PUT /admin/settings/general
```

---

##### B. Cấu Hình Xác Thực
- [x] Chế độ xác thực (JWT/Session)
- [x] Thời gian hết hạn token
- [x] Cho phép đăng ký (bật/tắt)
- [x] Xác thực email (bắt buộc/tùy chọn)
- [x] Xác thực 2FA (tùy chọn)
- [x] Đặt lại mật khẩu

---

##### C. Cấu Hình Email
- [x] SMTP server
- [x] Email từ
- [x] Mẫu email
- [x] Gửi email test
- [x] Lịch sử email gửi

---

##### D. Cấu Hình AI
- [x] API key AI
- [x] Endpoint AI
- [x] Model sử dụng
- [x] Độ chính xác chấm điểm
- [x] Timeout xử lý
- [x] Logging requests

**Routes**:
```
PUT /admin/settings/ai
```

---

##### E. Cấu Hình Storage
- [x] Loại storage (Local/S3/Cloud)
- [x] Path storage
- [x] CDN settings
- [x] Dung lượng tối đa tệp
- [x] Định dạng file cho phép

---

##### F. Cấu Hình Backup
- [x] Tần suất backup
- [x] Vị trí backup
- [x] Restore từ backup
- [x] Lịch sử backup
- [x] Xóa backup cũ

---

##### G. Logs & Monitoring
- [x] Xem system logs
- [x] Xem error logs
- [x] Xem access logs
- [x] Xem API requests
- [x] Xem database queries
- [x] Performance monitoring

---

#### 4️⃣ Quản Lý Nội Dung

##### A. Quản Lý Bài Học
- [x] Xem tất cả bài học
- [x] Lọc bài học
- [x] Xóa bài học không phù hợp
- [x] Featured/Featured bài học
- [x] Xem thống kê mỗi bài
- [x] Ghim bài học

**Routes**:
```
GET /admin/lessons - Danh sách
DELETE /admin/lessons/:id - Xóa
POST /admin/lessons/:id/feature - Featured
```

---

##### B. Báo Cáo Và Xử Phạt
- [x] Xem báo cáo (report) từ người dùng
- [x] Xem nội dung bị phàn nàn
- [x] Cảnh báo giáo viên
- [x] Xóa nội dung vi phạm
- [x] Khóa tài khoản vi phạm

**Routes**:
```
GET /admin/reports - Báo cáo
POST /admin/reports/:id/resolve - Xử lý
```

---

### ❌ Chức năng Bị chặn
- ❌ Không nên quản lý nội dung chi tiết (để cho Teacher)
- ❌ Không quản lý bài tập từng cá nhân
- ❌ Admin không nên luyện tập như User

---

## 🤖 AI System

### 📌 Mô tả
Hệ thống AI xử lý machine learning và speech processing, không phải người dùng.

### ✅ Chức Năng

#### 1️⃣ Nhận Diện Giọng Nói (Speech-to-Text)

##### Chức năng
- [x] Nhập file âm thanh từ user
- [x] Xử lý speech recognition
- [x] Chuyển âm thanh thành văn bản
- [x] Xác định từ phát âm
- [x] Xác định phạm vi (range) âm thanh

**Input**:
```json
{
  "audio_file": "base64_encoded_audio",
  "audio_format": "wav",
  "language": "en"
}
```

**Output**:
```json
{
  "success": true,
  "data": {
    "transcribed_text": "dog",
    "confidence": 0.95,
    "phonetic": "dɔg",
    "frequency_range": [100, 5000]
  }
}
```

---

#### 2️⃣ Phát Âm Mẫu (Text-to-Speech)

##### Chức năng
- [x] Nhập văn bản tiếng Anh
- [x] Sinh âm thanh phát âm chuẩn
- [x] Hỗ trợ nhiều giọng nói
- [x] Điều chỉnh tốc độ phát âm
- [x] Điều chỉnh âm lượng

**Input**:
```json
{
  "text": "dog",
  "language": "en",
  "voice": "female",
  "speed": 1.0
}
```

**Output**:
```json
{
  "success": true,
  "data": {
    "audio_url": "https://cdn.echokids.com/audio/dog.mp3",
    "format": "mp3",
    "duration": 0.5
  }
}
```

---

#### 3️⃣ So Sánh Phát Âm

##### Chức năng
- [x] Lấy âm thanh mẫu chuẩn
- [x] Lấy âm thanh từ user
- [x] So sánh waveform
- [x] Phân tích sự khác biệt
- [x] Tính similarity score

**Input**:
```json
{
  "reference_audio": "base64_reference",
  "user_audio": "base64_user_audio",
  "word": "dog"
}
```

**Output**:
```json
{
  "success": true,
  "data": {
    "similarity_score": 0.85,
    "word_match": true,
    "phonetic_match": [...]
  }
}
```

---

#### 4️⃣ Chấm Điểm Phát Âm

##### Chức năng
- [x] Phân tích múi vấn đề phát âm
- [x] Tính điểm pronunciation accuracy
- [x] Tính điểm stress (nhấn điểm)
- [x] Tính điểm intonation
- [x] Tính điểm speed (tốc độ)
- [x] Tính điểm fluency (lưu chuyện)
- [x] Tính tổng điểm (0-100)

**Scoring Breakdown**:
```
Total Score (100)
├── Pronunciation Accuracy (40)
│   ├── Vowels (20)
│   └── Consonants (20)
├── Stress (20)
├── Intonation (20)
├── Speed (10)
└── Fluency (10)
```

**Output**:
```json
{
  "success": true,
  "data": {
    "total_score": 85,
    "breakdown": {
      "pronunciation": 40,
      "stress": 18,
      "intonation": 17,
      "speed": 7,
      "fluency": 8
    },
    "grade": "Good"
  }
}
```

---

#### 5️⃣ Phân Tích Lỗi Phát Âm

##### Chức năng
- [x] Xác định từng lỗi cụ thể
- [x] Phân loại lỗi:
  - Lỗi vowel
  - Lỗi consonant
  - Lỗi stress
  - Lỗi intonation
  - Lỗi tốc độ
- [x] Vị trí lỗi (phút:giây)
- [x] Độ nghiêm trọng (Minor/Major/Critical)

**Output**:
```json
{
  "success": true,
  "data": {
    "errors": [
      {
        "type": "vowel",
        "word": "dog",
        "expected_phonetic": "dɔg",
        "actual_phonetic": "dɑg",
        "position": "0:00-0:05",
        "severity": "major",
        "explanation": "The vowel sound should be /ɔ/ not /ɑ/"
      },
      {
        "type": "stress",
        "word": "about",
        "expected_stress": "ə'baʊt",
        "actual_stress": "'æbaʊt",
        "position": "0:05-0:10",
        "severity": "minor"
      }
    ]
  }
}
```

---

#### 6️⃣ Đưa Phản Hồi Luyện Tập

##### Chức năng
- [x] Tạo phản hồi dễ hiểu
- [x] Phản hồi theo loại lỗi
- [x] Lời khuyên cải thiện cụ thể
- [x] Link phát âm mẫu
- [x] Lời khuyến khích
- [x] Gợi ý bài học tiếp theo

**Output**:
```json
{
  "success": true,
  "data": {
    "overall_feedback": "Good effort! You got most of the pronunciations correct.",
    "error_feedback": {
      "vowel": "Pay attention to the /ɔ/ vowel sound...",
      "stress": "The stress in 'about' should be on the second syllable..."
    },
    "suggestions": [
      "Practice vowel /ɔ/ with words like 'dog', 'log', 'hot'",
      "Listen to native speakers for stress patterns",
      "Try speaking slower to improve accuracy"
    ],
    "next_lesson": {
      "id": 2,
      "title": "Advanced Animals",
      "difficulty": "medium"
    }
  }
}
```

---

### API Endpoints AI

```
POST   /api/ai/speech-to-text         - Nhận diện giọng
POST   /api/ai/text-to-speech         - Phát âm mẫu
POST   /api/ai/evaluate-pronunciation - Chấm điểm
POST   /api/ai/analyze-errors         - Phân tích lỗi
POST   /api/ai/generate-feedback      - Tạo phản hồi
```

---

## 📊 Tóm Tắt Bảng Quyền

| Chức năng | Guest | User | Teacher | Admin | AI |
|-----------|-------|------|---------|-------|-----|
| Xem trang chủ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Đăng nhập/ký | ✅ | ✅ | ✅ | ✅ | ❌ |
| Luyện tập | ❌ | ✅ | ❌ | ❌ | ❌ |
| Tạo bài học | ❌ | ❌ | ✅ | ❌ | ❌ |
| Quản lý học viên | ❌ | ❌ | ✅ | ❌ | ❌ |
| Quản lý người dùng | ❌ | ❌ | ❌ | ✅ | ❌ |
| Xem thống kê | ❌ | ✅ | ✅ | ✅ | ❌ |
| Chấm điểm | ❌ | ❌ | ❌ | ❌ | ✅ |

---

**Cập nhật**: 19/03/2026
**Phiên bản**: 1.0

