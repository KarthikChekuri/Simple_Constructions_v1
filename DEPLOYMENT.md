# Simple Constructions - Deployment Guide

## 🚀 Deploy to Cloudflare Pages

### Prerequisites
- Cloudflare account
- Git repository (GitHub, GitLab, etc.)

### Step 1: Build the Project
```bash
npm install
npm run build
```

### Step 2: Deploy to Cloudflare Pages

#### Option A: Via Cloudflare Dashboard
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to "Pages" → "Create a project"
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `simple-constructionsv1`
5. Deploy!

#### Option B: Via Wrangler CLI
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=simple-constructions
```

### Step 3: Configure Form Submission

The contact form is set up to send data to `/api/contact`. You have several options:

#### Option A: Use a Form Service (Recommended)
1. **Formspree**: 
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action in `ContactCTA.tsx`
   - Replace `/api/contact` with your Formspree endpoint

2. **Netlify Forms**:
   - Add `data-netlify="true"` to your form
   - Netlify will automatically handle form submissions

#### Option B: Custom Email Integration
Update the Cloudflare Function (`functions/api/contact.js`) to integrate with:
- SendGrid
- Mailgun
- AWS SES
- Or any email service of your choice

### Step 4: Environment Variables (Optional)
If you add email services, set these in Cloudflare Pages:
- `SENDGRID_API_KEY`
- `EMAIL_TO` (your email address)
- `EMAIL_FROM` (sender email)

### Step 5: Custom Domain (Optional)
1. In Cloudflare Pages dashboard
2. Go to "Custom domains"
3. Add your domain
4. Update DNS settings as instructed

## 📁 Project Structure
```
simple-constructionsv1/
├── components/          # React components
├── public/             # Static assets
├── functions/          # Cloudflare Functions
├── dist/              # Build output
├── _redirects         # URL redirects
└── wrangler.toml      # Cloudflare config
```

## 🔧 Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📧 Form Submission Options

### Quick Setup with Formspree:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update `ContactCTA.tsx`:
```jsx
// Replace the fetch call with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

### Quick Setup with Netlify Forms:
1. Add `data-netlify="true"` to your form
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Deploy to Netlify instead of Cloudflare

## 🎯 Next Steps
1. Deploy to Cloudflare Pages
2. Set up form submission (Formspree recommended for simplicity)
3. Add custom domain
4. Test all functionality
5. Monitor performance and analytics

## 🆘 Troubleshooting
- **Build fails**: Check Node.js version (use 18+)
- **Form not working**: Verify API endpoint and CORS settings
- **Images not loading**: Ensure all images are in `/public/images/`
- **Styling issues**: Check Tailwind CSS build process 