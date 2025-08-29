
# Round Table DTU Website

A modern, community-driven website for Round Table DTU, built with Next.js, TypeScript, and Tailwind CSS. This platform connects developers, designers, and innovators at DTU, showcasing events, guilds, projects, sponsors, and more.

## Features
- **Hero Banner**: Engaging introduction and quick navigation to events and guilds.
- **Events**: Discover and register for workshops, hackathons, and talks.
- **Guilds**: Join specialized groups (Web Dev, AI/ML, Cybersecurity, Design, Robotics, Gaming) and connect with peers.
- **Projects**: Explore and submit open-source, web, mobile, AI/ML, and game projects by community members.
- **Sponsors**: View and connect with our partners supporting innovation and growth.
- **Testimonials**: Read stories from alumni and current members about their experiences.
- **Contact & Join**: Apply to join, share your motivation, and connect via social links.

## Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide Icons**
- **Sonner** (toast notifications)
- **Bun, npm, pnpm, or yarn** (supported)

## Getting Started

1. **Install dependencies**
	```bash
	bun install
	# or
	npm install
	# or
	yarn install
	# or
	pnpm install
	```

2. **Run the development server**
	```bash
	bun dev
	# or
	npm run dev
	# or
	yarn dev
	# or
	pnpm dev
	```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `src/components/` — UI components for sections (HeroBanner, EventsSection, GuildsSection, ProjectsSection, SponsorsSection, TestimonialsSection, FooterJoinContact, etc.)
- `src/app/` — App entry, layout, global styles
- `public/` — Static assets (images, SVGs)
- `backend/` — (Optional) Backend logic or API routes

## Contributing
Pull requests and issues are welcome! Please follow conventional commit messages and ensure your code passes linting and builds.

## License
MIT

## Deploy
Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Credits
Inspired by the DTU tech community. See `/src/components/CoreMembersSection.tsx` for team info.

## Deploy on Render

Instructions for deploying the frontend to Render as a Web Service.

- Build Command:
```bash
npm ci && npm run build
```

- Start Command:
```bash
npm run start
```

Environment variables to set on Render (if applicable):
- `NODE_ENV=production`
- `NEXT_PUBLIC_API_BASE=https://your-api.example.com` (optional — leave blank if app uses hardcoded data or in-app API routes)

Render will provide a `PORT` environment variable; `next start` uses it automatically.
