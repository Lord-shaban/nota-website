<div align="center">

# 📝 Nota Landing Page

### صفحة هبوط عصرية لتطبيق Nota

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=for-the-badge&logo=github)](https://lord-shaban.github.io/nota-website/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](/)

<br/>

<img src="images/screenshots/Dashboard.png" alt="Nota Preview" width="200">

<br/>

[🌐 Live Demo](https://lord-shaban.github.io/nota-website/) • [📱 Nota App](https://github.com/Lord-shaban/Nota) • [⬇️ Download](https://github.com/Lord-shaban/Nota/releases)

</div>

---

## 🎯 نبذة عن المشروع

صفحة هبوط احترافية لتطبيق **Nota** - تطبيق ملاحظات ذكي مدعوم بالذكاء الاصطناعي Gemini 2.5 Flash. الموقع يعرض ميزات التطبيق والمنصات المدعومة وروابط التحميل.

## ✨ مميزات الموقع

| الميزة | الوصف |
|--------|--------|
| 🎨 **تصميم عصري** | واجهة نظيفة واحترافية مع تأثيرات gradient |
| 📱 **متجاوب بالكامل** | يظهر بشكل مثالي على جميع الأجهزة |
| 🌙 **ثيم داكن** | مريح للعين |
| 🇸🇦 **دعم RTL** | دعم كامل للغة العربية |
| ⚡ **سريع التحميل** | محسّن للأداء |
| 🎬 **أنيميشن سلس** | تجربة مستخدم جذابة |
| ❓ **قسم FAQ** | أسئلة شائعة تفاعلية |
| 🔝 **زر العودة للأعلى** | تنقل سهل |

## 📸 لقطات الشاشة

<div align="center">
<table>
<tr>
<td><img src="images/screenshots/splash.png" alt="Splash" width="120"></td>
<td><img src="images/screenshots/login.png" alt="Login" width="120"></td>
<td><img src="images/screenshots/Dashboard.png" alt="Dashboard" width="120"></td>
<td><img src="images/screenshots/ai_input.png" alt="AI Input" width="120"></td>
<td><img src="images/screenshots/tasks.png" alt="Tasks" width="120"></td>
</tr>
<tr>
<td align="center">البداية</td>
<td align="center">تسجيل الدخول</td>
<td align="center">لوحة التحكم</td>
<td align="center">الإدخال الذكي</td>
<td align="center">المهام</td>
</tr>
</table>
</div>

## 🚀 البدء السريع

### النشر على GitHub Pages

الموقع منشور تلقائياً على: https://lord-shaban.github.io/nota-website/

### التطوير المحلي

1. استنساخ المستودع:
```bash
git clone https://github.com/Lord-shaban/nota-website.git
cd nota-website
```

2. تشغيل خادم محلي:
```bash
# باستخدام Python
python -m http.server 8000

# باستخدام Node.js
npx serve

# باستخدام PHP
php -S localhost:8000
```

3. افتح `http://localhost:8000` في المتصفح.

## 📁 هيكل المشروع

```
nota-website/
├── 📄 index.html           # الصفحة الرئيسية
├── 📄 vercel.json          # إعدادات Vercel
├── 📄 README.md            # التوثيق
│
├── 📁 css/
│   └── 🎨 style.css        # جميع الأنماط (1100+ سطر)
│
├── 📁 js/
│   └── ⚡ main.js          # التفاعلات والأنيميشن (280+ سطر)
│
└── 📁 images/
    ├── 🖼️ logo.png         # شعار التطبيق
    ├── 🖼️ favicon.png      # أيقونة المتصفح
    ├── 🖼️ app-preview.png  # معاينة الهيرو
    ├── 🖼️ og-image.png     # صورة المشاركة
    │
    └── 📁 screenshots/     # لقطات التطبيق (10 صور)
        ├── splash.png
        ├── login.png
        ├── register.png
        ├── forgot_password.png
        ├── Dashboard.png
        ├── ai_input.png
        ├── tasks.png
        ├── appointments.png
        ├── track-money.png
        └── qoutes.png
```

## 🎨 أقسام الموقع

| القسم | الوصف |
|-------|--------|
| **Hero** | البطل - العنوان الرئيسي وزر التحميل |
| **Features** | عرض 6 ميزات رئيسية للتطبيق |
| **How It Works** | شرح 3 خطوات لاستخدام التطبيق |
| **Auth Methods** | طرق تسجيل الدخول الـ 6 |
| **Screenshots** | معرض 10 لقطات شاشة |
| **Tech Stack** | التقنيات المستخدمة |
| **Platforms** | المنصات الـ 6 المدعومة |
| **FAQ** | 5 أسئلة شائعة تفاعلية |
| **Download** | أزرار التحميل |
| **Footer** | التذييل مع روابط سريعة |

## 🔧 التخصيص

### تغيير الألوان الرئيسية

```css
/* css/style.css */
:root {
    --primary: #6366f1;        /* اللون الأساسي */
    --primary-dark: #4f46e5;   /* الأساسي الداكن */
    --primary-light: #818cf8;  /* الأساسي الفاتح */
    --secondary: #10b981;      /* اللون الثانوي */
    --accent: #f59e0b;         /* لون التمييز */
    --background: #0f0f1a;     /* لون الخلفية */
    --surface: #1a1a2e;        /* لون السطح */
}
```

### تغيير روابط التحميل

```html
<!-- index.html -->
<a href="YOUR-GOOGLE-PLAY-LINK" class="download-btn android">
<a href="YOUR-APP-STORE-LINK" class="download-btn ios">
<a href="YOUR-GITHUB-RELEASES" class="download-btn github">
```

## 🌐 خيارات النشر

| المنصة | الطريقة |
|--------|---------|
| **GitHub Pages** | ✅ مفعّل تلقائياً |
| **Vercel** | Import من GitHub |
| **Netlify** | Drag & Drop أو Git |
| **CloudFlare Pages** | ربط المستودع |

## 📱 المشاريع المرتبطة

| المشروع | الوصف |
|---------|--------|
| [Nota App](https://github.com/Lord-shaban/Nota) | تطبيق Flutter الرئيسي |
| [Nota Releases](https://github.com/Lord-shaban/Nota/releases) | إصدارات التحميل |

## 🛠️ التقنيات المستخدمة

<div align="center">

| التقنية | الاستخدام |
|---------|----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | هيكل الصفحة |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | التصميم والأنيميشن |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | التفاعلات |
| ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=flat&logo=fontawesome&logoColor=white) | الأيقونات |
| ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white) | خط Tajawal |

</div>

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - يمكنك استخدامه بحرية لمشاريعك!

## 🤝 المساهمة

المساهمات مرحب بها! 

1. Fork المستودع
2. أنشئ branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit تغييراتك (`git commit -m 'Add amazing feature'`)
4. Push إلى البرانش (`git push origin feature/amazing-feature`)
5. افتح Pull Request

---

<div align="center">

### 🔗 روابط مهمة

[🌐 الموقع](https://lord-shaban.github.io/nota-website/) • 
[📱 التطبيق](https://github.com/Lord-shaban/Nota) • 
[⬇️ التحميل](https://github.com/Lord-shaban/Nota/releases) • 
[🐛 الإبلاغ عن مشكلة](https://github.com/Lord-shaban/nota-website/issues)

<br/>

صُنع بـ ❤️ لتطبيق Nota

**© 2026 Nota. MIT License.**

</div>
