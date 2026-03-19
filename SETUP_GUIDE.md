# 🚀 EchoKids - Hướng dẫn Cài đặt & Chạy Hệ thống

## ⚡ Cài đặt Nhanh (5 phút)

### Bước 1: Chuẩn bị Môi trường

#### Windows
```powershell
# Kiểm tra Node.js
node --version        # Cần v16+
npm --version         # Cần v8+

# Kiểm tra PHP
php --version         # Cần v8.0+

# Kiểm tra MySQL
mysql --version       # Cần v5.7+
```

#### Mac/Linux
```bash
# Cài đặt Homebrew (nếu chưa có)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Kiểm tra phiên bản
node --version
php --version
mysql --version
```

### Bước 2: Clone Project
```bash
# Tải project
git clone <repo-url>
cd EchoKids
```

### Bước 3: Cài đặt Frontend

```bash
# Vào thư mục Frontend
cd FE_EchoKids

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

**✅ Frontend chạy tại**: `http://localhost:5173`

### Bước 4: Cài đặt Backend (Terminal mới)

```bash
# Vào thư mục Backend
cd BE_EchoKids

# Cài đặt dependencies
composer install

# Copy file cấu hình
cp .env.example .env

# Tạo app key
php artisan key:generate
```

### Bước 5: Cấu hình Database

#### 1. Tạo Database
```bash
mysql -u root -p
> CREATE DATABASE echokids;
> EXIT;
```

#### 2. Cập nhật .env
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=echokids
DB_USERNAME=root
DB_PASSWORD=
```

#### 3. Chạy Migrations
```bash
php artisan migrate
```

### Bước 6: Chạy Backend
```bash
php artisan serve
```

**✅ Backend chạy tại**: `http://127.0.0.1:8000`

---

## 🎯 Kiểm tra Cài đặt

### Frontend
```powershell
# Mở browser
http://localhost:5173
# Bạn sẽ thấy trang chủ EchoKids
```

### Backend
```powershell
# Test API
Invoke-WebRequest -Uri "http://127.0.0.1:8000/api/lessons" -Headers @{"Accept"="application/json"}
# Hoặc dùng cURL
curl http://127.0.0.1:8000/api/lessons
```

---

## 📋 Hướng dẫn Chi tiết

### Frontend Setup Chi tiết

#### 1. Cài đặt Node.js
- Tải từ: https://nodejs.org/
- Cài phiên bản LTS (18.x hoặc mới hơn)
- Kiểm tra: `node -v` và `npm -v`

#### 2. Cài đặt Dependencies
```bash
cd FE_EchoKids
npm install
```

Các package chính sẽ cài:
- **vue@3.3.4** - Framework chính
- **vue-router@4.0.13** - Routing
- **axios@1.13.6** - HTTP client
- **@meforma/vue-toaster@1.3.0** - Notifications
- **vite@4.4.5** - Build tool

#### 3. Chạy Dev Server
```bash
npm run dev
```

Output:
```
Local:   http://localhost:5173/
```

#### 4. Build cho Production
```bash
npm run build
```

Folder `dist/` sẽ được tạo với các file tối ưu hóa.

#### 5. Preview Build
```bash
npm run preview
```

---

### Backend Setup Chi tiết

#### 1. Cài đặt PHP & Composer
- PHP: https://www.php.net/downloads
- Composer: https://getcomposer.org/download/

Kiểm tra:
```bash
php --version
composer --version
```

#### 2. Cài đặt MySQL
- MySQL Community Server: https://dev.mysql.com/downloads/mysql/
- Hoặc MariaDB: https://mariadb.org/download/

Kiểm tra:
```bash
mysql --version
```

#### 3. Cài đặt Dependencies
```bash
cd BE_EchoKids
composer install
```

#### 4. Tạo .env File
```bash
cp .env.example .env
php artisan key:generate
```

#### 5. Cấu hình Database

Mở `.env` và cập nhật:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=echokids
DB_USERNAME=root
DB_PASSWORD=
```

#### 6. Chạy Migrations
```bash
php artisan migrate
```

Lệnh này sẽ tạo tất cả các bảng cần thiết.

#### 7. Seed Database (Optional)
```bash
php artisan db:seed
```

#### 8. Chạy Server
```bash
php artisan serve
```

Server sẽ chạy tại: `http://127.0.0.1:8000`

---

## 🔗 Tích hợp Frontend & Backend

### API Base URL

Trong Frontend, cấu hình axios (`src/services/*.js`):

```javascript
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});
```

---

## 🧪 Kiểm tra API

### Sử dụng cURL
```bash
# Lấy danh sách bài học
curl http://127.0.0.1:8000/api/lessons

# Lấy chi tiết một bài
curl http://127.0.0.1:8000/api/lessons/1
```

### Sử dụng Postman
1. Tải Postman: https://www.postman.com/downloads/
2. Tạo collection "EchoKids"
3. Add requests:
   - GET `http://127.0.0.1:8000/api/lessons`
   - POST `http://127.0.0.1:8000/api/auth/login`
   - ...

---

## 📝 Dữ liệu Mẫu

### Tạo User Mẫu

```bash
cd BE_EchoKids
php artisan tinker

# Tạo user
$user = User::factory()->create([
  'name' => 'Demo User',
  'email' => 'demo@echokids.com',
  'role' => 'user'
]);

# Tạo giáo viên
$teacher = User::factory()->create([
  'name' => 'Demo Teacher',
  'email' => 'teacher@echokids.com',
  'role' => 'teacher'
]);

# Exit
exit
```

### Đăng nhập Test

```javascript
// Frontend console
const token = await fetch('http://127.0.0.1:8000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'demo@echokids.com',
    password: 'password'
  })
}).then(r => r.json());

console.log(token);
```

---

## 🐛 Gỡ Lỗi Thường Gặp

### Frontend

#### ❌ Port 5173 bị sử dụng
```bash
npm run dev -- --port 3000
```

#### ❌ Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

#### ❌ CORS error
```bash
# Backend .env
FRONTEND_URL=http://localhost:5173
```

### Backend

#### ❌ Database connection error
```bash
# Kiểm tra .env
cat .env | grep DB_

# Test kết nối
php artisan tinker
> DB::connection()->getPDO();
```

#### ❌ Permission denied
```powershell
# Windows - Run as Administrator
icacls "C:\path\to\storage" /grant:r "%USERNAME%":(OI)(CI)F

# Mac/Linux
chmod -R 755 storage/
chmod -R 755 bootstrap/cache/
```

#### ❌ Key generation failed
```bash
php artisan key:generate
php artisan cache:clear
php artisan config:clear
```

#### ❌ Migrations error
```bash
# Kiểm tra migrations
php artisan migrate:status

# Rollback
php artisan migrate:rollback

# Chạy lại
php artisan migrate
```

---

## 🔑 Tài khoản Mặc định

Sau khi seed database, bạn có thể dùng:

```
Email: demo@echokids.com
Password: password

Email: teacher@echokids.com
Password: password

Email: admin@echokids.com
Password: password
```

---

## 📚 Cấu trúc Thư mục Quan trọng

### Frontend
```
FE_EchoKids/
├── src/
│   ├── components/          # Vue components
│   ├── router/              # Routes
│   ├── services/            # API services
│   ├── assets/              # Static files
│   └── App.vue
├── public/                  # Public assets
├── index.html              # Entry HTML
└── vite.config.js          # Vite config
```

### Backend
```
BE_EchoKids/
├── app/
│   ├── Http/Controllers/    # API controllers
│   ├── Models/              # Database models
│   └── Services/            # Business logic
├── database/
│   ├── migrations/          # DB schemas
│   ├── factories/           # Fake data
│   └── seeders/             # Initial data
├── routes/
│   ├── api.php             # API routes
│   └── web.php
├── config/                 # Configuration
└── storage/                # Files & logs
```

---

## 🚀 Các Lệnh Hữu Ích

### Frontend
```bash
npm run dev              # Start dev
npm run build           # Build production
npm run preview         # Preview build
npm install <package>   # Install package
npm update              # Update packages
npm audit               # Check security
```

### Backend
```bash
php artisan serve                    # Start server
php artisan migrate                  # Run migrations
php artisan db:seed                  # Seed database
php artisan migrate:fresh --seed     # Reset & seed
php artisan tinker                   # Interactive shell
php artisan make:model <Model>       # Create model
php artisan make:controller <Name>   # Create controller
php artisan cache:clear              # Clear cache
php artisan config:cache             # Cache config
php artisan test                     # Run tests
```

---

## 📱 Truy cập Các Trang

### Guest
- `http://localhost:5173/` - Trang chủ
- `http://localhost:5173/login` - Đăng nhập
- `http://localhost:5173/register` - Đăng ký

### User (Sau khi đăng nhập)
- `http://localhost:5173/dashboard` - Dashboard
- `http://localhost:5173/lessons` - Bài học
- `http://localhost:5173/practice/1` - Luyện tập
- `http://localhost:5173/progress` - Tiến độ

### Teacher
- `http://localhost:5173/teacher/dashboard` - Dashboard
- `http://localhost:5173/teacher/lessons` - Quản lý bài
- `http://localhost:5173/teacher/students` - Quản lý học viên

### Admin
- `http://localhost:5173/admin/dashboard` - Dashboard
- `http://localhost:5173/admin/users` - Quản lý người dùng
- `http://localhost:5173/admin/statistics` - Thống kê

---

## 🔒 Bảo mật

### Bước 1: Tạo JWT Secret
```bash
php artisan jwt:secret
```

Sẽ update `JWT_SECRET` trong `.env`

### Bước 2: Sử dụng HTTPS (Production)
```env
APP_URL=https://echokids.com
```

### Bước 3: Cấu hình CORS
Trong `config/cors.php`:
```php
'allowed_origins' => ['https://echokids.com'],
```

---

## 📊 Theo dõi Logs

### Frontend
Mở DevTools (F12) → Console tab

### Backend
```bash
# Xem realtime
tail -f storage/logs/laravel.log

# Xem recent
cat storage/logs/laravel.log
```

---

## ✅ Checklist Cài đặt

- [ ] Node.js v16+ cài đặt
- [ ] PHP v8.0+ cài đặt
- [ ] MySQL cài đặt & chạy
- [ ] Composer cài đặt
- [ ] Git clone project
- [ ] Frontend dependencies cài
- [ ] Backend dependencies cài
- [ ] .env file cấu hình
- [ ] Database tạo
- [ ] Migrations chạy
- [ ] Frontend server chạy
- [ ] Backend server chạy
- [ ] API test successful
- [ ] Đăng nhập test successful
- [ ] Dashboard hiển thị OK

---

## 🎓 Học tiếp

Sau khi setup thành công:

1. Đọc [Frontend README](./FE_EchoKids/FRONTEND_README.md)
2. Đọc [Backend README](./BE_EchoKids/BACKEND_README.md)
3. Đọc [Functions README](./README_FUNCTIONS.md)
4. Xem Vue 3 docs: https://vuejs.org/
5. Xem Laravel docs: https://laravel.com/docs
6. Tạo bài học đầu tiên
7. Test ghi âm & chấm điểm
8. Tạo tài khoản admin

---

## 📞 Hỗ trợ

Gặp vấn đề?

1. Kiểm tra [Gỡ Lỗi](#-gỡ-lỗi-thường-gặp)
2. Xem logs: `storage/logs/laravel.log`
3. Mở DevTools Frontend
4. Kiểm tra:
   - Node.js version
   - PHP version
   - MySQL running
   - Ports không conflict
5. Google error message
6. Liên hệ: support@echokids.com

---

## 🎉 Hoàn tất!

Bạn đã cài đặt thành công EchoKids! 🎊

Bây giờ bạn có thể:
- ✅ Khám phá hệ thống
- ✅ Tạo bài học
- ✅ Test luyện tập
- ✅ Xem thống kê
- ✅ Quản lý tài khoản

Chúc bạn sử dụng vui vẻ! 🚀

---

**Cập nhật**: 19/03/2026
**Phiên bản**: 1.0

