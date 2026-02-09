# Security Policy

## 🔒 Overview

The Nota Website is a static website that serves as a landing page for the Nota application. While it doesn't process sensitive data directly, we take security seriously.

---

## 📋 Supported Versions

| Version | Supported          |
|---------|--------------------|
| main    | :white_check_mark: |
| dev     | :white_check_mark: |
| < 1.0   | :x:                |

---

## 🚨 Reporting a Vulnerability

We appreciate responsible disclosure of security vulnerabilities.

### How to Report

1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. **Email** security concerns to the maintainer via [GitHub](https://github.com/Lord-shaban)
3. **Include** the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

| Step | Timeframe |
|------|-----------|
| Initial Response | Within 48 hours |
| Vulnerability Assessment | Within 1 week |
| Fix Implementation | Depends on severity |
| Public Disclosure | After fix is deployed |

---

## 🛡️ Security Measures

### Website Security

- **HTTPS Only**: All traffic is served over HTTPS via Vercel
- **No Server-Side Processing**: Static website with no backend vulnerabilities
- **External Links**: All external links use `rel="noopener noreferrer"`
- **Content Security**: No user-generated content accepted

### Code Security

- **No Dependencies**: Pure HTML, CSS, and JavaScript with no npm packages
- **No Cookies**: Website doesn't set any cookies
- **No Local Storage**: No sensitive data stored locally
- **CDN Resources**: External resources loaded from trusted CDNs only

### Third-Party Services

| Service | Purpose | Security |
|---------|---------|----------|
| Vercel | Hosting | Enterprise-grade security |
| Font Awesome | Icons | CDN with SRI |
| Google Fonts | Typography | Trusted CDN |

---

## 🔐 Best Practices for Contributors

When contributing to this project, please follow these security guidelines:

1. **Never commit secrets**
   - No API keys
   - No credentials
   - No personal information

2. **Review external links**
   - Verify all URLs before adding
   - Use HTTPS only
   - Add `rel="noopener noreferrer"` to external links

3. **Validate inputs**
   - Any form elements should have proper validation
   - Sanitize all user inputs

4. **Keep it simple**
   - Avoid unnecessary JavaScript libraries
   - Minimize attack surface

---

## 📝 Security Checklist for PRs

- [ ] No hardcoded secrets or credentials
- [ ] External links use `rel="noopener noreferrer"`
- [ ] No security deprecation warnings in console
- [ ] No mixed content (HTTP/HTTPS) issues
- [ ] All external resources from trusted sources

---

## 🙏 Acknowledgments

We appreciate security researchers who help keep our project safe. Responsible reporters will be acknowledged in our releases (unless they prefer to remain anonymous).

---

## 📬 Contact

For security-related inquiries, contact:

- **GitHub**: [@Lord-shaban](https://github.com/Lord-shaban)
- **Project Issues**: [Report non-security bugs here](https://github.com/Lord-shaban/nota-website/issues)

---

<div align="center">

**Thank you for helping keep Nota Website secure! 🔒**

</div>
