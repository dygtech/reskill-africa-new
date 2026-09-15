# Styling & Animation Rules

## Tailwind CSS
- All styling must be done using Tailwind CSS utility classes.
- Avoid writing custom CSS in `.css` files unless absolutely necessary (e.g., complex global animations or specific Lenis overrides).
- Extend the Tailwind theme in `tailwind.config.ts` (or equivalent) for custom colors, fonts, and breakpoints based on the Figma design.

## Smooth Scrolling (Lenis)
- The project uses Lenis for smooth scrolling.
- Ensure Lenis is initialized properly, typically in a global layout or a top-level client component wrapper.
- When creating scroll-linked animations, ensure compatibility with Lenis.

## Animations (Framer Motion)
- Use Framer Motion for complex and micro-animations.
- Components utilizing Framer Motion (`motion.div`, etc.) MUST include the `'use client'` directive at the top of the file.
- Keep animations smooth and performant. Utilize `layout` animations where appropriate.
