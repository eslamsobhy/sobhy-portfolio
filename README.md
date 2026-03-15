# Sobhy Ahmed — Portfolio

A modern, responsive portfolio built with **Next.js**, **Tailwind CSS**, and **GSAP** for animations.

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app runs at **http://localhost:3000** by default.

---

## How to Edit Your Portfolio

All of the portfolio content lives in a single file:

```
src/data/portfolio.ts
```

Open that file, update the values you want, save, and you'll see changes immediately in the browser. No need to touch any component files unless you want to change the layout or styling.

Below is a breakdown of every section and exactly which object to edit.

---

### 1. Site-Wide Config (name, socials, etc.)

**Object:** `siteConfig`

| Field         | What it controls                                      |
| ------------- | ----------------------------------------------------- |
| `name`        | Short name shown in the navbar logo and footer        |
| `fullName`    | Your full name (used in metadata)                     |
| `role`        | Your job title                                        |
| `email`       | Your email address                                    |
| `location`    | Your city/country                                     |
| `bio`         | A short bio (not currently rendered, available for use)|
| `resumeUrl`   | Link to your resume/CV file                           |
| `avatarUrl`   | Path to your avatar image (place file in `public/`)   |
| `socialLinks` | Array of social links — each has `label`, `url`, `icon` (supported icons: `"github"`, `"linkedin"`, `"twitter"`) |

**Example — adding a new social link:**

```ts
socialLinks: [
  { label: "GitHub", url: "https://github.com/your-username", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "linkedin" },
  { label: "Twitter", url: "https://twitter.com/your-handle", icon: "twitter" },
],
```

> To add a new icon type (e.g. Dribbble), you'll also need to add an SVG case in the `SocialIcon` component inside `Hero.tsx`, `Contact.tsx`, and `Footer.tsx`.

---

### 2. Navigation Links

**Object:** `navLinks`

Each item has a `label` (displayed text) and `href` (the section ID to scroll to, prefixed with `#`).

To **add a new section** to the navbar, add an entry here and make sure a corresponding `<section id="your-id">` exists in `page.tsx`.

To **remove a section** from the navbar, just delete its entry from this array.

---

### 3. Hero Section

**Object:** `heroData`

| Field           | What it controls                                  |
| --------------- | ------------------------------------------------- |
| `greeting`      | Small text above your name (e.g. "Hello, I'm")   |
| `name`          | Your big headline name                            |
| `taglines`      | Array of strings that rotate automatically — add or remove as many as you like |
| `description`   | Paragraph below the taglines                      |
| `cta`           | Primary button — `label` (text) and `href` (section to scroll to) |
| `ctaSecondary`  | Secondary button — same structure                 |

---

### 4. About Section

**Object:** `aboutData`

| Field        | What it controls                                          |
| ------------ | --------------------------------------------------------- |
| `title`      | Section heading                                           |
| `subtitle`   | Small label above the heading                             |
| `paragraphs` | Array of strings — each string becomes a paragraph. Add or remove freely. |
| `stats`      | Array of stat cards — each has `label` and `value`        |

**Example — adding a stat:**

```ts
stats: [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Open Source Contributions", value: "50+" }, // new stat
],
```

---

### 5. Skills Section

**Object:** `skillsData`

| Field        | What it controls                         |
| ------------ | ---------------------------------------- |
| `title`      | Section heading                          |
| `subtitle`   | Label above the heading                  |
| `categories` | Array of skill categories (tabs)         |

Each category has:
- `name` — the tab button label
- `skills` — array of `{ name, level }` where `level` is 0–100 (controls the progress bar width)

**Example — adding a category:**

```ts
categories: [
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Python", level: 60 },
    ],
  },
  // ...existing categories
],
```

---

### 6. Experience Section

**Object:** `experienceData`

| Field   | What it controls                    |
| ------- | ----------------------------------- |
| `title` | Section heading                     |
| `subtitle` | Label above the heading          |
| `items` | Array of experience entries         |

Each item has:

| Field          | What it controls                               |
| -------------- | ---------------------------------------------- |
| `id`           | Unique number (used as React key)              |
| `role`         | Your job title                                 |
| `company`      | Company name                                   |
| `period`       | Date range string (e.g. "2022 – 2024")         |
| `description`  | What you did in this role                      |
| `technologies` | Array of tech tag strings                      |

Items are rendered top-to-bottom, so put the most recent first.

---

### 7. Projects Section

**Object:** `projectsData`

| Field   | What it controls                    |
| ------- | ----------------------------------- |
| `title` | Section heading                     |
| `subtitle` | Label above the heading          |
| `items` | Array of projects                   |

Each project has:

| Field          | What it controls                                   |
| -------------- | -------------------------------------------------- |
| `id`           | Unique number                                      |
| `title`        | Project name                                       |
| `description`  | Short description                                  |
| `image`        | Image path (place in `public/projects/`)           |
| `technologies` | Array of tech tag strings                          |
| `liveUrl`      | Link to live demo                                  |
| `githubUrl`    | Link to source code                                |
| `featured`     | `true` = shown by default, `false` = shown after clicking "View All Projects" |

**To add a project**, just push a new object to the array. Set `featured: true` if you want it visible immediately.

---

### 8. Testimonials Section

**Object:** `testimonialsData`

Each testimonial has:

| Field    | What it controls                                      |
| -------- | ----------------------------------------------------- |
| `id`     | Unique number                                         |
| `name`   | Person's name                                         |
| `role`   | Their job title / relationship to you                 |
| `quote`  | The testimonial text                                  |
| `avatar` | Image path (place in `public/testimonials/`). Currently shows the first letter of the name as a fallback. |

The carousel auto-rotates every 6 seconds. Add or remove items freely.

---

### 9. Contact Section

**Object:** `contactData`

| Field        | What it controls                     |
| ------------ | ------------------------------------ |
| `title`      | Section heading                      |
| `subtitle`   | Label above the heading              |
| `email`      | Displayed email + mailto link        |
| `phone`      | Displayed phone + tel link           |
| `location`   | Displayed location text              |
| `formFields` | Array of form fields                 |

Each form field has `name`, `label`, `type` (`"text"`, `"email"`, or `"textarea"`), and `placeholder`.

> The form currently shows a "Message Sent!" confirmation on submit but doesn't actually send anywhere. To connect it to a real backend, edit the `handleSubmit` function in `src/components/Contact.tsx`.

---

### 10. Footer

**Object:** `footerData`

| Field        | What it controls                        |
| ------------ | --------------------------------------- |
| `copyright`  | Copyright text (auto-includes current year) |
| `tagline`    | Small tagline below the logo            |
| `quickLinks` | Array of footer nav links               |

---

## Adding Images

Place images in the `public/` folder:

```
public/
├── avatar.jpg                  ← Your profile photo
├── projects/
│   ├── ecommerce.jpg           ← Project screenshots
│   ├── taskapp.jpg
│   └── ...
└── testimonials/
    ├── sarah.jpg               ← Testimonial avatars
    └── ...
```

Reference them in the data file without the `public/` prefix:

```ts
image: "/projects/my-project.jpg"
```

---

## Removing a Section

1. Delete or comment out the component import and usage in `src/app/page.tsx`
2. Remove its entry from `navLinks` in `src/data/portfolio.ts`

That's it — no other files need to change.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         Root layout (metadata, fonts, global wrapper)
│   ├── page.tsx           Main page — composes all section components
│   └── globals.css        Global styles, scrollbar, selection color
├── components/
│   ├── Navbar.tsx          Sticky nav with scroll spy & mobile menu
│   ├── Hero.tsx            Animated hero with rotating taglines
│   ├── About.tsx           Bio paragraphs + stat cards
│   ├── Skills.tsx          Tabbed skill progress bars
│   ├── Experience.tsx      Timeline with alternating cards
│   ├── Projects.tsx        Project card grid with filter toggle
│   ├── Testimonials.tsx    Auto-rotating testimonial carousel
│   ├── Contact.tsx         Contact form + info cards
│   └── Footer.tsx          Footer with links and socials
└── data/
    └── portfolio.ts        ALL content data — edit this file to update content
```

---

## Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Utility-first styling
- **GSAP** — Scroll-triggered and entrance animations
