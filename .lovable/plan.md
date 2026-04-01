

## Plan: Testimonials, AI-Powered ASK L.U.C.K.Y, and Aesthetic Upgrades

### 1. Testimonial Section -- Infinite Scroll Marquee

A new `TestimonialMarquee` component placed between Career Path and Projects sections.

- Two rows of testimonial cards scrolling in opposite directions (same style as your tech stack marquee)
- Each card: avatar circle with initials, name, role/company, quote text, star rating
- Cards have a dark glass-morphism style matching your theme
- Placeholder testimonials you can replace with real ones later
- Section header: "What People Say" with the horizontal rule style

**File:** `src/components/TestimonialMarquee.tsx` (new)
**Edit:** `src/pages/Home.tsx` -- add section between career and projects

---

### 2. ASK L.U.C.K.Y -- Real AI Chatbot (Your Own API Key)

This turns the current scripted chatbot into a real AI-powered digital personality using Lovable Cloud + an edge function.

**How it works:**
- Visitor picks a mode (hiring / collab / just curious)
- Mode-specific system prompt tells the AI to respond as you -- with your personality, projects, skills, and contact info baked in
- Visitor can then have a real conversation; the AI answers on your behalf
- Streaming responses with typing indicator

**Architecture:**
```text
AskLucky.tsx  -->  Edge Function (ask-lucky/index.ts)  -->  Your API (OpenAI/Gemini)
                   (system prompt with your bio)
```

**Setup flow:**
1. Enable Lovable Cloud (required for edge functions)
2. You provide your OpenAI or Gemini API key as a secret
3. Edge function `ask-lucky` receives messages + mode, prepends a rich system prompt about you, calls the AI, streams back
4. `AskLucky.tsx` updated to stream real responses with markdown rendering

**System prompt includes:** Your name, roles, projects (TATAV, Vaani, Rezoome, CHETNA), tech stack, contact info, personality traits, and mode-specific instructions (hiring = professional, collab = enthusiastic builder, curious = friendly guide).

**Files:**
- `supabase/functions/ask-lucky/index.ts` (new edge function)
- `src/components/AskLucky.tsx` (rewrite for streaming + markdown)
- Secret: your API key (OpenAI or Gemini)

---

### 3. Aesthetic Upgrades -- Animated Particle Grid Background

An animated particle/grid canvas behind the hero section for a techy, atmospheric vibe.

- Dark grid of faint dots/lines with subtle floating animation
- Particles drift slowly, connecting with nearby particles via thin lines
- Uses a lightweight canvas-based approach (no heavy libraries)
- Only renders behind the hero section to keep performance smooth
- Fades out as you scroll past the hero

**File:** `src/components/ParticleGrid.tsx` (new)
**Edit:** `src/pages/Home.tsx` -- layer behind hero section

---

### Summary of Changes

| Task | Files | Type |
|------|-------|------|
| Testimonial marquee | `TestimonialMarquee.tsx` (new), `Home.tsx` | New component |
| AI chatbot backend | `ask-lucky/index.ts` (new edge function) | Backend |
| AI chatbot frontend | `AskLucky.tsx` (rewrite) | Component update |
| Particle grid background | `ParticleGrid.tsx` (new), `Home.tsx` | New component |

### Before We Start

I'll need to:
1. **Enable Lovable Cloud** for edge functions
2. **Ask you for your API key** (OpenAI or Gemini) -- which provider do you want to use?

