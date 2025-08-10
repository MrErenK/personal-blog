# Modern Personal Blog & Portfolio

A modern, responsive portfolio website and blog platform built with Next.js 15, React, and Tailwind CSS. Features a clean design, dark mode support, and integrated blog functionality with markdown support.

## Features

### Core Features
- 🎨 Modern and responsive design
- 🌓 Light/Dark mode support
- 📱 Mobile-friendly navigation
- ⚡ Server-side rendering for optimal performance
- 📝 Markdown blog support
- 🔍 SEO optimized
- 🎯 TypeScript for type safety

### Blog Features
- 📄 Markdown post support with frontmatter
- 🏷️ Tag-based filtering
- 🔍 Full-text search
- ⏱️ Reading time estimation
- 📑 Table of contents generation
- 🖼️ Image support

### Admin Features
- 🔐 Password-protected admin panel
- ⚙️ Site configuration management
- 📝 Blog post creation and management
- 📊 Documentation section
- 🎨 UI component showcase

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Content:** Markdown with Gray Matter
- **Icons:** Custom icon system

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/MrErenK/personal-blog.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Generate password using the following command:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

5. Configure your environment variables:
```env
SITE_URL=your-site-url
ADMIN_PASSWORD=your-secure-password
GOOGLE_SITE_VERIFICATION=your-google-verification-code (optional)
```

6. Start the development server:
```bash
npm run dev
# or
yarn dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

8. Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin) and log in with your password.

9. Customize your site configuration and create blog posts. You can also access the documentation section and UI component showcase from the admin panel.

10. Use a service like [Real Favicon Generator](https://realfavicongenerator.net/) to generate favicons and replace the files in the `public` and `src` directories.

11. Deploy your site to Vercel, Netlify, or your preferred hosting provider. If you prefer self-hosting, build the site with `npm run build` and serve it with `npm run start` and setup pm2 or similar process manager if you want to keep the server running.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SITE_URL` | Your site's URL | Yes |
| `ADMIN_PASSWORD` | Password for admin panel access | Yes |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification code | No |

### Google Site Verification

To enable Google Search Console verification:

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property (website)
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag (not the whole tag)
5. Add it to your environment variables as `GOOGLE_SITE_VERIFICATION`

The verification meta tag will automatically be added to your site when this environment variable is set.

## Project Structure

```
content
├── blog               # Blog posts (markdown)
src/                  # Source files
├── app/                  # Next.js app router pages
├── components/          # React components
│   ├── admin/          # Admin panel components
│   ├── blog/           # Blog-related components
│   ├── home/           # Homepage components
│   └── ui/             # Reusable UI components
├── config/             # Site configuration
├── content/            # Blog posts (markdown)
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── public/             # Static assets
└── types/              # TypeScript types
```

## Configuration

The site can be configured through the admin panel or by directly editing `src/config/config.tsx`. The configuration includes:

- Site metadata
- Navigation items
- Social media links
- About page content
- Project showcase
- Footer links
- and more...

## Blog Post Format

Create blog posts in `content/blog` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "13 Jan 2025"
description: "Brief description of your post"
tags: ["tag1", "tag2"]
author: "Your Name"
image: "/path/to/image.jpg"
---

Your markdown content here...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)

## Author

MrErenK - [Website](https://www.erensprojects.web.tr)

## Support

If you like this project, please give it a ⭐
