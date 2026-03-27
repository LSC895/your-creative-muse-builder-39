

## Plan: Match Portfolio 100% to syedsubhan.in Reference

After comparing both sites side-by-side, here are the 15 missing elements and changes needed:

### Missing Elements

**1. Hero Section**
- **Profile photo** with rounded card styling on the right side (reference has an anime avatar in a rounded-corner card with a small badge at bottom-right)
- **Verified badge** (blue checkmark) next to the name
- **Typewriter effect** cycling through roles like "AI/ML Engineer", "Backend Developer", "Builder" (reference cycles "Full Stack Developer", "Data Scientist", etc.)

**2. Navigation Overhaul**
- **Top nav**: Replace the current centered pill with a wide header bar -- logo/icon on the left, "MENU" text with dropdown on right (reference has a dark rounded bar spanning ~40% width with an icon and MENU label)
- **Bottom dock**: Fixed bottom navigation bar with 5 icons -- Home, GitHub/Projects, Blog/Docs, X/Twitter, Theme toggle (this is how the reference actually navigates, not the top bar)
- **Left sidebar dots**: Vertical dot indicator on the left showing current section (About, Tech Stack, Projects, Contact) with the active section label appearing on hover/active

**3. Section Styling**
- **Section headers with horizontal rules**: "Career Path", "Tech Stack", "Articles", "Selected Projects" all have a horizontal line extending from the title to the right edge
- **"Crafting with my Core Tools"** title in monospace/code font style with curly braces: `{ Crafting with my Core Tools }`
- **Tools dock icons**: Large colored rounded-square icons (like real app icons -- Discord purple, VS Code blue, Notion black, Brave orange, Figma gradient, etc.) instead of the current small grayscale icons

**4. Project Cards**
- Add **image/GIF previews** at the top of each project card (large visual thumbnail)
- Add **GitHub icon** and **external link icon** buttons on each card
- Cards should show the image taking up ~60% of the card height

**5. New Sections**
- **Experiments section**: "Secret Research Ongoing" text with a mysterious/playful vibe (appears between projects and contact on reference)
- **Visitor counter**: Golden-bordered badge near footer showing "You are the Nth visitor"
- **Search palette**: Floating "Search ⌘K" button in bottom-right corner

**6. Contact & Footer**
- **"SOCIALS" label** badge above the "Let's build something extraordinary" heading
- **"DM me on X or Drop a Mail"** in italic/handwritten font style
- **Social icons** as large rounded-square buttons (X, LinkedIn, Gmail, GitHub)
- **Footer**: Split layout -- "Built with love by Lucky Singh Chauhan" on left, "© 2026. Engineered with Soul." on right

**7. Theme**
- Default to **dark mode** (black background) matching the reference
- Ensure the dark theme colors match: pure black background, subtle borders, green accent for "Available" badge

---

### Files to Modify/Create

| File | Changes |
|------|---------|
| `src/pages/Home.tsx` | Add profile photo, verified badge, typewriter effect, section header styling, experiments section |
| `src/components/Layout.tsx` | Replace nav with wide header bar + bottom dock + left sidebar dots |
| `src/components/TechMarquee.tsx` | Update section header style |
| `src/components/ToolsDock.tsx` | Large colored app-style icons with proper brand colors |
| `src/components/ContactCTA.tsx` | Add SOCIALS label, italic subtitle, large social icon buttons |
| `src/components/CareerTimeline.tsx` | Add section header horizontal rule styling |
| `src/components/TypewriterEffect.tsx` | New -- cycling role text animation |
| `src/components/SectionDots.tsx` | New -- left sidebar section indicator |
| `src/components/BottomDock.tsx` | New -- fixed bottom icon navigation |
| `src/components/VisitorCounter.tsx` | New -- golden visitor counter badge |
| `src/components/SearchPalette.tsx` | New -- Cmd+K search floating button |
| `src/index.css` | Dark mode default, typewriter keyframes |
| `src/components/ThemeProvider.tsx` | Set dark as default theme |

### Technical Notes
- Typewriter uses a simple interval cycling through role strings with a blinking cursor
- Bottom dock uses fixed positioning with backdrop blur
- Left sidebar dots use Intersection Observer to track current section
- Visitor counter is cosmetic (static or localStorage-based count)
- Search palette button is UI-only initially (can be wired up later)
- Profile photo placeholder until user provides their image

