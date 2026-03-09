

## Implementation Plan: Update Portfolio with Real Contact Information

### Overview
Replace all placeholder social media links, email addresses, and contact information across the portfolio site with the user's actual details:
- **GitHub:** https://github.com/LSC895
- **LinkedIn:** https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/
- **Twitter/X:** https://x.com/Lsc8954
- **Email:** luckysinghchauhan415@gmail.com

### Files to Update

#### 1. **src/components/Layout.tsx** (Header & Footer)
**Lines to change:**
- Line 60: GitHub link (desktop header) - `https://github.com` → `https://github.com/LSC895`
- Line 68: LinkedIn link (desktop header) - `https://linkedin.com` → `https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/`
- Line 76: Twitter link (desktop header) - `https://twitter.com` → `https://x.com/Lsc8954`
- Line 120: GitHub link (mobile menu) - `https://github.com` → `https://github.com/LSC895`
- Line 128: LinkedIn link (mobile menu) - `https://linkedin.com` → `https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/`
- Line 136: Twitter link (mobile menu) - `https://twitter.com` → `https://x.com/Lsc8954`
- Line 157: Footer year - `© 2024 LSC` → `© 2025 LSC`

#### 2. **src/pages/About.tsx** (Contact Section)
**Lines to change:**
- Line 171: Email button - `mailto:hello@lsc.com` → `mailto:luckysinghchauhan415@gmail.com`
- Line 174: LinkedIn button - `https://linkedin.com/in/yourprofile` → `https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/`

#### 3. **src/pages/Projects.tsx** (Contact CTA)
**Lines to change:**
- Line 141: Email link - `mailto:hello@lsc.com` → `mailto:luckysinghchauhan415@gmail.com`

#### 4. **src/pages/Ideas.tsx** (Contact CTA)
**Lines to change:**
- Line 159: Email link - `mailto:hello@lsc.com` → `mailto:luckysinghchauhan415@gmail.com`

#### 5. **src/pages/Guestbook.tsx** (Contact CTA)
**Lines to change:**
- Line 254: Email link - `mailto:hello@lsc.com` → `mailto:luckysinghchauhan415@gmail.com`

### Changes Summary
- **6 files** will be updated
- **13 total edits** (10 social links, 3 structural)
- All placeholder contact information replaced with real profiles
- Footer year corrected to 2025

### Impact
After implementation:
✅ All social media icons in header/footer will link to real profiles
✅ All "Email Me" / "Get in Touch" buttons will use correct email
✅ LinkedIn profile button on About page will work
✅ Footer copyright year updated to current year
✅ Portfolio ready for sharing with recruiters and collaborators

