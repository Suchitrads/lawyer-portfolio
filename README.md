# Aarohi Desai | Advocate · Legal Consultant

## Exact Editorial Lawyer Portfolio Website

This portfolio website is an exact reproduction of the 9-panel editorial lawyer portfolio specification, engineered with **React, TypeScript, Vite, Tailwind CSS, and Lucide icons**, adhering strictly to the monochromatic palette and editorial typography.

---

## 🏛️ Exact Page Specifications Implemented

### 1. PAGE 01 — HOME / LANDING
- **Two-Column Editorial Hero**:
  - **Left**: Small uppercase label `ADVOCATE`, large serif heading `Aarohi Desai`, designation `Lawyer · Legal Consultant`, italic tagline `“Passionate about law. Committed to justice.”`, action buttons `Explore My Profile` & `Let's Connect`, and bottom statistics (`5+ Years of Practice`, `100+ Cases Handled`, `10+ Areas of Expertise`).
  - **Right**: Large grayscale professional portrait framed within the **prominent curved/arched framing**.

### 2. PAGE 02 — ABOUT ME
- **Left**: Large grayscale portrait with the **offset black rectangular decorative frame** behind it, and signature-style name beneath.
- **Right**: Label `ABOUT ME`, heading `An Advocate for What Matters.`, biography, and the three core values with minimal monochrome icons:
  1. *Integrity in Practice*
  2. *Client Focused*
  3. *Research Driven*

### 3. PAGE 03 — AREAS OF EXPERTISE
- **Left**: Large heading `Areas of Practice`, supporting description, and the **grayscale Lady Justice illustration** positioned near the bottom-left.
- **Right**: Clean numbered list with horizontal dividers (strictly not cards):
  - `01 — Civil Litigation`
  - `02 — Criminal Law`
  - `03 — Corporate & Commercial Law`
  - `04 — Family Law`
  - `05 — Intellectual Property Rights`
  - `06 — Constitutional Law`
  - Hover / click reveals the short description and statutory frameworks.

### 4. PAGE 04 — EDUCATION
- **Left**: Heading `Academic Journey`, supporting description, and **grayscale books illustration** at the bottom.
- **Right**: Clean vertical academic timeline with thin vertical line and circular timeline markers (LL.M., LL.B., B.A.).

### 5. PAGE 05 — PROFESSIONAL EXPERIENCE
- **Left**: Heading `Professional Experience`, description, and **grayscale gavel illustration** near the bottom.
- **Right**: Vertical professional timeline (`2023–Present Associate Advocate`, `2021–2023 Legal Associate`, `2019–2021 Legal Intern`).

### 6. PAGE 06 — LICENCES & CERTIFICATIONS
- **Left**: Heading `Licences & Certifications`, description, `View Certificates` button, and **circular legal seal illustration**.
- **Right**: Two document-style credential panels:
  - *Bar Council Registration* (`[BCI/D/2021/XXXX]`, *Bar Council of Delhi*, *18 October 2021*)
  - *Certificate of Practice* (*Bar Council of India*, `[COP-2026-ACTIVE]`)
- Interactive document viewer modal with certificate preview and download.

### 7. PAGE 07 — ACHIEVEMENTS & MILESTONES
- **Left**: Heading `Recognitions & Milestones`, description, and **grayscale decorative botanical illustration** near bottom-left.
- **Right**: Achievement entries with minimal monochrome icons (National Moot Court Winner, Best Research Paper, Published Article, Bar Association Membership).

### 8. PAGE 08 — RESEARCH & PUBLICATIONS
- **Left**: Heading `Research & Publications`, description, and **grayscale stack-of-books illustration** near bottom-left.
- **Right**: Clean horizontal document-style rows with small document icons, titles, journal names, years, and right-facing arrows.

### 9. PAGE 09 — CONTACT
- **Left**: Heading `Let's Connect`, description, contact information (email, phone, chambers location, LinkedIn), and **subtle grayscale architectural illustration** in the background.
- **Right**: Clean enquiry form (Name, Email, Subject, Message, and black `Send Message` button) with proper validation and feedback.

---

## 🎨 Global Design System
- **Colors**:
  - Primary black: `#111111`
  - White: `#FFFFFF`
  - Background: `#FAFAFA`
  - Light grey: `#F1F1F1`
  - Secondary grey: `#777777`
  - Border grey: `#E5E5E5`
- **Typography**:
  - Headings: *Playfair Display* / *Cormorant Garamond* (Editorial Serif)
  - Body: *Inter* / *Manrope* (Clean Sans-Serif)
  - Taglines: Italic Serif
- **Navigation**:
  - Sticky top horizontal navbar with minimal `A.` logo on the left and black `Consultation` button on the right.

---

## ⚙️ Centralized Configuration
All editable content is centralized in:
[`src/config/portfolio.ts`](file:///C:/Users/isfcr/.gemini/antigravity/scratch/lawyer-portfolio/src/config/portfolio.ts)

To modify personal information, statistics, practice areas, timelines, certificates, or contact coordinates, simply update this single configuration file without altering page component code.

---

## 🚀 Running and Previewing

The application is built and running locally at:
**http://localhost:8080**

To build and run locally:
```bash
cd "C:\Users\isfcr\.gemini\antigravity\scratch\lawyer-portfolio"
npm run build
npm run preview
```
