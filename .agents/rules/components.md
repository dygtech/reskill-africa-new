# Component Guidelines

## Reusable Components
- All shared, reusable UI elements (Buttons, Inputs, Cards, etc.) must be placed in the `components/` directory.
- Avoid duplicating UI code. If an element is used in more than one place, extract it into a reusable component.

## Server vs Client Components
- **Default to Server Components**: Next.js App Router defaults to Server Components. Keep them as Server Components unless interactivity is needed.
- **Client Components**: Add `'use client'` at the very top of the file only when:
  - Using React hooks (`useState`, `useEffect`, etc.)
  - Using Framer Motion (`motion.*` components)
  - Handling user events (e.g., `onClick`, `onChange`)
  - Initializing Lenis for smooth scrolling

## Common Assets
- Maintain a structured hierarchy within the `components/` folder as the project grows (e.g., `components/ui/`, `components/layout/`).
