# 📚 FE_EchoKids - Frontend Documentation

## 📋 Mục lục
1. [Giới thiệu](#giới-thiệu)
2. [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
3. [Cài đặt](#cài-đặt)
4. [Cấu trúc dự án](#cấu-trúc-dự-án)
5. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
6. [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
7. [Các lệnh npm](#các-lệnh-npm)
8. [Cấu hình](#cấu-hình)
9. [Phát triển](#phát-triển)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Giới thiệu

**FE_EchoKids** là ứng dụng Frontend cho dự án EchoKids - nền tảng giáo dục trực tuyến cho trẻ em.

### Tính năng chính:
- 👨‍💼 **Dashboard Admin**: Quản lý người dùng, khóa học, bài giảng
- 👶 **Giao diện Client**: Học tập, luyện tập cho trẻ em
- 📱 **Responsive Design**: Tương thích mobile, tablet, desktop
- 🎨 **Modern UI**: Giao diện hiện đại và thân thiện với người dùng
- 📊 **Charts & Analytics**: Biểu đồ thống kê, phân tích dữ liệu
- 📅 **Calendar**: Lịch quản lý sự kiện và bài học
- 📧 **Email System**: Hệ thống email tích hợp

---

## 🔧 Yêu cầu hệ thống

### Tối thiểu:
- **Node.js**: v14.0.0 trở lên (khuyến nghị v16+)
- **npm**: v6.0.0 trở lên (hoặc yarn v1.22+)
- **RAM**: 2GB
- **Disk Space**: 500MB

### Khuyến nghị:
- **Node.js**: v18+ LTS
- **npm**: v9+
- **RAM**: 4GB
- **Disk Space**: 1GB

---

## 📥 Cài đặt

### 1. Clone repository
```bash
git clone https://github.com/yourusername/FE_EchoKids.git
cd FE_EchoKids
```

### 2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### 3. Cấu hình environment
```bash
# Tạo file .env từ template
cp .env.example .env

# Chỉnh sửa file .env với thông tin của bạn
# VUE_APP_API_URL=http://localhost:8000/api
# VUE_APP_API_TIMEOUT=30000
```

### 4. Chạy development server
```bash
npm run dev
```

Ứng dụng sẽ mở tại: `http://localhost:5173`

---

## 📁 Cấu trúc dự án

```
FE_EchoKids/
├── 📄 index.html                 # HTML chính
├── 📄 package.json               # Dependencies
├── 📄 vite.config.js             # Cấu hình Vite
├── 📄 README.md                  # Documentation
│
├── 📁 public/                    # Tài nguyên tĩnh
│   ├── 📁 Admin/                 # Template Admin (HTML tĩnh)
│   │   ├── app/                  # Trang Admin (HTML)
│   │   ├── css/                  # Stylesheet
│   │   ├── fonts/                # Icon fonts
│   │   ├── images/               # Hình ảnh
│   │   ├── js/                   # JavaScript
│   │   └── fullcalendar/         # Thư viện lịch
│   │
│   └── 📁 Client/                # Template Client (HTML tĩnh)
│       ├── css/                  # Stylesheet
│       ├── images/               # Hình ảnh
│       ├── js/                   # JavaScript
│       └── lib/                  # Thư viện hỗ trợ
│
└── 📁 src/                       # Mã nguồn Vue.js
    ├── 📄 App.vue                # Component Root
    ├── 📄 main.js                # Entry Point
    ├── 📄 style.css              # Global styles
    │
    ├── 📁 assets/                # Tài nguyên
    │   ├── css_js_template.txt   # Template
    │   └── scss/                 # SCSS files
    │
    ├── 📁 components/            # Vue Components
    │   ├── list_page.txt         # Template
    │   ├── Admin/                # Admin Components
    │   │   ├── Dashboard.vue
    │   │   ├── UserManagement.vue
    │   │   ├── CourseManagement.vue
    │   │   └── ...
    │   │
    │   └── Client/               # Client Components
    │       ├── Home.vue
    │       ├── CourseList.vue
    │       ├── LessonDetail.vue
    │       └── ...
    │
    ├── 📁 layout/                # Layout Components
    │   ├── components/           # Header, Sidebar, Footer
    │   │   ├── Header.vue
    │   │   ├── Sidebar.vue
    │   │   ├── Footer.vue
    │   │   └── ...
    │   │
    │   └── wrapper/              # Layout Wrapper
    │       ├── AdminLayout.vue
    │       ├── ClientLayout.vue
    │       └── AuthLayout.vue
    │
    ├── 📁 router/                # Vue Router
    │   ├── 📄 index.js           # Router config
    │   ├── 📄 checkAdmin.js      # Admin middleware
    │   └── 📄 checkClient.js     # Client middleware
    │
    ├── 📁 store/                 # Vuex/Pinia Store (nếu có)
    │   ├── modules/
    │   ├── actions.js
    │   ├── mutations.js
    │   └── index.js
    │
    ├── 📁 services/              # API Services
    │   ├── api.js
    │   ├── auth.js
    │   ├── user.js
    │   ├── course.js
    │   └── ...
    │
    ├── 📁 utils/                 # Utility Functions
    │   ├── helpers.js
    │   ├── validators.js
    │   ├── formatters.js
    │   └── constants.js
    │
    └── 📁 styles/                # Global Styles
        ├── variables.scss
        ├── mixins.scss
        ├── global.scss
        └── ...
```

---

## 🔨 Công nghệ sử dụng

### Framework & Build Tool
| Công nghệ | Phiên bản | Mục đích |
|-----------|----------|---------|
| **Vue.js** | 3.x | Framework frontend |
| **Vite** | 4.x+ | Build tool, dev server |
| **Node.js** | 16+ | Runtime environment |

### UI & Styling
| Công nghệ | Mục đích |
|-----------|---------|
| **Bootstrap** | CSS framework |
| **Tailwind CSS** | Utility-first CSS (nếu dùng) |
| **SCSS/SASS** | CSS preprocessor |
| **PostCSS** | CSS transformation |

### Icon Libraries
| Thư viện | Loại icon |
|---------|-----------|
| **FontAwesome** | General icons |
| **Ionicons** | Mobile-friendly icons |
| **Line Awesome** | Clean vector icons |
| **Remix Icon** | Modern icons |
| **Dripicons** | Custom icons |

### Components & Libraries
| Thư viện | Tính năng |
|---------|----------|
| **Chart.js** | Biểu đồ dữ liệu |
| **FullCalendar** | Lịch sự kiện |
| **Owl Carousel** | Carousel/Slider |
| **Swiper** | Mobile slider |
| **Select2** | Select dropdown |
| **Magnific Popup** | Modal/Lightbox |

### State Management (nếu có)
- **Vuex** hoặc **Pinia** - State management

### HTTP Client
- **Axios** - HTTP requests

### Validation & Routing
- **Vue Router** - Client-side routing
- **Vuelidate** hoặc **Vee-Validate** - Form validation

---

## 📖 Hướng dẫn sử dюng

### Cấu trúc Route

#### Admin Routes
```
/admin/
├── /admin/dashboard          # Trang chính Admin
├── /admin/users              # Quản lý người dùng
├── /admin/courses            # Quản lý khóa học
├── /admin/lessons            # Quản lý bài giảng
├── /admin/analytics          # Thống kê
└── /admin/settings           # Cài đặt
```

#### Client Routes
```
/
├── /                         # Trang chủ
├── /courses                  # Danh sách khóa học
├── /courses/:id              # Chi tiết khóa học
├── /lessons/:id              # Chi tiết bài giảng
├── /my-learning              # Khóa học của tôi
├── /profile                  # Hồ sơ người dùng
└── /logout                   # Đăng xuất
```

#### Auth Routes
```
/auth/
├── /auth/login               # Đăng nhập
├── /auth/register            # Đăng ký
├── /auth/forgot-password     # Quên mật khẩu
└── /auth/reset-password      # Đặt lại mật khẩu
```

### Middleware

#### checkAdmin.js
- Kiểm tra quyền Admin
- Redirect đến login nếu không được phép
- Sử dụng: `beforeEnter: checkAdmin`

#### checkClient.js
- Kiểm tra quyền User
- Redirect đến login nếu chưa đăng nhập
- Sử dụng: `beforeEnter: checkClient`

---

## 🚀 Các lệnh npm

### Development
```bash
# Chạy development server với hot reload
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

### Testing
```bash
# Chạy unit tests
npm run test

# Chạy test coverage
npm run test:coverage

# Chạy e2e tests
npm run test:e2e
```

### Linting & Formatting
```bash
# Lint code
npm run lint

# Fix linting errors
npm run lint:fix

# Format code
npm run format

# Check code format
npm run format:check
```

### Khác
```bash
# Install dependencies
npm install

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix

# Clean cache
npm cache clean --force
```

---

## ⚙️ Cấu hình

### vite.config.js
```javascript
// Ví dụ cấu hình Vite
export default {
  base: './',
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
}
```

### .env (Environment Variables)
```env
# API Configuration
VUE_APP_API_URL=http://localhost:8000/api
VUE_APP_API_TIMEOUT=30000

# App Configuration
VUE_APP_NAME=EchoKids
VUE_APP_VERSION=1.0.0

# Feature Flags
VUE_APP_DEBUG=false
VUE_APP_ENABLE_ANALYTICS=true

# Third-party Services
VUE_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
VUE_APP_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
```

---

## 💻 Phát triển

### Tạo Component mới

#### Vue Component Template (Admin)
```vue
<!-- src/components/Admin/NewComponent.vue -->
<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <!-- Component content -->
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  data() {
    return {
      title: 'Component Title'
    }
  },
  methods: {
    // methods
  }
}
</script>

<style scoped>
.component-wrapper {
  padding: 20px;
}
</style>
```

### Thêm Route mới

```javascript
// src/router/index.js
const routes = [
  {
    path: '/admin/new-page',
    name: 'NewPage',
    component: () => import('../components/Admin/NewComponent.vue'),
    beforeEnter: checkAdmin
  }
]
```

### API Call

```javascript
// src/services/api.js
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

const api = axios.create({
  baseURL: API_URL,
  timeout: process.env.VUE_APP_API_TIMEOUT
})

// Interceptor
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
```

---

## 🐛 Troubleshooting

### Port đã được sử dụng
```bash
# Chỉ định port khác
npm run dev -- --port 3000

# Hoặc kill process trên port 5173
# Windows: netstat -ano | findstr :5173
# macOS/Linux: lsof -i :5173 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Module không tìm thấy
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Vite cache issue
```bash
# Xóa Vite cache
rm -rf .vite
npm run dev
```

### Build thất bại
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules
npm install

# Build lại
npm run build
```

### CORS Error
- Đảm bảo backend có CORS headers
- Kiểm tra proxy config trong `vite.config.js`
- Sử dụng extension CORS browser để test

### Hot Module Replacement (HMR) không hoạt động
```javascript
// vite.config.js
export default {
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173
    }
  }
}
```

---

## 📝 Coding Standards

### File Naming
- **Components**: PascalCase (e.g., `UserProfile.vue`)
- **Services**: camelCase (e.g., `userService.js`)
- **Utils**: camelCase (e.g., `dateHelper.js`)
- **Styles**: kebab-case (e.g., `global-styles.scss`)

### Code Style
- **Indentation**: 2 spaces
- **Semicolons**: Bắt buộc
- **Quotes**: Single quotes `'` cho string
- **Line length**: Max 100 characters

### Vue Component Structure
```vue
<template>
  <!-- Template -->
</template>

<script>
// Imports
// Export component
export default {
  name: '',
  components: {},
  props: {},
  data() {},
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
}
</script>

<style scoped>
/* Component styles */
</style>
```

---

## 📞 Support & Liên hệ

- **Issues**: Tạo issue trên GitHub
- **Email**: support@echokids.com
- **Documentation**: [Link docs]
- **Community**: [Discord/Slack channel]

---

## 📄 License

MIT License - xem file LICENSE để chi tiết

---

## 👥 Contributors

- Ngoc Duong (Lead Developer)
- [Thêm contributors khác]

---

## 📅 Changelog

### v1.0.0 (2024-XX-XX)
- ✨ Initial release
- 🎨 Admin dashboard
- 👶 Client interface
- 📊 Analytics integration

### v0.9.0 (2024-XX-XX)
- 🚧 Beta release
- 🐛 Bug fixes

---

**Last Updated**: March 2026
**Version**: 1.0.0

