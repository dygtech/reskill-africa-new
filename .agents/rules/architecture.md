# Project Architecture Rules

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Scrolling**: Lenis (Smooth Scrolling)

## Directory Structure
- `app/`: Contains all routing, pages, and layouts.
- `components/`: Contains all reusable UI components. 
- `lib/`: Contains utility functions, helpers, and configuration files.
- `public/`: Contains static assets like images and fonts.

## General Guidelines
- Keep components small and focused on a single responsibility.
- Use TypeScript for type safety across the application.
- Prioritize Server Components for better performance. Only use `'use client'` when interactivity, hooks, animations (Framer Motion), or smooth scrolling (Lenis) are required.
