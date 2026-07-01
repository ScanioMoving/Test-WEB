# Accessibility Testing Checklist — scaniomoving.com

A manual walkthrough for the things automated tools can't catch. The automated
scan (`npm run a11y`) already passes with 0 violations across all pages, so this
list is the **human** half: keyboard, screen reader, and visual checks.

Work through it in any browser. Re-run it after any big design change.

---

## 0. Setup (do this once)

- [ ] **Test in a Private/Incognito window** so you always get the latest code,
      not a cached old version. Firefox/Safari: `Cmd+Shift+P` / `Cmd+Shift+N`.
- [ ] **Safari only:** turn on System Settings → Keyboard → **Keyboard navigation**
      (otherwise Tab won't reach buttons/links). Chrome and Firefox work by default.
- [ ] Remember the golden rule: **press Tab to move focus to something FIRST,
      then Enter/Space to activate it.** Enter does nothing until something is focused.

---

## 1. Keyboard-only (no mouse) — the most important pass

Put your mouse away. On each page:

- [ ] Press **Tab** once — a **"Skip to main content"** link appears first.
      Press Enter on it → focus jumps past the nav into the page.
- [ ] Keep pressing **Tab** — a **visible blue outline** moves through every link
      and button. You should never "lose" it or land on something invisible.
- [ ] Tab to **Services** → press **Enter** → the dropdown opens, and further Tabs
      step through Residential / Commercial / etc.
- [ ] Tab order follows the **visual order** (top to bottom, left to right).
- [ ] You can reach **everything** clickable and activate it with Enter (links)
      or Enter/Space (buttons).
- [ ] Nothing **traps** you — you can always Tab back out of a menu or field.
- [ ] On mobile width, the **hamburger menu** opens with Enter and its links work.

## 2. Contact form (test with keyboard + screen reader)

- [ ] Tab into every field — each is reachable and the label is obvious.
- [ ] Tab to each **checkbox** and toggle it with **Space**.
- [ ] **Submit the form empty** → an error message appears and is easy to find.
- [ ] Submit a real test entry → confirm the email actually arrives in your inbox.
- [ ] The address fields still work if you just type (don't rely on the Google
      suggestions dropdown).

## 3. Screen reader (VoiceOver on Mac) — turn on with `Cmd+F5`

"VO" = hold **Control + Option**. Watch the on-screen caption box.

- [ ] `VO + U` → **Landmarks**: you hear banner, main, contentinfo (footer).
- [ ] `VO + U` → **Headings**: the outline reads top-down with no odd jumps.
- [ ] `VO + →` through the page — every image either describes itself or is
      silently skipped (decorative); no "image, image, image" with filenames.
- [ ] On the Services button: **`VO + Space`** activates it (not Enter), and you
      hear "expanded."
- [ ] On the contact form, each field announces its **label + "required"**,
      e.g. "Full Name, required, edit text."
- [ ] Turn VoiceOver **off** when done (`Cmd+F5`).

> For legal thoroughness, repeat Section 3 with **NVDA + Firefox on Windows**
> (free from nvaccess.org) — that's what accessibility auditors most often use.

## 4. Visual / zoom

- [ ] **Zoom to 200%** (`Cmd +` five times) — no text is cut off or overlapping.
- [ ] **Zoom to 400%** or narrow the window to ~320px wide — content reflows to a
      single column with **no sideways scrolling**.
- [ ] Turn on **System Settings → Accessibility → Display → Reduce Motion**,
      reload the home page — the hero shows a **still image**, no autoplay video.
- [ ] Text is readable; links in paragraphs are **underlined** (not color-only).

## 5. Quick re-run of the automated scan

- [ ] From the project folder: **`npm run a11y`** → expect "17/17 URLs passed"
      (or 0 violations). Run this after any content or design change.

---

## What's already handled (no need to re-check unless code changes)

Contrast (all AA), form labels, focus outline, skip link, `<main>`/landmarks,
heading order, reduced-motion CSS, keyboard-operable menus, video captions track,
security headers, structured data, redirects, broken links — all verified and green.

## The irreducible human part

Automated tools cover ~40% of WCAG. This checklist covers most of the rest, but
the truest test is a real person who relies on a screen reader using the site to
complete a task (get a quote, find the phone number). For a legally certifiable
report, a firm like Deque, TPGi, or WebAIM does a formal manual audit.
