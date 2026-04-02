# 🎨 EchoKids Frontend - Hướng dẫn Phát triển

## 📋 Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Yêu cầu Hệ thống](#yêu-cầu-hệ-thống)
3. [Cài đặt & Chạy](#cài-đặt--chạy)
4. [Cấu trúc Dự án](#cấu-trúc-dự-án)
5. [Các Trang Chính](#các-trang-chính)
6. [Component & Chức năng](#component--chức-năng)
7. [API Integration](#api-integration)

---

## 🎯 Giới thiệu

**EchoKids Frontend** là giao diện người dùng được xây dựng với **Vue 3** và **Vite**, cung cấp trải nghiệm tương tác cho các vai trò khác nhau:
- 👤 Guest (Khách vãng lai)
- 👨‍👧 User (Trẻ em / Phụ huynh)
- 👨‍🏫 Teacher (Giáo viên)
- 🔐 Admin (Quản trị viên)

---

## 💻 Yêu cầu Hệ thống

- **Node.js**: v16 trở lên
- **npm**: v8 trở lên hoặc **yarn**
- **Modern Browser**: Chrome, Firefox, Safari, Edge

---

## 🚀 Cài đặt & Chạy

### 1. Clone/Download Dự án
```bash
cd FE_EchoKids
```

### 2. Cài đặt Dependencies
```bash
npm install
```

### 3. Chạy Development Server
```bash
npm run dev
```
Ứng dụng sẽ chạy trên: `http://localhost:5173`

### 4. Build cho Production
```bash
npm run build
```

### 5. Preview Build
```bash
npm run preview
```

---

## 📁 Cấu trúc Dự án

```
FE_EchoKids/
├── public/                          # Các file tĩnh
│   ├── vite.svg
│   ├── Admin/                       # Tài nguyên Admin
│   │   ├── css/                    # CSS Admin
│   │   ├── js/                     # JS Admin
│   │   └── images/                 # Hình ảnh Admin
│   └── Client/                     # Tài nguyên Client
│       ├── css/
│       ├── js/
│       └── images/
│
├── src/
│   ├── main.js                     # Entry point
│   ├── App.vue                     # Root component
│   ├── style.css                   # Global styles
│   │
│   ├── components/                 # Các component Vue
│   │   ├── Admin/                 # Component Admin
│   │   │   ├── Dashboard.vue
│   │   │   ├── UserManagement.vue
│   │   │   ├── Statistics.vue
│   │   │   └── ...
│   │   ├── Client/                # Component User/Teacher
│   │   │   ├── LessonList.vue
│   │   │   ├── Practice.vue
│   │   │   ├── Dashboard.vue
│   │   │   └── ...
│   │   ├── Common/                # Component dùng chung
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   ├── Footer.vue
│   │   │   └── LoadingSpinner.vue
│   │   └── list_page.txt          # Template danh sách
│   │
│   ├── layout/                     # Layout components
│   │   ├── components/
│   │   └── wrapper/
│   │
│   ├── router/                     # Vue Router
│   │   ├── index.js               # Cấu hình route
│   │   ├── checkAdmin.js          # Middleware kiểm tra Admin
│   │   └── checkClient.js         # Middleware kiểm tra User
│   │
│   ├── assets/                     # Tài nguyên
│   │   ├── scss/                  # SCSS files
│   │   └── css_js_template.txt
│   │
│   └── services/                   # API services
│       ├── authService.js         # Xác thực
│       ├── lessonService.js       # Bài học
│       ├── practiceService.js     # Luyện tập
│       ├── userService.js         # Người dùng
│       └── adminService.js        # Admin
│
├── index.html                      # HTML template chính
├── vite.config.js                  # Cấu hình Vite
├── package.json                    # Dependencies
└── README.md                        # Hướng dẫn gốc

```

---

## 📄 Các Trang Chính

### **1. Guest Pages** 👤

#### Trang Chủ & Giới Thiệu (`/`)
- Hiển thị giới thiệu về EchoKids
- Nút "Đăng nhập" và "Đăng ký"
- Các tính năng nổi bật

```vue
<!-- Home.vue -->
<template>
  <div class="home">
    <Hero />
    <Features />
    <Testimonials />
    <CTA />
  </div>
</template>
```

#### Hướng dẫn Sử dụng (`/guide`)
- Video hướng dẫn
- Các bước học tập
- FAQ

#### Đăng nhập (`/login`)
- Form đăng nhập (Email + Password)
- Liên kết "Quên mật khẩu"
- Liên kết "Đăng ký tài khoản"

#### Đăng ký (`/register`)
- Form đăng ký (Họ tên, Email, Password, Vai trò)
- Xác thực dữ liệu
- Điều khoản sử dụng

---

### **2. User Pages** 👨‍👧

#### Dashboard (`/dashboard`)
- Thống kê cá nhân
- Bài học gần đây
- Tiến độ học tập

```vue
<!-- UserDashboard.vue -->
<template>
  <div class="dashboard">
    <WelcomeCard :user="user" />
    <StatsCard />
    <RecentLessons />
    <ProgressChart />
  </div>
</template>
```

#### Danh sách Bài học (`/lessons`)
- Hiển thị tất cả bài học theo chủ đề
- Filter & Search
- Sắp xếp theo độ khó

#### Chi tiết Bài học (`/lesson/:id`)
- Nội dung bài học
- Từ vựng với hình ảnh
- Âm thanh phát âm mẫu
- Nút "Bắt đầu luyện tập"

#### Trang Luyện tập (`/practice/:lessonId`)
- Hiển thị từ vựng
- Âm thanh phát âm mẫu
- Ghi âm giọng nói
- Xem kết quả chấm điểm từ AI

```vue
<!-- Practice.vue -->
<template>
  <div class="practice">
    <VocabularyDisplay :vocabulary="current" />
    <PronunciationGuide :audio="audioUrl" />
    <AudioRecorder @submit="submitRecording" />
    <ResultDisplay v-if="result" :result="result" />
  </div>
</template>
```

#### Xem Tiến độ (`/progress`)
- Dashboard tiến độ học tập
- Biểu đồ thành tích
- Thống kê theo bài học

#### Lịch sử Luyện tập (`/history`)
- Danh sách tất cả bài luyện tập
- Ngày tháng, bài học, điểm số
- Chi tiết kết quả

#### Hồ sơ Cá nhân (`/profile`)
- Thông tin người dùng
- Ảnh đại diện
- Cập nhật thông tin
- Thay đổi mật khẩu
- Đăng xuất

---

### **3. Teacher Pages** 👨‍🏫

#### Dashboard Giáo viên (`/teacher/dashboard`)
- Số học viên
- Bài học đã tạo
- Thống kê luyện tập

#### Quản lý Bài học (`/teacher/lessons`)
- Danh sách bài học
- Nút tạo bài mới
- Chỉnh sửa / Xóa bài

#### Tạo Bài học (`/teacher/lessons/create`)
- Form tạo bài học
- Nhập tiêu đề, mô tả
- Chọn chủ đề, độ khó
- Thêm từ vựng
- Upload hình ảnh, âm thanh

```vue
<!-- CreateLesson.vue -->
<template>
  <div class="create-lesson">
    <form @submit.prevent="submit">
      <InputField v-model="lesson.title" label="Tiêu đề" />
      <TextArea v-model="lesson.description" label="Mô tả" />
      <SelectField v-model="lesson.topic" :options="topics" />
      <SelectField v-model="lesson.difficulty" :options="difficulties" />
      <VocabularyBuilder v-model="lesson.vocabularies" />
      <button type="submit">Tạo Bài học</button>
    </form>
  </div>
</template>
```

#### Sửa Bài học (`/teacher/lessons/:id/edit`)
- Cập nhật tiêu đề, mô tả
- Chỉnh sửa từ vựng
- Thêm/xóa hình ảnh, âm thanh

#### Quản lý Học viên (`/teacher/students`)
- Danh sách học viên
- Xem chi tiết tiến độ
- Gửi thông báo

#### Xem Tiến độ Học viên (`/teacher/students/:id/progress`)
- Biểu đồ tiến độ
- Điểm số từng bài
- Lỗi phát âm phổ biến
- Gợi ý luyện tập

---

### **4. Admin Pages** 🔐

#### Dashboard Admin (`/admin/dashboard`)
- Tổng quan hệ thống
- Số người dùng, giáo viên
- Bài học tổng cộng

#### Quản lý Người dùng (`/admin/users`)
- Danh sách tất cả user
- Khóa/mở khóa tài khoản
- Xem chi tiết người dùng
- Xóa tài khoản

```vue
<!-- UserManagement.vue -->
<template>
  <div class="user-management">
    <h2>Quản lý Người dùng</h2>
    <SearchBar @search="searchUsers" />
    <UserTable :users="users">
      <template #actions="{ user }">
        <button @click="viewUser(user)">Xem</button>
        <button @click="toggleLock(user)">{{ user.locked ? 'Mở khóa' : 'Khóa' }}</button>
        <button @click="deleteUser(user)" class="danger">Xóa</button>
      </template>
    </UserTable>
  </div>
</template>
```

#### Quản lý Giáo viên (`/admin/teachers`)
- Danh sách giáo viên
- Phê duyệt giáo viên mới
- Quản lý quyền giáo viên

#### Quản lý Bài học (`/admin/lessons`)
- Toàn bộ bài học trong hệ thống
- Xem chi tiết
- Xóa bài nếu cần

#### Thống kê Hệ thống (`/admin/statistics`)
- Biểu đồ người dùng
- Biểu đồ bài học
- Biểu đồ luyện tập hàng ngày/tuần
- Thống kê theo chủ đề

#### Cấu hình Hệ thống (`/admin/settings`)
- Cài đặt chung
- Cài đặt AI
- Cài đặt email

---

## 🧩 Component & Chức năng

### Common Components (Dùng chung)

#### Header.vue
```vue
- Logo
- Navigation Menu
- User Menu (Avatar + Dropdown)
- Logout Button
```

#### Sidebar.vue
```vue
- Menu navigation theo vai trò
- Active state
- Collapsible menu
```

#### Footer.vue
```vue
- About
- Contact
- Links
- Copyright
```

### User Components

#### VocabularyCard.vue
- Hiển thị từ vựng
- Hình ảnh
- Phát âm mẫu

#### AudioRecorder.vue
```javascript
- Ghi âm từ microphone
- Hiển thị thời gian ghi
- Nút Stop
- Nút Submit
```

#### ResultCard.vue
- Điểm số
- Danh sách lỗi
- Phản hồi từ AI
- Nút luyện tập lại

---

## 🔌 API Integration

### Authentication Service

```javascript
// services/authService.js
class AuthService {
  async login(email, password) {
    // POST /api/auth/login
  }

  async register(data) {
    // POST /api/auth/register
  }

  async logout() {
    // POST /api/auth/logout
  }

  async getCurrentUser() {
    // GET /api/auth/me
  }
}
```

### Lesson Service

```javascript
// services/lessonService.js
class LessonService {
  async getLessons(filters) {
    // GET /api/lessons
  }

  async getLesson(id) {
    // GET /api/lessons/:id
  }

  async createLesson(data) {
    // POST /api/lessons
  }

  async updateLesson(id, data) {
    // PUT /api/lessons/:id
  }
}
```

### Practice Service

```javascript
// services/practiceService.js
class PracticeService {
  async submitPractice(lessonId, audioFile) {
    // POST /api/practices
    // Gửi file âm thanh lên server
    // Server gửi đến AI xử lý
  }

  async getPracticeResult(practiceId) {
    // GET /api/practices/:id/result
  }

  async getUserPractices(userId) {
    // GET /api/users/:userId/practices
  }
}
```

### Admin Service

```javascript
// services/adminService.js
class AdminService {
  async getUsers() {
    // GET /api/admin/users
  }

  async lockUser(userId) {
    // POST /api/admin/users/:id/lock
  }

  async getStatistics() {
    // GET /api/admin/statistics
  }
}
```

---

## 🔑 Router Configuration

```javascript
// router/index.js
const routes = [
  // Guest routes
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  // User routes
  {
    path: '/dashboard',
    component: UserDashboard,
    beforeEnter: checkClient
  },

  // Teacher routes
  {
    path: '/teacher/dashboard',
    component: TeacherDashboard,
    beforeEnter: checkTeacher
  },

  // Admin routes
  {
    path: '/admin/dashboard',
    component: AdminDashboard,
    beforeEnter: checkAdmin
  }
]
```

---

## 🎨 Styling

### Color Scheme
```css
:root {
  --primary-color: #6366f1;      /* Indigo */
  --secondary-color: #8b5cf6;    /* Purple */
  --success-color: #10b981;      /* Green */
  --warning-color: #f59e0b;      /* Orange */
  --danger-color: #ef4444;       /* Red */
  --dark-bg: #1f2937;            /* Dark Gray */
  --light-bg: #f9fafb;           /* Light Gray */
}
```

### Tailwind / Bootstrap
Sử dụng CSS framework cho responsive design

---

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🧪 Testing

Tạo test file trong `src/__tests__/`:

```javascript
// src/__tests__/components/Login.test.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login Component', () => {
  it('renders login form', () => {
    const wrapper = mount(Login)
    expect(wrapper.find('form').exists()).toBe(true)
  })
})
```

---

## 🔒 Security

- ✅ HTTPS chỉ trong production
- ✅ Xác thực token (JWT)
- ✅ CSRF protection
- ✅ Input validation
- ✅ Output encoding

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@meforma/vue-toaster": "^1.3.0",  // Toast notifications
    "axios": "^1.13.6",                 // HTTP client
    "vue": "^3.3.4",                    // Vue framework
    "vue-router": "^4.0.13"             // Routing
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.3",     // Vite plugin
    "vite": "^4.4.5"                    // Build tool
  }
}
```

---

## 🚨 Troubleshooting

### Port bị chiếm dụng
```bash
npm run dev -- --port 3000
```

### Clear cache
```bash
rm -rf node_modules/.vite
npm run dev
```

### Build error
```bash
rm -rf dist
npm run build
```

---

## 📚 Tài liệu Tham khảo

- [Vue 3 Docs](https://vuejs.org/)
- [Vite Docs](https://vitejs.dev/)
- [Vue Router Docs](https://router.vuejs.org/)
- [Axios Docs](https://axios-http.com/)

---

## 👥 Đóng góp

Để đóng góp, vui lòng tạo pull request hoặc báo cáo issue.

---

**Cập nhật lần cuối**: 19/03/2026
**Phiên bản**: 1.0

