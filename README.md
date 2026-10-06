# ISHAAN WORLDLINK LLP — Premium Timber Website

Official website for **ISHAAN WORLDLINK LLP**, a premium timber trading and upcoming teak-processing business based in Gandhidham, Gujarat, India.

## 1. Overview & Pages
This is a high-performance, modern static informational website structured into exactly 4 main pages:

1. **Home (`/`)**: Brand overview, core promise (*“Delivering Timber. Upholding Commitments.”*), 50+ years family legacy & 20+ years experience, timber range overview, and the upcoming teak processing chapter (*“You Specify. We Process.”*).
2. **Our Services (`/our-services`)**: Deep product specifications distinguishing:
   - **Teak**: Round Logs, Rough Squares, Sawn Sizes, plus upcoming Gandhidham processing facility.
   - **Softwood**: Pine, Southern Yellow Pine (SYP), Spruce (Round Logs, Sawn Sizes, Imported KD Planks, Planed Timber, Customized Sizes).
   - **Hardwood**: Meranti, Malaysian Sal, Wana (Round Logs & Sawn Sizes).
3. **About Us (`/about-us`)**: Company history, family roots spanning five decades, hands-on timber agency & trading experience, core quality commitments, and Kandla Timber Association membership.
4. **Contact (`/contact`)**: Commercial enquiry desk and dimensional specification form.

## 2. Visual Identity & Design System
- **Palette**: Clean White dominant canvas (`#FCFCFA`) paired with warm natural wood tones, dark walnut accents, and the official brand green (`#359C52`).
- **Typography**: Cormorant Garamond (Editorial serif for headings) and Plus Jakarta Sans (Clean, high-legibility sans for copy and navigation).
- **Zero-AI Slop**: No generic cartoon wood or bloated animations; authentic timber grain textures, true-to-species coloration, and clean typographic hierarchy.

## 3. Inquiry Form & Static Delivery Configuration
The inquiry form is designed for static site hosting without requiring an application database or backend server.

- **Destination Email**: `info.ishaanworldlink@gmail.com`
- **Configuration**:
  To route submissions to your email via Formspree or Web3Forms:
  1. Register your destination email on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
  2. Set your endpoint URL or access key in `.env`:
     ```env
     VITE_FORM_ENDPOINT="https://formspree.io/f/YOUR_FORM_ID"
     ```
     Or edit the `STATIC_FORM_ENDPOINT` constant in `src/pages/ContactPage.tsx`.

## 4. Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

## 5. Deployment
This website generates pure HTML/JS/CSS assets in the `dist` directory via `npm run build`. It can be deployed to any static host (Cloud Run, GitHub Pages, Vercel, Netlify, Cloudflare Pages, AWS S3).
