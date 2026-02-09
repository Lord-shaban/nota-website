# Contributing to Nota Website

First off, thank you for considering contributing to Nota Website! 🎉

This document provides guidelines for contributing to this project. By participating, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📖 Table of Contents

- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A GitHub account
- A code editor (VS Code recommended)

### Fork and Clone

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/nota-website.git
   cd nota-website
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/Lord-shaban/nota-website.git
   ```

---

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Browser/OS** information

Use this template:
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen.

**Screenshots**
If applicable.

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
```

### 💡 Suggesting Features

Feature requests are welcome! Please include:

- **Use case** - Why is this feature needed?
- **Description** - What should it do?
- **Mockups** - If applicable

### 🔧 Code Contributions

1. Check for open issues or create one
2. Fork and create a branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 💻 Development Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lord-shaban/nota-website.git
   cd nota-website
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Start Live Server**
   - Install Live Server extension
   - Right-click `index.html` → "Open with Live Server"

### Project Structure

```
nota-website/
├── index.html          # Main HTML file
├── css/style.css       # All styles
├── js/main.js          # JavaScript functionality
└── images/             # All images
```

---

## 🎨 Style Guidelines

### HTML

- Use semantic HTML5 elements
- Include proper accessibility attributes
- Keep indentation consistent (2 spaces)

```html
<!-- Good -->
<section class="features" id="features">
  <h2 class="section-title">Features</h2>
</section>

<!-- Avoid -->
<div class="features">
  <div class="title">Features</div>
</div>
```

### CSS

- Use CSS custom properties (variables)
- Follow BEM-like naming conventions
- Keep selectors specific but not overly complex

```css
/* Good */
.feature-card {
  padding: var(--spacing-lg);
  background: var(--bg-card);
}

.feature-card:hover {
  transform: translateY(-5px);
}

/* Avoid */
div.card div.inner .feature {
  padding: 24px;
}
```

### JavaScript

- Use ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic

```javascript
// Good
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  
  // Initialize carousel logic
}

// Avoid
function init() {
  // 200 lines of mixed logic
}
```

---

## 📝 Commit Messages

Follow the conventional commits format:

### Format
```
<type>(<scope>): <description>

[optional body]
```

### Types
| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, no code change |
| `refactor` | Code restructuring |
| `perf` | Performance improvement |
| `test` | Adding tests |
| `chore` | Maintenance |

### Examples
```bash
feat(hero): add floating animation cards
fix(carousel): resolve touch swipe on mobile
docs(readme): update installation instructions
style(css): format with consistent spacing
```

---

## 🔄 Pull Request Process

### Before Submitting

1. ✅ Update your fork with upstream changes
2. ✅ Test all changes locally
3. ✅ Ensure no console errors
4. ✅ Check responsive design
5. ✅ Run accessibility checks

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Added comments for complex parts
- [ ] No console warnings/errors
- [ ] Tested on multiple browsers
- [ ] Updated documentation if needed

### Submitting

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make commits**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Fill out the template
   - Request review

### After Submitting

- Respond to review feedback
- Make requested changes
- Keep the PR updated with main branch

---

## 🌐 Browser Support

Please test your changes on:

| Browser | Versions |
|---------|----------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

---

## 👥 Community

### Getting Help

- Open an [Issue](https://github.com/Lord-shaban/nota-website/issues)
- Check existing issues and discussions

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

---

## 🙏 Thank You!

Every contribution, no matter how small, makes a difference. Thank you for taking the time to contribute!

---

<div align="center">

**Happy Contributing! 💚**

</div>
