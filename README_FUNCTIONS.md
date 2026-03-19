# 📚 EchoKids - Hệ thống Hỗ trợ Phát âm và Luyện tập Tiếng Anh

## 🎯 Giới thiệu Hệ thống

**EchoKids** là một nền tảng học tập trực tuyến toàn diện giúp trẻ em và phụ huynh luyện tập phát âm tiếng Anh thông qua công nghệ AI. Hệ thống được thiết kế với sự hỗ trợ từ các giáo viên chuyên gia và quản lý bởi admin hệ thống.

---

## 👥 5 Tác nhân trong Hệ thống

### 1. 👤 **Khách vãng lai (Guest)**
Người truy cập chưa có tài khoản

#### Chức năng:
- ✅ Xem giới thiệu hệ thống
- ✅ Xem hướng dẫn sử dụng
- ✅ Đăng ký tài khoản mới
- ✅ Đăng nhập vào hệ thống

---

### 2. 👨‍👧 **Người dùng (User - Trẻ em / Phụ huynh)**
Người đã đăng ký tài khoản và tham gia luyện tập

#### **A. Học tập**
- 📖 Chọn chủ đề bài học
- 🖼️ Học từ vựng qua hình ảnh
- 🔊 Nghe phát âm mẫu
- 🎤 Ghi âm giọng nói thực hành
- 🤖 Nhận kết quả chấm điểm từ AI
- 📝 Nhận phản hồi luyện phát âm

#### **B. Theo dõi tiến độ**
- 📊 Xem dashboard tiến độ học tập
- 📅 Xem lịch sử luyện tập
- 📈 Theo dõi cải thiện phát âm theo thời gian

#### **C. Quản lý cá nhân**
- ⚙️ Cập nhật thông tin tài khoản
- 👤 Thay đổi ảnh đại diện
- 🔑 Thay đổi mật khẩu
- 🚪 Đăng xuất

---

### 3. 👨‍🏫 **Giáo viên / Chuyên gia ngôn ngữ (Teacher)**
Người tạo nội dung học tập và theo dõi học viên

#### **A. Quản lý nội dung học tập**
- ➕ Tạo chủ đề bài học mới
- ➕ Tạo bài luyện phát âm
- ➕ Thêm từ vựng vào bài học
- 🖼️ Thêm hình ảnh minh họa
- 🔊 Thêm âm thanh mẫu (phát âm chuẩn)

#### **B. Quản lý bài tập**
- 📝 Tạo bài luyện phát âm mới
- ✏️ Cập nhật bài học hiện có
- 📊 Phân cấp bài học (Dễ → Trung bình → Khó)
- 🎯 Thiết lập mục tiêu học tập

#### **C. Theo dõi học viên**
- 👀 Xem tiến độ học tập của từng trẻ
- 🔍 Xem lỗi phát âm phổ biến
- 💡 Đưa ra gợi ý luyện tập thêm
- 📊 Xem thống kê lớp học
- 📧 Gửi thông báo cho học viên

---

### 4. 🔐 **Admin (Quản trị hệ thống)**
Quản lý hệ thống và quyền truy cập

#### **A. Quản trị hệ thống**
- 👥 Quản lý tài khoản người dùng (User)
- 👨‍🏫 Quản lý tài khoản giáo viên (Teacher)
- 📋 Phân quyền hệ thống
- 🚫 Khóa/mở khóa tài khoản
- 🗑️ Xóa tài khoản (nếu cần)

#### **B. Giám sát hệ thống**
- 📊 Xem thống kê tổng quan
- 👥 Xem số lượng người dùng hoạt động
- 📚 Xem số lượng bài học tổng cộng
- 📈 Xem thống kê luyện tập hàng ngày/hàng tuần
- 🔔 Quản lý thông báo hệ thống

#### **C. Cấu hình hệ thống**
- ⚙️ Cài đặt thông tin hệ thống
- 🔧 Quản lý cấu hình AI
- 📧 Cấu hình email thông báo
- 🌐 Quản lý ngôn ngữ hỗ trợ

---

### 5. 🤖 **Hệ thống AI (AI System)**
Xử lý machine learning và speech processing

#### **A. Xử lý giọng nói**
- 🎤 **Nhận diện giọng nói (Speech-to-Text)**
  - Chuyển đổi âm thanh thành văn bản
  - Hỗ trợ tiếng Anh và ngôn ngữ khác

- 🔊 **Phát âm mẫu (Text-to-Speech)**
  - Phát âm tự nhiên từ văn bản
  - Đa giọng nói lựa chọn
  - Tốc độ phát âm điều chỉnh

#### **B. Phân tích và chấm điểm**
- 🎯 So sánh phát âm người dùng với mẫu chuẩn
- ⭐ Chấm điểm phát âm (0-100)
- 🔍 Phân tích lỗi phát âm chi tiết:
  - Lỗi phát âm nguyên âm
  - Lỗi phát âm phụ âm
  - Lỗi nhấn điểm
  - Lỗi tốc độ nói

#### **C. Phản hồi và gợi ý**
- 💬 Đưa ra phản hồi luyện tập cụ thể
- 💡 Gợi ý cách cải thiện phát âm
- 📊 Theo dõi tiến độ cải thiện
- 🎓 Đề xuất bài học tiếp theo

---

## 🏗️ Kiến trúc Hệ thống

```
┌─────────────────────────────────────────────────────────────┐
│                      ECHOKIDS SYSTEM                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │      Frontend (Vue 3 + Vite)            │
        │   FE_EchoKids/                          │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │      Backend (Laravel PHP)              │
        │   BE_EchoKids/                          │
        └─────────────────────────────────────────┘
                              │
        ┌─────────────────────┬─────────────────────┐
        ▼                     ▼                     ▼
    ┌──────────┐         ┌──────────┐         ┌──────────┐
    │ Database │         │   File   │         │   AI     │
    │(MySQL)   │         │ Storage  │         │ Service  │
    └──────────┘         └──────────┘         └──────────┘
```

---

## 🔑 Tính năng Chính của Hệ thống

### 1. **Quản lý Tài khoản**
- Đăng ký, đăng nhập, đăng xuất
- Phân quyền người dùng (Guest → User → Teacher → Admin)
- Quản lý hồ sơ người dùng
- Bảo mật tài khoản

### 2. **Học tập & Luyện tập**
- Chọn bài học theo chủ đề
- Học từ vựng với hình ảnh minh họa
- Nghe phát âm mẫu
- Ghi âm và nộp bài luyện tập

### 3. **AI Chấm điểm & Phản hồi**
- Chấm điểm tự động phát âm
- Phân tích lỗi phát âm
- Đưa ra phản hồi cải thiện
- Theo dõi tiến độ

### 4. **Giáo viên & Quản lý Nội dung**
- Tạo bài học mới
- Thêm từ vựng, hình ảnh, âm thanh
- Phân cấp bài học (Dễ/Trung bình/Khó)
- Theo dõi tiến độ học viên

### 5. **Admin & Giám sát**
- Quản lý tài khoản người dùng
- Thống kê hệ thống
- Phân quyền hệ thống
- Giám sát hoạt động

---

## 📊 Quy trình Luyện tập Típ hình

```
1. User chọn bài học
        ↓
2. Xem nội dung (từ vựng, hình ảnh)
        ↓
3. Nghe phát âm mẫu từ AI
        ↓
4. Ghi âm phát âm của mình
        ↓
5. Gửi bài luyện tập
        ↓
6. AI phân tích & chấm điểm
        ↓
7. Nhận phản hồi & gợi ý
        ↓
8. Xem tiến độ trong dashboard
        ↓
9. Luyện tập lại hoặc học bài mới
```

---

## 🚀 Công nghệ Sử dụng

### Frontend
- **Framework**: Vue 3
- **Build Tool**: Vite
- **Routing**: Vue Router
- **HTTP Client**: Axios
- **Toast Notifications**: @meforma/vue-toaster

### Backend
- **Framework**: Laravel PHP
- **Database**: MySQL
- **Authentication**: Laravel Auth
- **File Storage**: Laravel Storage

### AI Services
- **Speech Recognition**: Speech-to-Text API
- **Text-to-Speech**: TTS Engine
- **Audio Processing**: Speech Analysis

---

## 📦 Cài đặt & Chạy Hệ thống

### Frontend (Vue 3 + Vite)

```bash
# Vào thư mục Frontend
cd FE_EchoKids

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

### Backend (Laravel)

```bash
# Vào thư mục Backend
cd BE_EchoKids

# Cài đặt dependencies
composer install

# Copy file cấu hình
cp .env.example .env

# Tạo app key
php artisan key:generate

# Chạy migrations
php artisan migrate

# Chạy seeder (nếu có)
php artisan db:seed

# Chạy development server
php artisan serve
```

---

## 🗄️ Cấu trúc Cơ sở Dữ liệu Chính

### Bảng Users
```
users
  ├── id (PK)
  ├── name
  ├── email (UNIQUE)
  ├── password
  ├── role (guest, user, teacher, admin)
  ├── avatar
  ├── created_at
  └── updated_at
```

### Bảng Lessons
```
lessons
  ├── id (PK)
  ├── title
  ├── description
  ├── teacher_id (FK)
  ├── difficulty (easy, medium, hard)
  ├── topic
  ├── created_at
  └── updated_at
```

### Bảng Vocabularies
```
vocabularies
  ├── id (PK)
  ├── lesson_id (FK)
  ├── word
  ├── image_url
  ├── pronunciation_audio_url
  ├── created_at
  └── updated_at
```

### Bảng Practices
```
practices
  ├── id (PK)
  ├── user_id (FK)
  ├── lesson_id (FK)
  ├── audio_file_url
  ├── score (0-100)
  ├── errors (JSON)
  ├── feedback
  ├── practice_date
  ├── created_at
  └── updated_at
```

### Bảng Progress
```
progress
  ├── id (PK)
  ├── user_id (FK)
  ├── lesson_id (FK)
  ├── completed
  ├── total_practices
  ├── average_score
  ├── last_practice_date
  ├── created_at
  └── updated_at
```

---

## 🔐 Hệ thống Quyền truy cập

### Quyền theo Vai trò

| Chức năng | Guest | User | Teacher | Admin | AI |
|-----------|-------|------|---------|-------|-----|
| Xem giới thiệu | ✅ | ✅ | ✅ | ✅ | ❌ |
| Đăng nhập | ✅ | ✅ | ✅ | ✅ | ❌ |
| Học tập | ❌ | ✅ | ❌ | ❌ | ❌ |
| Tạo bài học | ❌ | ❌ | ✅ | ❌ | ❌ |
| Quản lý tài khoản | ❌ | ❌ | ❌ | ✅ | ❌ |
| Chấm điểm AI | ❌ | ❌ | ❌ | ❌ | ✅ |
| Xem thống kê | ❌ | ✅ | ✅ | ✅ | ❌ |

---

## 📱 Các Trang/Component Chính

### Frontend Routes

#### Guest Pages
- `/` - Trang chủ / Giới thiệu
- `/guide` - Hướng dẫn sử dụng
- `/login` - Đăng nhập
- `/register` - Đăng ký

#### User Pages
- `/dashboard` - Dashboard cá nhân
- `/lessons` - Danh sách bài học
- `/lesson/:id` - Chi tiết bài học
- `/practice/:lessonId` - Trang luyện tập
- `/progress` - Xem tiến độ
- `/history` - Lịch sử luyện tập
- `/profile` - Hồ sơ cá nhân

#### Teacher Pages
- `/teacher/dashboard` - Dashboard giáo viên
- `/teacher/lessons` - Quản lý bài học
- `/teacher/lessons/create` - Tạo bài học
- `/teacher/lessons/:id/edit` - Sửa bài học
- `/teacher/students` - Quản lý học viên
- `/teacher/students/:id/progress` - Xem tiến độ học viên

#### Admin Pages
- `/admin/dashboard` - Dashboard Admin
- `/admin/users` - Quản lý người dùng
- `/admin/teachers` - Quản lý giáo viên
- `/admin/lessons` - Quản lý bài học
- `/admin/statistics` - Thống kê hệ thống
- `/admin/settings` - Cấu hình hệ thống

---

## 📧 Quy trình Ghi âm & Chấm điểm

### Quy trình Chi tiết

1. **User ghi âm**
   - Click nút ghi âm
   - Hệ thống yêu cầu quyền microphone
   - User nói theo phát âm mẫu
   - Click dừng ghi âm

2. **Gửi bài luyện tập**
   - File âm thanh được mã hóa
   - Gửi lên server
   - Lưu vào database

3. **AI xử lý**
   - Nhận diện giọng nói (Speech-to-Text)
   - So sánh với phát âm mẫu
   - Phân tích lỗi phát âm
   - Tính điểm số

4. **Trả kết quả**
   - Điểm số (0-100)
   - Danh sách lỗi chi tiết
   - Phản hồi cải thiện
   - Gợi ý luyện tập

5. **User xem kết quả**
   - Xem điểm số
   - Xem lỗi phát âm
   - Đọc phản hồi
   - Luyện tập lại nếu cần

---

## 🎯 Mục tiêu Hệ thống

✅ Giúp trẻ em học phát âm tiếng Anh hiệu quả
✅ Cung cấp feedback tức thời từ AI
✅ Theo dõi tiến độ học tập
✅ Hỗ trợ giáo viên quản lý nội dung
✅ Quản lý hệ thống bền vững

---

## 📞 Hỗ trợ

Nếu có câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ:
- 📧 Email: support@echokids.com
- 💬 Chat: support.echokids.com

---

## 📄 License

Dự án EchoKids được cấp phép theo giấy phép MIT.

---

**Cập nhật lần cuối**: 19/03/2026
**Phiên bản**: 1.0

