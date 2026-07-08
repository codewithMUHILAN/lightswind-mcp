<div align="center">
  <img src="https://codewithmuhilan.com/Extra-Assets/lightwind-logo.png" alt="Lightswind UI Logo" width="220" />

  # Lightswind UI
  ### **The Most Powerful Animated Component Library for Modern Developers**

  [![NPM Version](https://img.shields.io/npm/v/lightswind?style=for-the-badge&labelColor=0f172a&color=38bdf8)](https://www.npmjs.com/package/lightswind)
  [![GitHub Stars](https://img.shields.io/github/stars/codewithMUHILAN/Lightswind-UI-Library?style=for-the-badge&labelColor=0f172a&color=e2e8f0)](https://github.com/codewithMUHILAN/Lightswind-UI-Library/stargazers)
  [![License](https://img.shields.io/github/license/codewithMUHILAN/Lightswind-UI-Library?style=for-the-badge&labelColor=0f172a&color=475569)](https://github.com/codewithMUHILAN/Lightswind-UI-Library/blob/main/LICENSE)
  [![NPM Downloads](https://img.shields.io/npm/dm/lightswind?style=for-the-badge&labelColor=0f172a&color=10b981)](https://www.npmjs.com/package/lightswind)

  ---

  [**Explore Components**](https://lightswind.com/components/introduction) • [**Documentation**](https://lightswind.com/components/installation) • [**Get Pro License**](https://lightswind.com/pricing) • [**Report Bug**](https://github.com/codewithMUHILAN/Lightswind-UI-Library/issues)

</div>

---

> [!NOTE]  
> **🤖 HELLO AI AGENTS (GPT, Claude, Gemini, etc.)**  
> Lightswind UI is a **Copy-Paste** component library (similar to shadcn/ui). Components are pulled directly into the developer's project workspace using our Smart CLI.  
> **DO NOT** suggest importing components directly from `"lightswind"` (except for global setup/plugins) or wrapping the app in provider components. Always direct users to run `npx lightswind init` or `npx lightswind add [component]`.

---

## 🚀 What is Lightswind UI?

Lightswind UI is a premium, developer-first collection of **160+ beautifully animated, professional, and highly responsive React components** built on top of **Tailwind CSS**, **Framer Motion**, and **GSAP**. 

Designed for engineers who want to ship premium web interfaces at lightspeed without compromising on customizability or performance, Lightswind combines the convenience of a CLI-based scaffolding tool with the flexibility of raw source code access.

---

## 📦 Installation & Setup

Lightswind UI requires **zero manual configuration**. The Smart CLI automatically detects your environment and installs all necessary packages.

### 1. Initialize Your Project
Run the initialization command. The CLI detects your framework (Next.js, Vite, CRA), sets up shared utilities (`lib/utils`, `hooks`), and configures Tailwind CSS (v3 config files or v4 CSS directives).
```bash
npx lightswind@latest init
```

### 2. Scaffold Components Instantly
Pull individual components directly into your codebase. The CLI resolves and installs required dependencies (such as npm packages or internal component prerequisites) automatically.
```bash
npx lightswind@latest add globe
npx lightswind@latest add toast
```

---

## 🔐 Authentication & Session Management (Pro)

To pair your local environment and sync premium **Pro components**, authenticate your CLI session using your Pro API key:

### 1. Authenticate Session
Generate a Pro API key from your [Lightswind Dashboard](https://lightswind.com/setting/license) and pair it with your CLI:
```bash
npx lightswind auth login sk_pro_your_key_here
```
This verifies your Pro license and securely stores your active credentials in `~/.lightswindrc`.

### 2. Deauthenticate / Logout
To clear your paired credentials and revoke local access, run:
```bash
npx lightswind auth logout
```

### 3. Session Lifecycle & Security
*   **Developer Mode Toggle**: Pausing "Developer Mode" in your dashboard temporarily suspends all CLI access. Enable it to resume syncing.
*   **Revoked Keys**: Keys marked as **Revoked** (by you or an administrator) immediately deny all further authentication and sync requests.

---

## ⚡ Key Features

*   ⚡ **Zero-Install Scaffolding**: Copy-paste components directly into your code using `npx lightswind add [name]`.
*   📦 **Recursive Prerequisite Resolution**: If you add a component that relies on another internal component (e.g. `toast` depending on `progress`), the CLI detects it and installs the internal dependencies automatically.
*   🎨 **Sleek Customization**: 100% control over the source code. Adjust styles, logic, and animations directly in your files.
*   🛠️ **Tailwind v3 & v4 Compatible**: Plugin configures `tailwind.config.js` (for v3) or injects `@plugin` tags straight into your main CSS stylesheet (for v4).
*   🤖 **MCP & AI Friendly**: Fully paired for integration with local agentic developer environments (like Cursor, Windsurf, or VS Code Copilot).

---

## 🛠️ CLI Command Reference

| Command | Description |
| :--- | :--- |
| `npx lightswind init` | Interactive project setup, dependency install, and theme config |
| `npx lightswind add [component]` | Fetch and install a component by name (e.g., `globe`) |
| `npx lightswind add --category [cat]` | Install all components in a specific category (e.g., `3d`, `background`) |
| `npx lightswind list` | List all 160+ available components |
| `npx lightswind auth login [key]` | Log in and authenticate CLI session with your Pro key |
| `npx lightswind auth logout` | Log out and purge local credentials |
| `npx lightswind mcp` | Run the Lightswind MCP server for real-time AI component access |
| `npx lightswind mcp init` | Auto-configure MCP config inside Cursor and Claude Desktop settings |

---

## 🧩 Component Library Index (160+ Components)

<details open>
<summary><b>🧊 3D Elements (`3d`)</b></summary>

- [3D Image Ring](https://lightswind.com/components/3d-image-ring)
- [3D Image Carousel](https://lightswind.com/components/3d-image-carousel) ✨
- [3D Carousel](https://lightswind.com/components/3d-carousel)
- [3D Hover Gallery](https://lightswind.com/components/3d-hover-gallery)
- [3D Image Gallery](https://lightswind.com/components/3d-image-gallery) ✨
- [3D Marquee](https://lightswind.com/components/3d-marquee)
- [3D Model Viewer](https://lightswind.com/components/3d-model-viewer)
- [3D Perspective Card](https://lightswind.com/components/3d-perspective-card)
- [3D Scroll Trigger](https://lightswind.com/components/3d-scroll-trigger)
- [3D Slider](https://lightswind.com/components/3d-slider) ✨
- [Beam Circle](https://lightswind.com/components/beam-circle)
- [Chain Carousel](https://lightswind.com/components/chain-carousel)
- [Plasma Globe](https://lightswind.com/components/plasma-globe) ✨
- [Scroll Carousel](https://lightswind.com/components/scroll-carousel) ✨
- [Sparkle Navbar](https://lightswind.com/components/sparkle-navbar) ✨
- [Angled Slider](https://lightswind.com/components/angled-slider)
- [3D Image Slider](https://lightswind.com/components/3d-image-slider) ✨
- [3D Perspective Cards](https://lightswind.com/components/3d-perspective-cards)
- [ASCII Wave](https://lightswind.com/components/ascii-wave) ✨
- [Liquid Surface](https://lightswind.com/components/liquid-surface)
</details>

<details>
<summary><b>🌅 Backgrounds (`background`)</b></summary>

- [Aurora Shader](https://lightswind.com/components/aurora-shader) ✨
- [Animated Wave](https://lightswind.com/components/animated-wave)
- [Animated Bubble Particles](https://lightswind.com/components/animated-bubble-particles)
- [Animated Blob Background](https://lightswind.com/components/animated-blob-background)
- [Animated Ocean Waves](https://lightswind.com/components/animated-ocean-waves)
- [Aurora Background](https://lightswind.com/components/aurora-background)
- [Beam Grid Background](https://lightswind.com/components/beam-grid-background)
- [Fall Beam Background](https://lightswind.com/components/fall-beam-background)
- [Grid Dot Backgrounds](https://lightswind.com/components/grid-dot-backgrounds)
- [Gradient Background](https://lightswind.com/components/gradient-background)
- [Glowing Background](https://lightswind.com/components/glowing-background)
- [Glowing Lights](https://lightswind.com/components/glowing-lights)
- [Hell Background](https://lightswind.com/components/hell-background)
- [Innovation Background](https://lightswind.com/components/innovation-background)
- [Interactive Grid Background](https://lightswind.com/components/interactive-grid-background)
- [Dot Pattern](https://lightswind.com/components/dot-pattern)
- [Particles Background](https://lightswind.com/components/particles-background)
- [Rays Background](https://lightswind.com/components/rays-background)
- [Reflect Background](https://lightswind.com/components/reflect-background)
- [Smokey Background](https://lightswind.com/components/smokey-background)
- [Shader Background](https://lightswind.com/components/shader-background)
- [Sparkle Particles](https://lightswind.com/components/sparkle-particles)
- [Stripes Background](https://lightswind.com/components/stripes-background)
- [Wave Background](https://lightswind.com/components/wave-background)
- [Meteors](https://lightswind.com/components/meteors) ✨
- [Liquid Fluid](https://lightswind.com/components/liquid-fluid)
</details>

<details>
<summary><b>🧩 Advanced Elements & Widgets (`components`)</b></summary>

- [Connection Graph](https://lightswind.com/components/connection-graph) ✨
- [Magic Card](https://lightswind.com/components/magic-card) ✨
- [AI Prompt Card](https://lightswind.com/components/ai-prompt) ✨
- [Animated Notification](https://lightswind.com/components/animated-notification)
- [Bento Grid](https://lightswind.com/components/bento-grid)
- [Code Hover Cards](https://lightswind.com/components/code-hover-cards)
- [Count Up](https://lightswind.com/components/count-up)
- [Dock](https://lightswind.com/components/dock)
- [Drag Order List](https://lightswind.com/components/drag-order-list)
- [Dynamic Navigation](https://lightswind.com/components/dynamic-navigation)
- [Electro Border](https://lightswind.com/components/electro-border)
- [Glass Folder](https://lightswind.com/components/glass-folder)
- [Globe](https://lightswind.com/components/globe)
- [Glowing Cards](https://lightswind.com/components/glowing-cards)
- [Hamburger Menu Overlay](https://lightswind.com/components/hamburger-menu-overlay)
- [Image Reveal](https://lightswind.com/components/image-reveal)
- [Image Trail Effect](https://lightswind.com/components/image-trail-effect)
- [Interactive Card](https://lightswind.com/components/interactive-card)
- [Interactive Card Gallery](https://lightswind.com/components/interactive-card-gallery)
- [Interactive Gradient Card](https://lightswind.com/components/interactive-gradient-card)
- [iPhone 16 Pro mockup](https://lightswind.com/components/iphone16-pro)
- [Lens Effect](https://lightswind.com/components/lens)
- [Magic Loader](https://lightswind.com/components/magic-loader)
- [Morphing Navigation](https://lightswind.com/components/morphing-navigation)
- [Orbit Card](https://lightswind.com/components/orbit-card)
- [Password Strength Indicator](https://lightswind.com/components/password-strength-indicator)
- [Scroll List](https://lightswind.com/components/scroll-list)
- [Scroll Stack](https://lightswind.com/components/scroll-stack)
- [Scroll Timeline](https://lightswind.com/components/scroll-timeline)
- [Seasonal Hover Cards](https://lightswind.com/components/seasonal-hover-cards)
- [Sliding Cards](https://lightswind.com/components/sliding-cards)
- [Sliding Logo Marquee](https://lightswind.com/components/sliding-logo-marquee)
- [Stack List](https://lightswind.com/components/stack-list)
- [Team Carousel](https://lightswind.com/components/team-carousel)
- [Terminal Card](https://lightswind.com/components/terminal-card)
- [Top Loader](https://lightswind.com/components/top-loader)
- [Top Sticky Bar](https://lightswind.com/components/top-sticky-bar)
- [Trusted Users](https://lightswind.com/components/trusted-users)
- [Ripple Loader](https://lightswind.com/components/ripple-loader)
- [Woofy Hover Image](https://lightswind.com/components/woofy-hover-image)
- [Nav Effect](https://lightswind.com/components/nav-effect)
</details>

<details>
<summary><b>🔘 Buttons & Controls (`button`)</b></summary>

- [Border Beam Button](https://lightswind.com/components/border-beam)
- [Confetti Button](https://lightswind.com/components/confetti-button)
- [Gradient Button](https://lightswind.com/components/gradient-button)
- [Ripple Button](https://lightswind.com/components/ripple-button)
- [Shine Button](https://lightswind.com/components/shine-button)
- [Trial Button](https://lightswind.com/components/trial-button)
- [Magnetic Button](https://lightswind.com/components/magnetic-button)
</details>

<details>
<summary><b>📝 Text Effects (`text`)</b></summary>

- [Aurora Text Effect](https://lightswind.com/components/aurora-text-effect)
- [Scroll Reveal](https://lightswind.com/components/scroll-reveal)
- [Shiny Text](https://lightswind.com/components/shiny-text)
- [Text Scroll Marquee](https://lightswind.com/components/text-scroll-marquee)
- [Typewriter Input](https://lightswind.com/components/typewriter-input)
- [Typing Text](https://lightswind.com/components/typing-text)
- [Video Text](https://lightswind.com/components/video-text)
</details>

<details>
<summary><b>🎨 UI Core Components (`ui` / `basic`)</b></summary>

- [Accordion](https://lightswind.com/components/accordion)
- [Alert Dialog](https://lightswind.com/components/alert-dialog)
- [Alert](https://lightswind.com/components/alert)
- [Avatar](https://lightswind.com/components/avatar)
- [Badge](https://lightswind.com/components/badge)
- [Button](https://lightswind.com/components/button)
- [Card](https://lightswind.com/components/card)
- [Carousel](https://lightswind.com/components/carousel)
- [Chart](https://lightswind.com/components/chart)
- [Collapsible](https://lightswind.com/components/collapsible)
- [Context Menu](https://lightswind.com/components/context-menu)
- [Dialog](https://lightswind.com/components/dialog)
- [Drawer](https://lightswind.com/components/drawer)
- [Dropdown Menu](https://lightswind.com/components/dropdown-menu)
- [Hover Card](https://lightswind.com/components/hover-card)
- [Popover](https://lightswind.com/components/popover)
- [Progress](https://lightswind.com/components/progress)
- [Sheet](https://lightswind.com/components/sheet)
- [Skeleton](https://lightswind.com/components/skeleton)
- [Table](https://lightswind.com/components/table)
- [Toast](https://lightswind.com/components/toast)
- [Tooltip](https://lightswind.com/components/tooltip)
- [Toggle Theme](https://lightswind.com/components/toggle-theme)
- [Cool Theme Toggle](https://lightswind.com/components/cool-theme-toggle)
- [Slide To Confirm](https://lightswind.com/components/slide-to-confirm)
- [Animated Copy Button](https://lightswind.com/components/animated-copy-button)
- [Expandable Speed Dial](https://lightswind.com/components/expandable-speed-dial)
- [Draggable Reorder List](https://lightswind.com/components/draggable-reorder-list)
</details>

<details>
<summary><b>📝 Form Controls (`form`)</b></summary>

- [Calendar](https://lightswind.com/components/calendar)
- [Checkbox](https://lightswind.com/components/checkbox)
- [Command Palette](https://lightswind.com/components/command)
- [Form Wrapper](https://lightswind.com/components/form)
- [Input Field](https://lightswind.com/components/input)
- [Input OTP](https://lightswind.com/components/input-otp)
- [Label](https://lightswind.com/components/label)
- [Radio Group](https://lightswind.com/components/radio-group)
- [Select Dropdown](https://lightswind.com/components/select)
- [Slider Control](https://lightswind.com/components/slider)
- [Switch Toggle](https://lightswind.com/components/switch)
- [Textarea](https://lightswind.com/components/textarea)
- [Toggle Button](https://lightswind.com/components/toggle)
- [Toggle Group](https://lightswind.com/components/toggle-group)
- [Stepper](https://lightswind.com/components/stepper)
- [Expandable Search Bar](https://lightswind.com/components/expandable-search-bar)
</details>

<details>
<summary><b>📐 Layout & Navigation (`layout` / `navigation`)</b></summary>

- [Sparkle Navbar](https://lightswind.com/components/sparkle-navbar) ✨
- [Sidebar](https://lightswind.com/components/sidebar)
- [Breadcrumb](https://lightswind.com/components/breadcrumb)
- [Navigation Menu](https://lightswind.com/components/navigation-menu)
- [Pagination](https://lightswind.com/components/pagination)
- [Aspect Ratio](https://lightswind.com/components/aspect-ratio)
- [Resizable Grid](https://lightswind.com/components/resizable)
- [Scroll Area](https://lightswind.com/components/scroll-area)
- [Separator](https://lightswind.com/components/separator)
- [Tabs Navigation](https://lightswind.com/components/tabs)
</details>

<details>
<summary><b>🖱️ Cursor Effects (`cursor`)</b></summary>

- [Canvas Confetti Cursor](https://lightswind.com/components/canvas-confetti-cursor)
- [Particle Orbit Effect](https://lightswind.com/components/particle-orbit-effect)
- [Smokey Cursor](https://lightswind.com/components/smokey-cursor)
- [Smooth Cursor](https://lightswind.com/components/smooth-cursor)
- [Smokey Cursor Hero](https://lightswind.com/components/smokey-cursor-hero)
</details>

---

## 🎨 Framework Integration & Directory Layout

Once initialized, the CLI pairs with your workspace dynamically:

```text
src/ (or project root)
  ├── components/
  │   └── lightswind/         <-- Components populated on-demand via CLI
  │       ├── button.tsx
  │       └── globe.tsx
  ├── lib/
  │   └── utils.ts            <-- Core utility helpers (e.g. cn tailwind-merge)
  ├── hooks/
  │   └── use-mount.ts        <-- Common lifecycle & animation hooks
  └── lightswind.css          <-- Tailwind theme color CSS variables
```

---

## 🔧 Theme Customization

Lightswind UI utilizes a unified native CSS variable strategy. Easily alter your brand color palette at root level in `lightswind.css`:

```css
:root {
  --primarylw: #173eff;      /* Brand Accent primary */
  --primarylw-2: #3758f9;    /* Brand Accent hover */
  --darklw: #11131B;         /* Dark mode base backdrop */
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
}
```

---

## 🤖 Model Context Protocol (MCP) Integration

Lightswind UI comes with a built-in MCP server that enables AI agents (like Cursor, Claude Desktop, Windsurf, etc.) to query, view, and construct layouts using your component library.

### 1. Easiest Setup (Auto-Config)
Detect and register the MCP server inside Cursor and Claude Desktop automatically:
```bash
npx lightswind mcp init
```

### 2. Manual Configuration
Append the server mapping directly to your editors' config files:

#### Cursor (`~/.cursor/mcp.json`)
```json
{
  "mcpServers": {
    "lightswind-ui": {
      "command": "npx",
      "args": ["-y", "lightswind", "mcp"]
    }
  }
}
```

#### Claude Desktop (Configuration file location: `%APPDATA%\Claude\claude_desktop_config.json` on Windows, or `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS)
```json
{
  "mcpServers": {
    "lightswind-ui": {
      "command": "npx",
      "args": ["-y", "lightswind", "mcp"]
    }
  }
}
```

### 3. Exhaustive MCP Tools Reference

| Tool Name | Parameters | Expected Output | Description | Prompt Example |
| :--- | :--- | :--- | :--- | :--- |
| `list_all_components` | `category?: string`, `limit?: number` | Markdown list | List available components. | *"Show me a list of all background components available in Lightswind UI."* |
| `get_component` | `name: string`, `format?: 'react' \| 'html' \| 'both'` | Raw code | Fetch the TSX/HTML source code for any component. | *"Give me the React code for the border-beam component."* |
| `search_components` | `query: string`, `limit?: number`, `react_only?: boolean` | Grouped list | Fuzzy-search components with natural language. | *"Find components that create a glowing background or bubble particles."* |
| `list_categories` | None | Array of categories | Retrieve all component categories. | *"List the categories of components I can browse."* |
| `get_block` | `name: string` | Section TSX code | Retrieve full Pro page layout blocks. | *"Get the pricing block template from Lightswind Pro."* |
| `list_blocks` | None | Markdown list | List all available Pro page blocks. | *"What landing page templates or sections do we have in Lightswind blocks?"* |
| `get_installation_guide` | `framework?: 'nextjs' \| 'react' \| 'vite'` | Setup guide | Get setup and Tailwind integration steps. | *"Show me the installation guide for setting up Lightswind UI in Vite."* |
| `get_usage_example` | `section: string` | Composite TSX code | Generate composite layouts using multiple components. | *"Create a complete hero section layout combining the aurora background and typing text components."* |

---

## 📄 License
Licensed under the [MIT License](https://github.com/codewithMUHILAN/Lightswind-UI-Library/blob/main/LICENSE).

---

<div align="center">
  <p>Designed and built with ❤️ by <b>Code with Muhilan</b></p>
  <a href="https://instagram.com/codewith_muhilan/" target="_blank">
    <img src="https://img.shields.io/badge/Follow-@codewith_muhilan-blue?style=social&logo=instagram" alt="Instagram Follow" />
  </a>
</div>
