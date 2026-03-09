Quarks UI Components – A Reusable React Component Library  

---

## What is this project?

`Quarks UI Components` is a reusable, accessible React component library designed to help teams build consistent user interfaces quickly. It focuses on **clean API design**, **strong TypeScript typings**, and **a design‑system approach** so that components can be shared across multiple products with minimal setup. The library includes commonly used UI primitives (buttons, inputs, layout components, feedback components, etc.) that are fully themeable and built with modern frontend best practices.

The project was created to showcase how I structure a UI component library end‑to‑end: from design tokens and theming, to component APIs, documentation, testing, and DX (developer experience). It’s intended both as a portfolio project and as a solid base that could be adopted inside a real product codebase.

---

## Tech Stack

- **Core**
  - React 18 (functional components, hooks)
  - TypeScript 5 for static typing, safer refactoring, and better IDE support
- **Build & Tooling**
  - Vite 5 for fast development and optimized library builds
  - TypeScript compiler for type‑checking and build step
  - ESLint for linting and enforcing code quality rules
- **Styling**
  - Tailwind CSS 3 as a utility‑first CSS framework
  - `tailwind-merge` for intelligently merging Tailwind classes
  - Design tokens expressed via Tailwind configuration (colors, spacing, typography, etc.)
- **Documentation & Playground**
  - Storybook 8 (React + Vite) for interactive component documentation and visual testing
  - Chromatic integration for visual regression testing (via `@chromatic-com/storybook`)
- **Testing**
  - Vitest for fast unit and integration tests
  - React Testing Library and Testing Library DOM utilities
  - `@testing-library/jest-dom` for improved DOM matchers

---

## Architecture & Project Structure (High‑Level)

The library is organized to separate **design tokens**, **core primitives**, **composed components**, and **documentation**, making it easy to maintain and extend.

- **High‑Level Architecture**
  - **Design layer**: theme and tokens (colors, typography, spacing, radii, shadows)
  - **Primitive components**: low‑level building blocks (`Box`, `Text`, `Button`, `Input`) that enforce design tokens
  - **Compound components**: higher‑level UI patterns (`Modal`, `Tabs`, `Toast`, `Navbar`) composed from primitives
  - **Docs / Storybook**: consumes the library just like an external app, serving as both documentation and a real integration example

### Architecture Diagram

Conceptual view of how the pieces fit together:

```text
          ┌──────────────────────────┐
          │      Design Tokens       │
          │ (colors, spacing, type) │
          └────────────┬────────────┘
                       │
                       ▼
              ┌────────────────┐
              │     Theme      │
              │  (light/dark,  │
              │   brand vars)  │
              └────────┬───────┘
                       │
                       ▼
        ┌───────────────────────────────┐
        │        Primitive Components   │
        │  (Button, Input, Text, Box)  │
        └──────────────┬────────────────┘
                       │
                       ▼
        ┌───────────────────────────────┐
        │       Compound Components     │
        │ (Modal, Tabs, Toast, Navbar) │
        └──────────────┬────────────────┘
                       │
                       ▼
        ┌───────────────────────────────┐
        │  Docs / Storybook / Consumer  │
        │   Apps (import components)    │
        └───────────────────────────────┘
```

- **Key Architectural Decisions**
  - **Design tokens first**: all components consume tokens instead of hardcoded values, simplifying theming.
  - **Primitives vs. compounds**: primitives are small and generic, compounds handle more complex UX but are still composable.
  - **Type‑safe APIs**: TypeScript is used to define shared prop types and enforce consistency across components.
  - **Library‑first mindset**: docs and examples import components as a consumer would, which helps catch integration issues early.

---

## Key Features & Highlights

- **Reusable, Composable Components**
  - **Consistent API design** across components (similar prop names, patterns for variants and sizes).
  - **Composable patterns** (e.g. `as` prop or wrapper components) so components can be used in different contexts without duplication.

- **Design System & Theming**
  - **Centralized design tokens** for color, spacing, typography, radii, and shadows.
  - **Theming support** so apps can switch or extend themes (e.g. light/dark modes, brand themes).
  - Responsive design baked in via breakpoints and layout primitives.

- **Accessibility‑First**
  - **Semantic HTML** and appropriate ARIA attributes for interactive components (buttons, modals, dialogs, tabs, etc.).
  - **Keyboard navigation and focus management** for modals, menus, tabs, and other complex widgets.
  - Visual **focus states** that are clearly visible and meet contrast guidelines.

- **Performance & DX**
  - Components designed to be **tree‑shakable** so apps only ship what they use.
  - Use of **memoization and stable props** where it meaningfully reduces unnecessary re‑renders.
  - **TypeScript types** exposed to consumers for autocompletion, prop hints, and safer usage.

- **Documentation & Examples**
  - Storybook (or docs app) with **interactive examples**, code snippets, and controls for props.
  - Stories demonstrate **realistic use cases** (forms, layouts, dialogs, notifications) rather than only minimal examples.

---

## Getting Started

### Prerequisites

- **Node.js**: v16+ (or your minimum supported version)
- **Package manager**: npm, yarn, or pnpm

### Installation

```bash
npm install quarks-ui-components
```

To work with the project locally:

```bash
git clone https://github.com/vikaskumar/quarks-ui-components.git
cd quarks-ui-components
npm install
```

### Running the Documentation / Storybook

```bash
# Start the docs / Storybook
npm run storybook
# or if using a docs app
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:6006` for Storybook or `http://localhost:5173` for Vite) to explore the components.

### Basic Usage Example

```tsx
import React from 'react';
import { Button } from "quarks-ui-components";
import "quarks-ui-components/dist/style.css";

export function Example() {
  return (
    <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
```


