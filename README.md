<div align="center">

# 📝 Nota Landing Page

### Modern Landing Page for the Nota App

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://nota-app.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](/)

<br/>

[🌐 Live Demo](https://nota-app.vercel.app) • [📱 Nota App](https://github.com/your-username/nota)

</div>

---

## 🎯 About

This is the official landing page for **Nota** - an AI-powered smart notes and diary application. The website showcases the app's features, supported platforms, and provides download links.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient effects
- 📱 **Fully Responsive** - Looks great on all devices
- 🌙 **Dark Theme** - Easy on the eyes
- 🇸🇦 **RTL Support** - Full Arabic language support
- ⚡ **Fast Loading** - Optimized for performance
- 🎬 **Smooth Animations** - Engaging user experience

## 🚀 Quick Start

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nota-website)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/nota-website.git
cd nota-website
```

2. Open with Live Server or any static file server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve
```

3. Open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
nota-website/
├── index.html          # Main HTML page
├── vercel.json         # Vercel configuration
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # JavaScript interactions
└── images/
    ├── logo.png        # App logo
    ├── favicon.png     # Browser favicon
    ├── app-preview.png # Hero section mockup
    ├── og-image.png    # Social media preview
    └── screenshots/    # App screenshots
        ├── splash.png
        ├── login.png
        ├── dashboard.png
        ├── ai-input.png
        └── tasks.png
```

## 🖼️ Adding Your Images

Replace the placeholder images in the `images/` folder:

| Image | Size | Description |
|-------|------|-------------|
| `logo.png` | 180x180 | App logo (square) |
| `favicon.png` | 32x32 | Browser favicon |
| `app-preview.png` | 300x600 | Hero section phone mockup |
| `og-image.png` | 1200x630 | Social media preview image |
| `screenshots/*.png` | 220x450 | App screenshots |

## 🔧 Customization

### Change App Links

Update the GitHub and download links in `index.html`:

```html
<!-- GitHub link -->
<a href="https://github.com/YOUR-USERNAME/nota" target="_blank">

<!-- Download buttons -->
<a href="YOUR-GOOGLE-PLAY-LINK" class="download-btn android">
<a href="YOUR-APP-STORE-LINK" class="download-btn ios">
```

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #10b981;
    --accent: #f59e0b;
    /* ... */
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Manual Deploy

Since this is a static website, you can host it anywhere:
- **Netlify**: Drag & drop the folder
- **GitHub Pages**: Enable in repository settings
- **CloudFlare Pages**: Connect your repository

## 📱 Related

- [Nota App Repository](https://github.com/your-username/nota) - The main Flutter application

## 📄 License

MIT License - feel free to use this template for your own projects!

---

<div align="center">

Made with ❤️ for the Nota App

</div>
